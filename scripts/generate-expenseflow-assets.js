import fs from 'fs';
import path from 'path';

const dir = path.resolve('public/images/apps/expense-flow');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Icon SVG
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <linearGradient id="ef-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#0b0f19"/>
  <rect width="126" height="126" x="1" y="1" rx="27" fill="url(#ef-grad)" fill-opacity="0.15" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
  <circle cx="64" cy="64" r="32" fill="#10b981" fill-opacity="0.2"/>
  <path d="M44 64H84M64 44V84" stroke="#34d399" stroke-width="6" stroke-linecap="round"/>
  <path d="M78 50L84 44L78 38" stroke="#34d399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="64" cy="64" r="14" fill="#047857"/>
  <text x="64" y="70" font-size="16" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">$</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'icon.svg'), iconSvg);

// Mock Screen 1 - Daily Spend
const screen1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 640" fill="none">
  <rect width="320" height="640" rx="36" fill="#090d18"/>
  <rect width="316" height="636" x="2" y="2" rx="34" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
  <!-- Status bar -->
  <text x="24" y="28" fill="#94a3b8" font-size="11" font-family="sans-serif" font-weight="600">09:41</text>
  <circle cx="160" cy="24" r="5" fill="#000000"/>
  <!-- App Header -->
  <text x="24" y="75" fill="#ffffff" font-size="20" font-weight="bold" font-family="sans-serif">ExpenseFlow</text>
  <text x="24" y="95" fill="#94a3b8" font-size="12" font-family="sans-serif">Daily Spend Tracker</text>
  <!-- Card -->
  <rect x="20" y="115" width="280" height="110" rx="16" fill="#0f291e" stroke="#10b981" stroke-width="1"/>
  <text x="36" y="145" fill="#9ca3af" font-size="12" font-family="sans-serif">Today's Expenses</text>
  <text x="36" y="180" fill="#ffffff" font-size="28" font-weight="bold" font-family="sans-serif">$48.50</text>
  <text x="36" y="205" fill="#34d399" font-size="11" font-family="sans-serif">3 transactions logged</text>
  <!-- Transactions -->
  <text x="24" y="255" fill="#ffffff" font-size="15" font-weight="bold" font-family="sans-serif">Recent Records</text>
  <rect x="20" y="270" width="280" height="55" rx="12" fill="#141e28"/>
  <text x="36" y="303" fill="#ffffff" font-size="13" font-weight="600" font-family="sans-serif">Lunch & Coffee</text>
  <text x="280" y="303" fill="#f87171" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="end">-$16.50</text>
  <rect x="20" y="335" width="280" height="55" rx="12" fill="#141e28"/>
  <text x="36" y="368" fill="#ffffff" font-size="13" font-weight="600" font-family="sans-serif">Supermarket</text>
  <text x="280" y="368" fill="#f87171" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="end">-$32.00</text>
  <rect x="110" y="622" width="100" height="4" rx="2" fill="#64748b"/>
</svg>`;
fs.writeFileSync(path.join(dir, 'screen1.svg'), screen1);

// Mock Screen 2 - Google Drive Backup & Local Storage
const screen2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 640" fill="none">
  <rect width="320" height="640" rx="36" fill="#090d18"/>
  <rect width="316" height="636" x="2" y="2" rx="34" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
  <text x="24" y="28" fill="#94a3b8" font-size="11" font-family="sans-serif" font-weight="600">09:41</text>
  <circle cx="160" cy="24" r="5" fill="#000000"/>
  <text x="24" y="75" fill="#ffffff" font-size="18" font-weight="bold" font-family="sans-serif">Backup & Storage</text>
  <rect x="20" y="100" width="280" height="150" rx="16" fill="#10202a" stroke="#10b981" stroke-width="1"/>
  <circle cx="60" cy="140" r="18" fill="#10b981" fill-opacity="0.2"/>
  <text x="90" y="137" fill="#ffffff" font-size="14" font-weight="bold" font-family="sans-serif">Local SQLite Storage</text>
  <text x="90" y="155" fill="#9ca3af" font-size="11" font-family="sans-serif">100% on your device</text>
  <rect x="36" y="180" width="248" height="45" rx="10" fill="#142c38"/>
  <text x="50" y="208" fill="#38bdf8" font-size="12" font-family="sans-serif">Google Drive Backup: Active</text>
  <rect x="110" y="622" width="100" height="4" rx="2" fill="#64748b"/>
</svg>`;
fs.writeFileSync(path.join(dir, 'screen2.svg'), screen2);

console.log('ExpenseFlow assets generated.');
