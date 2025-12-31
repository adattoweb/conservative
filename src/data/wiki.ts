import type { Content} from "@/types/contentType"

export interface Post {
    url: string
    name: string
    description: string
    icon: string
    banner: string
    title: string
    content: Content[]
}

interface Category {
    name: string
    posts: Post[]
}

export const wposts:Category[] = [
    {
        name: "Початок гри",
        posts: [
            {
                url: "",
                name: "Основне",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                icon: "/icons/crown.png",
                banner: "/images/image2.png",
                title: "Назва секції",
                content: [
                    {
                        type: "paragraph", text: "Наш сервер — це чиста ваніль, без модів і зайвих надбудов. Тут ти можеш грати з друзями так, як задумано у класичному Minecraft: будувати, виживати, досліджувати та створювати власні історії."
                    },
                    {
                        type: "images", images: [{src: "/images/image2.png", alt: "Фонове зображення"}, {src: "/images/image2.png", alt: "Фонове зображення"}, {src: "/images/image2.png", alt: "Фонове зображення"}, {src: "/images/image2.png", alt: "Фонове зображення"}, {src: "/images/image2.png", alt: "Фонове зображення"}, {src: "/images/image2.png", alt: "Фонове зображення"}, {src: "/images/image2.png", alt: "Фонове зображення"}, {src: "/images/image2.png", alt: "Фонове зображення"}]
                    },
                    {
                        type: "paragraph", text: "Наш сервер — це чиста ваніль, без модів і зайвих надбудов. Тут ти можеш грати з друзями так, як задумано у класичному Minecraft: будувати, виживати, досліджувати та створювати власні історії."
                    },
                    {
                        type: "unorderedlist", items: ["123", "fsfsdfsdfsd fsd f sdf sd"]
                    },
                    {
                        type: "header", text: "flsdkfksdfk"
                    }
                ]
            },
            {
                url: "registration",
                name: "Реєстрація",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                icon: "/icons/door.png",
                banner: "/images/image2.png",
                title: "Реєстрація",
                content: [
                    {
                        type: "paragraph", text: "Наш сервер — це чиста ваніль, без модів і зайвих надбудов. Тут ти можеш грати з друзями так, як задумано у класичному Minecraft: будувати, виживати, досліджувати та створювати власні історії."
                    },
                    {
                        type: "images", images: [{src: "/images/image2.png", alt: "Фонове зображення"}]
                    },
                    {
                        type: "paragraph", text: "Наш сервер — це чиста ваніль, без модів і зайвих надбудов. Тут ти можеш грати з друзями так, як задумано у класичному Minecraft: будувати, виживати, досліджувати та створювати власні історії."
                    }
                ]
            }
            
        ]
    },
    {
        name: "Початок гри111",
        posts: [
            {
                url: "111",
                name: "Основне",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                icon: "/icons/crown.png",
                banner: "/images/image2.png",
                title: "Назва секції",
                content: [
                    {
                        type: "paragraph", text: "Наш сервер — це чиста ваніль, без модів і зайвих надбудов. Тут ти можеш грати з друзями так, як задумано у класичному Minecraft: будувати, виживати, досліджувати та створювати власні історії."
                    },
                    {
                        type: "images", images: [{src: "/images/image2.png", alt: "Фонове зображення"}]
                    },
                    {
                        type: "paragraph", text: "Наш сервер — це чиста ваніль, без модів і зайвих надбудов. Тут ти можеш грати з друзями так, як задумано у класичному Minecraft: будувати, виживати, досліджувати та створювати власні історії."
                    }
                ]
            },
            {
                url: "registration222",
                name: "Реєстрація",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                icon: "/icons/door.png",
                banner: "/images/image2.png",
                title: "Реєстрація",
                content: [
                    {
                        type: "paragraph", text: "Наш сервер — це чиста ваніль, без модів і зайвих надбудов. Тут ти можеш грати з друзями так, як задумано у класичному Minecraft: будувати, виживати, досліджувати та створювати власні історії."
                    },
                    {
                        type: "images", images: [{src: "/images/image2.png", alt: "Фонове зображення"}]
                    },
                    {
                        type: "paragraph", text: "Наш сервер — це чиста ваніль, без модів і зайвих надбудов. Тут ти можеш грати з друзями так, як задумано у класичному Minecraft: будувати, виживати, досліджувати та створювати власні історії."
                    }
                ]
            }
        ]
    },
]