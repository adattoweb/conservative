"use client"

import { wposts } from "@/data/wiki";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { useParams } from "next/navigation";
import Input from "@/app/wiki/Input";
import { useState } from "react";
import Burger from "@/UI/Burger";

interface WikiProps {
    url: string
}

export default function Wiki({ url }:WikiProps) {
    const params = useParams()
    let newUrl: string | undefined = url

    if (newUrl === undefined) {
        if (Array.isArray(params.url)) {
            newUrl = params.url[0]
        } else {
            newUrl = String(params.url)
        }
    }

    const posts = wposts.flatMap(el => el.posts)
    const post = posts.find(el => el.url === newUrl)
    const categoryIndex = wposts.findIndex(category => category.posts.some(post => post.url === newUrl))

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-(--width,1200px) mt-20">
            <div className="flex flex-col py-10 min-[400px]:flex-row gap-5 min-[400px]:justify-between">
                <div className="text-2xl font-medium min-[400px]:flex min-[400px]:justify-center min-[400px]:items-center gap-4"><Burger isOpen={isOpen} setIsOpen={setIsOpen}/><p className="hidden sm:block">Wiki</p></div>
                <Input/>
            </div>
            <div className="flex">
                <Sidebar url={newUrl} isOpen={isOpen}/>
                {post ? <Content post={post} categoryIndex={categoryIndex} isOpen={isOpen}/> : <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Пост не знайдено</h2>}
            </div>
        </div>
    );    
}
