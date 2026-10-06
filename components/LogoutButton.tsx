import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { viga, anton } from "@/utils/fonts";

export default function LogoutButton(){

    async function logout(){
        'use server'
        const supabase = await createClient();
        const {error} = await supabase.auth.signOut()

        if(error){
            redirect('/error')
        } else{
            redirect('/')
        }
        
    }

    return(
        <form action={logout}>
            <button className={`bg-red-500 text-white p-3 rounded-md ${viga.className}`}>
                Logout
            </button>
        </form>
    )
}