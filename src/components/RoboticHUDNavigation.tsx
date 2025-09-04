import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Home, Calendar, Eye, Building2, Users, UserCheck, History, MessageSquare,
  Zap, ChevronLeft, ChevronRight
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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0 }
    );

    navigationItems.forEach(item => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [scrollContainerRef]);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    const container = scrollContainerRef.current || document;
    const target = container.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed left-0 top-[50vh] -translate-y-1/2 z-40 flex items-center"
    >
      {/* Toggle Button with Peek Effect */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-[#0a91ab] rounded-full flex items-center justify-center shadow-lg z-50"
        style={{ left: isVisible ? '220px' : '-12px' }} // adjust with panel width
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        {isVisible ? (
          <ChevronLeft className="w-4 h-4 text-[#022333]" />
        ) : (
          <ChevronRight className="w-4 h-4 text-[#022333]" />
        )}
      </motion.button>

      {/* HUD Panel */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: isVisible ? 180 : 0, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden relative rounded-2xl border border-[#0a91ab]/30"
      >
        {/* Background Panel */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#065471]/90 to-[#022333]/95 backdrop-blur-md rounded-2xl"
          animate={{
            boxShadow: [
              '0 0 20px #0a91ab20',
              '0 0 30px #0a91ab40, inset 0 0 20px #065471/50',
              '0 0 20px #0a91ab20'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Circuit Overlay */}
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
            animate={{ backgroundPosition: ['0px 0px', '20px 20px'] }}
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

            return (
              <motion.div
                key={item.id}
                className="relative flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
              >
                {/* Hex Button */}
                <motion.button
                  onClick={() => handleNavClick(item.href, item.id)}
                  className="relative w-14 h-12 flex items-center justify-center group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 56 48" className="w-full h-full">
                      <path
                        d="M14 0 L42 0 L56 24 L42 48 L14 48 L0 24 Z"
                        fill={isActive ? "url(#activeGradient)" : "url(#inactiveGradient)"}
                        stroke={isActive ? "#ffc045" : "#0a91ab"}
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                  <Icon className={`w-5 h-5 z-10 ${isActive ? 'text-[#ffc045]' : 'text-[#0a91ab]'}`} />
                </motion.button>

                {/* Label */}
                <div className={`px-3 py-1 rounded-lg font-mono text-sm tracking-wide
                    ${isActive ? 'bg-[#065471]/90 text-[#ffc045]' : 'bg-[#022333]/80 text-[#0a91ab]'}`}>
                  {item.label.toUpperCase()}
                </div>
              </motion.div>
            );
          })}

          {/* Power Indicator */}
          <motion.div 
            className="mt-8 pt-4 border-t border-[#0a91ab]/20 text-center"
            animate={{ borderColor: ['#0a91ab20', '#0a91ab40', '#0a91ab20'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="flex items-center justify-center space-x-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Zap className="w-3 h-3 text-[#ffc045]" />
              </motion.div>
              <span className="text-xs font-mono text-[#0a91ab]">ONLINE</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
