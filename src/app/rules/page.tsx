import { DiscordIcon } from "@/UI/Icons"
import Image from "next/image"
import Link from "next/link"
import RulesList from "./RulesList"
import { data } from "@/data/rules"

export default function Rules(){
    return (
        <div className="flex flex-col gap-9">
            <div className="w-screen pt-24 md:pt-30 lg:pt-37.5 bg-[linear-gradient(45deg,#1A1A1A_0%,#161619_60%,#222222_73%,#151518_87%,#141418_100%)]">
                <div className="w-(--width,1200px) mx-auto flex flex-col-reverse md:flex-row">
                    <Image width={400} height={302} className="relative sm:right-10 lg:right-15 w-70 h-42 lg:w-100 lg:h-60 self-center md:self-end" src="/images/knight.png" alt="knight" draggable={false} />
                    <div className="flex flex-col gap-3 mb-10">
                        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">{data.intro.title}</h1>
                        {data.intro.description.map((el, index) => <p key={index} className="font-normal text-sm lg:text-base text-[#C7C7C7]">{el}</p>)}
                    </div>
                </div>
            </div>
            <div className="w-(--width,1200px) xl:w-[calc(var(--width,1200px)+250px)] mx-auto flex flex-col gap-9">
                <div className="flex flex-col gap-1.5 sm:gap-3 rounded-3xl w-full bg-[url('/images/dungeons.png')] bg-cover bg-no-repeat bg-right box-border py-4 lg:py-6 px-4 sm:px-8 lg:px-12 mx-auto items-start">
                    <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">{data.features.title}</h2>
                    <p className="text-[#EFEFEF] text-xs sm:text-sm md:text-base lg:text-lg font-normal max-w-120">
                        {data.features.description}
                    </p>
                    <Link href={data.features.link} className="bg-[#38383A] p-2 sm:p-3 rounded-lg sm:rounded-xl flex-none flex gap-2 justify-center items-center cursor-pointer duration-200 transition-all hover:bg-[#49494a]" draggable={false}>
                        <DiscordIcon className="w-4 sm:w-6 md:w-7" color="#E8E8E8" />
                        <p className="text-[#E8E8E8] font-medium select-none text-xs sm:text-sm md:text-base">Приєднатись</p>
                    </Link>
                </div>
                <RulesList />
            </div>
        </div>
    )
}