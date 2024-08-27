import React from "react"
import Link from "next/link"
import styles from '../styles/productList.module.css'
import Image from "next/image"



const MiniaturaProduct = () => {
    return (
        <div className={styles.miniatura}>
            <Link href="/Shop/BC">
                <div>
                    <Image width={250} height={250} src="/fotos.png" alt="logo imagen" />
                </div>
                <div>
                    <p>Product Name: ------</p>
                    <p>category: -------</p>
                    <p>description: ---------------------------------------------------------------</p>
                </div>
            </Link>
        </div>
    )
}

export default MiniaturaProduct