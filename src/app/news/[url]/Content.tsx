import Link from "next/link";
import { INews, news } from "@/data/news";
import ContentBlock from "@/UI/Content";

interface BannerProps {
    src: string
}

function Banner({ src }:BannerProps){
    return (
        <div className="h-40 min-[520px]:h-50 min-[800px]:h-62.5 w-auto bg-center bg-cover rounded-md" style={{ backgroundImage: `url(${src})` }}></div>
    )
}

interface ContentProps {
    post: INews
}

export default function Content({ post }:ContentProps) {
    const index = news.findIndex(el => el.url === post.url)
    const nextPost = index >= news.length-1 ? news[0] : news[index+1]

    return (
        <div className="flex flex-col flex-1 ml-auto gap-3.5 max-w-(--width,1200px) transition-all duration-200">
            <Banner src="/images/image2.png" />
            <h2 className="text-3xl min-[400px]:text-4xl min-[540px]:text-5xl sm:text-6xl font-semibold break-all">{post.title}</h2>
            <ContentBlock data={post.content} className="flex flex-col gap-3.5"/>
            <Link href={`/news/${nextPost.url}`} className="my-5 flex items-center gap-7.5 text- font-medium group">
                <div className="flex-0 h-0.5 bg-[#7B7B7B] transition-all duration-800 group-hover:flex-1"></div>
                <p className="ml-auto">{nextPost.title}</p>
            </Link>
        </div>

    )
}