import { APP } from "@/constants/constants"
import { DiscordIcon, TelegramIcon, TiktokIcon, YoutubeIcon } from "@/UI/Icons"
import Link from "next/link"


interface SocialLink {
    href: string;
    icon: React.ComponentType<{ color: string}>;
}

const SOCIALLINKS: SocialLink[] = [
    { href: APP.LINKS.DISCORD, icon: DiscordIcon },
    { href: APP.LINKS.TELEGRAM, icon: TelegramIcon },
    { href: APP.LINKS.TIKTOK, icon: TiktokIcon },
    { href: APP.LINKS.YOUTUBE, icon: YoutubeIcon },
]

export default function Footer() {
    return (
        <div className="mt-12.5 w-screen h-50 bg-[#121214] flex justify-center">
            <div className="w-(--width,1200px) flex justify-between items-center gap-5">
                <div className="flex flex-col">
                    <h1 className="text-2xl lg:text-3xl font-medium">{APP.NAME}</h1>
                    <p className="mt-1.25 text-sm sm:text-base lg:text-lg font-normal text-[#DADADA]">Copyright © Conservative 2025. Всі права захищені.</p>
                    <p className="text-sm sm:text-base lg:text-lg font-normal text-[#DADADA]">Сервер Conservative не відноситься до Mojang Studios.</p>
                    <p className="mt-2 text-sm sm:text-base lg:text-lg font-medium">Сайт створено з любов’ю!</p>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 h-fit">
                    {SOCIALLINKS.map((el, index) => {
                        const Icon = el.icon;
                        return (
                            <Link key={index} href={el.href} target="_blank" className="w-6 h-6 lg:w-8 lg:h-8 transition-transform duration-300 ease-in-out hover:scale-110">
                                <Icon color="#9E9E9E"/>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
