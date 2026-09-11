import "./globals.css";
type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
