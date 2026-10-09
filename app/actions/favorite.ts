"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function toggleFavoriite(animeId: number) {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || userError) {
    throw new Error("Unauthorized");
  }

  const { data: existing } = await supabase
    .from("favorites")
    .select("id")
    .eq("user_id", user.id)
    .eq("anime_id", animeId)
    .single();

  if (existing) {
    await supabase.from("favorites").delete().eq("id", existing.id);
  }

  else{
    await supabase.from('favorites').insert({user_id: user.id, anime_id: animeId})
  }

  revalidatePath('/anime/[id]', 'page')

}
