import fs from 'fs';
import path from 'path';

const baseDir = path.resolve('public/images/apps');

const apps = [
  {
    dir: 'expense-manager',
    name: 'Daily Expense Manager',
    primary: '#10b981',
    secondary: '#047857',
    accent: '#34d399',
    iconSymbol: `
      <circle cx="64" cy="64" r="32" fill="#10b981" fill-opacity="0.2"/>
      <path d="M48 48H80M48 64H74M48 80H66" stroke="#34d399" stroke-width="6" stroke-linecap="round"/>
      <path d="M72 40L88 56L72 72" stroke="#10b981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="84" cy="76" r="14" fill="#047857"/>
      <text x="84" y="81" font-size="16" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">$</text>
    `,
    screens: [
      {
        title: 'Monthly Overview',
        content: `
          <rect x="20" y="30" width="280" height="120" rx="16" fill="#0f291e" stroke="#10b981" stroke-width="1.5"/>
          <text x="40" y="60" fill="#9ca3af" font-size="12">Total Balance</text>
          <text x="40" y="95" fill="#ffffff" font-size="28" font-weight="bold">$4,850.40</text>
          <text x="40" y="125" fill="#34d399" font-size="12">+$640.20 this month (14%)</text>
          
          <text x="20" y="180" fill="#ffffff" font-size="16" font-weight="bold">Recent Transactions</text>
          
          <rect x="20" y="200" width="280" height="60" rx="12" fill="#141e28"/>
          <circle cx="50" cy="230" r="16" fill="#10b981" fill-opacity="0.3"/>
          <text x="80" y="226" fill="#ffffff" font-size="14" font-weight="600">Grocery Market</text>
          <text x="80" y="244" fill="#94a3b8" font-size="11">Today, 2:45 PM</text>
          <text x="280" y="235" fill="#f87171" font-size="15" font-weight="bold" text-anchor="end">-$42.80</text>

          <rect x="20" y="272" width="280" height="60" rx="12" fill="#141e28"/>
          <circle cx="50" cy="302" r="16" fill="#3b82f6" fill-opacity="0.3"/>
          <text x="80" y="298" fill="#ffffff" font-size="14" font-weight="600">Freelance Payout</text>
          <text x="80" y="316" fill="#94a3b8" font-size="11">Yesterday</text>
          <text x="280" y="307" fill="#34d399" font-size="15" font-weight="bold" text-anchor="end">+$850.00</text>

          <rect x="20" y="344" width="280" height="60" rx="12" fill="#141e28"/>
          <circle cx="50" cy="374" r="16" fill="#f59e0b" fill-opacity="0.3"/>
          <text x="80" y="370" fill="#ffffff" font-size="14" font-weight="600">Coffee Roast</text>
          <text x="80" y="388" fill="#94a3b8" font-size="11">Nov 11</text>
          <text x="280" y="379" fill="#f87171" font-size="15" font-weight="bold" text-anchor="end">-$6.50</text>
        `
      },
      {
        title: 'Spending Analytics',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Spending by Category</text>
          <circle cx="160" cy="160" r="80" fill="none" stroke="#1e293b" stroke-width="24"/>
          <circle cx="160" cy="160" r="80" fill="none" stroke="#10b981" stroke-width="24" stroke-dasharray="240 500" stroke-linecap="round"/>
          <circle cx="160" cy="160" r="80" fill="none" stroke="#3b82f6" stroke-width="24" stroke-dasharray="140 500" stroke-dashoffset="-250" stroke-linecap="round"/>
          <circle cx="160" cy="160" r="80" fill="none" stroke="#f59e0b" stroke-width="24" stroke-dasharray="70 500" stroke-dashoffset="-400" stroke-linecap="round"/>
          <text x="160" y="155" fill="#94a3b8" font-size="12" text-anchor="middle">Total Spent</text>
          <text x="160" y="180" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">$1,230</text>
          
          <rect x="20" y="270" width="280" height="40" rx="8" fill="#131b2e"/>
          <rect x="30" y="284" width="12" height="12" rx="3" fill="#10b981"/>
          <text x="50" y="295" fill="#ffffff" font-size="13">Groceries & Dining (48%)</text>
          <text x="285" y="295" fill="#94a3b8" font-size="13" text-anchor="end">$590</text>

          <rect x="20" y="320" width="280" height="40" rx="8" fill="#131b2e"/>
          <rect x="30" y="334" width="12" height="12" rx="3" fill="#3b82f6"/>
          <text x="50" y="345" fill="#ffffff" font-size="13">Tech & Software (28%)</text>
          <text x="285" y="345" fill="#94a3b8" font-size="13" text-anchor="end">$344</text>
        `
      },
      {
        title: 'Budget Planner',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Monthly Budgets</text>
          <rect x="20" y="70" width="280" height="100" rx="14" fill="#131e24" stroke="#10b981" stroke-width="1"/>
          <text x="40" y="100" fill="#ffffff" font-size="15" font-weight="600">Dining Out</text>
          <text x="280" y="100" fill="#34d399" font-size="14" text-anchor="end">$280 / $400</text>
          <rect x="40" y="115" width="240" height="8" rx="4" fill="#334155"/>
          <rect x="40" y="115" width="168" height="8" rx="4" fill="#10b981"/>
          <text x="40" y="145" fill="#94a3b8" font-size="11">$120 remaining for 17 days</text>

          <rect x="20" y="185" width="280" height="100" rx="14" fill="#131e24"/>
          <text x="40" y="215" fill="#ffffff" font-size="15" font-weight="600">Shopping</text>
          <text x="280" y="215" fill="#f59e0b" font-size="14" text-anchor="end">$390 / $450</text>
          <rect x="40" y="230" width="240" height="8" rx="4" fill="#334155"/>
          <rect x="40" y="230" width="208" height="8" rx="4" fill="#f59e0b"/>
          <text x="40" y="260" fill="#94a3b8" font-size="11">$60 remaining (Caution)</text>
        `
      },
      {
        title: 'Export & Privacy',
        content: `
          <rect x="20" y="40" width="280" height="160" rx="16" fill="#0d1b1e" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="160" cy="85" r="28" fill="#10b981" fill-opacity="0.2"/>
          <path d="M150 85L157 92L172 77" stroke="#34d399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="160" y="130" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">100% On-Device Storage</text>
          <text x="160" y="155" fill="#94a3b8" font-size="12" text-anchor="middle">No cloud tracking. Your data is yours.</text>

          <rect x="20" y="220" width="280" height="50" rx="10" fill="#10b981"/>
          <text x="160" y="252" fill="#062e1e" font-size="14" font-weight="bold" text-anchor="middle">Export to CSV / Excel</text>

          <rect x="20" y="285" width="280" height="50" rx="10" fill="#1e293b"/>
          <text x="160" y="317" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">Generate Tax PDF Report</text>
        `
      }
    ]
  },
  {
    dir: 'focusflow',
    name: 'FocusFlow',
    primary: '#6366f1',
    secondary: '#312e81',
    accent: '#818cf8',
    iconSymbol: `
      <circle cx="64" cy="64" r="36" fill="none" stroke="#6366f1" stroke-width="6" stroke-dasharray="140 220"/>
      <circle cx="64" cy="64" r="20" fill="#6366f1" fill-opacity="0.3"/>
      <path d="M64 48V64L76 72" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
    `,
    screens: [
      {
        title: 'Deep Work Timer',
        content: `
          <text x="160" y="50" fill="#818cf8" font-size="13" font-weight="bold" text-anchor="middle">DEEP WORK SPRINT</text>
          <circle cx="160" cy="180" r="100" fill="none" stroke="#1e1b4b" stroke-width="16"/>
          <circle cx="160" cy="180" r="100" fill="none" stroke="#6366f1" stroke-width="16" stroke-dasharray="450 628" stroke-linecap="round"/>
          <text x="160" y="175" fill="#ffffff" font-size="44" font-weight="bold" text-anchor="middle">23:42</text>
          <text x="160" y="205" fill="#94a3b8" font-size="14" text-anchor="middle">Session 3 of 4</text>
          
          <rect x="70" y="310" width="180" height="46" rx="23" fill="#6366f1"/>
          <text x="160" y="338" fill="#ffffff" font-size="15" font-weight="bold" text-anchor="middle">Pause Session</text>
        `
      },
      {
        title: 'Ambient Soundboard',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Soundscape Mixer</text>
          <rect x="20" y="70" width="280" height="65" rx="12" fill="#1e1b4b" stroke="#6366f1" stroke-width="1"/>
          <text x="40" y="100" fill="#ffffff" font-size="15" font-weight="600">Rain on Roof</text>
          <circle cx="270" cy="102" r="12" fill="#6366f1"/>

          <rect x="20" y="150" width="280" height="65" rx="12" fill="#151336"/>
          <text x="40" y="180" fill="#ffffff" font-size="15" font-weight="600">Coffee House Ambiance</text>
          <circle cx="270" cy="182" r="12" fill="#334155"/>

          <rect x="20" y="230" width="280" height="65" rx="12" fill="#1e1b4b" stroke="#6366f1" stroke-width="1"/>
          <text x="40" y="260" fill="#ffffff" font-size="15" font-weight="600">Deep Binaural Theta</text>
          <circle cx="270" cy="262" r="12" fill="#6366f1"/>
        `
      },
      {
        title: 'Flow Telemetry',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Focus Analytics</text>
          <rect x="20" y="70" width="280" height="130" rx="14" fill="#18153d"/>
          <text x="40" y="100" fill="#94a3b8" font-size="12">Daily Deep Work Hours</text>
          <text x="40" y="135" fill="#ffffff" font-size="32" font-weight="bold">5h 40m</text>
          <path d="M40 170 C80 150, 120 180, 160 140 C200 110, 240 130, 280 100" stroke="#818cf8" stroke-width="3" fill="none"/>

          <rect x="20" y="220" width="132" height="90" rx="12" fill="#18153d"/>
          <text x="35" y="250" fill="#94a3b8" font-size="11">Current Streak</text>
          <text x="35" y="285" fill="#f59e0b" font-size="24" font-weight="bold">14 Days</text>

          <rect x="168" y="220" width="132" height="90" rx="12" fill="#18153d"/>
          <text x="183" y="250" fill="#94a3b8" font-size="11">Distractions Blocked</text>
          <text x="183" y="285" fill="#34d399" font-size="24" font-weight="bold">82</text>
        `
      },
      {
        title: 'Minimalist Lockscreen',
        content: `
          <text x="160" y="60" fill="#94a3b8" font-size="13" text-anchor="middle">ATS LABS FOCUS WIDGET</text>
          <rect x="20" y="90" width="280" height="180" rx="18" fill="#131130" stroke="#6366f1" stroke-width="1.5"/>
          <text x="160" y="145" fill="#ffffff" font-size="40" font-weight="bold" text-anchor="middle">18:05</text>
          <text x="160" y="180" fill="#a5b4fc" font-size="14" text-anchor="middle">Task: Architecture Docs</text>
          <rect x="60" y="210" width="200" height="6" rx="3" fill="#312e81"/>
          <rect x="60" y="210" width="130" height="6" rx="3" fill="#6366f1"/>
        `
      }
    ]
  },
  {
    dir: 'habitforge',
    name: 'HabitForge',
    primary: '#f59e0b',
    secondary: '#78350f',
    accent: '#fbbf24',
    iconSymbol: `
      <path d="M64 28L80 44L48 76H32V60L64 28Z" stroke="#fbbf24" stroke-width="5" fill="#f59e0b" fill-opacity="0.3"/>
      <circle cx="84" cy="80" r="14" fill="#d97706"/>
      <path d="M78 80L82 84L90 76" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    `,
    screens: [
      {
        title: 'Daily Habits',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Today's Habits</text>
          <rect x="20" y="70" width="280" height="60" rx="12" fill="#241a0c" stroke="#f59e0b" stroke-width="1"/>
          <circle cx="50" cy="100" r="14" fill="#f59e0b"/>
          <path d="M45 100L48 103L55 96" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
          <text x="80" y="96" fill="#ffffff" font-size="14" font-weight="600">Drink 2.5L Water</text>
          <text x="80" y="114" fill="#fbbf24" font-size="11">Streak: 21 Days 🔥</text>

          <rect x="20" y="145" width="280" height="60" rx="12" fill="#241a0c" stroke="#f59e0b" stroke-width="1"/>
          <circle cx="50" cy="175" r="14" fill="#f59e0b"/>
          <path d="M45 175L48 178L55 171" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
          <text x="80" y="171" fill="#ffffff" font-size="14" font-weight="600">Read 20 Pages</text>
          <text x="80" y="189" fill="#fbbf24" font-size="11">Streak: 12 Days 🔥</text>

          <rect x="20" y="220" width="280" height="60" rx="12" fill="#1b1510"/>
          <circle cx="50" cy="250" r="14" fill="none" stroke="#64748b" stroke-width="2"/>
          <text x="80" y="246" fill="#ffffff" font-size="14" font-weight="600">Morning Meditation</text>
          <text x="80" y="264" fill="#94a3b8" font-size="11">Pending for evening</text>
        `
      },
      {
        title: 'Streak Visualizer',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Consistency Matrix</text>
          <rect x="20" y="70" width="280" height="180" rx="14" fill="#20150b"/>
          <text x="40" y="100" fill="#fbbf24" font-size="14" font-weight="600">November Progress</text>
          <!-- grid of dots -->
          ${Array.from({length: 28}).map((_, i) => {
            const row = Math.floor(i / 7);
            const col = i % 7;
            const filled = i < 22;
            return `<rect x="${40 + col * 34}" y="${120 + row * 24}" width="22" height="16" rx="4" fill="${filled ? '#f59e0b' : '#334155'}"/>`;
          }).join('')}
        `
      },
      {
        title: 'Milestone Badges',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Unlocked Badges</text>
          <rect x="20" y="70" width="130" height="130" rx="14" fill="#271a0e" stroke="#f59e0b" stroke-width="1"/>
          <circle cx="85" cy="115" r="26" fill="#f59e0b" fill-opacity="0.2"/>
          <text x="85" y="123" font-size="24" text-anchor="middle">👑</text>
          <text x="85" y="165" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">30-Day Master</text>

          <rect x="170" y="70" width="130" height="130" rx="14" fill="#271a0e" stroke="#f59e0b" stroke-width="1"/>
          <circle cx="235" cy="115" r="26" fill="#f59e0b" fill-opacity="0.2"/>
          <text x="235" y="123" font-size="24" text-anchor="middle">⚡</text>
          <text x="235" y="165" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Atomic Routine</text>
        `
      },
      {
        title: 'Home Screen Widget',
        content: `
          <text x="160" y="50" fill="#94a3b8" font-size="12" text-anchor="middle">MATERIAL YOU 2x2 WIDGET</text>
          <rect x="40" y="80" width="240" height="220" rx="24" fill="#2a1d0f" stroke="#fbbf24" stroke-width="2"/>
          <text x="65" y="120" fill="#fbbf24" font-size="18" font-weight="bold">HabitForge</text>
          <text x="65" y="142" fill="#94a3b8" font-size="12">3 of 4 completed today</text>
          <rect x="65" y="165" width="190" height="8" rx="4" fill="#451a03"/>
          <rect x="65" y="165" width="142" height="8" rx="4" fill="#f59e0b"/>
          <text x="65" y="215" fill="#ffffff" font-size="14">🔥 21 Day Streak Ongoing</text>
        `
      }
    ]
  },
  {
    dir: 'quickscan',
    name: 'QuickScan',
    primary: '#06b6d4',
    secondary: '#164e63',
    accent: '#22d3ee',
    iconSymbol: `
      <rect x="36" y="32" width="56" height="64" rx="8" stroke="#22d3ee" stroke-width="5" fill="#06b6d4" fill-opacity="0.2"/>
      <line x1="48" y1="50" x2="80" y2="50" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
      <line x1="48" y1="64" x2="74" y2="64" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
      <line x1="48" y1="78" x2="68" y2="78" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
      <line x1="28" y1="64" x2="100" y2="64" stroke="#22d3ee" stroke-width="3" stroke-dasharray="4 4"/>
    `,
    screens: [
      {
        title: 'Auto-Edge Scan',
        content: `
          <rect x="20" y="40" width="280" height="260" rx="16" fill="#082f49"/>
          <!-- corner crosshairs -->
          <path d="M40 70H65M40 70V95" stroke="#22d3ee" stroke-width="3"/>
          <path d="M280 70H255M280 70V95" stroke="#22d3ee" stroke-width="3"/>
          <path d="M40 270H65M40 270V245" stroke="#22d3ee" stroke-width="3"/>
          <path d="M280 270H255M280 270V245" stroke="#22d3ee" stroke-width="3"/>
          <text x="160" y="165" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">Document Boundary Locked</text>
          <rect x="90" y="320" width="140" height="40" rx="20" fill="#06b6d4"/>
          <text x="160" y="345" fill="#000000" font-size="14" font-weight="bold" text-anchor="middle">Auto Capture</text>
        `
      },
      {
        title: 'Offline OCR Engine',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Extracted Text (OCR)</text>
          <rect x="20" y="70" width="280" height="180" rx="12" fill="#0c2233" stroke="#06b6d4" stroke-width="1"/>
          <text x="35" y="100" fill="#e2e8f0" font-size="12" font-family="monospace">INVOICE #92048</text>
          <text x="35" y="125" fill="#94a3b8" font-size="11" font-family="monospace">ISSUED: NOV 12, 2026</text>
          <text x="35" y="150" fill="#94a3b8" font-size="11" font-family="monospace">TOTAL PAID: $1,420.00 USD</text>
          <text x="35" y="175" fill="#38bdf8" font-size="11" font-family="monospace">STATUS: CLEARED (OFFLINE ML)</text>
          <rect x="20" y="270" width="280" height="45" rx="8" fill="#06b6d4"/>
          <text x="160" y="298" fill="#000" font-size="13" font-weight="bold" text-anchor="middle">Copy Extracted Text</text>
        `
      },
      {
        title: 'Batch PDF Manager',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Contract_Signed.pdf</text>
          <text x="20" y="70" fill="#94a3b8" font-size="12">14 Pages • 2.4 MB • Password Protected</text>
          <rect x="20" y="90" width="80" height="110" rx="8" fill="#1e293b"/>
          <rect x="120" y="90" width="80" height="110" rx="8" fill="#1e293b"/>
          <rect x="220" y="90" width="80" height="110" rx="8" fill="#1e293b"/>
          <text x="60" y="150" fill="#38bdf8" font-size="12" text-anchor="middle">Page 1</text>
          <text x="160" y="150" fill="#38bdf8" font-size="12" text-anchor="middle">Page 2</text>
          <text x="260" y="150" fill="#38bdf8" font-size="12" text-anchor="middle">Page 3</text>
        `
      },
      {
        title: 'Security & Signing',
        content: `
          <rect x="20" y="45" width="280" height="150" rx="14" fill="#082b3d" stroke="#06b6d4" stroke-width="1.5"/>
          <text x="40" y="80" fill="#ffffff" font-size="16" font-weight="bold">Digital Signature</text>
          <path d="M40 130 C70 100, 110 140, 150 110 C180 80, 210 130, 260 110" stroke="#22d3ee" stroke-width="3" fill="none"/>
          <text x="40" y="170" fill="#94a3b8" font-size="11">Digitally stamped on device with SHA-256</text>
        `
      }
    ]
  },
  {
    dir: 'soundwave',
    name: 'SoundWave',
    primary: '#a855f7',
    secondary: '#581c87',
    accent: '#c084fc',
    iconSymbol: `
      <circle cx="64" cy="64" r="32" fill="#a855f7" fill-opacity="0.25"/>
      <path d="M44 64V64M54 52V76M64 40V88M74 56V72M84 64V64" stroke="#c084fc" stroke-width="5" stroke-linecap="round"/>
    `,
    screens: [
      {
        title: 'Sanctuary Player',
        content: `
          <text x="160" y="50" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">REST & RESTORATION</text>
          <circle cx="160" cy="160" r="75" fill="none" stroke="#581c87" stroke-width="12"/>
          <circle cx="160" cy="160" r="75" fill="none" stroke="#a855f7" stroke-width="12" stroke-dasharray="350 480" stroke-linecap="round"/>
          <text x="160" y="165" fill="#ffffff" font-size="22" font-weight="bold" text-anchor="middle">Alpine Storm</text>
          <text x="160" y="260" fill="#94a3b8" font-size="13" text-anchor="middle">Sleep Timer: 45 min left</text>
        `
      },
      {
        title: 'Multi-Track Mixer',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Sound Mixer</text>
          <rect x="20" y="70" width="280" height="50" rx="10" fill="#2d134d"/>
          <text x="35" y="100" fill="#ffffff" font-size="13">Heavy Rain (80%)</text>
          <rect x="160" y="95" width="120" height="6" rx="3" fill="#a855f7"/>

          <rect x="20" y="130" width="280" height="50" rx="10" fill="#2d134d"/>
          <text x="35" y="160" fill="#ffffff" font-size="13">Thunder Rumbles (45%)</text>
          <rect x="160" y="155" width="70" height="6" rx="3" fill="#a855f7"/>

          <rect x="20" y="190" width="280" height="50" rx="10" fill="#2d134d"/>
          <text x="35" y="220" fill="#ffffff" font-size="13">Binaural Delta 4Hz (60%)</text>
          <rect x="160" y="215" width="90" height="6" rx="3" fill="#a855f7"/>
        `
      },
      {
        title: 'Sleep Brainwaves',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Delta Sleep Induction</text>
          <rect x="20" y="70" width="280" height="150" rx="14" fill="#230d3d" stroke="#a855f7" stroke-width="1"/>
          <path d="M30 145 Q 60 85, 90 145 T 150 145 T 210 145 T 270 145" stroke="#c084fc" stroke-width="3" fill="none"/>
          <text x="160" y="190" fill="#ffffff" font-size="13" text-anchor="middle">Calibrated for Slow-Wave Sleep</text>
        `
      },
      {
        title: 'Offline Library',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Downloaded Presets</text>
          <rect x="20" y="70" width="280" height="55" rx="10" fill="#1b0a2f"/>
          <text x="35" y="103" fill="#ffffff" font-size="14">Midnight Train</text>
          <text x="280" y="103" fill="#a855f7" font-size="12" text-anchor="end">Ready Offline ✓</text>
        `
      }
    ]
  },
  {
    dir: 'novawidget',
    name: 'NovaWidget',
    primary: '#ec4899',
    secondary: '#831843',
    accent: '#f472b6',
    iconSymbol: `
      <rect x="36" y="36" width="24" height="24" rx="6" fill="#ec4899"/>
      <rect x="68" y="36" width="24" height="24" rx="6" fill="#f472b6" fill-opacity="0.5"/>
      <rect x="36" y="68" width="56" height="24" rx="6" fill="#ec4899" fill-opacity="0.3"/>
    `,
    screens: [
      {
        title: 'Widget Gallery',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Widget Styles</text>
          <rect x="20" y="70" width="130" height="110" rx="16" fill="#2b0e1d" stroke="#ec4899" stroke-width="1.5"/>
          <text x="85" y="125" fill="#ffffff" font-size="28" font-weight="bold" text-anchor="middle">09:41</text>
          <text x="85" y="150" fill="#f472b6" font-size="11" text-anchor="middle">Sunny • 72°F</text>

          <rect x="170" y="70" width="130" height="110" rx="16" fill="#2b0e1d" stroke="#ec4899" stroke-width="1.5"/>
          <text x="235" y="120" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">94%</text>
          <text x="235" y="145" fill="#34d399" font-size="11" text-anchor="middle">Battery Safe</text>
        `
      },
      {
        title: 'Color Palette Engine',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Monet Wallpaper Tinting</text>
          <rect x="20" y="70" width="280" height="70" rx="12" fill="#351224"/>
          <circle cx="50" cy="105" r="16" fill="#ec4899"/>
          <circle cx="95" cy="105" r="16" fill="#8b5cf6"/>
          <circle cx="140" cy="105" r="16" fill="#06b6d4"/>
          <circle cx="185" cy="105" r="16" fill="#10b981"/>
          <circle cx="230" cy="105" r="16" fill="#f59e0b"/>
        `
      },
      {
        title: 'Android 15 Glance',
        content: `
          <rect x="20" y="60" width="280" height="160" rx="20" fill="#260b18" stroke="#ec4899" stroke-width="1.5"/>
          <text x="160" y="120" fill="#ffffff" font-size="18" font-weight="bold" text-anchor="middle">Ultra-Low Power</text>
          <text x="160" y="150" fill="#f472b6" font-size="12" text-anchor="middle">Zero wake locks. 100% Glance API.</text>
        `
      },
      {
        title: 'Custom Typography',
        content: `
          <text x="20" y="45" fill="#ffffff" font-size="18" font-weight="bold">Type Presets</text>
          <rect x="20" y="70" width="280" height="50" rx="10" fill="#220a16"/>
          <text x="40" y="102" fill="#ffffff" font-size="16" font-family="serif">Editorial Serif 08:30</text>
          <rect x="20" y="130" width="280" height="50" rx="10" fill="#220a16"/>
          <text x="40" y="162" fill="#ffffff" font-size="16" font-family="monospace">CYBERPUNK 08:30</text>
        `
      }
    ]
  }
];

