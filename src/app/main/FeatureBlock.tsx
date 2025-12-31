import { data } from "@/data/main"
import Link from "next/link"

export default function FeatureBlock(){
    return (
        <Link href={data.features.link} className="flex flex-col gap-1.5 sm:gap-3 rounded-3xl w-full bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/images/backgroundwithship.jpg')] bg-cover bg-no-repeat bg-position-[center_75%] box-border py-4 lg:py-6 px-4 sm:px-8 lg:px-12 mx-auto items-start">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-15 sm:mt-25 xl:mt-30">{data.features.title}</h2>
        <p className="text-[#EFEFEF] text-xs sm:text-sm md:text-base lg:text-lg font-normal max-w-160">
            {data.features.description}
        </p>
    </Link>
    )
}