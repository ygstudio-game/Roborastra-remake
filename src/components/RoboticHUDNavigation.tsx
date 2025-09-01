import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  Calendar, 
  Eye, 
  Building2, 
  Users, 
  UserCheck, 
  History, 
  MessageSquare,
  Zap,
  ChevronRight
} from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', icon: Home, href: '#home' },
  { id: 'events', label: 'Events', icon: Calendar, href: '#events' },
  { id: 'glimpse', label: 'Glimpse', icon: Eye, href: '#glimpse' },
  { id: 'sponsors', label: 'Sponsors', icon: Building2, href: '#sponsors' },
  { id: 'clan', label: 'Clan', icon: Users, href: '#clan' },
  { id: 'team', label: 'Team', icon: UserCheck, href: '#team' },
  { id: 'participants', label: 'Past', icon: History, href: '#participants' },
  { id: 'contact', label: 'Contact', icon: MessageSquare, href: '#contact' },
];

export function RoboticHUDNavigation({ scrollContainerRef }: { scrollContainerRef: React.RefObject<HTMLDivElement> }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState<string | null>(null);

useEffect(() => {
  if (!scrollContainerRef.current) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60% 0px',
    threshold: 0
  };

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  navigationItems.forEach(item => {
    const element = document.querySelector(item.href);
    if (element) observer.observe(element);
  });

  return () => observer.disconnect();
}, [ ]);  



  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    const container = scrollContainerRef.current || document;
    const target = container.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed left-[6vw]  top-[50vh] -translate-y-1/2 z-40 group"
    >
      {/* Main HUD Panel */}
      <div className="relative">
        {/* Background Panel */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#065471]/90 to-[#022333]/95 backdrop-blur-md rounded-2xl border border-[#0a91ab]/30"
          animate={{
            boxShadow: [
              '0 0 20px #0a91ab20',
              '0 0 30px #0a91ab40, inset 0 0 20px #065471/50',
              '0 0 20px #0a91ab20'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            background: 'linear-gradient(135deg, #065471/90 0%, #022333/95 100%)'
          }}
        />

        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 rounded-2xl overflow-hidden">
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
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Navigation Items */}
        <div className="relative p-4 space-y-2">
          {/* Header */}
          <motion.div 
            className="text-center mb-6"
            animate={{
              textShadow: [
                '0 0 10px #0a91ab40',
                '0 0 15px #0a91ab60',
                '0 0 10px #0a91ab40'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-[#0a91ab] font-mono text-xs tracking-wider">
              HUD_CONTROL
            </div>
            <div className="text-[#ffc045] font-mono text-xs">
              v2.025
            </div>
          </motion.div>

          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHover = isHovered === item.id;

            return (
              <motion.div
                key={item.id}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
              >
                {/* Hexagonal Button */}
                <motion.button
                  onClick={() => handleNavClick(item.href, item.id)}
                  onMouseEnter={() => setIsHovered(item.id)}
                  onMouseLeave={() => setIsHovered(null)}
                  className="relative w-14 h-12 flex items-center justify-center group transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Hexagonal Background */}
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 56 48" className="w-full h-full">
                      <motion.path
                        d="M14 0 L42 0 L56 24 L42 48 L14 48 L0 24 Z"
                        fill={isActive ? "url(#activeGradient)" : "url(#inactiveGradient)"}
                        stroke={isActive ? "#ffc045" : "#0a91ab"}
                        strokeWidth="1"
                        animate={{
                          fill: isActive 
                            ? ["url(#activeGradient)", "url(#activeGradientHover)", "url(#activeGradient)"]
                            : (isHover ? "url(#hoverGradient)" : "url(#inactiveGradient)"),
                          strokeWidth: isActive ? [1, 2, 1] : (isHover ? 1.5 : 1)
                        }}
                        transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                      />
                      <defs>
                        <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0a91ab80" />
                          <stop offset="100%" stopColor="#ffc04560" />
                        </linearGradient>
                        <linearGradient id="activeGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0a91abA0" />
                          <stop offset="100%" stopColor="#ffc04580" />
                        </linearGradient>
                        <linearGradient id="inactiveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06547140" />
                          <stop offset="100%" stopColor="#02233360" />
                        </linearGradient>
                        <linearGradient id="hoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0a91ab60" />
                          <stop offset="100%" stopColor="#06547180" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Icon */}
                  <motion.div
                    animate={{
                      color: isActive ? "#ffc045" : "#0a91ab",
                      filter: isActive 
                        ? [
                            "drop-shadow(0 0 8px #ffc04560)",
                            "drop-shadow(0 0 12px #ffc04580)",
                            "drop-shadow(0 0 8px #ffc04560)"
                          ]
                        : "drop-shadow(0 0 4px #0a91ab40)"
                    }}
                    transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                    className="relative z-10"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {/* Pulse Effect for Active */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                      style={{
                        background: 'radial-gradient(circle, #ffc04540 0%, transparent 70%)'
                      }}
                    />
                  )}
                </motion.button>

                {/* Label Tooltip */}
                <motion.div
                  className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: isHover ? 1 : 0,
                    x: isHover ? 0 : -10
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-[#065471]/95 backdrop-blur-sm border border-[#0a91ab]/30 rounded-lg px-3 py-2 flex items-center space-x-2">
                    <ChevronRight className="w-3 h-3 text-[#0a91ab]" />
                    <span className="text-sm font-mono text-[#0a91ab]">
                      {item.label.toUpperCase()}
                    </span>
                  </div>
                </motion.div>

                {/* Connection Line for Active */}
                {isActive && (
                  <motion.div
                    className="absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-0.5"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-full h-full bg-gradient-to-r from-[#ffc045] to-transparent"
                      animate={{
                        opacity: [0.6, 1, 0.6],
                        boxShadow: [
                          '0 0 4px #ffc04560',
                          '0 0 8px #ffc04580',
                          '0 0 4px #ffc04560'
                        ]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>
                )}
              </motion.div>
            );
          })}

          {/* Power Indicator */}
          <motion.div 
            className="mt-8 pt-4 border-t border-[#0a91ab]/20 text-center"
            animate={{
              borderColor: ['#0a91ab20', '#0a91ab40', '#0a91ab20']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="flex items-center justify-center space-x-2">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Zap className="w-3 h-3 text-[#ffc045]" />
              </motion.div>
              <span className="text-xs font-mono text-[#0a91ab]">ONLINE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}