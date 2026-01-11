import { motion } from 'framer-motion';
import { Heart, Coffee, Sprout, TreeDeciduous, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChatBot from '@/components/AIChatBot';

const Support = () => {
  const tiers = [
    {
      icon: Coffee,
      name: "Seed Supporter",
      amount: "₹100",
      description: "Buy us a chai! Your support helps keep the platform running.",
      color: "bg-summer-warm",
    },
    {
      icon: Sprout,
      name: "Sprout Sponsor",
      amount: "₹500",
      description: "Help us create new course content and learning materials.",
      color: "bg-leaf",
    },
    {
      icon: TreeDeciduous,
      name: "Tree Champion",
      amount: "₹1,000",
      description: "Support farmer training programs and community webinars.",
      color: "bg-secondary",
    },
    {
      icon: Mountain,
      name: "Ecosystem Hero",
      amount: "₹5,000",
      description: "Enable us to reach more students and expand to new regions.",
      color: "bg-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-summer-warm/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-summer-warm/10 text-summer-warm text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Make a Difference
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Support <span className="text-summer-warm">ZerøChem</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your support helps us provide free organic farming education to students across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-organic-lg transition-all text-center"
              >
                <div className={`w-16 h-16 rounded-full ${tier.color} flex items-center justify-center mx-auto mb-4`}>
                  <tier.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{tier.name}</h3>
                <p className="text-3xl font-bold text-primary mb-3">{tier.amount}</p>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                <Button variant="organic" className="w-full">
                  Donate {tier.amount}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Your Impact</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Every contribution helps us make organic farming education accessible to all.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "500+", label: "Students Educated" },
                { value: "50+", label: "Farmers Connected" },
                { value: "20+", label: "Courses Created" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="font-display text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for larger donations */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Want to make a larger contribution?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us at{' '}
            <a href="mailto:shekhar.guptacse2024@indoreinstitue.com" className="text-primary hover:underline">
              shekhar.guptacse2024@indoreinstitue.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
      <AIChatBot />
    </div>
  );
};

export default Support;
