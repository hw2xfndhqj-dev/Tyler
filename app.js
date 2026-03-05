/* ============================================
   GO TYLER — Freeletics-Style SaaS MVP
   ============================================ */

// ---- Workout Data ----
const WEEK = [
  {
    day: 'Monday', title: 'Chest & Triceps', icon: '\u{1F525}',
    focus: 'Push power — build a strong pressing foundation with compound and isolation moves.',
    accent: '#f87171', duration: '55 min', intensity: 'High',
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
    day: 'Tuesday', title: 'Back & Biceps', icon: '\u{1F4AA}',
    focus: 'Pull strength — sculpt a wide back and build arm thickness.',
    accent: '#60a5fa', duration: '55 min', intensity: 'High',
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
    day: 'Wednesday', title: 'Legs & Glutes', icon: '\u{1F9B5}',
    focus: 'Lower body power — build an unshakeable foundation from the ground up.',
    accent: '#34d399', duration: '60 min', intensity: 'Very High',
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
    day: 'Thursday', title: 'Shoulders & Abs', icon: '\u{1F3AF}',
    focus: 'Boulder shoulders and a bulletproof core — build 3D delts and visible abs.',
    accent: '#fb923c', duration: '50 min', intensity: 'Moderate',
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
    day: 'Friday', title: 'Full Body Power', icon: '\u{26A1}',
    focus: 'Explosive compound lifts — maximize strength and athletic performance.',
    accent: '#fbbf24', duration: '50 min', intensity: 'Very High',
    exercises: [
      { name: 'Power Cleans', detail: '4 x 5', muscle: 'Full Body' },
      { name: 'Front Squat', detail: '4 x 6-8', muscle: 'Quads / Core' },
      { name: 'Barbell Row', detail: '3 x 8-10', muscle: 'Back' },
      { name: 'Push Press', detail: '3 x 8', muscle: 'Shoulders' },
      { name: "Farmer's Walk", detail: '3 x 40m', muscle: 'Grip / Core' },
      { name: 'Box Jumps', detail: '3 x 10', muscle: 'Explosive Power' },
      { name: 'Battle Ropes', detail: '3 x 30s', muscle: 'Conditioning' },
    ],
  },
  {
    day: 'Saturday', title: 'HIIT & Cardio', icon: '\u{1F3C3}',
    focus: 'Torch calories and boost endurance — push your limits with intervals.',
    accent: '#f472b6', duration: '40 min', intensity: 'High',
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
    day: 'Sunday', title: 'Active Recovery', icon: '\u{1F9D8}',
    focus: 'Restore, mobilize, and prepare for the week ahead. Recovery IS training.',
    accent: '#22d3ee', duration: '45 min', intensity: 'Low',
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

// ---- Exercise Animation Map ----
const EXERCISE_ANIM_MAP = {
  'barbell bench press': 'press', 'incline dumbbell press': 'press', 'cable flyes': 'fly',
  'dips (weighted)': 'dip', 'tricep rope pushdowns': 'pushdown',
  'overhead tricep extension': 'overhead', 'diamond push-ups': 'pushup',
  'deadlift': 'deadlift', 'pull-ups (weighted)': 'pullup', 'barbell rows': 'row',
  'seated cable row': 'row', 'face pulls': 'facepull', 'barbell curls': 'curl',
  'hammer curls': 'curl', 'barbell back squat': 'squat', 'romanian deadlift': 'deadlift',
  'leg press': 'legpress', 'walking lunges': 'lunge', 'leg curls': 'legcurl',
  'hip thrusts': 'hipthrust', 'calf raises': 'calfraise', 'overhead press': 'ohp',
  'lateral raises': 'lateral', 'rear delt flyes': 'fly', 'arnold press': 'press',
  'hanging leg raises': 'legraise', 'cable crunches': 'crunch', 'plank hold': 'plank',
  'power cleans': 'clean', 'front squat': 'squat', 'barbell row': 'row',
  'push press': 'ohp', "farmer's walk": 'walk', 'box jumps': 'jump',
  'battle ropes': 'ropes', 'sprint intervals': 'sprint', 'burpees': 'burpee',
  'jump squats': 'jump', 'mountain climbers': 'mtnclimb', 'kettlebell swings': 'kbswing',
  'rowing machine': 'rowmachine', 'cool-down stretch': 'stretch', 'yoga flow': 'yoga',
  'foam rolling': 'foamroll', 'light walking': 'walk', 'hip opener stretches': 'stretch',
  'shoulder mobility': 'lateral', 'deep breathing': 'breathe', 'meditation': 'meditate',
};

function getExerciseSVG(key) {
  const svgs = {
    press: `<svg class="ex-anim" viewBox="0 0 60 60"><line x1="30" y1="48" x2="30" y2="26" stroke="#f0f0f5" stroke-width="2.5" stroke-linecap="round"/><circle cx="30" cy="20" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="16" y1="14" x2="44" y2="14" stroke="#7c5cfc" stroke-width="3" stroke-linecap="round" class="anim-press"/><line x1="22" y1="30" x2="16" y2="14" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="38" y1="30" x2="44" y2="14" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="48" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="36" y1="48" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/></svg>`,
    fly: `<svg class="ex-anim" viewBox="0 0 60 60"><line x1="30" y1="48" x2="30" y2="26" stroke="#f0f0f5" stroke-width="2.5"/><circle cx="30" cy="20" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="30" x2="14" y2="24" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round" class="anim-fly"/><line x1="30" y1="30" x2="46" y2="24" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="48" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="48" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    dip: `<svg class="ex-anim anim-dip" viewBox="0 0 60 60"><rect x="8" y="24" width="44" height="3" rx="1.5" fill="#555568"/><circle cx="30" cy="16" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="22" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="28" x2="20" y2="24" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="30" y1="28" x2="40" y2="24" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="50" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="50" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    pushdown: `<svg class="ex-anim" viewBox="0 0 60 60"><line x1="30" y1="48" x2="30" y2="24" stroke="#f0f0f5" stroke-width="2.5"/><circle cx="30" cy="18" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="28" x2="22" y2="38" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round" class="anim-pushdown"/><line x1="30" y1="28" x2="38" y2="38" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round" class="anim-pushdown"/><line x1="24" y1="48" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="48" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    overhead: `<svg class="ex-anim" viewBox="0 0 60 60"><line x1="30" y1="48" x2="30" y2="24" stroke="#f0f0f5" stroke-width="2.5"/><circle cx="30" cy="18" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="26" x2="24" y2="10" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="30" y1="26" x2="36" y2="10" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><circle cx="30" cy="8" r="3" fill="#7c5cfc" class="anim-overhead"/><line x1="24" y1="48" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="48" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    pushup: `<svg class="ex-anim anim-pushup" viewBox="0 0 60 60"><circle cx="14" cy="28" r="5" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="18" y1="32" x2="44" y2="38" stroke="#f0f0f5" stroke-width="2.5" stroke-linecap="round"/><line x1="18" y1="36" x2="14" y2="46" stroke="#f0f0f5" stroke-width="2"/><line x1="44" y1="38" x2="46" y2="50" stroke="#f0f0f5" stroke-width="2"/><line x1="44" y1="38" x2="40" y2="50" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    deadlift: `<svg class="ex-anim anim-deadlift" viewBox="0 0 60 60"><circle cx="30" cy="14" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="20" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="30" x2="20" y2="44" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="30" y1="30" x2="40" y2="44" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="54" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="54" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/><line x1="14" y1="44" x2="46" y2="44" stroke="#7c5cfc" stroke-width="3" stroke-linecap="round"/></svg>`,
    pullup: `<svg class="ex-anim anim-pullup" viewBox="0 0 60 60"><line x1="10" y1="8" x2="50" y2="8" stroke="#555568" stroke-width="3" stroke-linecap="round"/><circle cx="30" cy="18" r="5" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="23" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2.5"/><line x1="26" y1="10" x2="24" y2="24" stroke="#f0f0f5" stroke-width="2"/><line x1="34" y1="10" x2="36" y2="24" stroke="#f0f0f5" stroke-width="2"/><line x1="24" y1="50" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="50" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    row: `<svg class="ex-anim anim-row" viewBox="0 0 60 60"><circle cx="20" cy="18" r="5" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="24" y1="22" x2="36" y2="34" stroke="#f0f0f5" stroke-width="2.5"/><line x1="36" y1="34" x2="46" y2="26" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="36" y1="34" x2="30" y2="48" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="34" x2="42" y2="48" stroke="#f0f0f5" stroke-width="2"/><line x1="14" y1="48" x2="46" y2="48" stroke="#7c5cfc" stroke-width="3" stroke-linecap="round"/></svg>`,
    facepull: `<svg class="ex-anim anim-facepull" viewBox="0 0 60 60"><circle cx="30" cy="16" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="22" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="28" x2="18" y2="20" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="30" y1="28" x2="42" y2="20" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="50" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="50" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    curl: `<svg class="ex-anim" viewBox="0 0 60 60"><circle cx="30" cy="16" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="22" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="28" x2="22" y2="36" stroke="#f0f0f5" stroke-width="2"/><line x1="22" y1="36" x2="22" y2="26" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round" class="anim-curl"/><circle cx="22" cy="24" r="3" fill="#7c5cfc" class="anim-curl"/><line x1="30" y1="28" x2="38" y2="36" stroke="#f0f0f5" stroke-width="2"/><line x1="24" y1="50" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="50" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    squat: `<svg class="ex-anim anim-squat" viewBox="0 0 60 60"><circle cx="30" cy="10" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="16" x2="30" y2="34" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="22" x2="20" y2="16" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="30" y1="22" x2="40" y2="16" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="22" y1="50" x2="30" y2="34" stroke="#f0f0f5" stroke-width="2"/><line x1="38" y1="50" x2="30" y2="34" stroke="#f0f0f5" stroke-width="2"/><line x1="14" y1="16" x2="46" y2="16" stroke="#7c5cfc" stroke-width="3" stroke-linecap="round"/></svg>`,
    legpress: `<svg class="ex-anim anim-legpress" viewBox="0 0 60 60"><circle cx="16" cy="24" r="5" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="20" y1="28" x2="26" y2="38" stroke="#f0f0f5" stroke-width="2.5"/><line x1="26" y1="38" x2="40" y2="44" stroke="#f0f0f5" stroke-width="2"/><line x1="26" y1="38" x2="40" y2="36" stroke="#f0f0f5" stroke-width="2"/><rect x="42" y="30" width="6" height="20" rx="2" fill="#7c5cfc" opacity="0.6"/></svg>`,
    lunge: `<svg class="ex-anim anim-lunge" viewBox="0 0 60 60"><circle cx="30" cy="10" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="16" x2="30" y2="34" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="34" x2="20" y2="50" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="34" x2="42" y2="50" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="24" x2="22" y2="18" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="24" x2="38" y2="18" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    legcurl: `<svg class="ex-anim" viewBox="0 0 60 60"><rect x="8" y="22" width="44" height="4" rx="2" fill="#555568"/><circle cx="16" cy="18" r="4" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="16" y1="22" x2="44" y2="22" stroke="#f0f0f5" stroke-width="2.5"/><line x1="44" y1="22" x2="40" y2="12" stroke="#f0f0f5" stroke-width="2.5" stroke-linecap="round" class="anim-legcurl"/></svg>`,
    hipthrust: `<svg class="ex-anim anim-hipthrust" viewBox="0 0 60 60"><rect x="6" y="34" width="20" height="4" rx="2" fill="#555568"/><circle cx="14" cy="28" r="5" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="18" y1="32" x2="34" y2="36" stroke="#f0f0f5" stroke-width="2.5"/><line x1="34" y1="36" x2="44" y2="48" stroke="#f0f0f5" stroke-width="2"/><line x1="34" y1="36" x2="24" y2="48" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    calfraise: `<svg class="ex-anim anim-calfraise" viewBox="0 0 60 60"><circle cx="30" cy="10" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="16" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="24" x2="22" y2="20" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="24" x2="38" y2="20" stroke="#f0f0f5" stroke-width="2"/><line x1="28" y1="50" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/><line x1="32" y1="50" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/><rect x="24" y="48" width="12" height="3" rx="1.5" fill="#7c5cfc"/></svg>`,
    ohp: `<svg class="ex-anim anim-ohp" viewBox="0 0 60 60"><circle cx="30" cy="20" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="26" x2="30" y2="42" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="30" x2="20" y2="12" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="30" y1="30" x2="40" y2="12" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="14" y1="10" x2="46" y2="10" stroke="#7c5cfc" stroke-width="3" stroke-linecap="round"/><line x1="24" y1="52" x2="30" y2="42" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="52" x2="30" y2="42" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    lateral: `<svg class="ex-anim anim-lateral" viewBox="0 0 60 60"><circle cx="30" cy="14" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="20" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="26" x2="14" y2="28" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="30" y1="26" x2="46" y2="28" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="28" r="3" fill="#7c5cfc"/><circle cx="48" cy="28" r="3" fill="#7c5cfc"/><line x1="24" y1="50" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="50" x2="30" y2="40" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    crunch: `<svg class="ex-anim anim-crunch" viewBox="0 0 60 60"><circle cx="30" cy="18" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="24" x2="30" y2="42" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="30" x2="22" y2="24" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="30" x2="38" y2="24" stroke="#f0f0f5" stroke-width="2"/><line x1="22" y1="52" x2="30" y2="42" stroke="#f0f0f5" stroke-width="2"/><line x1="38" y1="52" x2="30" y2="42" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    legraise: `<svg class="ex-anim anim-legraise" viewBox="0 0 60 60"><line x1="30" y1="6" x2="30" y2="6" stroke="#555568" stroke-width="4" stroke-linecap="round"/><circle cx="30" cy="14" r="5" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="19" x2="30" y2="34" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="26" x2="22" y2="10" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="26" x2="38" y2="10" stroke="#f0f0f5" stroke-width="2"/><line x1="24" y1="48" x2="30" y2="34" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="48" x2="30" y2="34" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    plank: `<svg class="ex-anim anim-plank" viewBox="0 0 60 60"><circle cx="12" cy="30" r="5" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="16" y1="34" x2="48" y2="36" stroke="#f0f0f5" stroke-width="2.5"/><line x1="16" y1="38" x2="14" y2="46" stroke="#f0f0f5" stroke-width="2"/><line x1="48" y1="36" x2="48" y2="46" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    clean: `<svg class="ex-anim anim-clean" viewBox="0 0 60 60"><circle cx="30" cy="12" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="18" x2="30" y2="36" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="24" x2="22" y2="32" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="24" x2="38" y2="32" stroke="#f0f0f5" stroke-width="2"/><line x1="24" y1="50" x2="30" y2="36" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="50" x2="30" y2="36" stroke="#f0f0f5" stroke-width="2"/><line x1="14" y1="32" x2="46" y2="32" stroke="#7c5cfc" stroke-width="3" stroke-linecap="round"/></svg>`,
    walk: `<svg class="ex-anim anim-walk" viewBox="0 0 60 60"><circle cx="30" cy="10" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="16" x2="30" y2="36" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="24" x2="20" y2="34" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="24" x2="40" y2="34" stroke="#f0f0f5" stroke-width="2"/><rect x="17" y="32" width="6" height="8" rx="2" fill="#7c5cfc" opacity="0.6"/><rect x="37" y="32" width="6" height="8" rx="2" fill="#7c5cfc" opacity="0.6"/><line x1="24" y1="50" x2="30" y2="36" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="50" x2="30" y2="36" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    jump: `<svg class="ex-anim anim-jump" viewBox="0 0 60 60"><rect x="16" y="40" width="28" height="14" rx="3" fill="#555568"/><circle cx="30" cy="12" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="18" x2="30" y2="32" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="24" x2="22" y2="18" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="24" x2="38" y2="18" stroke="#f0f0f5" stroke-width="2"/><line x1="24" y1="40" x2="30" y2="32" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="40" x2="30" y2="32" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    ropes: `<svg class="ex-anim" viewBox="0 0 60 60"><circle cx="30" cy="14" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="20" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2.5"/><path d="M24,24 Q16,30 14,40 Q12,48 8,54" stroke="#7c5cfc" stroke-width="2.5" fill="none" stroke-linecap="round" class="anim-rope-l"/><path d="M36,24 Q44,30 46,40 Q48,48 52,54" stroke="#7c5cfc" stroke-width="2.5" fill="none" stroke-linecap="round" class="anim-rope-r"/><line x1="24" y1="48" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="48" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    sprint: `<svg class="ex-anim anim-sprint" viewBox="0 0 60 60"><circle cx="24" cy="12" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="26" y1="18" x2="32" y2="34" stroke="#f0f0f5" stroke-width="2.5"/><line x1="28" y1="24" x2="18" y2="20" stroke="#f0f0f5" stroke-width="2"/><line x1="28" y1="24" x2="40" y2="18" stroke="#f0f0f5" stroke-width="2"/><line x1="32" y1="34" x2="22" y2="50" stroke="#f0f0f5" stroke-width="2"/><line x1="32" y1="34" x2="44" y2="46" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    burpee: `<svg class="ex-anim anim-burpee" viewBox="0 0 60 60"><circle cx="30" cy="10" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="16" x2="30" y2="36" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="24" x2="20" y2="18" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="24" x2="40" y2="18" stroke="#f0f0f5" stroke-width="2"/><line x1="24" y1="50" x2="30" y2="36" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="50" x2="30" y2="36" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    mtnclimb: `<svg class="ex-anim anim-mtnclimb" viewBox="0 0 60 60"><circle cx="14" cy="22" r="5" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="18" y1="26" x2="42" y2="34" stroke="#f0f0f5" stroke-width="2.5"/><line x1="18" y1="30" x2="14" y2="40" stroke="#f0f0f5" stroke-width="2"/><line x1="42" y1="34" x2="48" y2="46" stroke="#f0f0f5" stroke-width="2"/><line x1="42" y1="34" x2="30" y2="42" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    kbswing: `<svg class="ex-anim anim-kbswing" viewBox="0 0 60 60"><circle cx="30" cy="14" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="20" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="28" x2="20" y2="36" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="28" x2="40" y2="36" stroke="#f0f0f5" stroke-width="2"/><circle cx="30" cy="40" r="5" fill="#7c5cfc" opacity="0.6"/><line x1="24" y1="50" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/><line x1="36" y1="50" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    rowmachine: `<svg class="ex-anim anim-rowmachine" viewBox="0 0 60 60"><rect x="6" y="40" width="48" height="3" rx="1.5" fill="#555568"/><circle cx="20" cy="28" r="5" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="24" y1="32" x2="32" y2="38" stroke="#f0f0f5" stroke-width="2.5"/><line x1="24" y1="34" x2="16" y2="40" stroke="#f0f0f5" stroke-width="2"/><line x1="32" y1="38" x2="40" y2="40" stroke="#f0f0f5" stroke-width="2"/><line x1="32" y1="38" x2="26" y2="40" stroke="#f0f0f5" stroke-width="2"/><line x1="24" y1="32" x2="38" y2="28" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/></svg>`,
    stretch: `<svg class="ex-anim anim-stretch" viewBox="0 0 60 60"><circle cx="30" cy="10" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="16" x2="30" y2="36" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="22" x2="16" y2="14" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="30" y1="22" x2="44" y2="14" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="22" y1="52" x2="30" y2="36" stroke="#f0f0f5" stroke-width="2"/><line x1="38" y1="52" x2="30" y2="36" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    yoga: `<svg class="ex-anim anim-yoga" viewBox="0 0 60 60"><circle cx="30" cy="12" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="18" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="26" x2="16" y2="30" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="30" y1="26" x2="44" y2="30" stroke="#f0f0f5" stroke-width="2" stroke-linecap="round"/><line x1="22" y1="52" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/><line x1="38" y1="52" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    foamroll: `<svg class="ex-anim anim-foamroll" viewBox="0 0 60 60"><ellipse cx="30" cy="46" rx="14" ry="5" fill="#7c5cfc" opacity="0.4"/><circle cx="22" cy="30" r="4" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="26" y1="34" x2="42" y2="40" stroke="#f0f0f5" stroke-width="2.5"/><line x1="42" y1="40" x2="44" y2="48" stroke="#f0f0f5" stroke-width="2"/><line x1="42" y1="40" x2="36" y2="48" stroke="#f0f0f5" stroke-width="2"/></svg>`,
    breathe: `<svg class="ex-anim" viewBox="0 0 60 60"><circle cx="30" cy="30" r="6" fill="none" stroke="#7c5cfc" stroke-width="2" class="anim-breathe"/><circle cx="30" cy="30" r="16" fill="none" stroke="rgba(124,92,252,0.2)" stroke-width="1"/><circle cx="30" cy="18" r="4" fill="none" stroke="#f0f0f5" stroke-width="1.5"/><line x1="30" y1="22" x2="30" y2="28" stroke="#f0f0f5" stroke-width="1.5"/></svg>`,
    meditate: `<svg class="ex-anim anim-meditate" viewBox="0 0 60 60"><circle cx="30" cy="16" r="6" fill="none" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="22" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2.5"/><line x1="30" y1="30" x2="18" y2="34" stroke="#f0f0f5" stroke-width="2"/><line x1="30" y1="30" x2="42" y2="34" stroke="#f0f0f5" stroke-width="2"/><line x1="22" y1="50" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/><line x1="38" y1="50" x2="30" y2="38" stroke="#f0f0f5" stroke-width="2"/><circle cx="30" cy="30" r="18" fill="none" stroke="rgba(124,92,252,0.15)" stroke-width="1"/></svg>`,
  };
  return svgs[key] || svgs.press;
}

function getExerciseAnim(name) {
  const key = EXERCISE_ANIM_MAP[name.toLowerCase()] || 'press';
  return getExerciseSVG(key);
}

// ---- Coach Tips ----
const COACH_TIPS = [
  "Focus on mind-muscle connection today. Slow down the eccentric (lowering) phase for better gains.",
  "Hydration matters! Drink at least 500ml of water before your workout.",
  "Progressive overload is key. Try to add 2.5kg or 1 extra rep compared to last week.",
  "Don't skip your warm-up. 5-10 minutes of dynamic stretching prevents injuries.",
  "Your muscles grow during rest, not during the workout. Prioritize sleep tonight.",
  "Protein timing: aim for 20-40g within 2 hours post-workout for optimal recovery.",
  "Feeling sore? That's DOMS (Delayed Onset Muscle Soreness). Light movement helps recovery.",
  "Track your lifts! Writing down your weights helps you progressively overload.",
  "Breathing technique: exhale on the effort, inhale on the return. Stay controlled.",
  "Great consistency this week! Remember: showing up is 90% of the battle.",
  "Try tempo training today: 3 seconds down, 1 second pause, 2 seconds up.",
  "Fuel your workout with complex carbs 1-2 hours before training.",
];

// ---- Muscle Group Filter Map ----
const MUSCLE_FILTER_MAP = {
  chest: ['chest', 'upper chest', 'chest / triceps'],
  back: ['back', 'back / posterior', 'lats', 'mid-back', 'rear delts'],
  legs: ['quads', 'quads / glutes', 'hamstrings', 'glutes', 'glutes / quads', 'calves', 'quads / core', 'legs / power'],
  shoulders: ['shoulders', 'side delts', 'rear delts'],
  arms: ['triceps', 'biceps', 'brachialis', 'grip / core'],
  core: ['core', 'abs', 'lower abs', 'core / cardio'],
  cardio: ['cardio', 'full body', 'conditioning', 'explosive power', 'posterior chain'],
  recovery: ['flexibility', 'myofascial release', 'active recovery', 'hips / mobility', 'nervous system', 'mental recovery', 'recovery'],
};

// ---- Storage Keys ----
const KEYS = {
  completed: 'gt_completed',
  exercises: 'gt_exercises',
  streak: 'gt_streak',
  profile: 'gt_profile',
  history: 'gt_history',
  totalStats: 'gt_total_stats',
  onboarded: 'gt_onboarded',
};

// ---- Storage Helpers ----
function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; }
  catch { return fallback; }
}
function save(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

function getCompleted() { return load(KEYS.completed, []); }
function setCompleted(arr) { save(KEYS.completed, arr); }

function getExDone(day) { return (load(KEYS.exercises, {}))[day] || []; }
function setExDone(day, arr) {
  const all = load(KEYS.exercises, {});
  all[day] = arr;
  save(KEYS.exercises, all);
}

function getProfile() {
  return load(KEYS.profile, { name: 'Tyler', level: 'advanced', goal: 'muscle', restTime: 60 });
}
function setProfile(p) { save(KEYS.profile, p); }

function getStreak() { return load(KEYS.streak, { count: 0, lastReset: null, best: 0 }); }
function setStreak(s) { save(KEYS.streak, s); }

function getHistory() { return load(KEYS.history, []); }
function addHistory(entry) {
  const h = getHistory();
  h.unshift(entry);
  if (h.length > 50) h.length = 50;
  save(KEYS.history, h);
}

function getTotalStats() { return load(KEYS.totalStats, { workouts: 0, minutes: 0, exercises: 0 }); }
function addTotalStats(mins, exCount) {
  const s = getTotalStats();
  s.workouts++;
  s.minutes += mins;
  s.exercises += exCount;
  save(KEYS.totalStats, s);
}

// ---- Helpers ----
function getTodayIndex() {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1; // Mon=0 ... Sun=6
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

function parseSets(detail) {
  const m = detail.match(/^(\d+)\s*x/);
  return m ? parseInt(m[1]) : 3;
}

const DAYS_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// ============================================
// TAB NAVIGATION
// ============================================
function switchTab(tab) {
  document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + tab).classList.add('active');
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

  // Refresh content on tab switch
  if (tab === 'coach') renderCoach();
  if (tab === 'explore') renderExplore();
  if (tab === 'train') renderTrainSelect();
  if (tab === 'progress') renderProgress();
  if (tab === 'profile') renderProfile();
}

document.getElementById('bottomNav').addEventListener('click', (e) => {
  const tab = e.target.closest('.nav-tab');
  if (tab) switchTab(tab.dataset.tab);
});

// ============================================
// ONBOARDING
// ============================================
function initOnboarding() {
  if (load(KEYS.onboarded, false)) {
    document.getElementById('onboarding').classList.add('done');
    return;
  }

  // Level toggle
  document.getElementById('obLevel').addEventListener('click', (e) => {
    const btn = e.target.closest('.ob-opt');
    if (!btn) return;
    document.querySelectorAll('#obLevel .ob-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });

  // Goal toggle
  document.getElementById('obGoal').addEventListener('click', (e) => {
    const btn = e.target.closest('.ob-opt');
    if (!btn) return;
    document.querySelectorAll('#obGoal .ob-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });

  document.getElementById('obStart').addEventListener('click', () => {
    const name = document.getElementById('obName').value.trim() || 'Tyler';
    const level = document.querySelector('#obLevel .ob-opt.active').dataset.val;
    const goal = document.querySelector('#obGoal .ob-opt.active').dataset.val;
    setProfile({ name, level, goal, restTime: 60 });
    save(KEYS.onboarded, true);
    document.getElementById('onboarding').classList.add('done');
    renderCoach();
    renderProfile();
  });
}

// ============================================
// COACH TAB
// ============================================
function renderCoach() {
  const profile = getProfile();
  const today = getTodayIndex();
  const w = WEEK[today];
  const completed = getCompleted();
  const isDone = completed.includes(today);

  // Greeting
  document.getElementById('greeting').textContent = getGreeting();
  document.getElementById('userName').textContent = profile.name;

  // Streak
  const streak = getStreak();
  document.getElementById('streakNum').textContent = streak.count;

  // Today's workout
  document.getElementById('todayTitle').textContent = w.title;
  document.getElementById('todayDesc').textContent = w.focus.split(' \u2014 ')[0];
  document.getElementById('todayDuration').textContent = w.duration;
  document.getElementById('todayIntensity').textContent = w.intensity;
  document.getElementById('todayExCount').textContent = w.exercises.length + ' exercises';

  // Animation strip for today's exercises
  const strip = document.getElementById('todayAnimStrip');
  strip.innerHTML = w.exercises.map(ex => `
    <div class="today-anim-item">
      <div class="today-anim-box">${getExerciseAnim(ex.name)}</div>
      <div class="today-anim-label">${ex.name}</div>
    </div>
  `).join('');

  // Today progress
  const exDone = getExDone(today);
  const pct = Math.round((exDone.length / w.exercises.length) * 100);
  document.getElementById('todayProgressFill').style.width = pct + '%';

  const btn = document.getElementById('btnStartToday');
  if (isDone) {
    btn.textContent = 'Completed!';
    btn.classList.add('done-btn');
  } else {
    btn.textContent = exDone.length > 0 ? 'Continue Workout' : 'Start Workout';
    btn.classList.remove('done-btn');
  }

  // Week mini
  const miniEl = document.getElementById('weekMini');
  miniEl.innerHTML = WEEK.map((d, i) => {
    const done = completed.includes(i);
    const isToday = i === today;
    return `<div class="week-mini-card ${isToday ? 'today-mini' : ''} ${done ? 'done-mini' : ''}" data-day="${i}">
      <div class="mini-day-label">${DAYS_SHORT[i]}</div>
      <div class="mini-icon">${d.icon}</div>
      ${done ? '<div class="mini-check">\u2713</div>' : ''}
    </div>`;
  }).join('');

  miniEl.querySelectorAll('.week-mini-card').forEach(card => {
    card.addEventListener('click', () => {
      startWorkout(Number(card.dataset.day));
      switchTab('train');
    });
  });

  // Coach tip
  const tipIdx = Math.floor(Math.random() * COACH_TIPS.length);
  document.querySelector('.coach-text').textContent = COACH_TIPS[tipIdx];

  // Quick stats
  const weekWorkouts = completed.length;
  let weekMinutes = 0;
  let weekExercises = 0;
  completed.forEach(i => {
    weekMinutes += parseInt(WEEK[i].duration);
    weekExercises += WEEK[i].exercises.length;
  });
  document.getElementById('statWorkouts').textContent = weekWorkouts;
  document.getElementById('statMinutes').textContent = weekMinutes;
  document.getElementById('statExercises').textContent = weekExercises;
}

// Start today button
document.getElementById('btnStartToday').addEventListener('click', () => {
  const today = getTodayIndex();
  if (!getCompleted().includes(today)) {
    startWorkout(today);
    switchTab('train');
  }
});

// ============================================
// EXPLORE TAB
// ============================================
let currentFilter = 'all';

function renderExplore(filter) {
  if (filter !== undefined) currentFilter = filter;
  const list = document.getElementById('exerciseList');

  // Collect all unique exercises
  const allExercises = [];
  WEEK.forEach(day => {
    day.exercises.forEach(ex => {
      if (!allExercises.find(e => e.name === ex.name)) {
        allExercises.push({ ...ex, day: day.title });
      }
    });
  });

  // Filter
  let filtered = allExercises;
  if (currentFilter !== 'all') {
    const muscles = MUSCLE_FILTER_MAP[currentFilter] || [];
    filtered = allExercises.filter(ex =>
      muscles.some(m => ex.muscle.toLowerCase().includes(m))
    );
  }

  list.innerHTML = filtered.map(ex => `
    <div class="explore-card">
      <div class="ex-anim-wrap">${getExerciseAnim(ex.name)}</div>
      <div class="ex-info">
        <div class="ex-name">${ex.name}</div>
        <div class="ex-sub">${ex.detail} &middot; ${ex.day}</div>
      </div>
      <span class="ex-badge">${ex.muscle}</span>
      <button class="btn-yt" onclick="window.open('https://www.youtube.com/results?search_query='+encodeURIComponent('${ex.name.replace(/'/g, "\\'")} proper form tutorial'),'_blank')" title="Watch tutorial">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21.582 6.186a2.506 2.506 0 0 0-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418A2.506 2.506 0 0 0 2.418 6.186C2 7.746 2 12 2 12s0 4.254.418 5.814a2.506 2.506 0 0 0 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418a2.506 2.506 0 0 0 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM10 15.464V8.536L16 12l-6 3.464z"/></svg>
      </button>
    </div>
  `).join('') || '<p class="empty-state">No exercises found for this filter.</p>';
}

document.getElementById('filterPills').addEventListener('click', (e) => {
  const pill = e.target.closest('.pill');
  if (!pill) return;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  renderExplore(pill.dataset.filter);
});

// ============================================
// TRAIN TAB
// ============================================
let activeWorkout = null;
let workoutTimer = null;
let workoutSeconds = 0;
let restInterval = null;
let currentExIndex = 0;
let completedSets = {};

function renderTrainSelect() {
  document.getElementById('trainSelect').classList.remove('hidden');
  document.getElementById('trainActive').classList.add('hidden');

  const completed = getCompleted();
  const today = getTodayIndex();

  document.getElementById('trainDayList').innerHTML = WEEK.map((w, i) => {
    const done = completed.includes(i);
    const isToday = i === today;
    return `<div class="train-day-card ${isToday ? 'today-train' : ''} ${done ? 'done-train' : ''}" data-day="${i}">
      <div class="tdc-icon">${w.icon}</div>
      <div class="tdc-info">
        <h4>${w.day} \u2014 ${w.title}</h4>
        <p>${w.exercises.length} exercises \u00B7 ${w.intensity}</p>
      </div>
      <div class="tdc-dur">${w.duration}</div>
      ${isToday && !done ? '<span class="tdc-badge">TODAY</span>' : ''}
      ${done ? '<span class="tdc-done-badge">DONE</span>' : ''}
    </div>`;
  }).join('');

  document.querySelectorAll('.train-day-card').forEach(card => {
    card.addEventListener('click', () => {
      startWorkout(Number(card.dataset.day));
    });
  });
}

function startWorkout(dayIndex) {
  activeWorkout = dayIndex;
  currentExIndex = 0;
  completedSets = {};
  workoutSeconds = 0;

  document.getElementById('trainSelect').classList.add('hidden');
  document.getElementById('trainActive').classList.remove('hidden');
  document.getElementById('finishOverlay').classList.add('hidden');
  document.getElementById('restOverlay').classList.add('hidden');

  // Start timer
  clearInterval(workoutTimer);
  workoutTimer = setInterval(() => {
    workoutSeconds++;
    const m = Math.floor(workoutSeconds / 60).toString().padStart(2, '0');
    const s = (workoutSeconds % 60).toString().padStart(2, '0');
    document.getElementById('trainTimer').textContent = m + ':' + s;
  }, 1000);

  renderCurrentExercise();
}

function renderCurrentExercise() {
  const w = WEEK[activeWorkout];
  const ex = w.exercises[currentExIndex];
  const sets = parseSets(ex.detail);

  document.getElementById('trainDayTitle').textContent = w.title;
  document.getElementById('trainProgressText').textContent =
    `Exercise ${currentExIndex + 1} of ${w.exercises.length}`;
  document.getElementById('trainExName').textContent = ex.name;
  document.getElementById('trainExDetail').textContent = ex.detail;
  document.getElementById('trainExMuscle').textContent = ex.muscle;
  document.getElementById('trainExAnim').innerHTML = getExerciseAnim(ex.name);

  // Set tracker
  const setsKey = `${activeWorkout}-${currentExIndex}`;
  if (!completedSets[setsKey]) completedSets[setsKey] = [];

  const tracker = document.getElementById('setTracker');
  tracker.innerHTML = Array.from({ length: sets }, (_, i) => {
    const done = completedSets[setsKey].includes(i);
    return `<div class="set-dot ${done ? 'set-done' : ''}" data-set="${i}">S${i + 1}</div>`;
  }).join('');

  tracker.querySelectorAll('.set-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const setIdx = Number(dot.dataset.set);
      const key = `${activeWorkout}-${currentExIndex}`;
      if (!completedSets[key]) completedSets[key] = [];
      const idx = completedSets[key].indexOf(setIdx);
      if (idx === -1) {
        completedSets[key].push(setIdx);
        dot.classList.add('set-done');
      } else {
        completedSets[key].splice(idx, 1);
        dot.classList.remove('set-done');
      }
    });
  });

  // Update button text
  const btn = document.getElementById('btnNextEx');
  btn.textContent = currentExIndex < w.exercises.length - 1 ? 'Next Exercise' : 'Finish Workout';
}

function showRest(callback) {
  const profile = getProfile();
  let restTime = profile.restTime || 60;

  document.getElementById('restOverlay').classList.remove('hidden');
  document.getElementById('restTimerDisplay').textContent = restTime;

  const nextEx = WEEK[activeWorkout].exercises[currentExIndex];
  document.querySelector('.rest-sub').textContent = nextEx
    ? `Next: ${nextEx.name}` : 'Almost done!';

  clearInterval(restInterval);
  restInterval = setInterval(() => {
    restTime--;
    document.getElementById('restTimerDisplay').textContent = restTime;
    if (restTime <= 0) {
      clearInterval(restInterval);
      document.getElementById('restOverlay').classList.add('hidden');
      callback();
    }
  }, 1000);
}

document.getElementById('btnSkipRest').addEventListener('click', () => {
  clearInterval(restInterval);
  document.getElementById('restOverlay').classList.add('hidden');
  renderCurrentExercise();
});

document.getElementById('btnNextEx').addEventListener('click', () => {
  const w = WEEK[activeWorkout];

  // Mark exercise done
  const exDone = getExDone(activeWorkout);
  if (!exDone.includes(currentExIndex)) {
    exDone.push(currentExIndex);
    setExDone(activeWorkout, exDone);
  }

  if (currentExIndex < w.exercises.length - 1) {
    currentExIndex++;
    showRest(() => renderCurrentExercise());
  } else {
    finishWorkout();
  }
});

document.getElementById('btnPrevEx').addEventListener('click', () => {
  if (currentExIndex > 0) {
    currentExIndex--;
    renderCurrentExercise();
  }
});

function finishWorkout() {
  clearInterval(workoutTimer);
  clearInterval(restInterval);
  document.getElementById('restOverlay').classList.add('hidden');

  const w = WEEK[activeWorkout];
  const mins = Math.round(workoutSeconds / 60);
  const totalSets = Object.values(completedSets).reduce((sum, arr) => sum + arr.length, 0);

  // Mark day complete
  const completed = getCompleted();
  if (!completed.includes(activeWorkout)) {
    completed.push(activeWorkout);
    setCompleted(completed);
  }

  // Mark all exercises done
  const allEx = w.exercises.map((_, i) => i);
  setExDone(activeWorkout, allEx);

  // Check streak
  if (completed.length === 7) {
    const s = getStreak();
    s.count++;
    if (s.count > s.best) s.best = s.count;
    s.lastReset = new Date().toISOString();
    setStreak(s);
  }

  // Add to history
  addHistory({
    day: w.day,
    title: w.title,
    icon: w.icon,
    date: new Date().toLocaleDateString(),
    minutes: mins,
    exercises: w.exercises.length,
  });

  // Update total stats
  addTotalStats(mins, w.exercises.length);

  // Show finish overlay
  document.getElementById('finishTime').textContent = mins;
  document.getElementById('finishEx').textContent = w.exercises.length;
  document.getElementById('finishSets').textContent = totalSets;
  document.getElementById('finishOverlay').classList.remove('hidden');
}

document.getElementById('btnFinishDone').addEventListener('click', () => {
  document.getElementById('finishOverlay').classList.add('hidden');
  activeWorkout = null;
  renderTrainSelect();
  switchTab('coach');
});

document.getElementById('trainBack').addEventListener('click', () => {
  if (activeWorkout !== null) {
    clearInterval(workoutTimer);
    clearInterval(restInterval);
    activeWorkout = null;
  }
  renderTrainSelect();
});

// ============================================
// PROGRESS TAB
// ============================================
function renderProgress() {
  const completed = getCompleted();
  const count = completed.length;
  const today = getTodayIndex();

  // Ring
  const circ = 2 * Math.PI * 78;
  const offset = circ - (count / 7) * circ;
  document.getElementById('progressRingLg').style.strokeDashoffset = offset;
  document.getElementById('ringNum').textContent = count;

  // Week dots
  document.getElementById('weekDots').innerHTML = WEEK.map((w, i) => {
    const done = completed.includes(i);
    const isToday = i === today;
    return `<div class="week-dot">
      <div class="week-dot-circle ${done ? 'dot-done' : ''} ${isToday && !done ? 'dot-today' : ''}">
        ${done ? '\u2713' : DAYS_SHORT[i][0]}
      </div>
      <span class="week-dot-label">${DAYS_SHORT[i]}</span>
    </div>`;
  }).join('');

  // History
  const history = getHistory();
  const histList = document.getElementById('historyList');
  if (history.length === 0) {
    histList.innerHTML = '<p class="empty-state">Complete workouts to see your history here.</p>';
  } else {
    histList.innerHTML = history.slice(0, 10).map(h => `
      <div class="history-item">
        <span class="hi-icon">${h.icon}</span>
        <div class="hi-info">
          <h4>${h.title}</h4>
          <p>${h.date} &middot; ${h.minutes} min &middot; ${h.exercises} exercises</p>
        </div>
        <span class="hi-badge">Done</span>
      </div>
    `).join('');
  }

  // Total stats
  const total = getTotalStats();
  const streak = getStreak();
  document.getElementById('prTotalWorkouts').textContent = total.workouts;
  document.getElementById('prTotalMinutes').textContent = total.minutes;
  document.getElementById('prBestStreak').textContent = streak.best;
}

// ============================================
// PROFILE TAB
// ============================================
function renderProfile() {
  const p = getProfile();
  document.getElementById('profileName').textContent = p.name;
  document.getElementById('profileLevel').textContent =
    p.level.charAt(0).toUpperCase() + p.level.slice(1);

  const goalLabels = { muscle: 'Build Muscle', strength: 'Get Strong', endurance: 'Endurance', 'lose-fat': 'Lose Fat' };
  document.getElementById('profileGoal').textContent = goalLabels[p.goal] || p.goal;

  document.getElementById('settingName').value = p.name;
  document.getElementById('settingLevel').value = p.level;
  document.getElementById('settingGoal').value = p.goal;
  document.getElementById('settingRest').value = p.restTime || 60;
}

document.getElementById('btnSaveSettings').addEventListener('click', () => {
  const p = {
    name: document.getElementById('settingName').value.trim() || 'Tyler',
    level: document.getElementById('settingLevel').value,
    goal: document.getElementById('settingGoal').value,
    restTime: parseInt(document.getElementById('settingRest').value) || 60,
  };
  setProfile(p);
  renderProfile();
  renderCoach();
  alert('Settings saved!');
});

document.getElementById('btnResetAll').addEventListener('click', () => {
  if (confirm('Reset ALL progress? This cannot be undone.')) {
    Object.values(KEYS).forEach(k => localStorage.removeItem(k));
    save(KEYS.onboarded, true);
    setProfile(getProfile());
    renderCoach();
    renderProgress();
    alert('Progress reset.');
  }
});

// ============================================
// STREAK MANAGEMENT
// ============================================
(function checkStreakReset() {
  const streak = getStreak();
  if (streak.lastReset) {
    const last = new Date(streak.lastReset);
    const now = new Date();
    const diff = (now - last) / (1000 * 60 * 60 * 24);
    if (diff > 14) {
      streak.count = 0;
      streak.lastReset = null;
      setStreak(streak);
    }
  }

  // Reset weekly completion on Monday
  const now = new Date();
  const lastWeekReset = load('gt_last_week_reset', null);
  const mondayOfThisWeek = new Date(now);
  mondayOfThisWeek.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  mondayOfThisWeek.setHours(0, 0, 0, 0);

  if (!lastWeekReset || new Date(lastWeekReset) < mondayOfThisWeek) {
    localStorage.removeItem(KEYS.completed);
    localStorage.removeItem(KEYS.exercises);
    save('gt_last_week_reset', mondayOfThisWeek.toISOString());
  }
})();

// ============================================
// PWA
// ============================================
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}

// ============================================
// INIT
// ============================================
initOnboarding();
renderCoach();
