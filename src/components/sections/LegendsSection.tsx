import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
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
    <section id="legends" className="min-h-screen py-20 px-4">
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

        {/* Legends ScrollStack - Full width row cards with 20:80 split */}
  <ScrollStack useWindowScroll itemStackDistance={0} itemDistance={0}>
          {legends.map((legend, index) => (
            <ScrollStackItem key={legend.name}>
              <Card className="glass-morphic hover-lift w-full border-0 relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${legend.color} opacity-40`} />
                <div className="relative z-10 flex flex-row w-full h-full">
                  {/* 20% Image/Avatar */}
                  <div className="flex flex-col items-center justify-center w-1/5 min-w-[120px] p-2">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-3">
                        <div className="w-16 h-16 bg-background/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                          {legend.name.charAt(0)}
                        </div>
                      </div>
                      {/* Animated ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-20 h-20 border-2 border-primary/30 border-t-primary rounded-full"
                      />
                      {/* Achievement Badge */}
                      <div className="absolute -top-2 -right-2 z-20">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center"
                        >
                          <legend.icon size={16} className="text-primary" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  {/* 80% Text/Stats */}
                  <CardContent className="flex-1 flex flex-col justify-center p-2">
                    <div className="mb-2">
                      <h3 className="font-bold text-lg text-foreground mb-1">
                        {legend.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {legend.achievement}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">
                      {legend.description}
                    </p>
                    <div className="flex flex-row gap-8 items-center border-t border-border/20 pt-3">
                      <div className="flex flex-col text-xs">
                        <span className="text-muted-foreground">ROI:</span>
                        <span className="font-semibold text-primary">{legend.stats.roi}</span>
                      </div>
                      <div className="flex flex-col text-xs">
                        <span className="text-muted-foreground">Timeframe:</span>
                        <span className="font-medium text-foreground/80">{legend.stats.time}</span>
                      </div>
                      <div className="flex flex-col text-xs">
                        <span className="text-muted-foreground">Badge:</span>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {legend.stats.badge}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              </Card>
            </ScrollStackItem>
          ))}
        </ScrollStack>

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