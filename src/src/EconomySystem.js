// This tracks the "Earn & Water" loop
let userWaterBalance = 0;
let userXP = 250;

export const earnWater = (amount) => {
  userWaterBalance += amount;
  return `Alex now has ${userWaterBalance} droplets!`;
};

export const waterTree = () => {
  if (userWaterBalance > 0) {
    userWaterBalance -= 1;
    userXP += 50;
    return { status: "Growing", currentXP: userXP };
  }
  return { status: "Dry", msg: "Go play the Swipe Game to earn water!" };
};
