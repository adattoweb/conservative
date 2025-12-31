import Link from "next/link"
import { news } from "@/data/news"
import Content from "./Content"
import { ReturnIcon } from "@/UI/Icons"

interface PostProps {
    params: {
        url: string
    }
}

export default async function PostNews({ params }:PostProps){
    const { url } = await params
    console.log(url)
    const post = news.find(el => el.url === url)
    return (
        <div className="w-(--width,1200px) mt-20">
            <div className="flex flex-col py-10 min-[400px]:flex-row gap-5 min-[400px]:justify-between">
                <Link href="/news" className="flex items-center gap-2"><ReturnIcon className="w-6 h-6" color="#fff" strokeWidth="2"/><p>Усі новини</p></Link>
            </div>
            <div className="flex">
                {post ? <Content post={post}/> : <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Пост не знайдено</h2>}
            </div>
        </div>
    )
}