import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Sparkles } from "lucide-react";
import CustomBadge from "../ui/custom-badge";

export default function HeroSection() {
  return (
    <section id="hero" className="relative">
      <MaxWidthWrapper className="relative flex rounded-bl-[40px] bg-gray-400 px-15 pt-18 pb-18">
        <div className="space-y-2">
          <CustomBadge icon={Sparkles} label={"Welcome back to FireRead"} />
          <h1 className="text-5xl leading-13 font-semibold text-white">
            Discover Your Next <br /> <span className="text-orange-300">Great Day</span>
          </h1>
          <p className="max-w-120 font-extralight text-white">
            Explore thousands of books, ask questions, and connect with readers from around the
            world.
          </p>
        </div>
        {/* <div className="flex flex-1/2 flex-col items-center justify-center space-y-2">
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
        </div> */}
        {/* <div className="absolute top-36 right-0 z-40 size-fit">
          <Image
            src="/megumine.webp"
            alt="megumine"
            width={385}
            height={385}
            className="object-center drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div> */}
      </MaxWidthWrapper>
    </section>
  );
}
