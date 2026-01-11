import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import whyUsImage from '@/assets/why-us-image.jpg';

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      title: "Learn by Actually Doing",
      description: "Not just videos – real fieldwork with mentor farmers across India."
    },
    {
      title: "Proven Local Techniques",
      description: "Hyper-local methods from experienced farmers in your region."
    },
    {
      title: "Live Expert Help",
      description: "Real-time Q&A with agronomists and community support."
    },
    {
      title: "Earn While You Learn",
      description: "Turn your farm into a classroom and earn extra income."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-organic">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-10 gap-12 items-center">
          {/* Content - 70% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-leaf/10 text-leaf text-sm font-medium mb-6">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              The <span className="text-primary">Revolutionary</span> Way to
              <br />Master Organic Farming
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              ZerøChem isn't just another learning platform. We connect you directly with 
              experienced farmers, provide hands-on training, and build a community that 
              grows together.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-card shadow-organic hover:shadow-organic-lg transition-all hover:-translate-y-1"
                >
                  <CheckCircle2 className="w-6 h-6 text-leaf flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/why-organic">
              <Button variant="organic" size="lg" className="group">
                Discover More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Image - 30% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-leaf/20 to-secondary/20 rounded-3xl blur-2xl" />
              <img
                src={whyUsImage}
                alt="Hands planting seeds"
                className="relative rounded-2xl shadow-organic-lg w-full aspect-[3/4] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-organic">
                <p className="text-3xl font-display font-bold text-primary">1,200+</p>
                <p className="text-sm text-muted-foreground">Expert Farmers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
