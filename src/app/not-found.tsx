import { ROUTES } from "@/constants/constants"
import Link from "next/link"

export default function NotFound(){
    return (
        <div className="flex flex-col w-112.5 text-center self-center">
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold">404</h1>
            <p className="mt-2.5 text-base sm:text-2xl md:text-3xl">Ця сторінка не знайдена</p>
            <Link className="mt-3.75 bg-[#6563EE] rounded-lg md:rounded-xl p-2 sm:p-3 text-base sm:text-lg md:text-xl flex justify-center items-center transition-colors duration-200 ease-in-out hover:bg-[#5856cf] self-center" href={ROUTES.HOME.ROUTE}>На головну сторінку</Link>
        </div>
    )
}
