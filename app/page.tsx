'use client'
import { getAnime } from '@/lib/search';
import { useState } from 'react';
import { anton, viga } from '@/utils/fonts';
import Modal from '@/components/Modal';
import AnimePreview from '@/components/AnimePreview';

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
      const data = await getAnime(search);
      
      if (data.data.Page.media.length) {
        setAnime(data.data.Page.media);
      }

      else {
        setNotFound(search + " does not exist.")
        setTimeout(() => {
          setNotFound('');
        }, 4000)
        
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
      <div className="flex flex-col justify-center items-center gap-5 w-full p-3">

        {anime.map((item) => (
          <AnimePreview 
            key={item.id}
            preview={item}
            onMore={() => (
              setOpen(true),
              setSelectedAnime(item)
            )}
          />
          
        ))}

        <Modal
          isVisible={isOpen}
          onClose={() => setOpen(false)}
        >
          {selectedAnime && (
            <div>
              <div className="mt-10 p-3">
                <div className="flex flex-col justify-center items-center">
                  <img src={selectedAnime.coverImage.large} className="rounded-md" />
                  <h1 className={`${anton.className} text-white text-center text-2xl mt-4`}>{selectedAnime.title.romaji}</h1>
                </div>

                <div className="flex justify-center gap-5 mt-5">
                  <div>
                    <h1 className="text-white font-bold text-[21px] text-end">Genre: </h1>
                  </div>

                  <div className="flex flex-wrap justify-evenly items-center gap-2">
                    {selectedAnime.genres.map((genre: any) => (
                      <div key={genre} className="border-2 border-[#334155] p-1.25 rounded">
                        <h1 className={`${viga.className} text-[16px] text-white`}>{genre}</h1>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center mt-5 gap-4">
                  <h1 className="text-white font-bold text-[21px]">Episodes:</h1>
                  <h1 className={`${viga.className} text-white text-[21px]`}>{selectedAnime.episodes}</h1>
                </div>

                <div className="flex items-center justify-center mt-5 gap-4">
                  <h1 className="text-white font-bold text-[21px]">Status:</h1>
                  <h1 className={`${viga.className} text-white text-[21px]`}>{selectedAnime.status}</h1>
                </div>

                <div className="flex flex-col justify-center items-center p-5 border-2 border-[#0F172A] mt-5 rounded-lg">
                  <h1 className="text-white font-bold text-[21px]">Description</h1>
                  <p className={`${viga.className} text-white text-[16px] text-justify mt-5`}>{selectedAnime.description}</p>
                </div>

              </div>

            </div>

          )}

        </Modal>

      </div>

    </div>
  )
}