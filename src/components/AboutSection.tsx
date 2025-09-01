import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Cpu, Zap, Trophy, Users } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Cpu,
      title: "Advanced Robotics",
      description: "Cutting-edge robotics technology and AI integration"
    },
    {
      icon: Zap,
      title: "High-Speed Competition",
      description: "Lightning-fast robots competing in real-time challenges"
    },
    {
      icon: Trophy,
      title: "Championship Glory",
      description: "Compete for the ultimate robotics championship title"
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with robotics enthusiasts from around the world"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a91ab] to-[#ffc045]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0a91ab 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
                About
              </span>{" "}
              <span className="text-white">Roborashtra</span>
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Roborashtra 2K25 is the most prestigious robotics championship of the year, 
              bringing together the brightest minds in robotics and AI. Experience the future 
              of technology as cutting-edge robots compete in heart-pounding challenges.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-400 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              From autonomous navigation to precision engineering, witness the pinnacle of 
              robotic innovation in an electrifying competitive environment.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 p-6 rounded-xl border border-[#0a91ab]/30 hover:border-[#0a91ab]/60 transition-all duration-300 hover:scale-105"
                >
                  <feature.icon className="h-8 w-8 text-[#0a91ab] mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - 3D Robot Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Robot Image */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630397512069-0377e0044f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHJvYm90JTIwaWxsdXN0cmF0aW9uJTIwY3liZXJwdW5rfGVufDF8fHx8MTc1NjA5OTIwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="3D Robot Illustration"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>

              {/* Glowing Effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0a91ab]/20 to-[#ffc045]/20 rounded-2xl blur-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Floating Particles */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#0a91ab] rounded-full opacity-60"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Holographic Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-[#0a91ab]/50"
                animate={{ 
                  borderColor: ["#0a91ab80", "#ffc04580", "#0a91ab80"] 
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#ffc045]" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#ffc045]" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#ffc045]" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#ffc045]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}