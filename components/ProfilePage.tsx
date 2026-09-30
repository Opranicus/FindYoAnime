import Link from "next/link"
import LogoutButton from "./LogoutButton"

type Props = {
    isLoggedIn: boolean;
    username?: string |undefined;
}

export default function ProfilePage({isLoggedIn, username}: Props){
  
    return(
        <div>
           {isLoggedIn ? (
            <div>
                <h1>This is the profile page</h1>
                <h1>Welcome {username}</h1>
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