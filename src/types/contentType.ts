interface Header {
    type: "header"
    text: string
}

interface Paragraph {
    type: "paragraph"
    text: string
}

interface Image {
    src: string
    alt?: string
}
interface Images {
    type: "images"
    images: Image[]
}
interface UnorderedList {
    type: "unorderedlist"
    items: string[]
}
interface OrderedList {
    type: "orderedlist"
    items: string[]
}

export type Content = (Header | Paragraph | Images | UnorderedList | OrderedList)