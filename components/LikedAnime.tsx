import { createClient } from "@/utils/supabase/server";
import { getFavoriteAnime } from "@/lib/userFavoriteAnime";
import { redirect } from "next/navigation";
import RemoveButton from "./RemoveButton";
import { anton,viga } from "@/utils/fonts";

export async function LikedAnime() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: favorites, error } = await supabase
    .from("favorites")
    .select("anime_id")
    .eq("user_id", user.id);

  if(error){
    throw new Error("Failed to load your anime list");
  }

  const animeIds = favorites.map((favorite) => favorite.anime_id)
  let userFavorite: any[] = [];

  if(animeIds.length > 0){
    const result = await getFavoriteAnime(animeIds)
    userFavorite = result.data.Page.media
  }

  return (
    <main className="flex flex-wrap justify-center items-center">
        {userFavorite.length === 0 ? (
            <p className="text-white">You dont have any liked animes yet</p>
        ) : (
            userFavorite.map((fav) => (
                <div key={fav.id} className="bg-[#1E293B] flex flex-col items-center justify-center m-5 p-5 rounded-sm">
                    <img 
                        src={fav.coverImage.extraLarge} 
                        className="h-64 rounded-md"
                    />
                    <h1 className={`${anton.className} mt-5 text-white text-xl w-54`}>{fav.title.romaji}</h1>
                    <RemoveButton animeId={fav.id}/>
                </div>
            ))
        )}
            
    </main>
  )
}
