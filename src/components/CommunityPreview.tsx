import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Calendar, MapPin, MessageCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CommunityPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Calendar,
      title: "Book Webinars",
      description: "Schedule sessions with expert farmers for just ₹100",
    },
    {
      icon: MapPin,
      title: "Find Local Farms",
      description: "Interactive map to discover organic farms nearby",
    },
    {
      icon: MessageCircle,
      title: "Ask Farmers",
      description: "Get answers from experienced practitioners",
    },
    {
      icon: Star,
      title: "Earn Rewards",
      description: "100 points per session, free webinar at 1000 points",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-10 gap-12 items-center">
          {/* Community Visual - 30% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <Users className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="font-display text-3xl font-bold mb-2">Join Our</h3>
                <h3 className="font-display text-3xl font-bold text-leaf-light mb-6">Community</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Connect with farmers, students, and experts across India.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-leaf-light border-2 border-primary flex items-center justify-center text-xs font-bold text-primary"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-primary-foreground/80">+500 active members</p>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
                className="absolute -top-4 -right-4 bg-summer-warm text-bark px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
              >
                ₹100 / session
              </motion.div>
            </div>
          </motion.div>

          {/* Content - 70% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Community
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Learn from <span className="text-primary">Real Farmers</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              Connect directly with experienced farmers for webinars, field visits, 
              and Q&A sessions. Earn reward points and grow your network.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/community">
              <Button variant="organic" size="lg" className="group">
                Join Community
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPreview;
