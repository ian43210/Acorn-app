// This defines what a "Financial Battle Card" looks like
const BattleCard = {
  name: "Compare Prices",
  cost: "1 Water Droplet",
  effect: "Deals 15 Damage to the Impulse Monster",
  description: "Checking other shops helps you stay in control of your budget!"
};

// Logic to check if the user can "play" the card
function playCard(userWater) {
  if (userWater >= 1) {
    return "Success! You saved money and damaged the boss.";
  } else {
    return "Not enough Water! Complete a lesson to earn more.";
  }
}
