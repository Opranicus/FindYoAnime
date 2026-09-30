import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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
            <button className='p-3 bg-red-500 text-white font-semibold rounded-md mt-3'>
                Logout
            </button>
        </form>
    )
}