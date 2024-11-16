import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for getting started',
    features: [
      'Basic task management',
      'Personal dashboard',
      'Mobile app access',
      'Standard notifications',
      'Email support'
    ]
  },
  {
    name: 'Premium',
    price: '€10',
    period: '/month',
    description: 'For serious productivity enthusiasts',
    features: [
      'All Basic features',
      'FlowBoost mode',
      'AI assistant',
      'Advanced analytics',
      'Team collaboration',
      'Priority support',
      'Custom integrations',
      'Unlimited storage'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: '€500',
    period: '/year',
    description: 'For teams of 10+ members',
    features: [
      'All Premium features',
      'Dedicated support',
      'Custom API access',
      'SSO integration',
      'Advanced security',
      'SLA guarantee',
      'Custom training'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible pricing options designed to match your productivity needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-600 shadow-xl scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-600">{plan.period}</span>
                )}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <button
                className={`w-full py-3 px-6 rounded-full mb-8 ${
                  plan.highlighted
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition-colors`}
              >
                Get Started
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}