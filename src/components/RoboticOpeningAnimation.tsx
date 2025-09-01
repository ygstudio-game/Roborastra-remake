import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Power, Zap, Cpu, CircuitBoard, Target } from 'lucide-react';

interface RoboticOpeningAnimationProps {
  onComplete: () => void;
}

export function RoboticOpeningAnimation({ onComplete }: RoboticOpeningAnimationProps) {
  const [stage, setStage] = useState<'loading' | 'assembling' | 'complete'>('loading');
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simplified particle system for better performance
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    // Reduced particle count for performance
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#0a91ab' : '#ffc045',
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(2, 35, 51, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Simplified 2D movement
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off screen edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Simple circle drawing without glow for performance
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  // Extended animation sequence - minimum 2 seconds
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setStage('assembling');
      
      // Progress animation with minimum duration guarantee
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
              setStage('complete');
              // Ensure minimum 2 seconds total duration
              setTimeout(onComplete, 1000); // Extended final delay
            }, 500); // Extended transition delay
            return 100;
          }
          return prev + Math.random() * 15; // Slightly slower progress
        });
      }, 200); // Slightly slower progress updates
    }, 2000); // Extended initial loading time

    return () => {
      clearTimeout(loadingTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#022333] overflow-hidden z-50">
      {/* Simplified Particle Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(circle at center, #065471 0%, #022333 70%)' }}
      />

      {/* Simplified Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #0a91ab 1px, transparent 1px),
              linear-gradient(0deg, #0a91ab 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {stage === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {/* Simplified System Initialize */}
                <motion.div
                  initial={{ scale: 0, rotateY: -90 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="w-24 h-24 mx-auto relative">
                    {/* Central Core */}
                    <motion.div
                      className="absolute inset-2 bg-gradient-to-br from-[#0a91ab] to-[#065471] rounded-full border-2 border-[#ffc045] flex items-center justify-center"
                      animate={{ 
                        rotate: 360,
                      }}
                      transition={{ 
                        rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      }}
                    >
                      <Cpu className="w-6 h-6 text-[#ffc045]" />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <h1 className="text-2xl font-bold text-[#0a91ab] mb-4 font-mono">
                    INITIALIZING ROBORASHTRA SYSTEMS
                  </h1>
                  <div className="flex justify-center space-x-4 text-xs font-mono text-gray-400">
                    <div className="flex items-center space-x-1">
                      <CircuitBoard className="w-3 h-3 text-[#0a91ab]" />
                      <span>NEURAL_NET</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-3 h-3 text-[#ffc045]" />
                      <span>POWER_CORE</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="w-3 h-3 text-[#0a91ab]" />
                      <span>TARGETING</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {stage === 'assembling' && (
              <motion.div
                key="assembling"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {/* Simplified Logo Assembly */}
                <div className="relative h-48">
                  {/* Logo Letters Appearing */}
                  <motion.div 
                    className="flex items-center justify-center h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-center">
                      {'ROBORASHTRA'.split('').map((letter, index) => (
                        <motion.span
                          key={index}
                          className="inline-block text-4xl font-bold bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent font-mono"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: 0.8 + (index * 0.05),
                            duration: 0.3,
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="text-2xl font-bold text-[#ffc045] mt-2 font-mono"
                      >
                        2K25
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Simplified Progress */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="space-y-4"
                >
                  <h2 className="text-lg font-bold text-[#0a91ab] font-mono">
                    LOADING CHAMPIONSHIP PROTOCOL
                  </h2>
                  
                  {/* Simple Progress Bar */}
                  <div className="relative w-64 h-2 mx-auto bg-[#065471] rounded-full overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#0a91ab] to-[#ffc045] rounded-full"
                      animate={{
                        width: `${progress}%`
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  <motion.span 
                    className="text-lg font-bold text-[#ffc045] font-mono"
                  >
                    {Math.round(progress)}%
                  </motion.span>

                  {/* Simplified System Messages */}
                  <div className="space-y-1 font-mono text-xs text-[#0a91ab]">
                    <motion.div
                      animate={{ opacity: progress > 20 ? 1 : 0.3 }}
                      transition={{ duration: 0.2 }}
                    >
                      &gt; Loading modules...
                    </motion.div>
                    <motion.div
                      animate={{ opacity: progress > 60 ? 1 : 0.3 }}
                      transition={{ duration: 0.2 }}
                    >
                      &gt; Initializing interface...
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {stage === 'complete' && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Final Logo */}
                <motion.div
                  className="text-5xl font-bold bg-gradient-to-r from-[#0a91ab] via-[#ffc045] to-[#0a91ab] bg-clip-text text-transparent font-mono"
                >
                  ROBORASHTRA
                </motion.div>
                
                <motion.div
                  className="text-3xl font-bold text-[#ffc045] font-mono"
                >
                  2K25
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-[#0a91ab] font-mono"
                >
                  SYSTEMS ONLINE
                </motion.div>

                {/* Launch Button */}
                <motion.button
                  onClick={onComplete}
                  className="relative px-6 py-3 bg-gradient-to-r from-[#0a91ab] to-[#ffc045] rounded-lg border border-[#ffc045]/50 font-mono uppercase tracking-wider"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Power className="inline-block w-4 h-4 mr-2" />
                  ENTER CHAMPIONSHIP
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Simplified Corner HUD Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { corner: 'top-left', x: 20, y: 20 },
          { corner: 'bottom-right', x: -20, y: -20 }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`absolute w-12 h-12 border border-[#0a91ab]/40`}
            style={{
              [item.corner.includes('top') ? 'top' : 'bottom']: Math.abs(item.y),
              [item.corner.includes('left') ? 'left' : 'right']: Math.abs(item.x),
              borderTopWidth: item.corner.includes('top') ? '1px' : '0',
              borderBottomWidth: item.corner.includes('bottom') ? '1px' : '0',
              borderLeftWidth: item.corner.includes('left') ? '1px' : '0',
              borderRightWidth: item.corner.includes('right') ? '1px' : '0',
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
}