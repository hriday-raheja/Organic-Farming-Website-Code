import { motion } from 'framer-motion';
import { Users, Code, Palette, Lightbulb, Presentation } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChatBot from '@/components/AIChatBot';

const Team = () => {
  const team = [
    {
      name: "Shekhar Gupta",
      role: "Team Leader & Guide",
      icon: Users,
      description: "Leading the vision and guiding the team towards building India's best organic farming education platform.",
      color: "bg-leaf",
    },
    {
      name: "Harshit Choudhary",
      role: "Main Idea, Frontend & Backend",
      icon: Code,
      description: "The visionary behind ZerøChem. Responsible for bringing the concept to life through coding and development.",
      color: "bg-secondary",
    },
    {
      name: "Vanshika Yadav",
      role: "UI/UX Designer",
      icon: Palette,
      description: "Crafting beautiful and intuitive user experiences that make learning organic farming a delight.",
      color: "bg-accent",
    },
    {
      name: "Hriday Raheja",
      role: "Presentation & Research",
      icon: Presentation,
      description: "Conducting in-depth research and creating compelling presentations to share our mission.",
      color: "bg-summer-warm",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-leaf/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf/10 text-leaf text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Meet the Team
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-leaf">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The passionate people behind ZerøChem working to revolutionize organic farming education in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-24 h-24 rounded-full ${member.color} flex items-center justify-center mx-auto mb-6`}>
                  <member.icon className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Lightbulb className="w-12 h-12 text-summer-warm mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that organic farming is the future of sustainable agriculture. Our mission is to make 
              organic farming education accessible, interactive, and practical for everyone—from curious students 
              to experienced farmers looking to transition. Through technology, community, and hands-on learning, 
              we're growing a greener future together.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIChatBot />
    </div>
  );
};

export default Team;
