import { categoriesMap, INews } from "@/data/news"
import Image from "next/image"
import Link from "next/link"

const columnIndexes: number[] = []

function generateAreas(len: number){
    let areas = `'a0 a0 a0 a0'`

    const isEven = len % 2 === 0

    for(let i = 1; i < len; i++){
        if(i === len - 1 && isEven){
            areas += `'a${i} a${i} a${i} a${i}'`
        } else {
            areas += `'a${i} a${i} a${i+1} a${i+1}'`
            columnIndexes.push(i, i+1)
            i++
        }
    }
    return areas
}

interface BlockProps extends INews {
    index: number
}

function NewsBlock({ index, url, title, description, image, categories, content, author, authorIcon, date }:BlockProps){
    const formatted = new Intl.DateTimeFormat("uk-UA", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(date)
    const letters = content.reduce((total, el) => {
        if(el.type === "paragraph") return total + el.text.length
        return total
    }, 0)

    const time = Math.ceil(letters / 700)
    const isColumn = columnIndexes.includes(index)
    
    return (
        <Link href={`/news/${url}`} className={`flex ${isColumn ? "md:flex-col!" : ""} flex-col md:flex-row border border-[#2A2A30] bg-[#16161A] rounded-3xl min-h-30`} style={{gridArea: `a${index}`}} draggable={false}>
            <Image width={600} height={370} src={image} alt={title} className={` ${!isColumn ? "md:rounded-l-3xl" : "md:rounded-t-3xl"} rounded-t-3xl md:rounded-none w-full ${isColumn ? "md:h-full" : "md:w-80 lg:w-100 xl:w-120 2xl:w-130"}`} draggable={false}/>
            <div className="flex flex-col py-4 sm:py-6 px-4 min-[360px]:px-6 sm:px-8">
                <h3 className="text-[#ffffff] text-lg min-[360px]:text-xl sm:text-2xl font-semibold">{title}</h3>
                <div className="flex gap-3 flex-wrap">{categories.map((el, index) => <p key={index} className="font-medium text-sm min-[360px]:text-base sm:text-lg" style={{color: categoriesMap.get(el)}}>{el}</p>)}</div>
                <p className={`text-[#CFCFCF] text-sm min-[360px]:text-base font-normal overflow-y-hidden ${isColumn ? "" : "md:max-h-30"}`}>{description}</p>
                <div className="flex flex-col items-start gap-3 min-[460px]:flex-row min-[460px]:justify-between mt-auto min-[460px]:items-end pt-3">
                    <div className="flex gap-2.5 items-center">
                        <Image width={32} height={32} src={authorIcon} alt={author} className="w-6 h-6 min-[460px]:w-8 min-[460px]:h-8 rounded-sm" draggable={false}/>
                        <div className="flex flex-col">
                            <p className="text-[#c1c6ff] text-sm">{author}</p>
                            <p className="text-xs text-[#CFCFCF]">{formatted}</p>
                        </div>
                    </div>
                    <p className="text-[#CFCFCF] font-normal text-sm">{time} хв читання</p>
                </div>
            </div>
        </Link>
    )
}

interface NewsProps {
    news: INews[]
}

export default function NewsGrid({ news }:NewsProps){
    const areasClassName = generateAreas(news.length)
    return (
        <div className="w-(--width,1200px) flex flex-col md:grid gap-10" style={{gridTemplateAreas: areasClassName}}>
            {news.length === 0 ? <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">На жаль, тут нічого немає ;(</p> : news.map((el, index) => <NewsBlock key={index} index={index} {...el}/>)}
        </div>
    )
}