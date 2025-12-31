"use client"

import { ChevronRight } from "@/UI/Icons"
import { useState } from "react"

interface AccordionProps {
    title: string
    content: string
}

export default function Accordion({ title, content }:AccordionProps){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex flex-col bg-[#121214] rounded-2xl p-4 md:p-5 lg:p-6 cursor-pointer transition-all ease-in duration-150" onClick={() => setIsOpen(prev => !prev)}>
            <div className="flex justify-between items-center">
                <p className="text-sm sm:text-base font-normal text-[#C7C7C7] select-none">{title}</p>
                <ChevronRight className={`w-4 h-4 sm:w-6 sm:h-6 transition-all ease-in duration-150 ${isOpen ? "rotate-90" : ""}`} strokeWidth="2" color="#5865F2"/>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 mt-4" : "max-h-0"}`}>

            </div>
            {isOpen && <p className="text-base font-normal text-[#C7C7C7]">{content}</p>}
        </div>
    )
}
