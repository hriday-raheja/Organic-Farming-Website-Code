import { motion } from 'framer-motion';
import { FileText, Video, BookOpen, Download, ExternalLink, Search } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChatBot from '@/components/AIChatBot';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const resources = [
    { type: 'pdf', title: 'Complete Organic Farming Guide', description: 'Comprehensive guide covering all aspects of organic farming', pages: 45, downloads: '1.2K' },
    { type: 'pdf', title: 'Seasonal Crop Calendar', description: 'Month-by-month guide for planting and harvesting', pages: 12, downloads: '2.8K' },
    { type: 'video', title: 'Introduction to Composting', description: 'Step-by-step video tutorial on creating rich compost', duration: '18:45', views: '3.1K' },
    { type: 'video', title: 'Natural Pest Control', description: 'Organic methods to protect your crops', duration: '25:00', views: '2.7K' },
    { type: 'pdf', title: 'Soil Health Assessment Guide', description: 'Learn to evaluate and improve your soil quality', pages: 28, downloads: '950' },
    { type: 'flashcard', title: 'Pest Identification Cards', description: 'Visual flashcards for common pests and diseases', cards: 48, downloads: '1.5K' },
    { type: 'video', title: 'Drip Irrigation Setup', description: 'Water-efficient irrigation for organic farms', duration: '32:15', views: '1.9K' },
    { type: 'pdf', title: 'Organic Certification Process', description: 'Step-by-step guide to getting certified', pages: 18, downloads: '780' },
  ];

  const filteredResources = resources.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || r.type === activeTab;
    return matchesSearch && matchesTab;
  });

  const tabs = [
    { id: 'all', label: 'All Resources' },
    { id: 'pdf', label: 'PDFs' },
    { id: 'video', label: 'Videos' },
    { id: 'flashcard', label: 'Flashcards' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf': return FileText;
      case 'video': return Video;
      case 'flashcard': return BookOpen;
      default: return FileText;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'pdf': return 'bg-destructive/10 text-destructive';
      case 'video': return 'bg-leaf/10 text-leaf';
      case 'flashcard': return 'bg-secondary/10 text-secondary';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Learning Materials
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-accent">Resources</span> Library
            </h1>
            <p className="text-xl text-muted-foreground">
              PDFs, video lectures, mind maps, and flashcards to support your learning journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => {
              const Icon = getIcon(resource.type);
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:shadow-organic-lg transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${getColor(resource.type)} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {resource.type}
                      </span>
                      <h3 className="font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">{resource.description}</p>
                      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                        {resource.pages && <span>{resource.pages} pages</span>}
                        {resource.duration && <span>{resource.duration}</span>}
                        {resource.cards && <span>{resource.cards} cards</span>}
                        <span className="flex items-center gap-1">
                          {resource.type === 'video' ? (
                            <><ExternalLink className="w-3 h-3" /> {resource.views} views</>
                          ) : (
                            <><Download className="w-3 h-3" /> {resource.downloads}</>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No resources found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <AIChatBot />
    </div>
  );
};

export default Resources;
