'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UploadFormInput({onSubmit} : {onSubmit : (e : React.FormEvent<HTMLFormElement>)=> void}) {
    return (
        <div>
            <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                <div className="flex justify-end items-center gap-1.5">
                    <Input id="file" type="file" name="file" accept="application/pdf" required className="border border-dashed"/>
                    <Button>Upload your PDF</Button>
                </div>
            </form>
        </div>
    )
}
