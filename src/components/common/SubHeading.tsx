export default function SubHeading({text,wantH2,className}: {text: string, wantH2?: boolean, className?: string}) {
    return (
        <>
            {
                wantH2 ? (
                    <h2 className={className}>
                        {text}
                    </h2>
                )
                :
                (
                    <p className={className}>
                        {text}
                    </p>
                )
            }
        </>
    )
}
