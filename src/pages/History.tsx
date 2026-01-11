import { motion } from 'framer-motion';
import { Sparkles, Leaf } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChatBot from '@/components/AIChatBot';

const History = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              The <span className="text-secondary">History</span> of ZerøChem
            </h1>
            <p className="text-xl text-muted-foreground">
              How an amla fruit sparked a revolution in organic farming education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-card p-8 rounded-2xl shadow-organic mb-8">
              <Leaf className="w-12 h-12 text-leaf mb-6" />
              <blockquote className="border-l-4 border-leaf pl-6 italic text-foreground text-lg">
                "It was a gentle, yet unexpected, tap on the head that sparked a sudden burst of creativity within me."
              </blockquote>
              <p className="text-muted-foreground mt-4">— Harshit Choudhary, Founder</p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                Coder Harshit Choudhary says, <em>"I was visiting my village when I stumbled upon my friends 
                engrossed in a lively game of cricket. As I watched them play, my brother, in a moment of 
                excitement, hit the ball with such force that it soared upwards and struck the amla tree 
                above me. To my surprise, the impact caused a few amla fruits to fall from the tree, and 
                one of them landed squarely on my head!</em>
              </p>

              <p>
                <em>As I stood there, rubbing the spot where the amla fruit had hit me, an innovative idea 
                began to take shape in my mind. The idea was of Organic Farming, teaching it in a wonderful 
                interactive way based in India. I envisioned creating a platform that would educate people, 
                especially children, about the importance of sustainable farming practices, soil conservation, 
                and the benefits of growing their own organic produce.</em>
              </p>

              <p>
                <em>As the idea took root, I pictured a vibrant, interactive learning environment that would 
                transport students to the heart of rural India. They would learn about the diverse range of 
                crops, from fragrant spices like turmeric and cardamom to nutritious staples like wheat and rice.</em>
              </p>

              <p>
                <em>Through immersive, hands-on activities, students would discover the art of composting, 
                the science behind crop rotation, and the value of conserving water resources. They would 
                also learn about the rich cultural heritage of Indian farming, including the traditional 
                practices and folklore surrounding agriculture.</em>
              </p>

              <p>
                <em>My vision was to create a holistic learning experience that would not only educate but 
                also inspire a new generation of eco-conscious farmers, environmental stewards, and 
                sustainable living advocates. And as I stood there, with the amla fruit still clutched 
                in my hand, I knew that this was just the beginning of an extraordinary journey."</em>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: "2024", event: "The amla fruit moment - ZerøChem idea is born" },
              { year: "2024", event: "Team formation - Bringing together passionate minds" },
              { year: "2025", event: "Platform development begins" },
              { year: "2025", event: "Launch of ZerøChem - Growing Food, Growing Futures" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary-foreground">{item.year}</span>
                </div>
                <div className="pt-4">
                  <p className="text-foreground font-medium">{item.event}</p>
                </div>
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

export default History;
