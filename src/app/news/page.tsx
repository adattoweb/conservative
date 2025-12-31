"use client"

import Input from "./Input"
import { useEffect, useRef, useState } from "react";
import { categoriesMap, news } from "@/data/news";
import NewsGrid from "./NewsGrid";
import DropdownFew, { DropdownData } from "@/UI/DropdownFew";



const array:DropdownData[] = [{label: "Усі", value: "Усі"}]
categoriesMap.forEach((value, key) => {
    array.push({label: key, value: key})
})

export default function NewsPage() {
    const [categories, setCategories] = useState(["Усі"])
    const [page, setPage] = useState(1)

    const PER_PAGE = 5

    const filteredNews = categories.includes("Усі") ? news : news.filter(el => el.categories.some(el => categories.includes(el)))

    const visibleNews = filteredNews.slice(0, page * PER_PAGE)

    const loaderRef = useRef<HTMLDivElement | null>(null)
    const hasMore = visibleNews.length < filteredNews.length

    useEffect(() => {
        if(!loaderRef.current || !hasMore) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setPage(prev => prev + 1)
                }
            },
            {
                rootMargin: "200px",
            }
        )
        observer.observe(loaderRef.current)

        return () => observer.disconnect()
    }, [hasMore])

    useEffect(() => {
        setPage(1)
    }, [categories])
    

    return (
        <div className="w-(--width,1200px) mt-20">
            <div className="flex flex-col-reverse py-10 min-[460px]:flex-row gap-5 min-[400px]:justify-between">
                <DropdownFew title="Категорії" selected={categories} setSelected={setCategories} array={array} className="self-start"/>
                <Input/>
            </div>
            <NewsGrid news={visibleNews}/>
            {hasMore && (
                <div ref={loaderRef}className="h-10 flex items-center justify-center text-zinc-500 mt-10">
                    Завантаження…
                </div>
            )}
        </div>
    );    
}