//
// LIFE QUEST - APP LOGIC (v8)
// Clean full rewrite with expanded house tasks
//

// Weekend helper 
const isWeekend = () => {
  const day = new Date().getDay();
  return day === 0 || day === 6;
};

// DAILY QUESTS
const quests = [
  { id: "fitness", icon: isWeekend() ? "🚶" : "🚴", name: isWeekend() ? "Weekend steps" : "Weekday bike", xp: 100, coins: 20, joy: 0, core: true },
  { id: "weights", icon: "🏋️", name: "Weights", xp: 50, coins: 10, joy: 0, core: true },
  { id: "protein1", icon: "🥛", name: "Protein #1", xp: 20, coins: 5, joy: 0, core: true },
  { id: "protein2", icon: "🥛", name: "Protein #2", xp: 20, coins: 5, joy: 0, core: true },
  { id: "medicine", icon: "💊", name: "Take medicine", xp: 30, coins: 5, joy: 0, core: true },
  { id: "morningFace", icon: "☀️", name: "Morning face routine", xp: 25, coins: 5, joy: 2, core: true },
  { id: "nightFace", icon: "🌙", name: "Night face routine", xp: 25, coins: 5, joy: 2, core: true },
  { id: "mirror", icon: "🪞", name: "Look at your face", xp: 30, coins: 5, joy: 3, core: true },
  { id: "reading", icon: "📖", name: "Read 1 chapter", xp: 30, coins: 5, joy: 3, core: true },
  { id: "bedtime", icon: "🌙", name: "In bed before midnight", xp: 30, coins: 5, joy: 0, core: true },
  { id: "screenTime", icon: "📱", name: "Under 3 hours screen time", xp: 40, coins: 10, joy: 2, core: true },
  { id: "dog1", icon: "🐶", name: "Dog favorite thing #1", xp: 25, coins: 5, joy: 4, core: true },
  { id: "dog2", icon: "🐶", name: "Dog favorite thing #2", xp: 25, coins: 5, joy: 4, core: true }
];

// JOY CHALLENGES
const joyChallenges = {
  nature: [
    { text: "Find the most interesting leaf. 🍂", xp: 50, joy: 5 },
    { text: "Find a pretty flower and learn its species. 🌱", xp: 50, joy: 5 },
    { text: "Notice something new outside. 🔍", xp: 50, joy: 5 },
    { text: "Photograph something beautiful. 📸", xp: 50, joy: 5 }
  ],
  dogs: [
    { text: "Take your dogs somewhere new. 🐶", xp: 75, joy: 5 },
    { text: "Teach your dog a new trick. 🎓", xp: 50, joy: 4 }
  ],
  creativity: [
    { text: "Draw or doodle something. 🎨", xp: 50, joy: 5 },
    { text: "Write something for fun. ✍️", xp: 50, joy: 5 }
  ],
  food: [
    { text: "Eat something delicious. 🍰", xp: 50, joy: 5 },
    { text: "Try a new snack. 🍪", xp: 50, joy: 5 },
    { text: "Cook something new. 👨‍🍳", xp: 75, joy: 5 }
  ],
  music: [
    { text: "Listen to a song you loved growing up. 🎵", xp: 50, joy: 5 },
    { text: "Make a new playlist. 🎶", xp: 50, joy: 4 }
  ],
  curiosity: [
    { text: "Learn something new. 📚", xp: 50, joy: 4 },
    { text: "Watch a TED talk or documentary. 🎬", xp: 50, joy: 4 }
  ],
  adventure: [
    { text: "Walk somewhere new. 🚶", xp: 50, joy: 5 },
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
    { text: "Do something harmless and ridiculous. 😂", xp: 100, joy: 5 }
  ],
  nostalgia: [
    { text: "Look at old photos. 📷", xp: 50, joy: 5 },
    { text: "Re-watch a favorite show. 🎭", xp: 50, joy: 5 }
  ]
};

// DEFAULT REWARDS
const defaultRewards = [
  { name: "Favorite coffee", cost: 500 },
  { name: "$10 treat", cost: 1000 },
  { name: "New book", cost: 2000 }
];

