// ==============================
// LIFE QUEST - APP BRAIN (v3)
// ==============================

// A helper that tells us if today is Saturday or Sunday.
const isWeekend = () => {
  const day = new Date().getDay();
  return day === 0 || day === 6;
};

// EXPANDED DAILY QUESTS
const quests = [
  // Core Fitness
  { id: "fitness", icon: isWeekend() ? "🚶" : "🚴", name: isWeekend() ? "Weekend steps" : "Weekday bike", xp: 100, coins: 20, joy: 0, core: true },
  { id: "weights", icon: "🏋️", name: "Weights", xp: 50, coins: 10, joy: 0, core: true },

  // Nutrition
  { id: "protein1", icon: "🥛", name: "Protein #1", xp: 20, coins: 5, joy: 0, core: true },
  { id: "protein2", icon: "🥛", name: "Protein #2", xp: 20, coins: 5, joy: 0, core: true },

  // Health
  { id: "medicine", icon: "💊", name: "Take medicine", xp: 30, coins: 5, joy: 0, core: true },
  { id: "morningFace", icon: "☀️", name: "Morning face routine", xp: 25, coins: 5, joy: 2, core: true },
  { id: "nightFace", icon: "🌙", name: "Night face routine", xp: 25, coins: 5, joy: 2, core: true },
  { id: "mirror", icon: "🪞", name: "Look at your face", xp: 30, coins: 5, joy: 3, core: true },

  // Mental & Wellness
  { id: "reading", icon: "📖", name: "Read 1 chapter", xp: 30, coins: 5, joy: 3, core: true },
  { id: "bedtime", icon: "🌙", name: "In bed before midnight", xp: 30, coins: 5, joy: 0, core: true },
  { id: "screenTime", icon: "📱", name: "Under 3 hours screen time", xp: 40, coins: 10, joy: 2, core: true },

  // Dogs
  { id: "dog1", icon: "🐶", name: "Dog favorite thing #1", xp: 25, coins: 5, joy: 4, core: true },
  { id: "dog2", icon: "🐶", name: "Dog favorite thing #2", xp: 25, coins: 5, joy: 4, core: true },
];

// JOY CHALLENGE CATEGORIES
const joyChallenges = {
  nature: [
    { text: "Find the most interesting leaf. Take a picture. 🍂", xp: 50, joy: 5 },
    { text: "Find a pretty flower and learn what species it is. 🌱", xp: 50, joy: 5 },
    { text: "Go outside and find something you've never noticed before. 🔍", xp: 50, joy: 5 },
    { text: "Photograph something beautiful. 📸", xp: 50, joy: 5 }
  ],
  dogs: [
    { text: "Take your dogs somewhere you've never taken them before. 🐶", xp: 75, joy: 5 },
    { text: "Teach your dog a new trick. 🎓", xp: 50, joy: 4 }
  ],
  creativity: [
    { text: "Draw, paint, or doodle something. 🎨", xp: 50, joy: 5 },
    { text: "Write something for fun. ✍️", xp: 50, joy: 5 }
  ],
  food: [
    { text: "Eat something delicious. That's the quest. 🍰", xp: 50, joy: 5 },
    { text: "Buy or make a snack you've never tried before. 🍪", xp: 50, joy: 5 },
    { text: "Cook something new. 👨‍🍳", xp: 75, joy: 5 }
  ],
  music: [
    { text: "Put on a song you loved when you were younger and listen all the way through. 🎵", xp: 50, joy: 5 },
    { text: "Make a new playlist. 🎶", xp: 50, joy: 4 }
  ],
  curiosity: [
    { text: "Learn something new about a topic you care about. 📚", xp: 50, joy: 4 },
    { text: "Watch a TED talk or documentary. 🎬", xp: 50, joy: 4 }
  ],
  adventure: [
    { text: "Take a walk somewhere you've never walked. 🚶", xp: 50, joy: 5 },
    { text: "Explore a new place. 🗺️", xp: 75, joy: 5 },
    { text: "Go hiking. ⛰️", xp: 75, joy: 5 }
  ],
  connection: [
    { text: "Text or call someone you care about. 💬", xp: 50, joy: 4 },
    { text: "Do something nice for someone. 💕", xp: 50, joy: 5 }
  ],
  selfCare: [
    { text: "Take a bath or long shower. 🛁", xp: 50, joy: 5 },
    { text: "Get a good night's sleep. 😴", xp: 50, joy: 4 }
  ],
  silly: [
    { text: "Do something completely harmless and ridiculous that makes you laugh. 😂", xp: 100, joy: 5 }
  ],
  nostalgia: [
    { text: "Look at old photos. 📷", xp: 50, joy: 5 },
    { text: "Re-watch your favorite show or movie. 🎭", xp: 50, joy: 5 }
  ]
};

