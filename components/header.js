"use client"
import React, { useState } from "react"
import Link from "next/link";
const Header = () => {
    const [logged, setLogged] = useState(true);

    return (
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img width={100} height={100} src="DesertColor.svg" alt="My Icon" />
                    </a>
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                    <Link href="/" class="navbar-item">
                        Home
                    </Link>
                    <Link href="/Shop" class="navbar-item">
                        Shop
                    </Link>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        More
                        </a>
                        <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item is-selected">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider"/>
                        <a class="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            {
                            logged &&
                            <div class="buttons">
                                <a class="button is-primary" href="/Sign-up">
                                    <p className="has-text-white">Sign up</p>
                                </a>
                                <a class="button is-light" href="/Login">
                                    Log in
                                </a>
                            </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header