// Mapping the Alex Mockup to Real Actions
const InteractiveElements = {
  "Top_Left_Menu": "Opens sidebar for Budgeting, Saving, and Debt settings", // [cite: 17, 67]
  "Streak_Fire_Icon": "Shows popup: 'You are on a 7-day streak! Keep going!'", // [cite: 23]
  "Water_Droplet_Counter": "Tapping this shows how much more water you need for the next level",
  "The_Main_Tree": "Tapping different branches opens specific lessons (e.g., Scam Detection)", // [cite: 57]
  "Daily_Challenge_Card": "Clicking 'Track an expense' opens the camera to scan a receipt"
};

function onInteraction(elementName) {
  return "You clicked " + elementName + ". Transitioning to game mode...";
}