// Default rewards
const defaultRewards = [
  { name: "Favorite coffee", cost: 500 },
  { name: "$10 treat", cost: 1000 },
  { name: "New book", cost: 2000 }
];

// Room tasks
const roomTasks = [
  "Pick up 5 things",
  "Put 5 more things away",
  "Put dirty clothes in the hamper",
  "Throw away trash",
  "Put shoes away",
  "Gather laundry",
  "Start a load of laundry",
  "Move laundry to the dryer",
  "Fold 10 items",
  "Fold 10 more items",
  "Hang 5 items",
  "Put away 10 clothing items",
  "Clear the nightstand",
  "Clear the dresser",
  "Clear the desk",
  "Clear the bed",
  "Make the bed",
  "Clear remaining floor",
  "Vacuum one section"
];

// Helping out around the house tasks (21 total)
const houseTasks = [
  "Load the dishwasher",
  "Unload the dishwasher",
  "Wash dishes in the sink",
  "Wipe kitchen counters",
  "Sweep the kitchen",
  "Sweep the living room",
  "Pick up clutter in living room",
  "Pick up clutter in bedroom",
  "Take out trash",
  "Replace trash bag",
  "Put drinks in the fridge",
  "Wipe bathroom sink",
  "Clean toilet",
  "Empty bathroom trash",
  "Fold blankets in living room",
  "Straighten couch pillows",
  "Wipe dining table",
  "Sweep hallway",
  "Put shoes by the door",
  "Put mail in one spot",
  "Quick tidy of entryway"
];

// Get saved data, or create new data the first time.
function loadData() {
  const stored = JSON.parse(localStorage.getItem("lifeQuestData")) || {
    xp: 0,
    coins: 0,
    joy: 0,
    joyThisMonth: 0,
    completed: {},
    roomCompleted: {},
    streaks: {},
    currentBook: { title: "", currentChapter: 0, totalChapters: 0 },
    fitness: 0,
    startingWeight: null,
    currentWeight: null,
    rewards: defaultRewards,
    lastDate: new Date().toDateString(),
    todaysChallengeData: null,
    booksCompleted: 0,
    // new fields
    dailyCustomQuests: [],
    completedDailyCustom: {},
    weeklyQuests: [],
    completedWeekly: {},
    houseCompleted: {},
    todaysHouseTasks: [],
    houseDayIndex: 0
  };

  // Ensure default rewards exist if something wiped them
  if (!stored.rewards || !stored.rewards.length) {
    stored.rewards = defaultRewards;
  }

  // Ensure new fields exist if coming from older version
  stored.dailyCustomQuests = stored.dailyCustomQuests || [];
  stored.completedDailyCustom = stored.completedDailyCustom || {};
  stored.weeklyQuests = stored.weeklyQuests || [];
  stored.completedWeekly = stored.completedWeekly || {};
  stored.houseCompleted = stored.houseCompleted || {};
  stored.todaysHouseTasks = stored.todaysHouseTasks || [];
  if (typeof stored.houseDayIndex !== "number") stored.houseDayIndex = 0;

  return stored;
}

let data = loadData();

// Save everything to the browser on your device.
function saveData() {
  localStorage.setItem("lifeQuestData", JSON.stringify(data));
}

// If a new day has started, reset only daily completion data.
function checkNewDay() {
  const today = new Date().toDateString();
  if (data.lastDate !== today) {
    data.completed = {};
    data.fitness = 0;
    data.roomCompleted = {};
    data.completedDailyCustom = {};
    data.todaysHouseTasks = [];

    // advance houseDayIndex (0–6) so 3 tasks/day over 7 days = 21 tasks
    data.houseDayIndex = (data.houseDayIndex + 1) % 7;
    const startIndex = data.houseDayIndex * 3;
    data.todaysHouseTasks = [
      startIndex,
      startIndex + 1,
      startIndex + 2
    ];

    data.lastDate = today;

    // Generate today's joy challenge
    const allChallenges = Object.values(joyChallenges).flat();
    data.todaysChallengeData = allChallenges[Math.floor(Math.random() * allChallenges.length)];

    saveData();
  }
}

