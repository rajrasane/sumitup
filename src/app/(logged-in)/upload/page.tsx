import UploadHeader from "@/components/upload/UploadHeader";
import UploadForm from "@/components/upload/UploadForm";
export default function Page() {
    return(
        <section className="min-w-screen">
            {/* <BgGradient /> */}
            <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
                <div className="flex flex-col gap-6 items-center justify-center text-center">
                    <UploadHeader />
                    <UploadForm />
                </div>
            </div>
        </section>
    )
}