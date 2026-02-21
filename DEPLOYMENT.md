# GitHub Pages Deployment Guide

## Prerequisites

- GitHub account
- Git installed locally
- This repository initialized (already done ✅)

## Step-by-Step Deployment

### 1. Create GitHub Repository

Go to [GitHub](https://github.com) and create a new repository:
- Repository name: `norden-expedition-2026` (or any name you prefer)
- Make it **Public** (required for free GitHub Pages)
- **Do NOT** initialize with README, .gitignore, or license (we already have these)

### 2. Add Remote and Push

Once you create the repository, GitHub will show you commands. Run these:

```bash
cd /Users/itays/dev/wix/multi-bark-pack/projects/norden-expedition-2026

# Make initial commit
git commit -m "Initial commit: Norden 901 Expedition 2026 website

🐾 Paw-Printed-By: Yoav-Gallant <yoav-gallant@bark-pack>"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/norden-expedition-2026.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 4. Access Your Site

After 1-2 minutes, your site will be live at:

```
https://YOUR_USERNAME.github.io/norden-expedition-2026/
```

GitHub will show you the exact URL in the Pages settings.

## Optional: Custom Domain

If you want to use a custom domain (e.g., `norden901.com`):

1. Add a `CNAME` file to the repository with your domain
2. Configure DNS at your domain registrar
3. Update GitHub Pages settings

See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Update: description of changes

🐾 Paw-Printed-By: Yoav-Gallant <yoav-gallant@bark-pack>"
git push
```

GitHub Pages will automatically rebuild and deploy your changes within 1-2 minutes.

## Troubleshooting

**Site not loading?**
- Wait 2-3 minutes for initial deployment
- Check that repository is Public
- Verify Pages is enabled in Settings
- Check browser console for errors

**Images not showing?**
- All image URLs use external CDN (Azure), so they should work immediately
- If using custom images, ensure they're committed to the repository

**Performance issues?**
- Images are lazy-loaded
- Animations respect `prefers-reduced-motion`
- No external dependencies except fonts

---

🚀 Ready to deploy! Follow the steps above to get your site live.
