"use client";
import { useLocalTime } from "@/hooks/useLocalTime";
import { FOOTER } from "@/config/footer";

export default function LocalTime() {
  const time = useLocalTime(FOOTER.timeZone, FOOTER.clockIntervalMs);
  return (
    <p className="font-mono text-neutral-600">
      {FOOTER.city} {"\u00b7"} {time ?? "--:--"} {FOOTER.zoneName}
    </p>
  );
}
