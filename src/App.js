"use client"

import { useState, useEffect } from "react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"

export default function NotAEcosystemLanding() {
  const [isLoading, setIsLoading] = useState(false)
  const [urlInput, setUrlInput] = useState("")
  const [gridOffset, setGridOffset] = useState(0)
  const [typewriterText, setTypewriterText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const fullText = "Better fonts. Better sarcasm."

  useEffect(() => {
    const interval = setInterval(() => {
      setGridOffset((prev) => (prev + 1) % 40)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setShowCursor(false)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])


    const handleDownload = () => {
      setIsLoading(true);
    
      setTimeout(() => {
        setIsLoading(false);
        window.open("https://notatwitter.vercel.app/", "_blank");
      }, 2000);
    };
    
  

  const handleSeriousToggle = () => {
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100])
    }
  }

  return (
    <div className="min-h-screen bg-black text-white font-jersey relative overflow-hidden crt-flicker scanlines screen-grain">
      {/* ASCII Grid Background */}
      <div
        className="fixed inset-0 left-1/2 -translate-x-1/2 min-h-screen w-full lg:w-[60vw] opacity-10 pointer-events-none ascii-art text-xs z-0 transition-all duration-500"
        style={{
          backgroundImage: `
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, white 1px, transparent 1px)
          `,
          backgroundSize: "10px 12px",
          transform: `translate(${gridOffset}px, ${gridOffset}px)`,
        }}
      />

      {/* Terminal-Style Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/60 lg:bg-black/40 border-b border-white/20 shadow-xl transition-all duration-500">
        <div className="w-full max-w-none lg:max-w-[60%] mx-auto px-8 py-4 rounded-b-2xl lg:rounded-b-3xl border-x border-white/10 lg:border-x-0" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 1.5px 0 0 rgba(255,255,255,0.08)'}}>
          <div className="flex items-center justify-between font-jersey">
            <div className="text-4xl tracking-wider text-white hover:text-black hover:bg-white px-2 glitch">[NotA]</div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#twitter"
                className="text-white hover:text-black hover:bg-white px-4 py-2 border border-white text-lg tracking-wide glitch"
              >
                &gt; TWITTER
              </a>
              <a
                href="#clippa"
                className="text-white hover:text-black hover:bg-white px-4 py-2 border border-white text-lg tracking-wide glitch"
              >
                &gt; CLIPPA
              </a>
              <button
                onClick={handleSeriousToggle}
                className="text-white hover:text-black hover:bg-white px-4 py-2 border border-white text-lg tracking-wide glitch"
              >
                &gt; ???
              </button>
            </div>

            {/* ASCII Mobile Menu */}
            <div className="md:hidden">
              <button className="text-white hover:text-black hover:bg-white p-2 border border-white ascii-art text-xl glitch">
                ≡
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-32">
        <div className="w-full max-w-none lg:max-w-[60%] mx-auto text-center relative z-10">
          <div className="mb-24">
            {/* ASCII Art Title */}
            <div className="ascii-art text-2xl md:text-5xl mb-1 leading-none">
              <pre className="w-[90vw] glitch hover:text-black hover:bg-white px-8 py-1">
                {`
███╗   ██╗ ██████╗ ████████╗ █████╗ 
████╗  ██║██╔═══██╗╚══██╔══╝██╔══██╗
██╔██╗ ██║██║   ██║   ██║   ███████║
██║╚██╗██║██║   ██║   ██║   ██╔══██║
██║ ╚████║╚██████╔╝   ██║   ██║  ██║
╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝
`}
              </pre>
            </div>

            <h1 className="text-6xl md:text-8xl font-jersey mb-12 tracking-tight leading-none glitch">ECOSYSTEM</h1>

            <div className="text-2xl md:text-3xl max-w-2xl mx-auto leading-tight font-jersey mb-16 terminal-cursor">
              {typewriterText}
              {showCursor && <span className="animate-pulse">█</span>}
            </div>
          </div>

          {/* Terminal Device Display */}
          <div className="relative mb-24">
            <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Twitter Terminal */}
              <a
                href="https://notatwitter.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="crt-border bg-black text-white p-6 hover:bg-white hover:text-black glitch block"
              >
                <div className="ascii-art text-sm mb-4">┌─ NotATwitter ─────────────┐</div>
                <div className="font-jersey text-xl mb-4 tracking-wider">[TWITTER.EXE]</div>
                <div className="space-y-2 ascii-art text-xs">
                  <div>█████████████████░░░░░░░</div>
                  <div>██████████░░░░░░░░░░░░░░░</div>
                  <div>████████████████░░░░░░░░</div>
                </div>
                <div className="mt-4 font-jersey text-sm">&gt; #NotSarcasm_</div>
                <div className="ascii-art text-sm mt-2">└───────────────────────────┘</div>
              </a>

              {/* Clippa Terminal */}
              <a
                href="https://notaclippa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="crt-border bg-black text-white p-6 hover:bg-white hover:text-black glitch block"
              >
                <div className="ascii-art text-sm mb-4">┌─ NotAClippa ──────────────┐</div>
                <div className="font-jersey text-xl mb-4 tracking-wider">[CLIPPA.EXE]</div>
                <div className="space-y-2 ascii-art text-xs">
                  <div>┌─────────────────────────┐</div>
                  <div>│ DOWNLOAD_READY.STATUS │</div>
                  <div>└─────────────────────────┘</div>
                </div>
                <div className="mt-4 font-jersey text-sm">&gt; EXECUTE_</div>
                <div className="ascii-art text-sm mt-2">└───────────────────────────┘</div>
              </a>
            </div>
          </div>

          {/* <Button
            size="lg"
            className="bg-white text-black hover:bg-black hover:text-white border-4 border-white px-16 py-8 text-3xl font-jersey tracking-wider glitch"
          >
            [ENTER_SYSTEM]
            <span className="ml-4 ascii-art">&gt;&gt;</span>
          </Button> */}
        </div>
      </section>

      {/* NotATwitter Terminal Section */}
      <section className="py-40 px-8 border-t-4 border-white">
        <div className="w-full max-w-none lg:max-w-[60%] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8 bg-white text-black px-8 py-4 inline-block font-jersey text-2xl tracking-wider crt-border glitch">
                [NotATwitter.exe]
              </div>
              <h2 className="text-6xl md:text-7xl font-jersey mb-12 leading-tight glitch">DON'T_UPGRADE.</h2>
              <p className="text-2xl font-jersey mb-16 tracking-wide terminal-cursor">SHARE_REAL_THOUGHTS.</p>
              <Button onClick={()=>{
                window.open("https://notatwitter.vercel.app/", "_blank");
              }}
                variant="outline"
                className="border-4 border-white text-white hover:bg-white hover:text-black bg-transparent px-12 py-6 text-2xl font-jersey tracking-wider glitch"
              >
                [EXECUTE]
                <span className="ml-4 ascii-art">&gt;</span>
              </Button>
            </div>

            <div
              className="relative overflow-hidden crt-border p-8 glitch"
              style={{
                backgroundColor: "#0e0e0e",
                color: "#f0e6e6",
              }}
            >
              {/* Terminal Header */}
              <div className="ascii-art text-sm mb-6 border-b border-white pb-2">
                ┌─ TWITTER_TERMINAL_v2.1 ────────────────────────────────────┐
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-jersey text-lg crt-border">
                    N
                  </div>
                  <div>
                    <div className="font-jersey text-xl tracking-wide text-white">root@nishanth:~$</div>
                    <div className="font-jersey text-sm opacity-60 text-gray-300">@not_trying</div>
                  </div>
                </div>

                <div className="font-jersey text-lg leading-relaxed text-white bg-black p-4 crt-border">
                  &gt; Built this for getting real thoughts and reviews from ai personas.
                  <br />
                  &gt; No social judging. Just honest opinions.
                  <br />
                  &gt; Like-minded people will find your tweets. 🤝<br />
                  &gt; _
                </div>

                <div className="flex items-center space-x-6 font-jersey text-lg text-white">
                  <span>REPLIES: 127</span>
                  <span>RETWEETS: 89</span>
                  <span>LIKES: 342</span>
                </div>

                <div className="border-t-2 border-white pt-6">
                  <div className="font-jersey text-lg mb-4 tracking-wider text-white">&gt; TRENDING_TOPICS:</div>
                  <div className="space-y-2 font-jersey text-xl text-white">
                    <div>&gt; #RealTalk</div>
                    <div>&gt; #NoJudgment</div>
                  </div>
                </div>
              </div>

              <div className="ascii-art text-sm mt-6 border-t border-white pt-2">
                └────────────────────────────────────────────────────────────┘
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NotAClippa Terminal Section */}
      <section className="py-40 px-8 border-t-4 border-white">
        <div className="w-full max-w-none lg:max-w-[60%] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              className="relative overflow-hidden crt-border p-8 order-2 md:order-1 glitch"
              style={{
                backgroundColor: "#0e0e0e",
                color: "#f0e6e6",
              }}
            >
              {/* Terminal Header */}
              <div className="ascii-art text-sm mb-6 border-b border-white pb-2">
                ┌─ CLIPPA_DOWNLOADER_v1.0 ──────────────────────────────────┐
              </div>

              <div className="space-y-8">
                <div className="text-center">
                  <div className="font-jersey text-2xl mb-4 tracking-wider text-white">[NotAClippa.exe]</div>
                  <div className="font-jersey text-lg mb-6">
                    &gt; Download Twitter, Instagram, TikTok videos without ads.
                    <br />
                    &gt; Free. Deal With It.
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="ascii-art text-sm">INPUT_URL:</div>
                  <Input
                    placeholder="> Paste URL here..."
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    className="bg-black text-white border-2 border-white focus:border-white font-jersey text-lg p-4 placeholder-gray-400 glitch"
                  />

                  <Button
                    onClick={handleDownload}
                    disabled={isLoading}
                    className="w-full bg-white text-black hover:bg-black hover:text-white border-4 border-white font-jersey text-xl py-4 tracking-wider glitch"
                  >
                    {isLoading ? (
                      <span className="ascii-art">[████████████████████] 100% DOWNLOADING...</span>
                    ) : (
                      <>
                        <span className="ascii-art mr-4">▼</span>
                        [EXECUTE_DOWNLOAD]
                      </>
                    )}
                  </Button>
                </div>

                <div className="ascii-art text-sm">SUPPORTED_PLATFORMS:</div>
                <div className="flex justify-center space-x-8 pt-4">
                  <div className="flex items-center space-x-2 font-jersey text-lg hover:bg-white hover:text-black px-2 py-1 glitch text-white">
                    <span>X</span>
                  </div>
                  <div className="flex items-center space-x-2 font-jersey text-lg hover:bg-white hover:text-black px-2 py-1 glitch text-white">
                    <span>IG</span>
                  </div>
                  <div className="flex items-center space-x-2 font-jersey text-lg hover:bg-white hover:text-black px-2 py-1 glitch text-white">
                    <span>TT</span>
                  </div>
                  <div className="font-jersey text-lg line-through opacity-50">YT</div>
                </div>
              </div>

              <div className="ascii-art text-sm mt-6 border-t border-white pt-2">
                └────────────────────────────────────────────────────────────┘
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="mb-8 bg-black text-white px-8 py-4 inline-block font-jersey text-2xl tracking-wider crt-border glitch">
                [NotAClippa.exe]
              </div>
              <h2 className="text-6xl md:text-7xl font-jersey mb-12 leading-tight glitch">DOWNLOAD_</h2>
              <p className="text-2xl font-jersey mb-16 tracking-wide terminal-cursor">IF_YOU_DARE.</p>
              <div className="font-jersey text-lg opacity-75 ascii-art">
                * ERROR: YouTube support disabled.
                <br />* REASON: Dev.hatred = true;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Values Grid */}
      <section className="py-40 px-8 border-t-4 border-white">
        <div className="w-full max-w-none lg:max-w-[60%] mx-auto">
          <div className="ascii-art text-center mb-16 text-2xl">
            ┌─ SYSTEM_VALUES.CONFIG ─────────────────────────────────────────┐
          </div>

          <h2 className="text-5xl md:text-6xl font-jersey mb-24 text-center leading-tight glitch">
            HALF_MEASURES
            <br />
            PERFECTED.EXE
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="crt-border bg-black text-white p-8 hover:bg-white hover:text-black text-center glitch">
              <div className="ascii-art text-4xl mb-6">⚡</div>
              <h3 className="font-jersey text-2xl mb-4 tracking-wider">[REBELS.DLL]</h3>
              <p className="font-jersey text-lg">CONFORMITY = OVERRATED</p>
            </div>

            <div className="crt-border bg-black text-white p-8 hover:bg-white hover:text-black text-center glitch">
              <div className="ascii-art text-4xl mb-6">🛡</div>
              <h3 className="font-jersey text-2xl mb-4 tracking-wider">[OPTIMIZED.SYS]</h3>
              <p className="font-jersey text-lg">ACCIDENTALLY_BETTER</p>
            </div>

            <div className="crt-border bg-black text-white p-8 hover:bg-white hover:text-black text-center glitch">
              <div className="ascii-art text-4xl mb-6">✨</div>
              <h3 className="font-jersey text-2xl mb-4 tracking-wider">[SARCASTIC.BAT]</h3>
              <p className="font-jersey text-lg">UX + ATTITUDE</p>
            </div>

            <div className="crt-border bg-black text-white p-8 hover:bg-white hover:text-black text-center glitch">
              <div className="ascii-art text-4xl mb-6">☕</div>
              <h3 className="font-jersey text-2xl mb-4 tracking-wider">[FREE.EXE]</h3>
              <p className="font-jersey text-lg">BUSINESS_MODEL = SPITE</p>
            </div>
          </div>

          <div className="ascii-art text-center mt-16 text-2xl">
            └────────────────────────────────────────────────────────────────┘
          </div>
        </div>
      </section>

      {/* Terminal Footer */}
      <footer className="py-24 px-8 border-t-4 border-white">
        <div className="w-full max-w-none lg:max-w-[60%] mx-auto text-center">
          <div className="ascii-art text-lg mb-8">
            ┌─ SYSTEM_INFO ──────────────────────────────────────────────────┐
          </div>

          <p className="font-jersey text-2xl mb-6 tracking-wider terminal-cursor">MADE_WITH_😐</p>
          <p className="font-jersey text-xl mb-12">© 2025 NotA_Systems – STILL_JUDGING.EXE</p>

          <button
            onClick={handleSeriousToggle}
            className="font-jersey text-lg hover:bg-white hover:text-black px-8 py-4 border-2 border-white glitch"
          >
            [MAKE_IT_SERIOUS.BAT]
          </button>

          <div className="ascii-art text-lg mt-8">
            └────────────────────────────────────────────────────────────────┘
          </div>
        </div>
      </footer>
    </div>
  )
}
