import { Platform } from '../types';

export const PLATFORMS_DATA: Platform[] = [
  // 1. Website Builders
  {
    id: 'wordpress',
    name: 'WordPress',
    tagline: 'The world’s most popular open-source content management system and website creator',
    category: 'website-builders',
    categoryName: 'Website Builders',
    specializesIn: 'CMS-driven websites, blogging portals, university magazines, and customizable themes',
    canBuild: [
      'Department / College event portals',
      'Student blogging & tech magazine sites',
      'Alumni directory & student placement records',
      'E-commerce store with WooCommerce'
    ],
    difficulty: 'Beginner',
    pricing: 'Free',
    pricingDetails: 'Free & open-source software (WordPress.org); free tier available on WordPress.com.',
    officialUrl: 'https://wordpress.org',
    docsUrl: 'https://wordpress.org/documentation/',
    studentPerk: 'Thousands of free themes and plugins; hosted free on many student hosting credits',
    bestForProjectStage: '1st/2nd Year Mini Project',
    popularForViva: 'Excellent for demonstrating client-side CMS, database-driven content (MySQL), and SEO optimization.',
    prosForStudents: [
      'Huge community support and tutorials',
      'No initial coding required to launch a working site',
      'Can inspect PHP/MySQL source code for academic viva'
    ],
    sampleProjectIdeas: [
      'Campus News & Technical Magazine Portal',
      'E-Library Book Reservation System with WooCommerce'
    ]
  },
  {
    id: 'webflow',
    name: 'Webflow',
    tagline: 'Visual web design platform that generates clean, semantic HTML5, CSS3, and JavaScript',
    category: 'website-builders',
    categoryName: 'Website Builders',
    specializesIn: 'Production-ready responsive visual design, interactions, and CMS integration without manual CSS',
    canBuild: [
      'Interactive student portfolio and CV',
      'College cultural fest / Hackathon landing page',
      'Startup pitch landing page for incubation projects',
      'Interactive product design showcase'
    ],
    difficulty: 'Intermediate',
    pricing: 'Free Tier',
    pricingDetails: 'Free Starter plan (2 pages, 50 CMS items, webflow.io subdomain). 100% Free CMS site for students for 1 year via Webflow for Education.',
    officialUrl: 'https://webflow.com',
    docsUrl: 'https://university.webflow.com',
    studentPerk: 'Free 1-year CMS site plan for verified students via Webflow Classroom program',
    bestForProjectStage: 'Club / Campus Fest Site',
    popularForViva: 'Teaches real CSS box model, Flexbox, and CSS Grid visually, giving students strong UI fundamentals.',
    prosForStudents: [
      'Exports clean semantic code',
      'Micro-interactions and scroll animations without JavaScript libraries',
      'Industry-standard tool used by top design agencies'
    ],
    sampleProjectIdeas: [
      'Annual Technical Symposium Fest Website',
      'Interactive Senior Design Capstone Portfolio'
    ]
  },
  {
    id: 'framer',
    name: 'Framer',
    tagline: 'Fast design-to-live website builder with Figma-like canvas and smooth animations',
    category: 'website-builders',
    categoryName: 'Website Builders',
    specializesIn: 'High-speed visual website creation, sleek SaaS landing pages, and interactive prototypes',
    canBuild: [
      'Modern engineer portfolio with dark mode & animations',
      'College tech club landing page',
      'Project showcase with video embeds and live previews',
      'Event registration and agenda showcase'
    ],
    difficulty: 'Beginner',
    pricing: 'Free Tier',
    pricingDetails: 'Free plan with Framer banner & subdomain. Special discounts available for students and educators.',
    officialUrl: 'https://www.framer.com',
    docsUrl: 'https://www.framer.com/learn/',
    studentPerk: 'Free tier with custom component support (React code components)',
    bestForProjectStage: 'Portfolio & Resume',
    popularForViva: 'Can embed custom React components directly into canvas, bridging visual design and frontend coding.',
    prosForStudents: [
      'Paste designs directly from Figma',
      'Fast global CDN publishing in seconds',
      'Native support for React code components'
    ],
    sampleProjectIdeas: [
      'Developer Resume with Interactive Project Demos',
      'Robotics Club Annual Exhibition Website'
    ]
  },
  {
    id: 'wix',
    name: 'Wix & Wix Studio',
    tagline: 'Drag-and-drop website builder with built-in database collections and Velo JavaScript engine',
    category: 'website-builders',
    categoryName: 'Website Builders',
    specializesIn: 'Intuitive drag-and-drop web creation, built-in forms, booking, and custom JavaScript via Velo',
    canBuild: [
      'Campus club membership registration system',
      'College canteen online menu & pre-order page',
      'Mini project showcase website',
      'Alumni mentorship booking portal'
    ],
    difficulty: 'Beginner',
    pricing: 'Free Tier',
    pricingDetails: 'Free plan with Wix branding and free subdomain. 50% student discounts frequently available.',
    officialUrl: 'https://www.wix.com',
    docsUrl: 'https://support.wix.com',
    studentPerk: 'Student discount programs via Student Beans',
    bestForProjectStage: '1st/2nd Year Mini Project',
    popularForViva: 'Great for rapid mockups and demonstrating full web hosting lifecycle without server setup.',
    prosForStudents: [
      'Over 900+ ready-to-use templates',
      'Zero terminal/command-line setup',
      'Velo API allows writing custom JavaScript when needed'
    ],
    sampleProjectIdeas: [
      'Department Sports Meet Scheduling System',
      'Campus Lost & Found Notice Board'
    ]
  },
  {
    id: 'carrd',
    name: 'Carrd',
    tagline: 'Lightweight, ultra-fast single-page website builder',
    category: 'website-builders',
    categoryName: 'Website Builders',
    specializesIn: 'Single-page responsive websites, personal bio links, and quick event landing pages',
    canBuild: [
      'Personal developer portfolio / link in bio',
      'Hackathon project submission pitch page',
      'Paper presentation abstract showcase',
      'Product pre-launch teaser page'
    ],
    difficulty: 'Beginner',
    pricing: 'Free Tier',
    pricingDetails: 'Free plan permits up to 3 core sites with core features and carrd.co URL.',
    officialUrl: 'https://carrd.co',
    docsUrl: 'https://carrd.co/docs',
    studentPerk: 'Very cheap Pro tier ($19/year) or free basic tier for quick projects',
    bestForProjectStage: 'Portfolio & Resume',
    popularForViva: 'Shows understanding of responsive single-page architecture (SPA) and minimal payload.',
    prosForStudents: [
      'Build and publish a site in under 15 minutes',
      'Zero server maintenance',
      'Loads under 1 second on mobile networks'
    ],
    sampleProjectIdeas: [
      'BTech Final Year Student Portfolio & GitHub Links',
      'Inter-College Hackathon Team Pitch Page'
    ]
  },
  {
    id: 'google-sites',
    name: 'Google Sites',
    tagline: 'Simple collaborative website tool integrated with Google Workspace and Drive',
    category: 'website-builders',
    categoryName: 'Website Builders',
    specializesIn: 'Intranet pages, team documentation, lab reports, and Google Drive file integration',
    canBuild: [
      'BTech lab project documentation & report repository',
      'College department faculty & syllabus hub',
      'Study group shared resource library',
      'Capstone project progress tracking site'
    ],
    difficulty: 'Beginner',
    pricing: 'Free',
    pricingDetails: '100% Free with any personal or institutional Google (@college.edu) account.',
    officialUrl: 'https://sites.google.com',
    docsUrl: 'https://support.google.com/sites',
    studentPerk: 'Completely free with unlimited storage linked to institutional Google Workspace',
    bestForProjectStage: '1st/2nd Year Mini Project',
    popularForViva: 'Safe, reliable platform for presenting project documentation and linking live Google Sheets/Slides to professors.',
    prosForStudents: [
      '100% free with college email',
      'Embed Google Docs, Sheets, Forms, and Drive files natively',
      'Real-time team collaboration like Google Docs'
    ],
    sampleProjectIdeas: [
      'Engineering Physics & Chemistry Virtual Lab Guide',
      'Mini Project Weekly Progress Report Portal'
    ]
  },

  // 2. No-Code & Low-Code Platforms
  {
    id: 'bubble',
    name: 'Bubble',
    tagline: 'Powerful visual full-stack web application builder with relational database and logic workflows',
    category: 'nocode-lowcode',
    categoryName: 'No-Code / Low-Code',
    specializesIn: 'Complex web applications, database CRUD operations, user authentication, and API integrations',
    canBuild: [
      'Full-fledged Campus Marketplace (Buy/Sell college books & drafters)',
      'Hostel grievance & room maintenance tracker',
      'College placement cell job application portal with resume parsing',
      'Peer-to-peer tutoring booking platform'
    ],
    difficulty: 'Intermediate',
    pricing: 'Free Tier',
    pricingDetails: 'Free plan for learning, building, and testing with Bubble branding and core features.',
    officialUrl: 'https://bubble.io',
    docsUrl: 'https://manual.bubble.io',
    studentPerk: 'Bubble for Education offers discounts and classroom resources for engineering colleges',
    bestForProjectStage: 'Final Year Capstone',
    popularForViva: 'Demonstrates real relational database concepts, primary keys, foreign relations, workflows, and third-party REST API calls.',
    prosForStudents: [
      'Build fully working SaaS without writing backend code',
      'Built-in user auth, database security rules, and file uploads',
      'API Connector allows connecting Python ML/Flask backends'
    ],
    sampleProjectIdeas: [
      'Campus Ride-Sharing & Auto Pooling System',
      'Automated College Event Management & Ticket QR Scanner'
    ]
  },
  {
    id: 'flutterflow',
    name: 'FlutterFlow',
    tagline: 'Visual app builder based on Google Flutter that exports real, clean Flutter/Dart source code',
    category: 'nocode-lowcode',
    categoryName: 'No-Code / Low-Code',
    specializesIn: 'Native iOS & Android mobile apps, clean Flutter code export, and Firebase integration',
    canBuild: [
      'College campus navigation & room finder app',
      'Student attendance tracker with GPS geofencing',
      'Smart Canteen ordering mobile app with UPI integration',
      'Blood donation matching mobile app'
    ],
    difficulty: 'Intermediate',
    pricing: 'Free Tier',
    pricingDetails: 'Generous Free tier for building and testing. Student discount available for code export.',
    officialUrl: 'https://flutterflow.io',
    docsUrl: 'https://docs.flutterflow.io',
    studentPerk: 'Discounted student plans via Student pack; exports valid Dart code for GitHub commits',
    bestForProjectStage: 'Final Year Capstone',
    popularForViva: 'Directly addresses project viva requirements: you can export the exact Dart/Flutter codebase and show Git commits to evaluators.',
    prosForStudents: [
      'Exports production-grade Flutter code',
      'One-click integration with Google Firebase & Supabase',
      'Publishes to Web, Android APK, and iOS'
    ],
    sampleProjectIdeas: [
      'Smart College Bus Tracking App with Real-time GPS',
      'Campus Mental Health & Anonymous Peer Support App'
    ]
  },
  {
    id: 'retool',
    name: 'Retool',
    tagline: 'Low-code platform for building fast internal business tools, dashboards, and database GUIs',
    category: 'nocode-lowcode',
    categoryName: 'No-Code / Low-Code',
    specializesIn: 'Internal admin portals, PostgreSQL/MySQL CRUD GUIs, API testing interfaces, and operations dashboards',
    canBuild: [
      'Department Admin dashboard for student attendance and marks',
      'College Placement Cell recruitment drive tracker',
      'Lab equipment borrowing and inventory manager',
      'IoT Sensor monitoring dashboard with charts and triggers'
    ],
    difficulty: 'Intermediate',
    pricing: 'Free Tier',
    pricingDetails: 'Free plan for up to 5 users with unlimited apps and database connections.',
    officialUrl: 'https://retool.com',
    docsUrl: 'https://docs.retool.com',
    studentPerk: 'Connects directly to student free databases (Neon, Supabase, Cloud SQL)',
    bestForProjectStage: 'Final Year Capstone',
    popularForViva: 'Shows enterprise-grade internal tooling architecture, SQL query binding, and role-based access control (RBAC).',
    prosForStudents: [
      'Write plain SQL queries and bind directly to UI tables',
      'Pre-built charts, tables, forms, and modals',
      'Saves weeks of frontend coding for backend-heavy projects'
    ],
    sampleProjectIdeas: [
      'College Examination Branch Grade Processing & Verification System',
      'Hospital Patient Monitoring System (IoT + Database)'
    ]
  },
  {
    id: 'appsmith',
    name: 'Appsmith',
    tagline: 'Open-source low-code software for building internal tools, portals, and database dashboards',
    category: 'nocode-lowcode',
    categoryName: 'No-Code / Low-Code',
    specializesIn: 'Self-hosted internal portals, open-source dashboard development, and JavaScript-powered workflows',
    canBuild: [
      'Hostel Mess billing and attendance management portal',
      'Department Library automation dashboard',
      'Student feedback and faculty evaluation analyzer',
      'Smart campus electricity consumption monitor'
    ],
    difficulty: 'Intermediate',
    pricing: 'Free',
    pricingDetails: '100% Free Open-Source Community edition (self-hosted via Docker) or free cloud tier.',
    officialUrl: 'https://www.appsmith.com',
    docsUrl: 'https://docs.appsmith.com',
    studentPerk: 'Can be self-hosted on a local BTech college lab server or free cloud VM for 0 cost',
    bestForProjectStage: 'Final Year Capstone',
    popularForViva: 'Excellent for demonstrating Docker containerization, open-source architecture, and REST/GraphQL queries.',
    prosForStudents: [
      'Completely open-source, no vendor lock-in',
      'Write custom JS functions for complex data manipulation',
      'Native Git integration for version control'
    ],
    sampleProjectIdeas: [
      'University Department Asset & Lab Equipment Tracking System',
      'Student Internship Application & Review Management Portal'
    ]
  },
  {
    id: 'glide',
    name: 'Glide',
    tagline: 'Turn Google Sheets and Excel files into beautiful, functional mobile and web apps in minutes',
    category: 'nocode-lowcode',
    categoryName: 'No-Code / Low-Code',
    specializesIn: 'Spreadsheet-powered apps, rapid prototyping, inventory lists, and mobile directory apps',
    canBuild: [
      'College campus faculty and staff contact directory',
      'Annual cultural fest schedule & live score updater',
      'Class study notes & PDF link directory',
      'College sports tournament fixture and leaderboard app'
    ],
    difficulty: 'Beginner',
    pricing: 'Free Tier',
    pricingDetails: 'Free plan with up to 1 published app and Glide tables/Google Sheets connection.',
    officialUrl: 'https://www.glideapps.com',
    docsUrl: 'https://learn.glideapps.com',
    studentPerk: 'Works with any free Google Sheet without requiring database setup',
    bestForProjectStage: '1st/2nd Year Mini Project',
    popularForViva: 'Ideal for rapid prototyping during 24-hr hackathons where building a full DB backend is overkill.',
    prosForStudents: [
      'Anyone who knows Google Sheets can build an app',
      'Looks polished on both iOS and Android browsers (PWA)',
      'Zero deployment hassle'
    ],
    sampleProjectIdeas: [
      'Inter-College Sports Fest Live Fixtures & Scoring App',
      'Campus Shuttle / Bus Timings & Stop Finder'
    ]
  },

  // 3. AI Website & App Builders
  {
    id: 'v0-vercel',
    name: 'v0 by Vercel',
    tagline: 'Generative AI platform that creates React, Next.js, and Tailwind CSS components from text prompts',
    category: 'ai-builders',
    categoryName: 'AI Website Builders',
    specializesIn: 'Prompt-to-React UI generation, modern Tailwind styling, and shadcn/ui component generation',
    canBuild: [
      'Modern SaaS dashboard UI for your BTech project',
      'AI-powered resume reviewer web interface',
      'Smart Healthcare analytics patient dashboard',
      'Interactive quiz and examination UI'
    ],
    difficulty: 'Beginner',
    pricing: 'Free Tier',
    pricingDetails: 'Free plan includes recurring monthly AI generation credits.',
    officialUrl: 'https://v0.dev',
    docsUrl: 'https://v0.dev/faq',
    studentPerk: 'Generates real TypeScript + Tailwind code you can copy straight into Next.js projects',
    bestForProjectStage: 'Hackathon Prototype',
    popularForViva: 'Evaluators love clean, modern UI components. v0 generates standard accessible Tailwind code instead of proprietary lock-in.',
    prosForStudents: [
      'Outputs clean React + Tailwind CSS code',
      'Direct one-click export to CodeSandbox, StackBlitz, or GitHub',
      'Drastically speeds up hackathon UI development'
    ],
    sampleProjectIdeas: [
      'Smart Agriculture Crop Disease Detection UI (connected to Python backend)',
      'Student Finance & Expense Tracker Dashboard'
    ]
  },
  {
    id: 'lovable',
    name: 'Lovable',
    tagline: 'Full-stack AI app engineer that builds web apps with Supabase backend and GitHub synchronization',
    category: 'ai-builders',
    categoryName: 'AI Website Builders',
    specializesIn: 'End-to-end full-stack web applications with database schemas, auth, and automated GitHub commits',
    canBuild: [
      'Full-stack social networking platform for college students',
      'Alumni-student mentorship matching platform',
      'Automated hackathon team forming and project submission platform',
      'College lost-and-found portal with image uploads'
    ],
    difficulty: 'Intermediate',
    pricing: 'Free Tier',
    pricingDetails: 'Free trial tier with daily generation credits; integrates with free Supabase projects.',
    officialUrl: 'https://lovable.dev',
    docsUrl: 'https://docs.lovable.dev',
    studentPerk: 'Pushes code directly into your personal GitHub repository for proof of work',
    bestForProjectStage: 'Hackathon Prototype',
    popularForViva: 'Provides a complete GitHub repository with readable React/Vite/Supabase code for submission.',
    prosForStudents: [
      'Configures backend database and authentication automatically',
      'Syncs with real GitHub repositories',
      'Great for rapid MVP testing during hackathons'
    ],
    sampleProjectIdeas: [
      'Automated College Hostel Roommate Compatibility Matcher',
      'Peer-to-Peer Campus Used Book Exchange with Supabase'
    ]
  },
  {
    id: 'bolt-new',
    name: 'Bolt.new',
    tagline: 'In-browser AI full-stack development environment powered by WebContainers',
    category: 'ai-builders',
    categoryName: 'AI Website Builders',
    specializesIn: 'Full-stack Node.js, Vite, Next.js, and database prototyping entirely inside the browser',
    canBuild: [
      'Real-time chat and collaboration board',
      'Machine learning model showcase playground with API routes',
      'College festival registration and e-ticket generation site',
      'Online code compiler and practice interface'
    ],
    difficulty: 'Intermediate',
    pricing: 'Free Tier',
    pricingDetails: 'Free tier with daily tokens for prompt execution and full in-browser runtime.',
    officialUrl: 'https://bolt.new',
    docsUrl: 'https://bolt.new',
    studentPerk: 'Runs real Node.js packages in browser without needing local npm/Node installation',
    bestForProjectStage: 'Hackathon Prototype',
    popularForViva: 'Runs full stack inside browser (WebContainers), allowing live demos without server setup.',
    prosForStudents: [
      'Installs real npm packages right in the browser',
      'One-click deploy to Netlify or GitHub',
      'Inspect and edit any file in the generated file tree'
    ],
    sampleProjectIdeas: [
      'Interactive Algorithm Visualizer for Data Structures (DSA)',
      'Voice-Activated College Helper Assistant'
    ]
  },
  {
    id: 'durable',
    name: 'Durable AI',
    tagline: 'AI website builder that generates a complete website with copy, images, and contact forms in 30 seconds',
    category: 'ai-builders',
    categoryName: 'AI Website Builders',
    specializesIn: 'Instant business and portfolio generation, AI copywriting, and basic CRM forms',
    canBuild: [
      'Student freelance portfolio & consulting website',
      'College tech symposium sponsor showcase',
      'College entrepreneurship cell (E-Cell) startup showcase',
      'Local business digital transformation project'
    ],
    difficulty: 'Beginner',
    pricing: 'Free Tier',
    pricingDetails: 'Free trial to generate and test sites. Paid plans for custom domains.',
    officialUrl: 'https://durable.co',
    docsUrl: 'https://durable.co/blog',
    studentPerk: 'Super fast generator for non-technical team members in multidisciplinary projects',
    bestForProjectStage: '1st/2nd Year Mini Project',
    popularForViva: 'Demonstrates prompt-to-website generation and AI marketing automation.',
    prosForStudents: [
      'Fastest generation time (under 1 minute)',
      'Includes AI-generated copy and stock photos',
      'Built-in analytics and lead capture form'
    ],
    sampleProjectIdeas: [
      'Local Small Business Digitization Mini Project',
      'Student Freelancer Services Portal'
    ]
  },
  {
    id: 'relume',
    name: 'Relume',
    tagline: 'AI sitemap and wireframe builder for Figma and Webflow web projects',
    category: 'ai-builders',
    categoryName: 'AI Website Builders',
    specializesIn: 'AI website architecture, sitemaps, wireframing, and component copy planning',
    canBuild: [
      'Comprehensive university department website architecture',
      'E-governance portal information architecture & wireframe',
      'Healthcare portal UX/UI case study design',
      'Large-scale college ERP portal sitemap'
    ],
    difficulty: 'Beginner',
    pricing: 'Free Tier',
    pricingDetails: 'Free plan with 1 project sitemap and 1 wireframe generation.',
    officialUrl: 'https://www.relume.io',
    docsUrl: 'https://library.relume.io',
    studentPerk: 'Exports wireframes straight to Figma for college UI/UX project submissions',
    bestForProjectStage: 'Final Year Capstone',
    popularForViva: 'Crucial for Systems Analysis and Design (SAD) or Software Engineering (SE) documentation phases.',
    prosForStudents: [
      'Generates entire site sitemap in one prompt',
      'Creates detailed wireframes with component layouts',
      'Direct copy-paste to Figma and Webflow'
    ],
    sampleProjectIdeas: [
      'Smart Smart City Portal Information Architecture & Wireframes',
      'Autonomous College Curriculum & Credit Portal UX Study'
    ]
  },

  // 4. App Development Platforms
  {
    id: 'react-native-expo',
    name: 'React Native + Expo',
    tagline: 'Cross-platform mobile app framework powered by React and JavaScript/TypeScript',
    category: 'app-dev',
    categoryName: 'App Development Platforms',
    specializesIn: 'Cross-platform native iOS & Android applications using standard React and web skills',
    canBuild: [
      'College campus social feed and noticeboard app',
      'Smart attendance tracker with Bluetooth beacon / QR scanner',
      'Campus food delivery and canteen ordering app',
      'Women safety SOS alert app with live location SMS'
    ],
    difficulty: 'Intermediate',
    pricing: 'Free',
    pricingDetails: '100% Free and open source. Expo Application Services (EAS) has a free tier for builds.',
    officialUrl: 'https://expo.dev',
    docsUrl: 'https://docs.expo.dev',
    studentPerk: 'Test apps immediately on your own physical smartphone via Expo Go app with zero Apple/Google developer fees',
    bestForProjectStage: 'Final Year Capstone',
    popularForViva: 'High marks in viva: uses React ecosystem, native bridges, mobile hardware sensors (Camera, GPS, Accelerometer), and cross-platform architecture.',
    prosForStudents: [
      'One single codebase runs on both Android and iOS',
      'Instant hot-reloading on physical devices via QR code',
      'Easiest way for web developers to enter mobile app dev'
    ],
    sampleProjectIdeas: [
      'Campus SOS Emergency Alert App with GPS & Background Service',
      'Automated Classroom Attendance via Dynamic Rolling QR Code'
    ]
  },
  {
    id: 'flutter',
    name: 'Flutter (by Google)',
    tagline: 'Google’s multi-platform UI toolkit compiled to native ARM machine code from Dart',
    category: 'app-dev',
    categoryName: 'App Development Platforms',
    specializesIn: 'High-performance pixel-perfect mobile, desktop, and web apps from a single codebase',
    canBuild: [
      'College LMS (Learning Management System) mobile app',
      'Healthcare telemedicine consultation app',
      'Real-time IoT smart home hardware controller via BLE/MQTT',
      'Student expense manager and budget tracker'
    ],
    difficulty: 'Intermediate',
    pricing: 'Free',
    pricingDetails: '100% Free, open source, backed by Google.',
    officialUrl: 'https://flutter.dev',
    docsUrl: 'https://docs.flutter.dev',
    studentPerk: 'Free Google developer documentation, Codelabs, and community packages on pub.dev',
    bestForProjectStage: 'Final Year Capstone',
    popularForViva: 'Favored by university professors because it teaches object-oriented Dart, reactive state management (Provider/Bloc), and native compilation.',
    prosForStudents: [
      'Smooth 60fps / 120fps animations out of the box',
      'Rich catalog of Material 3 and Cupertino widgets',
      'Compiles to Android APK, iOS, Web, Windows, and Linux'
    ],
    sampleProjectIdeas: [
      'IoT-Based Smart Agriculture Mobile App with MQTT Telemetry',
      'College Placement Training & Aptitude Quiz App'
    ]
  },
  {
    id: 'firebase-platform',
    name: 'Google Firebase',
    tagline: 'Complete mobile and web app development platform with real-time database, auth, and hosting',
    category: 'app-dev',
    categoryName: 'App Development Platforms',
    specializesIn: 'NoSQL Firestore database, user authentication (Google Sign-In, Email), Cloud Functions, and push notifications',
    canBuild: [
      'Real-time peer chat and discussion forum',
      'Live GPS college bus location broadcaster',
      'Multiplayer campus trivia game with live leaderboard',
      'Push notification dispatch system for college alerts'
    ],
    difficulty: 'Beginner',
    pricing: 'Free Tier',
    pricingDetails: 'Generous Spark Plan (Free forever) with 1GB storage, 50k reads/day, and free auth.',
    officialUrl: 'https://firebase.google.com',
    docsUrl: 'https://firebase.google.com/docs',
    studentPerk: 'Free hosting with SSL, free Google Authentication, and 50k daily Firestore queries',
    bestForProjectStage: 'Final Year Capstone',
    popularForViva: 'Provides cloud computing, WebSocket-like real-time sync, and security rules without server ops.',
    prosForStudents: [
      'Zero backend server provisioning required',
      'One-line Google / Email authentication setup',
      'Real-time data synchronization across all devices'
    ],
    sampleProjectIdeas: [
      'Campus Emergency Alert System with Real-Time Push Notifications',
      'Collaborative Whiteboard & Study Room with Live Sync'
    ]
  },
  {
    id: 'mit-app-inventor',
    name: 'MIT App Inventor',
    tagline: 'Visual block-based Android app development platform developed by MIT',
    category: 'app-dev',
    categoryName: 'App Development Platforms',
    specializesIn: 'Block programming, beginner mobile development, IoT sensors, and Bluetooth microcontrollers',
    canBuild: [
      'Arduino / ESP32 Bluetooth robot controller app',
      'Simple voice-to-text notes taker app',
      'College bell timer and reminder notification app',
      'Accelerometer-based fall detection alarm'
    ],
    difficulty: 'Beginner',
    pricing: 'Free',
    pricingDetails: '100% Free and open-source project by MIT Education.',
    officialUrl: 'https://appinventor.mit.edu',
    docsUrl: 'https://appinventor.mit.edu/explore/ai2/tutorials',
    studentPerk: 'Completely free for students and schools worldwide',
    bestForProjectStage: '1st/2nd Year Mini Project',
    popularForViva: 'Extremely popular for 1st/2nd year ECE/EEE/CSE microcontroller interfacing and IoT projects.',
    prosForStudents: [
      'No complex syntax errors (block-based visual logic)',
      'Direct Bluetooth serial communication with Arduino/ESP32',
      'Generates ready-to-install Android .APK files instantly'
    ],
    sampleProjectIdeas: [
      'Smartphone-Controlled Home Automation System via Bluetooth & Arduino',
      'Senior Citizen Emergency Shake & Fall Detector'
    ]
  },
  {
    id: 'android-studio-kotlin',
    name: 'Android Studio & Kotlin',
    tagline: 'Official IDE and modern language for native Android mobile applications',
    category: 'app-dev',
    categoryName: 'App Development Platforms',
    specializesIn: 'Native Android OS development, Jetpack Compose UI, Room DB, and background services',
    canBuild: [
      'Deep hardware integration apps (Camera2 API, NFC, Biometrics)',
      'Offline-first student attendance and gradebook app with Room DB',
      'AI on-device vision scanner with TensorFlow Lite',
      'Automated background call/SMS campus emergency dispatcher'
    ],
    difficulty: 'Advanced',
    pricing: 'Free',
    pricingDetails: '100% Free open-source IDE by Google and JetBrains.',
    officialUrl: 'https://developer.android.com/studio',
    docsUrl: 'https://developer.android.com/docs',
    studentPerk: 'Official Google certifications and free Android development courses for college students',
    bestForProjectStage: 'Final Year Capstone',
    popularForViva: 'Top marks for traditional engineering viva: strictly native Android architecture, MVVM pattern, coroutines, and Jetpack Compose.',
    prosForStudents: [
      'Access to 100% of Android OS APIs and low-level hardware',
      'Jetpack Compose allows declarative modern UI development',
      'Highest value on engineering resumes for Android developer roles'
    ],
    sampleProjectIdeas: [
      'Biometric Face Recognition Student Attendance with On-Device ML',
      'NFC-Based Smart Campus Identity & Library Card System'
    ]
  },

  // 5. Coding Platforms & Full-Stack Development
  {
    id: 'nextjs-react',
    name: 'Next.js & React',
    tagline: 'The industry-standard React framework for production full-stack web applications',
    category: 'coding-platforms',
    categoryName: 'Coding Platforms',
    specializesIn: 'Server-side rendering (SSR), API routes, full-stack React development, and SEO optimization',
    canBuild: [
      'College ERP & Student Information System (SIS)',
      'Automated Online Coding Judge & Test Platform',
      'Campus Placement Portal with Resume Parser & Interview Scheduler',
      'AI Research Paper Summarizer & Collaboration Hub'
    ],
    difficulty: 'Advanced',
    pricing: 'Free',
    pricingDetails: '100% Free and open-source framework created by Vercel.',
    officialUrl: 'https://nextjs.org',
    docsUrl: 'https://nextjs.org/docs',
    studentPerk: 'Deploys for free on Vercel with automatic SSL and previews',
    bestForProjectStage: 'Final Year Capstone',
    popularForViva: 'The gold standard for modern web engineering viva. Explains SSR, SSG, Server Actions, REST/GraphQL APIs, and database connectivity.',
    prosForStudents: [
      'Write both frontend React and backend API routes in one project',
      'Most requested web framework in campus placements and software job interviews',
      'Huge ecosystem of libraries (Tailwind, Prisma, NextAuth)'
    ],
    sampleProjectIdeas: [
      'Online Code Evaluation & Plagiarism Detection System for BTech Labs',
      'Decentralized Student Credential Verification on Web'
    ]
  },
  {
    id: 'github-pages-codespaces',
    name: 'GitHub Pages & Codespaces',
    tagline: 'Cloud-hosted dev environments and free static web hosting directly from Git repositories',
    category: 'coding-platforms',
    categoryName: 'Coding Platforms',
    specializesIn: 'Git version control, instant in-browser VS Code development, and free static website hosting',
    canBuild: [
      'Student developer portfolio hosted at yourname.github.io',
      'Open-source project documentation with Markdown',
      'Interactive JavaScript browser games and physics simulations',
      'Frontend HTML/CSS/JS college mini-projects'
    ],
    difficulty: 'Beginner',
    pricing: 'Free with Student Pack',
    pricingDetails: 'GitHub Pages is 100% free for public repositories. Codespaces includes free monthly hours.',
    officialUrl: 'https://pages.github.com',
    docsUrl: 'https://docs.github.com/en/pages',
    studentPerk: 'GitHub Student Developer Pack provides free GitHub Pro, Codespaces hours, and dozens of partner tools',
    bestForProjectStage: 'Portfolio & Resume',
    popularForViva: 'Viva evaluators check your GitHub commit history, README.md, and live demo link. Having a .github.io link proves technical literacy.',
    prosForStudents: [
      'Code from any laptop (even low-spec college lab PCs) using Codespaces',
      'Every push to main branch automatically updates the live website',
      'Establishes your professional GitHub profile for recruiters'
    ],
    sampleProjectIdeas: [
      'Engineering Mathematics & Physics Interactive Simulation Lab',
      'Personal Technical Resume & Open-Source Project Portfolio'
    ]
  },
  {
    id: 'vercel-platform',
    name: 'Vercel',
    tagline: 'Frontend cloud platform providing seamless deployment, preview URLs, and serverless functions',
    category: 'coding-platforms',
    categoryName: 'Coding Platforms',
    specializesIn: 'Zero-configuration deployment for React, Next.js, Vue, Svelte, Vite, and serverless backends',
    canBuild: [
      'Live deployment URL for any hackathon project in 30 seconds',
      'Serverless API proxy for machine learning models',
      'Team collaborative prototype with preview URLs for every pull request',
      'Full-stack graduation capstone web application'
    ],
    difficulty: 'Beginner',
    pricing: 'Free Tier',
    pricingDetails: 'Hobby plan is 100% free for non-commercial and personal student projects.',
    officialUrl: 'https://vercel.com',
    docsUrl: 'https://vercel.com/docs',
    studentPerk: 'Free SSL certificates, global edge CDN, and unlimited automatic preview deployments',
    bestForProjectStage: 'Hackathon Prototype',
    popularForViva: 'Gives your project a clean, reliable `.vercel.app` URL to write on your project report cover page and demo during viva.',
    prosForStudents: [
      'Just connect your GitHub repository and it deploys automatically',
      'Provides instantaneous build logs to debug compilation errors',
      'Free serverless Edge functions for lightweight backend APIs'
    ],
    sampleProjectIdeas: [
      'Live Hackathon Web Application with Continuous Deployment',
      'Smart College Canteen Online Food Token Dispenser'
    ]
  },
  {
    id: 'replit',
    name: 'Replit',
    tagline: 'Collaborative cloud development environment to code, build, and deploy apps in 50+ languages',
    category: 'coding-platforms',
    categoryName: 'Coding Platforms',
    specializesIn: 'In-browser multiplayer coding, Python Flask/Django backends, Discord bots, and instant hosting',
    canBuild: [
      'Python Flask/FastAPI REST backend for machine learning models',
      'College club Discord/Telegram automated notification bot',
      'Live collaborative multiplayer coding workspace',
      'Full-stack Node.js or Python student projects'
    ],
    difficulty: 'Beginner',
    pricing: 'Free Tier',
    pricingDetails: 'Free Starter tier with in-browser editor and public Repls.',
    officialUrl: 'https://replit.com',
    docsUrl: 'https://docs.replit.com',
    studentPerk: 'Free access through GitHub Student Developer Pack and educational perks',
    bestForProjectStage: '1st/2nd Year Mini Project',
    popularForViva: 'Allows students with low-end laptops to run Python, Java, C++, and Node.js without installing compilers locally.',
    prosForStudents: [
      'Zero local setup: runs on Chromebooks, tablets, or old lab PCs',
      'Multiplayer mode allows project group partners to code together live',
      'Hosts Python scripts and Web servers with one click'
    ],
    sampleProjectIdeas: [
      'College Campus Event Telegram/WhatsApp Automated Query Bot',
      'Flask-Based Machine Learning Disease Classification Web API'
    ]
  },
  {
    id: 'vite-tailwind-stack',
    name: 'Vite + React / Tailwind CSS',
    tagline: 'Next-generation lightning-fast frontend tooling for modern single-page applications',
    category: 'coding-platforms',
    categoryName: 'Coding Platforms',
    specializesIn: 'Blazing fast local development server, instant Hot Module Replacement (HMR), and lightweight bundling',
    canBuild: [
      'High-speed Single Page Applications (SPA)',
      'Data visualization dashboards with Chart.js or Recharts',
      'Interactive student voting system for college council elections',
      'Frontend client connected to a Python FastAPI / Django REST backend'
    ],
    difficulty: 'Intermediate',
    pricing: 'Free',
    pricingDetails: '100% Free and open source.',
    officialUrl: 'https://vite.dev',
    docsUrl: 'https://vite.dev/guide/',
    studentPerk: 'Completely open source with zero rate limits or subscriptions',
    bestForProjectStage: 'Final Year Capstone',
    popularForViva: 'Evaluators praise Vite over outdated `create-react-app`. Demonstrates modern ES modules, build optimization, and asset minification.',
    prosForStudents: [
      'Starts local dev server in milliseconds (<300ms)',
      'Pairs perfectly with Tailwind CSS for utility-first styling',
      'Can be hosted for free on GitHub Pages, Vercel, or Netlify'
    ],
    sampleProjectIdeas: [
      'Interactive Campus Election Electronic Voting Machine (EVM) Simulator',
      'COVID/Flu Infection Spread Mathematical Simulation Dashboard'
    ]
  },
  {
    id: 'supabase-stack',
    name: 'Supabase',
    tagline: 'The open-source Firebase alternative with a full PostgreSQL database, auth, and real-time subscriptions',
    category: 'coding-platforms',
    categoryName: 'Coding Platforms',
    specializesIn: 'Relational PostgreSQL database, Row Level Security (RLS), auto-generated REST/GraphQL APIs, and file storage',
    canBuild: [
      'Complete relational database backend for final year project',
      'College social media platform with user roles (Student, Faculty, HOD)',
      'Hostel complaint management with image attachments and status log',
      'Library management system with complex SQL relational queries'
    ],
    difficulty: 'Intermediate',
    pricing: 'Free Tier',
    pricingDetails: 'Generous Free Tier: 2 active projects, 500MB PostgreSQL database, 1GB file storage, 50,000 monthly active users.',
    officialUrl: 'https://supabase.com',
    docsUrl: 'https://supabase.com/docs',
    studentPerk: 'GitHub Student Developer Pack benefits; real PostgreSQL access with direct connection strings',
    bestForProjectStage: 'Final Year Capstone',
    popularForViva: 'Computer Science evaluators strictly demand relational SQL databases for final year marks. Supabase gives you genuine PostgreSQL with visual tables and SQL editor.',
    prosForStudents: [
      'Real PostgreSQL database (fulfills DBMS project requirements)',
      'Write SQL queries in browser table editor',
      'Auto-generated TypeScript client and real-time WebSockets'
    ],
    sampleProjectIdeas: [
      'Full-Stack Hospital Bed and Oxygen Cylinder Allocation Portal with SQL RLS',
      'University Examination Marksheet Verification & Archival System'
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Platforms', count: PLATFORMS_DATA.length, icon: 'LayoutGrid' },
  { id: 'website-builders', label: 'Website Builders', count: PLATFORMS_DATA.filter(p => p.category === 'website-builders').length, icon: 'Globe' },
  { id: 'nocode-lowcode', label: 'No-Code / Low-Code', count: PLATFORMS_DATA.filter(p => p.category === 'nocode-lowcode').length, icon: 'Boxes' },
  { id: 'ai-builders', label: 'AI Website Builders', count: PLATFORMS_DATA.filter(p => p.category === 'ai-builders').length, icon: 'Sparkles' },
  { id: 'app-dev', label: 'App Development', count: PLATFORMS_DATA.filter(p => p.category === 'app-dev').length, icon: 'Smartphone' },
  { id: 'coding-platforms', label: 'Coding Platforms', count: PLATFORMS_DATA.filter(p => p.category === 'coding-platforms').length, icon: 'Code2' }
] as const;

export const PROJECT_STAGES = [
  {
    stage: '1st/2nd Year Mini Project',
    tagline: 'Quick to learn, visual results, minimal server setup',
    recommendedIds: ['carrd', 'glide', 'mit-app-inventor', 'wordpress', 'google-sites', 'replit']
  },
  {
    stage: '24-48h Hackathons',
    tagline: 'High speed, instant live URL, rapid interactive prototypes',
    recommendedIds: ['v0-vercel', 'bolt-new', 'lovable', 'vercel-platform', 'replit', 'framer']
  },
  {
    stage: 'Final Year Capstone / BTech Major Project',
    tagline: 'Deep architecture, databases, evaluators viva-ready, real code',
    recommendedIds: ['nextjs-react', 'supabase-stack', 'flutter', 'react-native-expo', 'android-studio-kotlin', 'flutterflow', 'retool']
  },
  {
    stage: 'Campus Fest & Club Portals',
    tagline: 'Engaging UI, ticket forms, responsive mobile layout',
    recommendedIds: ['webflow', 'framer', 'firebase-platform', 'vercel-platform', 'vite-tailwind-stack']
  }
];
