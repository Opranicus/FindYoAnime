'use server'
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function login(prevState: any, formData: FormData){
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string
    }

    const {error} =  await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
    })

    if (error) {
        if (error.code === 'invalid_credentials') {
            return { success: false, message: 'Wrong email or wrong password.' }
        } 
    }
    redirect('/profile')
}