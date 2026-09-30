import Link from "next/link"
import LogoutButton from "./LogoutButton"
import Image from "next/image"

type Props = {
    isLoggedIn: boolean;
    username?: string | undefined;
    email?: string | undefined;
}

export default function ProfilePage({isLoggedIn, username, email}: Props){
  
    return(
        <div>
           {isLoggedIn ? (
            <div>
                <Image 
                    src='/icons/user.png'
                    alt="User icon"
                    width={100}
                    height={100}
                />
                <h1>Username: {username}</h1>
                <h1>Email: {email}</h1>
                <Link href='/'>Home</Link>
                <LogoutButton />
            </div>

           ) : (
            <div>
                <h1>Login to preview account</h1>
                <Link href='/login'>Login</Link>
            </div>
            
           )}
            
        </div>
    )
}