import Image from "next/image"
import { data } from "@/data/main"
import Link from "next/link"
import { EnterIcon } from "@/UI/Icons"
import Accordion from "./Accordion"

export default function InfoBlock(){
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col border rounded-3xl border-[#2a2a30] md:w-[40%] bg-[#16161A] h-fit">
                <div className="bg-cover bg-center w-full h-40 rounded-t-3xl" style={{backgroundImage: `url(${data.info.about.image})`}}></div>
                <div className="flex flex-col ml-10 gap-4 pb-4 relative bottom-6">
                    <Image className="bg-[#1E1E24] p-2 outline-3 md:outline-4 outline-[#161619] rounded-2xl w-12 h-12 md:w-15 md:h-15" width={60} height={60} src="/images/book.png" alt="book"/>
                    <h3 className="text-[#5865F2] text-xl md:text-2xl xl:text-3xl font-medium">{data.info.about.title}</h3>
                    <p className="text-base xl:text-lg text-[#C7C7C7] font-normal pr-3">{data.info.about.description}</p>
                    <Link href="/about" className="flex gap-2 md:gap-3 items-center mt-auto">
                        <p className="text-[#5865F2] font-normal text-sm md:text-base">ЧИТАТИ ДАЛІ</p>
                        <EnterIcon className="w-6 h-6" strokeWidth="2" color="#5865F2"/>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col flex-1 border rounded-3xl border-[#2a2a30] bg-[#16161A] p-5 sm:p-8 md:p-10 box-border h-fit">
                <h3 className="flex text-[#5865F2] text-xl md:text-2xl xl:text-3xl font-medium items-center gap-6 xl:gap-10">
                    <Image className="bg-[#1E1E24] p-2 outline-3 md:outline-4 outline-[#5865F2] rounded-2xl shadow-[0_0_30px_rgba(88,101,242,0.25)] w-12 h-12 md:w-15 md:h-15" width={60} height={60} src="/images/book.png" alt="book"/>
                    ЧАСТІ ПИТАННЯ
                </h3>
                <div className="flex flex-col mt-6 gap-5">
                    {data.info.quetions.map((el, index) => <Accordion key={index} title={el.title} content={el.content}/>)}
                </div>
            </div>
        </div>
    )
}