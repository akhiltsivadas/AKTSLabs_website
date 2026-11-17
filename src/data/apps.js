/**
 * ATS LABS - CENTRAL APPLICATION DATA SOURCE
 * 
 * Only applications published or listed here appear on the website.
 * Note: 'featured: false' ensures the app only appears in the /apps section
 * and does NOT appear on the home page.
 */

export const APPS = [
  {
    id: "expense-flow",
    name: "Expense flow-Daily Spend Tracker",
    tagline: "Daily Spend Tracker",
    shortDescription: "A simple, offline-first daily spend tracker to monitor expenses, manage categories, and securely back up data to your personal Google Drive.",
    description: "Expense flow-Daily Spend Tracker is an easy-to-use personal expense tracking application created by ATS Labs. Designed for everyday clarity, the core functionality works completely offline so your financial records (transactions, accounts, categories) stay stored locally on your device. It also includes an optional backup feature to keep an encrypted backup file in your own Google Drive.",
    category: "Finance",
    icon: "/images/apps/expense-flow/icon.png",
    badge: "Official Release",
    pricing: "Free / Ad-Supported",
    color: {
      primary: "#10b981",
      secondary: "#047857",
      gradient: "from-emerald-500 to-teal-700",
      glow: "rgba(16, 185, 129, 0.35)",
    },
    screenshots: [
      "/images/apps/expense-flow/screen1.png",
      "/images/apps/expense-flow/screen2.png",
      "/images/apps/expense-flow/screen3.png",
      "/images/apps/expense-flow/screen4.png"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.atslabs.expenseflow",
    packageName: "com.atslabs.expenseflow",
    version: "1.0.0",
    lastUpdated: "2026-11-13",
    size: "8.5 MB",
    minAndroid: "Android 8.0 or higher",
    featured: false, // NOT shown on homepage, ONLY available in apps section
    recentlyAdded: true,
    status: "published",
    features: [
      "Track daily expenses and income in a few taps",
      "Organize spending across categories",
      "Offline-first: Data stored locally on your device",
      "Optional Google Drive backup (expenseflow_backup.json)",
      "Clean, modern, and simple interface",
      "Free to use with AdMob support",
    ],
    privacyPolicy: "/privacy/expense-flow",
    supportEmail: "akhiltsivadas@gmail.com",
    privacyPolicyData: {
      title: "Privacy Policy for ExpenseTracker",
      content: `ATS Labs built the ExpenseTracker app as a Free/Ad-Supported app. This SERVICE is provided by ATS Labs at no cost and is intended for use as is.

Information Collection and Use
The core functionality of ExpenseTracker works offline. Your financial data (transactions, accounts, categories) is stored locally on your device. We (the developers) do not collect, transmit, or have access to your personal financial data.

Google Drive Backup
The app offers an optional backup feature using Google Drive. If you choose to use this feature, the app will request access to your Google Account.
• The app only uses this access to read and write a specific backup file (expenseflow_backup.json) to your personal Google Drive.
• We (the developers) cannot see, access, or collect this data. It remains entirely under your control.

Third-Party Services (Advertisements)
The app uses third-party services that may collect information used to identify you. We use Google AdMob to display advertisements. AdMob may collect your device's Advertising ID and IP address to serve personalized or non-personalized ads. Link to privacy policy of third party service providers used by the app:
• Google Play Services: https://www.google.com/policies/privacy/
• AdMob: https://support.google.com/admob/answer/6128543

Changes to This Privacy Policy
We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes.

Contact Us
If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at akhiltsivadas@gmail.com.`
    }
  }
];

// Helper functions
export const getFeaturedApps = () => APPS.filter(app => app.featured);
export const getRecentApps = () => APPS.filter(app => app.recentlyAdded);
export const getAppById = (id) => APPS.find(app => app.id === id || app.id === id?.toLowerCase());
export const getAppsByCategory = (category) => {
  if (!category || category === 'All') return APPS;
  return APPS.filter(app => app.category.toLowerCase() === category.toLowerCase());
};
export const searchApps = (query) => {
  if (!query) return APPS;
  const q = query.toLowerCase().trim();
  return APPS.filter(app => 
    app.name.toLowerCase().includes(q) ||
    app.tagline.toLowerCase().includes(q) ||
    app.description.toLowerCase().includes(q) ||
    app.category.toLowerCase().includes(q) ||
    (app.features && app.features.some(f => f.toLowerCase().includes(q)))
  );
};
