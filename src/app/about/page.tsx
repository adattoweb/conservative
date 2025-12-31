import Image from "next/image"
import { data } from "@/data/about"
import AboutBlocks from "./AboutBlocks"

export default function About() {
    return (
        <div className="flex flex-col gap-9">
            <div className="w-screen pt-24 md:pt-30 lg:pt-37.5 bg-[linear-gradient(45deg,#1A1A1A_0%,#161619_60%,#222222_73%,#151518_87%,#141418_100%)]">
                <div className="w-(--width,1200px) mx-auto flex flex-col-reverse md:flex-row gap-10">
                    <Image width={400} height={302} className="relative w-70 h-42 lg:w-100 lg:h-60 self-center md:self-end" src="/images/knight.png" alt="knight" draggable={false} priority/>
                    <div className="flex flex-col gap-3 mb-10">
                        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">{data.intro.title}</h1>
                        {data.intro.description.map((el, index) => <p key={index} className="font-normal text-sm lg:text-base text-[#C7C7C7]">{el}</p>)}
                    </div>
                </div>
            </div>
            <AboutBlocks/>
        </div>
    )
}