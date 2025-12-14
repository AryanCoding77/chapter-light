# 🎓 NCERT Class 10 Physics: Light – Reflection and Refraction

A production-ready, gamified educational website for NCERT Class 10 Physics Chapter 10. Built for smart classrooms with responsive design for all devices.

## ✨ Features

### 🎯 Core Features
- **Gamified Learning System**: XP points, levels, and progress tracking
- **Dual Mode Interface**: Student mode and Teacher mode
- **Interactive Presentation**: Embedded Gamma presentation with fullscreen support
- **Question Bank**: 20+ NCERT-accurate questions across 3 difficulty levels
- **Real-time Feedback**: Instant answer validation with explanations
- **Progress Persistence**: LocalStorage-based progress tracking

### 👨‍🏫 Teacher Mode
- Random student selector (roll number range)
- Difficulty-based question selection
- Large display optimized for smart boards
- Show/hide answer controls
- Perfect for live classroom interaction

### 🎓 Student Mode
- Self-paced learning
- Difficulty selection (Easy 🟢, Medium 🟡, Hard 🔴)
- XP-based gamification
- Detailed explanations for each answer
- Progress tracking and statistics

### 📱 Responsive Design
- Mobile-first approach
- Tablet optimization
- Laptop/desktop support
- Smart board/projector optimization (1920px+)
- No layout breakage across devices

### ⚡ Performance Optimized
- Lazy loading for iframe
- Minimal dependencies
- No heavy animations
- Fast load times
- Optimized for slow internet

## 🛠️ Tech Stack

- **Framework**: React 18
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 5
- **State Management**: React Hooks + LocalStorage
- **No external libraries** for core functionality

## 📁 Project Structure

```
ncert-physics-light/
├── src/
│   ├── components/
│   │   ├── Hero.jsx                 # Chapter intro with progress
│   │   ├── PresentationSection.jsx  # Gamma presentation embed
│   │   ├── ProgressTracker.jsx      # Sticky progress bar
│   │   ├── ModeSelector.jsx         # Student/Teacher mode toggle
│   │   ├── StudentMode.jsx          # Student quiz interface
│   │   └── TeacherMode.jsx          # Teacher control panel
│   ├── data/
│   │   └── questions.js             # Question bank (20+ questions)
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles + Tailwind
├── index.html                       # HTML entry point
├── package.json                     # Dependencies
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind configuration
├── postcss.config.js                # PostCSS configuration
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open in browser**:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎮 How to Use

### For Students
1. Select **Student Mode**
2. Choose difficulty level (Easy/Medium/Hard)
3. Answer questions
4. Get instant feedback with explanations
5. Earn XP and level up
6. Track your progress in the top bar

### For Teachers
1. Select **Teacher Mode**
2. Enter roll number range (e.g., 1 to 40)
3. Select question difficulty
4. Click "Ask Next Question"
5. A random student and question will be displayed
6. Use "Show Answer" to reveal the correct answer
7. Perfect for live classroom quizzes

## 📊 Question Bank Details

- **Total Questions**: 20+
- **Easy Questions**: 8 (Definitions, laws, basic concepts)
- **Medium Questions**: 6 (Reasoning, applications, ray diagrams)
- **Hard Questions**: 6 (Numericals, board-level problems)
- **All questions are NCERT-accurate** with detailed explanations

### Topics Covered
- Laws of reflection
- Spherical mirrors (concave and convex)
- Mirror formula and magnification
- Refraction of light
- Snell's law
- Lenses (concave and convex)
- Lens formula and power
- Human eye defects

## 🎨 Design Philosophy

- **Clean & Modern**: Professional educational look
- **Not Childish**: Gamified but mature design
- **High Contrast**: Readable on all devices
- **Large Touch Targets**: Mobile-friendly buttons
- **Accessibility**: Keyboard navigation and screen reader support

## 🔧 Customization

### Adding More Questions
Edit `src/data/questions.js`:

```javascript
{
  id: 21,
  question: "Your question here",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: "Correct option",
  difficulty: "easy", // or "medium" or "hard"
  topic: "Reflection", // or "Refraction"
  marks: 1,
  explanation: "Detailed explanation here"
}
```

### Changing XP Points
Edit `src/components/StudentMode.jsx`:

```javascript
const points = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 30
```

### Modifying Presentation
Edit `src/components/PresentationSection.jsx` to change the iframe source.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Laptop**: 1024px - 1920px
- **Smart Board**: 1920px+

Custom breakpoint for smart boards: `smartboard:` prefix in Tailwind classes.

## ⚡ Performance Tips

- Presentation iframe uses lazy loading
- Progress saved to localStorage (no backend needed)
- Minimal re-renders with React hooks
- No blocking scripts
- Optimized fonts from Google Fonts

## 🎯 Future Enhancements

- Add more chapters
- Export student progress as PDF
- Timer for timed quizzes
- Leaderboard system
- Dark mode
- Multi-language support

## 📄 License

This is an educational project. Feel free to use and modify for educational purposes.

## 🤝 Contributing

This is a complete, production-ready implementation. If you want to add features:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices
5. Submit a pull request

## 📞 Support

For issues or questions about NCERT content accuracy, refer to the official NCERT textbook.

---

**Built with ❤️ for Indian classrooms**

*Ready for deployment in real schools and smart classrooms*