// ROOM RESET TASKS
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

// HOUSE TASKS — 60+ ITEMS
const houseTasks = [
  "Load the dishwasher",
  "Unload the dishwasher",
  "Wash dishes",
  "Wipe kitchen counters",
  "Scrub stove top",
  "Clean microwave interior",
  "Sweep the kitchen",
  "Mop the kitchen",
  "Sweep the living room",
  "Vacuum living room",
  "Pick up clutter in living room",
  "Pick up clutter in bedroom",
  "Take out trash",
  "Replace trash bag",
  "Put drinks in the fridge",
  "Wipe bathroom sink",
  "Clean toilet",
  "Scrub shower walls",
  "Empty bathroom trash",
  "Fold blankets",
  "Straighten couch pillows",
  "Wipe dining table",
  "Sweep hallway",
  "Mop hallway",
  "Put shoes by the door",
  "Organize mail",
  "Tidy entryway",
  "Clean mirrors",
  "Dust TV stand",
  "Dust shelves",
  "Organize coffee table",
  "Clean pet bowls",
  "Refill pet water",
  "Wipe fridge shelves",
  "Clean fridge door handles",
  "Organize pantry shelf",
  "Throw away expired food",
  "Wipe kitchen cabinets",
  "Clean doorknobs",
  "Wipe light switches",
  "Vacuum bedroom",
  "Make the bed neatly",
  "Organize nightstand",
  "Fold laundry",
  "Put laundry away",
  "Clean baseboards",
  "Dust ceiling fans",
  "Clean windows",
  "Wipe window sills",
  "Organize bathroom cabinet",
  "Restock toilet paper",
  "Restock paper towels",
  "Clean trash can lid",
  "Sweep porch",
  "Shake out welcome mat",
  "Clean inside of car",
  "Empty car trash",
  "Organize car console"
];

// LOAD DATA
function loadData() {
  const stored = JSON.parse(localStorage.getItem("lifeQuestData")) || {
    xp: 0,
    coins: 0,
    joy: 0,
    joyThisMonth: 0,
    completed: {},
    roomCompleted: {},
    fitness: 0,
    startingWeight: null,
    currentWeight: null,
    rewards: defaultRewards,
    lastDate: new Date().toDateString(),
    todaysChallengeData: null,
    dailyCustomQuests: [],
    completedDailyCustom: {},
    weeklyQuests: [],
    completedWeekly: {},
    houseCompleted: {},
    todaysHouseTasks: [],
    houseDayIndex: 0,
    bonusSpinUsed: false,
    megaSpinUnlocked: false,
    ultraSpinUnlocked: false,
    mythicSpinUnlocked: false,
    twilightSpinUnlocked: false,
    travelGoalMiles: 750,
    travelMiles: 0
  };

  if (!stored.rewards.length) stored.rewards = defaultRewards;
  return stored;
}

let data = loadData();

// SAVE DATA
function saveData() {
  localStorage.setItem("lifeQuestData", JSON.stringify(data));
}
// DAILY RESET
function checkNewDay() {
  const today = new Date().toDateString();
  if (data.lastDate !== today) {
    data.completed = {};
    data.roomCompleted = {};
    data.completedDailyCustom = {};
    data.fitness = 0;
    data.bonusSpinUsed = false;

    // FIXED HOUSE TASK ROTATION — ALWAYS VALID
    const chunkSize = 3;
    const totalChunks = Math.ceil(houseTasks.length / chunkSize);

    data.houseDayIndex = (data.houseDayIndex + 1) % totalChunks;

    const start = data.houseDayIndex * chunkSize;
    data.todaysHouseTasks = houseTasks.slice(start, start + chunkSize);

    // Joy challenge
    const all = Object.values(joyChallenges).flat();
    data.todaysChallengeData = all[Math.floor(Math.random() * all.length)];

    data.lastDate = today;
    saveData();
  }
}

