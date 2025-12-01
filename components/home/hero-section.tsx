import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative">
      <MaxWidthWrapper className="relative flex px-15 pt-18">
        <div className="flex-1/2 space-y-5">
          <h1 className="text-5xl leading-tight font-light">
            Happy Reading, <br /> Megumine
          </h1>
          <p className="max-w-80 font-extralight">Menghidupkan kembali minat baca generasi emash</p>
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
        <div className="absolute top-42 right-0 -z-40 size-fit">
          <Image
            src="/megumine.webp"
            alt="megumine"
            width={385}
            height={385}
            className="object-center drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </MaxWidthWrapper>
      {/* <div className="absolute top-0 -z-50 h-90 w-full rounded-bl-[80px] bg-red-200/70" /> */}
      {/* <div className="absolute top-0 -z-50 h-[22rem] w-full rounded-bl-[100px] bg-gradient-to-br from-red-300/60 via-orange-200/50 to-transparent blur-2xl" /> */}
      <div className="absolute top-0 -z-50 h-[24rem] w-full rounded-bl-[120px] bg-gradient-to-r from-red-400/80 via-orange-300/70 to-yellow-100/50" />
    </section>
  );
}
