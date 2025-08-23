"use client";

import React, {useState, useEffect } from "react";
import Header from './header';
import NavBar from './navbar';
import Footer from './footer';

type Tab = {
  id: number; 
}

export default function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <main style={{ padding: "2rem" }}>
        <h1>Tabs</h1>
        <p>This is the home page content.</p>
      </main>
      <Footer />
    </div>
  );
}