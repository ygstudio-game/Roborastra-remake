import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Zap, Play, ArrowDown, Target, Shield, Cpu } from "lucide-react";
import { ScrollTriggerWrapper, ParallaxElement } from "./ScrollTriggerWrapper";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced 3D Background with Parallax */}
      <ParallaxElement speed={0.3} className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbWVjaCUyMHJvYm90JTIwc2lsaG91ZXR0ZXxlbnwxfHx8fDE3NTYxMDAxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Futuristic Mech Robot"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#022333]/80 via-[#065471]/60 to-[#022333]/90" />
      </ParallaxElement>

      {/* 3D Rotating Grid System */}
      <motion.div 
        className="absolute inset-0 opacity-15"
        style={{ y: y1, rotateY: rotate }}
      >
        <div className="perspective-1000 transform-gpu">
          <motion.div
            className="grid grid-cols-20 grid-rows-12 h-full w-full transform-gpu"
            animate={{ 
              rotateX: [0, 5, 0],
              rotateY: [0, 2, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `
                linear-gradient(90deg, #0a91ab 1px, transparent 1px),
                linear-gradient(0deg, #0a91ab 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              transformStyle: 'preserve-3d'
            }}
          >
            {Array.from({ length: 240 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-[#0a91ab]/10 relative transform-gpu"
                initial={{ opacity: 0, z: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  z: [0, Math.random() * 20 - 10, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.01,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {Math.random() > 0.95 && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#0a91ab]/60 to-[#ffc045]/60"
                    animate={{ 
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* 3D Floating Robot Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y2 }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotateZ: [0, 360],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <div className="w-6 h-6 border-2 border-[#0a91ab] rotate-45 relative">
              <div className="absolute inset-1 bg-[#ffc045] animate-pulse" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced HUD System */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 3D Corner Brackets */}
        <motion.div
          className="absolute top-8 left-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="relative w-16 h-16">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#0a91ab]" />
            <motion.div
              className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#ffc045]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* 3D Status Panel */}
        <ScrollTriggerWrapper animation="fadeInLeft" delay={2}>
          <div className="absolute top-32 left-8 bg-[#065471]/30 backdrop-blur-sm border border-[#0a91ab]/50 rounded-lg p-4 transform-gpu">
            <motion.div
              animate={{ rotateY: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Target className="w-4 h-4 text-[#0a91ab]" />
                <div className="text-[#0a91ab] text-sm font-mono">SYSTEMS: ONLINE</div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-4 h-4 text-[#ffc045]" />
                <div className="text-[#ffc045] text-xs">SECURITY: ACTIVE</div>
              </div>
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-[#0a91ab]" />
                <div className="text-gray-300 text-xs">AI: ENGAGED</div>
              </div>
            </motion.div>
          </div>
        </ScrollTriggerWrapper>

        {/* 3D Participant Counter */}
        <ScrollTriggerWrapper animation="fadeInRight" delay={2.5}>
          <div className="absolute top-1/2 right-8 bg-[#065471]/30 backdrop-blur-sm border border-[#0a91ab]/50 rounded-lg p-4">
            <motion.div
              animate={{ 
                rotateY: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-[#ffc045] text-sm font-mono mb-1">PARTICIPANTS</div>
              <motion.div 
                className="text-[#0a91ab] text-3xl font-bold"
                animate={{ 
                  textShadow: [
                    "0 0 10px #0a91ab40",
                    "0 0 20px #0a91ab80",
                    "0 0 10px #0a91ab40"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                500+
              </motion.div>
              <div className="text-gray-400 text-xs">AND COUNTING...</div>
            </motion.div>
          </div>
        </ScrollTriggerWrapper>
      </div>

      {/* Main Content with Enhanced 3D Effects */}
      <ScrollTriggerWrapper animation="scaleIn" className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* 3D Typography Logo */}
        <motion.div
          className="mb-8 relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 relative transform-gpu"
            animate={{
              rotateY: [0, 2, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              fontFamily: 'monospace',
              textShadow: '0 0 20px #0a91ab40, 0 0 40px #0a91ab20',
              transformStyle: 'preserve-3d'
            }}
          >
            <motion.span
              className="bg-gradient-to-r from-[#0a91ab] via-[#ffc045] to-[#0a91ab] bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              ROBORASHTRA
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="text-3xl md:text-5xl font-light text-[#ffc045] tracking-[0.3em] mb-2 transform-gpu"
            animate={{ 
              textShadow: [
                "0 0 10px #ffc04540",
                "0 0 20px #ffc04580",
                "0 0 10px #ffc04540"
              ],
              rotateX: [0, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            2K25
          </motion.div>

          {/* 3D Holographic Frame */}
          <motion.div
            className="absolute inset-0 border-2 border-[#0a91ab]/30 -m-8 transform-gpu"
            animate={{ 
              borderColor: ["#0a91ab30", "#ffc04550", "#0a91ab30"],
              rotateZ: [0, 0.5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ transformStyle: 'preserve-3d' }}
          />
        </motion.div>

        {/* Enhanced Tagline */}
        <ScrollTriggerWrapper animation="fadeInUp" delay={1}>
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              <span className="text-[#0a91ab]">INITIALIZING</span> the future of robotics.{" "}
              <span className="text-[#ffc045]">LOADING</span> unprecedented innovation.
            </p>
            <motion.p
              className="text-lg text-gray-400 font-mono"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              &gt; BUILD. CODE. COMPETE. CONQUER. _
            </motion.p>
          </div>
        </ScrollTriggerWrapper>

        {/* Enhanced 3D CTA Panels */}
        <ScrollTriggerWrapper animation="fadeInUp" delay={1.5}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                z: 50
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#0a91ab] to-[#065471] hover:from-[#0a91ab]/80 hover:to-[#065471]/80 text-white px-12 py-6 text-xl rounded-none border-2 border-[#0a91ab] group transition-all duration-300 font-mono uppercase tracking-wider transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0a91ab] to-[#ffc045] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />
                <div className="relative z-10 flex items-center">
                  <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Initialize Registration
                </div>
              </Button>
              {/* 3D Holographic corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ffc045] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ffc045] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ffc045] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ffc045] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform-gpu" />
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: -10,
                z: 50
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-[#ffc045] text-[#ffc045] hover:bg-[#ffc045]/10 px-12 py-6 text-xl rounded-none group transition-all duration-300 font-mono uppercase tracking-wider backdrop-blur-sm transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center">
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Access Archives
                </div>
              </Button>
            </motion.div>
          </div>
        </ScrollTriggerWrapper>
      </ScrollTriggerWrapper>

      {/* Enhanced 3D Scroll Indicator */}
      <ScrollTriggerWrapper animation="fadeInUp" delay={3} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="text-[#0a91ab] text-sm font-mono mb-2">SCROLL TO EXPLORE</div>
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotateY: [0, 10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 border-2 border-[#0a91ab] rounded-full flex justify-center relative transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[#0a91ab] rounded-full mt-2"
            />
            <ArrowDown className="absolute -bottom-6 w-4 h-4 text-[#ffc045]" />
          </motion.div>
        </div>
      </ScrollTriggerWrapper>

      {/* Enhanced 3D Ambient Light Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0a91ab]/20 rounded-full blur-3xl transform-gpu"
        style={{ y: y1 }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          rotateZ: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ffc045]/10 rounded-full blur-3xl transform-gpu"
        style={{ y: y2 }}
        animate={{ 
          scale: [1.2, 0.8, 1.2],
          opacity: [0.1, 0.3, 0.1],
          rotateZ: [360, 180, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
}