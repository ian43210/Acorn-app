// This file handles how the UI 'reacts' to Alex's actions
const UI_Feedback = {
  onCorrectSwipe: {
    animation: "Confetti_Burst",
    sound: "Coin_Chime.mp3",
    haptic: "Success_Vibration"
  },
  
  onTreeGrowth: {
    animation: "Branch_Sprout_Magic",
    screenEffect: "Golden_Hour_Glow",
    message: "Your financial confidence is growing!"
  },

  onScamDetected: {
    animation: "Shield_Guard",
    sound: "Level_Up.wav",
    vibration: "Strong_Pulse"
  }
};

function triggerJuice(actionType) {
  // This function makes the app feel "alive" when Alex interacts
  console.log("Triggering visual feedback for: " + actionType);
}
