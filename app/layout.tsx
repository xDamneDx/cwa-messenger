import "./globals.css";

export const metadata = {
  title: "Messenger App",
  description: "Real-Time messenger clone app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}