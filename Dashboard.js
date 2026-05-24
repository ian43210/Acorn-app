// This is the Main Screen layout for Acorn-app
const Dashboard = {
  header: "Welcome back, Alex!", // Greeting the user
  stats: {
    level: 4,
    xp: "250 / 400",
    streak: "7 Days" // Encouraging daily habits [cite: 23]
  },
  
  // The visual 'Life Tree' section
  mainView: "Forest_Display", 
  
  // Daily Quests mapped to the 5 Principles [cite: 17, 104]
  dailyChallenges: [
    { task: "Track an expense", reward: "+10 XP", category: "Budgeting" },
    { task: "Save a little", reward: "+15 XP", category: "Saving" },
    { task: "Identify a scam", reward: "+20 XP", category: "Protection" }
  ],

  navigation: ["Home", "Lessons", "Challenges", "Wallet", "Profile"]
};

function startLesson() {
  return "Loading 'Budgeting Basics'... Let's grow that tree!";
}
