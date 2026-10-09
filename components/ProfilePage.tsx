import { anton, viga } from "@/utils/fonts";
import { LikedAnime } from "./LikedAnime";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import Image from "next/image";
import Button from "./Button";

type Props = {
  isLoggedIn: boolean;
  username?: string | undefined;
  email?: string | undefined;
};

export default function ProfilePage({ isLoggedIn, username, email }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      {isLoggedIn ? (
        <div>
          <div className="bg-[#050a17f9] m-5 mt-20 rounded-xl flex flex-col justify-center items-center gap-3 p-5 max-w-xl w-md">
            <Image
              src="/icons/user.png"
              alt="User icon"
              width={120}
              height={120}
            />
            <div className="flex flex-col text-center gap-3 mt-5">
              <h1
                className={`text-[21px] text-center text-white ${anton.className} flex items-center gap-2`}
              >
                Username:
                <span className={`text-[cyan] ${viga.className}`}>
                  {username}
                </span>
              </h1>

              <h1
                className={`text-[21px] text-center text-white ${anton.className} flex items-center gap-2`}
              >
                Email:
                <span className={`text-[cyan] ${viga.className}`}>{email}</span>
              </h1>
            </div>

            <div className="flex items-center justify-center gap-5 mt-10">
              <Button label="Home" link="/" />
              <LogoutButton />
            </div>
          </div>

        <h1 className={`text-white text-3xl mt-15 ${anton.className}`}>Anime List:</h1>
        <LikedAnime />
        </div>
      ) : (
        <div>
          <h1>Login to preview account</h1>
          <Link href="/login">Login</Link>
        </div>
      )}
    </div>
  );
}
