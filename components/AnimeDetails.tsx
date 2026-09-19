import { FullDetails } from "@/types/anime";
import { anton, viga } from "@/utils/fonts";

type Props = {
    full: FullDetails;
}

export default function AnimeFullDetails({ full }: Props) {
    return (
        <div className="mt-10 p-3">
            <div className="flex flex-col justify-center items-center">
                <img src={full.coverImage.large} className="rounded-md" />
                <h1 className={`${anton.className} text-white text-center text-2xl mt-4`}>{full.title.romaji}</h1>
            </div>

            <div className="flex justify-center gap-5 mt-5">
                <div>
                    <h1 className="text-white font-bold text-[21px] text-end">Genre: </h1>
                </div>

                <div className="flex flex-wrap justify-evenly items-center gap-2">
                    {full.genres.map((genre: string) => (
                        <div key={genre} className="border-2 border-[#334155] p-1.25 rounded">
                            <h1 className={`${viga.className} text-[16px] text-white`}>{genre}</h1>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-center mt-5 gap-4">
                <h1 className="text-white font-bold text-[21px]">Episodes:</h1>
                <h1 className={`${viga.className} text-white text-[21px]`}>{full.episodes}</h1>
            </div>

            <div className="flex items-center justify-center mt-5 gap-4">
                <h1 className="text-white font-bold text-[21px]">Status:</h1>
                <h1 className={`${viga.className} text-white text-[21px]`}>{full.status}</h1>
            </div>

            <div className="flex flex-col justify-center items-center p-5 border-2 border-[#0F172A] mt-5 rounded-lg">
                <h1 className="text-white font-bold text-[21px]">Description</h1>
                <p className={`${viga.className} text-white text-[16px] text-justify mt-5`}>{full.description}</p>
            </div>

        </div>
    )
}