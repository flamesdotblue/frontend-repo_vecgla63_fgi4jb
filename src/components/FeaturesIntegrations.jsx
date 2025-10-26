import React from 'react';
import { Users, Calendar, MessageCircle, Shield, CreditCard, Star, BookOpen, LayoutDashboard, MessageSquare, Sparkles } from 'lucide-react';

const features = [
  { icon: Users, title: 'Mentor & Learner Profiles', desc: 'Rich profiles with expertise, availability, and reviews.' },
  { icon: BookOpen, title: '1-on-1 or Group Sessions', desc: 'Personalized mentorship or collaborative workshops.' },
  { icon: MessageSquare, title: 'Community Feed', desc: 'Share posts, articles, and updates with the community.' },
  { icon: MessageCircle, title: 'Private Chat', desc: 'Secure one-to-one messaging and attachments.' },
  { icon: Calendar, title: 'Workshop Calendar', desc: 'Plan, schedule, and manage sessions with reminders.' },
  { icon: Star, title: 'Feedback & Ratings', desc: 'Celebrate great mentors and track growth.' },
  { icon: LayoutDashboard, title: 'Admin Dashboard', desc: 'Approve mentors, monitor sessions, and manage users.' },
  { icon: CreditCard, title: 'Secure Payments', desc: 'Stripe / Razorpay integration with platform commission.' },
];

const integrations = [
  { icon: Calendar, label: 'Calendly (Scheduling)' },
  { icon: MessageCircle, label: 'Gmail / WhatsApp (Notifications)' },
  { icon: CreditCard, label: 'Stripe / Razorpay (Payments)' },
  { icon: Users, label: 'Zoom / Google Meet (Video)' },
];

const FeaturesIntegrations = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Key Features */}
        <h3 className="text-3xl sm:text-4xl font-semibold text-[#1C2A4A]">Key Features</h3>
        <p className="mt-2 text-gray-700">Designed to enable meaningful, safe, and impactful mentorship.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white border p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: '#1C2A4A' }}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="mt-4 font-medium text-[#1C2A4A]">{title}</h4>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        {/* Mentorship System */}
        <div className="mt-16 rounded-2xl border bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-[#D4AF37]" />
            <h3 className="text-2xl font-semibold text-[#1C2A4A]">Mentorship System</h3>
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-medium text-[#1C2A4A]">For Mentors</p>
              <p className="text-sm text-gray-600 mt-1">Create a profile, set a fee or volunteer for free, and share your expertise.</p>
            </div>
            <div>
              <p className="font-medium text-[#1C2A4A]">For Learners</p>
              <p className="text-sm text-gray-600 mt-1">Book sessions or attend workshops that fit your goals and schedule.</p>
            </div>
            <div>
              <p className="font-medium text-[#1C2A4A]">Platform Model</p>
              <p className="text-sm text-gray-600 mt-1">A 10–15% commission per paid session sustains the platform and community.</p>
            </div>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="rounded-xl bg-gray-50 p-4">Optional AI-based mentor matching for tailored guidance.</div>
            <div className="rounded-xl bg-gray-50 p-4">Certificate generation to recognize learner milestones.</div>
          </div>
        </div>

        {/* Integrations */}
        <div className="mt-16">
          <h4 className="text-2xl font-semibold text-[#1C2A4A]">Integrations</h4>
          <p className="text-gray-700 mt-1">Works with tools you already love.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrations.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: '#1C2A4A' }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-[#1C2A4A] font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security highlight */}
        <div className="mt-16 rounded-2xl border bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-[#D4AF37]" />
            <h4 className="text-2xl font-semibold text-[#1C2A4A]">Admin & Security</h4>
          </div>
          <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
            <li>Approve mentor profiles and verify credentials.</li>
            <li>Monitor sessions, transactions, and reports.</li>
            <li>Manage users, reviews, and posts with role-based access.</li>
            <li>Secure login and encrypted data storage.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesIntegrations;
