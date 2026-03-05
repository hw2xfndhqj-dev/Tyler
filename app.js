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
  // High-quality SVG animations with muscle highlights, joints, and equipment
  const C = { body: '#e0dfe8', joint: '#b0afc0', muscle: '#7c5cfc', muscle2: '#a78bfa', equip: '#60a5fa', equipDark: '#3b82f6', bench: '#374151', glow: 'rgba(124,92,252,0.25)', red: '#f87171', green: '#34d399', pink: '#f472b6', yellow: '#fbbf24', cyan: '#22d3ee' };
  const joint = (cx, cy, r=2.5) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.joint}"/>`;
  const head = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="7" fill="${C.body}" opacity="0.9"/><circle cx="${cx-2}" cy="${cy-1}" r="1" fill="${C.joint}"/><circle cx="${cx+2}" cy="${cy-1}" r="1" fill="${C.joint}"/>`;
  const svgs = {
    press: `<svg class="ex-anim" viewBox="0 0 100 100">
      <defs><linearGradient id="gP" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${C.muscle}"/><stop offset="100%" stop-color="${C.muscle2}"/></linearGradient></defs>
      <!-- bench --><rect x="20" y="58" width="60" height="5" rx="2" fill="${C.bench}"/><rect x="35" y="63" width="6" height="14" rx="2" fill="${C.bench}"/><rect x="59" y="63" width="6" height="14" rx="2" fill="${C.bench}"/>
      <!-- body -->${head(50, 48)}
      <rect x="42" y="52" width="16" height="10" rx="4" fill="${C.body}" opacity="0.7"/>
      <!-- chest glow --><ellipse cx="50" cy="54" rx="9" ry="5" fill="${C.glow}" class="anim-breathe"/>
      <!-- barbell --><g class="anim-press"><line x1="14" y1="38" x2="86" y2="38" stroke="${C.equip}" stroke-width="3" stroke-linecap="round"/><circle cx="14" cy="38" r="5" fill="${C.equipDark}" opacity="0.8"/><circle cx="86" cy="38" r="5" fill="${C.equipDark}" opacity="0.8"/><circle cx="10" cy="38" r="3.5" fill="${C.equipDark}"/><circle cx="90" cy="38" r="3.5" fill="${C.equipDark}"/></g>
      <!-- arms --><line x1="44" y1="54" x2="30" y2="44" stroke="${C.body}" stroke-width="3.5" stroke-linecap="round" class="anim-press"/>${joint(30, 44)}<line x1="30" y1="44" x2="24" y2="38" stroke="${C.body}" stroke-width="3" stroke-linecap="round" class="anim-press"/>
      <line x1="56" y1="54" x2="70" y2="44" stroke="${C.body}" stroke-width="3.5" stroke-linecap="round" class="anim-press"/>${joint(70, 44)}<line x1="70" y1="44" x2="76" y2="38" stroke="${C.body}" stroke-width="3" stroke-linecap="round" class="anim-press"/>
      <!-- legs --><line x1="46" y1="62" x2="36" y2="72" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/>${joint(36,72)}<line x1="36" y1="72" x2="32" y2="77" stroke="${C.body}" stroke-width="2.5"/>
      <line x1="54" y1="62" x2="64" y2="72" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/>${joint(64,72)}<line x1="64" y1="72" x2="68" y2="77" stroke="${C.body}" stroke-width="2.5"/>
    </svg>`,
    fly: `<svg class="ex-anim" viewBox="0 0 100 100">
      <rect x="22" y="58" width="56" height="5" rx="2" fill="${C.bench}"/>
      ${head(50, 48)}
      <rect x="43" y="52" width="14" height="10" rx="4" fill="${C.body}" opacity="0.7"/>
      <ellipse cx="50" cy="55" rx="10" ry="5" fill="${C.glow}" class="anim-breathe"/>
      <!-- arms sweep --><g class="anim-fly">
        <line x1="44" y1="54" x2="22" y2="46" stroke="${C.body}" stroke-width="3.5" stroke-linecap="round"/>${joint(22,46)}<line x1="22" y1="46" x2="14" y2="52" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="54" r="3" fill="${C.muscle}" opacity="0.6"/>
      </g>
      <g class="anim-fly"><line x1="56" y1="54" x2="78" y2="46" stroke="${C.body}" stroke-width="3.5" stroke-linecap="round"/>${joint(78,46)}<line x1="78" y1="46" x2="86" y2="52" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/><circle cx="88" cy="54" r="3" fill="${C.muscle}" opacity="0.6"/></g>
      <line x1="46" y1="62" x2="38" y2="74" stroke="${C.body}" stroke-width="3"/><line x1="54" y1="62" x2="62" y2="74" stroke="${C.body}" stroke-width="3"/>
    </svg>`,
    dip: `<svg class="ex-anim" viewBox="0 0 100 100">
      <!-- parallel bars --><rect x="16" y="32" width="68" height="4" rx="2" fill="${C.bench}"/><rect x="16" y="36" width="5" height="40" rx="2" fill="${C.bench}"/><rect x="79" y="36" width="5" height="40" rx="2" fill="${C.bench}"/>
      <g class="anim-dip">${head(50, 24)}
        <rect x="43" y="30" width="14" height="16" rx="5" fill="${C.body}" opacity="0.7"/>
        <!-- tricep glow --><ellipse cx="38" cy="36" rx="4" ry="6" fill="${C.glow}"/><ellipse cx="62" cy="36" rx="4" ry="6" fill="${C.glow}"/>
        <line x1="44" y1="34" x2="28" y2="34" stroke="${C.body}" stroke-width="3.5" stroke-linecap="round"/>${joint(28,34)}<line x1="28" y1="34" x2="22" y2="32" stroke="${C.body}" stroke-width="3"/>
        <line x1="56" y1="34" x2="72" y2="34" stroke="${C.body}" stroke-width="3.5" stroke-linecap="round"/>${joint(72,34)}<line x1="72" y1="34" x2="78" y2="32" stroke="${C.body}" stroke-width="3"/>
        <line x1="46" y1="46" x2="40" y2="62" stroke="${C.body}" stroke-width="3"/>${joint(40,62)}<line x1="40" y1="62" x2="38" y2="72" stroke="${C.body}" stroke-width="2.5"/>
        <line x1="54" y1="46" x2="60" y2="62" stroke="${C.body}" stroke-width="3"/>${joint(60,62)}<line x1="60" y1="62" x2="62" y2="72" stroke="${C.body}" stroke-width="2.5"/>
      </g>
    </svg>`,
    pushdown: `<svg class="ex-anim" viewBox="0 0 100 100">
      <!-- cable machine --><rect x="46" y="6" width="8" height="8" rx="2" fill="${C.bench}"/><line x1="50" y1="14" x2="50" y2="40" stroke="${C.bench}" stroke-width="1.5" stroke-dasharray="3,2"/>
      ${head(50, 24)}
      <rect x="43" y="30" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
      <ellipse cx="42" cy="46" rx="4" ry="5" fill="${C.glow}"/><ellipse cx="58" cy="46" rx="4" ry="5" fill="${C.glow}"/>
      <g class="anim-pushdown"><line x1="44" y1="36" x2="36" y2="42" stroke="${C.body}" stroke-width="3.5"/>${joint(36,42)}<line x1="36" y1="42" x2="38" y2="56" stroke="${C.body}" stroke-width="3"/><rect x="34" y="54" width="8" height="4" rx="2" fill="${C.equip}"/>
      <line x1="56" y1="36" x2="64" y2="42" stroke="${C.body}" stroke-width="3.5"/>${joint(64,42)}<line x1="64" y1="42" x2="62" y2="56" stroke="${C.body}" stroke-width="3"/><rect x="58" y="54" width="8" height="4" rx="2" fill="${C.equip}"/></g>
      <line x1="46" y1="48" x2="38" y2="68" stroke="${C.body}" stroke-width="3"/><line x1="54" y1="48" x2="62" y2="68" stroke="${C.body}" stroke-width="3"/>
      ${joint(38,68)}${joint(62,68)}<line x1="38" y1="68" x2="36" y2="80" stroke="${C.body}" stroke-width="2.5"/><line x1="62" y1="68" x2="64" y2="80" stroke="${C.body}" stroke-width="2.5"/>
    </svg>`,
    overhead: `<svg class="ex-anim" viewBox="0 0 100 100">
      ${head(50, 22)}
      <rect x="43" y="28" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
      <ellipse cx="42" cy="34" rx="3" ry="5" fill="${C.glow}"/><ellipse cx="58" cy="34" rx="3" ry="5" fill="${C.glow}"/>
      <g class="anim-overhead"><line x1="44" y1="32" x2="40" y2="22" stroke="${C.body}" stroke-width="3.5"/>${joint(40,22)}<line x1="40" y1="22" x2="44" y2="12" stroke="${C.body}" stroke-width="3"/>
      <line x1="56" y1="32" x2="60" y2="22" stroke="${C.body}" stroke-width="3.5"/>${joint(60,22)}<line x1="60" y1="22" x2="56" y2="12" stroke="${C.body}" stroke-width="3"/>
      <ellipse cx="50" cy="10" rx="8" ry="5" fill="${C.equipDark}" opacity="0.7"/></g>
      <line x1="46" y1="46" x2="40" y2="66" stroke="${C.body}" stroke-width="3"/><line x1="54" y1="46" x2="60" y2="66" stroke="${C.body}" stroke-width="3"/>
      ${joint(40,66)}${joint(60,66)}<line x1="40" y1="66" x2="38" y2="80" stroke="${C.body}" stroke-width="2.5"/><line x1="60" y1="66" x2="62" y2="80" stroke="${C.body}" stroke-width="2.5"/>
    </svg>`,
    pushup: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-pushup">${head(22, 40)}
        <line x1="28" y1="44" x2="76" y2="50" stroke="${C.body}" stroke-width="4" stroke-linecap="round"/>
        <ellipse cx="40" cy="46" rx="8" ry="3" fill="${C.glow}"/>
        <line x1="26" y1="48" x2="20" y2="58" stroke="${C.body}" stroke-width="3.5"/>${joint(20,58)}<line x1="20" y1="58" x2="18" y2="68" stroke="${C.body}" stroke-width="3"/>
        <line x1="28" y1="48" x2="24" y2="58" stroke="${C.body}" stroke-width="3.5"/>${joint(24,58)}<line x1="24" y1="58" x2="22" y2="68" stroke="${C.body}" stroke-width="3"/>
        <line x1="76" y1="50" x2="82" y2="64" stroke="${C.body}" stroke-width="3"/><line x1="76" y1="50" x2="70" y2="64" stroke="${C.body}" stroke-width="3"/>
      </g>
      <line x1="16" y1="68" x2="84" y2="68" stroke="${C.bench}" stroke-width="2" opacity="0.3"/>
    </svg>`,
    deadlift: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-deadlift">${head(50, 18)}
        <rect x="43" y="24" width="14" height="20" rx="5" fill="${C.body}" opacity="0.7"/>
        <ellipse cx="50" cy="38" rx="8" ry="6" fill="rgba(248,113,113,0.15)"/>
        <!-- arms --><line x1="44" y1="28" x2="34" y2="42" stroke="${C.body}" stroke-width="3.5"/>${joint(34,42)}<line x1="34" y1="42" x2="32" y2="54" stroke="${C.body}" stroke-width="3"/>
        <line x1="56" y1="28" x2="66" y2="42" stroke="${C.body}" stroke-width="3.5"/>${joint(66,42)}<line x1="66" y1="42" x2="68" y2="54" stroke="${C.body}" stroke-width="3"/>
        <!-- legs --><line x1="46" y1="44" x2="38" y2="62" stroke="${C.body}" stroke-width="3.5"/>${joint(38,62)}<line x1="38" y1="62" x2="36" y2="76" stroke="${C.body}" stroke-width="3"/>
        <line x1="54" y1="44" x2="62" y2="62" stroke="${C.body}" stroke-width="3.5"/>${joint(62,62)}<line x1="62" y1="62" x2="64" y2="76" stroke="${C.body}" stroke-width="3"/>
      </g>
      <!-- barbell --><line x1="10" y1="78" x2="90" y2="78" stroke="${C.equip}" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="10" cy="78" r="6" fill="${C.equipDark}" opacity="0.8"/><circle cx="90" cy="78" r="6" fill="${C.equipDark}" opacity="0.8"/>
      <circle cx="6" cy="78" r="4.5" fill="${C.equipDark}" opacity="0.6"/><circle cx="94" cy="78" r="4.5" fill="${C.equipDark}" opacity="0.6"/>
    </svg>`,
    pullup: `<svg class="ex-anim" viewBox="0 0 100 100">
      <!-- bar --><line x1="10" y1="10" x2="90" y2="10" stroke="${C.equip}" stroke-width="4" stroke-linecap="round"/>
      <g class="anim-pullup">${head(50, 22)}
        <rect x="43" y="28" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
        <ellipse cx="50" cy="32" rx="10" ry="5" fill="rgba(96,165,250,0.15)"/>
        <line x1="44" y1="30" x2="36" y2="18" stroke="${C.body}" stroke-width="3.5"/>${joint(36,18)}<line x1="36" y1="18" x2="34" y2="12" stroke="${C.body}" stroke-width="3"/>
        <line x1="56" y1="30" x2="64" y2="18" stroke="${C.body}" stroke-width="3.5"/>${joint(64,18)}<line x1="64" y1="18" x2="66" y2="12" stroke="${C.body}" stroke-width="3"/>
        <line x1="46" y1="46" x2="42" y2="64" stroke="${C.body}" stroke-width="3"/>${joint(42,64)}<line x1="42" y1="64" x2="40" y2="78" stroke="${C.body}" stroke-width="2.5"/>
        <line x1="54" y1="46" x2="58" y2="64" stroke="${C.body}" stroke-width="3"/>${joint(58,64)}<line x1="58" y1="64" x2="60" y2="78" stroke="${C.body}" stroke-width="2.5"/>
      </g>
    </svg>`,
    row: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-row">${head(34, 22)}
        <line x1="38" y1="28" x2="56" y2="50" stroke="${C.body}" stroke-width="3.5" stroke-linecap="round"/>
        <ellipse cx="48" cy="38" rx="6" ry="8" fill="rgba(96,165,250,0.15)"/>
        <line x1="56" y1="50" x2="70" y2="38" stroke="${C.body}" stroke-width="3.5"/>${joint(70,38)}<line x1="70" y1="38" x2="72" y2="28" stroke="${C.body}" stroke-width="3"/>
        <line x1="40" y1="32" x2="30" y2="38" stroke="${C.body}" stroke-width="3"/>${joint(30,38)}<line x1="30" y1="38" x2="22" y2="32" stroke="${C.body}" stroke-width="3"/>
        <line x1="56" y1="50" x2="46" y2="70" stroke="${C.body}" stroke-width="3"/>${joint(46,70)}<line x1="46" y1="70" x2="38" y2="80" stroke="${C.body}" stroke-width="2.5"/>
        <line x1="56" y1="50" x2="66" y2="70" stroke="${C.body}" stroke-width="3"/>${joint(66,70)}<line x1="66" y1="70" x2="72" y2="80" stroke="${C.body}" stroke-width="2.5"/>
      </g>
      <line x1="10" y1="80" x2="90" y2="80" stroke="${C.equip}" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="10" cy="80" r="5.5" fill="${C.equipDark}" opacity="0.8"/><circle cx="90" cy="80" r="5.5" fill="${C.equipDark}" opacity="0.8"/>
    </svg>`,
    facepull: `<svg class="ex-anim" viewBox="0 0 100 100">
      <rect x="46" y="8" width="8" height="8" rx="2" fill="${C.bench}"/><line x1="50" y1="16" x2="50" y2="36" stroke="${C.bench}" stroke-width="1.5" stroke-dasharray="3,2"/>
      <g class="anim-facepull">${head(50, 24)}
        <rect x="43" y="30" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
        <ellipse cx="50" cy="32" rx="8" ry="4" fill="rgba(96,165,250,0.15)"/>
        <line x1="44" y1="34" x2="34" y2="28" stroke="${C.body}" stroke-width="3.5"/>${joint(34,28)}<line x1="34" y1="28" x2="38" y2="22" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/>
        <line x1="56" y1="34" x2="66" y2="28" stroke="${C.body}" stroke-width="3.5"/>${joint(66,28)}<line x1="66" y1="28" x2="62" y2="22" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/>
        <line x1="46" y1="48" x2="40" y2="68" stroke="${C.body}" stroke-width="3"/><line x1="54" y1="48" x2="60" y2="68" stroke="${C.body}" stroke-width="3"/>
        ${joint(40,68)}${joint(60,68)}<line x1="40" y1="68" x2="38" y2="80" stroke="${C.body}" stroke-width="2.5"/><line x1="60" y1="68" x2="62" y2="80" stroke="${C.body}" stroke-width="2.5"/>
      </g>
    </svg>`,
    curl: `<svg class="ex-anim" viewBox="0 0 100 100">
      ${head(50, 16)}
      <rect x="43" y="22" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
      <ellipse cx="40" cy="34" rx="4" ry="6" fill="${C.glow}"/><ellipse cx="60" cy="34" rx="4" ry="6" fill="${C.glow}"/>
      <line x1="44" y1="28" x2="36" y2="38" stroke="${C.body}" stroke-width="3.5"/>${joint(36,38)}
      <g class="anim-curl"><line x1="36" y1="38" x2="34" y2="26" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/><ellipse cx="33" cy="24" rx="5" ry="4" fill="${C.equipDark}" opacity="0.7"/></g>
      <line x1="56" y1="28" x2="64" y2="38" stroke="${C.body}" stroke-width="3.5"/>${joint(64,38)}
      <g class="anim-curl"><line x1="64" y1="38" x2="66" y2="26" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/><ellipse cx="67" cy="24" rx="5" ry="4" fill="${C.equipDark}" opacity="0.7"/></g>
      <line x1="46" y1="40" x2="40" y2="62" stroke="${C.body}" stroke-width="3"/><line x1="54" y1="40" x2="60" y2="62" stroke="${C.body}" stroke-width="3"/>
      ${joint(40,62)}${joint(60,62)}<line x1="40" y1="62" x2="38" y2="78" stroke="${C.body}" stroke-width="2.5"/><line x1="60" y1="62" x2="62" y2="78" stroke="${C.body}" stroke-width="2.5"/>
    </svg>`,
    squat: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-squat">${head(50, 14)}
        <rect x="43" y="20" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
        <ellipse cx="50" cy="44" rx="10" ry="6" fill="rgba(52,211,153,0.15)"/>
        <line x1="44" y1="24" x2="32" y2="18" stroke="${C.body}" stroke-width="3.5"/>${joint(32,18)}<line x1="32" y1="18" x2="22" y2="16" stroke="${C.body}" stroke-width="3"/>
        <line x1="56" y1="24" x2="68" y2="18" stroke="${C.body}" stroke-width="3.5"/>${joint(68,18)}<line x1="68" y1="18" x2="78" y2="16" stroke="${C.body}" stroke-width="3"/>
        <line x1="14" y1="14" x2="86" y2="14" stroke="${C.equip}" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="14" cy="14" r="5.5" fill="${C.equipDark}" opacity="0.8"/><circle cx="86" cy="14" r="5.5" fill="${C.equipDark}" opacity="0.8"/>
        <circle cx="10" cy="14" r="4" fill="${C.equipDark}" opacity="0.6"/><circle cx="90" cy="14" r="4" fill="${C.equipDark}" opacity="0.6"/>
        <line x1="46" y1="38" x2="36" y2="58" stroke="${C.body}" stroke-width="3.5"/>${joint(36,58)}<line x1="36" y1="58" x2="34" y2="76" stroke="${C.body}" stroke-width="3"/><rect x="28" y="74" width="12" height="4" rx="2" fill="${C.joint}"/>
        <line x1="54" y1="38" x2="64" y2="58" stroke="${C.body}" stroke-width="3.5"/>${joint(64,58)}<line x1="64" y1="58" x2="66" y2="76" stroke="${C.body}" stroke-width="3"/><rect x="60" y="74" width="12" height="4" rx="2" fill="${C.joint}"/>
      </g>
    </svg>`,
    legpress: `<svg class="ex-anim" viewBox="0 0 100 100">
      <rect x="10" y="40" width="30" height="5" rx="2" fill="${C.bench}"/>
      ${head(26, 34)}
      <line x1="30" y1="40" x2="42" y2="54" stroke="${C.body}" stroke-width="3.5" stroke-linecap="round"/>
      <ellipse cx="54" cy="52" rx="8" ry="5" fill="rgba(52,211,153,0.15)"/>
      <g class="anim-legpress"><line x1="42" y1="54" x2="64" y2="62" stroke="${C.body}" stroke-width="3.5"/>${joint(64,62)}<line x1="64" y1="62" x2="78" y2="56" stroke="${C.body}" stroke-width="3"/>
      <line x1="42" y1="54" x2="64" y2="52" stroke="${C.body}" stroke-width="3.5"/>${joint(64,52)}<line x1="64" y1="52" x2="78" y2="48" stroke="${C.body}" stroke-width="3"/></g>
      <rect x="80" y="38" width="8" height="30" rx="3" fill="${C.equipDark}" opacity="0.6"/>
    </svg>`,
    lunge: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-lunge">${head(50, 12)}
        <rect x="43" y="18" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
        <ellipse cx="50" cy="42" rx="8" ry="5" fill="rgba(52,211,153,0.15)"/>
        <line x1="44" y1="24" x2="36" y2="20" stroke="${C.body}" stroke-width="3"/><line x1="56" y1="24" x2="64" y2="20" stroke="${C.body}" stroke-width="3"/>
        <line x1="46" y1="36" x2="34" y2="56" stroke="${C.body}" stroke-width="3.5"/>${joint(34,56)}<line x1="34" y1="56" x2="28" y2="74" stroke="${C.body}" stroke-width="3"/><rect x="22" y="72" width="12" height="4" rx="2" fill="${C.joint}"/>
        <line x1="54" y1="36" x2="66" y2="56" stroke="${C.body}" stroke-width="3.5"/>${joint(66,56)}<line x1="66" y1="56" x2="72" y2="74" stroke="${C.body}" stroke-width="3"/><rect x="66" y="72" width="12" height="4" rx="2" fill="${C.joint}"/>
      </g>
    </svg>`,
    legcurl: `<svg class="ex-anim" viewBox="0 0 100 100">
      <rect x="12" y="34" width="76" height="6" rx="3" fill="${C.bench}"/><rect x="12" y="40" width="8" height="20" rx="3" fill="${C.bench}"/><rect x="80" y="40" width="8" height="20" rx="3" fill="${C.bench}"/>
      ${head(24, 28)}
      <line x1="28" y1="34" x2="72" y2="34" stroke="${C.body}" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="62" cy="30" rx="6" ry="4" fill="rgba(52,211,153,0.15)"/>
      <g class="anim-legcurl"><line x1="72" y1="34" x2="64" y2="18" stroke="${C.body}" stroke-width="3.5" stroke-linecap="round"/>${joint(64,18)}<line x1="64" y1="18" x2="58" y2="14" stroke="${C.body}" stroke-width="3"/><circle cx="56" cy="14" r="3.5" fill="${C.equipDark}" opacity="0.6"/></g>
    </svg>`,
    hipthrust: `<svg class="ex-anim" viewBox="0 0 100 100">
      <rect x="8" y="48" width="30" height="6" rx="3" fill="${C.bench}"/>
      <g class="anim-hipthrust">${head(22, 40)}
        <line x1="28" y1="48" x2="56" y2="46" stroke="${C.body}" stroke-width="4" stroke-linecap="round"/>
        <ellipse cx="50" cy="42" rx="8" ry="5" fill="rgba(52,211,153,0.2)"/>
        <rect x="42" y="38" width="16" height="6" rx="3" fill="${C.equip}" opacity="0.4"/>
        <line x1="56" y1="46" x2="70" y2="68" stroke="${C.body}" stroke-width="3.5"/>${joint(70,68)}<line x1="70" y1="68" x2="72" y2="80" stroke="${C.body}" stroke-width="3"/>
        <line x1="56" y1="46" x2="46" y2="68" stroke="${C.body}" stroke-width="3.5"/>${joint(46,68)}<line x1="46" y1="68" x2="44" y2="80" stroke="${C.body}" stroke-width="3"/>
      </g>
    </svg>`,
    calfraise: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-calfraise">${head(50, 14)}
        <rect x="43" y="20" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
        <line x1="44" y1="26" x2="38" y2="22" stroke="${C.body}" stroke-width="3"/><line x1="56" y1="26" x2="62" y2="22" stroke="${C.body}" stroke-width="3"/>
        <line x1="46" y1="38" x2="44" y2="56" stroke="${C.body}" stroke-width="3.5"/><line x1="54" y1="38" x2="56" y2="56" stroke="${C.body}" stroke-width="3.5"/>
        ${joint(44,56)}${joint(56,56)}
        <line x1="44" y1="56" x2="42" y2="72" stroke="${C.body}" stroke-width="3"/><line x1="56" y1="56" x2="58" y2="72" stroke="${C.body}" stroke-width="3"/>
        <ellipse cx="50" cy="68" rx="4" ry="6" fill="rgba(52,211,153,0.2)"/>
      </g>
      <rect x="34" y="74" width="32" height="5" rx="2" fill="${C.equip}" opacity="0.4"/>
    </svg>`,
    ohp: `<svg class="ex-anim" viewBox="0 0 100 100">
      ${head(50, 26)}
      <rect x="43" y="32" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
      <ellipse cx="50" cy="36" rx="8" ry="5" fill="rgba(251,146,60,0.15)"/>
      <g class="anim-ohp"><line x1="44" y1="36" x2="34" y2="22" stroke="${C.body}" stroke-width="3.5"/>${joint(34,22)}<line x1="34" y1="22" x2="28" y2="14" stroke="${C.body}" stroke-width="3"/>
      <line x1="56" y1="36" x2="66" y2="22" stroke="${C.body}" stroke-width="3.5"/>${joint(66,22)}<line x1="66" y1="22" x2="72" y2="14" stroke="${C.body}" stroke-width="3"/>
      <line x1="14" y1="12" x2="86" y2="12" stroke="${C.equip}" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="14" cy="12" r="5.5" fill="${C.equipDark}" opacity="0.8"/><circle cx="86" cy="12" r="5.5" fill="${C.equipDark}" opacity="0.8"/></g>
      <line x1="46" y1="50" x2="40" y2="68" stroke="${C.body}" stroke-width="3"/><line x1="54" y1="50" x2="60" y2="68" stroke="${C.body}" stroke-width="3"/>
      ${joint(40,68)}${joint(60,68)}<line x1="40" y1="68" x2="38" y2="82" stroke="${C.body}" stroke-width="2.5"/><line x1="60" y1="68" x2="62" y2="82" stroke="${C.body}" stroke-width="2.5"/>
    </svg>`,
    lateral: `<svg class="ex-anim" viewBox="0 0 100 100">
      ${head(50, 16)}
      <rect x="43" y="22" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
      <ellipse cx="44" cy="28" rx="4" ry="5" fill="rgba(251,146,60,0.15)"/><ellipse cx="56" cy="28" rx="4" ry="5" fill="rgba(251,146,60,0.15)"/>
      <g class="anim-lateral">
        <line x1="44" y1="28" x2="26" y2="32" stroke="${C.body}" stroke-width="3.5"/>${joint(26,32)}<line x1="26" y1="32" x2="14" y2="34" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="34" r="4" fill="${C.equipDark}" opacity="0.7"/>
        <line x1="56" y1="28" x2="74" y2="32" stroke="${C.body}" stroke-width="3.5"/>${joint(74,32)}<line x1="74" y1="32" x2="86" y2="34" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/><circle cx="88" cy="34" r="4" fill="${C.equipDark}" opacity="0.7"/>
      </g>
      <line x1="46" y1="40" x2="40" y2="62" stroke="${C.body}" stroke-width="3"/><line x1="54" y1="40" x2="60" y2="62" stroke="${C.body}" stroke-width="3"/>
      ${joint(40,62)}${joint(60,62)}<line x1="40" y1="62" x2="38" y2="78" stroke="${C.body}" stroke-width="2.5"/><line x1="60" y1="62" x2="62" y2="78" stroke="${C.body}" stroke-width="2.5"/>
    </svg>`,
    crunch: `<svg class="ex-anim" viewBox="0 0 100 100">
      <line x1="20" y1="70" x2="80" y2="70" stroke="${C.bench}" stroke-width="3" opacity="0.3"/>
      <g class="anim-crunch">${head(42, 30)}
        <line x1="46" y1="36" x2="58" y2="56" stroke="${C.body}" stroke-width="4" stroke-linecap="round"/>
        <ellipse cx="54" cy="50" rx="6" ry="8" fill="rgba(251,146,60,0.15)"/>
        <line x1="44" y1="38" x2="38" y2="32" stroke="${C.body}" stroke-width="3"/><line x1="44" y1="38" x2="50" y2="32" stroke="${C.body}" stroke-width="3"/>
        <line x1="58" y1="56" x2="52" y2="68" stroke="${C.body}" stroke-width="3.5"/>${joint(52,68)}<line x1="52" y1="68" x2="50" y2="70" stroke="${C.body}" stroke-width="3"/>
        <line x1="58" y1="56" x2="68" y2="68" stroke="${C.body}" stroke-width="3.5"/>${joint(68,68)}<line x1="68" y1="68" x2="70" y2="70" stroke="${C.body}" stroke-width="3"/>
      </g>
    </svg>`,
    legraise: `<svg class="ex-anim" viewBox="0 0 100 100">
      <line x1="40" y1="10" x2="60" y2="10" stroke="${C.equip}" stroke-width="4" stroke-linecap="round"/>
      ${head(50, 20)}
      <rect x="43" y="26" width="14" height="14" rx="5" fill="${C.body}" opacity="0.7"/>
      <line x1="44" y1="28" x2="38" y2="12" stroke="${C.body}" stroke-width="3"/><line x1="56" y1="28" x2="62" y2="12" stroke="${C.body}" stroke-width="3"/>
      <g class="anim-legraise">
        <ellipse cx="50" cy="52" rx="6" ry="8" fill="rgba(251,146,60,0.15)"/>
        <line x1="46" y1="40" x2="38" y2="60" stroke="${C.body}" stroke-width="3.5"/>${joint(38,60)}<line x1="38" y1="60" x2="34" y2="76" stroke="${C.body}" stroke-width="3"/>
        <line x1="54" y1="40" x2="62" y2="60" stroke="${C.body}" stroke-width="3.5"/>${joint(62,60)}<line x1="62" y1="60" x2="66" y2="76" stroke="${C.body}" stroke-width="3"/>
      </g>
    </svg>`,
    plank: `<svg class="ex-anim" viewBox="0 0 100 100">
      <line x1="10" y1="72" x2="90" y2="72" stroke="${C.bench}" stroke-width="2" opacity="0.3"/>
      <g class="anim-plank">${head(18, 44)}
        <line x1="24" y1="48" x2="78" y2="52" stroke="${C.body}" stroke-width="4.5" stroke-linecap="round"/>
        <ellipse cx="50" cy="48" rx="14" ry="4" fill="rgba(251,146,60,0.12)"/>
        <line x1="22" y1="52" x2="18" y2="66" stroke="${C.body}" stroke-width="3"/>${joint(18,66)}<line x1="18" y1="66" x2="16" y2="72" stroke="${C.body}" stroke-width="2.5"/>
        <line x1="26" y1="52" x2="24" y2="66" stroke="${C.body}" stroke-width="3"/>${joint(24,66)}<line x1="24" y1="66" x2="22" y2="72" stroke="${C.body}" stroke-width="2.5"/>
        <line x1="78" y1="52" x2="80" y2="70" stroke="${C.body}" stroke-width="3"/><line x1="78" y1="52" x2="74" y2="70" stroke="${C.body}" stroke-width="3"/>
      </g>
    </svg>`,
    clean: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-clean">${head(50, 14)}
        <rect x="43" y="20" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
        <ellipse cx="50" cy="30" rx="10" ry="6" fill="rgba(251,191,36,0.12)"/>
        <line x1="44" y1="26" x2="34" y2="38" stroke="${C.body}" stroke-width="3.5"/>${joint(34,38)}<line x1="34" y1="38" x2="28" y2="48" stroke="${C.body}" stroke-width="3"/>
        <line x1="56" y1="26" x2="66" y2="38" stroke="${C.body}" stroke-width="3.5"/>${joint(66,38)}<line x1="66" y1="38" x2="72" y2="48" stroke="${C.body}" stroke-width="3"/>
        <line x1="46" y1="38" x2="40" y2="58" stroke="${C.body}" stroke-width="3.5"/>${joint(40,58)}<line x1="40" y1="58" x2="38" y2="74" stroke="${C.body}" stroke-width="3"/>
        <line x1="54" y1="38" x2="60" y2="58" stroke="${C.body}" stroke-width="3.5"/>${joint(60,58)}<line x1="60" y1="58" x2="62" y2="74" stroke="${C.body}" stroke-width="3"/>
      </g>
      <line x1="12" y1="78" x2="88" y2="78" stroke="${C.equip}" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="12" cy="78" r="5.5" fill="${C.equipDark}" opacity="0.8"/><circle cx="88" cy="78" r="5.5" fill="${C.equipDark}" opacity="0.8"/>
    </svg>`,
    walk: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-walk">${head(50, 14)}
        <rect x="43" y="20" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
        <line x1="44" y1="28" x2="32" y2="38" stroke="${C.body}" stroke-width="3.5"/>${joint(32,38)}<line x1="32" y1="38" x2="28" y2="50" stroke="${C.body}" stroke-width="3"/>
        <line x1="56" y1="28" x2="68" y2="38" stroke="${C.body}" stroke-width="3.5"/>${joint(68,38)}<line x1="68" y1="38" x2="72" y2="50" stroke="${C.body}" stroke-width="3"/>
        <rect x="22" y="46" width="10" height="12" rx="3" fill="${C.equipDark}" opacity="0.5"/><rect x="68" y="46" width="10" height="12" rx="3" fill="${C.equipDark}" opacity="0.5"/>
        <line x1="46" y1="38" x2="38" y2="58" stroke="${C.body}" stroke-width="3.5"/>${joint(38,58)}<line x1="38" y1="58" x2="36" y2="76" stroke="${C.body}" stroke-width="3"/>
        <line x1="54" y1="38" x2="62" y2="58" stroke="${C.body}" stroke-width="3.5"/>${joint(62,58)}<line x1="62" y1="58" x2="64" y2="76" stroke="${C.body}" stroke-width="3"/>
      </g>
    </svg>`,
    jump: `<svg class="ex-anim" viewBox="0 0 100 100">
      <rect x="24" y="62" width="52" height="20" rx="4" fill="${C.bench}" opacity="0.6"/>
      <g class="anim-jump">${head(50, 14)}
        <rect x="43" y="20" width="14" height="16" rx="5" fill="${C.body}" opacity="0.7"/>
        <line x1="44" y1="26" x2="36" y2="20" stroke="${C.body}" stroke-width="3"/><line x1="56" y1="26" x2="64" y2="20" stroke="${C.body}" stroke-width="3"/>
        <line x1="46" y1="36" x2="40" y2="50" stroke="${C.body}" stroke-width="3.5"/>${joint(40,50)}<line x1="40" y1="50" x2="38" y2="62" stroke="${C.body}" stroke-width="3"/>
        <line x1="54" y1="36" x2="60" y2="50" stroke="${C.body}" stroke-width="3.5"/>${joint(60,50)}<line x1="60" y1="50" x2="62" y2="62" stroke="${C.body}" stroke-width="3"/>
      </g>
    </svg>`,
    ropes: `<svg class="ex-anim" viewBox="0 0 100 100">
      ${head(50, 18)}
      <rect x="43" y="24" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
      <path d="M40,36 Q28,46 24,60 Q20,74 14,86" stroke="${C.muscle}" stroke-width="3.5" fill="none" stroke-linecap="round" class="anim-rope-l"/>
      <path d="M60,36 Q72,46 76,60 Q80,74 86,86" stroke="${C.muscle}" stroke-width="3.5" fill="none" stroke-linecap="round" class="anim-rope-r"/>
      <line x1="46" y1="42" x2="40" y2="62" stroke="${C.body}" stroke-width="3"/><line x1="54" y1="42" x2="60" y2="62" stroke="${C.body}" stroke-width="3"/>
      ${joint(40,62)}${joint(60,62)}<line x1="40" y1="62" x2="38" y2="76" stroke="${C.body}" stroke-width="2.5"/><line x1="60" y1="62" x2="62" y2="76" stroke="${C.body}" stroke-width="2.5"/>
    </svg>`,
    sprint: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-sprint">${head(38, 16)}
        <line x1="42" y1="22" x2="52" y2="44" stroke="${C.body}" stroke-width="4" stroke-linecap="round"/>
        <ellipse cx="46" cy="34" rx="5" ry="8" fill="rgba(244,114,182,0.12)"/>
        <line x1="42" y1="28" x2="28" y2="24" stroke="${C.body}" stroke-width="3.5"/>${joint(28,24)}<line x1="28" y1="24" x2="18" y2="22" stroke="${C.body}" stroke-width="3"/>
        <line x1="44" y1="30" x2="58" y2="22" stroke="${C.body}" stroke-width="3.5"/>${joint(58,22)}<line x1="58" y1="22" x2="68" y2="18" stroke="${C.body}" stroke-width="3"/>
        <line x1="52" y1="44" x2="36" y2="68" stroke="${C.body}" stroke-width="3.5"/>${joint(36,68)}<line x1="36" y1="68" x2="28" y2="80" stroke="${C.body}" stroke-width="3"/>
        <line x1="52" y1="44" x2="68" y2="62" stroke="${C.body}" stroke-width="3.5"/>${joint(68,62)}<line x1="68" y1="62" x2="76" y2="72" stroke="${C.body}" stroke-width="3"/>
      </g>
    </svg>`,
    burpee: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-burpee">${head(50, 14)}
        <rect x="43" y="20" width="14" height="16" rx="5" fill="${C.body}" opacity="0.7"/>
        <ellipse cx="50" cy="30" rx="8" ry="5" fill="rgba(244,114,182,0.12)"/>
        <line x1="44" y1="26" x2="32" y2="20" stroke="${C.body}" stroke-width="3.5"/>${joint(32,20)}<line x1="32" y1="20" x2="24" y2="16" stroke="${C.body}" stroke-width="3"/>
        <line x1="56" y1="26" x2="68" y2="20" stroke="${C.body}" stroke-width="3.5"/>${joint(68,20)}<line x1="68" y1="20" x2="76" y2="16" stroke="${C.body}" stroke-width="3"/>
        <line x1="46" y1="36" x2="38" y2="56" stroke="${C.body}" stroke-width="3.5"/>${joint(38,56)}<line x1="38" y1="56" x2="36" y2="74" stroke="${C.body}" stroke-width="3"/>
        <line x1="54" y1="36" x2="62" y2="56" stroke="${C.body}" stroke-width="3.5"/>${joint(62,56)}<line x1="62" y1="56" x2="64" y2="74" stroke="${C.body}" stroke-width="3"/>
      </g>
    </svg>`,
    mtnclimb: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-mtnclimb">${head(22, 36)}
        <line x1="28" y1="42" x2="68" y2="50" stroke="${C.body}" stroke-width="4.5" stroke-linecap="round"/>
        <ellipse cx="48" cy="46" rx="10" ry="4" fill="rgba(244,114,182,0.12)"/>
        <line x1="26" y1="46" x2="20" y2="58" stroke="${C.body}" stroke-width="3.5"/>${joint(20,58)}<line x1="20" y1="58" x2="18" y2="70" stroke="${C.body}" stroke-width="3"/>
        <line x1="30" y1="46" x2="26" y2="58" stroke="${C.body}" stroke-width="3.5"/>${joint(26,58)}<line x1="26" y1="58" x2="24" y2="70" stroke="${C.body}" stroke-width="3"/>
        <line x1="68" y1="50" x2="78" y2="66" stroke="${C.body}" stroke-width="3.5"/>${joint(78,66)}<line x1="78" y1="66" x2="80" y2="70" stroke="${C.body}" stroke-width="3"/>
        <line x1="68" y1="50" x2="52" y2="62" stroke="${C.body}" stroke-width="3.5"/>${joint(52,62)}<line x1="52" y1="62" x2="46" y2="70" stroke="${C.body}" stroke-width="3"/>
      </g>
    </svg>`,
    kbswing: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-kbswing">${head(50, 16)}
        <rect x="43" y="22" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
        <line x1="44" y1="30" x2="32" y2="42" stroke="${C.body}" stroke-width="3.5"/>${joint(32,42)}<line x1="32" y1="42" x2="36" y2="54" stroke="${C.body}" stroke-width="3"/>
        <line x1="56" y1="30" x2="68" y2="42" stroke="${C.body}" stroke-width="3.5"/>${joint(68,42)}<line x1="68" y1="42" x2="64" y2="54" stroke="${C.body}" stroke-width="3"/>
        <!-- kettlebell --><circle cx="50" cy="58" r="8" fill="${C.equipDark}" opacity="0.6"/><ellipse cx="50" cy="50" rx="4" ry="3" fill="none" stroke="${C.equip}" stroke-width="2"/>
        <line x1="46" y1="40" x2="40" y2="60" stroke="${C.body}" stroke-width="3"/><line x1="54" y1="40" x2="60" y2="60" stroke="${C.body}" stroke-width="3"/>
        ${joint(40,60)}${joint(60,60)}<line x1="40" y1="60" x2="38" y2="78" stroke="${C.body}" stroke-width="2.5"/><line x1="60" y1="60" x2="62" y2="78" stroke="${C.body}" stroke-width="2.5"/>
      </g>
    </svg>`,
    rowmachine: `<svg class="ex-anim" viewBox="0 0 100 100">
      <rect x="8" y="66" width="84" height="5" rx="2" fill="${C.bench}"/><circle cx="14" cy="68" r="6" fill="${C.bench}" opacity="0.5"/><circle cx="86" cy="68" r="6" fill="${C.bench}" opacity="0.5"/>
      <g class="anim-rowmachine">${head(32, 38)}
        <line x1="38" y1="44" x2="52" y2="58" stroke="${C.body}" stroke-width="4" stroke-linecap="round"/>
        <ellipse cx="44" cy="50" rx="6" ry="5" fill="rgba(96,165,250,0.12)"/>
        <line x1="36" y1="46" x2="24" y2="54" stroke="${C.body}" stroke-width="3"/>${joint(24,54)}<line x1="24" y1="54" x2="18" y2="60" stroke="${C.body}" stroke-width="3"/>
        <line x1="52" y1="58" x2="62" y2="64" stroke="${C.body}" stroke-width="3.5"/>${joint(62,64)}<line x1="62" y1="64" x2="64" y2="66" stroke="${C.body}" stroke-width="3"/>
        <line x1="52" y1="58" x2="42" y2="64" stroke="${C.body}" stroke-width="3.5"/>${joint(42,64)}<line x1="42" y1="64" x2="40" y2="66" stroke="${C.body}" stroke-width="3"/>
        <line x1="38" y1="48" x2="60" y2="44" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>`,
    stretch: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-stretch">${head(50, 14)}
        <rect x="43" y="20" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
        <line x1="44" y1="26" x2="24" y2="16" stroke="${C.body}" stroke-width="3.5"/>${joint(24,16)}<line x1="24" y1="16" x2="14" y2="12" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/>
        <line x1="56" y1="26" x2="76" y2="16" stroke="${C.body}" stroke-width="3.5"/>${joint(76,16)}<line x1="76" y1="16" x2="86" y2="12" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/>
        <line x1="46" y1="38" x2="34" y2="60" stroke="${C.body}" stroke-width="3.5"/>${joint(34,60)}<line x1="34" y1="60" x2="26" y2="78" stroke="${C.body}" stroke-width="3"/>
        <line x1="54" y1="38" x2="66" y2="60" stroke="${C.body}" stroke-width="3.5"/>${joint(66,60)}<line x1="66" y1="60" x2="74" y2="78" stroke="${C.body}" stroke-width="3"/>
        <circle cx="50" cy="50" r="20" fill="none" stroke="${C.cyan}" stroke-width="1" opacity="0.2"/>
      </g>
    </svg>`,
    yoga: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-yoga">${head(50, 16)}
        <rect x="43" y="22" width="14" height="18" rx="5" fill="${C.body}" opacity="0.7"/>
        <circle cx="50" cy="50" r="24" fill="none" stroke="${C.cyan}" stroke-width="1.5" opacity="0.15"/>
        <circle cx="50" cy="50" r="32" fill="none" stroke="${C.cyan}" stroke-width="1" opacity="0.08"/>
        <line x1="44" y1="28" x2="22" y2="36" stroke="${C.body}" stroke-width="3.5"/>${joint(22,36)}<line x1="22" y1="36" x2="12" y2="38" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/>
        <line x1="56" y1="28" x2="78" y2="36" stroke="${C.body}" stroke-width="3.5"/>${joint(78,36)}<line x1="78" y1="36" x2="88" y2="38" stroke="${C.body}" stroke-width="3" stroke-linecap="round"/>
        <line x1="46" y1="40" x2="36" y2="62" stroke="${C.body}" stroke-width="3.5"/>${joint(36,62)}<line x1="36" y1="62" x2="30" y2="78" stroke="${C.body}" stroke-width="3"/>
        <line x1="54" y1="40" x2="64" y2="62" stroke="${C.body}" stroke-width="3.5"/>${joint(64,62)}<line x1="64" y1="62" x2="70" y2="78" stroke="${C.body}" stroke-width="3"/>
      </g>
    </svg>`,
    foamroll: `<svg class="ex-anim" viewBox="0 0 100 100">
      <ellipse cx="50" cy="72" rx="22" ry="8" fill="${C.cyan}" opacity="0.2"/>
      <ellipse cx="50" cy="72" rx="18" ry="6" fill="${C.cyan}" opacity="0.15"/>
      <g class="anim-foamroll">${head(30, 42)}
        <line x1="36" y1="48" x2="64" y2="60" stroke="${C.body}" stroke-width="4" stroke-linecap="round"/>
        <line x1="64" y1="60" x2="72" y2="72" stroke="${C.body}" stroke-width="3.5"/>${joint(72,72)}<line x1="72" y1="72" x2="74" y2="76" stroke="${C.body}" stroke-width="3"/>
        <line x1="64" y1="60" x2="56" y2="72" stroke="${C.body}" stroke-width="3.5"/>${joint(56,72)}<line x1="56" y1="72" x2="54" y2="76" stroke="${C.body}" stroke-width="3"/>
      </g>
    </svg>`,
    breathe: `<svg class="ex-anim" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="8" fill="none" stroke="${C.muscle}" stroke-width="2.5" class="anim-breathe"/>
      <circle cx="50" cy="50" r="20" fill="none" stroke="${C.muscle}" stroke-width="1.5" opacity="0.15"/>
      <circle cx="50" cy="50" r="32" fill="none" stroke="${C.muscle}" stroke-width="1" opacity="0.08"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="${C.muscle}" stroke-width="0.5" opacity="0.04"/>
      ${head(50, 26)}
      <line x1="50" y1="34" x2="50" y2="46" stroke="${C.body}" stroke-width="3"/>
      <line x1="44" y1="38" x2="36" y2="34" stroke="${C.body}" stroke-width="2.5"/><line x1="56" y1="38" x2="64" y2="34" stroke="${C.body}" stroke-width="2.5"/>
    </svg>`,
    meditate: `<svg class="ex-anim" viewBox="0 0 100 100">
      <g class="anim-meditate">
        <circle cx="50" cy="48" r="28" fill="none" stroke="${C.muscle}" stroke-width="1" opacity="0.1"/>
        <circle cx="50" cy="48" r="36" fill="none" stroke="${C.cyan}" stroke-width="0.8" opacity="0.06"/>
        ${head(50, 22)}
        <rect x="43" y="28" width="14" height="16" rx="5" fill="${C.body}" opacity="0.7"/>
        <line x1="44" y1="34" x2="30" y2="42" stroke="${C.body}" stroke-width="3"/>${joint(30,42)}<line x1="30" y1="42" x2="38" y2="48" stroke="${C.body}" stroke-width="2.5"/>
        <line x1="56" y1="34" x2="70" y2="42" stroke="${C.body}" stroke-width="3"/>${joint(70,42)}<line x1="70" y1="42" x2="62" y2="48" stroke="${C.body}" stroke-width="2.5"/>
        <line x1="46" y1="44" x2="36" y2="60" stroke="${C.body}" stroke-width="3"/><line x1="36" y1="60" x2="30" y2="64" stroke="${C.body}" stroke-width="2.5"/>
        <line x1="54" y1="44" x2="64" y2="60" stroke="${C.body}" stroke-width="3"/><line x1="64" y1="60" x2="70" y2="64" stroke="${C.body}" stroke-width="2.5"/>
      </g>
    </svg>`,
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