// Give the player XP, coins, and joy.
function earn(xp, coins, joy = 0) {
  data.xp += xp;
  data.coins += coins;
  data.joy += joy;
  data.joyThisMonth += joy;
  saveData();
}

// Calculate the player's level.
function getLevel() {
  return Math.floor(data.xp / 500) + 1;
}

function getXPIntoLevel() {
  return data.xp % 500;
}

// LIFE STATS - calculated from quest completion
function getLifeStats() {
  const questCompletionRate = (count, total) => (count / total) * 100;

  return {
    fitness: Math.min(
      questCompletionRate(
        (data.completed.fitness ? 1 : 0) + (data.completed.weights ? 1 : 0),
        2
      ),
      100
    ),
    discipline: Math.min(
      questCompletionRate(
        (data.completed.medicine ? 1 : 0) +
          (data.completed.bedtime ? 1 : 0) +
          (data.completed.screenTime ? 1 : 0),
        3
      ),
      100
    ),
    adventure: Math.min(
      (Object.keys(data.completed).filter(k => k.includes("outside") || k.includes("hiking")).length / 5) * 100,
      100
    ),
    selfCare: Math.min(
      questCompletionRate(
        (data.completed.morningFace ? 1 : 0) +
          (data.completed.nightFace ? 1 : 0) +
          (data.completed.mirror ? 1 : 0),
        3
      ),
      100
    ),
    home: Math.min(
      (Object.keys(data.roomCompleted).filter(k => data.roomCompleted[k]).length / roomTasks.length) * 100,
      100
    ),
    connection: Math.min(
      questCompletionRate(
        (data.completed.dog1 ? 1 : 0) + (data.completed.dog2 ? 1 : 0),
        2
      ),
      100
    ),
    joy: Math.min((data.joy / 100) * 100, 100)
  };
}

// STREAK TRACKING
function updateStreak(questId) {
  const today = new Date().toDateString();
  const streakKey = `${questId}_streak`;
  const lastStreakDateKey = `${questId}_streakDate`;
  const lastDate = localStorage.getItem(lastStreakDateKey);
  const currentStreak = parseInt(localStorage.getItem(streakKey)) || 0;

  if (lastDate !== today) {
    const lastDateObj = new Date(lastDate || today);
    const todayObj = new Date(today);
    const daysDiff = Math.floor((todayObj - lastDateObj) / (1000 * 60 * 60 * 24));

    if (daysDiff === 1) {
      localStorage.setItem(streakKey, currentStreak + 1);
    } else if (daysDiff > 1) {
      localStorage.setItem(streakKey, 1);
    }

    localStorage.setItem(lastStreakDateKey, today);
  }

  return parseInt(localStorage.getItem(streakKey)) || 0;
}

// Draw the level, XP and coins.
function renderHeader() {
  const level = getLevel();
  const xpIntoLevel = getXPIntoLevel();

  document.getElementById("level").textContent = `Level ${level}`;
  document.getElementById("xpText").textContent = `${xpIntoLevel} / 500 XP`;
  document.getElementById("xpBar").style.width = `${(xpIntoLevel / 500) * 100}%`;
  document.getElementById("coins").textContent = data.coins;

  const joyElement = document.getElementById("joy");
  if (joyElement) joyElement.textContent = data.joy;
}

// Draw every daily quest.
function renderQuests() {
  const container = document.getElementById("questList");
  container.innerHTML = "";

  quests.forEach(quest => {
    const completed = !!data.completed[quest.id];
    const streak = parseInt(localStorage.getItem(`${quest.id}_streak`)) || 0;

    const row = document.createElement("div");
    row.className = `quest ${completed ? "completed" : ""}`;

    const streakDisplay = streak > 0 ? `<span class="streak">🔥 ${streak}</span>` : "";

    row.innerHTML = `
      <div>
        <strong>${quest.icon} ${quest.name}</strong>
        <div>+${quest.xp} XP • +${quest.coins} coins ${quest.joy > 0 ? `• +${quest.joy} joy` : ""}</div>
      </div>
      <div class="quest-right">
        ${streakDisplay}
        <button>${completed ? "✓ Done" : "Complete"}</button>
      </div>
    `;

    row.querySelector("button").addEventListener("click", () => {
      if (!data.completed[quest.id]) {
        data.completed[quest.id] = true;
        updateStreak(quest.id);
        earn(quest.xp, quest.coins, quest.joy);
        saveData();
        render();
      }
    });

    container.appendChild(row);
  });

  const coreQuests = quests.filter(q => q.core);
  const coreDone = coreQuests.filter(q => data.completed[q.id]).length;
  document.getElementById("dailyProgressText").textContent = `${coreDone} / ${coreQuests.length} core quests`;
}

