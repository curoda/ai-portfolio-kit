# How to Deploy Your AI Portfolio Kit Sales Site

## What You Have

This folder contains a complete Next.js website that sells the AI Portfolio Kit. When visitors click "Download Now," they get the ZIP file containing all templates and guides.

## One-Time Setup (10 minutes)

### Step 1: Install Node.js (if you don't have it)

1. Go to https://nodejs.org
2. Download the LTS version
3. Run the installer, accept all defaults

To verify it worked, open Terminal (Mac) or Command Prompt (Windows) and type:
```
node --version
```
You should see a version number like `v20.x.x`

### Step 2: Deploy to Vercel (Easiest Option)

#### Option A: One-Click Deploy (Recommended)

1. Create a GitHub account if you don't have one: https://github.com
2. Create a new repository and upload this entire folder
3. Go to https://vercel.com and sign up with GitHub
4. Click "Add New Project"
5. Import your GitHub repository
6. Click "Deploy"

Your site will be live at `your-project.vercel.app` in about 2 minutes.

#### Option B: Deploy from Terminal

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to this folder in Terminal:
```bash
cd /Users/curtodar/ai-portfolio-kit
```

3. Run:
```bash
vercel
```

4. Follow the prompts (accept defaults)

Your site will be live!

---

## Connecting Real Payments (When You're Ready)

The current site runs in demo mode—clicking "Download" gives the product for free. Here's how to connect real payments:

### Option 1: Gumroad (Easiest)

1. Create a Gumroad account: https://gumroad.com
2. Create a new product, upload `public/AI-Portfolio-Kit-Complete.zip`
3. Set price to $39
4. Get your product link (like `yourname.gumroad.com/l/ai-portfolio-kit`)
5. In `src/app/page.tsx`, replace the `handlePurchase` function:

```typescript
const handlePurchase = () => {
  window.location.href = 'https://yourname.gumroad.com/l/ai-portfolio-kit';
}
```

### Option 2: Stripe Checkout (More Professional)

1. Create Stripe account: https://stripe.com
2. Create a Payment Link in your Stripe Dashboard
3. Replace the `handlePurchase` function with your Stripe Payment Link:

```typescript
const handlePurchase = () => {
  window.location.href = 'https://buy.stripe.com/your-payment-link';
}
```

### Option 3: Lemonsqueezy (Good Middle Ground)

1. Create account: https://lemonsqueezy.com
2. Add product with the ZIP file
3. Replace `handlePurchase` with your checkout URL

---

## Customizing the Site

### Change the Price
In `src/app/page.tsx`, search for "$39" and replace with your price.

### Change the Product Name
Search for "AI Portfolio Kit" and replace.

### Change Colors
In `src/app/globals.css`, modify the `:root` CSS variables at the top.

### Add Your Own Testimonials
In `src/app/page.tsx`, find the testimonials section and edit the quotes.

---

## Running Locally (For Testing)

1. Open Terminal and navigate to this folder
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. Open http://localhost:3000 in your browser

Changes you make will appear instantly.

---

## File Structure

```
ai-portfolio-kit/
├── src/
│   └── app/
│       ├── page.tsx       # Main landing page
│       ├── layout.tsx     # HTML structure
│       └── globals.css    # All styling
├── public/
│   └── AI-Portfolio-Kit-Complete.zip  # The product file
├── content/               # Source files for the product
│   ├── guides/
│   └── templates/
├── package.json           # Project configuration
└── DEPLOY-INSTRUCTIONS.md # This file
```

---

## Updating the Product

When you want to update the content in the ZIP file:

1. Edit files in the `content/` folder
2. Recreate the ZIP:
```bash
cd content && zip -r ../public/AI-Portfolio-Kit-Complete.zip . -x "*.DS_Store"
```
3. Redeploy (Vercel does this automatically if connected to GitHub)

---

## Domain Name (Optional)

### Free Options:
- `your-project.vercel.app` (Vercel default)
- `your-project.netlify.app` (Netlify default)

### Custom Domain (~$10-15/year):
1. Buy a domain from Namecheap, Google Domains, or similar
2. In Vercel: Settings → Domains → Add your domain
3. Follow Vercel's instructions to update DNS

Suggested domain ideas:
- `aiportfoliokit.com`
- `aiprojectportfolio.com`
- `studentaiportfolio.com`

---

## Getting Sales (The Hard Part)

Building the site is easy. Getting customers requires ongoing effort:

### Organic Ideas:
- Post in student/college prep communities (Reddit, Discord)
- Share on LinkedIn with personal story
- Write content about AI portfolios (blog, Twitter/X)
- Reach out to high school guidance counselors
- Partner with college prep tutors

### Paid Ideas (if you have budget):
- Google Ads for "AI portfolio student"
- Facebook/Instagram ads targeting parents of high schoolers
- Sponsor college prep newsletters

### Remember:
This product requires marketing effort. The $1000/month won't happen automatically—you need to actively promote it.

---

## Questions?

The site is built with Next.js 14. Documentation: https://nextjs.org/docs

For Vercel deployment: https://vercel.com/docs

Good luck!
