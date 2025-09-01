import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Award, Users, Globe, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function HighlightsSection() {
  const stats = [
    { number: "500+", label: "Participants", icon: Users },
    { number: "50+", label: "Countries", icon: Globe },
    { number: "₹25L", label: "Total Prizes", icon: Award },
    { number: "48hrs", label: "Non-stop Action", icon: Zap }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Full-width Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1632017734927-48988a0efae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9uJTIwYXJlbmF8ZW58MXx8fHwxNzU2MDk5MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Robotics Competition Arena"
          className="w-full h-full object-cover"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#022333]/80" />
        
        {/* Glowing Overlays */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#0a91ab]/20 via-transparent to-[#ffc045]/20"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Animated Light Beams */}
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-[#0a91ab] to-transparent opacity-30"
          animate={{ 
            x: ["0%", "300%", "0%"],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-[#ffc045] to-transparent opacity-30"
          animate={{ 
            x: ["0%", "-200%", "0%"],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-white">Experience the</span>
              <br />
              <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
                Future of Robotics
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Witness groundbreaking innovations, revolutionary AI breakthroughs, and 
              the most advanced robotics demonstrations ever assembled. This is where 
              science fiction becomes reality.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <motion.div
                      className="p-3 rounded-full bg-gradient-to-r from-[#0a91ab]/20 to-[#ffc045]/20 border border-[#0a91ab]/30 group-hover:border-[#0a91ab]/60 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="h-6 w-6 text-[#0a91ab] group-hover:text-[#ffc045] transition-colors duration-300" />
                    </motion.div>
                  </div>
                  <motion.div 
                    className="text-3xl font-bold text-white mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 group-hover:text-[#0a91ab] transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] hover:from-[#0a91ab]/80 hover:to-[#ffc045]/80 text-white px-8 py-4 text-lg rounded-full shadow-lg shadow-[#0a91ab]/50 hover:shadow-[#ffc045]/50 border-2 border-transparent hover:border-[#ffc045]/50 group transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Event Highlights
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Holographic Display */}
            <div className="relative">
              {/* Main Display */}
              <motion.div
                className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  style={{
                    backgroundImage: `linear-gradient(45deg, #0a91ab 25%, transparent 25%), 
                                     linear-gradient(-45deg, #ffc045 25%, transparent 25%),
                                     linear-gradient(45deg, transparent 75%, #0a91ab 75%), 
                                     linear-gradient(-45deg, transparent 75%, #ffc045 75%)`,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                  }}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    Live Event Feed
                  </h3>

                  {/* Simulated Data Stream */}
                  <div className="space-y-4">
                    {[
                      { label: "Active Robots", value: "127", color: "#0a91ab" },
                      { label: "Live Matches", value: "8", color: "#ffc045" },
                      { label: "Viewers Online", value: "45.2K", color: "#0a91ab" },
                      { label: "Points Scored", value: "1,247", color: "#ffc045" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center p-3 bg-[#022333]/50 rounded-lg border border-[#065471]/50"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-gray-300">{item.label}</span>
                        <motion.span 
                          className="font-bold text-xl"
                          style={{ color: item.color }}
                          animate={{ 
                            textShadow: [
                              `0 0 5px ${item.color}40`,
                              `0 0 10px ${item.color}80`,
                              `0 0 5px ${item.color}40`
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {item.value}
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
              </motion.div>

              {/* Floating Elements */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-[#0a91ab] to-[#ffc045] rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}