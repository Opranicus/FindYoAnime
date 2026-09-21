'use server'
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function register(formData: FormData) {
    const supabase = await createClient();

    const data = {
        email: formData.get('email') as string,
        username: formData.get('username') as string,
        password: formData.get('password') as string
    }

    const { error } = await supabase.auth.signUp(data)

    if(error){
        redirect('/error')
    }
    

}