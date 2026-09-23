import type { Metadata } from 'next';
import './globals.css';
import { getSiteUrl } from '@/lib/site-url';

const origin = getSiteUrl();
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: 'Rubaid Sharif Mahbub — Flutter Developer | Mobile App Developer',
  description: 'Flutter developer in Dhaka building Android and iOS applications. Explore Prochesta, Pollable, Dr Panda MD Academy, and professional mobile development experience.',
  alternates: { canonical: '/' },
  icons: { icon:'/favicon.svg', shortcut:'/favicon.svg' },
  openGraph: { title:'Rubaid Sharif Mahbub — Flutter Developer',description:'Cross-platform mobile applications. Thoughtful interfaces. Real products.',url:origin,type:'website',locale:'en_US',siteName:'Rubaid Sharif Mahbub'},
  twitter: {card:'summary',title:'Rubaid Sharif Mahbub — Flutter Developer',description:'Explore my Flutter applications, professional experience, and technical expertise.'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en" className="dark"><head><link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></head><body>{children}</body></html>;
}
