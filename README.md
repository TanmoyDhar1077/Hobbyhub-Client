# HobbyHub - A Local Hobby Group Organizer

🌐 **Live Site**: [https://hobbyhub-tanmoy.netlify.app/](https://hobbyhub-tanmoy.netlify.app/)

## 📖 Overview
HobbyHub is a dynamic platform designed to connect people through shared interests by allowing users to discover, join, or create local hobby-based groups. Whether it's reading, hiking, painting, or cooking, HobbyHub fosters real-world communities for real-world passions.

---

## 📋 Pages Overview

| Route | Page | Description | Protected |
|-------|------|-------------|-----------|
| `/` | 🏠 **Home** | Landing page with banner, featured groups, testimonials | ❌ |
| `/signin` | 🔐 **Login** | User authentication with email/password and Google | ❌ |
| `/signup` | 📝 **Register** | User registration with form validation | ❌ |
| `/allGroups` | 📋 **All Groups** | Browse all groups with search and filter | ❌ |
| `/groupDetails/:id` | 📖 **Group Details** | Individual group information and join option | ❌ |
| `/createGroup` | ➕ **Create Group** | Form to create new hobby group | ✅ |
| `/myGroups` | 👤 **My Groups** | User's created groups with edit/delete options | ✅ |
| `/updateGroup/:id` | ✏️ **Update Group** | Edit existing group information | ✅ |
| `*` | ❌ **404 Not Found** | Error page for invalid routes | ❌ |

---

## 🎨 Dark Mode Implementation

HobbyHub features a comprehensive dark mode implementation with:

### 🌙 Theme Features
- **System Preference Detection** - Automatically detects user's system theme
- **Persistent Storage** - Remembers user's theme choice across sessions
- **Smooth Transitions** - Animated theme switching with CSS transitions
- **Complete Coverage** - All components and pages support dark mode

### 🎯 Implementation Details
- **Context API** - Theme state management with React Context
- **Tailwind Dark Mode** - Utility-first approach with `dark:` variants
- **DaisyUI Integration** - Component library with built-in dark mode support
- **Custom Components** - All alerts, modals, and forms adapt to theme

### 🔧 Technical Stack
```javascript
// Theme Context Implementation
const ThemeContext = createContext();

// Tailwind Configuration
module.exports = {
  darkMode: 'class',
  plugins: [require('daisyui')]
}
```

---

## 📋 Table of Contents

- [🚀 Key Features](#-key-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [📁 Project Structure](#-project-structure)
- [⚡ Installation & Setup](#-installation--setup)
- [🔗 Repositories](#-repositories)
- [📋 Pages Overview](#-pages-overview)
- [🎨 Dark Mode Implementation](#-dark-mode-implementation)
- [🔒 Environment Variables](#-environment-variables)
- [📱 Responsive Design](#-responsive-design)
- [🧪 Testing](#-testing)
- [📄 License](#-license)

---

## 🚀 Key Features

- 🔐 **Authentication System**  
  Secure login and registration using Firebase (Email/Password + Google Sign-In) with strong password validation and user feedback via SweetAlert2.

- 🛡️ **Protected Routes**  
  Sensitive pages like group creation, personal groups, and updates are accessible only to authenticated users with protected routes.

- 🎨 **Unique and Responsive Design**  
  Custom UI design using Tailwind CSS v4 and DaisyUI, fully responsive for mobile, tablet, and desktop with modern glass-morphism effects.

- 🌙 **Advanced Dark/Light Mode Toggle**  
  Comprehensive theme switching throughout the entire application with persistent user preference storage and smooth transitions.

- 📅 **Smart Event Management**  
  Groups with past start dates are automatically marked inactive, preventing new joins with dynamic status indicators.

- 📦 **Full CRUD Functionality**  
  Complete Create, Read, Update, Delete operations with real-time data updates from MongoDB database via secure Express server.

- 🎭 **Interactive UI Enhancements**  
  Integrated `React Awesome Reveal` for smooth animations, `React Tooltip` for helpful UX hints, and `SweetAlert2` for elegant notifications.

- 🔍 **Advanced Search & Filter**  
  Real-time search functionality with sorting options by date and category filtering.

- ⚡ **Performance Optimized**  
  Code splitting, lazy loading, and optimized bundle size for fast loading times.

---

## 🛠️ Technologies Used

### Frontend
- **React 18** - Latest React features with concurrent rendering
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework with latest features
- **DaisyUI** - Tailwind CSS component library
- **React Router v7** - Client-side routing with new features

### Authentication & Backend
- **Firebase Authentication** - Secure user authentication
- **MongoDB** - NoSQL database for flexible data storage
- **Express.js** - RESTful API server

### UI Libraries & Tools
- **React Awesome Reveal** - Animation library for smooth transitions
- **React Tooltip** - Interactive tooltips for better UX
- **SweetAlert2** - Beautiful, responsive, customizable popup alerts
- **React Icons** - Popular icon packs as React components
- **React CountUp** - Animated counting numbers
- **Swiper.js** - Modern touch slider with hardware accelerated transitions

---

## 📁 Project Structure

```bash
HobbyHub-Client/
├── 📁 public/
│   ├── 🖼️ logo.png
│   ├── 🖼️ vite.svg
│   ├── 📄 _redirects
│   └── 📁 Fonts/
│       └── 🔤 Malvie.otf
├── 📁 src/
│   ├── 📄 main.jsx                 # Application entry point
│   ├── 📄 App.jsx                  # Root component
│   ├── 🎨 App.css                  # Global application styles
│   ├── 🎨 index.css                # Global CSS with Tailwind imports
│   ├── 📁 assets/                  # Static assets
│   │   ├── 🖼️ banner1.png
│   │   ├── 🖼️ banner2.png
│   │   ├── 🖼️ banner3.png
│   │   ├── 🖼️ banner4.png
│   │   ├── 🖼️ react.svg
│   │   └── 📁 images/
│   │       ├── 🖼️ error.svg
│   │       ├── 🖼️ login.svg
│   │       └── 🖼️ signup.svg
│   ├── 📁 components/              # Reusable UI components
│   │   ├── 🧩 Footer.jsx           # Application footer
│   │   ├── 🧩 Groups.jsx           # Group cards display
│   │   ├── 🧩 Navbar.jsx           # Navigation with auth & theme toggle
│   │   ├── 🧩 Newsletter.jsx       # Newsletter subscription
│   │   ├── 🧩 Spinner.jsx          # Loading spinner component
│   │   ├── 🧩 Testimonials.jsx     # User testimonials & stats
│   │   ├── 🧩 WhyJoin.jsx          # Benefits section
│   │   └── 📁 Banner/
│   │       ├── 🧩 Banner.jsx       # Hero carousel banner
│   │       └── 🎨 banner.css       # Banner-specific styles
│   ├── 📁 context/                 # React Context providers
│   │   ├── ⚙️ AuthContext.jsx      # Authentication context
│   │   ├── 🔧 AuthProvider.jsx     # Auth state management
│   │   ├── 🌙 ThemeContext.jsx     # Theme context
│   │   └── 🎨 ThemeProvider.jsx    # Theme state management
│   ├── 📁 firebase/                # Firebase configuration
│   │   └── 🔥 firebase.config.js   # Firebase app configuration
│   ├── 📁 hooks/                   # Custom React hooks
│   │   └── 🪝 useTitle.js          # Dynamic document title hook
│   ├── 📁 layouts/                 # Layout components
│   │   └── 🏗️ Root.jsx             # Main layout wrapper
│   ├── 📁 pages/                   # Page components
│   │   ├── 🏠 Home.jsx             # Homepage with sections
│   │   ├── 📋 AllGroups.jsx        # Browse all groups with search
│   │   ├── ➕ CreateGroup.jsx      # Create new group form
│   │   ├── 👤 MyGroups.jsx         # User's created groups
│   │   ├── 📝 GroupDetails.jsx     # Individual group details
│   │   ├── ✏️ UpdateGroup.jsx      # Edit group information
│   │   ├── 🔐 Login.jsx            # User login form
│   │   ├── 📝 Register.jsx         # User registration form
│   │   └── ❌ NotFound.jsx         # 404 error page
│   └── 📁 routes/                  # Routing configuration
│       ├── 🛡️ PrivateRoute.jsx     # Protected route wrapper
│       └── 🗺️ router.jsx           # Application routing setup
├── 📄 package.json                 # Dependencies and scripts
├── 📄 package-lock.json            # Locked dependency versions
├── ⚙️ vite.config.js               # Vite configuration
├── 🎨 tailwind.config.js           # Tailwind CSS configuration
├── 📏 eslint.config.js             # ESLint configuration
├── 📄 index.html                   # HTML entry point
└── 📖 README.md                    # Project documentation
```

---

## ⚡ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Clone the Repository
```bash
git clone https://github.com/TanmoyDhar1077/Hobbyhub-Client.git
cd Hobbyhub-Client
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Environment Setup
Create a `.env.local` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

### Run Development Server
```bash
npm run dev
# or
yarn dev
```

### Build for Production
```bash
npm run build
# or
yarn build
```

---

## 📁 Client Repository

🔗 **GitHub**: [HobbyHub-Client](https://github.com/TanmoyDhar1077/Hobbyhub-Client)

**Key Technologies:**
- React 18 with modern hooks
- Vite for blazing-fast development
- Tailwind CSS v4 + DaisyUI
- Firebase Authentication
- React Router v7
- SweetAlert2 for notifications
- React Awesome Reveal for animations

---

## 🛠️ Server Repository

🔗 **GitHub**: [HobbyHub-Server](https://github.com/TanmoyDhar1077/Hobbyhub-Server)

**Key Technologies:**
- Node.js with Express.js
- MongoDB for data storage
- CORS for cross-origin requests
- Dotenv for environment security
- RESTful API architecture

---


## 🔒 Environment Variables

Environment variables are used to hide Firebase configuration and MongoDB credentials:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

> **Note:** Create a `.env.local` file in the project root and add your Firebase configuration variables.

---

## 📱 Responsive Design

HobbyHub is built with a mobile-first approach ensuring optimal experience across all devices:

### 📊 Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### 🎯 Key Features
- Flexible grid layouts with CSS Grid and Flexbox
- Responsive typography with Tailwind's responsive utilities
- Touch-friendly interface with appropriate spacing
- Optimized images with proper aspect ratios
- Smooth animations that respect user's motion preferences

---

## 🧪 Testing

### Manual Testing Checklist
- ✅ Authentication (Email/Password & Google Sign-in)
- ✅ Protected routes functionality
- ✅ CRUD operations for groups
- ✅ Dark/Light mode toggle
- ✅ Responsive design across devices
- ✅ Form validations
- ✅ Search and filter functionality
- ✅ Loading states and error handling

### Browser Compatibility
- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)

---

## 🚀 Performance Optimizations

- **Code Splitting** - Dynamic imports for route-based splitting
- **Lazy Loading** - Components loaded on demand
- **Image Optimization** - Proper sizing and format optimization
- **Bundle Analysis** - Regular monitoring of bundle size
- **Caching Strategy** - Service worker for offline functionality

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact

**Developer**: Tanmoy Dhar  
**Email**: tanmoydhar1077@gmail.com  
**GitHub**: [@TanmoyDhar1077](https://github.com/TanmoyDhar1077)  
**LinkedIn**: [Tanmoy Dhar](https://www.linkedin.com/in/tanmoy-dhar-ripon-6126922ba/)

---

## 📄 License

This project is developed as part of a course assignment and is not licensed for commercial use.

---

## 🌟 Acknowledgments

<!-- - **Programming Hero** - For providing excellent learning resources -->
- **Firebase** - For robust authentication services
- **Tailwind CSS** - For the amazing utility-first CSS framework
- **DaisyUI** - For beautiful pre-built components
- **React Community** - For the incredible ecosystem and support

---

*Made with ❤️ by [Tanmoy Dhar](https://github.com/TanmoyDhar1077)*

