import { viga } from "@/utils/fonts"

type Props = {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit";
}

export default function Button({ label, onClick, type }: Props) {
    return (
        <button 
            onClick={onClick}
            type={type}
            className={`bg-green-500 text-white p-2 rounded-md ${viga.className}`}
        >
            {label}
        </button>
    )
}