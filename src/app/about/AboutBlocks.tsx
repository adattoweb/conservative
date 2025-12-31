import { data } from "@/data/about"
import AboutBlock from "./AboutBlock"

export default function AboutBlocks(){
    console.log(data)
    return (
        <div className="flex flex-col w-(--width,1200px) mx-auto gap-8 sm:gap-10">
            {data.infoBlocks.map((el, index) => <AboutBlock key={index} index={index} title={el.title} text={el.text} src={el.src}/>)}
        </div>
    )
}