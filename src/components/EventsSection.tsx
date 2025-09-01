import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock, MapPin, Users, Zap, Trophy, Target, Gamepad2 } from "lucide-react";

export function EventsSection() {
  const events = [
    {
      id: 1,
      title: "RoboSumo Championship",
      category: "Combat",
      description: "Ultimate robot combat arena where steel meets strategy",
      date: "March 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Arena Alpha",
      participants: "32 Teams",
      prize: "₹2,50,000",
      icon: Zap,
      gradient: "from-[#0a91ab] to-[#065471]",
      glowColor: "#0a91ab"
    },
    {
      id: 2,
      title: "Autonomous Racing",
      category: "Speed",
      description: "High-speed autonomous navigation through challenging circuits",
      date: "March 16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Speed Track Beta",
      participants: "24 Teams",
      prize: "₹3,00,000",
      icon: Target,
      gradient: "from-[#ffc045] to-[#ff8c00]",
      glowColor: "#ffc045"
    },
    {
      id: 3,
      title: "AI Innovation Challenge",
      category: "Intelligence",
      description: "Showcase cutting-edge AI algorithms and machine learning",
      date: "March 17, 2025",
      time: "11:00 AM - 7:00 PM",
      location: "Tech Hub Gamma",
      participants: "40 Teams",
      prize: "₹4,00,000",
      icon: Trophy,
      gradient: "from-[#9333ea] to-[#7c3aed]",
      glowColor: "#9333ea"
    },
    {
      id: 4,
      title: "Humanoid Performance",
      category: "Mobility",
      description: "Advanced humanoid robots demonstrating human-like capabilities",
      date: "March 18, 2025",
      time: "2:00 PM - 8:00 PM",
      location: "Performance Delta",
      participants: "16 Teams",
      prize: "₹2,00,000",
      icon: Gamepad2,
      gradient: "from-[#059669] to-[#047857]",
      glowColor: "#059669"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-12 h-full w-full">
          {Array.from({ length: 240 }).map((_, i) => (
            <div key={i} className="border border-[#0a91ab]/20" />
          ))}
        </div>
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              Championship
            </span>{" "}
            <span className="text-white">Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four legendary competitions. One ultimate champion. 
            Experience the future of robotics across multiple domains.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              className="group perspective-1000"
            >
              <Card className={`
                relative overflow-hidden bg-gradient-to-br from-[#065471]/20 to-[#022333]/40 
                border-2 border-transparent hover:border-[${event.glowColor}]/60 
                transition-all duration-500 transform-gpu
                hover:shadow-2xl hover:shadow-[${event.glowColor}]/30
              `}>
                {/* Holographic Background Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      `linear-gradient(0deg, ${event.glowColor}20, transparent)`,
                      `linear-gradient(90deg, ${event.glowColor}20, transparent)`,
                      `linear-gradient(180deg, ${event.glowColor}20, transparent)`,
                      `linear-gradient(270deg, ${event.glowColor}20, transparent)`,
                      `linear-gradient(360deg, ${event.glowColor}20, transparent)`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${event.gradient} group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <event.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <Badge 
                          variant="outline" 
                          className={`border-[${event.glowColor}] text-[${event.glowColor}] mb-2`}
                        >
                          {event.category}
                        </Badge>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[${event.glowColor}] transition-colors duration-300">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      className={`text-2xl font-bold text-[${event.glowColor}]`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {event.prize}
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <Users className="h-4 w-4" />
                      <span>{event.participants}</span>
                    </div>
                  </div>

                  {/* Holographic Corners */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[${event.glowColor}]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[${event.glowColor}]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[${event.glowColor}]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[${event.glowColor}]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating Particles */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-[${event.glowColor}] rounded-full opacity-0 group-hover:opacity-60`}
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}