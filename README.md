# platform-dashboard

> **SenshiGuard** - Multi-Site Security Management Portal & Web UI

`platform-dashboard` is the modern frontend web application where users and agencies monitor and manage security across all their WordPress sites.

---

## 🎯 Key Responsibilities
- **Multi-Site Security Overview**: Real-time security score, infection alerts, and update statuses.
- **Detailed Scan Reports**: File-level threat breakdown with visual code diffs and 1-click clean trigger.
- **WAF & Traffic Analytics**: Visual graphs of blocked attacks, brute-force attempts, and bad bots.
- **Vulnerability & Update Manager**: One-click core, plugin, and theme updates across multiple sites.

---

## 🛠 Tech Stack
- **Framework**: Next.js 14/15 (App Router) / React
- **Styling**: Tailwind CSS + Radix UI
- **Icons**: Lucide React
- **State & Data Fetching**: TanStack Query / SWR + Server Actions

---

## 📁 Suggested Directory Structure
```
platform-dashboard/
├── app/
│   ├── (auth)/               # Login / Register pages
│   ├── (dashboard)/
│   │   ├── overview/         # Main security score & site matrix
│   │   ├── sites/            # Site detail, scan trigger, 1-click clean
│   │   ├── firewall/         # WAF logs, blocked IPs, bot filters
│   │   ├── vulnerabilities/  # CVE advisories & patch status
│   │   └── settings/         # API keys, workspace members, billing
│   └── layout.tsx
├── components/               # Reusable UI components
├── lib/                      # API client and formatting utilities
├── styles/
└── README.md
```

---

## 🚀 Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/SenshiGuard/platform-dashboard.git
   cd platform-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.
