"use client";

import { Remove } from "@/app/actions/unfavorite";
import { viga } from "@/utils/fonts";

type Props = {
  animeId: number;
};

export default function RemoveButton({ animeId }: Props) {
  const remove = () => {
    try {
      Remove(animeId);
    } catch (e) {
      console.error("Failed to update favorite status", e);
    }
  };

  return (
    <button
      onClick={remove}
      className={`${viga.className} bg-red-500 p-2 rounded-5 text-white mt-5`}
    >
      Remove
    </button>
  );
}
