import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cloud, Sun, CloudRain, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

interface WeatherData {
  temp: number;
  condition: string;
  city: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate weather data (in production, use a weather API)
    const mockWeather: WeatherData = {
      temp: 28,
      condition: 'sunny',
      city: 'Indore'
    };
    setWeather(mockWeather);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-5 h-5 text-summer-warm" />;
      case 'rainy':
        return <CloudRain className="w-5 h-5 text-rainy-grey" />;
      case 'cloudy':
        return <Cloud className="w-5 h-5 text-muted-foreground" />;
      case 'winter':
        return <Snowflake className="w-5 h-5 text-winter-cool" />;
      default:
        return <Sun className="w-5 h-5 text-summer-warm" />;
    }
  };

  const navLinks = [
    { name: 'Why Organic', href: '/why-organic' },
    { name: 'Courses', href: '/courses' },
    { name: 'Community', href: '/community' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-organic' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Weather */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img
                src={logo}
                alt="ZerøChem Logo"
                className="h-14 w-14 object-contain"
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <div className="hidden sm:block">
                <h1 className="font-display text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  ZerøChem
                </h1>
                <p className="text-xs text-muted-foreground">Organic & Chemical Free</p>
              </div>
            </Link>

            {weather && (
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-full">
                {getWeatherIcon(weather.condition)}
                <span className="text-sm font-medium text-foreground">{weather.temp}°C</span>
                <span className="text-xs text-muted-foreground">{weather.city}</span>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-leaf/10 hover:text-primary ${
                  location.pathname === link.href
                    ? 'text-primary bg-leaf/10'
                    : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <Button variant="support" size="sm">
                Support Us
              </Button>
              <Link to="/login">
                <Button variant="hero" size="sm">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {weather && (
                <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg mb-4">
                  {getWeatherIcon(weather.condition)}
                  <span className="text-sm font-medium">{weather.temp}°C</span>
                  <span className="text-xs text-muted-foreground">{weather.city}</span>
                </div>
              )}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.href
                      ? 'bg-leaf/10 text-primary'
                      : 'hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="support" className="w-full">
                  Support Us
                </Button>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" className="w-full">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
