import { useState } from 'react';
import Logo from '@/Logo.png';
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
  className="fixed top-4 left-0 z-50 w-[calc(100%-4rem)] mx-8"
    >
  <div
    className="glass-morphic rounded-2xl pl-0 pr-6 py-4 relative overflow-hidden"
    style={!isDark ? { background: '#D8DEE9' } : {}}
  >
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
        </div>
        
  <div className="flex items-center relative z-10 w-full h-16">
          {/* Only the desired nav links, left-aligned */}
          <div className="flex items-center gap-6 justify-start w-full pl-8">
            {['what-we-do', 'how-you-learn', 'legends', 'stalk-us'].map((id) => {
              const item = navItems.find((nav) => nav.id === id);
              if (!item) return null;
              return (
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
              );
            })}
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute left-[45%] inset-y-0 flex items-center -translate-x-1/2"
            style={{ position: 'absolute', left: '45%', top: 0, bottom: 0, transform: 'translateX(-50%)' }}
          >
            <img src={Logo} alt="Stockers Logo" className="h-10 w-auto" />
          </motion.div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover-lift ml-8"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button
            onClick={handleLogin}
            className="bg-primary/90 hover:bg-primary text-primary-foreground hover-lift ml-4"
          >
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;