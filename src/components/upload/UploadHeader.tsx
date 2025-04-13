import AIPoweredButton from "../common/AIPoweredButton"
import Heading from "../common/Heading"
import SubHeading from "../common/SubHeading"

export default function UploadHeader() {
    return (
        <div className="flex flex-col gap-6 items-center justify-center text-center">
            <AIPoweredButton text="AI Powered Content Creation" className="transform-colors" dclassName="bg-gradient-to-r "/>
            <div className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <Heading text="Start Uploading" highlightText=" Your PDF&apos;s"/>
            </div>
            <SubHeading text="Upload your PDF and let our AI do the magic ✨" wantH2={false} className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center"/>
        </div>
    )
}
