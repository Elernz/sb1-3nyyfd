import React from 'react';
import { Zap } from 'lucide-react';

export default function Logo() {
  return (
    <div className="relative flex items-center">
      <div className="relative group">
        <div className="absolute inset-0 animate-morph bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-white dark:bg-gray-900 rounded-xl p-2">
          <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 animate-spin-slow rounded-lg" />
            <div className="absolute inset-0.5 bg-white dark:bg-gray-900 rounded-lg" />
            <Zap className="relative w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />
          </div>
        </div>
      </div>
      <span className="ml-3 text-xl font-bold gradient-text from-primary-500 via-secondary-500 to-accent-500">
        FocusFlow
      </span>
    </div>
  );
}