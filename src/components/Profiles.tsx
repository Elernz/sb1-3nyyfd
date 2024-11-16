import React from 'react';
import { GraduationCap, Briefcase, Rocket } from 'lucide-react';

const profiles = [
  {
    icon: GraduationCap,
    title: 'Student',
    description: 'Track assignments, manage study schedules, and ace your exams with smart reminders.',
    features: ['Course planning', 'Exam countdown', 'Study analytics']
  },
  {
    icon: Briefcase,
    title: 'Professional',
    description: 'Streamline meetings, projects, and deadlines with intelligent task management.',
    features: ['Meeting scheduler', 'Project tracking', 'Team collaboration']
  },
  {
    icon: Rocket,
    title: 'Entrepreneur',
    description: 'Balance multiple projects, clients, and deadlines with automated prioritization.',
    features: ['Client management', 'Invoice tracking', 'Goal analytics']
  }
];

export default function Profiles() {
  return (
    <section id="profiles" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tailored to Your Role
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose a profile that matches your needs or customize your own
            for a perfectly personalized experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform" />
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <profile.icon className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {profile.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {profile.description}
                </p>
                <ul className="space-y-3">
                  {profile.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}