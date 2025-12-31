"use client"

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}

export default function Burger({ isOpen, setIsOpen, className }:Props){
  return (
    <div className={`w-10 flex flex-col content-end cursor-pointer gap-1.5 transition-all duration-200 hover:gap-2 ${isOpen ? "rotate-45 gap-0! hover:gap-0!" : ""} ${className}`} onClick={() => setIsOpen(prev => !prev)}>
      <div className={`h-1 rounded-md bg-white ${isOpen ? "hidden" : ""}`}></div>
      <div className={`h-1 rounded-md bg-white ${isOpen ? "rotate-90" : ""}`}></div>
      <div className={`h-1 rounded-md bg-white ${isOpen ? "relative bottom-1 rotate-180" : ""}`}></div>
    </div>
  )
}