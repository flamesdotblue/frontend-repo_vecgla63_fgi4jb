import React from 'react';
import { ArrowRight, User } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#1C2A4A' }}>
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=1600&auto=format&fit=crop"
          alt="Two generations learning together"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Divenspire – Connecting Experience with Curiosity
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl">
            Where retired professionals guide, inspire, and empower the next generation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-[#1C2A4A]"
              style={{ backgroundColor: '#D4AF37' }}
            >
              <User className="mr-2 h-5 w-5" /> Join as Mentor
            </a>
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-full border px-6 py-3 font-medium hover:bg-white/10 transition"
              style={{ borderColor: '#D4AF37', color: '#D4AF37' }}
            >
              Join as Learner <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
    </section>
  );
};

export default Hero;
