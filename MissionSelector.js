// This file controls the interactive "Quest Map" Alex sees
const DailyMissions = [
  {
    id: "m1",
    title: "The Budgeting Path",
    description: "Navigate a weekend with only $50. Can you survive?",
    type: "Simulation",
    reward: "20 Water Droplets"
  },
  {
    id: "m2",
    title: "Scam Spotter",
    description: "Alex received a weird SMS. Is it a scam?",
    type: "Quiz Battle",
    reward: "15 Water Droplets"
  },
  {
    id: "m3",
    title: "Compound Interest Magic",
    description: "See how your savings grow over 10 years in 10 seconds!",
    type: "Visualizer",
    reward: "10 Sunlight Points"
  }
];

function loadMission(id) {
  return "Entering mission: " + id + ". Growing money skills!";
}
