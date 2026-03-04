/* ============================================
   GO TYLER — Weekly Training Program
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
const EX_STORAGE_KEY = 'forge_exercises';

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

function getExCompleted(dayIndex) {
  try {
    const all = JSON.parse(localStorage.getItem(EX_STORAGE_KEY)) || {};
    return all[dayIndex] || [];
  } catch { return []; }
}

function setExCompleted(dayIndex, exIndices) {
  try {
    const all = JSON.parse(localStorage.getItem(EX_STORAGE_KEY)) || {};
    all[dayIndex] = exIndices;
    localStorage.setItem(EX_STORAGE_KEY, JSON.stringify(all));
  } catch {}
}

function toggleExercise(dayIndex, exIndex) {
  const done = getExCompleted(dayIndex);
  const idx = done.indexOf(exIndex);
  if (idx === -1) { done.push(exIndex); } else { done.splice(idx, 1); }
  setExCompleted(dayIndex, done);

  // Auto-complete day if all exercises checked
  const total = WEEK[dayIndex].exercises.length;
  if (done.length === total) {
    const completed = getCompleted();
    if (!completed.includes(dayIndex)) {
      completed.push(dayIndex);
      setCompleted(completed);
      if (completed.length === 7) incrementStreak();
      updateStats();
      renderCards();
    }
  }

  return done;
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

// ---- Exercise Animations (Animated SVG stick figures) ----
const EXERCISE_ANIMS = {
  // Movement pattern mapping
  'bench-press': `<svg viewBox="0 0 60 60" class="ex-anim"><line x1="10" y1="35" x2="50" y2="35" stroke="var(--text-dim)" stroke-width="2" stroke-linecap="round"/><circle cx="30" cy="42" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="46" x2="30" y2="54" stroke="var(--accent)" stroke-width="1.5"/><line x1="22" y1="54" x2="38" y2="54" stroke="var(--accent)" stroke-width="1.5"/><g class="anim-press"><line x1="18" y1="38" x2="18" y2="32" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><line x1="42" y1="38" x2="42" y2="32" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><line x1="8" y1="32" x2="52" y2="32" stroke="var(--card-accent, var(--accent))" stroke-width="2.5" stroke-linecap="round"/><circle cx="6" cy="32" r="3" fill="var(--card-accent, var(--accent))"/><circle cx="54" cy="32" r="3" fill="var(--card-accent, var(--accent))"/></g></svg>`,

  'incline-press': `<svg viewBox="0 0 60 60" class="ex-anim"><line x1="15" y1="50" x2="45" y2="30" stroke="var(--text-dim)" stroke-width="2" stroke-linecap="round"/><circle cx="35" cy="35" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="35" y1="39" x2="30" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="22" y1="52" x2="38" y2="52" stroke="var(--accent)" stroke-width="1.5"/><g class="anim-press"><line x1="25" y1="33" x2="22" y2="24" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><line x1="45" y1="33" x2="48" y2="24" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><line x1="14" y1="24" x2="56" y2="24" stroke="var(--card-accent, var(--accent))" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="24" r="3" fill="var(--card-accent, var(--accent))"/><circle cx="58" cy="24" r="3" fill="var(--card-accent, var(--accent))"/></g></svg>`,

  'fly': `<svg viewBox="0 0 60 60" class="ex-anim"><circle cx="30" cy="20" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="24" x2="30" y2="40" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="48" x2="36" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="40" x2="24" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="40" x2="36" y2="48" stroke="var(--accent)" stroke-width="1.5"/><g class="anim-fly"><line x1="30" y1="28" x2="12" y2="22" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><line x1="30" y1="28" x2="48" y2="22" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="22" r="2.5" fill="var(--card-accent, var(--accent))"/><circle cx="48" cy="22" r="2.5" fill="var(--card-accent, var(--accent))"/></g></svg>`,

  'dip': `<svg viewBox="0 0 60 60" class="ex-anim"><rect x="8" y="24" width="6" height="30" rx="2" fill="var(--text-dim)" opacity="0.4"/><rect x="46" y="24" width="6" height="30" rx="2" fill="var(--text-dim)" opacity="0.4"/><g class="anim-dip"><circle cx="30" cy="20" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="24" x2="30" y2="38" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="28" x2="14" y2="26" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="28" x2="46" y2="26" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="38" x2="24" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="38" x2="36" y2="48" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'pushdown': `<svg viewBox="0 0 60 60" class="ex-anim"><rect x="26" y="6" width="8" height="8" rx="2" fill="var(--text-dim)" opacity="0.4"/><line x1="30" y1="14" x2="30" y2="14" stroke="var(--text-dim)" stroke-width="1" opacity="0.4"/><circle cx="30" cy="24" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="28" x2="30" y2="42" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="52" x2="36" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="42" x2="24" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="42" x2="36" y2="52" stroke="var(--accent)" stroke-width="1.5"/><g class="anim-pushdown"><line x1="30" y1="32" x2="22" y2="42" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><line x1="30" y1="32" x2="38" y2="42" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><circle cx="22" cy="42" r="2" fill="var(--card-accent, var(--accent))"/><circle cx="38" cy="42" r="2" fill="var(--card-accent, var(--accent))"/></g></svg>`,

  'overhead-ext': `<svg viewBox="0 0 60 60" class="ex-anim"><circle cx="30" cy="28" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="32" x2="30" y2="46" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="54" x2="36" y2="54" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="46" x2="24" y2="54" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="46" x2="36" y2="54" stroke="var(--accent)" stroke-width="1.5"/><g class="anim-overhead"><line x1="30" y1="30" x2="24" y2="14" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><line x1="30" y1="30" x2="36" y2="14" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><circle cx="30" cy="10" r="3.5" fill="var(--card-accent, var(--accent))"/></g></svg>`,

  'pushup': `<svg viewBox="0 0 60 60" class="ex-anim"><line x1="10" y1="52" x2="50" y2="52" stroke="var(--text-dim)" stroke-width="1.5" opacity="0.3"/><g class="anim-pushup"><circle cx="44" cy="34" r="3.5" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="44" y1="37" x2="20" y2="40" stroke="var(--accent)" stroke-width="1.5"/><line x1="20" y1="40" x2="14" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="38" y1="38" x2="38" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="28" y1="39" x2="28" y2="50" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'deadlift': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-deadlift"><circle cx="30" cy="14" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="18" x2="30" y2="34" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="34" x2="22" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="34" x2="38" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="24" x2="20" y2="34" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="24" x2="40" y2="34" stroke="var(--accent)" stroke-width="1.5"/></g><line x1="10" y1="38" x2="50" y2="38" stroke="var(--card-accent, var(--accent))" stroke-width="2.5" stroke-linecap="round"/><circle cx="8" cy="38" r="3" fill="var(--card-accent, var(--accent))"/><circle cx="52" cy="38" r="3" fill="var(--card-accent, var(--accent))"/></svg>`,

  'pullup': `<svg viewBox="0 0 60 60" class="ex-anim"><line x1="10" y1="8" x2="50" y2="8" stroke="var(--text-dim)" stroke-width="2.5" stroke-linecap="round"/><g class="anim-pullup"><circle cx="30" cy="20" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="24" x2="30" y2="40" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="40" x2="22" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="40" x2="38" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="26" x2="20" y2="10" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="26" x2="40" y2="10" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'row': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-row"><circle cx="38" cy="18" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="38" y1="22" x2="28" y2="36" stroke="var(--accent)" stroke-width="1.5"/><line x1="28" y1="36" x2="20" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="28" y1="36" x2="40" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="34" y1="28" x2="22" y2="38" stroke="var(--accent)" stroke-width="1.5"/><line x1="34" y1="28" x2="40" y2="38" stroke="var(--accent)" stroke-width="1.5"/></g><line x1="12" y1="42" x2="50" y2="42" stroke="var(--card-accent, var(--accent))" stroke-width="2.5" stroke-linecap="round"/><circle cx="10" cy="42" r="3" fill="var(--card-accent, var(--accent))"/><circle cx="52" cy="42" r="3" fill="var(--card-accent, var(--accent))"/></svg>`,

  'cable-row': `<svg viewBox="0 0 60 60" class="ex-anim"><rect x="4" y="10" width="6" height="40" rx="2" fill="var(--text-dim)" opacity="0.3"/><line x1="10" y1="30" x2="24" y2="30" stroke="var(--text-dim)" stroke-width="1" stroke-dasharray="2"/><g class="anim-row"><circle cx="36" cy="24" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="28" x2="36" y2="42" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="42" x2="30" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="42" x2="42" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="32" x2="24" y2="30" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="32" x2="46" y2="30" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'face-pull': `<svg viewBox="0 0 60 60" class="ex-anim"><rect x="4" y="10" width="6" height="40" rx="2" fill="var(--text-dim)" opacity="0.3"/><line x1="10" y1="24" x2="24" y2="24" stroke="var(--text-dim)" stroke-width="1" stroke-dasharray="2"/><g class="anim-facepull"><circle cx="36" cy="24" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="28" x2="36" y2="44" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="44" x2="30" y2="54" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="44" x2="42" y2="54" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="28" x2="24" y2="20" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="28" x2="24" y2="28" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'curl': `<svg viewBox="0 0 60 60" class="ex-anim"><circle cx="30" cy="14" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="18" x2="30" y2="38" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="52" x2="36" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="38" x2="24" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="38" x2="36" y2="52" stroke="var(--accent)" stroke-width="1.5"/><g class="anim-curl"><line x1="30" y1="24" x2="22" y2="32" stroke="var(--accent)" stroke-width="1.5"/><line x1="22" y1="32" x2="22" y2="22" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><circle cx="22" cy="20" r="2.5" fill="var(--card-accent, var(--accent))"/><line x1="30" y1="24" x2="38" y2="32" stroke="var(--accent)" stroke-width="1.5"/><line x1="38" y1="32" x2="38" y2="22" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><circle cx="38" cy="20" r="2.5" fill="var(--card-accent, var(--accent))"/></g></svg>`,

  'squat': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-squat"><circle cx="30" cy="12" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="16" x2="30" y2="32" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="32" x2="22" y2="46" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="32" x2="38" y2="46" stroke="var(--accent)" stroke-width="1.5"/><line x1="22" y1="46" x2="20" y2="54" stroke="var(--accent)" stroke-width="1.5"/><line x1="38" y1="46" x2="40" y2="54" stroke="var(--accent)" stroke-width="1.5"/></g><line x1="14" y1="14" x2="46" y2="14" stroke="var(--card-accent, var(--accent))" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="14" r="3" fill="var(--card-accent, var(--accent))"/><circle cx="48" cy="14" r="3" fill="var(--card-accent, var(--accent))"/></svg>`,

  'leg-press': `<svg viewBox="0 0 60 60" class="ex-anim"><line x1="8" y1="52" x2="52" y2="52" stroke="var(--text-dim)" stroke-width="1.5" opacity="0.3"/><g class="anim-legpress"><circle cx="16" cy="32" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="16" y1="36" x2="16" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="16" y1="40" x2="30" y2="42" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="42" x2="42" y2="34" stroke="var(--accent)" stroke-width="1.5"/></g><rect x="42" y="20" width="10" height="24" rx="3" fill="var(--card-accent, var(--accent))" opacity="0.5"/></svg>`,

  'lunge': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-lunge"><circle cx="30" cy="10" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="14" x2="30" y2="32" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="32" x2="18" y2="46" stroke="var(--accent)" stroke-width="1.5"/><line x1="18" y1="46" x2="14" y2="54" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="32" x2="42" y2="42" stroke="var(--accent)" stroke-width="1.5"/><line x1="42" y1="42" x2="46" y2="54" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'leg-curl': `<svg viewBox="0 0 60 60" class="ex-anim"><line x1="6" y1="30" x2="54" y2="30" stroke="var(--text-dim)" stroke-width="2" stroke-linecap="round"/><g class="anim-legcurl"><circle cx="16" cy="26" r="3.5" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="20" y1="28" x2="44" y2="28" stroke="var(--accent)" stroke-width="1.5"/><line x1="44" y1="28" x2="46" y2="18" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><circle cx="46" cy="16" r="2.5" fill="var(--card-accent, var(--accent))"/></g></svg>`,

  'hip-thrust': `<svg viewBox="0 0 60 60" class="ex-anim"><line x1="6" y1="52" x2="54" y2="52" stroke="var(--text-dim)" stroke-width="1.5" opacity="0.3"/><rect x="6" y="36" width="10" height="16" rx="3" fill="var(--text-dim)" opacity="0.3"/><g class="anim-hipthrust"><circle cx="18" cy="30" r="3.5" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="22" y1="32" x2="36" y2="28" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="28" x2="36" y2="40" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="40" x2="44" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="40" x2="28" y2="50" stroke="var(--accent)" stroke-width="1.5"/></g><line x1="26" y1="26" x2="46" y2="26" stroke="var(--card-accent, var(--accent))" stroke-width="2.5" stroke-linecap="round"/><circle cx="24" cy="26" r="2.5" fill="var(--card-accent, var(--accent))"/><circle cx="48" cy="26" r="2.5" fill="var(--card-accent, var(--accent))"/></svg>`,

  'calf-raise': `<svg viewBox="0 0 60 60" class="ex-anim"><rect x="18" y="48" width="24" height="6" rx="2" fill="var(--text-dim)" opacity="0.3"/><g class="anim-calfraise"><circle cx="30" cy="12" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="16" x2="30" y2="34" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="34" x2="26" y2="46" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="34" x2="34" y2="46" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'overhead-press': `<svg viewBox="0 0 60 60" class="ex-anim"><circle cx="30" cy="22" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="26" x2="30" y2="42" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="54" x2="36" y2="54" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="42" x2="24" y2="54" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="42" x2="36" y2="54" stroke="var(--accent)" stroke-width="1.5"/><g class="anim-ohp"><line x1="30" y1="28" x2="18" y2="14" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="28" x2="42" y2="14" stroke="var(--accent)" stroke-width="1.5"/><line x1="10" y1="12" x2="50" y2="12" stroke="var(--card-accent, var(--accent))" stroke-width="2.5" stroke-linecap="round"/><circle cx="8" cy="12" r="3" fill="var(--card-accent, var(--accent))"/><circle cx="52" cy="12" r="3" fill="var(--card-accent, var(--accent))"/></g></svg>`,

  'lateral-raise': `<svg viewBox="0 0 60 60" class="ex-anim"><circle cx="30" cy="14" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="18" x2="30" y2="38" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="52" x2="36" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="38" x2="24" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="38" x2="36" y2="52" stroke="var(--accent)" stroke-width="1.5"/><g class="anim-lateral"><line x1="30" y1="24" x2="12" y2="22" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><line x1="30" y1="24" x2="48" y2="22" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="22" r="2.5" fill="var(--card-accent, var(--accent))"/><circle cx="48" cy="22" r="2.5" fill="var(--card-accent, var(--accent))"/></g></svg>`,

  'crunch': `<svg viewBox="0 0 60 60" class="ex-anim"><line x1="8" y1="48" x2="52" y2="48" stroke="var(--text-dim)" stroke-width="1.5" opacity="0.3"/><g class="anim-crunch"><circle cx="30" cy="30" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="34" x2="24" y2="46" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="46" x2="18" y2="46" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="34" x2="36" y2="46" stroke="var(--accent)" stroke-width="1.5"/><line x1="36" y1="46" x2="42" y2="46" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="28" x2="22" y2="26" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="28" x2="38" y2="26" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'leg-raise': `<svg viewBox="0 0 60 60" class="ex-anim"><line x1="30" y1="4" x2="30" y2="12" stroke="var(--text-dim)" stroke-width="2.5" stroke-linecap="round"/><g class="anim-legraise"><circle cx="30" cy="16" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="20" x2="30" y2="36" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="14" x2="22" y2="10" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="14" x2="38" y2="10" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="36" x2="24" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="36" x2="36" y2="50" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'plank': `<svg viewBox="0 0 60 60" class="ex-anim"><line x1="6" y1="52" x2="54" y2="52" stroke="var(--text-dim)" stroke-width="1.5" opacity="0.3"/><g class="anim-plank"><circle cx="46" cy="32" r="3.5" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="44" y1="35" x2="14" y2="38" stroke="var(--accent)" stroke-width="1.5"/><line x1="14" y1="38" x2="12" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="37" x2="22" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="42" y1="35" x2="42" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="42" y1="35" x2="50" y2="50" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'power-clean': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-clean"><circle cx="30" cy="10" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="14" x2="30" y2="30" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="30" x2="22" y2="44" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="30" x2="38" y2="44" stroke="var(--accent)" stroke-width="1.5"/><line x1="22" y1="44" x2="20" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="38" y1="44" x2="40" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="18" x2="18" y2="12" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="18" x2="42" y2="12" stroke="var(--accent)" stroke-width="1.5"/></g><line x1="10" y1="12" x2="50" y2="12" stroke="var(--card-accent, var(--accent))" stroke-width="2.5" stroke-linecap="round"/><circle cx="8" cy="12" r="3" fill="var(--card-accent, var(--accent))"/><circle cx="52" cy="12" r="3" fill="var(--card-accent, var(--accent))"/></svg>`,

  'farmer-walk': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-walk"><circle cx="30" cy="10" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="14" x2="30" y2="34" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="34" x2="22" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="34" x2="38" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="22" x2="18" y2="34" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="22" x2="42" y2="34" stroke="var(--accent)" stroke-width="1.5"/></g><rect x="14" y="34" width="6" height="10" rx="2" fill="var(--card-accent, var(--accent))" opacity="0.6"/><rect x="40" y="34" width="6" height="10" rx="2" fill="var(--card-accent, var(--accent))" opacity="0.6"/></svg>`,

  'box-jump': `<svg viewBox="0 0 60 60" class="ex-anim"><rect x="28" y="38" width="24" height="16" rx="2" fill="var(--text-dim)" opacity="0.3"/><g class="anim-jump"><circle cx="24" cy="14" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="18" x2="24" y2="30" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="30" x2="18" y2="42" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="30" x2="30" y2="42" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="22" x2="16" y2="18" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="22" x2="32" y2="18" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'battle-ropes': `<svg viewBox="0 0 60 60" class="ex-anim"><circle cx="30" cy="14" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="18" x2="30" y2="34" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="48" x2="36" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="34" x2="24" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="34" x2="36" y2="48" stroke="var(--accent)" stroke-width="1.5"/><path class="anim-rope-l" d="M24,24 Q16,30 14,40 Q12,48 8,54" fill="none" stroke="var(--card-accent, var(--accent))" stroke-width="2" stroke-linecap="round"/><path class="anim-rope-r" d="M36,24 Q44,30 46,40 Q48,48 52,54" fill="none" stroke="var(--card-accent, var(--accent))" stroke-width="2" stroke-linecap="round"/></svg>`,

  'sprint': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-sprint"><circle cx="28" cy="12" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="28" y1="16" x2="26" y2="32" stroke="var(--accent)" stroke-width="1.5"/><line x1="26" y1="32" x2="16" y2="46" stroke="var(--accent)" stroke-width="1.5"/><line x1="26" y1="32" x2="38" y2="46" stroke="var(--accent)" stroke-width="1.5"/><line x1="28" y1="22" x2="18" y2="16" stroke="var(--accent)" stroke-width="1.5"/><line x1="28" y1="22" x2="40" y2="28" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'burpee': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-burpee"><circle cx="30" cy="12" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="16" x2="30" y2="30" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="30" x2="22" y2="44" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="30" x2="38" y2="44" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="22" x2="20" y2="16" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="22" x2="40" y2="16" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'mountain-climber': `<svg viewBox="0 0 60 60" class="ex-anim"><line x1="6" y1="52" x2="54" y2="52" stroke="var(--text-dim)" stroke-width="1.5" opacity="0.3"/><g class="anim-mtnclimb"><circle cx="44" cy="26" r="3.5" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="42" y1="29" x2="28" y2="34" stroke="var(--accent)" stroke-width="1.5"/><line x1="28" y1="34" x2="18" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="28" y1="34" x2="40" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="40" y1="30" x2="46" y2="40" stroke="var(--accent)" stroke-width="1.5"/><line x1="40" y1="30" x2="50" y2="40" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'kettlebell': `<svg viewBox="0 0 60 60" class="ex-anim"><circle cx="30" cy="18" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="22" x2="30" y2="38" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="52" x2="36" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="38" x2="24" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="38" x2="36" y2="52" stroke="var(--accent)" stroke-width="1.5"/><g class="anim-kbswing"><line x1="30" y1="28" x2="30" y2="38" stroke="var(--accent)" stroke-width="1.5"/><circle cx="30" cy="42" r="4" fill="var(--card-accent, var(--accent))" opacity="0.6"/><path d="M26,38 Q30,34 34,38" fill="none" stroke="var(--card-accent, var(--accent))" stroke-width="1.5"/></g></svg>`,

  'rowing-machine': `<svg viewBox="0 0 60 60" class="ex-anim"><line x1="6" y1="44" x2="54" y2="44" stroke="var(--text-dim)" stroke-width="2" stroke-linecap="round" opacity="0.3"/><line x1="48" y1="36" x2="52" y2="44" stroke="var(--text-dim)" stroke-width="2" opacity="0.3"/><g class="anim-rowmachine"><circle cx="22" cy="30" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="22" y1="34" x2="22" y2="42" stroke="var(--accent)" stroke-width="1.5"/><line x1="22" y1="42" x2="14" y2="42" stroke="var(--accent)" stroke-width="1.5"/><line x1="22" y1="42" x2="30" y2="42" stroke="var(--accent)" stroke-width="1.5"/><line x1="22" y1="36" x2="36" y2="34" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'yoga': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-yoga"><circle cx="30" cy="14" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="18" x2="30" y2="36" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="36" x2="22" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="36" x2="38" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="24" x2="14" y2="18" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="24" x2="46" y2="18" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'foam-roll': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-foamroll"><ellipse cx="30" cy="46" rx="12" ry="5" fill="var(--card-accent, var(--accent))" opacity="0.4"/><circle cx="26" cy="30" r="3.5" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="26" y1="34" x2="30" y2="44" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="44" x2="20" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="44" x2="40" y2="52" stroke="var(--accent)" stroke-width="1.5"/><line x1="26" y1="32" x2="18" y2="38" stroke="var(--accent)" stroke-width="1.5"/><line x1="26" y1="32" x2="38" y2="38" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'walking': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-walk"><circle cx="30" cy="10" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="14" x2="30" y2="32" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="32" x2="22" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="32" x2="38" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="22" x2="22" y2="28" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="22" x2="38" y2="28" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'stretch': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-stretch"><circle cx="30" cy="14" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="18" x2="30" y2="34" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="34" x2="18" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="34" x2="42" y2="50" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="22" x2="14" y2="14" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="22" x2="46" y2="14" stroke="var(--accent)" stroke-width="1.5"/></g></svg>`,

  'breathing': `<svg viewBox="0 0 60 60" class="ex-anim"><circle cx="30" cy="28" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="32" x2="30" y2="42" stroke="var(--accent)" stroke-width="1.5"/><line x1="24" y1="54" x2="36" y2="54" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="42" x2="24" y2="54" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="42" x2="36" y2="54" stroke="var(--accent)" stroke-width="1.5"/><circle class="anim-breathe" cx="30" cy="36" r="8" fill="none" stroke="var(--card-accent, var(--accent))" stroke-width="1" opacity="0.5"/></svg>`,

  'meditation': `<svg viewBox="0 0 60 60" class="ex-anim"><g class="anim-meditate"><circle cx="30" cy="18" r="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="22" x2="30" y2="38" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="38" x2="18" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="38" x2="42" y2="48" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="28" x2="20" y2="34" stroke="var(--accent)" stroke-width="1.5"/><line x1="20" y1="34" x2="22" y2="40" stroke="var(--accent)" stroke-width="1.5"/><line x1="30" y1="28" x2="40" y2="34" stroke="var(--accent)" stroke-width="1.5"/><line x1="40" y1="34" x2="38" y2="40" stroke="var(--accent)" stroke-width="1.5"/></g><circle class="anim-breathe" cx="30" cy="10" r="3" fill="var(--card-accent, var(--accent))" opacity="0.3"/></svg>`,
};

// Map exercise names to animation keys
const EXERCISE_ANIM_MAP = {
  'Barbell Bench Press': 'bench-press',
  'Incline Dumbbell Press': 'incline-press',
  'Cable Flyes': 'fly',
  'Dips (weighted)': 'dip',
  'Tricep Rope Pushdowns': 'pushdown',
  'Overhead Tricep Extension': 'overhead-ext',
  'Diamond Push-ups': 'pushup',
  'Deadlift': 'deadlift',
  'Pull-ups (weighted)': 'pullup',
  'Barbell Rows': 'row',
  'Seated Cable Row': 'cable-row',
  'Face Pulls': 'face-pull',
  'Barbell Curls': 'curl',
  'Hammer Curls': 'curl',
  'Barbell Back Squat': 'squat',
  'Romanian Deadlift': 'deadlift',
  'Leg Press': 'leg-press',
  'Walking Lunges': 'lunge',
  'Leg Curls': 'leg-curl',
  'Hip Thrusts': 'hip-thrust',
  'Calf Raises': 'calf-raise',
  'Overhead Press': 'overhead-press',
  'Lateral Raises': 'lateral-raise',
  'Rear Delt Flyes': 'fly',
  'Arnold Press': 'overhead-press',
  'Hanging Leg Raises': 'leg-raise',
  'Cable Crunches': 'crunch',
  'Plank Hold': 'plank',
  'Power Cleans': 'power-clean',
  'Front Squat': 'squat',
  'Barbell Row': 'row',
  'Push Press': 'overhead-press',
  "Farmer's Walk": 'farmer-walk',
  'Box Jumps': 'box-jump',
  'Battle Ropes': 'battle-ropes',
  'Sprint Intervals': 'sprint',
  'Burpees': 'burpee',
  'Jump Squats': 'squat',
  'Mountain Climbers': 'mountain-climber',
  'Kettlebell Swings': 'kettlebell',
  'Rowing Machine': 'rowing-machine',
  'Cool-down Stretch': 'stretch',
  'Yoga Flow': 'yoga',
  'Foam Rolling': 'foam-roll',
  'Light Walking': 'walking',
  'Hip Opener Stretches': 'stretch',
  'Shoulder Mobility': 'lateral-raise',
  'Deep Breathing': 'breathing',
  'Meditation': 'meditation',
};

function getExerciseAnim(name) {
  const key = EXERCISE_ANIM_MAP[name];
  return key && EXERCISE_ANIMS[key] ? EXERCISE_ANIMS[key] : '';
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
  const exDone = getExCompleted(index);
  body.innerHTML = w.exercises.map((e, i) => {
    const checked = exDone.includes(i);
    return `
    <div class="exercise-row ${checked ? 'ex-done' : ''}" data-ex="${i}">
      <div class="exercise-check ${checked ? 'checked' : ''}" data-day="${index}" data-ex="${i}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="ex-anim-wrap">${getExerciseAnim(e.name)}</div>
      <div class="exercise-info">
        <div class="exercise-name">${e.name}</div>
        <div class="exercise-detail">${e.detail}</div>
      </div>
      <button class="btn-demo" onclick="event.stopPropagation();window.open('https://www.youtube.com/results?search_query='+encodeURIComponent('${e.name.replace(/'/g, "\\'")} proper form tutorial'),'_blank')" title="Watch demo">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.582 6.186a2.506 2.506 0 0 0-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418A2.506 2.506 0 0 0 2.418 6.186C2 7.746 2 12 2 12s0 4.254.418 5.814a2.506 2.506 0 0 0 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418a2.506 2.506 0 0 0 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM10 15.464V8.536L16 12l-6 3.464z"/></svg>
      </button>
      <span class="exercise-muscle">${e.muscle}</span>
    </div>
  `}).join('') + `<div class="modal-exercise-progress">${exDone.length}/${w.exercises.length} exercises done</div>`;

  // Checkbox click handlers
  body.querySelectorAll('.exercise-check').forEach(cb => {
    cb.addEventListener('click', (e) => {
      e.stopPropagation();
      const dayIdx = Number(cb.dataset.day);
      const exIdx = Number(cb.dataset.ex);
      const done = toggleExercise(dayIdx, exIdx);
      const isChecked = done.includes(exIdx);
      cb.classList.toggle('checked', isChecked);
      cb.closest('.exercise-row').classList.toggle('ex-done', isChecked);
      // Update progress text
      const prog = body.querySelector('.modal-exercise-progress');
      if (prog) prog.textContent = `${done.length}/${WEEK[dayIdx].exercises.length} exercises done`;
      // Update button if all done
      if (done.length === WEEK[dayIdx].exercises.length) {
        const btn = document.getElementById('btnComplete');
        btn.innerHTML = `${svgIcon('check')} <span>Completed!</span>`;
        btn.classList.add('done');
      }
    });
  });

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
  closeModal();
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
    localStorage.removeItem(EX_STORAGE_KEY);
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

// ---- Service Worker (PWA) ----
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

// ---- Spotify Toggle ----
// ---- Init ----
renderCards();
updateStats();
setQuote();
