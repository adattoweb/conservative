"use client"

import { useState } from "react"
import Image from "next/image"
import { wposts } from "@/data/wiki"
import Link from "next/link"

interface VariantProps {
    url: string
    name: string
    description: string
    icon: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const posts = wposts.flatMap(el => el.posts)
const variants = posts.map(el => ({
    url: el.url,
    name: el.name,
    description: el.description,
    icon: el.icon
}))

function Variant({ url, name, description, icon, setValue }:VariantProps){
    return (
        <Link href={`/wiki/${url}`} className="hover:bg-[#343434] box-content py-1.5 px-2.5 rounded-xl cursor-pointer flex gap-3 items-center" onClick={() => setValue("")} draggable={false}>
            <Image width={28} height={28} src={icon} alt={name} className="w-7 h-7" draggable={false} priority/>
            <div className="flex flex-col">
                <h5 className="text-base">{name}</h5>
                <p className="text-sm text-[#cbcbcb] max-h-15 overflow-hidden">{description}</p>
            </div>
        </Link>
    )
}

export default function Input() {
    const [value, setValue] = useState("")
    const filteredVariants = variants.filter(el => {
        const words = value.split(" ").filter(el => el.length > 0)
        console.log(words)
        const desc = el.description.toLowerCase()
        return words.some(word => desc.includes(word.toLowerCase())) || el.name.toLowerCase().includes(value.toLowerCase())
    })
    return (
        <div className="flex flex-col gap-2 w-full min-[400px]:w-65 min-[460px]:w-70 sm:w-80">
            <div className="flex items-center bg-[#1D1D1D] border border-[#303030] rounded-xl h-10 px-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Пошук за ключовим словом" className="bg-transparent border-none outline-none text-[16px] placeholder:text-[#C3C3C3] font-light w-full placeholder:text-xs min-[400px]:placeholder:text-sm" />
            </div>
            {value.length > 0 && <div className="bg-[#1D1D1D] rounded-xl absolute w-(--width,1200px) min-[400px]:w-65 min-[460px]:w-70 sm:w-80 box-border mt-13 border border-[#303030] max-h-80 overflow-x-scroll">
                {filteredVariants.length === 0 ? <p className="text-sm font-light p-2">На жаль, тут нічого немає</p> :
                filteredVariants.map(el => <Variant key={el.url} url={el.url} name={el.name} description={el.description} icon={el.icon} setValue={setValue}/>)}
            </div>}
        </div>
    )
}