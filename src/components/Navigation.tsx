import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X, Zap, Target, Cpu, Activity } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 100], [0, -5]);
  const opacity = useTransform(scrollY, [0, 100], [0.9, 0.95]);

  const navItems = [
    { name: "Home", href: "#home", icon: Target },
    { name: "Events", href: "#events", icon: Zap },
    { name: "Glimpse", href: "#glimpse", icon: Activity },
    { name: "Sponsors", href: "#sponsors", icon: Cpu },
    { name: "Our Clan", href: "#clan", icon: Target },
    { name: "Our Team", href: "#team", icon: Activity },
    { name: "Past Participants", href: "#participants", icon: Cpu },
    { name: "Contact", href: "#contact", icon: Zap }
  ];

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ y: navY, opacity }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#022333]/90 backdrop-blur-md border-b border-[#0a91ab]/20 transform-gpu"
    >
      {/* 3D Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #0a91ab 1px, transparent 1px),
              linear-gradient(0deg, #0a91ab 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '20px 20px'],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced 3D Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="flex items-center space-x-3 transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative">
              {/* Main Robot Head */}
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-[#0a91ab] to-[#065471] rounded-lg flex items-center justify-center border-2 border-[#ffc045]/30 transform-gpu"
                animate={{ 
                  rotateY: [0, 360],
                  boxShadow: [
                    "0 0 10px #0a91ab40",
                    "0 0 20px #0a91ab80, 0 0 30px #ffc04540",
                    "0 0 10px #0a91ab40"
                  ]
                }}
                transition={{ 
                  rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 3, repeat: Infinity }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Cpu className="h-6 w-6 text-[#ffc045]" />
                
                {/* Robot Eyes */}
                <div className="absolute top-1 left-1 w-2 h-2 bg-[#0a91ab] rounded-full animate-pulse" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-[#0a91ab] rounded-full animate-pulse" />
              </motion.div>

              {/* Holographic Rings */}
              <motion.div
                className="absolute inset-0 border-2 border-[#0a91ab]/30 rounded-lg -m-1"
                animate={{ 
                  rotateZ: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotateZ: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              />
              <motion.div
                className="absolute inset-0 border border-[#ffc045]/20 rounded-lg -m-2"
                animate={{ rotateZ: [360, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <motion.div
              animate={{ rotateX: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-xl font-bold bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent font-mono">
                ROBORASHTRA
              </div>
              <motion.div 
                className="text-xs text-[#ffc045] tracking-widest font-mono"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                2K25_ACTIVE
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Desktop Navigation with 3D Effects */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative group px-4 py-2 transform-gpu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -3,
                    rotateY: 5,
                    scale: 1.05
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* 3D Navigation Item */}
                  <motion.div
                    className={`relative z-10 flex items-center space-x-2 px-3 py-2 rounded-lg border transform-gpu transition-all duration-300 ${
                      isActive 
                        ? 'text-[#ffc045] border-[#ffc045]/50 bg-[#065471]/30' 
                        : 'text-gray-300 border-transparent hover:text-[#0a91ab] hover:border-[#0a91ab]/30 hover:bg-[#065471]/20'
                    }`}
                    animate={isActive ? {
                      boxShadow: [
                        "0 0 10px #ffc04540",
                        "0 0 20px #ffc04580",
                        "0 0 10px #ffc04540"
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-mono">{item.name}</span>
                  </motion.div>

                  {/* Holographic Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border border-[#0a91ab]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu"
                    animate={{ rotateZ: [0, 2, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#ffc045] rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        boxShadow: [
                          "0 0 5px #ffc04580",
                          "0 0 15px #ffc045",
                          "0 0 5px #ffc04580"
                        ]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Enhanced 3D CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                z: 20
              }}
              whileTap={{ scale: 0.95 }}
              className="relative transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Button 
                className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] hover:from-[#0a91ab]/80 hover:to-[#ffc045]/80 text-white px-6 py-3 rounded-lg border-2 border-[#ffc045]/30 transition-all duration-300 font-mono uppercase tracking-wider transform-gpu relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#ffc045]/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <div className="relative z-10 flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Initialize_Registration</span>
                </div>
              </Button>

              {/* 3D Holographic Corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ffc045] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ffc045] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ffc045] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ffc045] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white relative p-2 transform-gpu"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1, rotateZ: 10 }}
            whileTap={{ scale: 0.9 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              animate={{ rotateY: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
            
            {/* Glowing Effect */}
            <motion.div
              className="absolute inset-0 bg-[#0a91ab]/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
              animate={isOpen ? { opacity: [0, 0.5, 0] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0, rotateX: -90 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? "auto" : 0,
            rotateX: isOpen ? 0 : -90
          }}
          transition={{ duration: 0.5 }}
          className="lg:hidden overflow-hidden transform-gpu"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="py-6 space-y-2 border-t border-[#0a91ab]/20 bg-[#065471]/20 backdrop-blur-sm rounded-b-lg">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 transition-all duration-300 relative transform-gpu ${
                    isActive 
                      ? 'text-[#ffc045] bg-[#065471]/50' 
                      : 'text-gray-300 hover:text-[#0a91ab] hover:bg-[#065471]/30'
                  }`}
                  initial={{ opacity: 0, x: -20, rotateY: -10 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0, 
                    x: isOpen ? 0 : -20,
                    rotateY: isOpen ? 0 : -10
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 5, rotateY: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-mono">{item.name}</span>
                  
                  {isActive && (
                    <motion.div
                      className="absolute right-4 w-2 h-2 bg-[#ffc045] rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.a>
              );
            })}
            
            <motion.div
              initial={{ opacity: 0, x: -20, rotateY: -10 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : -20,
                rotateY: isOpen ? 0 : -10
              }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="px-4 pt-4"
            >
              <Button 
                className="w-full bg-gradient-to-r from-[#0a91ab] to-[#ffc045] hover:from-[#0a91ab]/80 hover:to-[#ffc045]/80 text-white px-6 py-3 rounded-lg shadow-lg shadow-[#0a91ab]/30 transition-all duration-300 font-mono uppercase tracking-wider"
              >
                <Zap className="w-4 h-4 mr-2" />
                Register Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Glow Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0a91ab] to-transparent"
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1.2, 0.8]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.nav>
  );
}