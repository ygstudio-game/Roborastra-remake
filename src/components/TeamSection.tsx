import { motion } from "motion/react";
import { Github, Linkedin, Mail, Code, Cpu, Zap } from "lucide-react";

export function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Alex Chen",
      role: "Chief Robotics Officer",
      department: "AI & Machine Learning",
      avatar: "AC",
      bio: "Leading AI researcher with 15+ years in autonomous systems",
      skills: ["Neural Networks", "Computer Vision", "Autonomous Systems"],
      color: "#0a91ab"
    },
    {
      id: 2,
      name: "Sarah Kumar",
      role: "Head of Engineering",
      department: "Mechanical Systems",
      avatar: "SK",
      bio: "Expert in robotic design and mechatronics engineering",
      skills: ["Mechanical Design", "Control Systems", "3D Modeling"],
      color: "#ffc045"
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      role: "Software Architect",
      department: "Software Development",
      avatar: "MR",
      bio: "Full-stack developer specializing in robotic control systems",
      skills: ["Python", "ROS", "Embedded Systems"],
      color: "#0a91ab"
    },
    {
      id: 4,
      name: "Dr. Priya Patel",
      role: "Research Director",
      department: "Innovation Labs",
      avatar: "PP",
      bio: "Pioneer in human-robot interaction and ethical AI",
      skills: ["HRI", "Ethics in AI", "Research Methodology"],
      color: "#ffc045"
    },
    {
      id: 5,
      name: "James Liu",
      role: "Hardware Engineer",
      department: "Electronics Division",
      avatar: "JL",
      bio: "Electronics wizard specializing in sensor integration",
      skills: ["PCB Design", "Sensor Fusion", "IoT Systems"],
      color: "#0a91ab"
    },
    {
      id: 6,
      name: "Emma Thompson",
      role: "Community Manager",
      department: "Outreach & Events",
      avatar: "ET",
      bio: "Building bridges between technology and community",
      skills: ["Event Management", "Community Building", "Public Speaking"],
      color: "#ffc045"
    }
  ];

  const TeamCard = ({ member, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <motion.div
        className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/30 p-6 relative overflow-hidden h-full"
        whileHover={{ 
          scale: 1.05, 
          rotateY: 5,
          borderColor: member.color + "60"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Circuit Overlay Animation */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(45deg, ${member.color} 1px, transparent 1px),
              linear-gradient(-45deg, ${member.color} 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Holographic Corners */}
        <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: member.color }} />
        <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: member.color }} />
        <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: member.color }} />
        <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: member.color }} />

        {/* Avatar Section */}
        <div className="relative z-10 text-center mb-6">
          <motion.div
            className="relative mx-auto w-24 h-24 mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Main Avatar */}
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold font-mono border-4 relative overflow-hidden"
              style={{ 
                borderColor: member.color,
                background: `linear-gradient(135deg, ${member.color}20, #022333)`
              }}
            >
              <motion.span
                style={{ color: member.color }}
                animate={{ 
                  textShadow: [
                    `0 0 5px ${member.color}40`,
                    `0 0 15px ${member.color}80`,
                    `0 0 5px ${member.color}40`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {member.avatar}
              </motion.span>

              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed rounded-full opacity-0 group-hover:opacity-60"
                style={{ borderColor: member.color }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Circuit Overlay on Hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${member.color}20 0%, transparent 70%)`
                }}
              />
            </div>

            {/* Status Indicator */}
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-[#022333]"
              style={{ backgroundColor: member.color }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Name and Role */}
          <motion.h3 
            className="text-xl font-bold text-white mb-2"
            whileHover={{ scale: 1.05 }}
          >
            {member.name}
          </motion.h3>
          
          <motion.div 
            className="text-sm font-mono mb-1"
            style={{ color: member.color }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {member.role}
          </motion.div>
          
          <div className="text-xs text-gray-400 mb-4">
            {member.department}
          </div>
        </div>

        {/* Bio */}
        <div className="relative z-10 mb-6">
          <p className="text-sm text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
            {member.bio}
          </p>
        </div>

        {/* Skills */}
        <div className="relative z-10 mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {member.skills.map((skill, skillIndex) => (
              <motion.span
                key={skillIndex}
                className="text-xs px-2 py-1 border font-mono"
                style={{ 
                  borderColor: member.color + "40",
                  color: member.color
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: member.color + "20"
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="relative z-10 flex justify-center gap-4">
          {[Github, Linkedin, Mail].map((Icon, iconIndex) => (
            <motion.button
              key={iconIndex}
              className="p-2 border border-gray-600 hover:border-[color] transition-colors duration-300 group/icon"
              style={{ '--color': member.color }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: member.color + "20"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon 
                className="h-4 w-4 text-gray-400 group-hover/icon:text-[color] transition-colors duration-300" 
                style={{ '--color': member.color }}
              />
            </motion.button>
          ))}
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60"
            style={{ 
              backgroundColor: member.color,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${member.color} 0%, transparent 70%)`
          }}
        />
      </motion.div>
    </motion.div>
  );

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Circuit Board Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, #0a91ab 1px, transparent 1px),
              linear-gradient(0deg, #0a91ab 1px, transparent 1px),
              linear-gradient(90deg, #ffc045 1px, transparent 1px),
              linear-gradient(0deg, #ffc045 1px, transparent 1px)
            `,
            backgroundSize: '25px 25px, 25px 25px, 50px 50px, 50px 50px'
          }}
        />
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
            <Code className="h-8 w-8 text-[#0a91ab]" />
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#0a91ab]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-mono">
            <span className="text-white">OUR_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              TEAM
            </span>
          </h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &gt; Meet the elite engineers and visionaries behind RoboRashtra
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-8 max-w-2xl mx-auto relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: `
                  linear-gradient(45deg, #0a91ab 25%, transparent 25%), 
                  linear-gradient(-45deg, #ffc045 25%, transparent 25%)
                `,
                backgroundSize: '40px 40px'
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Cpu className="h-8 w-8 text-[#0a91ab]" />
                <h3 className="text-2xl font-bold text-white font-mono">
                  JOIN THE REVOLUTION
                </h3>
                <Zap className="h-8 w-8 text-[#ffc045]" />
              </div>
              
              <p className="text-gray-300 mb-6">
                Are you ready to shape the future of robotics? Join our elite team of innovators 
                and help us build tomorrow's technology today.
              </p>
              
              <motion.button
                className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] hover:from-[#0a91ab]/80 hover:to-[#ffc045]/80 text-white px-8 py-3 font-mono uppercase tracking-wider transition-all duration-300 border-2 border-transparent hover:border-[#ffc045]/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Technical Elements */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-[#0a91ab] to-[#ffc045] opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </section>
  );
}