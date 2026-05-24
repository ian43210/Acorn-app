// This logic helps youth distinguish between essential and impulsive spending
const swipeItems = [
  { item: "Daily Coffee", type: "Want", xp: 10 },
  { item: "Monthly Rent", type: "Need", xp: 20 },
  { item: "New Gaming Skin", type: "Want", xp: 10 },
  { item: "Savings Deposit", type: "Need", xp: 30 }
];

function handleSwipe(userChoice, actualType) {
  if (userChoice === actualType) {
    return "Great job! You earned XP and Water Droplets for your tree.";
  } else {
    return "Think again! Is this really a priority for your long-term goal?";
  }
}
