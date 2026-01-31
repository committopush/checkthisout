# 💖 Sofiia Valentine's Website

A romantic, interactive website to ask Sofiia to be your Valentine! Features a fun "compatibility test" with multiple screens, interactive elements, and mobile optimization.

## 🌟 Features

- **10 Interactive Screens**: From quiz questions to CAPTCHA challenges to the final Valentine's Day question
- **Mobile Optimized**: Fully responsive design that works perfectly on phones, tablets, and desktops
- **Fun Interactions**: Buttons that move, options that change, and playful animations
- **Romantic Design**: Beautiful gradient backgrounds, smooth animations, and heart-themed elements

## 📋 Setup Instructions

### 1. Add Your Photos

Before deploying, add 6 photos of yourself to the `images/` folder:

```
images/
  ├── photo1.jpg  (You smiling 😊)
  ├── photo2.jpg  (You serious 😐)
  ├── photo3.jpg  (You silly 🤡)
  ├── photo4.jpg  (You handsome 😎)
  ├── photo5.jpg  (You meme 🗿)
  └── photo6.jpg  (You blurry 💀)
```

See `images/README.md` for detailed image requirements.

### 2. Test Locally

Open `index.html` in your web browser to test the website:

```bash
# Option 1: Double-click index.html

# Option 2: Use Python's built-in server
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Use Node's http-server
npx http-server
```

## 🚀 Deploy to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it: `sofiia-valentine` (or any name you like)
   - Keep it **Public**
   - Don't initialize with README (we already have one)

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Valentine's website for Sofiia 💖"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sofiia-valentine.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in the left sidebar)
   - Under "Source", select **main** branch
   - Click **Save**
   - Wait 1-2 minutes for deployment

4. **Get your URL**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/sofiia-valentine/`
   - Share this URL with Sofiia! 💖

### Method 2: Using Command Line (Faster)

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Valentine's website for Sofiia 💖"

# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/sofiia-valentine.git
git branch -M main
git push -u origin main

# Enable GitHub Pages via GitHub CLI (if installed)
gh repo edit --enable-pages --pages-branch main
```

### Method 3: GitHub Desktop

1. Open GitHub Desktop
2. Add this folder as a repository
3. Commit all files with message: "Initial commit: Valentine's website for Sofiia 💖"
4. Publish repository to GitHub (keep it Public)
5. Go to repository Settings → Pages → Enable from main branch

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- iPhone (all sizes)
- Android phones
- Tablets
- Desktop browsers

Features include:
- Flexible layouts that adapt to screen size
- Touch-friendly button sizes
- Optimized font sizes for readability
- Smooth animations that work on mobile

## 🎨 Customization

### Change Colors

Edit `styles.css` to customize colors:

```css
/* Main gradient background */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Primary pink color */
color: #e91e63;

/* Button gradient */
background: linear-gradient(135deg, #e91e63, #ff6090);
```

### Modify Questions

Edit `index.html` to change question text or options in each screen section.

### Adjust Timing

Edit `script.js` to change animation delays:

```javascript
// Calculation screen timing
setTimeout(animateStep, 1500); // Change delay here

// Valentine question fade-in
animation: fadeInDelayed 1s ease 2s forwards; // Change in CSS
```

## 🎯 How It Works

1. **Screen 0**: Landing page with "Start the Test" button
2. **Screen 1**: All answers lead to "Sofiia is perfect"
3. **Screen 2**: Favorite snack gets "corrected" to what makes her happy
4. **Screen 3**: Last option changes on hover
5. **Screen 4**: Bad option gets worse and disappears
6. **Screen 5**: Fake CAPTCHA that rejects being "not perfect"
7. **Screen 6**: Loading animation with fake calculations
8. **Screen 6.5**: Image CAPTCHA with your photos
9. **Screen 7**: Results reveal and Valentine question
10. **Screen 8**: YES/NO buttons (NO runs away, YES grows)
11. **Screen 9**: Final romantic message

## 🐛 Troubleshooting

### Images not showing
- Make sure image files are named exactly: `photo1.jpg` through `photo6.jpg`
- Check that images are in the `images/` folder
- Verify images are committed and pushed to GitHub

### Website not updating
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes after pushing changes
- Check GitHub Actions tab for deployment status

### GitHub Pages not enabling
- Make sure repository is Public
- Ensure you're on the Settings page of the correct repository
- Try selecting the branch again in Pages settings

## 💝 Credits

Made with love for Sofiia 💖

## 📄 License

Feel free to use this as inspiration for your own romantic gestures!

---

**Ready to deploy?** Follow the deployment steps above and share the URL with Sofiia! 🎉
