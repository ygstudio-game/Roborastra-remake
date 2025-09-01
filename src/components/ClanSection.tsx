import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Users, Target, Zap, Award, Globe } from "lucide-react";

export function ClanSection() {
  const achievements = [
    { icon: Users, value: "10K+", label: "Community Members" },
    { icon: Award, value: "50+", label: "Events Organized" },
    { icon: Globe, value: "25+", label: "Countries Reached" },
    { icon: Target, value: "99.9%", label: "Success Rate" }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 1080">
          {/* Neural Network Connections */}
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0a91ab', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#ffc045', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          
          {/* Connection Lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 1920}
              y1={Math.random() * 1080}
              x2={Math.random() * 1920}
              y2={Math.random() * 1080}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ 
                duration: 2, 
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3
              }}
            />
          ))}
          
          {/* Neural Nodes */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1920}
              cy={Math.random() * 1080}
              r="3"
              fill="#0a91ab"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3, 
                delay: i * 0.2,
                repeat: Infinity 
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#0a91ab]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <Shield className="h-8 w-8 text-[#0a91ab]" />
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#0a91ab]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8 font-mono"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-white">OUR_</span>
              <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
                CLAN
              </span>
            </motion.h2>

            {/* RoboHawk Logo Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-8 relative overflow-hidden">
                {/* Holographic Frame */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#0a91ab]/30"
                  animate={{ 
                    borderColor: ["#0a91ab30", "#ffc04550", "#0a91ab30"] 
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#ffc045]" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#ffc045]" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#ffc045]" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#ffc045]" />

                <div className="relative z-10 text-center">
                  {/* RoboHawk Logo */}
                  <motion.div
                    className="text-6xl font-bold font-mono mb-4"
                    animate={{ 
                      textShadow: [
                        "0 0 10px #0a91ab40",
                        "0 0 20px #0a91ab80",
                        "0 0 10px #0a91ab40"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
                      ROBOHAWK
                    </span>
                  </motion.div>
                  
                  <motion.div
                    className="text-lg text-gray-400 font-mono"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    &gt; Elite Robotics Community _
                  </motion.div>
                </div>

                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-5"
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, #0a91ab 25%, transparent 25%), 
                      linear-gradient(-45deg, #ffc045 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, #0a91ab 75%), 
                      linear-gradient(-45deg, transparent 75%, #ffc045 75%)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                <span className="text-[#0a91ab]">RoboHawk</span> is the premier robotics and AI community, 
                bringing together brilliant minds from across the globe. We are the architects of tomorrow's 
                technological landscape.
              </p>
              
              <p className="text-lg text-gray-400 mb-6">
                Our mission: <span className="text-[#ffc045]">Democratize robotics education</span> and 
                foster innovation through cutting-edge competitions, workshops, and collaborative projects.
              </p>

              {/* Glowing Divider */}
              <motion.div
                className="w-24 h-0.5 bg-gradient-to-r from-[#0a91ab] to-[#ffc045] mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                animate={{ opacity: [0.6, 1, 0.6] }}
              />

              <p className="text-base text-gray-500 font-mono">
                &gt; Established 2020 | Global Network | Innovation Hub
              </p>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#065471]/20 to-[#022333]/40 backdrop-blur-sm border border-[#0a91ab]/30 p-4 relative group hover:border-[#0a91ab]/60 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <achievement.icon className="h-6 w-6 text-[#0a91ab] group-hover:text-[#ffc045] transition-colors duration-300" />
                    <motion.div 
                      className="text-2xl font-bold text-white"
                      animate={{ 
                        textShadow: [
                          "0 0 5px #0a91ab40",
                          "0 0 15px #0a91ab80",
                          "0 0 5px #0a91ab40"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {achievement.value}
                    </motion.div>
                  </div>
                  <div className="text-sm text-gray-400 font-mono">
                    {achievement.label}
                  </div>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#0a91ab]/10 to-[#ffc045]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Holographic Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Holographic Panel */}
            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2"
                  animate={{ 
                    borderColor: ["#0a91ab40", "#ffc04560", "#0a91ab40"] 
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Community Network Visualization */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 font-mono text-center">
                    NETWORK STATUS
                  </h3>

                  {/* Central Hub */}
                  <div className="relative flex items-center justify-center mb-8">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-[#0a91ab] to-[#ffc045] rounded-full flex items-center justify-center relative"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <Shield className="h-10 w-10 text-white" />
                      
                      {/* Orbiting Elements */}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 bg-[#0a91ab] rounded-full"
                          style={{
                            top: "50%",
                            left: "50%",
                            transformOrigin: "50% 50%"
                          }}
                          animate={{ 
                            rotate: 360,
                            x: Math.cos(i * 60 * Math.PI / 180) * 50 - 6,
                            y: Math.sin(i * 60 * Math.PI / 180) * 50 - 6,
                          }}
                          transition={{ 
                            duration: 8, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>

                  {/* Status Indicators */}
                  <div className="space-y-4">
                    {[
                      { label: "Global Network", status: "ONLINE", color: "#0a91ab" },
                      { label: "AI Systems", status: "ACTIVE", color: "#ffc045" },
                      { label: "Community Hub", status: "OPERATIONAL", color: "#0a91ab" },
                      { label: "Innovation Labs", status: "RUNNING", color: "#ffc045" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center p-3 bg-[#022333]/50 border border-[#065471]/50"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-gray-300 font-mono text-sm">{item.label}</span>
                        <motion.span 
                          className="font-bold text-sm font-mono"
                          style={{ color: item.color }}
                          animate={{ 
                            opacity: [0.7, 1, 0.7],
                            textShadow: [
                              `0 0 5px ${item.color}40`,
                              `0 0 10px ${item.color}80`,
                              `0 0 5px ${item.color}40`
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        >
                          {item.status}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Pulse Animation */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-[#0a91ab] rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>

                {/* Floating Data Points */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#0a91ab] rounded-full opacity-60"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                  />
                ))}
              </motion.div>

              {/* Holographic Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0a91ab]/20 to-[#ffc045]/20 blur-xl -z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}