# Abdul Rafay - Portfolio Website

A modern, professional single-page portfolio website built with React, TypeScript, Tailwind CSS, and Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

The production files will be in the `dist/` folder, ready to deploy to any static hosting service.

## 📝 Editing Content

### Personal Information
Edit the following files to update your personal information:

**Name and Title** - `src/components/Hero.tsx`:
```tsx
<h1>Abdul Rafay</h1>
<p>Tech Developer & Innovator</p>
```

**Email** - `src/components/Contact.tsx`:
```tsx
<a href="mailto:gearrev967@gmail.com">
```

**SEO Meta Tags** - `index.html`:
```html
<title>Abdul Rafay - Tech Developer & Innovator</title>
<meta name="description" content="..." />
```

### Projects
Edit projects in `src/components/Projects.tsx`:

```tsx
const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    icon: Server, // Choose from lucide-react icons
    color: "from-cyan-500 to-blue-500", // Tailwind gradient
  },
  // Add more projects...
];
```

### Skills
Edit skills in `src/components/Skills.tsx`:

```tsx
const skills = [
  "Python",
  "Flask",
  // Add more skills...
];
```

### About Section
Edit the about text in `src/components/About.tsx`:

```tsx
<p>Your bio text here...</p>
```

## 🎨 Theme Customization

### Colors
Edit the design system in `src/index.css`:

```css
:root {
  --accent: 199 89% 48%; /* Cyan accent color */
  --hero-gradient-from: 220 40% 8%;
  --hero-gradient-to: 220 50% 4%;
  /* Add more custom colors... */
}
```

### Typography
The site uses **Poppins** font. To change it:

1. Update `index.html` Google Fonts link
2. Update `tailwind.config.ts`:
```ts
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

### Animations
Customize animations in `tailwind.config.ts`:

```ts
keyframes: {
  "fade-up": { /* ... */ },
  "float": { /* ... */ },
}
```

## 🌓 Theme Toggle

The site includes a dark/light theme toggle (defaults to dark mode):
- Toggle component: `src/components/ThemeToggle.tsx`
- Theme is saved to localStorage
- Respects system preferences on first visit

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Navigation automatically switches to hamburger menu on mobile.

## 🎯 Features

- ✨ Glassmorphism UI effects
- 🎭 3D card hover animations
- 📜 Smooth scroll navigation
- 🎨 Dark/Light theme toggle
- 📱 Fully responsive design
- ⚡ Optimized performance
- ♿ Accessibility features
- 🔍 SEO optimized
- 🎪 Parallax hero section

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **Animations**: CSS transforms + Tailwind

## 📦 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn UI components
│   ├── Navigation.tsx   # Sticky navigation bar
│   ├── Hero.tsx         # Hero section with parallax
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects grid
│   ├── Skills.tsx       # Skills list
│   ├── Contact.tsx      # Contact form
│   └── ThemeToggle.tsx  # Theme switcher
├── pages/
│   ├── Index.tsx        # Main page
│   └── NotFound.tsx     # 404 page
├── assets/              # Images and static files
├── index.css            # Design system & global styles
└── main.tsx             # App entry point
```

## 🚀 Deployment

### Deploy to Netlify
```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

### Deploy to Vercel
```bash
vercel --prod
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

### Static Hosting
The `dist/` folder contains all static files. Upload to any web server or CDN.

## 🔧 Advanced Configuration

### Vite Configuration
Edit `vite.config.ts` to customize build settings.

### Tailwind Configuration
Edit `tailwind.config.ts` to add custom utilities, plugins, or theme extensions.

### Adding New Sections
1. Create component in `src/components/YourSection.tsx`
2. Import and add to `src/pages/Index.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues:
- Email: gearrev967@gmail.com
- Review the code comments for implementation details

---

Built with ❤️ using Lovable.dev
