'use client'

import { getAnime } from "@/lib/search"
import {useState, useEffect} from 'react';

export default function HomePage(){
  const [anime, setAnime] = useState<any>(null);

  useEffect(() => {

    async function loadData() {
      const data = await getAnime('5114');
      setAnime(data);
    }

    loadData();

  }, [])

  return(
    <div>
      <h1 className="text-3xl  text-center mt-5">Find Your Anime</h1>
      {anime && (
        <img src={anime.data.images.jpg.image_url} 
             alt={anime.data.title}        
        />
      )}
    </div>
  )
}