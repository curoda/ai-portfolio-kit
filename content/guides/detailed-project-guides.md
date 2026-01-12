# Detailed Project Guides: Step-by-Step Instructions

## Top 15 Projects with Complete Walkthroughs

These guides walk you through building the most impressive projects from start to finish. Each includes exact prompts, tool configurations, and tips for presenting the project effectively.

---

# Project Guide 1: Scholarship Matching Assistant

**Time:** 4-6 hours | **Impressiveness:** ⭐⭐⭐

## What You'll Build
A Custom GPT that helps students find scholarships matching their specific profile—GPA, major interests, background, extracurriculars, etc.

## Why This Impresses
- Solves a real problem with measurable impact
- Shows initiative in helping others
- Easy to quantify results ("helped X students find $Y in scholarships")

## Tools Needed
- OpenAI ChatGPT Plus ($20/month) for Custom GPT access
- Google Sheets or Airtable (free tier)
- 2-4 hours for scholarship research

## Step-by-Step Instructions

### Step 1: Build Your Scholarship Database (2 hours)
Create a spreadsheet with these columns:
- Scholarship Name
- Award Amount
- Deadline
- Eligibility (GPA, major, background, etc.)
- Application Link
- Key Requirements

**Where to find scholarships:**
- Fastweb.com
- Scholarships.com
- Bold.org
- Your school's counseling office
- Local community foundations
- Professional associations in fields you're interested in

**Aim for:** 100-500 scholarships for a comprehensive database

### Step 2: Create the Custom GPT

Go to ChatGPT → Explore GPTs → Create

**Name:** [School Name] Scholarship Finder (or your preferred name)

**Description:**
```
Helps students find scholarships that match their profile. Ask about your GPA, intended major, background, and interests to get personalized scholarship recommendations.
```

**Instructions (copy this):**
```
You are a helpful scholarship advisor for high school students. Your goal is to help students find scholarships they're eligible for and likely to win.

CONVERSATION FLOW:
1. Start by warmly greeting the student and asking about their profile:
   - GPA (weighted/unweighted)
   - Intended major or field of interest
   - Grade level
   - Any special circumstances (first-gen, specific heritage, community involvement, etc.)
   - State of residence

2. Based on their profile, search your knowledge base and recommend 3-5 highly relevant scholarships.

3. For each recommendation, explain:
   - Why this scholarship matches their profile
   - Award amount and deadline
   - Key requirements
   - Direct application link

4. Ask if they want more recommendations or have questions about specific scholarships.

IMPORTANT GUIDELINES:
- Be encouraging but realistic about competitiveness
- Prioritize scholarships with upcoming deadlines
- If a student seems to match multiple scholarships, prioritize higher award amounts and better fit
- Always verify eligibility requirements match the student's profile before recommending
- If you're uncertain about eligibility, say so and encourage them to verify

TONE:
- Supportive and encouraging
- Clear and organized
- Helpful without being overwhelming (3-5 recommendations at a time)
```

### Step 3: Upload Your Knowledge Base

In the Custom GPT configuration:
1. Click "Upload files"
2. Upload your scholarship spreadsheet (export as CSV or keep as Excel)
3. The GPT will use this data to make recommendations

### Step 4: Test Thoroughly

Test with different student profiles:
- High GPA STEM student
- First-generation college student
- Student interested in arts
- Student with financial need
- Various state residents

Refine your instructions based on what works/doesn't work.

### Step 5: Deploy and Track Impact

**Getting users:**
- Share with school counselors
- Post in school social media/newsletters
- Tell friends directly

**Tracking:**
- Ask users to let you know if they apply to or win scholarships
- Keep a simple log: Date, User (anonymous), Scholarships Found, Outcome

### How to Present This Project

**Short version (resume):**
```
ScholarMatch AI — Scholarship Discovery Tool
• Built Custom GPT helping first-gen and underrepresented students find relevant scholarships
• Database of 300+ scholarships with personalized matching based on student profile
• Used by 47 students; 5 reported finding scholarships totaling $23,000
```