// RANDOM JOY CHALLENGE
function renderJoyChallenge() {
  const container = document.getElementById("joyChallenge");
  if (!container) return;

  if (!data.todaysChallengeData) {
    checkNewDay();
  }

  const challenge = data.todaysChallengeData;

  container.innerHTML = `
    <h3>🎲 TODAY'S JOY CHALLENGE</h3>
    <p>${challenge.text}</p>
    <div>+${challenge.xp} XP • 💖 +${challenge.joy} joy</div>
    <button id="acceptChallenge" class="primary-button">Accept Challenge</button>
    <p id="challengeStatus"></p>
  `;

  document.getElementById("acceptChallenge").addEventListener("click", () => {
    earn(challenge.xp, 0, challenge.joy);
    document.getElementById("acceptChallenge").style.display = "none";
    document.getElementById("challengeStatus").textContent = "✨ Challenge complete! Great job! ✨";
    render();
  });
}

// Fitness goal changes automatically on weekends.
function getFitnessGoal() {
  return isWeekend() ? 10000 : 50;
}

function renderFitness() {
  const goal = getFitnessGoal();
  const label = isWeekend() ? "Steps today" : "Miles today";

  document.getElementById("fitnessLabel").textContent = label;
  document.getElementById("fitnessInput").placeholder = "0";
  document.getElementById("fitnessText").textContent =
    `${data.fitness.toLocaleString()} / ${goal.toLocaleString()} ${isWeekend() ? "steps" : "miles"}`;

  const percent = Math.min((data.fitness / goal) * 100, 100);
  document.getElementById("fitnessBar").style.width = `${percent}%`;
}

document.getElementById("saveFitness").addEventListener("click", () => {
  const value = Number(document.getElementById("fitnessInput").value);
  if (value >= 0) {
    data.fitness = value;
    saveData();
    renderFitness();
  }
});

// Draw room microtasks.
function renderRoom() {
  const container = document.getElementById("roomList");
  container.innerHTML = "";

  roomTasks.forEach((task, index) => {
    const id = `room_${index}`;
    const completed = !!data.roomCompleted[id];

    const row = document.createElement("div");
    row.className = "room-task";

    row.innerHTML = `
      <span>${completed ? "✅" : "⬜"} ${task}</span>
      <button>${completed ? "Done" : "+10 XP"}</button>
    `;

    row.querySelector("button").addEventListener("click", () => {
      if (!data.roomCompleted[id]) {
        data.roomCompleted[id] = true;
        earn(10, 2, 1);
        saveData();
        render();
      }
    });

    container.appendChild(row);
  });

  const count = Object.keys(data.roomCompleted).filter(key => data.roomCompleted[key]).length;
  document.getElementById("roomProgressText").textContent = `${count} / ${roomTasks.length} microtasks completed`;
}

// Helping Out Around the House (3 tasks per day)
function renderHouse() {
  const container = document.getElementById("houseList");
  container.innerHTML = "";

  const todayTasks = data.todaysHouseTasks.map(i => houseTasks[i]).filter(Boolean);

  todayTasks.forEach((task, index) => {
    const id = `house_${data.todaysHouseTasks[index]}`;
    const completed = !!data.houseCompleted[id];

    const row = document.createElement("div");
    row.className = "room-task";

    row.innerHTML = `
      <span>${completed ? "✅" : "⬜"} ${task}</span>
      <button>${completed ? "Done" : "+15 XP"}</button>
    `;

    row.querySelector("button").addEventListener("click", () => {
      if (!data.houseCompleted[id]) {
        data.houseCompleted[id] = true;
        earn(15, 3, 1);
        saveData();
        render();
      }
    });

    container.appendChild(row);
  });

  const count = todayTasks.filter((_, idx) => data.houseCompleted[`house_${data.todaysHouseTasks[idx]}`]).length;
  document.getElementById("houseProgressText").textContent = `${count} / ${todayTasks.length} tasks completed today`;
}

