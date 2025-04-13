export default function Heading({text,textafterhighlight, highlightText,wantH1}: {text: string, textafterhighlight?: string, highlightText: string,wantH1?: boolean}) {
    return (
        <>
        {
            wantH1 ? (
                <h1 className="font-bold py-6 text-center">
                    {text} {' '}
                    <span className="relative inline-block">
                        <span className="relative z-10 px-2">{highlightText}</span> 
                        <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden="true"></span>
                    </span>{' '}
                    {textafterhighlight}
                </h1>
            ):
            (
                <>
                    {text} {' '}
                    <span className="relative inline-block">
                        <span className="relative z-10 px-2">{highlightText}</span> 
                        <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden="true"></span>
                    </span>{' '}
                    {textafterhighlight}
                </>
            )
        }
        
        </>
        

    )
}