**Medium version (portfolio):**
Include in your portfolio with:
- Screenshot of the GPT interface
- Sample conversation (with permission or anonymized)
- Impact metrics
- Link to try it (if you make it public)

---

# Project Guide 2: Local Business Customer Service Bot

**Time:** 3-5 hours | **Impressiveness:** ⭐⭐⭐

## What You'll Build
A Q&A assistant for a local business that handles common customer questions—hours, services, pricing, policies, etc.

## Why This Impresses
- Shows real-world application
- Demonstrates ability to work with stakeholders (the business)
- Creates tangible value you can quantify

## Step-by-Step Instructions

### Step 1: Find a Partner Business

Approach businesses you already frequent:
- Local restaurant
- Family friend's business
- Non-profit you volunteer with
- Small retail shop

**Pitch:** "I'm a student learning about AI, and I'd like to build a free customer service tool for your business as a project. It would answer common questions from customers automatically."

### Step 2: Gather Information

Interview the business owner/manager:
- What questions do customers ask most often?
- What information is on your website but people still ask about?
- What frustrates you about answering the same questions?

Collect:
- Menu/price list
- Hours of operation
- Location and parking info
- Policies (returns, reservations, etc.)
- Common special requests

### Step 3: Build the GPT

**Instructions template:**
```
You are a friendly customer service assistant for [Business Name], a [type of business] located in [City].

YOUR KNOWLEDGE:
[Paste all the information you gathered]

GUIDELINES:
- Be warm, helpful, and conversational
- If asked something outside your knowledge, say: "I don't have that information, but you can reach us at [phone/email] for help with that!"
- For time-sensitive questions (like "are you open right now?"), remind them to check the current date/time as your information may not be real-time
- If someone has a complaint, acknowledge it warmly and direct them to speak with a manager at [contact]

NEVER:
- Make up information you don't have
- Promise things the business can't deliver
- Handle actual transactions or reservations (direct them to appropriate channels)
```

### Step 4: Test with the Business

Have the business owner test it:
- Does it answer questions correctly?
- Is the tone right for their brand?
- What's missing?

Iterate until they're happy.

### Step 5: Deploy

Options for deployment:
1. **Simple:** Share the GPT link (if business owner has ChatGPT)
2. **Website widget:** Use tools like SiteGPT or Chatbase to embed
3. **Link on social media:** Business can share "Chat with our AI assistant"

### Step 6: Track Impact

Work with the business to track:
- Number of conversations
- Questions successfully answered
- Staff time saved (estimate)
- Customer feedback

### How to Present This

**The story matters:** Lead with the problem you solved, not the technology.

```
Customer Service Assistant for [Business Name]

Problem: [Business] staff spent 5+ hours weekly answering the same customer questions about hours, menu options, and parking—time that could be spent serving customers.

Solution: Built a conversational AI assistant trained on the restaurant's complete FAQ, menu, and policies. Customers can get instant answers via a link on the business's social media.

Impact:
- Handles 30+ customer inquiries weekly
- Business owner estimates 4 hours/week saved on repetitive questions
- 95% of test questions answered correctly

What I learned: Working with a real stakeholder taught me to gather requirements carefully and iterate based on feedback. The first version was too formal for this casual restaurant's brand.
```

---

# Project Guide 3: Deep Research Workflow

**Time:** 4-8 hours | **Impressiveness:** ⭐⭐⭐

## What You'll Build
A systematic research process combining multiple AI tools to comprehensively research any topic—great for school projects, debate prep, or genuine curiosity.

## Why This Impresses
- Shows sophisticated AI tool orchestration
- Demonstrates genuine intellectual work
- Produces high-quality research output

## The Workflow

```
Perplexity (Discovery) → Claude (Analysis) → NotebookLM (Synthesis) → Notion (Organization)
```

## Step-by-Step Instructions

### Step 1: Set Up Your Tools

**Free options:**
- Perplexity (free tier, or Pro for Deep Research)
- Claude.ai (free tier)
- NotebookLM (free, from Google)
- Notion (free for personal use)

