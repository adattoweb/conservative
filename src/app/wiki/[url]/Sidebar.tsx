import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { wposts, Post } from "@/data/wiki";

interface LinkProps {
    href: string
    name: string
    icon: string
    url: string
}

interface CategoryProps {
    name: string
    posts: Post[]
    url: string
}

interface SidebarProps {
    url: string
    isOpen: boolean
}

function Category({ name, posts, url }:CategoryProps){
    return (
        <div className="flex flex-col">
            <h4 className="text-xl">{name}</h4>
            <div className="flex flex-col">
                {posts.map((el, index) => <PostLink key={index} href={el.url} name={el.name} icon={el.icon} url={url}/>)}
            </div>
        </div>
    )
}

function PostLink({ href, name, icon, url }:LinkProps){
    return (
        <Link href={`/wiki/${href}`} className={`flex py-2.5 pl-3 pr-2 rounded-md transition-all duration-300 ease-in-out hover:bg-white/10 hover:opacity-100 ${url === href ? "opacity-100" : "opacity-70"}`} draggable={false}>
            <p className="flex items-center gap-3 text-lg font-medium"><Image width={22} height={22} src={icon} alt={name} draggable={false} priority/>{name}</p>
        </Link>

    )
}

export default function Sidebar({ url, isOpen }:SidebarProps) {
    return (
        <div className={`w-full py-6 pr-3 min-[460px]:py-2 min-[460px]:w-50 absolute flex-col gap-6.25 hidden bg-(--body-bg) border-r border-b xl:border-b-0 border-[#4a4a4a] rounded-br-2xl xl:rounded-none ${isOpen ? "flex!" : ""}`}>
            <div className="flex flex-col gap-3">
                {wposts.map((el, index) => <Category key={index} name={el.name} posts={el.posts} url={url}/>)}
            </div>
        </div>
    );    
}