
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme, actualTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return actualTheme === 'dark' ? <Moon size={20} /> : <Sun size={20} />;
    }
    return theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />;
  };

  const getLabel = () => {
    if (theme === 'system') return 'System';
    return theme === 'dark' ? 'Dark' : 'Light';
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 bg-card hover:bg-card/80 text-card-foreground border border-border p-3 rounded-full transition-all duration-200 hover:scale-105 z-50 shadow-lg"
      title={`Current theme: ${getLabel()} - Click to cycle through themes`}
    >
      <div className="flex items-center justify-center">
        {getIcon()}
      </div>
    </button>
  );
};

export default ThemeToggle;
