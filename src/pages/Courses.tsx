import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, Award, Clock, Users, Play, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChatBot from '@/components/AIChatBot';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Organic Farming Fundamentals",
      description: "Learn the core principles of organic agriculture, soil health, and sustainable practices.",
      lessons: 24,
      duration: "8 hours",
      level: "Beginner",
      icon: BookOpen,
      color: "bg-leaf",
    },
    {
      id: 2,
      title: "Crop Management & Care",
      description: "Master techniques for growing vegetables, fruits, and grains organically.",
      lessons: 36,
      duration: "12 hours",
      level: "Intermediate",
      icon: Video,
      color: "bg-secondary",
    },
    {
      id: 3,
      title: "Pest & Disease Control",
      description: "Natural methods to protect your crops without harmful chemicals.",
      lessons: 18,
      duration: "6 hours",
      level: "Intermediate",
      icon: FileText,
      color: "bg-accent",
    },
    {
      id: 4,
      title: "Composting & Soil Health",
      description: "Create nutrient-rich compost and build healthy, living soil.",
      lessons: 15,
      duration: "5 hours",
      level: "Beginner",
      icon: Award,
      color: "bg-summer-warm",
    },
  ];

  const videoLectures = [
    { title: "Introduction to Organic Farming", duration: "15:30", views: "2.4K" },
    { title: "Understanding Soil Composition", duration: "22:15", views: "1.8K" },
    { title: "Composting Techniques", duration: "18:45", views: "3.1K" },
    { title: "Natural Pest Control Methods", duration: "25:00", views: "2.7K" },
  ];

  const pdfResources = [
    { title: "Complete Organic Farming Guide", pages: 45, downloads: "1.2K" },
    { title: "Seasonal Crop Calendar", pages: 12, downloads: "2.8K" },
    { title: "Composting Mind Map", pages: 8, downloads: "1.5K" },
    { title: "Pest Identification Flashcards", pages: 24, downloads: "980" },
  ];

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
              <BookOpen className="w-4 h-4" />
              Learn at Your Pace
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-secondary">Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From video lectures and PDFs to interactive flashcards and hands-on field visits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 hover:shadow-organic-lg transition-all cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <course.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {course.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </span>
                </div>
                <span className="inline-block mt-3 px-2 py-1 rounded-full bg-muted text-xs font-medium">
                  {course.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lectures & PDFs */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Video Lectures */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-leaf flex items-center justify-center">
                  <Video className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Video Lectures</h2>
              </div>
              <div className="space-y-4">
                {videoLectures.map((video, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-leaf/30 hover:shadow-organic transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-leaf/10 flex items-center justify-center group-hover:bg-leaf transition-colors">
                      <Play className="w-5 h-5 text-leaf group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.duration} • {video.views} views</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* PDF Resources */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <FileText className="w-5 h-5 text-secondary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">PDF Resources</h2>
              </div>
              <div className="space-y-4">
                {pdfResources.map((pdf, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-secondary/30 hover:shadow-organic transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <Download className="w-5 h-5 text-secondary group-hover:text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{pdf.title}</h3>
                      <p className="text-sm text-muted-foreground">{pdf.pages} pages • {pdf.downloads} downloads</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learn from Experts CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="font-display text-4xl font-bold mb-4">Learn From Experts</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Connect with experienced farmers and agricultural experts through our community.
            </p>
            <Link to="/community">
              <Button variant="hero" size="xl" className="group">
                Join Community
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIChatBot />
    </div>
  );
};

export default Courses;
