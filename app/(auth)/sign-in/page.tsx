'use client'

import { register } from "@/app/actions/register"

export default function SignUp(){
    return(
        <form action={register}>

            <input 
                id="email"
                name="email"
                type="email"
                placeholder="Email:"
                required
                className="border border-white text-white"
            />

            <input 
                id="username"
                name="username"
                type="text"
                placeholder="Username:"
                required
                className="border border-white text-white"
            />
            
            <input 
                id="password"
                name="password"
                type="password"
                placeholder="Password:"
                required
                className="border border-white text-white"
            />

            <button type="submit">Submit</button>
        </form>
    )
}