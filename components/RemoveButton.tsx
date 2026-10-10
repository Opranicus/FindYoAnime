'use client'

import { Remove } from "@/app/actions/unfavorite";

type Props = {
    animeId: number
}

export default function RemoveButton({animeId}: Props){

    const remove = () => {
        try{
          Remove(animeId)
        }
        
        catch(e){
            console.error("Failed to update favorite status", e);
        }
    }

    return(
        <button onClick={remove}>
            Remove from list
        </button>
    )
}