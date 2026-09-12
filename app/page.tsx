'use client'
import { getAnime } from '@/lib/search';
import { useState } from 'react';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [error, seterror] = useState('');
  const [anime, setAnime] = useState<any[]>([]);

  async function loadData() {
    try {
      if (!search.trim()) {
        return;
      }
      const data = await getAnime(search);
      setAnime(data.data);
    }

    catch{
      seterror("Failed to fetch anime.");
    }
    
  }

  return (
    <div>
      <h1 className="text-3xl text-center mt-5">Find Your Anime</h1>

      <input
        type="text"
        placeholder="Search Anime: "
        value={search}
        onChange={(e) => setSearch(e.target.value)}

      />

      <button onClick={loadData}>Search</button>

      {error && <h1>{error}</h1>}
      {anime.map((item) => (
        <div key={item.mal_id}>

          <img
            src={item.images.jpg.image_url}
            alt={item.title}
          />
          <h1>{item.title}</h1>

        </div>
      ))}
    </div>
  )
}