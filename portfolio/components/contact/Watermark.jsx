import Reveal from "@/components/ui/Reveal";

export default function Watermark({ text }) {
  return (
    <Reveal className="pointer-events-none mt-16 select-none">
      <p
        aria-hidden
        className="translate-y-[18%] whitespace-nowrap bg-linear-to-b from-neutral-200 to-transparent bg-clip-text text-center text-[15vw] font-semibold leading-none tracking-tighter text-transparent"
      >
        {text}
      </p>
    </Reveal>
  );
}
