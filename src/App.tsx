import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RoboticHUDNavigation } from "./components/RoboticHUDNavigation";
import { HeroSection } from "./components/HeroSection";
import { EventsSection } from "./components/EventsSection";
import { GlimpseSection } from "./components/GlimpseSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { ClanSection } from "./components/ClanSection";
import { TeamSection } from "./components/TeamSection";
import { ParticipantsSection } from "./components/ParticipantsSection";
import { ContactSection } from "./components/ContactSection";
import { ScrollTriggerWrapper } from "./components/ScrollTriggerWrapper";
import { StartScreen } from "./components/StartScreen"; 

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [systemInitialized, setSystemInitialized] = useState(false);

  const startBootSequence = () => {
    setSystemInitialized(true);
  };

  return (
    <div
      ref={scrollRef}
      className="dark min-h-screen h-[100vh] max-w-screen bg-background text-foreground relative overflow-x-hidden"
    >
      {/* HUD Controls - Visible after system initialized */}
      {systemInitialized && (
        <>
          <RoboticHUDNavigation scrollContainerRef={scrollRef} />
        </>
      )}

      <AnimatePresence mode="wait">
        {!systemInitialized ? (
          <StartScreen onStart={startBootSequence} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="min-h-screen relative"
          >
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
              <motion.div
                className="absolute inset-0 opacity-3"
                animate={{
                  backgroundPosition: ["0px 0px", "100px 100px"],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, #0a91ab 1px, transparent 1px),
                    linear-gradient(0deg, #0a91ab 1px, transparent 1px)
                  `,
                  backgroundSize: "100px 100px",
                }}
              />
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#0a91ab] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    x: [0, Math.random() * 50 - 25, 0],
                    opacity: [0, 0.4, 0],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 12 + Math.random() * 6,
                    repeat: Infinity,
                    delay: Math.random() * 8,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Main Sections */}
            <main className="relative z-10">
              <section id="home">
                <ScrollTriggerWrapper animation="fadeInUp">
                  <HeroSection />
                </ScrollTriggerWrapper>
              </section>

              <section id="events">
                <ScrollTriggerWrapper animation="fadeInLeft">
                  <EventsSection />
                </ScrollTriggerWrapper>
              </section>

              <section id="glimpse">
                <ScrollTriggerWrapper animation="scaleIn">
                  <GlimpseSection />
                </ScrollTriggerWrapper>
              </section>

              <section id="sponsors">
                <ScrollTriggerWrapper animation="fadeInRight">
                  <SponsorsSection />
                </ScrollTriggerWrapper>
              </section>

              <section id="clan">
                <ScrollTriggerWrapper animation="slideInUp">
                  <ClanSection />
                </ScrollTriggerWrapper>
              </section>

              <section id="team">
                <ScrollTriggerWrapper animation="rotateIn">
                  <TeamSection />
                </ScrollTriggerWrapper>
              </section>

              <section id="participants">
                <ScrollTriggerWrapper animation="fadeInUp">
                  <ParticipantsSection />
                </ScrollTriggerWrapper>
              </section>

              <section id="contact">
                <ScrollTriggerWrapper animation="fadeInLeft">
                  <ContactSection />
                </ScrollTriggerWrapper>
              </section>
            </main>


                      {/* Optimized Footer */}
            <ScrollTriggerWrapper animation="fadeInUp">
              <footer className="bg-[#022333] border-t-2 border-[#0a91ab]/30 py-16 relative overflow-hidden mt-20">
                {/* Simplified Background Circuit Pattern */}
                <div className="absolute inset-0 opacity-3">
                  <motion.div
                    style={{
                      backgroundImage: `
                        linear-gradient(90deg, #0a91ab 1px, transparent 1px),
                        linear-gradient(0deg, #0a91ab 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                    className="w-full h-full"
                    animate={{
                      backgroundPosition: [
                        "0px 0px",
                        "40px 40px",
                      ],
                    }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                    }}
                  />
                </div>

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                  {/* Enhanced Main Logo */}
                  <motion.div
                    className="mb-16"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="text-5xl font-bold bg-gradient-to-r from-[#0a91ab] via-[#ffc045] to-[#0a91ab] bg-clip-text text-transparent mb-6 font-mono"
                      animate={{
                        backgroundPosition: [
                          "0% 50%",
                          "100% 50%",
                          "0% 50%",
                        ],
                      }}
                      transition={{
                        backgroundPosition: {
                          duration: 8,
                          repeat: Infinity,
                        },
                      }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      ROBORASHTRA 2K25
                    </motion.div>
                    <p className="text-[#0a91ab] font-mono text-lg">
                      &gt; THE ULTIMATE ROBOTICS CHAMPIONSHIP_
                    </p>
                  </motion.div>

                  {/* Enhanced Footer Grid */}
                  <div className="grid md:grid-cols-4 gap-8 mb-16">
                    {[
                      {
                        title: "MISSION_CONTROL",
                        content:
                          "Email: info@roborashtra2k25.com\nPhone: +91 98765 43210\nSupport: 24/7 Available",
                      },
                      {
                        title: "EVENT_SCHEDULE",
                        content:
                          "March 15-18, 2025\nRegistration: Feb 15, 2025\nVenue: Tech District",
                      },
                      {
                        title: "NETWORK_LINKS",
                        content:
                          "@roborashtra2k25\n#RoboRashtra2K25\ngithub.com/robohawk",
                      },
                      {
                        title: "SYSTEM_STATUS",
                        content:
                          "All Systems: ONLINE\nRegistration: ACTIVE\nCommunity: GROWING",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#065471]/20 backdrop-blur-sm border border-[#0a91ab]/30 rounded-lg p-6 relative overflow-hidden"
                        whileHover={{
                          scale: 1.02,
                          backgroundColor:
                            "rgba(6, 84, 113, 0.3)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-[#0a91ab] font-semibold mb-6 font-mono text-lg">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm whitespace-pre-line leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Simplified Divider */}
                  <motion.div
                    className="w-full h-1 bg-gradient-to-r from-transparent via-[#0a91ab] to-transparent mb-12 rounded-full"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                  />

                  {/* Copyright */}
                  <motion.div className="border-t border-[#065471] pt-12">
                    <p className="text-gray-500 text-base font-mono mb-4">
                      © 2025 RoboRashtra | All systems
                      operational | Built with cutting-edge
                      technology for the future of robotics
                    </p>
                    <motion.p
                      className="text-sm text-gray-600 font-mono"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                      }}
                    >
                      &gt; Powered by RoboHawk Community |
                      Innovation Never Stops_
                    </motion.p>
                  </motion.div>
                </div>
              </footer>
            </ScrollTriggerWrapper>
          </motion.div>
        
        
          )}
      </AnimatePresence>
    </div>
  );
}
