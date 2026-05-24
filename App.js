import React, { useState } from 'react';
/* ACORN-APP: PRESENTATION PROTOTYPE
  This code connects the UI from your images to the game logic.
*/

export default function AcornApp() {
  // 1. Setup the "State" (The app's memory)
  const [xp, setXp] = useState(250);
  const [water, setWater] = useState(12);
  const [treeStage, setTreeStage] = useState("Sapling");

  // 2. The "Action" (What happens when you click)
  const handleWaterTree = () => {
    if (water > 0) {
      setWater(water - 1);
      setXp(xp + 20);
      if (xp > 350) setTreeStage("Young Oak"); // Visual change logic
      alert("Alex is watering the tree! +20 XP");
    }
  };

  // 3. The "Visuals" (How it looks like your photos)
  return (
    <div style={styles.container}>
      {/* Top Bar: Like your mockup with Level & Fire Icon */}
      <div style={styles.header}>
        <span>🔥 7 Days</span>
        <span>⭐ Level 4 ({xp}/400 XP)</span>
      </div>

      {/* Main Forest View */}
      <div style={styles.forest}>
        <h1 style={{fontSize: '50px'}}>{treeStage === "Sapling" ? "🌱" : "🌳"}</h1>
        <p>Alex the Squirrel is keeping watch!</p>
      </div>

      {/* Action Card: Like the "Start Lesson" card in your photo */}
      <div style={styles.card}>
        <h3>Daily Mission: Needs vs Wants</h3>
        <p>Earn water for your tree by making smart choices.</p>
        <button onClick={handleWaterTree} style={styles.button}>
          WATER TREE ({water} drops left)
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '20px', backgroundColor: '#F9F6EE', height: '100vh', textAlign: 'center' },
  header: { display: 'flex', justifyContent: 'space-between', marginBottom: '40px', fontWeight: 'bold' },
  forest: { margin: '50px 0', border: '2px dashed #ccc', padding: '20px', borderRadius: '20px' },
  card: { backgroundColor: '#fff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
  button: { backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '10px', cursor: 'pointer' }
};
