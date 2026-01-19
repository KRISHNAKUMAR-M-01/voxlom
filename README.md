# Voxlom - Modern 3D Website

A stunning, professional website featuring cutting-edge 3D animations and modern design.

## Features

- ✨ **3D Animations** - Interactive Three.js powered 3D scenes with particles and geometric shapes
- 🎨 **Modern Design** - Professional gradient-based color scheme and smooth animations
- 📱 **Responsive** - Fully responsive design that works on all devices
- 🚀 **Performance** - Optimized for fast loading and smooth interactions
- 🎯 **Interactive** - Smooth scrolling, hover effects, and animated statistics

## Getting Started

### Prerequisites

No build tools required! This website runs directly in the browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. That's it! The website is ready to use.

### Online Deployment

For best results, serve the files through a web server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npx serve
```

Then open `http://localhost:8000` in your browser.

## Structure

```
voxlom1/
├── index.html      # Main HTML structure
├── styles.css      # Professional styling and animations
├── script.js       # 3D animations and interactivity
└── README.md       # This file
```

## Technologies Used

- **HTML5** - Modern semantic markup
- **CSS3** - Advanced styling with gradients, animations, and responsive design
- **JavaScript** - Interactive features and smooth animations
- **Three.js** - 3D graphics and particle systems

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Content

Simply edit `index.html` to customize text, images, and sections.

### 3D Scene

Modify the `initThreeJS()` function in `script.js` to customize the 3D animations.

## License

Free to use for personal and commercial projects.

## Credits

Built with modern web technologies and best practices for performance and user experience.
