"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function Remove(animeId: number) {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || userError) {
    throw new Error("Unauthorized Access");
  }

  const { data: liked } = await supabase
    .from("favorites")
    .select("id")
    .eq("user_id", user.id)
    .eq("anime_id", animeId)
    .single();

  if(liked){
    await supabase.from('favorites').delete().eq('id', liked.id);
  }

  revalidatePath('anime/[id]', 'page');

}
