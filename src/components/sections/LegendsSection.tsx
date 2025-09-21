import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, TrendingUp, Target, Zap } from 'lucide-react';

const LegendsSection = () => {
  const legends = [
    {
      name: 'Sarah Chen',
      achievement: 'Top Performer 2024',
      description: 'Achieved 240% portfolio growth using advanced options strategies learned in our intermediate course.',
      image: '/placeholder.svg',
      stats: { roi: '240%', time: '8 months', badge: 'Options Master' },
      icon: Trophy,
      color: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      name: 'Marcus Rodriguez',
      achievement: 'Risk Management Expert',
      description: 'Successfully navigated market volatility with disciplined risk management, protecting capital during downturns.',
      image: '/placeholder.svg',
      stats: { roi: '185%', time: '1 year', badge: 'Risk Guru' },
      icon: Target,
      color: 'from-blue-500/20 to-primary/20'
    },
    {
      name: 'Emily Watson',
      achievement: 'Fastest Learner',
      description: 'From complete beginner to profitable trader in just 6 months through dedicated learning and practice.',
      image: '/placeholder.svg',
      stats: { roi: '165%', time: '6 months', badge: 'Speed Demon' },
      icon: Zap,
      color: 'from-primary/20 to-purple-500/20'
    },
    {
      name: 'David Kim',
      achievement: 'Sector Rotation Specialist',
      description: 'Mastered sector analysis and rotation strategies, consistently outperforming market benchmarks.',
      image: '/placeholder.svg',
      stats: { roi: '320%', time: '14 months', badge: 'Sector Pro' },
      icon: TrendingUp,
      color: 'from-green-500/20 to-primary/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="legends" className="min-h-screen flex items-center py-20 px-4">
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
            <span className="gradient-text">Legends</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our top achievers who transformed their financial futures through dedication, 
            learning, and smart investing strategies.
          </p>
        </motion.div>

        {/* Legends Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {legends.map((legend, index) => (
            <motion.div
              key={legend.name}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <Card className="glass-morphic hover-lift h-full border-0 relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${legend.color} opacity-40`} />
                
                {/* Achievement Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center"
                  >
                    <legend.icon size={16} className="text-primary" />
                  </motion.div>
                </div>

                <CardContent className="p-6 relative z-10 h-full flex flex-col">
                  {/* Profile Image */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-3">
                      <div className="w-16 h-16 bg-background/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                        {legend.name.charAt(0)}
                      </div>
                    </div>
                    
                    {/* Animated ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-20 h-20 mx-auto border-2 border-primary/30 border-t-primary rounded-full"
                    />
                  </div>

                  {/* Name and Achievement */}
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {legend.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {legend.achievement}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground text-center mb-4 flex-grow">
                    {legend.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-2 pt-4 border-t border-border/20">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">ROI:</span>
                      <span className="font-semibold text-primary">{legend.stats.roi}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">Timeframe:</span>
                      <span className="font-medium text-foreground/80">{legend.stats.time}</span>
                    </div>
                    <div className="flex justify-center mt-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {legend.stats.badge}
                      </span>
                    </div>
                  </div>
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
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block glass-morphic rounded-2xl p-8 hover-lift"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ready to Join Our Legends?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Start your journey today and see your name among our top achievers. 
              Every expert was once a beginner.
            </p>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl mb-4"
            >
              🚀
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegendsSection;