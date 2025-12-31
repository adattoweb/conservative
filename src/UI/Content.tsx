import type { Content} from "@/types/contentType"
import Image from "next/image"

interface ContentProps {
    data: Content[]
    className?: string
}

export default function ContentBlock({ data, className } :ContentProps){
    if(!className) className = ""
    return <div className={className}>
    {data.map((el, index) => {
        if(el.type === "header") {
            return <h2 key={index} className="text-2xl sm:text-3xl font-semibold break-all">{el.text}</h2>
        } else if(el.type === "paragraph") {
            return <p key={index} className="text-base font-normal text-[#EFEFEF]">{el.text}</p>
        } else if(el.type === "images") {
            return (
                <div key={index} className="grid my-4 gap-3 justify-items-center sm:my-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {el.images.map((picture, index) => {
                        return <Image key={index} className="rounded-sm" width={2000} height={300} src={picture.src} alt={picture.alt || "Зображення"} priority/>
                    })}
                </div>
            )
        } else if(el.type === "unorderedlist") {
            return (
                <ul key={index} className="flex flex-col gap-1 [&>li::marker]:text-[#5865F2] list-disc">
                    {el.items.map((el, index) => {
                        return <li key={index} className="text-base font-light ml-2">{el}</li>
                    })}
                </ul>
            )
        } else if(el.type === "orderedlist") {
            return (
                <ol key={index} className="flex flex-col gap-1 [&>li::marker]:text-[#5865F2]">
                    {el.items.map((el, index) => {
                        return <li key={index} className="text-base font-light ml-2">{el}</li>
                    })}
                </ol>
            )
        }
    })}
    </div>
}