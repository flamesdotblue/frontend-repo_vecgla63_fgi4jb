import React from 'react';
import { HeartHandshake } from 'lucide-react';

const TrustCTA = () => {
  return (
    <section id="join" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Mission & Vision */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#1C2A4A]">Our Mission</h3>
              <p className="mt-2 text-gray-700">
                Empower retired professionals to share their wisdom and help young learners grow through real-world mentorship.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#1C2A4A]">Our Vision</h3>
              <p className="mt-2 text-gray-700">
                A global learning community where experience inspires curiosity and creates purpose beyond generations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 overflow-hidden rounded-2xl" style={{ backgroundColor: '#1C2A4A' }}>
          <div className="px-8 py-12 sm:px-12 sm:py-14 text-white">
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-6 w-6" style={{ color: '#D4AF37' }} />
              <p className="uppercase tracking-wider text-sm text-white/80">Join Divenspire</p>
            </div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold">Join the movement where experience meets curiosity.</h3>
            <p className="mt-2 text-white/90 max-w-2xl">Become a Mentor or Learner today and start your journey of growth and purpose.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-[#1C2A4A]"
                style={{ backgroundColor: '#D4AF37' }}
              >
                Join as Mentor
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border px-6 py-3 font-medium hover:bg-white/10 transition"
                style={{ borderColor: '#D4AF37', color: '#D4AF37' }}
              >
                Join as Learner
              </a>
            </div>
          </div>
        </div>

        {/* SEO note content visually (non-meta) */}
        <div className="sr-only">
          <h1>Divenspire – Connecting Experience with Curiosity | Mentorship Platform for Retired Professionals</h1>
          <p>Divenspire connects retired professionals with young learners to share wisdom, skills, and life lessons through mentorship and meaningful collaboration.</p>
        </div>
      </div>
    </section>
  );
};

export default TrustCTA;
