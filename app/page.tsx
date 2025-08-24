"use client";

import React, {useState, useEffect } from "react";
import Header from './header';
import NavBar from './navbar';
import Footer from './footer';

type Tab = {
  id: number; 
  title: string;
  content: string;
}

export default function Home() {
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 1, title: "Step 1", content: "Content 1"},
    { id: 2, title: "Step 2", content: "Step 2:\n1. Install VSCode\n2. Install Chrome\n3. Install Node\n4. etc" },
    { id: 3, title: "Step 3", content: "Content 3"}
  ]);
  const [activeTab, setActiveTab] = useState(1);

  const addTab =() => {
    if (tabs.length >= 15) return;
    const newId = Date.now();
    setTabs([...tabs, { id: newId, title: `Step ${tabs.length + 1}`, content: `Content ${tabs.length + 1}` }]);
  };
  
  const removeTab = (id: number) => {
    if (tabs.length <= 1) return;
    const newTabs = tabs.filter(t => t.id !== id);
    setTabs(newTabs);
    if (acctiveTab == id) setActiveTab(newTabs[0].id);
  };

  const updateTab = (id: number, field: 'title' | 'content', value: string) => {
    setTabs(tabs.map(t => t.id == id ? { ...t, [field]: value} : t));
  };

  const generateHTML = () => {
    
  }