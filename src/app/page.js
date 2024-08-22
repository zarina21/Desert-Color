import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";
import Products from "./products";


export default function Home() {
  return (
    <div>
      <Header />
      <Products />
    </div>
  );
}
