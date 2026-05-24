// This logic controls how your Acorn grows based on XP
const getTreeStage = (xp) => {
  if (xp < 100) return "Sprout";      // Stage 1: Just starting!
  if (xp < 300) return "Sapling";     // Stage 2: Growing leaves
  if (xp < 600) return "Young Tree";  // Stage 3: Stronger trunk
  return "Full Oak";                  // Stage 4: Mastery!
};

// Example: If Alex has 250 XP (like in your mockup)
// The app will show the "Sapling" stage.
