"use client";

import { useState, useTransition } from "react";
import { toggleFavoriite } from "@/app/actions/favorite";

type Props = {
  animeId: any;
  initial: boolean;
};

export default function FavoriteButton({ animeId, initial }: Props) {
  const [isFavorite, setIsFavorite] = useState(initial);
  const [isPending, startTransition] = useTransition();

  const like = () => {
    setIsFavorite(!isFavorite);

    startTransition(async () => {
      try {
        await toggleFavoriite(animeId);
      } catch (e) {
        setIsFavorite(isFavorite);
        console.error("Failed to update favorite status", e);
      }
    });
  };
  return (
    <button onClick={like}
            disabled={isPending} 
            className="p-3 font-medium rounded bg-white text-black"
    >
        {isFavorite ? 'Liked' : 'Like'}
    </button>
  )
}
