#!/bin/bash
# GitHub Pages Setup Script
# Run this after creating your GitHub repository

echo "🚀 GitHub Pages Setup"
echo ""
echo "Step 1: Create a GitHub repository"
echo "  Go to: https://github.com/new"
echo "  Repository name: Support (or your preferred name)"
echo "  Make it PUBLIC (required for free GitHub Pages)"
echo "  Do NOT initialize with README, .gitignore, or license"
echo ""
read -p "Press Enter when you've created the repository, or Ctrl+C to cancel..."
echo ""
echo "Step 2: Enter your GitHub username:"
read -p "GitHub Username: " GITHUB_USERNAME
echo ""
echo "Enter your repository name (default: Support):"
read -p "Repository Name [Support]: " REPO_NAME
REPO_NAME=${REPO_NAME:-Support}
echo ""
echo "Step 3: Connecting and pushing to GitHub..."
echo ""

# Add remote
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git 2>/dev/null || git remote set-url origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

# Push to GitHub
git push -u origin main

echo ""
echo "✅ Code pushed to GitHub!"
echo ""
echo "Step 4: Enable GitHub Pages"
echo "  1. Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/pages"
echo "  2. Under 'Source', select:"
echo "     - Branch: main"
echo "     - Folder: / (root)"
echo "  3. Click 'Save'"
echo ""
echo "Your site will be available at:"
echo "  https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "Note: It may take a few minutes for the site to become available."
