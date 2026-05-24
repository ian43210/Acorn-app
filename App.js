import React, { useState } from 'react';

export default function AcornApp() {
  const [screen, setScreen] = useState('home'); // 'home' or 'game'
  const [xp, setXp] = useState(250);
  const [water, setWater] = useState(0); 
  const [stage, setStage] = useState("Sapling 🌱");

  // MINI-GAME DATA
  const items = [
    { name: "Bubble Tea", type: "Want" },
    { name: "Electricity Bill", type: "Need" },
    { name: "Gaming Skin", type: "Want" },
    { name: "Rice & Veggies", type: "Need" }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // LOGIC: WATERING THE TREE
  const waterTree = () => {
    if (water > 0) {
      setWater(w => w - 1);
      setXp(x => x + 50);
      if (xp >= 350) setStage("Healthy Oak 🌳");
    } else {
      alert("No water! Play the game to earn some.");
    }
  };

  // LOGIC: PLAYING THE GAME
  const handleSwipe = (choice) => {
    if (choice === items[currentIndex].type) {
      setWater(w => w + 1);
      alert("Correct! You earned 1 Water Droplet 💧");
    } else {
      alert("Think again! Is that a necessity?");
    }
    
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setScreen('home'); // Go back to tree once finished
      setCurrentIndex(0);
    }
  };

  return (
    <div style={styles.phone}>
      {screen === 'home' ? (
        <div style={styles.content}>
          <div style={styles.header}>⭐ {xp} XP | 💧 {water} Drops</div>
          <div style={styles.forest}>
            <div style={{fontSize: '80px'}}>{stage}</div>
            <p>Alex says: "Keep growing!"</p>
          </div>
          <button onClick={() => setScreen('game')} style={styles.btnGame}>PLAY: NEEDS VS WANTS</button>
          <button onClick={waterTree} style={styles.btnWater}>WATER TREE</button>
        </div>
      ) : (
        <div style={styles.content}>
          <h3>Is this a Need or a Want?</h3>
          <div style={styles.itemCard}>
            <h2 style={{color: '#4CAF50'}}>{items[currentIndex].name}</h2>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
            <button onClick={() => handleSwipe('Want')} style={styles.btnWant}>WANT ❌</button>
            <button onClick={() => handleSwipe('Need')} style={styles.btnNeed}>NEED ✅</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  phone: { width: '300px', height: '600px', backgroundColor: '#FDFCF0', margin: 'auto', borderRadius: '30px', border: '8px solid #333', fontFamily: 'sans-serif', overflow: 'hidden' },
  content: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '20px' },
  header: { position: 'absolute', top: '30px', fontWeight: 'bold' },
  forest: { textAlign: 'center', marginBottom: '40px' },
  itemCard: { background: '#fff', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginBottom: '30px' },
  btnGame: { backgroundColor: '#FF9800', color: 'white', border: 'none', padding: '15px', borderRadius: '10px', width: '100%', marginBottom: '10px', cursor: 'pointer' },
  btnWater: { backgroundColor: '#2196F3', color: 'white', border: 'none', padding: '15px', borderRadius: '10px', width: '100%', cursor: 'pointer' },
  btnWant: { backgroundColor: '#FF5252', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px' },
  btnNeed: { backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px' }
};
