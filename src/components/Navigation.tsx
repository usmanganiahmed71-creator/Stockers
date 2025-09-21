import { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navigation = ({ isDark, toggleTheme }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Front page' },
    { id: 'what-we-do', label: 'What we do' },
    { id: 'how-you-learn', label: 'How will you learn' },
    { id: 'legends', label: 'Legends' },
    { id: 'stalk-us', label: 'Stalk us' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleLogin = () => {
    // This will be implemented when Supabase is connected
    console.log('Login clicked - Supabase integration needed');
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl"
    >
      <div className="glass-morphic rounded-2xl px-6 py-4 relative overflow-hidden">
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
        </div>
        
        <div className="grid grid-cols-3 items-center relative z-10 w-full">
          {/* Left - Navigation Links */}
          <div className="flex items-center space-x-6 justify-start">
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text"
            >
              Stockers
            </motion.div>
          </div>

          {/* Right - Navigation Links + Theme Toggle & Login */}
          <div className="flex items-center justify-end space-x-4">
            {/* Remaining nav items */}
            {navItems.slice(2).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative whitespace-nowrap hidden lg:block ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavRight"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover-lift"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            <Button
              onClick={handleLogin}
              className="bg-primary/90 hover:bg-primary text-primary-foreground hover-lift"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;