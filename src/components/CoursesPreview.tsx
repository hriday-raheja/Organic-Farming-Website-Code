import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Video, FileText, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CoursesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    {
      icon: BookOpen,
      title: "Organic Basics",
      description: "Foundation course on sustainable farming principles",
      lessons: 24,
      color: "bg-leaf",
    },
    {
      icon: Video,
      title: "Practical Sessions",
      description: "Video lectures with field demonstrations",
      lessons: 36,
      color: "bg-secondary",
    },
    {
      icon: FileText,
      title: "Crop Guides",
      description: "Detailed guides for seasonal crops and care",
      lessons: 48,
      color: "bg-accent",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn recognized certificates on completion",
      lessons: 12,
      color: "bg-summer-warm",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-10 gap-12 items-center">
          {/* Content - 70% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Our Courses
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Learn at Your <span className="text-secondary">Own Pace</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              From video lectures and interactive flashcards to hands-on field visits. 
              Our curriculum covers everything from soil preparation to harvest and beyond.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="group p-5 rounded-xl bg-card border border-border hover:border-secondary/30 hover:shadow-organic transition-all cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <course.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                  <p className="text-xs text-secondary font-medium">{course.lessons} Lessons</p>
                </motion.div>
              ))}
            </div>

            <Link to="/courses">
              <Button variant="organic" size="lg" className="group">
                Explore All Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats Panel - 30% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 order-1 lg:order-2"
          >
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-8">Learning Stats</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-display font-bold">120+</p>
                  <p className="text-primary-foreground/80 text-sm">Video Lectures</p>
                </div>
                <div className="h-px bg-primary-foreground/20" />
                <div>
                  <p className="text-4xl font-display font-bold">50+</p>
                  <p className="text-primary-foreground/80 text-sm">PDF Resources</p>
                </div>
                <div className="h-px bg-primary-foreground/20" />
                <div>
                  <p className="text-4xl font-display font-bold">15+</p>
                  <p className="text-primary-foreground/80 text-sm">Crop Guides</p>
                </div>
                <div className="h-px bg-primary-foreground/20" />
                <div>
                  <p className="text-4xl font-display font-bold">100%</p>
                  <p className="text-primary-foreground/80 text-sm">Practical Focus</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
