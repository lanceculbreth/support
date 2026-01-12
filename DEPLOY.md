# Quick Deployment Options

Here are several ways to create a public link for your team to view the support page:

## Option 1: Netlify Drop (Easiest - No Account Needed)
1. Go to: https://app.netlify.com/drop
2. Drag your `Support` folder into the browser
3. Get instant public URL
4. Share with your team

## Option 2: Surge.sh (Quick CLI Deployment)
1. Install: `npm install -g surge` (if not already installed)
2. Run: `surge .`
3. Enter email/password (creates free account)
4. Choose a domain or use auto-generated one
5. Share the URL (e.g., `your-site-name.surge.sh`)

## Option 3: Vercel (Zero Config)
1. Install: `npm install -g vercel` (if not already installed)
2. Run: `vercel`
3. Follow prompts (no account needed for preview)
4. Share the deployment URL

## Option 4: GitHub Pages (Permanent)
1. Create a GitHub repository
2. Push your code: 
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select branch `main` and folder `/ (root)`
5. Your site will be at: `https://YOUR_USERNAME.github.io/Support/`

## Option 5: Python Simple Server (Local Network Only)
If your team is on the same network:
1. Run: `python3 -m http.server 8000`
2. Share your local IP: `http://YOUR_IP:8000`
3. Find your IP: `ifconfig | grep "inet "` (Mac/Linux)

## Recommended for Quick Share:
**Netlify Drop** is the fastest - just drag and drop!
