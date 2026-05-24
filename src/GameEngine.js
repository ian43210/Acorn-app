// ACORN-APP: THE INTERACTIVE MINI-GAME ENGINE
const items = [
  { id: 1, name: "Bubble Tea", type: "Want", reward: 1 },
  { id: 2, name: "Textbook", type: "Need", reward: 2 },
  { id: 3, name: "Bus Fare", type: "Need", reward: 1 },
  { id: 4, name: "Designer Tee", type: "Want", reward: 3 }
];

export const playRound = (userChoice, currentItemIndex) => {
  const item = items[currentItemIndex];
  if (userChoice === item.type) {
    return { success: true, waterEarned: item.reward, msg: "Correct! Alex earns water." };
  } else {
    return { success: false, waterEarned: 0, msg: "Wait! Is that really a Need?" };
  }
};
