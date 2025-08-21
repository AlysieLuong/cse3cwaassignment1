import React from 'react';
import Link from 'next/link';
import Styles from './navbar.module.css';

type NavBarProps = {
    children?: React.ReactNode;
};

export default function NavBar({ children }: NavBarProps) {
  return (
    <nav className={Styles.nav}>
      <Link href="/" className={Styles.link}>Home</Link>
      <Link href="/about" className={Styles.link}>About</Link>
      <Link href="/coding-resources" className={Styles.link}>Coding Resources</Link>
      <Link href="/escape-room" className={Styles.link}>Escape Room</Link>
      {children}
    </nav>
  );
}
