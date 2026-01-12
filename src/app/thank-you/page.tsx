'use client'

import { useEffect, useState } from 'react'

export default function ThankYou() {
  const [downloaded, setDownloaded] = useState(false)

  useEffect(() => {
    // Auto-trigger download after a short delay
    const timer = setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/AI-Portfolio-Kit-Complete.zip'
      link.download = 'AI-Portfolio-Kit-Complete.zip'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setDownloaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleManualDownload = () => {
    const link = document.createElement('a')
    link.href = '/AI-Portfolio-Kit-Complete.zip'
    link.download = 'AI-Portfolio-Kit-Complete.zip'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setDownloaded(true)
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-5xl text-emerald-500">check_circle</span>
        </div>

        <h1 className="text-3xl font-extrabold mb-4">Thank You!</h1>
        <p className="text-slate-400 mb-8">
          Your purchase was successful. Your download should start automatically.
        </p>

        {/* Download Status */}
        <div className="p-6 rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700 mb-8">
          {downloaded ? (
            <div className="flex items-center justify-center gap-3 text-emerald-500">
              <span className="material-symbols-outlined">download_done</span>
              <span className="font-semibold">Download started!</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 text-slate-400">
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
              <span>Preparing your download...</span>
            </div>
          )}
        </div>

        {/* Manual Download Button */}
        <button
          onClick={handleManualDownload}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-indigo-500/40 mb-4 active:scale-95"
        >
          Download Again
        </button>

        <p className="text-sm text-slate-400 mb-8">
          If your download didn&apos;t start, click the button above.
        </p>

        {/* What's Next */}
        <div className="text-left p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-500">rocket_launch</span>
            What&apos;s Next?
          </h3>
          <ol className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li className="flex gap-3">
              <span className="font-bold text-indigo-500">1.</span>
              Unzip the downloaded file
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-indigo-500">2.</span>
              Read the Getting Started guide
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-indigo-500">3.</span>
              Pick a portfolio template and customize it
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-indigo-500">4.</span>
              Choose your first AI project from the ideas list
            </li>
          </ol>
        </div>

        {/* Back to Home */}
        <a
          href="/"
          className="inline-flex items-center gap-2 mt-8 text-sm text-slate-400 hover:text-indigo-500 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to home
        </a>
      </div>
    </main>
  )
}
