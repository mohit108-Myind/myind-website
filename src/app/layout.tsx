import "./globals.css";

export const metadata = {
  title: "MYIND Media — Performance Marketing for D2C",
  description:
    "We help D2C fashion, wellness, and beauty brands grow through paid media, CRO, and analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
