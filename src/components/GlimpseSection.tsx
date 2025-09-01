import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, Eye, Calendar, Award } from "lucide-react";
import { useState } from "react";

export function GlimpseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const glimpses = [
    {
      id: 1,
      title: "RoboWars Championship 2024",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1632017734927-48988a0efae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwY29tcGV0aXRpb24lMjBhcmVuYSUyMGxpZ2h0c3xlbnwxfHx8fDE3NTYxMDAxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Epic battles between autonomous fighting robots",
      stats: "32 Teams, 5 Countries"
    },
    {
      id: 2,
      title: "AI Innovation Summit",
      date: "July 2024",
      image: "https://images.unsplash.com/photo-1752253604157-65fb42c30816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMGZ1dHVyaXN0aWMlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MTAwMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Cutting-edge AI demonstrations and breakthroughs",
      stats: "150+ Participants, 20 Projects"
    },
    {
      id: 3,
      title: "Drone Racing Spectacular",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbWVjaCUyMHJvYm90JTIwc2lsaG91ZXR0ZXxlbnwxfHx8fDE3NTYxMDAxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "High-speed autonomous drone racing through obstacle courses",
      stats: "64 Pilots, 12 Countries"
    },
    {
      id: 4,
      title: "Humanoid Showcase",
      date: "December 2024",
      image: "https://images.unsplash.com/photo-1716237921133-7e0e8d790a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwZ2VhcnMlMjBtZWNoYW5pY2FsfGVufDF8fHx8MTc1NjEwMDExNnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Advanced humanoid robots demonstrating human-like capabilities",
      stats: "25 Robots, 18 Universities"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % glimpses.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + glimpses.length) % glimpses.length);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, #0a91ab 2px, transparent 2px),
              radial-gradient(circle at 80% 80%, #ffc045 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 80px 80px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#022333]/50 via-transparent to-[#065471]/30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#0a91ab]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <Eye className="h-8 w-8 text-[#0a91ab]" />
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#0a91ab]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-mono">
            <span className="text-white">ARCHIVE_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              GLIMPSE
            </span>
          </h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &gt; Accessing archived footage from previous robotic engagements...
          </motion.p>
        </motion.div>

        {/* Holographic Carousel */}
        <div className="relative">
          {/* Main Display */}
          <motion.div 
            className="relative h-[600px] bg-gradient-to-br from-[#065471]/20 to-[#022333]/40 rounded-none border-2 border-[#0a91ab]/40 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Holographic Frame Effects */}
            <motion.div
              className="absolute inset-0 border-4 border-[#0a91ab]/30"
              animate={{ 
                borderColor: ["#0a91ab30", "#ffc04550", "#0a91ab30"] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#ffc045]" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#ffc045]" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#ffc045]" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#ffc045]" />

            {/* Active Image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={glimpses[activeIndex].image}
                alt={glimpses[activeIndex].title}
                className="w-full h-full object-cover"
              />
              
              {/* Holographic Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#0a91ab]/20 via-transparent to-[#ffc045]/20"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Scan Lines Effect */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{ 
                  backgroundPosition: ["0px 0px", "0px 100px"],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #0a91ab 2px, #0a91ab 4px)`,
                }}
              />
            </motion.div>

            {/* Info Overlay */}
            <motion.div
              key={`info-${activeIndex}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#022333]/90 to-transparent p-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-[#ffc045]" />
                <span className="text-[#ffc045] font-mono text-sm">
                  {glimpses[activeIndex].date}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-3 font-mono">
                {glimpses[activeIndex].title}
              </h3>
              
              <p className="text-gray-300 text-lg mb-4">
                {glimpses[activeIndex].description}
              </p>
              
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#0a91ab]" />
                <span className="text-[#0a91ab] font-mono text-sm">
                  {glimpses[activeIndex].stats}
                </span>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#065471]/80 hover:bg-[#065471] border-2 border-[#0a91ab]/50 hover:border-[#0a91ab] p-3 transition-all duration-300 group"
            >
              <ChevronLeft className="h-6 w-6 text-[#0a91ab] group-hover:text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#065471]/80 hover:bg-[#065471] border-2 border-[#0a91ab]/50 hover:border-[#0a91ab] p-3 transition-all duration-300 group"
            >
              <ChevronRight className="h-6 w-6 text-[#0a91ab] group-hover:text-white" />
            </button>
          </motion.div>

          {/* Thumbnail Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {glimpses.map((glimpse, index) => (
              <motion.button
                key={glimpse.id}
                onClick={() => setActiveIndex(index)}
                className={`relative h-32 border-2 transition-all duration-300 group overflow-hidden ${
                  index === activeIndex 
                    ? 'border-[#ffc045] scale-105' 
                    : 'border-[#0a91ab]/30 hover:border-[#0a91ab]/60'
                }`}
                whileHover={{ scale: index === activeIndex ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ImageWithFallback
                  src={glimpse.image}
                  alt={glimpse.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Holographic Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-300 ${
                  index === activeIndex 
                    ? 'from-[#ffc045]/40 to-[#0a91ab]/40' 
                    : 'from-[#0a91ab]/20 to-[#065471]/20 group-hover:from-[#0a91ab]/40 group-hover:to-[#065471]/40'
                }`} />

                {/* Corner Indicators */}
                {index === activeIndex && (
                  <>
                    <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#ffc045]" />
                    <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#ffc045]" />
                    <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#ffc045]" />
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#ffc045]" />
                  </>
                )}

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#022333]/80 p-2">
                  <div className="text-xs text-white font-mono truncate">
                    {glimpse.title}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Floating Data Points */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#0a91ab] opacity-60"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}