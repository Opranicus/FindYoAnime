import React from "react"
import Button from "./Button"

type Props = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
    onClick: () => void
}

export default function SearchField({ value, onChange, onKeyDown,onClick }: Props) {
    return (
        <div className="flex pt-5 pb-5 gap-3 justify-center itmes-center">
            <input
                type="text"
                placeholder="Search Anime: "
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                className="border-2 border-[#334155] p-2 rounded-md text-white"

            />

            <Button 
                label="Search"
                onClick={onClick}
            />


        </div>
    )
}