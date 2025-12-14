# 🚀 Quick Setup Guide

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- Vite 5.0.8
- Tailwind CSS 3.4.0
- PostCSS & Autoprefixer

### 2. Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

Output will be in `dist/` folder.

## 🎯 What You'll See

1. **Hero Section**: Chapter title with progress indicator
2. **Presentation**: Embedded Gamma slides (fullscreen capable)
3. **Mode Selector**: Choose Student or Teacher mode
4. **Student Mode**: Practice questions with XP system
5. **Teacher Mode**: Random student selector for classroom

## 🔧 Configuration

### Change Port (Optional)
Edit `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 // Change to your preferred port
  }
})
```

### Customize Colors
Edit `tailwind.config.js` to change theme colors.

## 📱 Testing Responsive Design

### In Browser DevTools:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test these sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Laptop: 1440px
   - Smart Board: 1920px+

## ✅ Verification Checklist

- [ ] All dependencies installed
- [ ] Dev server runs without errors
- [ ] Presentation loads correctly
- [ ] Student mode works (answer questions)
- [ ] Teacher mode works (random selection)
- [ ] Progress saves (refresh page to verify)
- [ ] Responsive on mobile
- [ ] No console errors

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use different port in vite.config.js
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Presentation Not Loading
- Check internet connection
- Gamma.app might be blocked by firewall
- Try opening https://gamma.app/embed/wux7ypowv85snut directly

## 📦 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## 🎓 For Teachers

### Classroom Setup
1. Open on smart board browser
2. Switch to Teacher Mode
3. Enter your class roll number range
4. Select difficulty based on lesson progress
5. Use fullscreen for presentation

### Tips
- Keep browser in fullscreen (F11)
- Use wireless keyboard for control
- Test questions before class
- Have backup questions ready

## 👨‍💻 For Developers

### File Structure
- `src/components/` - All React components
- `src/data/questions.js` - Question bank
- `src/App.jsx` - Main app logic
- `tailwind.config.js` - Design system

### Adding Questions
1. Open `src/data/questions.js`
2. Add new question object
3. Follow existing format
4. Test in both modes

### Modifying Styles
- Use Tailwind utility classes
- Custom CSS in `src/index.css`
- Responsive: `md:`, `lg:`, `smartboard:` prefixes

## 🎉 You're Ready!

The website is production-ready and can be used immediately in classrooms.

**Happy Teaching! 🎓**
