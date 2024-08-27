import styles from "../../../styles/shop.module.css"
import Link from "next/link";
import MiniaturaProduct from "../../../components/miniaturaProduct";

export default function shopPage() {
    return (
    <div className={styles.columns}>
        <div className={styles.categorias}>
            <div className={styles.titleCategorie}>
                <h2>Categories</h2>
            </div>
            <div className={styles.lista}>
                <ol>
                    <li>
                        <Link href="/">Majestic Products</Link>
                    </li>
                    <li>
                        <Link href="/">Business Card</Link>
                    </li>
                    <li>
                        <Link href="/">Marketing Products</Link>
                    </li>
                    <li>
                        <Link href="/">Sign and Banners</Link>
                    </li>
                    <li>
                        <Link href="/">Labels and Stikers</Link>
                    </li>
                </ol>
            </div>
        </div>
        <div>
            <div className={styles.listaProductos}>
                <div>
                    <MiniaturaProduct/>
                </div>
                <div>
                    <MiniaturaProduct/>
                </div>
                <div>
                    <MiniaturaProduct/>
                </div>
            </div>
        </div>
    </div>
    );
}