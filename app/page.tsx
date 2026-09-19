'use client'
import { getAnime } from '@/lib/search';
import { useState } from 'react';
import { anton } from '@/utils/fonts';
import Modal from '@/components/Modal';
import AnimePreview from '@/components/AnimePreview';
import AnimeFullDetails from '@/components/AnimeDetails';

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

            <AnimeFullDetails
              full={ selectedAnime }
            />

          )}

        </Modal>

      </div>

    </div>
  )
}