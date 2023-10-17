import "./pico.css";
import "./custom.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farmacia D'Errico - Guardia Sanframondi",
  description:
    "Farmacia D'Errico a Guardia Sanframondi, orari di apertura e turni delle farmacie di zona aggiornati",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body /* className={inter.className} */>
        <header className="container">
          <h1>&#9882; Farmacia D&apos;Errico</h1>

          <address>
            Corso Umberto 108, Guardia Sanframondi (BN)
            <a href="tel:+390824817828">
              <u>&#9743; 0824 817828</u>
            </a>
            <a href="https://www.google.com/maps/place/Farmacia+D'Errico+Michele/@41.2556395,14.5971424,15z/data=!4m6!3m5!1s0x133a410ef8cbbacd:0xc331d9a6d1b8f749!8m2!3d41.2556395!4d14.5971424!16s%2Fg%2F1tdjlkx9?entry=ttu">
              <u> &#10148; Maps</u>
            </a>
          </address>

          {/* <a href="tel:+390824817828">
            &#9742; <u>0824 8178280</u>
          </a>
          <a href="https://www.google.com/maps/place/Farmacia+D'Errico+Michele/@41.2556395,14.5971424,15z/data=!4m6!3m5!1s0x133a410ef8cbbacd:0xc331d9a6d1b8f749!8m2!3d41.2556395!4d14.5971424!16s%2Fg%2F1tdjlkx9?entry=ttu">
            &#10148; <u>Maps</u>
          </a> */}
        </header>
        {children}
      </body>
    </html>
  );
}
