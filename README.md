# Video Editing Portfolio Website

A fully animated, parallax-scrolling video portfolio built with HTML, CSS, and vanilla JavaScript.

## Color Palette
- **Cream** `#FFF0DC` - Primary background
- **Peach/Gold** `#F0BB78` - Accent, glow effects, CTAs
- **Brown** `#543A14` - Text, borders, dark accents
- **Black** `#131010` - Dark sections, overlays

## File Structure
```
video-portfolio/
├── index.html          # Home page (About, Featured Work, Reviews)
├── portfolio.html      # Full portfolio with category filters
├── css/
│   └── styles.css      # All styles, animations, responsive design
├── js/
│   ├── video-config.js # Video URL configuration (EDIT THIS!)
│   └── main.js         # Parallax, scroll animations, modal, filters
└── README.md
```

## How to Add Your Videos (Google Drive)

### Step 1: Make Videos Public
1. Go to your Google Drive folder
2. Right-click each video -> **Share**
3. Set to **"Anyone with the link can view"**
4. Copy the share link

### Step 2: Extract the File ID
From a link like:
```
https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing
```
The File ID is: `1ABC123xyz`

### Step 3: Update video-config.js
Open `js/video-config.js` and replace the placeholder IDs with your actual Google Drive file IDs.

Example:
```javascript
documentary: [
  {
    id: "doc-1",
    title: "Your Documentary Title",
    category: "documentary",
    url: "https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/preview",
    duration: "12:34"
  }
]
```

### Alternative: Direct Links in HTML
You can also directly update the `data-video-url` attributes in `index.html` and `portfolio.html`:
```html
data-video-url="https://drive.google.com/file/d/YOUR_FILE_ID/preview"
```

## Features
- **Parallax Scrolling** - Smooth depth effect on hero
- **Scroll Reveal Animations** - Elements fade in as you scroll
- **Video Lightbox Modal** - Click play to open fullscreen video player
- **Category Filtering** - Filter portfolio by Documentary, Sports, Magnates, Motion Graphics
- **Animated Counters** - Stats count up when scrolled into view
- **Floating Particles** - Animated background particles in hero
- **Marquee Ticker** - Animated skills ticker
- **Hover Effects** - 3D tilt on video cards, glow effects
- **Fully Responsive** - Works on desktop, tablet, and mobile
- **Fast Performance** - Pure CSS/JS, no heavy frameworks

## Deployment to Vercel
1. Zip this folder (`video-portfolio.zip`)
2. Go to [vercel.com](https://vercel.com)
3. Click **"Add New Project"**
4. Import from GitHub OR drag & drop the zip
5. For drag & drop: Extract the zip first, then drag the folder to Vercel
6. Your site will be live in seconds!

## Customization
- **Name/Brand**: Search and replace "Alex Rivera" and "AR." in both HTML files
- **Colors**: Edit the CSS variables at the top of `css/styles.css`
- **Testimonials**: Update the review cards in `index.html`
- **Stats**: Change the `data-counter` values in `index.html`

## Browser Support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---
Built with passion for visual storytelling.
