import { createClient } from "@/utils/supabase/server";
import HomePageClient from "@/components/HomePageClient";

export default async function HomePage(){
  const supabase = await createClient();
  const {data: {user}} = await supabase.auth.getUser();
  const username = user?.user_metadata?.username;

  return(
      <HomePageClient 
        isLoggedIn={!!user}
        username={username}
      />
  )
}