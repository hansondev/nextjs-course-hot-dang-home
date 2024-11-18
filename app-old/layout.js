import { Poppins, Aboreto } from "next/font/google";
import "../styles/globals.css";
import { getNavItems } from "utils/getNavItems";
import { MainMenu } from "components/MainMenu";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-aboreto",
});

export default async function RootLayout({ children }) {
  const data = await getNavItems();
  console.log({ data });
  return (
    <html lang="en" className={`${poppins.variable} ${aboreto.variable}`}>
      <head></head>
      <body className="font-body">
        <MainMenu
          items={data.mainMenuItems}
          ctaButtonLabel={data.ctaButtonLabel}
          ctaButtonDestination={data.ctaButtonDestination}
        />
        {children}
      </body>
    </html>
  );
}
