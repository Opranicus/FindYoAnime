import { Preview } from "@/types/anime"
import { anton,viga } from "@/utils/fonts"

type Props = {
    preview: Preview;
    onMore: () => void;
}

export default function AnimePreview({ preview, onMore }: Props) {
    return (
        <div className="mt-5 bg-[#1E293B] gap-5 flex w-full h-auto p-3 rounded shadow-2xl">

            <img
                src={preview.coverImage.extraLarge}
                alt={"Anime Picture"}
                className="w-28 h-auto"
            />

            <div className="flex flex-col items-center w-full">
                <h1 className={`${anton.className} text-white text-[16px]`}>{preview.title.romaji}</h1>
                <hr className="border w-full mt-2 border-[#0F172A]" />

                <div className="flex flex-wrap justify-evenly items-center gap-0.75 mt-3">
                    {preview.genres.map((genre: string) => (
                        <div key={genre} className="border-2 border-[#334155] p-1.25 rounded">
                            <h1 className={`${viga.className} text-[9px] text-white`}>{genre}</h1>
                        </div>
                    ))}

                </div>

                <hr className="border w-full mt-3 border-[#0F172A]" />

                <button
                    onClick={onMore}
                    className="mt-3 text-gray-600 cursor-pointer"
                >
                    More...
                </button>

            </div>

        </div>
    )
}