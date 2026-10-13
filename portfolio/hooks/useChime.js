"use client";
import { useRef } from "react";
import { CHIME } from "@/config/chime";

export function useChime() {
  const contextRef = useRef(null);

  function getContext() {
    if (contextRef.current) return contextRef.current;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    contextRef.current = new AudioContextClass();
    return contextRef.current;
  }

  function playNote(context, note) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const startAt = context.currentTime + note.start;

    oscillator.type = CHIME.type;
    oscillator.frequency.setValueAtTime(note.frequency, startAt);

    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.linearRampToValueAtTime(CHIME.volume, startAt + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + note.duration);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(startAt);
    oscillator.stop(startAt + note.duration + 0.02);
  }

  function play() {
    try {
      const context = getContext();
      if (!context) return;
      if (context.state === "suspended") context.resume();
      CHIME.notes.forEach(function playEachNote(note) {
        playNote(context, note);
      });
    } catch {
      return;
    }
  }

  return play;
}
