import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import loginBg from '@/assets/login-fern.jpg';
import logo from '@/assets/logo.png';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for auth logic
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 bg-bark flex flex-col"
      >
        <div className="p-6">
          <Link to="/" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
          <div className="w-full max-w-md">
            {/* Toggle */}
            <div className="flex justify-end mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLogin(!isLogin)}
                className="px-4 py-2 rounded-full bg-leaf/20 text-leaf-light text-sm font-medium border border-leaf/30"
              >
                {isLogin ? 'SIGN UP' : 'LOGIN'}
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login' : 'signup'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="font-display text-4xl font-bold text-cream mb-2">
                  {isLogin ? 'Login' : 'Sign Up'}
                </h1>
                <p className="text-cream/60 mb-10">
                  {isLogin 
                    ? 'Sign in here if you already have an account' 
                    : 'Create your account to start learning'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {!isLogin && (
                    <div>
                      <label className="block text-cream/60 text-xs tracking-wider mb-2">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b-2 border-cream/20 pb-3 text-cream focus:outline-none focus:border-leaf transition-colors"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-cream/60 text-xs tracking-wider mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-transparent border-b-2 border-cream/20 pb-3 text-cream focus:outline-none focus:border-leaf transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-cream/60 text-xs tracking-wider mb-2">
                      PASSWORD
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full bg-transparent border-b-2 border-cream/20 pb-3 text-cream focus:outline-none focus:border-leaf transition-colors pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 bottom-3 text-cream/40 hover:text-cream transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {isLogin && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 rounded border-cream/20 bg-transparent text-leaf focus:ring-leaf"
                        />
                        <span className="text-sm text-cream/60">Remember me</span>
                      </label>
                      <button type="button" className="text-sm text-cream/60 hover:text-leaf transition-colors">
                        Forgot your password?
                      </button>
                    </div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full h-12 rounded-full bg-leaf text-primary-foreground hover:bg-leaf/90 font-semibold mt-4"
                    >
                      {isLogin ? 'LOGIN' : 'CREATE ACCOUNT'}
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-cream/40 text-sm mb-4">OR</p>
                  <div className="flex justify-center gap-4">
                    {['F', 'G', 'T'].map((letter, i) => (
                      <motion.button
                        key={letter}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:border-leaf hover:text-leaf transition-colors"
                      >
                        {letter}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Logo at bottom */}
        <div className="p-6 flex items-center gap-3">
          <img src={logo} alt="ZerøChem" className="w-10 h-10 object-contain opacity-60" />
          <div>
            <p className="text-cream/40 text-xs">ZerøChem</p>
            <p className="text-cream/30 text-xs">Organic & Chemical Free</p>
          </div>
        </div>
      </motion.div>

      {/* Right Panel - Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block lg:w-1/2 relative"
      >
        <img
          src={loginBg}
          alt="Fern leaves"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-bark/20" />
        
        {/* Floating leaf decorations */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4"
        >
          <Leaf className="w-16 h-16 text-leaf-light/30" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-1/3"
        >
          <Leaf className="w-12 h-12 text-leaf-light/20" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