// XP / COINS / JOY
function earn(xp, coins, joy = 0) {
  data.xp += xp;
  data.coins += coins;
  data.joy += joy;
  data.joyThisMonth += joy;
  saveData();
}

// LEVEL
function getLevel() {
  return Math.floor(data.xp / 500) + 1;
}
function getXPIntoLevel() {
  return data.xp % 500;
}

// LIFE STATS
function getLifeStats() {
  const pct = (count, total) => (total === 0 ? 0 : (count / total) * 100);

  return {
    fitness: pct((data.completed.fitness ? 1 : 0) + (data.completed.weights ? 1 : 0), 2),
    discipline: pct(
      (data.completed.medicine ? 1 : 0) +
      (data.completed.bedtime ? 1 : 0) +
      (data.completed.screenTime ? 1 : 0),
      3
    ),
    adventure: pct(
      Object.keys(data.completed).filter(k => k.includes("outside") || k.includes("hiking")).length,
      5
    ),
    selfCare: pct(
      (data.completed.morningFace ? 1 : 0) +
      (data.completed.nightFace ? 1 : 0) +
      (data.completed.mirror ? 1 : 0),
      3
    ),
    home: pct(Object.keys(data.roomCompleted).length, roomTasks.length),
    connection: pct(
      (data.completed.dog1 ? 1 : 0) + (data.completed.dog2 ? 1 : 0),
      2
    ),
    joy: Math.min((data.joy / 100) * 100, 100)
  };
}

// STREAKS
function updateStreak(id) {
  const today = new Date().toDateString();
  const streakKey = `${id}_streak`;
  const dateKey = `${id}_streakDate`;

  const last = localStorage.getItem(dateKey);
  const current = parseInt(localStorage.getItem(streakKey)) || 0;

  if (last !== today) {
    const diff = Math.floor((new Date(today) - new Date(last || today)) / 86400000);
    localStorage.setItem(streakKey, diff === 1 ? current + 1 : 1);
    localStorage.setItem(dateKey, today);
  }

  return parseInt(localStorage.getItem(streakKey)) || 0;
}

// HEADER
function renderHeader() {
  document.getElementById("level").textContent = `Level ${getLevel()}`;
  document.getElementById("xpText").textContent = `${getXPIntoLevel()} / 500 XP`;
  document.getElementById("xpBar").style.width = `${(getXPIntoLevel() / 500) * 100}%`;
  document.getElementById("coins").textContent = data.coins;
  document.getElementById("joy").textContent = data.joy;
}

// DAILY QUESTS
function renderQuests() {
  const container = document.getElementById("questList");
  container.innerHTML = "";

  quests.forEach(q => {
    const done = !!data.completed[q.id];
    const streak = updateStreak(q.id);

    const row = document.createElement("div");
    row.className = `quest ${done ? "completed" : ""}`;

    row.innerHTML = `
      <div>
        <strong>${q.icon} ${q.name}</strong>
        <div>+${q.xp} XP • +${q.coins} coins ${q.joy ? `• +${q.joy} joy` : ""}</div>
      </div>
      <div class="quest-right">
        ${streak ? `<span class="streak">🔥 ${streak}</span>` : ""}
        <button>${done ? "✓ Done" : "Complete"}</button>
      </div>
    `;

    row.querySelector("button").addEventListener("click", () => {
      if (!data.completed[q.id]) {
        data.completed[q.id] = true;
        earn(q.xp, q.coins, q.joy);
        saveData();
        render();
      }
    });

    container.appendChild(row);
  });

  const core = quests.filter(q => q.core);
  const done = core.filter(q => data.completed[q.id]).length;
  document.getElementById("dailyProgressText").textContent = `${done} / ${core.length}`;
}

