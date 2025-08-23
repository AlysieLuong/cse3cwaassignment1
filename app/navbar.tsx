
import React from 'react';
import Link from 'next/link';
import Styles from './navbar.module.css';
import HamburgerMenu from './hamburgermenu';

type NavBarProps = {
    children?: React.ReactNode;
};

export default function NavBar({ children }: NavBarProps) {
  return (
    <div className={Styles.navContainer}>
      {/* Main Navigation Buttons - Far Left */}
      <nav className={Styles.navbar}>
        <Link href="/" className={Styles.navButton}>Home</Link>
        <Link href="/about" className={Styles.navButton}>About</Link>
        <Link href="/pre-lab-questions" className={Styles.navButton}>Pre-Lab Questions</Link>
        <Link href="/coding-resources" className={Styles.navButton}>Coding Resources</Link>
        <Link href="/escape-room" className={Styles.navButton}>Escape Room</Link>
        {children}
      </nav>

      {/* Hamburger Menu - Far Right */}
      <div className={Styles.hamburgerContainer}>
        <HamburgerMenu />
      </div>
    </div>
  );
}