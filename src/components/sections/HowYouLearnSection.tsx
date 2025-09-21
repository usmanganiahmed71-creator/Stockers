import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, TrendingUp, Award, Users } from 'lucide-react';

const HowYouLearnSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const learningPaths = [
    {
      title: 'Beginner Path',
      description: 'Perfect for those new to stock market investing',
      icon: BookOpen,
      level: 'Beginner',
      modules: [
        'Stock Market Fundamentals',
        'Understanding Financial Statements',
        'Risk Management Basics',
        'Portfolio Diversification',
        'Investment Psychology',
        'Market Analysis Introduction'
      ],
      color: 'from-blue-500/20 to-primary/20',
      iconColor: 'text-blue-500',
      buttonText: 'Start Learning'
    },
    {
      title: 'Intermediate Path',
      description: 'For investors ready to advance their skills',
      icon: TrendingUp,
      level: 'Intermediate',
      modules: [
        'Technical Analysis Mastery',
        'Options Trading Strategies',
        'Sector Analysis & Rotation',
        'Advanced Portfolio Management',
        'Derivatives & Hedging',
        'Market Timing Techniques'
      ],
      color: 'from-primary/20 to-accent/20',
      iconColor: 'text-primary',
      buttonText: 'Continue Journey'
    }
  ];

  return (
    <section id="how-you-learn" className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">How Will You Learn?</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your learning path and embark on a journey to financial literacy. 
            Our structured approach adapts to your experience level.
          </p>
        </motion.div>

        {/* Learning Path Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <Card className="glass-morphic hover-lift h-full relative overflow-hidden border-0">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-50`} />
                
                {/* Content */}
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-lg bg-background/20 flex items-center justify-center ${path.iconColor}`}
                    >
                      <path.icon size={24} />
                    </motion.div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {path.level}
                    </span>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {path.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {path.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-6">
                  {/* Modules List */}
                  <div>
                    <h4 className="font-semibold text-foreground/90 mb-3">Course Modules:</h4>
                    <ul className="space-y-2">
                      {path.modules.map((module, moduleIndex) => (
                        <motion.li
                          key={module}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: 0.1 * moduleIndex,
                            duration: 0.4 
                          }}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {module}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/20 pt-4">
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>{Math.floor(Math.random() * 5000) + 1000}+ learners</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={16} className="mr-1" />
                      <span>Certificate</span>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    className="w-full bg-primary/90 hover:bg-primary text-primary-foreground hover-lift group-hover:shadow-lg group-hover:shadow-primary/25"
                    size="lg"
                  >
                    {path.buttonText}
                  </Button>
                </CardContent>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Not sure which path to choose? Take our quick assessment.
          </p>
          <Button 
            variant="outline" 
            className="hover-lift glass-morphic border-primary/20 hover:bg-primary/10"
          >
            Find My Level
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowYouLearnSection;