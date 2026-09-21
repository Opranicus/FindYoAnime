type Props = {
    label: string;
    onClick: () => void;
}

export default function Button({ label, onClick }: Props) {
    return (
        <button 
            onClick={onClick}
            className="bg-green-500 p-2 rounded-md"
        >
            {label}
        </button>
    )
}