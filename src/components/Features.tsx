import React from 'react';
import { 
  Focus, 
  Brain, 
  BarChart3, 
  Users, 
  Bell, 
  Cloud,
  Palette,
  Zap,
  Lock
} from 'lucide-react';

const features = [
  {
    icon: Focus,
    title: 'FlowBoost Mode',
    description: 'Enhanced focus sessions with ambient sound generation and distraction blocking.'
  },
  {
    icon: Brain,
    title: 'AI Assistant',
    description: 'Smart suggestions and automated task prioritization based on your work patterns.'
  },
  {
    icon: Palette,
    title: 'Dynamic Themes',
    description: 'Beautiful, adaptive color schemes that adjust to your daily rhythm.'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Context-aware reminders that know when and how to alert you.'
  },
  {
    icon: BarChart3,
    title: 'Rich Analytics',
    description: 'Beautiful visualizations of your productivity patterns and achievements.'
  },
  {
    icon: Users,
    title: 'Team Sync',
    description: 'Seamless collaboration with real-time updates and role management.'
  },
  {
    icon: Zap,
    title: 'Quick Actions',
    description: 'Voice commands and shortcuts for rapid task management.'
  },
  {
    icon: Cloud,
    title: 'Cloud Sync',
    description: 'Secure, real-time synchronization across all your devices.'
  },
  {
    icon: Lock,
    title: 'Premium Security',
    description: 'Enterprise-grade encryption and privacy controls for your data.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Peak Performance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every feature is crafted to enhance your productivity and
            create a seamless workflow experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 hover:border-purple-100 hover:shadow-lg transition-all duration-300 group"
            >
              <feature.icon className="h-10 w-10 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}