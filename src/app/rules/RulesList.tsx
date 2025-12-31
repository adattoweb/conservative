"use client"

import ContentBlock from "@/UI/Content"
import { Content, rules } from "@/data/rules"
import Image from "next/image"

const rightIndexes:number[] = []
const columnIndexes:number[] = []

function generateAreas(len: number){
    let rulesWithSection = Math.floor((len - 1) / 3) // (!) скільки залишилось згенерувати блоків з секцією
    let areas = `'a0 a0 a0'`
    let isRightSection = true
    let isRightRule = true

    for(let i = 1; i < len; i++){
        if(rulesWithSection > 0){
            rulesWithSection -= 1
            if(isRightSection) areas += `'a${i} a${i} a${i+1}''a${i+2} a${i+2} a${i+1}'`
            else areas += `'a${i+1} a${i} a${i}''a${i+1} a${i+2} a${i+2}'`
            columnIndexes.push(i+1)
            isRightSection = !isRightSection
            if(isRightRule) rightIndexes.push(i)
            i += 2
        } else {
            areas += `'a${i} a${i} a${i}'`
            if(isRightRule) rightIndexes.push(i)
            isRightRule = !isRightRule
        }
    }
    return areas
}

const areasClassName = generateAreas(rules.length)
export default function RulesList(){
    return (
        <div className={`flex flex-col xl:grid grid-cols-3 w-full mx-auto gap-6 md:gap-10`} style={{gridTemplateAreas: areasClassName}}>
            {rules.map((el, index) => <Rule key={index} index={index} title={el.title} src={el.src} content={el.content}/>)}
        </div>
    )
}

interface RuleProps {
    index: number
    title: string
    src: string
    content: Content[]
}

function Rule({ index, title, src, content }:RuleProps){
    return (
        <div className={`bg-[#16161A] border border-[#2A2A30] rounded-4xl flex flex-col md:flex-row justify-between box-border py-7 px-9 xl:py-10 xl:px-11 gap-10 md:gap-12 xl:gap-15 ${columnIndexes.includes(index) ? "xl:flex-col!" : ""} ${rightIndexes.includes(index) ? "xl:flex-row-reverse" : ""}`} style={{gridArea: `a${index}`}}>
            <Image width={250} height={290} alt={title} src={src} className="self-center w-50 xl:w-40 2xl:w-50"/>
            <div className="flex flex-col">
                <h3 className="text-[#5865F2] text-1xl sm:text-2xl 2xl:text-3xl font-bold">{title}</h3>
                <ContentBlock data={content}/>
            </div>
        </div>
    )
}