import React from 'react';
import { User, Link as LinkIcon, GraduationCap, CheckCircle } from 'lucide-react';

const AboutHow = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* About */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1C2A4A]">About Divenspire</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Divenspire is a mentorship and knowledge-sharing community where retired professionals with decades of
              experience share real-world lessons with young learners. It’s a place where experience meets curiosity —
              empowering both generations to grow together.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1C2A4A]">Benefits for Mentors</p>
                    <p className="text-sm text-gray-600 mt-1">Create impact, share wisdom, earn or volunteer, and find purpose in guiding the next generation.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1C2A4A]">Benefits for Learners</p>
                    <p className="text-sm text-gray-600 mt-1">Gain real-world insights, career clarity, and life skills through meaningful mentorship.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1C2A4A]">How It Works</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border p-5 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1C2A4A]"><User className="h-6 w-6 text-white" /></div>
                <p className="mt-3 font-medium text-[#1C2A4A]">Join</p>
                <p className="text-sm text-gray-600">Sign up as a mentor or learner.</p>
              </div>
              <div className="rounded-xl border p-5 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1C2A4A]"><LinkIcon className="h-6 w-6 text-white" /></div>
                <p className="mt-3 font-medium text-[#1C2A4A]">Connect</p>
                <p className="text-sm text-gray-600">Get matched based on goals and expertise.</p>
              </div>
              <div className="rounded-xl border p-5 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1C2A4A]"><GraduationCap className="h-6 w-6 text-white" /></div>
                <p className="mt-3 font-medium text-[#1C2A4A]">Learn</p>
                <p className="text-sm text-gray-600">Schedule sessions or attend workshops.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHow;
