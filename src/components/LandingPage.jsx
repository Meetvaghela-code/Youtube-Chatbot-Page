import React, { useState } from 'react';
import { Github, Youtube, Chrome, Zap, MessageSquare, Database, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const demoSrc = '/youtube_chatbot_1.mp4';

  return (
    <div className="landing-wrapper">
      <style>{`
        /* --- CRITICAL FIX: FORCE FULL SCREEN --- */
        /* This block overrides the default Vite 'root' constraints */
        :root, html, body, #root {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow-x: hidden !important;
            background-color: #000;
        }

        /* --- Global Font & Base Styles --- */
        body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #f5f5f7;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        .landing-wrapper {
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            overflow-x: hidden;
        }

        /* --- Premium Gradients & Backgrounds --- */
        .hero-section {
            position: relative;
            width: 100vw; /* Explicitly full viewport width */
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: radial-gradient(circle at 50% 10%, #1a1a1a 0%, #000000 100%);
            padding-top: 80px;
        }

        /* The "Aurora" Background Blob */
        .glow-blob {
            position: absolute;
            width: 600px;
            height: 600px;
            background: linear-gradient(135deg, #ff0000 0%, #ff4d4d 100%);
            filter: blur(150px);
            border-radius: 50%;
            opacity: 0.15;
            top: -100px;
            left: 50%;
            transform: translateX(-50%);
            animation: pulseGlow 8s ease-in-out infinite alternate;
            z-index: 0;
            pointer-events: none;
        }

        @keyframes pulseGlow {
            0% { transform: translateX(-50%) scale(1); opacity: 0.15; }
            100% { transform: translateX(-50%) scale(1.2); opacity: 0.25; }
        }

        /* --- Glassmorphism Cards --- */
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glass-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            border-color: rgba(255, 255, 255, 0.15);
        }

        /* --- Typography --- */
        .hero-title {
            font-weight: 800;
            letter-spacing: -0.02em;
            background: linear-gradient(180deg, #ffffff 0%, #a1a1aa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 30px rgba(255,255,255,0.1);
        }

        .gradient-text-red {
            background: linear-gradient(135deg, #ff0000 0%, #ff8888 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* --- Chrome Badge --- */
        .chrome-badge {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50px;
            padding: 8px 16px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 0.85rem;
            font-weight: 500;
            margin-bottom: 2rem;
            transition: background 0.3s;
        }

        .chrome-badge:hover {
            background: rgba(255, 255, 255, 0.1);
            cursor: default;
        }

        /* --- Buttons --- */
        .btn-premium {
            background: white;
            color: black;
            border-radius: 50px;
            padding: 12px 32px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            display: inline-flex;
            align-items: center;
            text-decoration: none;
        }

        .btn-premium:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
            color: black;
        }

        .btn-outline-premium {
            background: transparent;
            color: white;
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 50px;
            padding: 12px 32px;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            text-decoration: none;
        }

        .btn-outline-premium:hover {
            border-color: white;
            background: rgba(255,255,255,0.05);
            color: white;
        }

        /* --- Feature Icons --- */
        .feature-icon-box {
            width: 60px;
            height: 60px;
            border-radius: 18px;
            background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
            color: #fff;
        }

        /* --- Tech Stack Ticker --- */
        .tech-pill {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 0.8rem;
            color: #888;
            font-family: monospace;
        }

        /* Bootstrap Overrides for Dark Mode feel */
        .navbar-brand:hover { color: white; }
        /* Demo modal styles */
        .demo-modal{ position: fixed; inset:0; display:flex; align-items:center; justify-content:center; z-index:2000 }
        .demo-modal-backdrop{ position:absolute; inset:0; background:rgba(0,0,0,0.65) }
        .demo-modal-content{ position:relative; width:90%; max-width:960px; aspect-ratio:16/9; background:#000; border-radius:12px; overflow:hidden; box-shadow:0 30px 60px rgba(0,0,0,0.6); z-index:2010 }
        .demo-modal-content video{ width:100%; height:100%; display:block }
        .demo-modal-close{ position:absolute; right:8px; top:8px; z-index:2020; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#fff; width:36px; height:36px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; cursor:pointer }
      `}</style>

      {demoOpen && (
        <div className="demo-modal" role="dialog" aria-modal="true">
          <div className="demo-modal-backdrop" onClick={() => setDemoOpen(false)}></div>
          <div className="demo-modal-content">
            <button className="demo-modal-close" onClick={() => setDemoOpen(false)}>×</button>
            <video src={demoSrc} controls autoPlay />
          </div>
        </div>
      )}
      
      {/* --- Navbar --- */}
      <nav className="navbar navbar-expand-lg fixed-top py-3" style={{ backdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.5)', borderBottom: '1px solid rgba(255,255,255,0.05)', width: '100%' }}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2 text-white fw-bold" href="#">
            <Youtube size={24} color="#ff0000" fill="#ff0000" />
            <span>RAG Chatbot</span>
          </a>
          <div className="d-flex align-items-center gap-3">
             <a href="https://github.com/Meetvaghela-code/Youtube-Chatbot" target="_blank" rel="noreferrer" className="text-white opacity-75 hover-opacity-100 transition">
                <Github size={22} />
             </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="hero-section text-center px-4">
        <div className="glow-blob"></div>
        
        <div className="container position-relative z-2">
          
          {/* Chrome Tag */}
          <div className="chrome-badge">
            <Chrome size={16} className="text-primary" />
            <span className="text-light">Chrome Extension Available</span>
          </div>

          {/* Main Title */}
          <h1 className="display-1 hero-title mb-4">
            Don't just watch.<br />
            <span className="gradient-text-red">Chat with it.</span>
          </h1>

          <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Transform passive video consumption into active learning. 
            Our RAG-powered AI analyzes YouTube transcripts to answer your questions in real-time.
          </p>

          {/* CTAs */}
          <div className="d-flex justify-content-center gap-3 mb-5">
            <button className="btn-premium gap-2" onClick={() => setDemoOpen(true)}>
              Try the Demo <ArrowRight size={18} />
            </button>
            <button className="btn-outline-premium gap-2" onClick={() => window.open('https://github.com/Meetvaghela-code/Youtube-Chatbot')}>
              <Github size={18} /> View Code
            </button>
          </div>

          {/* Floating UI Mockup */}
          <div className="glass-card p-2 mx-auto mt-5" style={{ maxWidth: '800px', borderRadius: '16px 16px 0 0', borderBottom: 'none' }}>
            <div className="d-flex align-items-center gap-2 px-3 py-2 border-bottom border-secondary border-opacity-25">
               <div className="rounded-circle bg-danger" style={{width:10, height:10}}></div>
               <div className="rounded-circle bg-warning" style={{width:10, height:10}}></div>
               <div className="rounded-circle bg-success" style={{width:10, height:10}}></div>
            </div>
            <div className="p-4 d-flex flex-column align-items-center gap-3 py-5 bg-black bg-opacity-50 rounded-bottom">
               <div className="spinner-border text-danger mb-3" role="status" style={{width: '3rem', height: '3rem'}}></div>
               <h5 className="text-white">Processing Video Transcript...</h5>
               <p className="text-secondary small">Generating Embeddings • Building Vector Store</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Grid --- */}
      <section className="py-5" style={{ background: '#050505', width: '100%' }}>
        <div className="container py-5">
          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <div className="feature-icon-box">
                  <Database size={28} className="text-info" />
                </div>
                <h3 className="h4 text-white mb-3">Vector Search</h3>
                <p className="text-secondary">
                  Powered by FAISS and HuggingFace embeddings. We convert video transcripts into mathematical vectors for semantic search.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <div className="feature-icon-box">
                  <Zap size={28} className="text-warning" />
                </div>
                <h3 className="h4 text-white mb-3">Instant RAG</h3>
                <p className="text-secondary">
                  Retrieval Augmented Generation pipeline fetches the exact timestamped context before sending it to the LLM.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <div className="feature-icon-box">
                  <MessageSquare size={28} className="text-success" />
                </div>
                <h3 className="h4 text-white mb-3">Gemini 2.0 Flash</h3>
                <p className="text-secondary">
                  Utilizing Google's latest multimodal model for lightning-fast reasoning and summarization of long content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Tech Stack Footer --- */}
      <footer className="py-4 border-top border-secondary border-opacity-10" style={{ background: '#000', width: '100%' }}>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
            <span className="text-secondary small">Built with:</span>
            <span className="tech-pill">React + Vite</span>
            <span className="tech-pill">FastAPI</span>
            <span className="tech-pill">LangChain</span>
            <span className="tech-pill">Bootstrap 5</span>
          </div>
          <p className="text-secondary small mb-0">© 2025 YouTube RAG Project. Open Source.</p>
        </div>
      </footer>

    </div>
  );
}
