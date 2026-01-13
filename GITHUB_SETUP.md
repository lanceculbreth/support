# GitHub Pages Setup Instructions

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `Support` (or any name you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. **Do NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 2: Connect and Push Your Code

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd /Users/lanceculbreth/Documents/GitHub/Support
git remote add origin https://github.com/YOUR_USERNAME/Support.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 4: Your Site Will Be Live At:

After a few minutes, your site will be available at:

**https://YOUR_USERNAME.github.io/Support/**

(Replace `YOUR_USERNAME` with your GitHub username)

## Notes:

- It may take a few minutes for the site to become available after enabling Pages
- If your repository is private, you'll need GitHub Pro for Pages (free accounts require public repos)
- Updates are automatic - just push changes to the main branch
