// This module helps users identify risky "finfluencer" advice or scams
const scamScenarios = [
  {
    threat: "DM from 'Crypto-King'",
    message: "Give me $50, I'll give you $500 back in 1 hour! No risk!",
    isScam: true,
    advice: "If it sounds too good to be true, it usually is. Real investments take time."
  },
  {
    threat: "Government SMS",
    message: "Your account is locked. Click this suspicious link to verify.",
    isScam: true,
    advice: "Official agencies will never ask for your password via a text link."
  }
];

function scanThreat(input) {
  // Logic to 'damage' the boss if the user identifies the scam correctly
  return "Analyzing... Stay critical and don't be a 'Cheerful Robot'!";
}
