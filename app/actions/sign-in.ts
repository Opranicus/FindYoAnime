'use server'
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function login(formData: FormData){
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string
    }

    const {error} =  await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
    })

    if(error){
        redirect('/error')
    }

}