// Weight goal is always 15 pounds.
function renderWeight() {
  const start = data.startingWeight;
  const current = data.currentWeight;

  document.getElementById("startingWeight").value = start ?? "";
  document.getElementById("currentWeight").value = current ?? "";

  if (start !== null && current !== null) {
    const lost = Math.max(start - current, 0);
    const percent = Math.min((lost / 15) * 100, 100);

    document.getElementById("weightText").textContent =
      `${lost.toFixed(1)} / 15 lbs lost • ${percent.toFixed(0)}% complete`;
    document.getElementById("weightBar").style.width = `${percent}%`;
  }
}

document.getElementById("saveWeight").addEventListener("click", () => {
  const start = Number(document.getElementById("startingWeight").value);
  const current = Number(document.getElementById("currentWeight").value);

  if (start > 0 && current > 0) {
    data.startingWeight = start;
    data.currentWeight = current;
    saveData();
    renderWeight();
  }
});

// Draw the reward shop.
function renderRewards() {
  const container = document.getElementById("rewardList");
  container.innerHTML = "";

  data.rewards.forEach((reward, index) => {
    const row = document.createElement("div");
    row.className = "reward";

    row.innerHTML = `
      <span>🎁 ${reward.name} — ${reward.cost} coins</span>
      <button>Buy</button>
    `;

    row.querySelector("button").addEventListener("click", () => {
      if (data.coins >= reward.cost) {
        data.coins -= reward.cost;
        saveData();
        alert(`You unlocked: ${reward.name}!`);
        render();
      } else {
        alert("Keep questing! You need more coins.");
      }
    });

    container.appendChild(row);
  });
}

document.getElementById("addReward").addEventListener("click", () => {
  const name = document.getElementById("rewardName").value.trim();
  const cost = Number(document.getElementById("rewardCost").value);

  if (name && cost > 0) {
    data.rewards.push({ name, cost });
    document.getElementById("rewardName").value = "";
    document.getElementById("rewardCost").value = "";
    saveData();
    renderRewards();
  }
});

// Custom Daily Quests
function renderDailyCustomQuests() {
  const container = document.getElementById("dailyCustomList");
  container.innerHTML = "";

  data.dailyCustomQuests.forEach((quest, index) => {
    const id = `dailyCustom_${index}`;
    const completed = !!data.completedDailyCustom[id];

    const row = document.createElement("div");
    row.className = `quest ${completed ? "completed" : ""}`;

    row.innerHTML = `
      <div>
        <strong>🗓️ ${quest.name}</strong>
        <div>+${quest.xp} XP • +${quest.coins} coins</div>
      </div>
      <div class="quest-right">
        <button>${completed ? "✓ Done" : "Complete"}</button>
      </div>
    `;

    row.querySelector("button").addEventListener("click", () => {
      if (!data.completedDailyCustom[id]) {
        data.completedDailyCustom[id] = true;
        earn(quest.xp, quest.coins, 0);
        saveData();
        render();
      }
    });

    container.appendChild(row);
  });

  const total = data.dailyCustomQuests.length;
  const done = Object.keys(data.completedDailyCustom).filter(k => data.completedDailyCustom[k]).length;
  document.getElementById("dailyCustomProgressText").textContent = `${done} / ${total}`;
}

document.getElementById("addDailyQuest").addEventListener("click", () => {
  const name = document.getElementById("dailyQuestName").value.trim();
  const xp = Number(document.getElementById("dailyQuestXP").value);
  const coins = Number(document.getElementById("dailyQuestCoins").value);

  if (name && xp > 0) {
    data.dailyCustomQuests.push({ name, xp, coins: coins || 0 });
    document.getElementById("dailyQuestName").value = "";
    document.getElementById("dailyQuestXP").value = "";
    document.getElementById("dailyQuestCoins").value = "";
    saveData();
    renderDailyCustomQuests();
  }
});