### Step 2: Discovery Phase (Perplexity)

Use Perplexity to find sources and get an overview.

**Prompts for discovery:**
```
"What are the main academic debates around [topic]?"
"Find recent (2024-2026) research papers on [topic]"
"What are the strongest arguments for and against [position]?"
"Who are the leading researchers studying [topic]?"
```

**For Deep Research (Pro feature):**
```
"Conduct comprehensive research on [topic], focusing on [specific angle]. Include academic sources, recent developments, and key debates in the field."
```

**Output:** List of sources, key themes, initial understanding

### Step 3: Analysis Phase (Claude)

Take your sources to Claude for deeper analysis.

**Prompts for analysis:**
```
"I'm researching [topic]. Here's what I've found so far: [paste Perplexity summary].

Help me:
1. Identify the strongest and weakest arguments
2. Find gaps in the research
3. Suggest angles that might be underexplored"
```

```
"Compare these two sources on [topic]:
[Source 1 summary]
[Source 2 summary]

Where do they agree? Where do they contradict? Which arguments are more compelling and why?"
```

**Output:** Deeper analysis, identified contradictions, research gaps

### Step 4: Synthesis Phase (NotebookLM)

Upload your key sources to NotebookLM for synthesis.

**What to upload:**
- PDFs of key papers
- Saved articles
- Your notes so far

**NotebookLM strengths:**
- Creates audio summaries you can listen to
- Identifies connections across sources
- Generates study guides

**Prompts:**
```
"Based on these sources, what's the consensus view on [topic]?"
"Generate a study guide covering the key concepts and debates"
"What questions remain unanswered in this research?"
```

### Step 5: Organization (Notion)

Create a research database in Notion:

**Structure:**
```
📁 Research: [Topic]
├── 📄 Research Question
├── 📄 Key Findings
├── 📄 Source Summaries
│   ├── Source 1
│   ├── Source 2
│   └── ...
├── 📄 Arguments & Counterarguments
├── 📄 Research Gaps
├── 📄 My Thesis
└── 📄 Next Steps
```

### Step 6: Document Your Process

For your portfolio, document:
- Your research question
- The workflow you used
- Key insights from each phase
- How AI accelerated the process (with time estimates)
- What still required human judgment

### How to Present This

```
AI-Augmented Research Methodology

Research Question: [Your specific question]

Methodology:
Developed a systematic research workflow combining multiple AI tools:
1. Perplexity Deep Research for source discovery and initial synthesis
2. Claude for critical analysis and identifying contradictions
3. NotebookLM for cross-source synthesis and study guide generation
4. Notion for organization and documentation

Results:
- Processed 30+ academic sources in 2 days (vs. estimated 2 weeks traditional)
- Identified research gap that became my thesis focus
- Produced comprehensive literature review with proper citations

Key Learning: AI dramatically accelerated discovery and synthesis, but critical evaluation and original thinking still required human judgment. The AI found sources I would have missed; I determined which arguments were most compelling.
```

---

# Project Guide 4: Email Automation System

**Time:** 3-5 hours | **Impressiveness:** ⭐⭐

## What You'll Build
An automated system that categorizes incoming emails, extracts important information (deadlines, action items), and organizes everything automatically.

## Step-by-Step Instructions

### Step 1: Map Your Email Categories

Before building, decide your categories:
```
- College Applications (deadlines, required actions)
- Scholarships (deadlines, requirements)
- School/Classes (assignments, announcements)
- Extracurriculars (meeting times, tasks)
- Personal (everything else)
```

### Step 2: Set Up Zapier

1. Create Zapier account (free tier: 100 tasks/month)
2. Create new Zap: Gmail → OpenAI → Google Sheets

### Step 3: Configure the Trigger

**Trigger:** New Email in Gmail
**Filter:** Exclude sent emails, exclude newsletters (optional)

### Step 4: Add OpenAI Step

**Action:** Send prompt to GPT

