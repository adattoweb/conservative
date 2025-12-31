import { useState } from "react"

interface SelectProps {
    data: DropdownData
    setSelected: (value: string) => void
}

function Select({ data, setSelected }:SelectProps){
    return (
        <div className="text-base font-light select-none px-2.5 py-1.5 cursor-pointer rounded-xl overflow-hidden hover:bg-white/10" onClick={() => setSelected(data.value)}>{data.label}</div>
    )
}


export interface DropdownData {
    label: string
    value: string
}

interface DropdownProps {
    selected: string
    setSelected: (value: string) => void
    array: DropdownData[]
    minWidth?: number
    className?: string
}

export default function Dropdown({ selected, setSelected, array, className }:DropdownProps){
    const [isOpen, setIsOpen] = useState(false)
    if(!className) className = ""
    return (
        <div className={`relative inline-block ${className}`} onClick={() => setIsOpen(prev => !prev)}>
            <div className="rounded-xl bg-[#1d1d1d] cursor-pointer min-w-17.5 h-10 flex items-center justify-center">
                <p className="text-lg font-light select-none px-3 box-border">{array.find(el => el.value === selected)?.label}</p>
            </div>
                {isOpen && <div className="absolute bg-[#1d1d1d] mt-1.25 rounded-xl box-border z-999"> 
                    {array.map((el, index) => <Select key={index} data={el} setSelected={setSelected}/>)}
                </div>}
        </div>
    )
}
