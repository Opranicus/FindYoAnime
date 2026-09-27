import "./globals.css";
import {anton} from '@/utils/fonts';
import NavBar from "@/components/NavBar";
import { createClient } from "@/utils/supabase/server";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default async function RootLayout({ children, modal }: Props) {

  const supabase = await createClient();
  const {data: {user}} = await supabase.auth.getUser() 
  const username = user?.user_metadata.username;

  return (
    <html
      lang="en"
    >
      <body className={`min-h-screen bg-[#0F172A]`}>
        <NavBar isLoggedIn={user?.id ? true : false} username={username} />
        {children}
        {modal}
      </body>
    </html>
  );
}
