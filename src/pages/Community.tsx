import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, MessageCircle, Star, Gift, Video, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChatBot from '@/components/AIChatBot';

const Community = () => {
  const features = [
    {
      icon: Calendar,
      title: "Book Webinars",
      description: "Schedule one-on-one sessions with expert farmers for just ₹100 per session.",
      color: "bg-leaf",
    },
    {
      icon: MapPin,
      title: "Find Local Farms",
      description: "Interactive map to discover organic farms near you with filters for crop type and language.",
      color: "bg-secondary",
    },
    {
      icon: MessageCircle,
      title: "Ask a Farmer Forum",
      description: "Post questions and get answers from experienced farmers. Community voting for best answers.",
      color: "bg-accent",
    },
    {
      icon: Video,
      title: "Live Q&A Sessions",
      description: "Weekly Zoom/Google Meet calls with expert farmers for real-time guidance.",
      color: "bg-summer-warm",
    },
  ];

  const rewardTiers = [
    { points: 100, reward: "Complete 1 webinar or field visit", badge: "🌱 Seedling" },
    { points: 500, reward: "Complete 5 sessions", badge: "🌿 Sprout" },
    { points: 1000, reward: "Free webinar unlocked!", badge: "🌳 Grower" },
    { points: 2500, reward: "Premium content access", badge: "🌾 Harvester" },
  ];

  const farmers = [
    { name: "Rajesh Kumar", specialty: "Composting Expert", location: "Rajasthan", sessions: 156, rating: 4.9 },
    { name: "Priya Sharma", specialty: "Vegetable Farming", location: "Maharashtra", sessions: 203, rating: 4.8 },
    { name: "Anil Patel", specialty: "Fruit Orchards", location: "Gujarat", sessions: 89, rating: 4.9 },
    { name: "Sunita Devi", specialty: "Organic Seeds", location: "Punjab", sessions: 124, rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Connect & Learn Together
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with farmers, book webinars, attend field visits, and earn rewards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-organic-lg transition-all"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Farmers */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Featured Expert Farmers</h2>
            <p className="text-muted-foreground">Book a session with our top-rated mentors</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {farmers.map((farmer, index) => (
              <motion.div
                key={farmer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-organic-lg transition-all text-center"
              >
                <div className="w-20 h-20 rounded-full bg-leaf/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold text-leaf">
                    {farmer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{farmer.name}</h3>
                <p className="text-sm text-secondary font-medium">{farmer.specialty}</p>
                <p className="text-xs text-muted-foreground mt-1">{farmer.location}</p>
                <div className="flex items-center justify-center gap-3 mt-4 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Video className="w-3 h-3" />
                    {farmer.sessions}
                  </span>
                  <span className="flex items-center gap-1 text-summer-warm">
                    <Star className="w-3 h-3 fill-current" />
                    {farmer.rating}
                  </span>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  Book Session - ₹100
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards System */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-summer-warm flex items-center justify-center">
                  <Gift className="w-6 h-6 text-bark" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">Reward Points</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Earn 100 points for every webinar or field visit. Collect 1000 points and unlock a free webinar session!
              </p>
              <div className="space-y-4">
                {rewardTiers.map((tier, index) => (
                  <motion.div
                    key={tier.points}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
                  >
                    <span className="text-2xl">{tier.badge}</span>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{tier.points} Points</p>
                      <p className="text-sm text-muted-foreground">{tier.reward}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-8 text-primary-foreground"
            >
              <Award className="w-16 h-16 mb-6 opacity-80" />
              <h3 className="font-display text-3xl font-bold mb-4">Earn Certifications</h3>
              <p className="text-primary-foreground/80 mb-6">
                Complete webinars and field visits to earn recognized certificates in organic farming.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-leaf-light" />
                  Certificate for on-field work completion
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-leaf-light" />
                  Certificate for webinar attendance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-leaf-light" />
                  Downloadable & shareable credentials
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <AIChatBot />
    </div>
  );
};

export default Community;
