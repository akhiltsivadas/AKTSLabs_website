import fs from 'fs';
import path from 'path';

const dir = path.resolve('public/images/apps/expense-flow');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Screen 1: Dashboard & Daily Spend
const screen1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 760" fill="none">
  <defs>
    <linearGradient id="bg1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0c101d"/>
      <stop offset="100%" stop-color="#060913"/>
    </linearGradient>
    <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Chassis & Display Frame -->
  <rect width="360" height="760" rx="40" fill="url(#bg1)"/>
  <rect width="356" height="756" x="2" y="2" rx="38" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>

  <!-- Status Bar -->
  <text x="32" y="36" fill="#cbd5e1" font-size="12" font-family="system-ui, sans-serif" font-weight="600">09:41</text>
  <circle cx="180" cy="32" r="6" fill="#000000"/>
  <rect x="300" y="26" width="22" height="12" rx="3" stroke="#cbd5e1" stroke-width="1.5" fill="none"/>
  <rect x="303" y="29" width="14" height="6" rx="1.5" fill="#10b981"/>

  <!-- Top App Bar -->
  <g transform="translate(24, 60)">
    <rect width="36" height="36" rx="10" fill="#1e293b"/>
    <path d="M12 18H24M12 13H24M12 23H18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
    <text x="50" y="24" fill="#ffffff" font-size="18" font-family="system-ui, sans-serif" font-weight="bold">ExpenseFlow</text>
    <circle cx="295" cy="18" r="16" fill="#1e293b"/>
    <path d="M291 14L299 22M299 14L291 22" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
  </g>

  <!-- Hero Spend Card -->
  <g transform="translate(20, 115)">
    <rect width="320" height="145" rx="22" fill="url(#cardGrad1)" stroke="#10b981" stroke-width="1.5"/>
    <text x="24" y="38" fill="#a7f3d0" font-size="13" font-family="system-ui, sans-serif" font-weight="500">TODAY'S SPEND</text>
    <text x="24" y="80" fill="#ffffff" font-size="36" font-family="system-ui, sans-serif" font-weight="800">$42.80</text>
    <rect x="24" y="98" width="125" height="24" rx="12" fill="#065f46"/>
    <text x="34" y="114" fill="#6ee7b7" font-size="11" font-family="system-ui, sans-serif" font-weight="600">4 Expenses Logged</text>
    <text x="296" y="80" fill="#34d399" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="end">Monthly: $840</text>
  </g>

  <!-- Quick Action Row -->
  <g transform="translate(20, 280)">
    <text x="4" y="0" fill="#94a3b8" font-size="12" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="start">RECENT TRANSACTIONS</text>
  </g>

  <!-- Transaction Items -->
  <g transform="translate(20, 298)">
    <!-- Item 1 -->
    <rect y="0" width="320" height="68" rx="16" fill="#111827" stroke="#1f2937" stroke-width="1"/>
    <circle cx="34" cy="34" r="18" fill="#10b981" fill-opacity="0.2"/>
    <text x="34" y="39" fill="#34d399" font-size="14" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">☕</text>
    <text x="64" y="28" fill="#ffffff" font-size="14" font-family="system-ui, sans-serif" font-weight="600">Morning Espresso & Bagel</text>
    <text x="64" y="48" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif">Food & Dining • 08:30 AM</text>
    <text x="300" y="39" fill="#f87171" font-size="15" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="end">-$6.50</text>

    <!-- Item 2 -->
    <rect y="78" width="320" height="68" rx="16" fill="#111827" stroke="#1f2937" stroke-width="1"/>
    <circle cx="34" cy="112" r="18" fill="#3b82f6" fill-opacity="0.2"/>
    <text x="34" y="117" fill="#60a5fa" font-size="14" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">🛒</text>
    <text x="64" y="106" fill="#ffffff" font-size="14" font-family="system-ui, sans-serif" font-weight="600">Organic Market</text>
    <text x="64" y="126" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif">Groceries • 12:15 PM</text>
    <text x="300" y="117" fill="#f87171" font-size="15" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="end">-$28.40</text>

    <!-- Item 3 -->
    <rect y="156" width="320" height="68" rx="16" fill="#111827" stroke="#1f2937" stroke-width="1"/>
    <circle cx="34" cy="190" r="18" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="34" y="195" fill="#fbbf24" font-size="14" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">🚕</text>
    <text x="64" y="184" fill="#ffffff" font-size="14" font-family="system-ui, sans-serif" font-weight="600">City Cab Ride</text>
    <text x="64" y="204" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif">Transport • 03:20 PM</text>
    <text x="300" y="195" fill="#f87171" font-size="15" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="end">-$7.90</text>
  </g>

  <!-- Bottom Floating Add Button -->
  <circle cx="180" cy="670" r="30" fill="#10b981" filter="drop-shadow(0 8px 16px rgba(16,185,129,0.4))"/>
  <path d="M180 656V684M166 670H194" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Android Gesture Bar -->
  <rect x="130" y="742" width="100" height="4" rx="2" fill="#64748b"/>
