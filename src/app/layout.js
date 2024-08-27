import { Inter } from "next/font/google";
import "/styles/globals.scss"
import Header from "../../components/header";
import Footer from "../../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desert Color Usa",
  description: "personaliza y expande la imagen de tu negocio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        
        <div className="container">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
