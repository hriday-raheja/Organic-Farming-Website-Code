import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, TrendingUp, Heart, Globe, Sprout, Sun, Droplets, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChatBot from '@/components/AIChatBot';

const WhyOrganic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Organic produce is free from harmful pesticides and chemicals, reducing health risks and providing better nutrition."
    },
    {
      icon: Globe,
      title: "Environmental Impact",
      description: "Organic farming protects soil health, conserves water, and promotes biodiversity while reducing pollution."
    },
    {
      icon: TrendingUp,
      title: "Economic Growth",
      description: "The organic market in India is growing at 25% annually, creating new opportunities for farmers and entrepreneurs."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Organic farming strengthens rural communities and creates direct connections between farmers and consumers."
    }
  ];

  const futureScope = [
    {
      icon: Sprout,
      title: "Growing Demand",
      description: "Global organic food market expected to reach $620 billion by 2030. India's organic market growing at 25% CAGR."
    },
    {
      icon: Sun,
      title: "Government Support",
      description: "Paramparagat Krishi Vikas Yojana and other schemes promoting organic farming with subsidies and training."
    },
    {
      icon: Droplets,
      title: "Sustainable Future",
      description: "Climate change makes organic farming essential. It uses 45% less energy and produces 40% fewer greenhouse gases."
    },
    {
      icon: Leaf,
      title: "Career Opportunities",
      description: "Certification experts, organic consultants, farm managers, and agri-tech roles are in high demand."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-leaf/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf/10 text-leaf text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              The Future of Agriculture
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Why <span className="text-primary">Organic Farming?</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover why millions are switching to organic farming and how it's 
              shaping the future of sustainable agriculture in India and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={ref} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Why You Should Join
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organic farming isn't just a trend—it's a revolution that benefits everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-leaf/30 hover:shadow-organic transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-leaf/10 flex items-center justify-center mb-4 group-hover:bg-leaf group-hover:text-primary-foreground transition-colors">
                  <benefit.icon className="w-7 h-7 text-leaf group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Scope Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Future Scope
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              The Future is Organic
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organic farming offers tremendous career opportunities and a sustainable path forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {futureScope.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-card shadow-organic"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "3M+", label: "Organic Farmers in India" },
              { value: "₹12,000 Cr", label: "Market Size by 2025" },
              { value: "25%", label: "Annual Growth Rate" },
              { value: "2.8M Ha", label: "Organic Farmland" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="font-display text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <AIChatBot />
    </div>
  );
};

export default WhyOrganic;
