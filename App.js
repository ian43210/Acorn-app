import React, { useState } from 'react';

/* ACORN-APP: LIVE PROTOTYPE CODE 
  This file runs the interactive logic for the 5 financial principles:
  Budgeting, Saving, Spending, Debt, and Planning.
*/

export default function AcornGame() {
  // 1. App Memory (State)
  const [xp, setXp] = useState(250); // Matches Alex's current XP in the photo
  const [water, setWater] = useState(12);
  const [treeStage, setTreeStage] = useState("Sapling 🌱");

  // 2. Interactive Logic
  const waterTree = () => {
    if (water > 0) {
      setWater(prev => prev - 1);
      setXp(prev => prev + 30);
      if (xp >= 370) setTreeStage("Healthy Oak 🌳");
      alert("Habit Recorded! Alex watered the tree. +30 XP!");
    } else {
      alert("Out of water! Complete a lesson to earn more.");
    }
  };

  // 3. The Visual "Look" (UI)
  return (
    <div style={styles.phoneFrame}>
      <div style={styles.header}>
        <div style={{color: '#4B6B40', fontWeight: 'bold'}}>Açorn</div>
        <div>🔥 7   ⭐ 250</div>
      </div>

      <h2 style={styles.welcome}>Hey, Alex!</h2>
      
      <div style={styles.progressCard}>
        <div style={{fontWeight: 'bold'}}>Level 4 — {xp}/400 XP</div>
        <div style={styles.barBg}><div style={{...styles.barFill, width: `${(xp/400)*100}%`}}></div></div>
      </div>

      <div style={styles.treeArea}>
        <div style={{fontSize: '80px'}}>{treeStage}</div>
        <p style={{color: '#666'}}>Your money skills are growing!</p>
      </div>

      <div style={styles.actionCard}>
        <h4 style={{margin: 0}}>Daily Challenge</h4>
        <p style={{fontSize: '12px'}}>Track an expense today to earn water.</p>
        <button onClick={waterTree} style={styles.btn}>💧 WATER TREE ({water})</button>
      </div>
    </div>
  );
}

const styles = {
  phoneFrame: { background: '#FDFCF0', height: '600px', width: '300px', margin: 'auto', borderRadius: '30px', border: '8px solid #333', padding: '20px', fontFamily: 'sans-serif', position: 'relative' },
  header: { display: 'flex', justifyContent: 'space-between', marginBottom: '20px' },
  welcome: { margin: '10px 0' },
  progressCard: { background: '#fff', padding: '15px', borderRadius: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' },
  barBg: { height: '10px', background: '#eee', borderRadius: '5px', marginTop: '5px' },
  barFill: { height: '100%', background: '#4CAF50', borderRadius: '5px', transition: 'width 0.5s' },
  treeArea: { flex: 1, textAlign: 'center', marginTop: '50px' },
  actionCard: { background: '#fff', padding: '15px', borderRadius: '15px', position: 'absolute', bottom: '30px', width: '230px', boxShadow: '0 -2px 10px rgba(0,0,0,0.05)' },
  btn: { background: '#2196F3', color: '#fff', border: 'none', padding: '10px', borderRadius: '10px', width: '100%', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }
};
