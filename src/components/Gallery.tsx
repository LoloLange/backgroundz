import { useState } from "react";
import type { Bg, Extra } from "../pages/[id].astro";

export const Gallery = ({ bg }: { bg: Bg }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const { id, img, extras } = bg;

  return (
    <section className="px-10 min-[600px]:px-20 min-[800px]:px-32 min-[1000px]:px-44 min-[1300px]:px-56 min-[1500px]:px-0 py-8 min-[500px]:py-12 flex flex-col items-center">
      <img
        className="rounded-[20px] min-[1500px]:w-[1000px] min-[2000px]:w-[1500px]"
        src={hovered === null ? img.src : extras[hovered].img.src}
        alt={"#" + id + " background"}
      />
      <div className="flex overflow-x-auto gap-5 mt-4 min-[500px]:mt-8 pb-3 min-[1500px]:w-[1000px] min-[2000px]:w-[1500px]" onMouseLeave={() => setHovered(null)}>
        {extras.map((extra: Extra, i) => (
          <img
            key={i}
            id={i.toString()}
            onMouseEnter={() => setHovered(i)}
            src={extra.img.src}
            className="rounded-lg w-[150px] min-[1000px]:w-[200px] min-[1500px]:w-[250px] cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
};
