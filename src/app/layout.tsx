import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AL-MUIZZ v ULTIMATE | Sovereign Command',
  description: 'The Absolute Neural Sovereign Platform for Commander Al-Ghazali.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Source+Code+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-code antialiased min-h-screen bg-black text-foreground scanline-effect">
        {children}
      </body>
    </html>
  );
}