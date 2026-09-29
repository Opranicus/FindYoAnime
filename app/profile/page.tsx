import { createClient } from "@/utils/supabase/server";
import ProfilePage from "@/components/ProfilePage";

export default async function Profile(){
    const supabase = await createClient();
    const {data: {user}} = await supabase.auth.getUser()
    const username = user?.user_metadata?.username

    return(
        <ProfilePage 
            isLoggedIn={!!user}
            username={username}
        />
    )
}