**Prompt:**
```
Analyze this email and extract the following information in JSON format:

Email Subject: {{subject}}
Email Body: {{body}}
Sender: {{from}}

Return JSON with:
{
  "category": "[College/Scholarship/School/Extracurricular/Personal]",
  "has_deadline": true/false,
  "deadline_date": "YYYY-MM-DD or null",
  "action_required": true/false,
  "action_summary": "brief description of what needs to be done or null",
  "priority": "high/medium/low",
  "summary": "1-2 sentence summary of the email"
}
```

### Step 5: Add Google Sheets Step

Create a sheet with columns matching the JSON output.
Map each field from the AI response to the appropriate column.

### Step 6: (Optional) Add Calendar Integration

Add another step: If deadline exists, create Google Calendar event.

### Step 7: Test and Refine

Send yourself test emails of each type.
Adjust the prompt if categorization isn't accurate.

### Measuring Impact

Track for 2-4 weeks:
- Emails processed
- Time saved (estimate previous time spent sorting)
- Deadlines caught that you might have missed

---

# Project Guide 5: Study Group Coordinator

**Time:** 4-6 hours | **Impressiveness:** ⭐⭐

## What You'll Build
An AI assistant that helps coordinate your study group—scheduling, tracking what's been covered, generating review questions.

## Step-by-Step Instructions

### Step 1: Create Knowledge Base

Document for your study group:
- Subject and topics to cover
- Member availability patterns
- Past sessions and topics covered
- Upcoming tests/deadlines

### Step 2: Build Custom GPT

**Instructions:**
```
You are a study group coordinator for [Subject] helping [X] students prepare for [exam/class].

YOUR RESPONSIBILITIES:
1. Scheduling: When asked, suggest meeting times based on group availability
2. Session Planning: Suggest topics to cover based on what hasn't been reviewed yet
3. Review Questions: Generate practice questions on topics we've covered
4. Progress Tracking: Keep track of what we've studied and what remains

GROUP INFORMATION:
[Paste member availability, syllabus, test dates, etc.]

PAST SESSIONS:
[Update this as you meet]

For scheduling, always offer 2-3 time options and ask for confirmation.
For review questions, generate questions at varying difficulty levels.
```

### Step 3: Use Before Each Session

- Ask for topic suggestions based on progress
- Generate review questions for the session
- After session, update "Past Sessions" in the GPT

### Step 4: Track Impact

- Study group attendance/consistency
- Grade improvements
- Time saved on coordination

---

# Project Guide 6: Elderly Tech Support Assistant

**Time:** 4-6 hours | **Impressiveness:** ⭐⭐⭐

## What You'll Build
An extremely patient, simple, step-by-step tech assistant for elderly users learning to use smartphones, video calls, etc.

## Why This Impresses
- Shows empathy and user-centered design
- Addresses real accessibility needs
- Personal story makes it memorable

## Step-by-Step Instructions

### Step 1: Identify Specific Use Cases

Talk to your grandparent or elderly person you're helping:
- What do they want to do? (video call, see photos, send messages)
- What frustrates them?
- What have they tried that didn't work?

### Step 2: Build with Extreme Clarity

**Instructions:**
```
You are a patient, kind technology helper for elderly users who are not comfortable with smartphones and computers. Your user is [Name], who wants to [specific goals].

CRITICAL GUIDELINES:
1. Use extremely simple language. No jargon whatsoever.
2. Give ONE step at a time. Wait for confirmation before the next step.
3. Describe exactly what things look like: "a red button with a white phone icon"
4. Be endlessly patient. Never express frustration.
5. Offer encouragement: "You're doing great!"
6. If they're confused, try explaining differently, not just repeating.

WHAT [NAME] WANTS TO DO:
- Make video calls to family
- Look at photos family sends
- Send text messages

DEVICE: [iPhone 15 / Samsung Galaxy / etc.]

Example of good instruction:
"Look at your phone screen. At the very bottom, do you see a green square with a white telephone inside? Tap it once with your finger."

Example of bad instruction:
"Open the Phone app from your home screen."
```

