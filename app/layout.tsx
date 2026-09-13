import "./globals.css";
import {anton} from '@/utils/fonts';
type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
    >
      <body className={`min-h-screen bg-[#0F172A]`}>{children}</body>
    </html>
  );
}
