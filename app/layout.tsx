import "./globals.css";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default async function RootLayout({ children, modal }: Props) {

  return (
    <html
      lang="en"
    >
      <body className={`min-h-screen bg-[#0F172A]`}>
        {children}
        {modal}
      </body>
    </html>
  );
}
