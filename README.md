# NovaCore Website

A modern, responsive Next.js website for NovaCore - a real-time compliance and regulatory intelligence platform for Africa's energy sector.

## Features

- **Modern Design**: Beautiful, gradient-rich UI with smooth animations
- **Interactive 3D Scene**: Immersive Three.js animation showcasing data connectivity
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 14 for optimal performance
- **Animations**: Smooth, engaging animations using Framer Motion
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
novacor/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx                 # Hero section
│   ├── About.tsx                # About section
│   ├── WhyNovaCore.tsx          # Benefits section
│   ├── Ecosystem.tsx            # Ecosystem modules
│   ├── Features.tsx             # Core features
│   ├── ThreeScene.tsx           # 3D animation scene
│   ├── ThreeSectionWrapper.tsx  # 3D section wrapper
│   ├── DesignExperience.tsx     # Design principles
│   ├── HowItWorks.tsx           # How it works section
│   ├── Impact.tsx               # Impact section
│   ├── Vision.tsx               # Vision section
│   └── Footer.tsx               # Footer
├── public/                 # Static assets
└── package.json           # Dependencies
```

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Three.js**: 3D graphics library
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Useful helpers for React Three Fiber
- **Lucide React**: Icon library

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`:

- Primary colors: Blue shades for main branding
- Accent colors: Purple/Pink shades for highlights

### Content

All content is located in the component files under the `components/` directory. Each section is modular and can be easily updated.

## License

All rights reserved © NovaCore

