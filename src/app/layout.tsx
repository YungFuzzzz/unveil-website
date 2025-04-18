import './globals.css';
import Script from 'next/script';
import 'leaflet/dist/leaflet.css';

export const metadata = {
  title: 'Unveil',
  description:
    'Discover Mechelen’s best-kept secrets, historical landmarks, and vibrant local culture with Unveil. Your personal, self-guided tour of Mechelen awaits!',
  keywords: [
    'Unveil',
    'Unveil Mechelen',
    'Mechelen city tours',
    'self-guided tours Mechelen',
    'Mechelen walking tours',
    'discover Mechelen with Unveil',
    'best walking tours Mechelen',
    'local experiences Mechelen',
    'explore Mechelen freely',
    'Unveil Belgium',
    'tour Mechelen at your pace',
    'Mechelen attractions',
    'hidden stories Mechelen',
    'Mechelen landmarks tour',
    'Mechelen city guide',
    'self-guided tour Mechelen',
    'explore Belgium with Unveil',
    'Unveil history Mechelen',
    'Unveil travel guide Mechelen',
  ],
  metadataBase: new URL('https://unveil.be'),
  icons: {
    icon: '/Logo2.svg',
    shortcut: '/Logo2.svg',
    apple: '/Logo2.svg',
  },
  openGraph: {
    title: 'Unveil – Explore Mechelen’s history and culture',
    description:
      'Unveil offers personalized self-guided walking tours through Mechelen. Discover hidden stories, cultural landmarks, and vibrant local life. Book your tour today!',
    url: 'https://unveil.be',
    siteName: 'Unveil Mechelen',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Explore Mechelen with Unveil',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@unveilapp',
    creator: '@unveilapp',
    title: 'Unveil – Explore Mechelen’s history and culture',
    description:
      'Start your journey today! Discover Mechelen’s hidden stories, local gems, and rich history with Unveil’s self-guided walking tours.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Unveil Team" />

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CNK2LQEY2K"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CNK2LQEY2K');
            `,
          }}
        />

        {/* Favicon Links */}
        <link rel="icon" href="/Logo2.svg" />
        <link rel="apple-touch-icon" href="/Logo2.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#5CD4FF" />

        {/* OpenGraph and Twitter metadata */}
        <meta property="og:title" content="Unveil – Explore Mechelen’s history and culture" />
        <meta
          property="og:description"
          content="Unveil offers self-guided tours of Mechelen. Discover historical landmarks and vibrant local culture with Unveil!"
        />
        <meta property="og:image" content="https://unveil.be/og-image.jpg" />
        <meta property="og:url" content="https://unveil.be" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Unveil Mechelen" />

        <meta name="twitter:title" content="Unveil – Explore Mechelen’s history and culture" />
        <meta
          name="twitter:description"
          content="Start your journey today! Discover Mechelen’s hidden stories, local gems, and rich history with Unveil’s self-guided walking tours."
        />
        <meta name="twitter:image" content="https://unveil.be/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data for Google (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://unveil.be",
            "logo": "https://unveil.be/Logo2.svg",
            "name": "Unveil",
            "sameAs": [
              "https://twitter.com/unveilapp",
              "https://www.instagram.com/unveilapp",
            ],
          })}
        </script>
      </head>
      <body className="antialiased">
        {children}

        {/* Chatbase Script */}
        <Script
          id="chatbase-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="1P38GU8Yt3FndMysJsTOr";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`,
          }}
        />
      </body>
    </html>
  );
}
