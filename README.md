# 🗳️ BallotFighter - Election Campaign Platform

A comprehensive, modern election campaign website built with React and Vite, featuring the Bangladesh flag theme. This platform serves as a central digital headquarters for the Election Alliance, providing voters with transparent access to leadership, manifestos, and campaign information.

## 🎯 Overview

BallotFighter is designed to revolutionize political engagement by establishing transparent and accountable politics based on principles, performance, and merit — not individuals. The platform enables voters to make informed decisions while providing candidates with powerful tools for campaign management.

## ✨ Features

### 🏠 Core Sections
- **Hero & About** - Campaign mission, vision, and core objectives
- **Leadership** - Comprehensive candidate profiles with experience and performance metrics
- **Manifesto** - Detailed policy proposals with timelines and implementation plans
- **Competitors Analysis** - Transparent comparison with other political parties
- **Store** - Campaign merchandise and branded products
- **Content Generator** - AI-powered tools for social media and campaign materials
- **Crowdfunding** - 100% transparent donation system with real-time tracking
- **News** - Latest campaign updates and announcements
- **Volunteers** - Organized volunteer recruitment with squad-based teams
- **Dashboard** - Campaign performance metrics and analytics

### 🎨 Design Features
- **Bangladesh Flag Theme** - Green (#006A4E) and Red (#F42A41) color scheme
- **Fully Responsive** - Optimized for all devices (320px to 2xl screens)
- **Modern SCSS Architecture** - Professional 7-1 pattern organization
- **Smooth Animations** - Engaging transitions and hover effects
- **Accessibility** - WCAG compliant with semantic HTML

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern UI library with hooks
- **Vite 6.0.0** - Lightning-fast build tool and dev server
- **SASS/SCSS** - Advanced CSS with variables and mixins

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Cross-browser compatibility

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/BallotFighter.git
cd BallotFighter
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 📁 Project Structure

```
BallotFighter/
├── src/
│   ├── components/          # React components
│   │   ├── About.jsx
│   │
│   ├── scss/                # SCSS styling (7-1 Pattern)
│   │   ├── abstracts/       # Variables, mixins, functions
│   │   │   ├── _variables.scss
│   │   │   └── _mixins.scss
│   │   ├── base/            # Reset, typography, utilities
│   │   │   ├── _reset.scss
│   │   │   ├── _typography.scss
│   │   │   └── _utilities.scss
│   │   ├── layout/          # Navigation, footer
│   │   │   ├── _navigation.scss
│   │   │   └── _footer.scss
│   │   ├── components/      # Component-specific styles
│   │   │   ├── _hero.scss
│   │   └── main.scss        # Main entry point
│   │
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
│
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md               # Project documentation
```

## 🎨 SCSS Architecture

### Design Tokens (Variables)
```scss
// Bangladesh Flag Colors
$primary: #006A4E;      // Bangladesh Green
$secondary: #F42A41;    // Bangladesh Red
$accent: #FFB81C;       // Gold

// Responsive Breakpoints
$breakpoint-xs: 375px;   // Extra small devices
$breakpoint-sm: 576px;   // Small devices
$breakpoint-md: 768px;   // Tablets
$breakpoint-lg: 1024px;  // Laptops
$breakpoint-xl: 1200px;  // Desktops
$breakpoint-2xl: 1400px; // Large screens
```

### Responsive Mixin
```scss
@include respond-to('xs') { /* 320px+ styles */ }
@include respond-to('md') { /* Tablet styles */ }
@include respond-to('lg') { /* Desktop styles */ }
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The platform is fully responsive across all devices:

| Breakpoint | Screen Size | Description |
|------------|-------------|-------------|
| xs | 320px - 575px | Small mobile devices |
| sm | 576px - 767px | Large mobile devices |
| md | 768px - 1023px | Tablets |
| lg | 1024px - 1199px | Small laptops |
| xl | 1200px - 1399px | Desktops |
| 2xl | 1400px+ | Large screens |

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

### Deployment Platforms
- **Vercel** - Recommended for React/Vite apps
- **Netlify** - Easy continuous deployment
- **GitHub Pages** - Free static hosting
- **AWS S3 + CloudFront** - Enterprise solution

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style Guidelines
- Use functional components with hooks
- Follow the existing SCSS architecture (7-1 pattern)
- Maintain Bangladesh flag color theme
- Ensure mobile responsiveness
- Add comments for complex logic

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

**Election Alliance - Ballot Fighter Squad**

For questions, support, or collaboration:
- 📧 Email: support@ballotfighter.com
- 🌐 Website: https://ballotfighter.com
- 📱 Twitter: @BallotFighter
- 📘 Facebook: /BallotFighter

## 🙏 Acknowledgments

- Bangladesh Flag colors and symbolism
- React and Vite communities
- Open source contributors
- All volunteers and supporters

## 📊 Project Status

**Current Version:** 0.0.1  
**Status:** Active Development  
**Last Updated:** January 2026

---

**Made with ❤️ for transparent democracy in Bangladesh** 🇧🇩

*"Returning the power of the people to the people"*
