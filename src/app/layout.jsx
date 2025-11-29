import Script from 'next/script';

export const metadata = {
  title: "Farhana Islam",
  description: "Farhana Islam's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/style/style.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/lightgallery.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        {children}
        <Script src="/assets/js/jquery-1.12.4.min.js" />
        <Script src="/assets/js/jquery.slick.min.js" />
        <Script src="/assets/js/lightgallery.min.js" />
        <Script src="/assets/js/wow.min.js" />
        <Script src="/assets/js/particles.min.js" />
        <Script src="/assets/js/main.js" />
        <Script src="https://kit.fontawesome.com/33a3378ded.js" crossOrigin="anonymous" />
      </body>
    </html>
  );
}