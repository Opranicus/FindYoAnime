import { viga } from "@/utils/fonts"
import Link from "next/link"

type Props = {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit";
    link?: string;
}

export default function Button({ label, onClick, type, link }: Props) {
    const className = `bg-green-500 text-white p-3 rounded-md ${viga.className}`

    if(link){
        return(
            <Link href={link} className={className}>{label}</Link>
        )
    }

    return (
        <button 
            onClick={onClick}
            type={type}
            className={className}
        >
            {label}
        </button>
    )
}