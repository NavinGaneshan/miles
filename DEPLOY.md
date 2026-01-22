# Deploy to GitHub Pages

## Steps:

1. **Create a new GitHub repository**
   - Go to https://github.com/new
   - Name it `freight-chat-prototype` (or any name you prefer)
   - Make it public
   - Don't initialize with README (we already have files)

2. **Push your code**
   ```bash
   cd /workspace/freight-chat-prototype
   git init
   git add .
   git commit -m "Initial commit: Amazon Freight Miles AI chat prototype"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/freight-chat-prototype.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repo settings
   - Click "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes for deployment

4. **Access your site**
   - Your prototype will be live at:
   - `https://YOUR_USERNAME.github.io/freight-chat-prototype/overlay.html`

## Files included:
- `overlay.html` - Main demo page (recommended)
- `index.html` - Alternative standalone version
- `styles.css` - Shared styles
- `app.js` - Application logic
- `data.js` - Sample data
- `scenarios.js` - Demo scenarios

## Note:
Use `overlay.html` as your main demo page - it has the centered instruction message and floating chat button.
