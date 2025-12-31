import { data, InfoBlock } from "@/data/about";
import Image from "next/image";

interface AboutBlock extends InfoBlock {
    index: number
}

export default function AboutBlock({ index, title, text, src }:AboutBlock){
    const isLast = index + 1 === data.infoBlocks.length
    return (
        <div className="flex w-full sm:border-0 rounded-2xl">
            <div className="flex flex-col">
                <div className="text-base sm:text-xl min-w-8 min-h-8 sm:min-w-10 sm:min-h-10 rounded-xl border-white border flex justify-center items-center text-white mix-blend-difference">{index+1}</div>
                <div className={`w-0.5 bg-[#afafaf] mx-auto ${isLast ? "h-0" : "min-h-full"}`}></div>
            </div>
            <div className="flex flex-col md:flex-row flex-1 bg-[#16161A] ml-3 sm:ml-5 md:ml-10 rounded-2xl">
                {src && <Image className="rounded-t-2xl md:rounded-l-2xl md:rounded-t-none w-full md:h-full" width={500} height={300} src={src} alt={title} priority/>}
                <div className="flex flex-col box-border p-4 sm:p-6 max-h-full overflow-hidden">
                    <h2 className="font-semibold text-lg sm:text-xl xl:text-2xl">{title}</h2>
                    {text.map((el, index) => <p key={index} className="text-[#C7C7C7] text-sm xl:text-base font-normal">{el}</p>)}
                </div>
            </div>
        </div>
    )
}