// Helper to create directory
for (const app of apps) {
  const dirPath = path.join(baseDir, app.dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Create Icon SVG
  const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
    <defs>
      <linearGradient id="grad-${app.dir}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${app.primary}"/>
        <stop offset="100%" stop-color="${app.secondary}"/>
      </linearGradient>
      <filter id="shadow-${app.dir}" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="${app.primary}" flood-opacity="0.35"/>
      </filter>
    </defs>
    <rect width="128" height="128" rx="30" fill="#0c101d"/>
    <rect width="126" height="126" x="1" y="1" rx="29" fill="url(#grad-${app.dir})" fill-opacity="0.15" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
    <g filter="url(#shadow-${app.dir})">
      ${app.iconSymbol}
    </g>
  </svg>`;
  fs.writeFileSync(path.join(dirPath, 'icon.svg'), iconSvg);

  // Create 4 Screen SVGs (representing Android phone screens)
  app.screens.forEach((screen, idx) => {
    const screenSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 640" fill="none">
      <defs>
        <linearGradient id="bg-${app.dir}-${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#090d18"/>
          <stop offset="100%" stop-color="#05070d"/>
        </linearGradient>
      </defs>
      
      <!-- Device Chassis Base -->
      <rect width="320" height="640" rx="36" fill="url(#bg-${app.dir}-${idx})"/>
      <rect width="316" height="636" x="2" y="2" rx="34" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
      
      <!-- Android Status Bar -->
      <text x="24" y="28" fill="#94a3b8" font-size="11" font-family="sans-serif" font-weight="600">09:41</text>
      <!-- Camera punch hole -->
      <circle cx="160" cy="24" r="5" fill="#000000"/>
      <!-- Status icons (Wifi, Battery) -->
      <rect x="270" y="20" width="18" height="10" rx="2" stroke="#94a3b8" stroke-width="1.5" fill="none"/>
      <rect x="272" y="22" width="12" height="6" rx="1" fill="#94a3b8"/>
      
      <!-- Screen Content Frame -->
      <g transform="translate(0, 45)">
        ${screen.content}
      </g>
      
      <!-- Android Bottom Gesture Bar -->
      <rect x="110" y="622" width="100" height="4" rx="2" fill="#64748b"/>
    </svg>`;
    fs.writeFileSync(path.join(dirPath, `screen${idx + 1}.svg`), screenSvg);
  });
}

console.log('Successfully generated all app icons and mock screenshots!');