// JOY CHALLENGE
function renderJoyChallenge() {
  const container = document.getElementById("joyChallenge");

  if (!data.todaysChallengeData) {
    const all = Object.values(joyChallenges).flat();
    data.todaysChallengeData = all[Math.floor(Math.random() * all.length)];
    saveData();
  }

  const c = data.todaysChallengeData;

  container.innerHTML = `
    <h3>🎲 TODAY'S JOY CHALLENGE</h3>
    <p>${c.text}</p>
    <div>+${c.xp} XP • 💖 +${c.joy} joy</div>
    <button id="acceptChallenge" class="primary-button">Accept Challenge</button>
    <p id="challengeStatus"></p>
  `;

  document.getElementById("acceptChallenge").addEventListener("click", () => {
    earn(c.xp, 0, c.joy);
    document.getElementById("acceptChallenge").style.display = "none";
    document.getElementById("challengeStatus").textContent = "✨ Challenge complete!";
    render();
  });
}

// FITNESS
function renderFitness() {
  const goal = isWeekend() ? 10000 : 50;
  const label = isWeekend() ? "Steps today" : "Miles today";

  document.getElementById("fitnessLabel").textContent = label;
  document.getElementById("fitnessText").textContent =
    `${data.fitness} / ${goal} ${isWeekend() ? "steps" : "miles"}`;

  document.getElementById("fitnessBar").style.width =
    `${Math.min((data.fitness / goal) * 100, 100)}%`;
}

document.getElementById("saveFitness").addEventListener("click", () => {
  const val = Number(document.getElementById("fitnessInput").value);
  if (val >= 0) {
    data.fitness = val;
    data.travelMiles += val;
    saveData();
    renderFitness();
    renderTravelMap();
  }
});

// TRAVEL MAP
function renderTravelMap() {
  const goal = data.travelGoalMiles || 750;
  const miles = data.travelMiles || 0;
  const percent = Math.min((miles / goal) * 100, 100);

  document.getElementById("travelText").textContent =
    `${miles.toFixed(1)} / ${goal} miles from Pendleton, IN to Destin, FL`;

  document.getElementById("travelBar").style.width = `${percent}%`;
}
// ROOM RESET
function renderRoom() {
  const container = document.getElementById("roomList");
  container.innerHTML = "";

  roomTasks.forEach((task, i) => {
    const id = `room_${i}`;
    const done = !!data.roomCompleted[id];

    const row = document.createElement("div");
    row.className = "room-task";

    row.innerHTML = `
      <span>${done ? "✅" : "⬜"} ${task}</span>
      <button>${done ? "Done" : "+10 XP"}</button>
    `;

    row.querySelector("button").addEventListener("click", () => {
      if (!done) {
        data.roomCompleted[id] = true;
        earn(10, 2, 1);
        saveData();
        render();
      }
    });

    container.appendChild(row);
  });

  document.getElementById("roomProgressText").textContent =
    `${Object.keys(data.roomCompleted).length} / ${roomTasks.length}`;
}

