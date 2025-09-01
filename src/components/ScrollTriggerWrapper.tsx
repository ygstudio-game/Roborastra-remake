import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';

interface ScrollTriggerWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'rotateIn' | 'slideInUp' | 'parallax';
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollTriggerWrapper({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  once = true
}: ScrollTriggerWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });
  const controls = useAnimation();

  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    rotateIn: {
      initial: { opacity: 0, rotate: -180, scale: 0.8 },
      animate: { opacity: 1, rotate: 0, scale: 1 }
    },
    slideInUp: {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 }
    },
    parallax: {
      initial: { y: 0 },
      animate: { y: 0 }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    } else if (!once) {
      controls.start('initial');
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={controls}
      variants={{
        initial: animations[animation].initial,
        animate: animations[animation].animate
      }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}

// Parallax component for advanced scroll effects
export function ParallaxElement({ 
  children, 
  speed = 0.5, 
  className = '' 
}: { 
  children: React.ReactNode; 
  speed?: number; 
  className?: string;
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      (element as HTMLElement).style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}