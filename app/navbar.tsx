"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Styles from './navbar.module.css';
import HamburgerMenu from './hamburgermenu';

type NavBarProps = {
    children?: React.ReactNode;
};

export default function NavBar({ children }: NavBarProps) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.body.classList.add(Styles.dark);
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.add("dark");
            localStorage.setItem("Theme", "dark");
        }
        setDarkMode(!darkMode);
    }

  return (
    <div className={Styles.navContainer}>
      <nav className={Styles.navbar}>
        <Link href="/" className={Styles.navButton}>Home</Link>
        <Link href="/pre-lab-questions" className={Styles.navButton}>Pre-Lab Questions</Link>
        <Link href="/coding-resources" className={Styles.navButton}>Coding Resources</Link>
        <Link href="/escape-room" className={Styles.navButton}>Escape Room</Link>
        {children}
      </nav>

      <div className={Styles.hamburgerContainer}>
        <Link href="/about" className={Styles.navButton}>About</Link>
        <button onClick={toggleTheme} className={Styles.themeToggle}>
            {darkMode ? "☀" : "☾"}
        </button>
        <HamburgerMenu />
      </div>
    </div>
  );
}