// HOUSE TASKS (FULLY FIXED & SELF-HEALING)
function renderHouse() {
  const container = document.getElementById("houseList");
  container.innerHTML = "";

  // If today's tasks are missing, empty, corrupted, or wrong length → regenerate
  if (
    !Array.isArray(data.todaysHouseTasks) ||
    data.todaysHouseTasks.length !== 3 ||
    data.todaysHouseTasks.some(t => typeof t !== "string")
  ) {
    data.todaysHouseTasks = [];

    for (let i = 0; i < 3; i++) {
      const randomTask = houseTasks[Math.floor(Math.random() * houseTasks.length)];
      data.todaysHouseTasks.push(randomTask);
    }

    saveData();
  }

  data.todaysHouseTasks.forEach(task => {
    const id = `house_${task}`;
    const done = !!data.houseCompleted[id];

    const row = document.createElement("div");
    row.className = "room-task";

    row.innerHTML = `
      <span>${done ? "✅" : "⬜"} ${task}</span>
      <button>${done ? "Done" : "+15 XP"}</button>
    `;

    row.querySelector("button").addEventListener("click", () => {
      if (!done) {
        data.houseCompleted[id] = true;
        earn(15, 3, 1);
        saveData();
        render();
      }
    });

    container.appendChild(row);
  });

  const completedCount = data.todaysHouseTasks.filter(
    task => data.houseCompleted[`house_${task}`]
  ).length;

  document.getElementById("houseProgressText").textContent =
    `${completedCount} / ${data.todaysHouseTasks.length} tasks completed today`;
}
// WEIGHT LOSS QUEST (30 lbs)
function renderWeight() {
  const start = data.startingWeight;
  const current = data.currentWeight;

  document.getElementById("startingWeight").value = start ?? "";
  document.getElementById("currentWeight").value = current ?? "";

  if (start !== null && current !== null) {
    const lost = Math.max(start - current, 0);
    const percent = Math.min((lost / 30) * 100, 100);

    document.getElementById("weightText").textContent =
      `${lost.toFixed(1)} / 30 lbs lost • ${percent.toFixed(0)}% complete`;
    document.getElementById("weightBar").style.width = `${percent}%`;

    if (lost >= 5 && !data.megaSpinUnlocked) {
      data.megaSpinUnlocked = true;
      alert("🎉 You unlocked the MEGA SPIN for losing 5 lbs!");
    }

    if (lost >= 10 && !data.ultraSpinUnlocked) {
      data.ultraSpinUnlocked = true;
      alert("🔥 You unlocked the ULTRA SPIN for losing 10 lbs!");
    }

    if (lost >= 20 && !data.mythicSpinUnlocked) {
      data.mythicSpinUnlocked = true;
      alert("🌟 You unlocked the MYTHIC SPIN for losing 20 lbs!");
    }

    if (lost >= 30 && !data.twilightSpinUnlocked) {
      data.twilightSpinUnlocked = true;
      alert("🐉 TWILIGHT SPIN unlocked — you hit your 30 lb goal!");
    }

    saveData();
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

// REWARD SHOP
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

// CUSTOM DAILY QUESTS
function renderDailyCustomQuests() {
  const container = document.getElementById("dailyCustomList");
  container.innerHTML = "";

  data.dailyCustomQuests.forEach((quest, index) => {
    const id = `dailyCustom_${index}`;
    const done = !!data.completedDailyCustom[id];

    const row = document.createElement("div");
    row.className = `quest ${done ? "completed" : ""}`;

    row.innerHTML = `
      <div>
        <strong>🗓️ ${quest.name}</strong>
        <div>+${quest.xp} XP • +${quest.coins} coins ${quest.joy ? `• +${quest.joy} joy` : ""}</div>
      </div>
      <div class="quest-right">
        <button>${done ? "✓ Done" : "Complete"}</button>
      </div>
    `;

    row.querySelector("button").addEventListener("click", () => {
      if (!done) {
        data.completedDailyCustom[id] = true;
        earn(quest.xp, quest.coins, quest.joy || 0);
        saveData();
        render();
      }
    });

    container.appendChild(row);
  });

  const total = data.dailyCustomQuests.length;
  const doneCount = Object.keys(data.completedDailyCustom).filter(k => data.completedDailyCustom[k]).length;
  document.getElementById("dailyCustomProgressText").textContent = `${doneCount} / ${total}`;
}

document.getElementById("addDailyQuest").addEventListener("click", () => {
  const name = document.getElementById("dailyQuestName").value.trim();
  const xp = Number(document.getElementById("dailyQuestXP").value);
  const coins = Number(document.getElementById("dailyQuestCoins").value);
  const joy = Number(document.getElementById("dailyQuestJoy").value);

  if (name && xp > 0) {
    data.dailyCustomQuests.push({ name, xp, coins: coins || 0, joy: joy || 0 });
    document.getElementById("dailyQuestName").value = "";
    document.getElementById("dailyQuestXP").value = "";
    document.getElementById("dailyQuestCoins").value = "";
    document.getElementById("dailyQuestJoy").value = "";
    saveData();
    renderDailyCustomQuests();
  }
});

// WEEKLY QUESTS
function renderWeeklyQuests() {
  const container = document.getElementById("weeklyList");
  container.innerHTML = "";

  data.weeklyQuests.forEach((quest, index) => {
    const id = `weekly_${index}`;
    const done = !!data.completedWeekly[id];

    const row = document.createElement("div");
    row.className = `quest ${done ? "completed" : ""}`;

    row.innerHTML = `
      <div>
        <strong>📅 ${quest.name}</strong>
        <div>+${quest.xp} XP • +${quest.coins} coins ${quest.joy ? `• +${quest.joy} joy` : ""}</div>
      </div>
      <div class="quest-right">
        <button>${done ? "✓ Done" : "Complete"}</button>
      </div>
    `;

    row.querySelector("button").addEventListener("click", () => {
      if (!done) {
        data.completedWeekly[id] = true;
        earn(quest.xp, quest.coins, quest.joy || 0);
        saveData();
        render();
      }
    });

    container.appendChild(row);
  });

  const total = data.weeklyQuests.length;
  const doneCount = Object.keys(data.completedWeekly).filter(k => data.completedWeekly[k]).length;
  document.getElementById("weeklyProgressText").textContent = `${doneCount} / ${total}`;
}

document.getElementById("addWeeklyQuest").addEventListener("click", () => {
  const name = document.getElementById("weeklyQuestName").value.trim();
  const xp = Number(document.getElementById("weeklyQuestXP").value);
  const coins = Number(document.getElementById("weeklyQuestCoins").value);
  const joy = Number(document.getElementById("weeklyQuestJoy").value);

  if (name && xp > 0) {
    data.weeklyQuests.push({ name, xp, coins: coins || 0, joy: joy || 0 });
    document.getElementById("weeklyQuestName").value = "";
    document.getElementById("weeklyQuestXP").value = "";
    document.getElementById("weeklyQuestCoins").value = "";
    document.getElementById("weeklyQuestJoy").value = "";
    saveData();
    renderWeeklyQuests();
  }
});
// NEXT QUEST
function renderNextQuest() {
  const next = quests.find(q => !data.completed[q.id]);
  document.getElementById("nextQuest").textContent =
    next ? `${next.icon} ${next.name} — +${next.xp} XP` : "🎉 Your core quests are complete!";
}

// PERFECT DAY
function renderPerfectDay() {
  const core = quests.filter(q => q.core);
  const allDone = core.every(q => data.completed[q.id]);
  document.getElementById("perfectDayCard").classList.toggle("hidden", !allDone);
}

// BONUS SPIN
const spinPrizes = [
  { text: "🪙 +25 coins!", coins: 25 },
  { text: "🪙 +50 coins!", coins: 50 },
  { text: "💰 +100 coins!", coins: 100 },
  { text: "🎉 JACKPOT! +250 coins!", coins: 250 }
];

document.getElementById("spinButton").addEventListener("click", () => {
  if (data.bonusSpinUsed) {
    alert("You've already used your bonus spin today!");
    return;
  }

  const prize = spinPrizes[Math.floor(Math.random() * spinPrizes.length)];
  data.coins += prize.coins;
  data.bonusSpinUsed = true;
  document.getElementById("spinResult").textContent = prize.text;
  saveData();
  renderHeader();
});

// LIFE STATS
function renderLifeStats() {
  const container = document.getElementById("lifeStats");
  const stats = getLifeStats();

  const bar = (name, value) => {
    const filled = Math.round((value / 100) * 10);
    const empty = 10 - filled;
    return `<div class="stat-row"><span>${name}</span><span>${"█".repeat(filled)}${"░".repeat(empty)} ${Math.round(value)}</span></div>`;
  };

  container.innerHTML = `
    <h3>🌟 YOUR CHARACTER</h3>
    ${bar("Fitness", stats.fitness)}
    ${bar("Discipline", stats.discipline)}
    ${bar("Adventure", stats.adventure)}
    ${bar("Self-Care", stats.selfCare)}
    ${bar("Home", stats.home)}
    ${bar("Connection", stats.connection)}
    ${bar("Joy", stats.joy)}
  `;
}

// LOW ENERGY MODE
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

// MASTER RENDER
function render() {
  renderHeader();
  renderQuests();
  renderJoyChallenge();
  renderFitness();
  renderTravelMap();
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

// START APP
checkNewDay();
render();

// SERVICE WORKER
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
