# How to Deploy Your Portfolio Website

## Choose Your Platform (Both Free)

### Option A: Vercel (Recommended)
- Easiest deployment
- Free custom domain support
- Fast global hosting

### Option B: Netlify
- Very similar to Vercel
- Good alternative if you have issues with Vercel

---

## Deploying to Vercel (Step-by-Step)

### Step 1: Prepare Your Portfolio File

1. Choose one of the three templates:
   - `portfolio-minimal.html` - Clean, simple
   - `portfolio-modern.html` - Dark theme, more visual
   - `portfolio-academic.html` - Traditional, research-focused

2. Rename your chosen file to `index.html`

3. Open the file in any text editor and replace:
   - `[YOUR NAME]` with your actual name
   - `[your.email@example.com]` with your email
   - All bracketed placeholder content with your real information

### Step 2: Create a GitHub Account (if you don't have one)

1. Go to github.com
2. Click "Sign Up"
3. Follow the registration process

### Step 3: Create a New Repository

1. Click the "+" button in the top right → "New repository"
2. Name it `portfolio` or `ai-projects`
3. Keep it Public
4. Check "Add a README file"
5. Click "Create repository"

### Step 4: Upload Your Files

1. In your new repository, click "Add file" → "Upload files"
2. Drag your `index.html` file (and any images/screenshots)
3. Click "Commit changes"

### Step 5: Connect to Vercel

1. Go to vercel.com
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "Add New..." → "Project"
5. Find your portfolio repository and click "Import"
6. Keep all default settings
7. Click "Deploy"

### Step 6: Your Site is Live!

Vercel will give you a URL like `portfolio-yourusername.vercel.app`

**To get a custom domain (optional):**
1. In your Vercel project, go to "Settings" → "Domains"
2. You can either:
   - Use a free `.vercel.app` subdomain
   - Connect a custom domain you own
   - Buy a domain through Vercel

---

## Deploying to Netlify (Alternative)

### Steps 1-4: Same as above

### Step 5: Connect to Netlify

1. Go to netlify.com
2. Click "Sign up" → "GitHub"
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Keep default settings
6. Click "Deploy site"

Your site will be live at `random-name.netlify.app`
(You can change this in Site settings → Domain management)

---

## Adding Multiple Pages

If you want separate pages for each project:

### File Structure:
```
your-repository/
├── index.html          (main portfolio page)
├── projects/
│   ├── scholarship-finder.html
│   ├── research-assistant.html
│   └── local-business-bot.html
└── images/
    ├── screenshot1.png
    └── screenshot2.png
```

### Link to Project Pages:
In your main `index.html`, link to projects like:
```html
<a href="projects/scholarship-finder.html">View Project Details</a>
```

---

## Common Issues & Fixes

### "Page not found" error
- Make sure your main file is named exactly `index.html`
- Check that file names don't have spaces

### Images not loading
- Use relative paths: `./images/screenshot.png`
- Make sure image files are uploaded to the repository

### Changes not showing up
- Wait 1-2 minutes for deployment
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Want to make changes
1. Edit files in GitHub directly, or
2. Upload new versions of files
3. Vercel/Netlify will automatically redeploy

---

## Making Your Portfolio Findable

### Add to your LinkedIn
1. Go to your LinkedIn profile
2. Click "Add profile section" → "Featured"
3. Add your portfolio URL

### Add to your resume
```
Portfolio: yourname.vercel.app
GitHub: github.com/yourusername
```

### Add to your email signature
```
[Your Name]
AI Portfolio: yourname.vercel.app
```

### Submit to Google
So your portfolio shows up in Google searches:
1. Go to google.com/ping
2. Enter your sitemap URL (usually yoursite.com/sitemap.xml)

Or just wait—Google will eventually find it.

---

## Maintaining Your Portfolio

### When to Update:
- After completing a new project
- After getting results/feedback on existing projects
- Before application deadlines (review everything)
- Quarterly at minimum

### What to Update:
- New projects (of course)
- Updated metrics ("now used by 100 students")
- New skills/tools learned
- Contact information changes

### Quick Update Process:
1. Go to your GitHub repository
2. Click on the file you want to edit
3. Click the pencil icon to edit
4. Make your changes
5. Click "Commit changes"
6. Vercel/Netlify will automatically redeploy (1-2 minutes)
