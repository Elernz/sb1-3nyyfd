import React from 'react';
import { ArrowRight, Zap, Sparkles, Target } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="gradient-blur w-[500px] h-[500px] bg-primary-500 left-0 top-0" />
      <div className="gradient-blur w-[500px] h-[500px] bg-secondary-500 right-0 bottom-0" />
      <div className="gradient-blur w-[500px] h-[500px] bg-accent-500 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-100 mb-6 animate-float">
            <Sparkles className="h-4 w-4 text-primary-500" />
            <span className="text-sm gradient-text from-primary-600 via-secondary-600 to-accent-600 font-medium">
              Supercharge Your Productivity
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Flow State,
            <span className="gradient-text from-primary-500 via-secondary-500 to-accent-500"> Unlocked</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of high performers who've discovered the secret to
            10x productivity with AI-powered flow state optimization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 animate-pulse-shadow flex items-center justify-center space-x-2 group">
              <Zap className="h-5 w-5" />
              <span>Unlock Your Potential</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full hover:shadow-lg hover:bg-white transition-all duration-300 border border-gray-200 flex items-center justify-center space-x-2">
              <Target className="h-5 w-5 text-secondary-500" />
              <span>See the Magic</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center space-x-2 justify-center bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
              <span className="gradient-text from-primary-600 to-primary-800">10x Productivity</span>
            </div>
            <div className="flex items-center space-x-2 justify-center bg-gradient-to-br from-secondary-50 to-secondary-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
              <span className="gradient-text from-secondary-600 to-secondary-800">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 justify-center bg-gradient-to-br from-accent-50 to-accent-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
              <span className="gradient-text from-accent-600 to-accent-800">Flow State</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}