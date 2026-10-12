import { Preview } from "@/types/anime"
import { anton,viga } from "@/utils/fonts"

type Props = {
    preview: Preview;
    onMore: () => void;
}

export default function AnimePreview({ preview, onMore }: Props) {
    return (
        <div className="mt-5 bg-[#1E293B] gap-5 flex h-auto p-3 rounded shadow-2xl w-full">

            <img
                src={preview.coverImage.extraLarge}
                alt={"Anime Picture"}
                className="aspect-2/3 w-35 shrink-0 self-start object-cover"
            />

            <div className="flex flex-col">
                <h1 className={`${anton.className} text-white text-[18px]`}>{preview.title.romaji}</h1>
                

                <div className="flex flex-wrap justify-start items-center gap-1 mt-3">
                    {preview.genres.map((genre: string) => (
                        <div key={genre} className="border-2 border-[#334155] p-1.25 rounded">
                            <h1 className={`${viga.className} text-[12px] text-white`}>{genre}</h1>
                        </div>
                    ))}

                </div>

                
                <div className="flex flex-1 justify-start items-end">
                    <button
                    onClick={onMore}
                    className="text-white cursor-pointer bg-green-500 p-3 rounded-md"
                    >
                        More
                    </button>
                </div>
                

            </div>

        </div>
    )
}