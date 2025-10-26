import React from 'react';
import Hero from './components/Hero';
import AboutHow from './components/AboutHow';
import FeaturesIntegrations from './components/FeaturesIntegrations';
import TrustCTA from './components/TrustCTA';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
            <span className="font-semibold tracking-tight" style={{ color: '#1C2A4A' }}>Divenspire</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
            <a href="#join" className="font-medium" style={{ color: '#1C2A4A' }}>Join</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="about"><AboutHow /></div>
        <div id="features"><FeaturesIntegrations /></div>
        <TrustCTA />
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Divenspire. All rights reserved.</p>
          <p>
            Colors: Navy Blue (#1C2A4A), Gold (#D4AF37). Fonts: Inter/Poppins. Crafted with care.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
