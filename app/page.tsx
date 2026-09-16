'use client'
import { getAnime } from '@/lib/search';
import { useState } from 'react';
import { anton, viga } from '@/utils/fonts';
import Modal from '@/components/Modal';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [anime, setAnime] = useState<any[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [notFound, setNotFound] = useState('');
  const [selectedAnime, setSelectedAnime] = useState<any>(null);

  async function loadData() {

    try {

      if (!search.trim()) {
        return;
      }

      setError('');
      setNotFound('');
      const data = await getAnime(search);

      if(data.data.Page.media.length) {
        setAnime(data.data.Page.media);
      }

      else{
        setNotFound(search + "does not exsist");
      }
      
    }

    catch (error) {
      console.log(error)
      setError("Failed to fetch " + search);
    }

  }

  const enterEvent = function (event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      loadData();
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
          onKeyDown={enterEvent}
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
      {notFound && <h1 className="bg-red-400 border-2 border-black rounded-md max-w-md p-4 text-center">{notFound}</h1>}
      <div className="flex flex-col justify-center items-center gap-5 w-full">

        {anime.map((item) => (
          <div key={item.id} className="mt-5 bg-[#1E293B] gap-5 flex w-full h-auto p-3 rounded shadow-2xl">

            <img
              src={item.coverImage.extraLarge}
              alt={item.title}
              className="w-28 h-auto"
            />

            <div className="flex flex-col items-center w-full">
              <h1 className={`${anton.className} text-white text-[16px]`}>{item.title.romaji}</h1>
              <hr className="border w-full mt-2 border-[#0F172A]" />

              <div className="flex flex-wrap justify-evenly items-center gap-0.75 mt-3">
                {item.genres.map((genre: any) => (
                  <div key={genre} className="border-2 border-[#334155] p-1.25 rounded">
                    <h1 className={`${viga.className} text-[9px] text-white`}>{genre}</h1>
                  </div>
                ))}

              </div>

              <hr className="border w-full mt-3 border-[#0F172A]" />

              <button
                onClick={() => {
                  setOpen(true)
                  setSelectedAnime(item)
                }}
                className="mt-3 text-gray-600 cursor-pointer"
              >
                More...
              </button>

            </div>

          </div>
        ))}

        <Modal
          isVisible={isOpen}
          onClose={() => setOpen(false)}
        >
          {selectedAnime && (
            <div className="flex flex-col justify-center items-center">
              <div className="mt-10">
                <img src={selectedAnime.coverImage.large} className="rounded-md" />
                <h1 className={`${anton.className} text-white text-center text-2xl mt-4`}>{selectedAnime.title.romaji}</h1>
              </div>

            </div>

          )}

        </Modal>

      </div>

    </div>
  )
}