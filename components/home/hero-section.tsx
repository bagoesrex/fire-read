import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative">
      <MaxWidthWrapper className="relative flex px-15">
        <div className="flex-1/2 space-y-5">
          <h1 className="text-5xl leading-tight font-light">
            Happy Reading, <br /> Megumine
          </h1>
          <p className="max-w-80 font-extralight">
            Menghidupkan kembali minat baca generasi emash
          </p>
        </div>
        <div className="flex flex-1/2 flex-col items-center justify-center space-y-2">
          {/* <div className="relative">
            <BookOpenText strokeWidth={1} size={200} className="rotate-20" />
            <BookOpenText
              strokeWidth={0.5}
              size={200}
              className="absolute top-3 left-1 -z-10 rotate-20"
            />
          </div>
          <blockquote className="italic">“Jembatan Adalah Ilmu”</blockquote>
          <cite className="text-muted-foreground -mt-0.5 block text-sm">- Megumine</cite> */}
        </div>
        <div className="absolute size-fit right-0 top-36 -z-40">
          <Image
            src="/megumine.webp"
            alt="megumine"
            width={385}
            height={385}
            className="object-center drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          />

        </div>
      </MaxWidthWrapper>
      <div className="absolute top-0 -z-50 h-90 w-full rounded-bl-[80px] bg-red-200/70" />
    </section>
  );
}
