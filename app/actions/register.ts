'use server'

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function register(formData: FormData) {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const email = formData.get('email') as string
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })

    if (error) {
        return redirect(`/error?message=${encodeURIComponent(error.message)}`)
    }

    if (data.user) {
        const { error: userError } = await supabase.from('users').insert({
            id: data.user.id,
            username: username
        })

        if (userError) {
            return redirect(`/error?message=${encodeURIComponent(userError.message)}`)
        }
    }

}