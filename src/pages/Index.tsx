import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyUsSection from '@/components/WhyUsSection';
import CoursesPreview from '@/components/CoursesPreview';
import CommunityPreview from '@/components/CommunityPreview';
import AIChatBot from '@/components/AIChatBot';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Request location permission after 5 seconds
    const timer = setTimeout(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log('Location obtained:', position.coords);
            // Would use this to fetch weather for user's location
          },
          (error) => {
            console.log('Location permission denied, using default:', error);
            // Fall back to Indore weather
          }
        );
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhyUsSection />
        <CoursesPreview />
        <CommunityPreview />
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
};

export default Index;
