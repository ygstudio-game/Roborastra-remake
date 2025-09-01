import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Zap, Calendar, Trophy, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function CTASection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to March 15, 2025
    const targetDate = new Date('2025-03-15T10:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1653998894571-ae645e479e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMHRlY2hub2xvZ3klMjBkaXNwbGF5fGVufDF8fHx8MTc1NjA5OTIwOHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Holographic Technology Display"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#022333]/90 via-[#065471]/70 to-[#022333]/90" />
        
        {/* Animated Grid Overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, #0a91ab 1px, transparent 1px),
              linear-gradient(0deg, #0a91ab 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Join the</span>
            <br />
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              Revolution
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Don't miss your chance to be part of the most prestigious robotics championship. 
            Register now and make history.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Calendar className="h-6 w-6 text-[#0a91ab]" />
            <span className="text-xl text-gray-300">Event Starts In:</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gradient-to-br from-[#065471]/40 to-[#022333]/60 backdrop-blur-sm border-2 border-[#0a91ab]/40 rounded-2xl p-6 relative overflow-hidden group-hover:border-[#ffc045]/60 transition-colors duration-300">
                  {/* Glowing Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#0a91ab]/10 to-[#ffc045]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold text-white mb-2"
                      animate={{ 
                        textShadow: [
                          "0 0 5px #0a91ab40",
                          "0 0 20px #0a91ab80",
                          "0 0 5px #0a91ab40"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {String(item.value).padStart(2, '0')}
                    </motion.div>
                    <div className="text-[#0a91ab] font-semibold uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#ffc045]/60 group-hover:border-[#ffc045] transition-colors duration-300" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#ffc045]/60 group-hover:border-[#ffc045] transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary CTA - Register Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="relative bg-gradient-to-r from-[#0a91ab] to-[#ffc045] hover:from-[#0a91ab]/80 hover:to-[#ffc045]/80 text-white px-12 py-6 text-xl rounded-full shadow-2xl group overflow-hidden border-2 border-transparent hover:border-[#ffc045]/50 transition-all duration-500"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ffc045] to-[#0a91ab] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ 
                  x: ["-100%", "100%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10 flex items-center">
                <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Register Now
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#0a91ab] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Button>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-[#ffc045] text-[#ffc045] hover:bg-[#ffc045] hover:text-[#022333] px-8 py-6 text-xl rounded-full shadow-lg shadow-[#ffc045]/30 hover:shadow-[#ffc045]/50 group transition-all duration-300"
            >
              <Trophy className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 text-gray-400"
        >
          <p className="text-lg">
            Early bird registration ends February 15, 2025
          </p>
          <p className="text-sm mt-2">
            Limited seats available • International participation welcome
          </p>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-[#0a91ab] to-[#ffc045] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </section>
  );
}