</svg>`;
fs.writeFileSync(path.join(dir, 'screen1.svg'), screen1);

// Screen 2: Category Breakdown & Spending Analytics
const screen2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 760" fill="none">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0c101d"/>
      <stop offset="100%" stop-color="#060913"/>
    </linearGradient>
  </defs>

  <rect width="360" height="760" rx="40" fill="url(#bg2)"/>
  <rect width="356" height="756" x="2" y="2" rx="38" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>

  <!-- Status Bar -->
  <text x="32" y="36" fill="#cbd5e1" font-size="12" font-family="system-ui, sans-serif" font-weight="600">09:41</text>
  <circle cx="180" cy="32" r="6" fill="#000000"/>
  <rect x="300" y="26" width="22" height="12" rx="3" stroke="#cbd5e1" stroke-width="1.5" fill="none"/>
  <rect x="303" y="29" width="14" height="6" rx="1.5" fill="#10b981"/>

  <!-- Top App Bar -->
  <g transform="translate(24, 60)">
    <text x="0" y="24" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold">Spending Analytics</text>
    <text x="312" y="24" fill="#10b981" font-size="13" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="end">November</text>
  </g>

  <!-- Pie Chart Representation -->
  <g transform="translate(180, 205)">
    <circle r="75" fill="none" stroke="#1e293b" stroke-width="28"/>
    <circle r="75" fill="none" stroke="#10b981" stroke-width="28" stroke-dasharray="230 480" stroke-linecap="round"/>
    <circle r="75" fill="none" stroke="#3b82f6" stroke-width="28" stroke-dasharray="120 480" stroke-dashoffset="-240" stroke-linecap="round"/>
    <circle r="75" fill="none" stroke="#f59e0b" stroke-width="28" stroke-dasharray="80 480" stroke-dashoffset="-370" stroke-linecap="round"/>
    <text y="-5" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" text-anchor="middle">Total Month</text>
    <text y="22" fill="#ffffff" font-size="22" font-family="system-ui, sans-serif" font-weight="800" text-anchor="middle">$1,240</text>
  </g>

  <!-- Category Bars -->
  <g transform="translate(20, 325)">
    <!-- Food & Dining -->
    <rect width="320" height="70" rx="16" fill="#111827"/>
    <text x="20" y="28" fill="#ffffff" font-size="13" font-family="system-ui, sans-serif" font-weight="600">🍔 Food &amp; Dining</text>
    <text x="300" y="28" fill="#10b981" font-size="13" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="end">$595.20 (48%)</text>
    <rect x="20" y="42" width="280" height="8" rx="4" fill="#1f2937"/>
    <rect x="20" y="42" width="134" height="8" rx="4" fill="#10b981"/>

    <!-- Groceries -->
    <g transform="translate(0, 82)">
      <rect width="320" height="70" rx="16" fill="#111827"/>
      <text x="20" y="28" fill="#ffffff" font-size="13" font-family="system-ui, sans-serif" font-weight="600">🛒 Groceries &amp; Home</text>
      <text x="300" y="28" fill="#3b82f6" font-size="13" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="end">$372.00 (30%)</text>
      <rect x="20" y="42" width="280" height="8" rx="4" fill="#1f2937"/>
      <rect x="20" y="42" width="84" height="8" rx="4" fill="#3b82f6"/>
    </g>

    <!-- Transportation -->
    <g transform="translate(0, 164)">
      <rect width="320" height="70" rx="16" fill="#111827"/>
      <text x="20" y="28" fill="#ffffff" font-size="13" font-family="system-ui, sans-serif" font-weight="600">🚗 Transit &amp; Fuel</text>
      <text x="300" y="28" fill="#f59e0b" font-size="13" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="end">$272.80 (22%)</text>
      <rect x="20" y="42" width="280" height="8" rx="4" fill="#1f2937"/>
      <rect x="20" y="42" width="61" height="8" rx="4" fill="#f59e0b"/>
    </g>
  </g>

  <!-- Android Gesture Bar -->
  <rect x="130" y="742" width="100" height="4" rx="2" fill="#64748b"/>
</svg>`;
fs.writeFileSync(path.join(dir, 'screen2.svg'), screen2);

