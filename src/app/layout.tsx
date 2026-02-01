import Script from 'next/script'
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
      <body className="bg-white text-neutral-900 antialiased">{children}
        <Script id="apollo-tracking" strategy="afterInteractive">
          {` function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"697349b6ac7a9000157ae147"})},
document.head.appendChild(o)}initApollo();
          `}
        </Script>
        
      </body>
    </html>
  );
}
