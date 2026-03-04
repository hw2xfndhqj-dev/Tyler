/* ============================================
   FORGE — Weekly Training Program
   App Logic & Data
   ============================================ */

// ---- Workout Data ----
const WEEK = [
  {
    day: 'Monday',
    title: 'Chest & Triceps',
    icon: '🔥',
    focus: 'Push power — build a strong pressing foundation with compound and isolation moves.',
    accent: '#f87171',
    duration: '55 min',
    intensity: 'High',
    exercises: [
      { name: 'Barbell Bench Press', detail: '4 x 8-10', muscle: 'Chest' },
      { name: 'Incline Dumbbell Press', detail: '3 x 10-12', muscle: 'Upper Chest' },
      { name: 'Cable Flyes', detail: '3 x 12-15', muscle: 'Chest' },
      { name: 'Dips (weighted)', detail: '3 x 8-10', muscle: 'Chest / Triceps' },
      { name: 'Tricep Rope Pushdowns', detail: '3 x 12-15', muscle: 'Triceps' },
      { name: 'Overhead Tricep Extension', detail: '3 x 12', muscle: 'Triceps' },
      { name: 'Diamond Push-ups', detail: '2 x Failure', muscle: 'Triceps' },
    ],
  },
  {
    day: 'Tuesday',
    title: 'Back & Biceps',
    icon: '💪',
    focus: 'Pull strength — sculpt a wide back and build arm thickness.',
    accent: '#60a5fa',
    duration: '55 min',
    intensity: 'High',
    exercises: [
      { name: 'Deadlift', detail: '4 x 6-8', muscle: 'Back / Posterior' },
      { name: 'Pull-ups (weighted)', detail: '4 x 8-10', muscle: 'Lats' },
      { name: 'Barbell Rows', detail: '3 x 10-12', muscle: 'Mid-Back' },
      { name: 'Seated Cable Row', detail: '3 x 12', muscle: 'Back' },
      { name: 'Face Pulls', detail: '3 x 15', muscle: 'Rear Delts' },
      { name: 'Barbell Curls', detail: '3 x 10-12', muscle: 'Biceps' },
      { name: 'Hammer Curls', detail: '3 x 12', muscle: 'Brachialis' },
    ],
  },
  {
    day: 'Wednesday',
    title: 'Legs & Glutes',
    icon: '🦵',
    focus: 'Lower body power — build an unshakeable foundation from the ground up.',
    accent: '#34d399',
    duration: '60 min',
    intensity: 'Very High',
    exercises: [
      { name: 'Barbell Back Squat', detail: '4 x 8-10', muscle: 'Quads / Glutes' },
      { name: 'Romanian Deadlift', detail: '4 x 10-12', muscle: 'Hamstrings' },
      { name: 'Leg Press', detail: '3 x 12', muscle: 'Quads' },
      { name: 'Walking Lunges', detail: '3 x 12 each', muscle: 'Glutes / Quads' },
      { name: 'Leg Curls', detail: '3 x 12-15', muscle: 'Hamstrings' },
      { name: 'Hip Thrusts', detail: '3 x 12', muscle: 'Glutes' },
      { name: 'Calf Raises', detail: '4 x 15-20', muscle: 'Calves' },
    ],
  },
  {
    day: 'Thursday',
    title: 'Shoulders & Abs',
    icon: '🎯',
    focus: 'Boulder shoulders and a bulletproof core — build 3D delts and visible abs.',
    accent: '#fb923c',
    duration: '50 min',
    intensity: 'Moderate',
    exercises: [
      { name: 'Overhead Press', detail: '4 x 8-10', muscle: 'Shoulders' },
      { name: 'Lateral Raises', detail: '4 x 12-15', muscle: 'Side Delts' },
      { name: 'Rear Delt Flyes', detail: '3 x 15', muscle: 'Rear Delts' },
      { name: 'Arnold Press', detail: '3 x 10-12', muscle: 'Shoulders' },
      { name: 'Hanging Leg Raises', detail: '3 x 15', muscle: 'Lower Abs' },
      { name: 'Cable Crunches', detail: '3 x 15-20', muscle: 'Abs' },
      { name: 'Plank Hold', detail: '3 x 60s', muscle: 'Core' },
    ],
  },
  {
    day: 'Friday',
    title: 'Full Body Power',
    icon: '⚡',
    focus: 'Explosive compound lifts — maximize strength and athletic performance.',
    accent: '#fbbf24',
    duration: '50 min',
    intensity: 'Very High',
    exercises: [
      { name: 'Power Cleans', detail: '4 x 5', muscle: 'Full Body' },
      { name: 'Front Squat', detail: '4 x 6-8', muscle: 'Quads / Core' },
      { name: 'Barbell Row', detail: '3 x 8-10', muscle: 'Back' },
      { name: 'Push Press', detail: '3 x 8', muscle: 'Shoulders' },
      { name: 'Farmer\'s Walk', detail: '3 x 40m', muscle: 'Grip / Core' },
      { name: 'Box Jumps', detail: '3 x 10', muscle: 'Explosive Power' },
      { name: 'Battle Ropes', detail: '3 x 30s', muscle: 'Conditioning' },
    ],
  },
  {
    day: 'Saturday',
    title: 'HIIT & Cardio',
    icon: '🏃',
    focus: 'Torch calories and boost endurance — push your limits with intervals.',
    accent: '#f472b6',
    duration: '40 min',
    intensity: 'High',
    exercises: [
      { name: 'Sprint Intervals', detail: '8 x 30s on / 30s off', muscle: 'Cardio' },
      { name: 'Burpees', detail: '4 x 15', muscle: 'Full Body' },
      { name: 'Jump Squats', detail: '4 x 20', muscle: 'Legs / Power' },
      { name: 'Mountain Climbers', detail: '3 x 40s', muscle: 'Core / Cardio' },
      { name: 'Kettlebell Swings', detail: '3 x 20', muscle: 'Posterior Chain' },
      { name: 'Rowing Machine', detail: '5 min all-out', muscle: 'Full Body' },
      { name: 'Cool-down Stretch', detail: '10 min', muscle: 'Recovery' },
    ],
  },
  {
    day: 'Sunday',
    title: 'Active Recovery',
    icon: '🧘',
    focus: 'Restore, mobilize, and prepare for the week ahead. Recovery IS training.',
    accent: '#22d3ee',
    duration: '45 min',
    intensity: 'Low',
    exercises: [
      { name: 'Yoga Flow', detail: '15 min', muscle: 'Flexibility' },
      { name: 'Foam Rolling', detail: '10 min', muscle: 'Myofascial Release' },
      { name: 'Light Walking', detail: '20 min', muscle: 'Active Recovery' },
      { name: 'Hip Opener Stretches', detail: '5 min', muscle: 'Hips / Mobility' },
      { name: 'Shoulder Mobility', detail: '5 min', muscle: 'Shoulders' },
      { name: 'Deep Breathing', detail: '5 min', muscle: 'Nervous System' },
      { name: 'Meditation', detail: '10 min', muscle: 'Mental Recovery' },
    ],
  },
];

