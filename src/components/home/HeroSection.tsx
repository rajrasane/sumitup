import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import AIPoweredButton from "../common/AIPoweredButton";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
export default function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 lg:px-12 max-w-7xl">
        
        <AIPoweredButton text="Powered by AI" />

        <Heading text="Transform PDFs into" textafterhighlight="summaries" highlightText="concise" wantH1={true}/>

        <SubHeading text="Get a beautiful summary reel of the document in seconds." wantH2={true} className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600"/>
        
        <Link href="/#pricing">
            <Button 
                variant={'link'}
                className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-gradient-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg"
            >
                <div className="flex gap-2 items-center">
                    <span>Try SumItUp</span>
                    <ArrowRight />
                </div>
            </Button>
        </Link>

    </section>
  )
}