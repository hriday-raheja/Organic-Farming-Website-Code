import { motion } from 'framer-motion';
import { ArrowRight, Leaf, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-farming.jpg';

const HeroSection = () => {
  const features = [
    { icon: Leaf, text: 'Organic Farming' },
    { icon: BookOpen, text: 'Interactive Learning' },
    { icon: Users, text: 'Expert Community' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Organic farming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bark/95 via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bark/60 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf/20 backdrop-blur-sm border border-leaf-light/30 text-leaf-light text-sm font-medium">
              <Leaf className="w-4 h-4" />
              Welcome to the future of farming
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
          >
            Growing Food,{' '}
            <span className="text-leaf-light">Growing Futures</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-cream/80 mb-8 leading-relaxed max-w-2xl"
          >
            Master organic farming through interactive lessons, hands-on field experiences, 
            and connections with expert farmers. Join India's most innovative agricultural 
            learning platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link to="/courses">
              <Button variant="hero" size="xl" className="group">
                Start Learning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/community">
              <Button 
                variant="outline" 
                size="xl" 
                className="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream hover:border-cream/50"
              >
                Join Community
              </Button>
            </Link>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20"
              >
                <feature.icon className="w-5 h-5 text-leaf-light" />
                <span className="text-sm font-medium text-cream">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
};

export default HeroSection;
