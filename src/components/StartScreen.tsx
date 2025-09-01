import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Power, Cpu, Zap, Bot } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [isBooting, setIsBooting] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);
  const [bootMessages, setBootMessages] = useState<string[]>([]);

  const bootSequence = [
    "INITIALIZING ROBOT SYSTEMS...",
    "LOADING NEURAL NETWORKS...",
    "CALIBRATING SENSORS...",
    "CONNECTING TO MOTHERSHIP...",
    "ACTIVATING AI PROTOCOLS...",
    "ROBORASHTRA 2K25 READY!"
  ];

  const handleStart = () => {
    setIsBooting(true);
    let progress = 0;
    let messageIndex = 0;

    const bootInterval = setInterval(() => {
      progress += Math.random() * 20;
      setBootProgress(Math.min(progress, 100));

      if (progress >= (messageIndex + 1) * 16.67 && messageIndex < bootSequence.length) {
        setBootMessages(prev => [...prev, bootSequence[messageIndex]]);
        messageIndex++;
      }

      if (progress >= 100) {
        clearInterval(bootInterval);
        setTimeout(() => {
          onStart();
        }, 1000);
      }
    }, 300);
  };

  return (
    <div className="fixed inset-0 bg-[#022333] flex items-center justify-center overflow-hidden z-50">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #0a91ab 1px, transparent 1px),
              linear-gradient(0deg, #0a91ab 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Circuit Elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#0a91ab] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="text-center relative z-10 max-w-2xl mx-auto px-6">
        {!isBooting ? (
          <>
            {/* Robot Head Animation */}
            <motion.div
              className="relative w-32 h-32 mx-auto mb-8"
              initial={{ scale: 0, rotateY: 0 }}
              animate={{ scale: 1, rotateY: 360 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 border-4 border-[#0a91ab] rounded-xl transform rotate-45">
                <div className="absolute inset-2 border-2 border-[#ffc045] rounded-lg">
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#0a91ab] rounded-full animate-pulse" />
                  <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#0a91ab] rounded-full animate-pulse" />
                  <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-[#ffc045] rounded-full" />
                </div>
              </div>
              
              {/* Rotating Elements */}
              <motion.div
                className="absolute -inset-4 border border-[#0a91ab]/30 rounded-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-6 border border-[#ffc045]/20 rounded-xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mb-8"
            >
              <h1 className="text-6xl font-bold bg-gradient-to-r from-[#0a91ab] via-[#ffc045] to-[#0a91ab] bg-clip-text text-transparent mb-4 font-mono">
                ROBORASHTRA
              </h1>
              <h2 className="text-4xl font-bold text-[#ffc045] font-mono mb-4">
                2K25
              </h2>
              <p className="text-[#0a91ab] text-xl font-mono">
                &gt; ULTIMATE ROBOTICS CHAMPIONSHIP_
              </p>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mb-8 space-y-2"
            >
              <div className="flex items-center justify-center space-x-4 text-sm font-mono text-gray-400">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-[#0a91ab]" />
                  <span>AI_READY</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-[#ffc045]" />
                  <span>POWER_ON</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bot className="w-4 h-4 text-[#0a91ab]" />
                  <span>SYSTEMS_GO</span>
                </div>
              </div>
            </motion.div>

            {/* Start Button */}
            <motion.button
              onClick={handleStart}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative px-12 py-6 bg-gradient-to-r from-[#0a91ab] to-[#065471] rounded-xl border-2 border-[#ffc045] overflow-hidden">
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
                
                {/* Button Content */}
                <div className="relative flex items-center space-x-3">
                  <Power className="w-6 h-6 text-[#ffc045]" />
                  <span className="text-xl font-bold text-white font-mono">
                    INITIALIZE_SYSTEM
                  </span>
                </div>

                {/* Glowing Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-[#ffc045]/50 group-hover:border-[#ffc045] transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-[#ffc045]/50" />
              </div>
            </motion.button>

            {/* Warning Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="mt-6 text-gray-500 text-sm font-mono"
            >
              &gt; Click to activate robot interface and explore the future_
            </motion.p>
          </>
        ) : (
          /* Boot Sequence */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Boot Progress */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0a91ab] font-mono">
                BOOTING ROBORASHTRA SYSTEM...
              </h2>
              
              {/* Progress Bar */}
              <div className="w-full bg-[#065471] rounded-full h-4 border border-[#0a91ab]/50">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#0a91ab] to-[#ffc045] rounded-full relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${bootProgress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>
              
              <div className="text-right text-[#ffc045] font-mono">
                {Math.round(bootProgress)}%
              </div>
            </div>

            {/* Boot Messages */}
            <div className="bg-[#065471]/50 rounded-lg p-6 border border-[#0a91ab]/30 min-h-[200px]">
              <div className="space-y-2 font-mono text-sm">
                {bootMessages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[#0a91ab]"
                  >
                    &gt; {message}
                  </motion.div>
                ))}
                
                {/* Blinking Cursor */}
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-[#ffc045]"
                >
                  &gt; _
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Corner Tech Elements */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 border-[#0a91ab]/60" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-4 border-r-4 border-[#ffc045]/60" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-4 border-l-4 border-[#ffc045]/60" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 border-[#0a91ab]/60" />
    </div>
  );
}