const QUOTES = [
  '"The only bad workout is the one that didn\'t happen."',
  '"Discipline is choosing between what you want now and what you want most."',
  '"Your body can stand almost anything. It\'s your mind you have to convince."',
  '"The pain you feel today will be the strength you feel tomorrow."',
  '"Don\'t wish for it. Work for it."',
  '"Success isn\'t given. It\'s earned — in the gym, on the track, in life."',
  '"You don\'t have to be extreme, just consistent."',
  '"The iron never lies. Two hundred pounds is always two hundred pounds."',
  '"Motivation gets you started. Habit keeps you going."',
  '"Sweat is just fat crying."',
];

// ---- State ----
const STORAGE_KEY = 'forge_completed';
const STREAK_KEY = 'forge_streak';

function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function setCompleted(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

function getStreak() {
  try {
    const data = JSON.parse(localStorage.getItem(STREAK_KEY));
    if (!data) return 0;
    const lastWeek = new Date(data.lastReset);
    const now = new Date();
    const diffDays = Math.floor((now - lastWeek) / (1000 * 60 * 60 * 24));
    if (diffDays > 14) return 0;
    return data.count || 0;
  } catch {
    return 0;
  }
}

function incrementStreak() {
  const current = getStreak();
  localStorage.setItem(STREAK_KEY, JSON.stringify({ count: current + 1, lastReset: new Date().toISOString() }));
}

// ---- Helpers ----
function getTodayIndex() {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1; // Monday=0 ... Sunday=6
}

function svgIcon(type) {
  const icons = {
    clock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    bolt: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  };
  return icons[type] || '';
}

// ---- Render Cards ----
function renderCards() {
  const grid = document.getElementById('weekGrid');
  const completed = getCompleted();
  const todayIdx = getTodayIndex();

  grid.innerHTML = WEEK.map((w, i) => {
    const isToday = i === todayIdx;
    const isDone = completed.includes(i);
    const chipLimit = 4;
    const chips = w.exercises.slice(0, chipLimit).map(e => `<span class="exercise-chip">${e.name}</span>`).join('');
    const extra = w.exercises.length > chipLimit ? `<span class="exercise-chip">+${w.exercises.length - chipLimit} more</span>` : '';

    return `
      <div class="day-card ${isDone ? 'completed' : ''} ${isToday && !isDone ? 'today' : ''}"
           style="--card-accent: ${w.accent}"
           data-index="${i}">
        ${isToday && !isDone ? '<span class="today-label">Today</span>' : ''}
        <div class="completed-badge">${svgIcon('check')}</div>
        <div class="day-card-header">
          <span class="day-badge">${w.day}</span>
          <div class="day-icon">${w.icon}</div>
        </div>
        <h3 class="day-title">${w.title}</h3>
        <p class="day-focus">${w.focus}</p>
        <div class="day-meta">
          <span class="meta-item">${svgIcon('clock')} ${w.duration}</span>
          <span class="meta-item">${svgIcon('bolt')} ${w.intensity}</span>
        </div>
        <div class="day-exercises">${chips}${extra}</div>
      </div>
    `;
  }).join('');

  // Click handlers
  grid.querySelectorAll('.day-card').forEach(card => {
    card.addEventListener('click', () => openModal(Number(card.dataset.index)));
  });
}

// ---- Modal ----
function openModal(index) {
  const w = WEEK[index];
  const completed = getCompleted();
  const isDone = completed.includes(index);
  const overlay = document.getElementById('modalOverlay');

  document.getElementById('modalDayBadge').textContent = w.day;
  document.getElementById('modalTitle').textContent = w.title;
  document.getElementById('modalFocus').textContent = w.focus;

  const body = document.getElementById('modalBody');
  body.innerHTML = w.exercises.map((e, i) => `
    <div class="exercise-row">
      <div class="exercise-num">${i + 1}</div>
      <div class="exercise-info">
        <div class="exercise-name">${e.name}</div>
        <div class="exercise-detail">${e.detail}</div>
      </div>
      <span class="exercise-muscle">${e.muscle}</span>
    </div>
  `).join('');

  const btn = document.getElementById('btnComplete');
  if (isDone) {
    btn.innerHTML = `${svgIcon('check')} <span>Completed!</span>`;
    btn.classList.add('done');
  } else {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>Mark as Complete</span>`;
    btn.classList.remove('done');
    btn.onclick = () => markComplete(index);
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Store current index for use
  overlay.dataset.currentIndex = index;
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function markComplete(index) {
  const completed = getCompleted();
  if (!completed.includes(index)) {
    completed.push(index);
    setCompleted(completed);

    if (completed.length === 7) {
      incrementStreak();
    }
  }

  updateStats();
  renderCards();

  // Update modal button
  const btn = document.getElementById('btnComplete');
  btn.innerHTML = `${svgIcon('check')} <span>Completed!</span>`;
  btn.classList.add('done');
  btn.onclick = null;
}

// ---- Stats ----
function updateStats() {
  const completed = getCompleted();
  const count = completed.length;
  const pct = Math.round((count / 7) * 100);

  document.getElementById('completedCount').textContent = count;
  document.getElementById('weekProgress').textContent = pct + '%';
  document.getElementById('weekStreak').textContent = getStreak();

  // Progress ring
  const circumference = 2 * Math.PI * 52; // r=52
  const offset = circumference - (count / 7) * circumference;
  document.getElementById('progressRing').style.strokeDashoffset = offset;
  document.getElementById('progressRingText').textContent = `${count}/7`;
}

// ---- Reset ----
function resetProgress() {
  if (confirm('Reset all progress for this week? This cannot be undone.')) {
    localStorage.removeItem(STORAGE_KEY);
    updateStats();
    renderCards();
  }
}

// ---- Quote ----
function setQuote() {
  const idx = Math.floor(Math.random() * QUOTES.length);
  document.getElementById('quote').textContent = QUOTES[idx];
}

// ---- Event Listeners ----
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
document.getElementById('resetBtn').addEventListener('click', resetProgress);

// ---- Init ----
renderCards();
updateStats();
setQuote();
