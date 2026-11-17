# ATS Labs — Android App Development Studio Website

> **Tagline:** Building Smart Apps for Everyday Life.

A clean, premium, modern, and responsive website for **ATS Labs**, an independent app development studio that designs, engineers, and publishes Android applications on the Google Play Store.

---

## 🌟 What This Base Includes

- **Clean & Focused Aesthetic:** Dark-first design with subtle gradients, glassmorphism, smooth animations, and typography.
- **Data-Driven Architecture:** All application listings, categories, search, and dynamic individual pages (`/apps/:id`) are powered by [src/data/apps.js](file:///c:/Users/akhil/OneDrive/Desktop/ANDROID_PROJECTS/Website/ATS_LABS_WEBSITE/src/data/apps.js).
- **Ready for Published Apps:** Currently set as a clean base. As soon as you publish an app, simply add its information to `apps.js` and it instantly appears across the entire site!
- **Core Studio Pages:**
  - **Home (`/`):** Hero section with floating smartphone mockup, upcoming applications showcase, category overview, studio philosophy, and contact CTA.
  - **Our Apps (`/apps`):** Dynamic directory with real-time search, category filters, and smooth layout animations.
  - **About Us (`/about`):** Studio introduction, vision, mission, and core values.
  - **Contact (`/contact`):** Simple contact form with validation, direct email links, and FAQ.
  - **Privacy Policy (`/privacy`):** Transparent privacy policy ready for Google Play Store compliance.

---

## 🚀 How to Run the Website

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

2. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📱 How to Add Your Apps Once Published

Open [src/data/apps.js](file:///c:/Users/akhil/OneDrive/Desktop/ANDROID_PROJECTS/Website/ATS_LABS_WEBSITE/src/data/apps.js) and add an object to the `APPS` array:

```javascript
export const APPS = [
  {
    id: "my-app",
    name: "My App Name",
    tagline: "Short memorable tagline",
    shortDescription: "A concise summary for catalog cards.",
    description: "Detailed description for the app details page.",
    category: "Productivity", // "Productivity" | "Finance" | "Lifestyle" | "Utilities" | "Entertainment" | "Education" | "Communication"
    icon: "/images/apps/my-app/icon.png",
    screenshots: [
      "/images/apps/my-app/screen1.png",
      "/images/apps/my-app/screen2.png"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME",
    version: "1.0.0",
    lastUpdated: "2026-11-13",
    featured: true, // true to display on homepage
    status: "published",
    features: [
      "Key feature one",
      "Key feature two",
      "Key feature three"
    ],
    privacyPolicy: "/privacy/my-app",
    supportEmail: "support@atslabs.dev"
  }
];
```

**That's it!** The app will automatically appear on the homepage, in the directory, under category filters, in search results, and at its own `/apps/my-app` page.
