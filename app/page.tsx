'use client'
import { getAnime } from '@/lib/search';
import { useState } from 'react';
import { anton, viga } from '@/utils/fonts';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [anime, setAnime] = useState<any[]>([]);

  async function loadData() {

    try {

      if (!search.trim()) {
        return;
      }

      setError('');
      const data = await getAnime(search);
      setAnime(data.data.Page.media);
    }

    catch (error) {
      console.log(error)
      setError("Failed to fetch " + search);
    }

  }

  return (
    <div className="m-5">
      <h1 className={`text-3xl text-center mt-7 text-white ${anton.className}`}>Find Yo Anime</h1>

      <div className="flex pt-5 pb-5 gap-3 justify-center itmes-center">
        <input
          type="text"
          placeholder="Search Anime: "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-[#334155] p-2 rounded-md text-white"

        />

        <button
          onClick={loadData}
          className="bg-green-500 p-2 rounded-md"
        >
          Search
        </button>

      </div>

      {error && <h1 className="bg-red-400 border-2 border-black rounded-md max-w-md p-4 text-center">{error}</h1>}
      <div className="flex flex-col justify-center items-center gap-5 w-full">
        {anime.map((item) => (
          <div key={item.id} className="mt-5 bg-[#1E293B] gap-5 flex w-full h-auto p-3 rounded">

            <img
              src={item.coverImage.extraLarge}
              alt={item.title}
              className="w-28 h-auto"
            />
            <div className="flex flex-col items-center w-full">
              <h1 className={`${anton.className} text-white text-[16px]`}>{item.title.romaji}</h1>
              {item.genres.map((genre: any) => (
                <div key={genre.id}>
                    <h1 className={`${viga.className} text-[11px]`}>{genre}</h1>
                </div>
              ))}
            </div>


          </div>
        ))}
      </div>

    </div>
  )
}