// Weekly Quests
function renderWeeklyQuests() {
  const container = document.getElementById("weeklyList");
  container.innerHTML = "";

  data.weeklyQuests.forEach((quest, index) => {
    const id = `weekly_${index}`;
    const completed = !!data.completedWeekly[id];

    const row = document.createElement("div");
    row.className = `quest ${completed ? "completed" : ""}`;

    row.innerHTML = `
      <div>
        <strong>📅 ${quest.name}</strong>
        <div>+${quest.xp} XP • +${quest.coins} coins</div>
      </div>
      <div class="quest-right">
        <button>${completed ? "✓ Done" : "Complete"}</button>
      </div>
    `;

    row.querySelector("button").addEventListener("click", () => {
      if (!data.completedWeekly[id]) {
        data.completedWeekly[id] = true;
        earn(quest.xp, quest.coins, 0);
        saveData();
        render();
      }
    });

    container.appendChild(row);
  });

  const total = data.weeklyQuests.length;
  const done = Object.keys(data.completedWeekly).filter(k => data.completedWeekly[k]).length;
  document.getElementById("weeklyProgressText").textContent = `${done} / ${total}`;
}

document.getElementById("addWeeklyQuest").addEventListener("click", () => {
  const name = document.getElementById("weeklyQuestName").value.trim();
  const xp = Number(document.getElementById("weeklyQuestXP").value);
  const coins = Number(document.getElementById("weeklyQuestCoins").value);

  if (name && xp > 0) {
    data.weeklyQuests.push({ name, xp, coins: coins || 0 });
    document.getElementById("weeklyQuestName").value = "";
    document.getElementById("weeklyQuestXP").value = "";
    document.getElementById("weeklyQuestCoins").value = "";
    saveData();
    renderWeeklyQuests();
  }
});

// Find the first unfinished core quest and display it.
function renderNextQuest() {
  const next = quests.find(quest => !data.completed[quest.id]);
  document.getElementById("nextQuest").textContent = next
    ? `${next.icon} ${next.name} — +${next.xp} XP`
    : "🎉 Your core quests are complete!";
}

// Check for a perfect day (all core quests).
function renderPerfectDay() {
  const coreQuests = quests.filter(q => q.core);
  const allCoreComplete = coreQuests.every(quest => data.completed[quest.id]);
  document.getElementById("perfectDayCard").classList.toggle("hidden", !allCoreComplete);
}

// Bonus spin prizes.
const spinPrizes = [
  { text: "🪙 +25 coins!", coins: 25 },
  { text: "🪙 +50 coins!", coins: 50 },
  { text: "💰 +100 coins!", coins: 100 },
  { text: "🎉 JACKPOT! +250 coins!", coins: 250 }
];

document.getElementById("spinButton").addEventListener("click", () => {
  const prize = spinPrizes[Math.floor(Math.random() * spinPrizes.length)];
  data.coins += prize.coins;
  document.getElementById("spinResult").textContent = prize.text;
  saveData();
  renderHeader();
});

// Render Life Stats
function renderLifeStats() {
  const container = document.getElementById("lifeStats");
  if (!container) return;

  const stats = getLifeStats();

  const statBar = (name, value) => {
    const filled = Math.round((value / 100) * 10);
    const empty = 10 - filled;
    const bar = "█".repeat(filled) + "░".repeat(empty);
    return `<div class="stat-row"><span>${name}</span><span>${bar} ${Math.round(value)}</span></div>`;
  };

  container.innerHTML = `
    <h3>🌟 YOUR CHARACTER</h3>
    ${statBar("Fitness", stats.fitness)}
    ${statBar("Discipline", stats.discipline)}
    ${statBar("Adventure", stats.adventure)}
    ${statBar("Self-Care", stats.selfCare)}
    ${statBar("Home", stats.home)}
    ${statBar("Connection", stats.connection)}
    ${statBar("Joy", stats.joy)}
  `;
}

// Low-energy mode gives you a tiny suggested mission.
document.getElementById("lowEnergyButton").addEventListener("click", () => {
  const options = [
    "💊 Take your medicine.",
    "🥛 Have one protein item.",
    "☀️ Do your morning face routine.",
    "🐶 Do one favorite thing with a dog.",
    "🧹 Pick up 5 things."
  ];

  const mission = options[Math.floor(Math.random() * options.length)];
  alert(`🌧️ LOW ENERGY MISSION\n\n${mission}\n\nOne tiny win still counts.`);
});

// Master function: redraw the entire app.
function render() {
  renderHeader();
  renderQuests();
  renderJoyChallenge();
  renderFitness();
  renderRoom();
  renderHouse();
  renderWeight();
  renderRewards();
  renderDailyCustomQuests();
  renderWeeklyQuests();
  renderNextQuest();
  renderPerfectDay();
  renderLifeStats();
}

// Start the app.
checkNewDay();
render();

// Register offline support if the browser supports it.
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
