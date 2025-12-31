interface ProviderProps {
    title: string
}

export default function Provider({ title }:ProviderProps){
    return (
        <h2 className="font-medium text-3xl md:text-4xl border-l-5 border-[#5865F2] pl-5">{title}</h2>
    )
}