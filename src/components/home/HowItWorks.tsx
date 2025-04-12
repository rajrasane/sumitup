import { BrainCircuit, FileOutput, FileText } from "lucide-react"
import { ReactNode } from "react"

type Step = {
    icon : ReactNode,
    label : string,
    description : string,
}

const steps : Step[] = [
    {
        icon : <FileText size={64} strokeWidth={1.5}/>,
        label : "Upload your PDF", 
        description : "Simply drag and drop your PDF document or click to upload" 
    },
    {
        icon : <BrainCircuit size={64} strokeWidth={1.5}/>,
        label : "AI Analysis", 
        description : "Our advanced AI processes and analyzes your document instantly" 
    },
    {
        icon : <FileOutput size={64} strokeWidth={1.5}/>,
        label : "Get Summary", 
        description : "Receive a clear, concise summary of your document" 
    },
]

function StepItem({icon,label,description} : Step ){
    return <div className="relative p-6 rounded-2xl bg-white border border-gray-200 group w-full">
        <div className="flex flex-col gap-4 h-full">
            <div className="flex items-center justify-center size-24 mx-auto rounded-2xl bg-rose-50">
                <div className="text-rose-500">{icon}</div>
            </div>
            <div className="flex flex-col flex-1 gap-1 justify-between">
                <h4 className="text-center font-bold text-xl">{label}</h4>
                <p className="text-center text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    </div>
}

export default function HowItWorksSection() {
    return(
        <section className="relative bg-gray-50">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center space-y-4">
                    <h2 className="text-3xl font-bold">How It Works</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Transform your PDFs into concise summaries in just three simple steps
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
                        {steps.map((step, index) => (
                            <StepItem key={index} {...step} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}