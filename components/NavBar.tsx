import { anton, viga } from "@/utils/fonts";
import Link from "next/link";

type Props = {
  isLoggedIn: boolean;
  username?: string;
};

export default function NavBar({ isLoggedIn, username }: Props) {
 
  return (
    <div className="flex justify-between items-center p-5 bg-[#050a17f9]">
      <h1 className={`text-2xl text-center text-white ${anton.className}`}>
        Find Yo Anime
      </h1>

      <nav>
        {isLoggedIn ? (
          <div>
            <h1 className={`flex justify-center items-center gap-3 text-[18px] text-center text-white ${anton.className}`}>
              Welcome, 
              <span className={`text-[18px] text-center text-[cyan] ${viga.className}`}>
                <Link href="/profile"> {username}</Link>
              </span>
            </h1>
          </div>
        ) : (
          <div>
            <Link href="/login" className={`text-white ${viga.className}`}>
              Login
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
