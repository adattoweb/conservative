"use client"

import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/main";
import { APP } from "@/constants/constants";
import { DiscordIcon } from "@/UI/Icons";
import { useState } from "react";

interface FeatureProps {
  title: string
  description: string
}

function Feature({ title, description }:FeatureProps){
  return <h3 className="flex flex-col text-2xl md:text-3xl xl:text-4xl font-semibold text-center md:text-start">{title}<p className="text-base xl:text-lg font-normal">{description}</p></h3>
}

export default function IntroBlock() {
    const [isCopied, setIsCopied] = useState(false)
    function copyIP(){
        setIsCopied(true)
        navigator.clipboard.writeText(APP.IP)
        setTimeout(() => {
            setIsCopied(false)
        }, 3000)
    }
    return (
          <div className="flex flex-col gap-9">
              <div className="w-screen pt-24 md:pt-30 lg:pt-37.5 bg-[linear-gradient(45deg,#1A1A1A_0%,#161619_60%,#222222_73%,#151518_87%,#141418_100%)]">
                  <div className="w-(--width,1200px) mx-auto flex flex-col-reverse md:flex-row">
                      <div className="flex flex-col gap-3 mb-10">
                          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">{APP.NAME}</h1>
                          <p className="font-normal text-sm lg:text-base text-[#C7C7C7]">{data.intro.description}</p>
                          <div className="flex gap-3 h-10 md:h-11">
                            <div className="flex items-center gap-2 bg-[#38383A] self-start px-3 rounded-xl h-full cursor-pointer select-none" onClick={copyIP}>
                              <div className="w-3 h-3 rounded-2xl bg-white"></div>
                              <p className="text-base md:text-lg font-medium">{isCopied ? "Скопійовано!" : APP.IP}</p>
                            </div>
                            <Link href={APP.LINKS.DISCORD} className="bg-[#38383A] rounded-xl flex items-center justify-center w-10 md:w-11 h-full">
                              <DiscordIcon className="w-6 md:w-7" color="#fff"/>
                            </Link>
                          </div>
                          <div className="flex gap-6 sm:gap-13 mt-6 sm:mt-10 flex-wrap md:flex-nowrap justify-center md:justify-start">
                            {data.intro.features.map((el, index) => <Feature key={index} title={el.title} description={el.description}/>)}
                          </div>
                      </div>
                      <Image width={500} height={374} className="relative top-5 md:top-auto md:bottom-20 xl:bottom-10 md:left-3 w-80 xl:w-125 self-center md:self-end" src="/images/alex.png" alt="alex" draggable={false}/>
                  </div>
              </div>
            </div>
    );
  }