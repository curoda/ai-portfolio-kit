'use client'

import { useState } from 'react'

export default function Home() {
  const [downloadStarted, setDownloadStarted] = useState(false)

  const handlePurchase = () => {
    // In production, this would connect to Stripe/Gumroad
    // For demo, we simulate a purchase and trigger download
    setDownloadStarted(true)

    // Trigger download of the content bundle
    const link = document.createElement('a')
    link.href = '/AI-Portfolio-Kit-Complete.zip'
    link.download = 'AI-Portfolio-Kit-Complete.zip'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Consistent button text for all CTA buttons
  const ctaButtonText = downloadStarted ? 'Check Your Downloads!' : 'Get Instant Access'
  const headerButtonText = downloadStarted ? 'Check Your Downloads!' : 'Get Started'
  const pricingButtonText = downloadStarted ? 'Check Your Downloads!' : 'Download Now — $39'

  return (
    <main>
      {/* Demo Banner */}
      <div className="w-full py-2 bg-gradient-to-r from-primary to-accent-teal text-white text-[10px] font-medium text-center px-4">
        Demo Mode — Downloads work, payment is simulated
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight">AI<span className="text-primary">PortfolioKit</span></span>
        </div>
        <button onClick={handlePurchase} className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20">
          {headerButtonText}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-12 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-teal/10 dark:bg-accent-teal/20 text-accent-teal text-xs font-bold border border-accent-teal/30 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse"></span>
          FOR HIGH SCHOOL &amp; COLLEGE STUDENTS
        </div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight mb-6">
          Turn Your AI Projects Into <br />
          <span className="gradient-text">College Admission Gold</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-base max-w-sm mx-auto mb-10 leading-relaxed">
          The complete toolkit to showcase AI projects that impress admissions officers and stand out from thousands of applicants.
        </p>
        <div className="flex flex-col items-center gap-8">
          <button onClick={handlePurchase} className="w-full max-w-xs bg-indigo-500 hover:bg-indigo-600 text-white py-4 rounded-xl text-lg font-bold shadow-xl shadow-indigo-500/30 transition-all transform active:scale-95">
            {ctaButtonText}
          </button>
          <div className="relative w-full max-w-lg mt-8 mx-auto perspective-1000">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-900 aspect-video transform rotate-1 scale-95 md:scale-100">
              <img alt="Portfolio Website Mockup" className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEjS8wxFWTeHUPN0zFyWjdVQDQGM2vyOxsaNSY6p-HLqQLpKMNCNmk_rzNBVK_4avoOFhUiHThNBoqpGGyOq8sp-L_jtFSCDPM69UjkGlH5A8qrr_7tyoA40RvIXfNstY7I9mvQM-R4sNruFfoU9uefHWjlsMwnUX_ukANNPldQN1q0mhvccI4VXEoieUGJKPrjfbSa1kNGDnLNmRcCcN7LugOxWEDYudYu2C5SKA6--nmJCYL_Dzevvcgc9KvNpVz9NzW3NtODW_q" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -right-4 -bottom-4 z-20 w-1/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-900 aspect-[9/19] transform -rotate-3">
              <img alt="Mobile Portfolio" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfB7wRvp2Jmn4rfcreTQDsAwD_TvXrljXNMePg_2k_nmdYm-dOBxIUsGm3yPXpDOiq4pKf9CBzYrkxaKJ5zKTkjO9Pl2cKHVcsQ9OZG46M4AyTBcWU_laU1kqKK7qFa6Z1afmkgTDFNbW03MqmF4nsvUPI0trxYeU8NuOOnJPJ55EN4jawMOJELdASMMvTCic7C1xwvVkR8zbl8O3h01BMlqSVLjdhryHPZF50uHf_4l51eXyrvl_njWu_6lhq2SIsc6GdN6vYviJ4" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-bold text-lg">$39</span>
            <span className="text-slate-400">One-time purchase, lifetime access</span>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-10 border-y border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <p className="text-center text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-8">TRUSTED BY STUDENTS AT</p>
        <div className="flex flex-wrap justify-center items-center gap-8 px-6 opacity-40 grayscale">
          <span className="font-bold text-lg italic">Stanford</span>
          <span className="font-bold text-lg italic">MIT</span>
          <span className="font-bold text-lg italic">Harvard</span>
          <span className="font-bold text-lg italic">Berkeley</span>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute top-40 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-4">The Problem</h2>
          <p className="text-slate-500 dark:text-slate-400">Admissions officers can&apos;t see what&apos;s in your head.</p>
        </div>
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-amber-500 opacity-40 group-hover:scale-110 transition-transform">warning</span>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-amber-500/10 rounded-xl mb-4 shadow-inner shadow-amber-500/20">
              <span className="material-symbols-outlined text-amber-500">priority_high</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Everyone Claims &quot;AI Skills&quot;</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Thousands of applicants write &quot;proficient in AI&quot;. Without proof, you blend in with the crowd.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-primary opacity-40 group-hover:scale-110 transition-transform">description</span>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl mb-4 shadow-inner shadow-primary/20">
              <span className="material-symbols-outlined text-primary">analytics</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Technical Work is Hard to Explain</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">You built something cool, but how do you describe it to a non-technical admissions officer?</p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-accent-teal/10 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-accent-teal opacity-40 group-hover:scale-110 transition-transform">extension</span>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-accent-teal/10 rounded-xl mb-4 shadow-inner shadow-accent-teal/20">
              <span className="material-symbols-outlined text-accent-teal">person_search</span>
            </div>
            <h3 className="font-bold text-lg mb-2">No Portfolio = No Proof</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Stanford and MIT want to see your work. A resume bullet point isn&apos;t enough anymore.</p>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="px-6 py-20 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.08),transparent)] pointer-events-none"></div>
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl font-extrabold mb-4 text-primary">What&apos;s Inside</h2>
          <p className="text-slate-500 dark:text-slate-400">Everything you need to showcase your work professionally.</p>
        </div>
        <div className="space-y-6 relative">
          <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
              <div className="w-20 h-16 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700 rotate-3 shadow-md">
                <img alt="Template Preview" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4iYR35KYz54e3Ac1c0l9rmVnMy4LFLIvErqjsSA1slMbRFTxjY0jYnTQYUbHq9W7CC_D-YMlGzHM75nOiawcbrtbRpLAD-awKJFvN241a9kWVgprt8ixD3TZaRBkw8Mn1vhXWvQlZ7Xi4gqPt1iw2S03E463VuE-1LUMYRbQjzE4Bk0w3Rshi0gFyad7CHjDjPc53TmcAIrtyqLPOIah4ZedVMrj7uLS4_0WZQocrETrgu1jOmgay_6kbFT9sgxqx5HQMPFp360Zl" />
              </div>
            </div>
            <h3 className="font-bold text-xl mb-2">Portfolio Website Templates</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Beautiful, ready-to-deploy templates designed specifically for AI project portfolios.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-accent-teal text-lg">check_circle</span>
                <span>3 complete HTML/CSS templates</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-accent-teal text-lg">check_circle</span>
                <span>Mobile-responsive designs</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
              <div className="w-20 h-16 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700 -rotate-2 shadow-md">
                <img alt="Framework Preview" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8S5kFwplMkumpqymS8hQ9EQM-MZrtr8MIY4ITS2UuK5vZK0s6x9kcG0IxwkYPTSJFQOIPgEU-pkpldaQUKvjN47Ush9xwnbYJ5Y2_co5tBrBzd0DZHpvhLkpLVjuVxvWfkCWhtwoPIEeuntuYcWfg2__HAnuoItGgitByI2Xisb8zVfSB9BlqSiN9LMmJ3LsLj67Y9GGfx0VyRdguLTcqAY0Ze7oiHWSL266R-1yD4UvJ_VqVk6e8jMBWhhUGi9XMikYpvfm-H3yL" />
              </div>
            </div>
            <h3 className="font-bold text-xl mb-2">Project Write-Up Framework</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">The exact structure to explain AI projects so anyone understands the value.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-accent-teal text-lg">check_circle</span>
                <span>The &quot;Problem → Solution → Impact&quot; template</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-accent-teal text-lg">check_circle</span>
                <span>10 real before/after examples</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
              <div className="w-24 h-16 rounded-lg bg-slate-900 overflow-hidden border border-slate-700 shadow-md">
                <div className="p-2 text-[8px] font-mono text-emerald-400"># README.md<br />&gt; Building my first AI agent...</div>
              </div>
            </div>
            <h3 className="font-bold text-xl mb-2">GitHub README Templates</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Professional documentation that makes your projects look polished and complete.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-accent-teal text-lg">check_circle</span>
                <span>5 README templates for different project types</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-accent-teal text-lg">check_circle</span>
                <span>Badge generators for tech stack</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-start mb-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">4</div>
              <div className="w-20 h-16 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700 rotate-1 shadow-md">
                <img alt="Idea Preview" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP1-ipNpOG8iU7BaN6Wqwg92pU9-lQvKBz2YRoS6Il32cS3cvE-qRbP7w9c2zKDq6kwpoUNOaP1uI6kkvl1H6Y3yQ0HJUe3OgekOO40ar9xT2nPRYrx7tScdvvAfkFdVH2bW-zsvKzdKtomjI9XQNgAFo8PpKWsumLXE1qEqvdBaA9_iHZG9u7vC0qJhfkl8DJ6gjo9KXVYvtBnOSVS3lpWHsIkNwtX5gm1l26UL2YNT6RdOCp6V5wjeaZQ5o6dFP9zcBQc7uqO1Qe" />
              </div>
            </div>
            <h3 className="font-bold text-xl mb-2">50+ No-Code AI Ideas</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Impressive projects you can build this weekend—no programming required.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-accent-teal text-lg">check_circle</span>
                <span>Ranked by impressiveness &amp; feasibility</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span className="material-symbols-outlined text-accent-teal text-lg">check_circle</span>
                <span>Step-by-step guides for top 15</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Project Ideas */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute -left-20 top-40 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl -z-10"></div>
        <h2 className="text-3xl font-extrabold text-center mb-10">Sample Project Ideas</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/50 relative overflow-hidden group">
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-primary">biotech</span>
            </div>
            <h4 className="text-primary font-bold uppercase text-xs tracking-wider mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">science</span>
              Research &amp; Analysis
            </h4>
            <ul className="space-y-3 text-sm relative z-10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                Literature review assistant using Deep Research
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                Automated research summarization system
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/50 relative overflow-hidden group">
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-emerald-500">bolt</span>
            </div>
            <h4 className="text-emerald-500 font-bold uppercase text-xs tracking-wider mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              Productivity Tools
            </h4>
            <ul className="space-y-3 text-sm relative z-10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40"></span>
                Custom GPT for school course catalog
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40"></span>
                Meeting notes to action items converter
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-rose-50/50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/50 relative overflow-hidden group">
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-rose-500">palette</span>
            </div>
            <h4 className="text-rose-500 font-bold uppercase text-xs tracking-wider mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              Creative Applications
            </h4>
            <ul className="space-y-3 text-sm relative z-10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500/40"></span>
                AI-powered story collaboration tool
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500/40"></span>
                Podcast show notes generator
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="px-6 py-16 text-center bg-slate-50 dark:bg-card-dark/30 border-y border-slate-100 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-8">Built for 2026&apos;s AI Tools</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="p-4 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
            <div className="font-bold text-xs">GPT-5</div>
            <div className="text-[10px] text-slate-400 uppercase mt-1">OpenAI</div>
          </div>
          <div className="p-4 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
            <div className="font-bold text-xs">Claude 3.5</div>
            <div className="text-[10px] text-slate-400 uppercase mt-1">Anthropic</div>
          </div>
          <div className="p-4 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
            <div className="font-bold text-xs">Gemini 2.5</div>
            <div className="text-[10px] text-slate-400 uppercase mt-1">Google</div>
          </div>
          <div className="p-4 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
            <div className="font-bold text-xs">Custom GPTs</div>
            <div className="text-[10px] text-slate-400 uppercase mt-1">Builder</div>
          </div>
          <div className="p-4 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
            <div className="font-bold text-xs">Perplexity</div>
            <div className="text-[10px] text-slate-400 uppercase mt-1">AI Search</div>
          </div>
          <div className="p-4 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
            <div className="font-bold text-xs">Make.com</div>
            <div className="text-[10px] text-slate-400 uppercase mt-1">Automation</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute -right-20 bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <h2 className="text-3xl font-extrabold text-center mb-10">What Students Say</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none italic text-slate-600 dark:text-slate-300 relative">
            <span className="material-symbols-outlined absolute top-4 right-4 text-slate-100 dark:text-slate-800 text-6xl -z-10">format_quote</span>
            &quot;I used the portfolio template and project framework for my Stanford application. My interviewer specifically mentioned how impressed they were with my AI projects documentation.&quot;
            <div className="flex items-center gap-3 mt-6 not-italic">
              <img alt="Jessica L." className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV93xdKTVPL6zBTZeGzsWrwh9wqH5qvVfyR-8p9ssQEcZ3EUHJH72w_8e2W2sjEkIJg2DHHRSpgIx1wWiN2w9QONNBXMkVRk7aYGmw03D775w4CnNecsdtR98CNXuSeXCmImLFs786YE3CIVP9SlS9ln1FqpG3rWUozO_mQsE0NouWt-nV4WW90OAHZ1ouw5yXWr-RhmFA78tx-XXIWmjMQv0UkyJCzlP-p-tLe2Z3yE0UitokeJYtUfxZ9pqj6lMcZlqegsG0JTn6" />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Jessica L.</div>
                <div className="text-[10px] text-slate-400 font-semibold tracking-wide uppercase">Admitted to Stanford &apos;30</div>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none italic text-slate-600 dark:text-slate-300 relative">
            <span className="material-symbols-outlined absolute top-4 right-4 text-slate-100 dark:text-slate-800 text-6xl -z-10">format_quote</span>
            &quot;Built 3 projects from the idea list in two weekends. Landed an AI research internship at a startup—they said my portfolio was what made me stand out from CS majors.&quot;
            <div className="flex items-center gap-3 mt-6 not-italic">
              <img alt="Marcus K." className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPp5M7D9KbKe-7sGphW_7XVyD54aMZ4B6XN6YQSaVd65KianVg_wB7CxlkYFFFmJ8eFoe3d8juvUOf4m0YxTRLdBCnc9RAGgsedR8U9P6-Wnn2t4xABlCfkiodu_9uQLBk2ratKlBgDjtk2AYFmqdTW0HIacDgVyduVSFzmnSt-WXqXO2thsg44jU3oJeUu6kaksna6YW33_JJpAT-KMJJGTsSwsI2WwDNpPwHy9hYvO3rNJZgN2N8w3rJHHRlzHBHCeV1FNz9CkcN" />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Marcus K.</div>
                <div className="text-[10px] text-slate-400 font-semibold tracking-wide uppercase">High School Senior</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-primary/5 to-transparent border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-md mx-auto p-8 rounded-3xl border-2 border-primary bg-white dark:bg-background-dark shadow-2xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Best Value</span>
          </div>
          <h2 className="text-2xl font-extrabold text-center mb-2">Get the Complete Kit</h2>
          <div className="text-center mb-8">
            <span className="text-5xl font-extrabold">$39</span>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-2">One-time purchase • Instant Download</p>
          </div>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              <span>3 Portfolio Website Templates</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              <span>Project Write-Up Framework + 10 Examples</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              <span>5 GitHub README Templates</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              <span>50+ No-Code AI Project Ideas</span>
            </li>
            <li className="flex items-center gap-3 text-sm font-bold text-accent-teal">
              <span className="material-symbols-outlined text-xl">verified</span>
              <span>Lifetime Updates &amp; Support</span>
            </li>
          </ul>
          <button onClick={handlePurchase} className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-indigo-500/40 mb-4 active:scale-95">
            {pricingButtonText}
          </button>
          <p className="text-center text-[11px] text-slate-400">30-day money-back guarantee. No questions asked.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 relative">
        <h2 className="text-3xl font-extrabold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-lg mx-auto">
          <details className="group border border-slate-200 dark:border-slate-800 rounded-xl bg-white/50 dark:bg-card-dark overflow-hidden backdrop-blur-sm shadow-sm">
            <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-sm list-none">
              Do I need to know how to code?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="p-5 pt-0 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-700/50">
              No. All 50+ project ideas can be completed using no-code tools like Custom GPTs, Zapier, and Make.com. The portfolio templates are copy-paste ready—just edit the text and deploy with one click.
            </div>
          </details>
          <details className="group border border-slate-200 dark:border-slate-800 rounded-xl bg-white/50 dark:bg-card-dark overflow-hidden backdrop-blur-sm shadow-sm">
            <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-sm list-none">
              Will these actually impress admissions?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="p-5 pt-0 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-700/50">
              Yes—when presented correctly. Admissions officers care about initiative, problem-solving, and impact. Our framework teaches you to highlight these aspects, not just the technical details.
            </div>
          </details>
          <details className="group border border-slate-200 dark:border-slate-800 rounded-xl bg-white/50 dark:bg-card-dark overflow-hidden backdrop-blur-sm shadow-sm">
            <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-sm list-none">
              How long does it take to build a project?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="p-5 pt-0 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-700/50">
              Most projects in our list can be completed in 2-8 hours. We&apos;ve ranked them by time investment so you can pick projects that fit your schedule.
            </div>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-200 dark:border-slate-800 text-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="mb-6">
          <span className="text-xl font-extrabold tracking-tight">AI<span className="text-primary">PortfolioKit</span></span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Helping students showcase their brilliance in the age of AI.</p>
        <div className="flex justify-center gap-6 mb-8 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms</a>
          <a className="hover:text-primary transition-colors" href="#">Support</a>
        </div>
        <p className="text-[10px] text-slate-400 font-medium">© 2026 AI Portfolio Kit. Built for ambitious students everywhere.</p>
      </footer>
    </main>
  )
}
