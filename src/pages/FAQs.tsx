import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChatBot from '@/components/AIChatBot';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is ZerøChem?",
      answer: "ZerøChem is India's revolutionary platform for interactive organic farming education. We connect students with expert farmers, provide video lectures, PDFs, and hands-on field experiences to master sustainable agriculture."
    },
    {
      question: "How much does it cost to join?",
      answer: "Creating an account and accessing basic content is free. Webinar sessions with expert farmers are priced at ₹100 per session. You can earn reward points and unlock free sessions!"
    },
    {
      question: "How do reward points work?",
      answer: "You earn 100 reward points for every webinar session or field visit you complete. Once you reach 1000 points (10 sessions), you unlock a free webinar session. Points never expire!"
    },
    {
      question: "Can I get certified?",
      answer: "Yes! You receive certificates for completing on-field work with farmers and attending online webinars. These certificates are downloadable and can be shared on professional platforms."
    },
    {
      question: "How do I book a session with a farmer?",
      answer: "Navigate to the Community section, browse our expert farmers, and click 'Book Session'. Choose a convenient time slot, pay ₹100, and you're set! You'll receive a meeting link via email."
    },
    {
      question: "What topics are covered in the courses?",
      answer: "Our courses cover organic farming fundamentals, crop management, pest control, composting, soil health, seasonal planting guides, and much more. Content ranges from beginner to advanced levels."
    },
    {
      question: "Is there an AI assistant available?",
      answer: "Yes! Our AI farming assistant is available 24/7 to answer your questions about organic farming, crop care, pest management, and more. Look for the chat icon at the bottom right of any page."
    },
    {
      question: "How can I become a mentor farmer on the platform?",
      answer: "If you're an experienced organic farmer and want to teach on our platform, visit the 'Join Our Team' section or contact us. We offer training and support for new mentors."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about ZerøChem and organic farming.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-muted-foreground">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us at <a href="mailto:hriday.rahejacse2024@indoreinstitue.com" className="text-primary hover:underline">hriday.rahejacse2024@indoreinstitue.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIChatBot />
    </div>
  );
};

export default FAQs;
