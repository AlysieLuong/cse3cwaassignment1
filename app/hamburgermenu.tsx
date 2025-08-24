/* imports reusable components*/
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './hamburgermenu.module.css';

/*defines reusable component  hamburger menu*/
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  /*toggle hamburger menu open/close*/
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      
      <div className={styles.container}>
        {/*hamburger icon*/}
        <div 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {/*hamburger bars*/}
          <div className={isOpen ? styles.barOpen : styles.bar}></div>
          <div className={isOpen ? styles.barOpen : styles.bar}></div>
          <div className={isOpen ? styles.barOpen : styles.bar}></div>
        </div>
      </div>

      {/*page links*/}
      <div className={isOpen ? styles.menuOpen : styles.menu}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/pre-lab-questions" onClick={closeMenu}>
              Pre-lab Questions
            </Link>
          </li>
          <li>
            <Link href="/coding-resources" onClick={closeMenu}>
              Coding Resources
            </Link>
          </li>
          <li>
            <Link href="/escape-room" onClick={closeMenu}>
              Escape Room
            </Link>
          </li>
        </ul>
      </div>

      {/*overlay behind menu*/}
      {isOpen && (
        <div 
          className={styles.overlay} 
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}