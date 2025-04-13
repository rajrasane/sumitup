import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export default function AIPoweredButton({text, className,dclassName}: {text: string, className?: string,dclassName?: string}) {
    return (
        <div className={cn("relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 group", dclassName)}>
            <Badge 
                variant={'secondary'}
                className={cn("relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50", className)}
            >
                <Sparkles className="!w-6 !h-6 mr-2 text-rose-600"/>
                <p className="text-base text-rose-600">{text}</p>
                
            </Badge>
        </div>
    )
}