// Screen 3: Google Drive Backup & Local Storage (Matches User Privacy Policy)
const screen3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 760" fill="none">
  <defs>
    <linearGradient id="bg3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0c101d"/>
      <stop offset="100%" stop-color="#060913"/>
    </linearGradient>
  </defs>

  <rect width="360" height="760" rx="40" fill="url(#bg3)"/>
  <rect width="356" height="756" x="2" y="2" rx="38" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>

  <!-- Status Bar -->
  <text x="32" y="36" fill="#cbd5e1" font-size="12" font-family="system-ui, sans-serif" font-weight="600">09:41</text>
  <circle cx="180" cy="32" r="6" fill="#000000"/>

  <!-- App Header -->
  <g transform="translate(24, 60)">
    <text x="0" y="24" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold">Data &amp; Backup</text>
    <text x="0" y="44" fill="#94a3b8" font-size="12" font-family="system-ui, sans-serif">Offline SQLite &amp; Google Drive</text>
  </g>

  <!-- Local Storage Card -->
  <g transform="translate(20, 130)">
    <rect width="320" height="120" rx="20" fill="#111827" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="40" cy="40" r="18" fill="#10b981" fill-opacity="0.2"/>
    <text x="40" y="46" font-size="16" text-anchor="middle">🔒</text>
    <text x="70" y="36" fill="#ffffff" font-size="15" font-family="system-ui, sans-serif" font-weight="bold">Local Storage Active</text>
    <text x="70" y="54" fill="#34d399" font-size="12" font-family="system-ui, sans-serif">100% On-Device Database</text>
    <text x="24" y="94" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif">Your transactions remain strictly on this device.</text>
  </g>

  <!-- Google Drive Section -->
  <g transform="translate(20, 270)">
    <rect width="320" height="175" rx="20" fill="#111827" stroke="#1f2937" stroke-width="1"/>
    
    <!-- Drive Logo & Title -->
    <circle cx="40" cy="38" r="18" fill="#3b82f6" fill-opacity="0.2"/>
    <text x="40" y="44" font-size="16" text-anchor="middle">☁️</text>
    <text x="70" y="34" fill="#ffffff" font-size="15" font-family="system-ui, sans-serif" font-weight="bold">Google Drive Backup</text>
    <text x="70" y="52" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif">Optional cloud preservation</text>
    
    <!-- Toggle -->
    <rect x="250" y="24" width="46" height="26" rx="13" fill="#10b981"/>
    <circle cx="283" cy="37" r="10" fill="#ffffff"/>

    <rect x="20" y="80" width="280" height="42" rx="10" fill="#090d16"/>
    <text x="32" y="106" fill="#cbd5e1" font-size="11" font-family="monospace">expenseflow_backup.json</text>

    <text x="20" y="146" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif">Last Backup: Today, 09:15 AM</text>
  </g>

  <!-- Backup Now Button -->
  <g transform="translate(20, 470)">
    <rect width="320" height="48" rx="14" fill="#10b981"/>
    <text x="160" y="30" fill="#022c22" font-size="14" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">Back Up Now to Drive</text>
  </g>

  <!-- Android Gesture Bar -->
  <rect x="130" y="742" width="100" height="4" rx="2" fill="#64748b"/>
