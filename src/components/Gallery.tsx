import { useEffect, useState } from "react";
import type { Bg, Extra } from "../pages/[id].astro";

export const Gallery = ({ bg }: { bg: Bg }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const { id, img, extras } = bg;
  const { src } = img;

  return (
    <section className="px-32 min-[1200px]:px-[300px] py-12">
      <img
        className="rounded-[20px]"
        src={hovered === null ? src : extras[hovered].img.src}
        alt={"#" + id + " background"}
      />
      <div className="flex overflow-x-auto gap-5 mt-8" onMouseLeave={() => setHovered(null)}>
        {extras.map((extra: Extra, i) => (
          <img
            id={i.toString()}
            onMouseEnter={() => setHovered(i)}
            src={extra.img.src}
            className="rounded-lg w-[200px] cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
};
