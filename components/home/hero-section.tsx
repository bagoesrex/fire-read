import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { BookOpenText, MoveUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative">
      <MaxWidthWrapper className="flex px-15 py-18">
        <div className="flex-1/2 space-y-5">
          <h1 className="text-5xl leading-tight font-light">
            Happy Reading, <br /> Megumine
          </h1>
          <p className="max-w-80 font-extralight">
            Semangat membaca, literasi itu lebih penting dari pada MBG. Menyayangi megumine adalah
            aku.
          </p>
          <Button className="rounded-full">
            Start Reading
            <MoveUpRight />
          </Button>
        </div>
        <div className="flex flex-1/2 flex-col items-center justify-center space-y-2">
          <div className="relative">
            <BookOpenText strokeWidth={1} size={200} className="rotate-20" />
            <BookOpenText
              strokeWidth={0.5}
              size={200}
              className="absolute top-3 left-1 -z-10 rotate-20"
            />
          </div>
          <blockquote className="italic">“Jembatan Adalah Ilmu”</blockquote>
          <cite className="text-muted-foreground -mt-0.5 block text-sm">- Megumine</cite>
        </div>
      </MaxWidthWrapper>
      <div className="absolute top-0 -z-50 h-full w-full rounded-bl-[80px] bg-red-300" />
    </section>
  );
}
