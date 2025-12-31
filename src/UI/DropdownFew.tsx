import { useState } from "react"

interface SelectProps {
    data: DropdownData
    selected: string[]
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
}

function Select({ data, selected, setSelected }:SelectProps){
    const isExist = selected.includes(data.value)
    function switchValue(){
        if(isExist) setSelected(prev => prev.filter(el => el !== data.value))
        else setSelected(prev => [...prev, data.value])
    }
    return (
        <div className={`text-base font-light select-none px-2.5 py-1.5 cursor-pointer rounded-lg overflow-hidden hover:bg-white/10 text-[#d4d4d4] ${isExist ? "text-white font-medium" : ""}`} onClick={switchValue}>{data.label}</div>
    )
}


export interface DropdownData {
    label: string
    value: string
}

interface DropdownProps {
    title: string
    selected: string[]
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
    array: DropdownData[]
    minWidth?: number
    className?: string
}

export default function DropdownFew({ title, selected, setSelected, array, className }:DropdownProps){
    const [isOpen, setIsOpen] = useState(false)
    if(!className) className = ""
    return (
        <div className={`relative inline-block ${className}`}>
            <div className="rounded-lg bg-[#1d1d1d] cursor-pointer min-w-17.5 h-10 flex items-center justify-center">
                <p className="text-lg font-light select-none px-3 box-border" onClick={() => setIsOpen(prev => !prev)}>{title}</p>
            </div>
                {isOpen && <div className="absolute bg-[#1d1d1d] mt-2 rounded-lg box-border z-999"> 
                    {array.map((el, index) => <Select key={index} data={el} selected={selected} setSelected={setSelected}/>)}
                </div>}
        </div>
    )
}
