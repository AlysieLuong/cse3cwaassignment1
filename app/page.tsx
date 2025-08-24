/* imports reusable components*/
"use client";

import React, { useState, useEffect } from "react";
import Header from './header';
import NavBar from './navbar';
import Footer from './footer';

/*defines shape of tabs in home page */
type Tab = {
  id: number; 
  title: string;
  content: string;
}

/* defining the home page*/
export default function Home() {
  /*list tabs*/
  const [tabs, setTabs] = useState<Tab[]>([
    { id: 1, title: "Step 1", content: "Content 1"},
    { id: 2, title: "Step 2", content: "Step 2:\n1. Install VSCode\n2. Install Chrome\n3. Install Node\n4. etc" },
    { id: 3, title: "Step 3", content: "Content 3"}
  ]);

  /*current active tab*/
  const [activeTab, setActiveTab] = useState(1);

  /*load tab from localStorage*/
  useEffect(() => {
    const saved = localStorage.getItem('tabs');
    if (saved) {
      const data = JSON.parse(saved);
      setTabs(data.tabs);
      setActiveTab(data.activeTab);
    }
  }, []);

  /*save tabs and activeTab to localStorage when changed*/
  useEffect(() => {
    localStorage.setItem('tabs', JSON.stringify({ tabs, activeTab }));
  }, [tabs, activeTab]);

  /*add new tabs*/
  const addTab = () => {
    if (tabs.length >= 15) return;
    const newId = Date.now();
    setTabs([...tabs, { id: newId, title: `Step ${tabs.length + 1}`, content: `Content ${tabs.length + 1}` }]);
  };
  
  /*remove tabs*/
  const removeTab = (id: number) => {
    if (tabs.length <= 1) return;
    const newTabs = tabs.filter(t => t.id !== id);
    setTabs(newTabs);
    if (activeTab === id) setActiveTab(newTabs[0].id);
  };

  /*update tab content*/
  const updateTab = (id: number, field: 'title' | 'content', value: string) => {
    setTabs(tabs.map(t => t.id === id ? { ...t, [field]: value} : t));
  };

  /*HTML code generation for all tabs opened*/
  const generateHTML = () => {
    return `<!DOCTYPE html>
<html><head><title>Tabs</title></head><body style="font-family:Arial;margin:20px;background:#f5f5f5">
<div style="max-width:800px;margin:0 auto;background:white;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.1)">
  <div style="display:flex;background:#f8f9fa;border-bottom:1px solid #ddd">
    ${tabs.map((t, i) => `<button style="background:${i === 0 ? 'white' : 'none'};border:none;padding:12px 20px;cursor:pointer;border-bottom:3px solid ${i === 0 ? '#007bff' : 'transparent'};color:${i === 0 ? '#007bff' : 'black'};font-weight:${i === 0 ? '600' : 'normal'}" onclick="show(${i})" onmouseover="this.style.background='#e9ecef'" onmouseout="this.style.background='${i === 0 ? 'white' : 'transparent'}'">${t.title}</button>`).join('')}
  </div>
  <div style="padding:30px;min-height:200px;line-height:1.6">
    ${tabs.map((t, i) => `<div id="tab${i}" style="display:${i !== 0 ? 'none' : 'block'}">${t.content.replace(/\n/g, '<br>')}</div>`).join('')}
  </div>
</div>
<script>
function show(i){
  for(let j=0;j<${tabs.length};j++){
    document.getElementById('tab'+j).style.display = j===i ? 'block' : 'none';
    let btn = document.querySelectorAll('button')[j];
    btn.style.background = j===i ? 'white' : 'transparent';
    btn.style.borderBottom = j===i ? '3px solid #007bff' : '3px solid transparent';
    btn.style.color = j===i ? '#007bff' : 'black';
    btn.style.fontWeight = j===i ? '600' : 'normal';
  }
}
</script></body></html>`;
  };

  /*current active tab object*/
  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <div>
      <Header />
      <NavBar />
      <main style={{ padding: "2rem" }}>
        <h1><b><big>Tabs</big></b></h1>

        {/*home/tab page layout - tab headers, content and out */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '20px' }}>
          
          {/*tab headers section*/}
          <div style={{ background: 'white', color: 'black', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #ddd' }}>
            <h2 style={{ color: 'black' }}>Tabs Headers <button onClick={addTab} disabled={tabs.length >= 15} style={{ color: 'black', background: 'white', border: '1px solid #ddd' }}>[+]</button></h2>
            {tabs.map(tab => (
              <div key={tab.id} style={{ display: 'flex', alignItems: 'center', margin: '10px 0', padding: '8px', background: activeTab === tab.id ? '#e3f2fd' : 'transparent', borderRadius: '4px' }}>
                <input
                  value={tab.title}
                  onChange={e => updateTab(tab.id, 'title', e.target.value)}
                  style={{ flex: 1, border: '1px solid #ddd', padding: '4px', marginRight: '8px', background: 'white', color: 'black' }}
                  onClick={() => setActiveTab(tab.id)}
                />
                {tabs.length > 1 && <button onClick={() => removeTab(tab.id)} style={{ color: 'black', background: 'white', border: '1px solid #ddd' }}>×</button>}
              </div>
            ))}
            <small style={{ color: '#666' }}>{tabs.length}/15 tabs</small>
          </div>

          {/*tab contents section*/}
          <div style={{ background: 'white', color: 'black', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #ddd' }}>
            <h2 style={{ color: 'black' }}>Tabs Content</h2>
            {currentTab && (
              <div>
                <p style={{ color: '#666' }}>Editing: {currentTab.title}</p>
                <textarea
                  value={currentTab.content}
                  onChange={e => updateTab(currentTab.id, 'content', e.target.value)}
                  style={{ width: '100%', height: '200px', fontFamily: 'monospace', fontSize: '12px', border: '1px solid #ddd', padding: '8px', background: 'white', color: 'black' }}
                />
              </div>
            )}
          </div>

          {/*output section*/}
          <div style={{ background: 'white', color: 'black', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '1px solid #ddd' }}>
            <h2 style={{ color: 'black' }}>Output</h2>
            <div style={{ border: '1px solid #ddd', padding: '10px', fontSize: '11px', fontFamily: 'monospace', maxHeight: '200px', overflow: 'auto', background: '#f8f9fa' }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                {generateHTML()}
              </pre>
            </div>
            <p style={{ fontSize: '12px', marginTop: '10px', color: '#666' }}>
              Copy this code to a .html file to run in browser
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}