### Step 3: Test with Your Person

Sit with them and have them use the GPT while you observe:
- Where do they get confused?
- What language doesn't work?
- What steps are missing?

### Step 4: Iterate Until It Works

This project is successful when they can actually accomplish tasks independently.

### How to Present This

The personal story is key:

```
Tech Support Assistant for Seniors

The Problem: My grandmother wanted to video call our family but found smartphone interfaces overwhelming. She'd given up trying after several frustrating attempts.

What I Built: A conversational tech assistant designed specifically for elderly users—giving one step at a time, using extremely simple language, and providing patient encouragement.

The Result: My grandmother now video calls us weekly. The assistant walks her through "Call Sarah" step-by-step whenever she forgets.

Design Decisions:
- One step at a time (research shows multi-step instructions overwhelm seniors)
- Visual descriptions ("green button with white phone") instead of jargon
- Constant encouragement to reduce tech anxiety
- Confirmation after each step before proceeding
```

---

# More Project Guides

The remaining guides follow similar patterns. Here are abbreviated versions:

---

## Guide 7: Interview Prep Coach

**Build a GPT that:**
- Conducts mock interviews for specific roles/schools
- Asks follow-up questions like a real interviewer
- Provides feedback on answer structure, specificity, and delivery

**Key prompt elements:**
- Role-play as interviewer
- Ask behavioral and situational questions
- After each response, provide specific feedback
- Track patterns across multiple practice sessions

---

## Guide 8: Event Planning Assistant

**Build a GPT that:**
- Maintains master list of tasks, deadlines, vendors
- Answers questions from committee members
- Generates timelines and checklists

**Best for:** Student council, club leaders planning events

---

## Guide 9: Debate Research Assistant

**Build a workflow combining:**
- Perplexity for finding evidence
- Custom GPT trained on debate formats
- Evidence card template generator

**Key features:**
- Anticipates opposing arguments
- Finds rebuttals to common positions
- Organizes evidence by strength and relevance

---

## Guide 10: Podcast/Content Production System

**Automation workflow:**
- Descript/Otter for transcription
- Claude for show notes generation
- Zapier to schedule social posts

**Tracks:** Episodes produced, time saved per episode, engagement metrics

---

## Guide 11: Personal Journal Analyst

**Private Claude Project that:**
- Receives journal entries
- Identifies patterns (mood, themes, growth)
- Asks reflective questions

**Privacy note:** Use Claude Projects (not shared), mention privacy considerations in your portfolio

---

## Guide 12: Non-Profit Volunteer Coordinator

**Full system:**
- Airtable database of volunteers + opportunities
- Custom GPT for matching volunteers to needs
- Zapier for reminder emails

**Impact metrics:** Volunteer retention, no-show rates, hours matched

---

## Guide 13: Community Resource Navigator

**Comprehensive assistant combining:**
- Food assistance
- Job training programs
- Social services
- Healthcare resources

**Partner with:** Local community organizations, food banks, job centers

---

## Guide 14: Data Analysis for Science Fair

**Use GPT-5 Code Interpreter or Claude's analysis mode:**
- Upload dataset
- Natural language analysis commands
- Generate visualizations
- Identify patterns and outliers

**How to present:** Show your methodology, not just results. AI found patterns; you interpreted meaning.

---

## Guide 15: AI-Enhanced Newsletter

**Build a regular newsletter combining:**
- Perplexity for topic research
- Claude for outline generation
- You write the actual content
- Substack/Beehiiv for distribution

**Key distinction:** AI assists with research and ideation; you do the writing and voice.

---

## Final Notes on These Guides

### Quality Over Quantity
Pick 1-2 projects and execute them exceptionally rather than doing 5 mediocre ones.

### The Story Matters
How you present the project matters as much as what you built. Practice explaining:
- Why you chose this problem
- What you learned
- What you'd do differently

### Iterate Based on Real Usage
Every project improves dramatically after real users try it. Get feedback early.

### Document Everything
Screenshot your process, save interesting conversations, track metrics from day one.
