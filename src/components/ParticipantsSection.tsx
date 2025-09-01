import { motion } from "motion/react";
import { BarChart3, Users, Globe, Award, TrendingUp, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export function ParticipantsSection() {
  const [counts, setCounts] = useState({
    participants: 0,
    colleges: 0,
    countries: 0,
    events: 0,
    projects: 0,
    awards: 0
  });

  const finalCounts = {
    participants: 12500,
    colleges: 850,
    countries: 45,
    events: 127,
    projects: 2300,
    awards: 890
  };

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        participants: Math.min(prev.participants + 125, finalCounts.participants),
        colleges: Math.min(prev.colleges + 8, finalCounts.colleges),
        countries: Math.min(prev.countries + 1, finalCounts.countries),
        events: Math.min(prev.events + 2, finalCounts.events),
        projects: Math.min(prev.projects + 23, finalCounts.projects),
        awards: Math.min(prev.awards + 9, finalCounts.awards)
      }));
    }, 50);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setCounts(finalCounts);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const stats = [
    {
      icon: Users,
      label: "Total Participants",
      value: counts.participants,
      suffix: "+",
      color: "#0a91ab",
      description: "Brilliant minds joined our community"
    },
    {
      icon: Globe,
      label: "Universities",
      value: counts.colleges,
      suffix: "+",
      color: "#ffc045",
      description: "Academic institutions worldwide"
    },
    {
      icon: BarChart3,
      label: "Countries",
      value: counts.countries,
      suffix: "",
      color: "#0a91ab",
      description: "Nations represented globally"
    },
    {
      icon: Award,
      label: "Events Hosted",
      value: counts.events,
      suffix: "+",
      color: "#ffc045",
      description: "Successful competitions organized"
    },
    {
      icon: TrendingUp,
      label: "Projects Built",
      value: counts.projects,
      suffix: "+",
      color: "#0a91ab",
      description: "Innovative robotics solutions"
    },
    {
      icon: Zap,
      label: "Awards Given",
      value: counts.awards,
      suffix: "+",
      color: "#ffc045",
      description: "Recognition for excellence"
    }
  ];

  const StatCard = ({ stat, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <motion.div
        className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/30 p-6 relative overflow-hidden h-full"
        whileHover={{ 
          scale: 1.05, 
          rotateY: 5,
          borderColor: stat.color + "60"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Neural Network Background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, ${stat.color} 2px, transparent 2px),
              radial-gradient(circle at 80% 80%, ${stat.color} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 30px 30px'
          }}
        />

        {/* Glowing Border Effect */}
        <motion.div
          className="absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ borderColor: stat.color }}
          animate={{ 
            boxShadow: [
              `0 0 5px ${stat.color}40`,
              `0 0 20px ${stat.color}80`,
              `0 0 5px ${stat.color}40`
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Holographic Corners */}
        <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: stat.color }} />
        <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: stat.color }} />
        <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: stat.color }} />
        <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: stat.color }} />

        <div className="relative z-10 text-center">
          {/* Icon */}
          <motion.div
            className="flex items-center justify-center mb-4"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="p-4 rounded-full border-2"
              style={{ borderColor: stat.color + "60" }}
            >
              <stat.icon 
                className="h-8 w-8"
                style={{ color: stat.color }}
              />
            </div>
          </motion.div>

          {/* Counter */}
          <motion.div 
            className="text-4xl md:text-5xl font-bold font-mono mb-2"
            style={{ color: stat.color }}
            animate={{ 
              textShadow: [
                `0 0 10px ${stat.color}40`,
                `0 0 20px ${stat.color}80`,
                `0 0 10px ${stat.color}40`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {stat.value.toLocaleString()}{stat.suffix}
          </motion.div>

          {/* Label */}
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[color] transition-colors duration-300" style={{ '--color': stat.color }}>
            {stat.label}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {stat.description}
          </p>

          {/* Progress Bar */}
          <motion.div
            className="mt-4 h-1 bg-[#022333] rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: stat.color }}
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, delay: index * 0.2 }}
            />
          </motion.div>
        </div>

        {/* Floating Data Points */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60"
            style={{ 
              backgroundColor: stat.color,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${stat.color} 0%, transparent 70%)`
          }}
        />
      </motion.div>
    </motion.div>
  );

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* AI Neural Network Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1920 1080">
          <defs>
            <linearGradient id="neuralGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0a91ab', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#ffc045', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#0a91ab', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          
          {/* Neural Network Connections */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${Math.random() * 1920},${Math.random() * 1080} Q${Math.random() * 1920},${Math.random() * 1080} ${Math.random() * 1920},${Math.random() * 1080}`}
              stroke="url(#neuralGradient2)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ 
                duration: 3, 
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
            />
          ))}
          
          {/* Neural Nodes */}
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1920}
              cy={Math.random() * 1080}
              r="4"
              fill="#0a91ab"
              animate={{ 
                scale: [1, 2, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 4, 
                delay: i * 0.15,
                repeat: Infinity 
              }}
            />
          ))}
        </svg>
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
            <BarChart3 className="h-8 w-8 text-[#0a91ab]" />
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#0a91ab]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-mono">
            <span className="text-white">DATA_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              ANALYTICS
            </span>
          </h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &gt; Processing historical participation data and impact metrics...
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Global Impact Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-8 relative overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #0a91ab 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, #ffc045 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 60px 60px'
            }}
          />

          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-6 font-mono">
              GLOBAL IMPACT ANALYSIS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Growth Rate */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-[#0a91ab] mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 10px #0a91ab40",
                      "0 0 20px #0a91ab80",
                      "0 0 10px #0a91ab40"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  +287%
                </motion.div>
                <div className="text-gray-300">Annual Growth</div>
              </motion.div>

              {/* Success Rate */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-[#ffc045] mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 10px #ffc04540",
                      "0 0 20px #ffc04580",
                      "0 0 10px #ffc04540"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  96.8%
                </motion.div>
                <div className="text-gray-300">Project Success Rate</div>
              </motion.div>

              {/* Innovation Index */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-[#0a91ab] mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 10px #0a91ab40",
                      "0 0 20px #0a91ab80",
                      "0 0 10px #0a91ab40"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                >
                  9.7/10
                </motion.div>
                <div className="text-gray-300">Innovation Index</div>
              </motion.div>
            </div>

            <motion.p
              className="text-gray-300 max-w-2xl mx-auto"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Our community has grown exponentially, creating a global network of innovators 
              who are shaping the future of robotics and artificial intelligence.
            </motion.p>
          </div>

          {/* Corner Indicators */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#0a91ab]" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#ffc045]" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#ffc045]" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#0a91ab]" />
        </motion.div>
      </div>

      {/* Floating Data Streams */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-[#0a91ab] to-[#ffc045] rounded-full opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 2, 0.5]
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 8,
          }}
        />
      ))}
    </section>
  );
}