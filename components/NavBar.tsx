import { anton } from "@/utils/fonts";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-5 bg-[#050a17f9]">
      <h1 className={`text-2xl text-center text-white ${anton.className}`}>
        Find Yo Anime
      </h1>
      <nav>
        <Link href="/sign-in" className="text-white">Profile</Link>
      </nav>
    </div>
  );
}
