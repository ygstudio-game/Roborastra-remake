import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Gauge } from 'lucide-react';
interface Props {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}
export function RoboticScrollSpeedometer({ scrollContainerRef }: Props) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const lastScrollTopRef = useRef(0);
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = container.scrollTop || 0;
      const docHeight = container.scrollHeight - container.clientHeight;

      const safeDocHeight = Math.max(docHeight, 1);
      const scrollPercent = (scrollTop / safeDocHeight) * 100;

      const currentTime = Date.now();
      const timeDiff = currentTime - lastTimeRef.current;
      const scrollDiff = Math.abs(scrollTop - lastScrollTopRef.current);
      const speed = timeDiff > 0 ? (scrollDiff / timeDiff) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));
      setScrollSpeed(Math.min(100, Math.max(0, speed)));

      lastScrollTopRef.current = scrollTop;
      lastTimeRef.current = currentTime;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainerRef]);
  // Convert progress to angle with safeguards
  const safeScrollProgress = isNaN(scrollProgress) ? 0 : scrollProgress;
  const safeScrollSpeed = isNaN(scrollSpeed) ? 0 : scrollSpeed;
  
  const progressAngle = (safeScrollProgress / 100) * 270 - 135; // Start from -135° (7 o'clock position)
  const speedAngle = (safeScrollSpeed / 100) * 180 - 90; // Speed gauge from -90° to 90°

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="fixed right-[6vw] bottom-[6vh] z-40"
    >
      {/* Main Speedometer Container */}
      <div className="relative w-32 h-32">
        {/* Background Panel */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#065471]/95 to-[#022333]/90 backdrop-blur-md rounded-full border-2 border-[#0a91ab]/30"
          animate={{
            borderColor: [
              "#0a91ab30",
              "#0a91ab60",
              "#ffc04540",
              "#0a91ab30"
            ],
            boxShadow: [
              "0 0 20px #0a91ab20",
              "0 0 30px #0a91ab40, inset 0 0 20px #065471/30",
              "0 0 25px #ffc04530, inset 0 0 15px #065471/40",
              "0 0 20px #0a91ab20"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Circuit Pattern Background */}
        <div className="absolute inset-2 rounded-full overflow-hidden opacity-10">
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at center, #0a91ab 1px, transparent 1px)`,
              backgroundSize: '8px 8px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '8px 8px'],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Main Progress Ring */}
        <div className="absolute inset-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background Track */}
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="#065471"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray="263.89" // 270° of circumference
              strokeDashoffset="65.97"  // Start at 7 o'clock
              opacity="0.3"
            />
            
            {/* Progress Track */}
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray="263.89"
              animate={{
                strokeDashoffset: 65.97 + (263.89 * (1 - safeScrollProgress / 100))
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              style={{
                filter: 'drop-shadow(0 0 6px #0a91ab60)'
              }}
            />

            {/* Speed Ring (Inner) */}
            <circle
              cx="50"
              cy="50"
              r="32"
              stroke="#ffc04530"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="201.06" // Full circle
              opacity="0.2"
            />
            
            <motion.circle
              cx="50"
              cy="50"
              r="32"
              stroke="#ffc045"
              strokeWidth="2"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray="100.53" // Half circle
              strokeDashoffset="150.8"  // Start at 9 o'clock
              animate={{
                strokeDashoffset: 150.8 - (100.53 * (safeScrollSpeed / 100))
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              style={{
                filter: 'drop-shadow(0 0 4px #ffc04580)'
              }}
            />

            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0a91ab" />
                <stop offset="50%" stopColor="#ffc045" />
                <stop offset="100%" stopColor="#0a91ab" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Center Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Progress Percentage */}
          <motion.div
            className="text-xl font-bold font-mono text-[#0a91ab] leading-none"
            animate={{
              textShadow: [
                '0 0 8px #0a91ab40',
                '0 0 12px #0a91ab60',
                '0 0 8px #0a91ab40'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {Math.round(safeScrollProgress)}
          </motion.div>
          
          {/* Percentage Symbol */}
          <div className="text-xs font-mono text-[#0a91ab]/70">%</div>
          
          {/* Speed Indicator */}
          <motion.div
            className="absolute -bottom-1 text-xs font-mono text-[#ffc045]"
            animate={{
              opacity: safeScrollSpeed > 0 ? [0.6, 1, 0.6] : 0.4
            }}
            transition={{ duration: 0.5 }}
          >
            {safeScrollSpeed > 5 ? '↕' : '─'}
          </motion.div>
        </div>

        {/* Tick Marks */}
        <div className="absolute inset-0">
          {[0, 25, 50, 75, 100].map((value, index) => {
            const angle = (value / 100) * 270 - 135;
            const isActive = safeScrollProgress >= value;
            
            return (
              <motion.div
                key={value}
                className="absolute w-0.5 h-3 origin-bottom"
                style={{
                  bottom: '50%',
                  left: '50%',
                  transform: `translateX(-50%) rotate(${angle}deg)`,
                  transformOrigin: '50% 100%'
                }}
                animate={{
                  backgroundColor: isActive ? '#ffc045' : '#0a91ab60',
                  height: isActive ? 12 : 8,
                  boxShadow: isActive 
                    ? [
                        '0 0 4px #ffc04560',
                        '0 0 8px #ffc04580',
                        '0 0 4px #ffc04560'
                      ]
                    : '0 0 2px #0a91ab30'
                }}
                transition={{ duration: 0.3 }}
              />
            );
          })}
        </div>

        {/* Labels */}
        <div className="absolute inset-0 text-xs font-mono pointer-events-none">
          {/* Progress Label */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-[#0a91ab] text-center"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-3 h-3" />
              <span>SCROLL</span>
            </div>
          </motion.div>

          {/* Speed Label */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[#ffc045] text-center"
            animate={{
              opacity: safeScrollSpeed > 0 ? [0.6, 1, 0.6] : 0.4
            }}
            transition={{ duration: 1, repeat: safeScrollSpeed > 0 ? Infinity : 0 }}
          >
            <div className="flex items-center space-x-1">
              <Gauge className="w-3 h-3" />
              <span>VEL</span>
            </div>
          </motion.div>
        </div>

        {/* Active Indicator Dot */}
        {safeScrollProgress > 0 && (
          <motion.div
            className="absolute w-2 h-2 bg-[#ffc045] rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0'
            }}
            animate={{
              x: Math.cos((progressAngle * Math.PI) / 180) * 42 - 4,
              y: Math.sin((progressAngle * Math.PI) / 180) * 42 - 4,
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 6px #ffc04560',
                '0 0 12px #ffc04580',
                '0 0 6px #ffc04560'
              ]
            }}
            transition={{
              x: { type: "spring", stiffness: 100, damping: 20 },
              y: { type: "spring", stiffness: 100, damping: 20 },
              scale: { duration: 1, repeat: Infinity },
              boxShadow: { duration: 1, repeat: Infinity }
            }}
          />
        )}

        {/* Completion Burst Effect */}
        {safeScrollProgress >= 99 && (
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeOut"
            }}
            style={{
              background: 'radial-gradient(circle, #ffc04530 0%, transparent 70%)'
            }}
          />
        )}
      </div>
    </motion.div>
  );
}