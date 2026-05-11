import "../styles.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Loch Monster Electric | Legendary Electrical Work, Done Right",
  description: "Licensed electrical contractor serving the Twin Cities metro. Residential, commercial & HOA electrical services. Call 763-292-1191.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Oswald:wght@400;500;600;700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
