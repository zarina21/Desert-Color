"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthClass from "../authClass"; // Asegúrate de tener el método logout en AuthClass

const Header = () => {
    const [logged, setLogged] = useState(false);
    const [isBurgerActive, setIsBurgerActive] = useState(false); // Estado para el menú de la hamburguesa
    const router = useRouter(); // Inicializar el router

    // Manejo del clic en el botón de la hamburguesa
    const toggleBurgerMenu = () => {
        setIsBurgerActive(!isBurgerActive);
    };

    // Verifica si el usuario está autenticado
    useEffect(() => {
        const checkAuth = () => {
            const user = AuthClass.getCurrentUser();
            setLogged(!!user);
        };

        checkAuth();

        const unsubscribe = AuthClass.onAuthStateChanged(user => {
            setLogged(!!user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await AuthClass.logout();
            setLogged(false);
            router.push('/'); // Redirigir a la página de inicio después de cerrar sesión
        } catch (e) {
            console.error("Logout failed:", e);
        }
    };

    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img width={100} height={100} src="DesertColor.svg" alt="My Icon" />
                    </a>

                    {/* Botón de hamburguesa para dispositivos móviles */}
                    <button
                        onClick={toggleBurgerMenu}
                        className={`navbar-burger ${isBurgerActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded={isBurgerActive ? "true" : "false"}
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                {/* Menu de navegación que se muestra o se oculta con el botón de hamburguesa */}
                <div id="navbarBasicExample" className={`navbar-menu ${isBurgerActive ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <Link href="/" className="navbar-item">
                            Home
                        </Link>
                        <Link href="/Shop" className="navbar-item">
                            Shop
                        </Link>
                        <Link href="/About-us" className="navbar-item">
                            About us
                        </Link>
                        <Link href="/Term-and-Conditions" className="navbar-item">
                            Term and conditions
                        </Link>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">More options</a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item">My account</a>
                                <a className="navbar-item is-selected">Security</a>
                                <a className="navbar-item">Setting</a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">Report an issue</a>
                                <a className="navbar-item">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            {logged ? (
                                <div className="buttons">
                                    {/* Botón de carrito */}
                                    <a className="button is-light">
                                        <span className="icon">
                                            <i className="fas fa-shopping-cart"></i> {/* Ícono del carrito */}
                                        </span>
                                    </a>
                                    {/* Botón de log out */}
                                    <button className="button is-light" onClick={handleLogout}>
                                        Log out
                                    </button>
                                </div>
                            ) : (
                                <div className="buttons">
                                    <Link href="/Sign-up" className="button is-primary">
                                        <p className="has-text-white">Sign up</p>
                                    </Link>
                                    <Link href="/Login" className="button is-light">
                                        Log in
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
