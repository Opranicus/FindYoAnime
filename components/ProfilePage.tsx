import Link from "next/link"

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