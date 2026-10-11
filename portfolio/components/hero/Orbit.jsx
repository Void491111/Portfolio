import Image from "next/image";
import OrbitRing from "./OrbitRing";
import OrbitCard from "./OrbitCard";
import { ORBIT } from "@/config/orbit";

export default function Orbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[400px]">
      <div className="absolute inset-0">
        {ORBIT.rings.map(function renderRing(ring) {
          return <OrbitRing key={ring.id} ring={ring} />;
        })}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={ORBIT.avatar.src}
            alt={ORBIT.avatar.alt}
            width={ORBIT.avatar.size}
            height={ORBIT.avatar.size}
            priority
            className="size-24 rounded-full border border-neutral-200 object-cover shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:size-32"
          />
        </div>
      </div>
      {ORBIT.cards.map(function renderCard(card) {
        return <OrbitCard key={card.id} card={card} />;
      })}
    </div>
  );
}
