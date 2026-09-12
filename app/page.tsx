'use client'
import { getAnime } from '@/lib/search';
import { useState } from 'react';

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

    catch(error){
      console.log(error)
      setError("Failed to fetch anime.");
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
      {anime?.map((item) => (
        <div key={item.id}>

          <h1>{item.title.english}</h1>

        </div>
      ))}
    </div>
  )
}