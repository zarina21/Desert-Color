import React from "react"
import Link from "next/link"
import styles from '/src/app/styles/header.module.css'
import Image from "next/image"

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image width={35} height={35} src="/DesertColor.png" alt="Imagen Logo" />
            </Link>
            <div>
                <nav className={styles.navegador} >
                    <div>
                        <Link href="/">Home</Link>
                    </div>
                    <div>
                        <Link href="/Shop">Shop</Link>
                    </div>
                    <div>
                        <Link href="/About-us">About us</Link></div>
                    <div>
                        <Link href="/Blog">Blog</Link>
                    </div>
                </nav>
            </div>
            <div>
                <div className={styles.inicio}>
                    <div > 
                        <Link href="/">login</Link>
                    </div>
                    <div>
                        <Link href="/">Sign Up</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header