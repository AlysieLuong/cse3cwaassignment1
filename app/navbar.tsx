/* imports reusable components*/
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Styles from './navbar.module.css';
import HamburgerMenu from './hamburgermenu';

/*defines prop types for navbar*/
type NavBarProps = {
    children?: React.ReactNode;
};

/*defines reusable component - navbar*/
export default function NavBar({ children }: NavBarProps) {
    const [darkMode, setDarkMode] = useState(false);
    /*check localStorage for saved light/dark mode*/
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.body.classList.add("dark");
        }
    }, []);

    /*toggle light/dark mode*/
    const toggleTheme = () => {
        if (darkMode) {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setDarkMode(!darkMode);
    }

  return (
    <div className={Styles.navContainer}>
      <nav className={Styles.navbar}>
        {/*navbar links to other pages*/}
        <Link href="/" className={Styles.navButton}>Home</Link>
        <Link href="/pre-lab-questions" className={Styles.navButton}>Pre-Lab Questions</Link>
        <Link href="/coding-resources" className={Styles.navButton}>Coding Resources</Link>
        <Link href="/escape-room" className={Styles.navButton}>Escape Room</Link>
        {children}
      </nav>

      {/*light/dark mode link*/}
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