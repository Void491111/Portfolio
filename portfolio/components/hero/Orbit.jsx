import OrbitRing from "./OrbitRing";
import OrbitCard from "./OrbitCard";
import Mark from "@/components/ui/Mark";
import { ORBIT } from "@/config/orbit";

export default function Orbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[400px] xl:max-w-[470px]">
      <div className="absolute inset-0">
        {ORBIT.rings.map(function renderRing(ring) {
          return <OrbitRing key={ring.id} ring={ring} />;
        })}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Mark variant="line" animated className="size-24 text-neutral-950 sm:size-32 xl:size-40" />
        </div>
      </div>
      {ORBIT.cards.map(function renderCard(card) {
        return <OrbitCard key={card.id} card={card} />;
      })}
    </div>
  );
}

