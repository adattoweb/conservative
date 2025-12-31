"use client"

import Link from "next/link"
import { APP, ROUTES } from "@/constants/constants"
import { usePathname } from "next/navigation"
import Burger from "./Burger"
import { useState } from "react"

interface NavItemProps {
    href: string
    path: string
    children: React.ReactNode
    className?: string
}


function NavItem({ href, path, children, className }: NavItemProps) {
    const isActive = (path.startsWith(href) && href !== "/") || (href === "/" && path === href);
    return (
        <Link href={href} draggable={false}>
            <li className={`text-base lg:text-lg ${isActive ? "text-(--accent,#5865F2)" : "text-white"} ${className}`}>
                {children}
            </li>
        </Link>
    )
}


export default function Header() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="mt-11.25 w-(--width,1200px) flex items-center justify-between absolute z-10">
            <Link href={ROUTES.HOME.ROUTE}><h1 className="font-medium text-xl lg:text-2xl">{APP.NAME}</h1></Link>
            <ul className="items-center gap-5 lg:gap-7 xl:gap-9 hidden md:flex">
                {Object.values(ROUTES).map(el => <NavItem key={el.ROUTE} href={el.ROUTE} path={path}>{el.NAME}</NavItem>)}
            </ul>
            <div className={`fixed w-screen h-screen left-0 top-0 bg-black/80 backdrop-blur-xs hidden ${isOpen ? "flex! justify-center items-center" : ""}`}>
                <ul className="flex flex-col" onClick={() => setIsOpen(false)}>
                    {Object.values(ROUTES).map(el => <NavItem key={el.ROUTE} href={el.ROUTE} path={path} className="text-3xl! hover:bg-white/10 px-5 py-3 rounded-lg">{el.NAME}</NavItem>)}
                </ul>
            </div>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen} className="md:hidden absolute right-[calc(var(--offset)/2-20px)]"/> {/* (!) 20px - величина бургера поділена на 2 */}
        </div>
    )
}
