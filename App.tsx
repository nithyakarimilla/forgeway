import React, { useState, useEffect } from 'react';
import { View } from './types';
import Dashboard from './views/Dashboard';
import BrandForge from './views/BrandForge';
import VoiceLines from './views/VoiceLines';
import DomainScout from './views/DomainScout';
import LogoForge from './views/LogoForge';
import ReviewMind from './views/ReviewMind';
import CampaignCraft from './views/CampaignCraft';
import VisualForge from './views/VisualForge';
import ImageEditor from './views/ImageEditor';
import ChatBuddy from './views/ChatBuddy';
import RealityLab from './views/RealityLab';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const [view, setView] = useState<View>(View.DASHBOARD);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderView = () => {
    switch (view) {
      case View.BRAND_FORGE: return <BrandForge onBack={() => setView(View.DASHBOARD)} />;
      case View.VOICE_LINES: return <VoiceLines onBack={() => setView(View.DASHBOARD)} />;
      case View.DOMAIN_SCOUT: return <DomainScout onBack={() => setView(View.DASHBOARD)} />;
      case View.LOGO_FORGE: return <LogoForge onBack={() => setView(View.DASHBOARD)} />;
      case View.REVIEW_MIND: return <ReviewMind onBack={() => setView(View.DASHBOARD)} />;
      case View.CAMPAIGN_CRAFT: return <CampaignCraft onBack={() => setView(View.DASHBOARD)} />;
      case View.VISUAL_FORGE: return <VisualForge onBack={() => setView(View.DASHBOARD)} />;
      case View.IMAGE_EDITOR: return <ImageEditor onBack={() => setView(View.DASHBOARD)} />;
      case View.REALITY_LAB: return <RealityLab onBack={() => setView(View.DASHBOARD)} />;
      default: return <Dashboard setView={setView} />;
    }
  };

  // Check if we are in a full-screen mode that shouldn't show global UI
  const isImmersiveView = view === View.REALITY_LAB;

  return (
    <div className={`min-h-screen flex flex-col items-center justify-start transition-colors duration-500 ${isImmersiveView ? '' : 'aurora-bg p-4 md:p-8'}`}>
      
      {!isImmersiveView && (
        <>
          {/* Header */}
          <header className="w-full max-w-6xl flex justify-between items-center mb-12">
            <div 
              className="flex items-center gap-2 cursor-pointer group" 
              onClick={() => setView(View.DASHBOARD)}
            >
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/50 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-emerald-500">
                ForgeWay
              </h1>
            </div>
            <ThemeToggle isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
          </header>

          {/* Main Content Dashboard */}
          <main className="w-full max-w-6xl flex-grow animate-in fade-in duration-700">
            {renderView()}
          </main>

          {/* Floating Reality Lab Button (Bottom-Left) */}
          <button
            onClick={() => setView(View.REALITY_LAB)}
            className="fixed bottom-8 left-8 w-16 h-16 metallic-emerald rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 pulse-emerald group"
            title="Open Reality Lab"
          >
            <svg className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>

          {/* Floating Chat Buddy (Bottom-Right) */}
          {!chatOpen && (
            <button
              onClick={() => setChatOpen(true)}
              className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group z-40"
              title="Open Assistant"
            >
              <svg className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </button>
          )}

          {chatOpen && (
            <ChatBuddy 
              onClose={() => setChatOpen(false)} 
              onMinimize={() => setChatOpen(false)}
            />
          )}
        </>
      )}

      {/* Render Immersive Reality Lab View - Fully standalone full-screen */}
      {isImmersiveView && renderView()}
    </div>
  );
};

export default App;