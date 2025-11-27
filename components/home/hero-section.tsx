import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { BookOpenText, MoveUpRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="hero">
            <MaxWidthWrapper className="flex py-18 px-5">
                <div className="flex-1/2 space-y-5 ">
                    <h1 className="font-light text-5xl leading-tight">Happy Reading, <br /> Megumine</h1>
                    <p className="max-w-80 font-extralight">Semangat membaca, literasi itu lebih penting dari pada MBG. Menyayangi megumine adalah aku.</p>
                    <Button className="rounded-full">
                        Start Reading
                        <MoveUpRight />
                    </Button>
                </div>
                <div className="flex-1/2 items-center space-y-2 flex flex-col justify-center">
                    <div className="relative">
                        <BookOpenText strokeWidth={1} size={200} className="rotate-20" />
                        <BookOpenText strokeWidth={0.5} size={200} className="rotate-20 absolute top-3 left-1 -z-10" />
                    </div>
                    <blockquote className="italic">
                        “Jembatan Adalah Ilmu”
                    </blockquote>
                    <cite className="block -mt-0.5 text-sm text-muted-foreground">
                        - Megumine
                    </cite>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}