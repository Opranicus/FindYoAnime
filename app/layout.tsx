import "./globals.css";
import {anton} from '@/utils/fonts';
import NavBar from "@/components/NavBar";
import { createClient } from "@/utils/supabase/server";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: Props) {
  return (
    <html
      lang="en"
    >
      <body className={`min-h-screen bg-[#0F172A]`}>
        <NavBar />
        {children}
        {modal}
      </body>
    </html>
  );
}