</svg>`;
fs.writeFileSync(path.join(dir, 'screen3.svg'), screen3);

// Screen 4: Quick Add Expense Modal
const screen4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 760" fill="none">
  <defs>
    <linearGradient id="bg4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0c101d"/>
      <stop offset="100%" stop-color="#060913"/>
    </linearGradient>
  </defs>

  <rect width="360" height="760" rx="40" fill="url(#bg4)"/>
  <rect width="356" height="756" x="2" y="2" rx="38" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>

  <!-- Status Bar -->
  <text x="32" y="36" fill="#cbd5e1" font-size="12" font-family="system-ui, sans-serif" font-weight="600">09:41</text>
  <circle cx="180" cy="32" r="6" fill="#000000"/>

  <!-- App Header -->
  <g transform="translate(24, 60)">
    <text x="0" y="24" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold">Add Expense</text>
  </g>

  <!-- Amount Input -->
  <g transform="translate(20, 110)">
    <rect width="320" height="85" rx="18" fill="#111827" stroke="#10b981" stroke-width="1.5"/>
    <text x="24" y="34" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" font-weight="bold">ENTER AMOUNT</text>
    <text x="24" y="68" fill="#ffffff" font-size="34" font-family="system-ui, sans-serif" font-weight="800">$18.50</text>
  </g>

  <!-- Category Grid -->
  <g transform="translate(20, 215)">
    <text x="4" y="0" fill="#94a3b8" font-size="11" font-family="system-ui, sans-serif" font-weight="bold">CHOOSE CATEGORY</text>
    
    <!-- Categories 2x3 -->
    <rect y="15" width="95" height="55" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="1"/>
    <text x="47" y="47" font-size="12" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">🍔 Dining</text>

    <rect x="112" y="15" width="95" height="55" rx="12" fill="#111827"/>
    <text x="159" y="47" font-size="12" fill="#cbd5e1" font-family="system-ui, sans-serif" text-anchor="middle">🛒 Grocery</text>

    <rect x="225" y="15" width="95" height="55" rx="12" fill="#111827"/>
    <text x="272" y="47" font-size="12" fill="#cbd5e1" font-family="system-ui, sans-serif" text-anchor="middle">🚕 Transit</text>

    <rect y="82" width="95" height="55" rx="12" fill="#111827"/>
    <text x="47" y="114" font-size="12" fill="#cbd5e1" font-family="system-ui, sans-serif" text-anchor="middle">⚡ Bills</text>

    <rect x="112" y="82" width="95" height="55" rx="12" fill="#111827"/>
    <text x="159" y="114" font-size="12" fill="#cbd5e1" font-family="system-ui, sans-serif" text-anchor="middle">🛍️ Shopping</text>

    <rect x="225" y="82" width="95" height="55" rx="12" fill="#111827"/>
    <text x="272" y="114" font-size="12" fill="#cbd5e1" font-family="system-ui, sans-serif" text-anchor="middle">🎬 Fun</text>
  </g>

  <!-- Keypad Preview -->
  <g transform="translate(20, 385)">
    <rect width="320" height="235" rx="18" fill="#111827"/>
    <!-- Keys 1-9 -->
    <text x="53" y="48" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">1</text>
    <text x="160" y="48" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">2</text>
    <text x="267" y="48" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">3</text>

    <text x="53" y="108" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">4</text>
    <text x="160" y="108" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">5</text>
    <text x="267" y="108" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">6</text>

    <text x="53" y="168" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">7</text>
    <text x="160" y="168" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">8</text>
    <text x="267" y="168" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">9</text>

    <text x="53" y="218" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">.</text>
    <text x="160" y="218" fill="#ffffff" font-size="20" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">0</text>
    <text x="267" y="218" fill="#f87171" font-size="16" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">⌫</text>
  </g>

  <!-- Save Button -->
  <g transform="translate(20, 640)">
    <rect width="320" height="50" rx="14" fill="#10b981"/>
    <text x="160" y="31" fill="#022c22" font-size="15" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle">Save Expense</text>
  </g>

  <!-- Android Gesture Bar -->
  <rect x="130" y="742" width="100" height="4" rx="2" fill="#64748b"/>
</svg>`;
fs.writeFileSync(path.join(dir, 'screen4.svg'), screen4);

console.log('Generated 4 detailed high-resolution screens for ExpenseFlow.');
