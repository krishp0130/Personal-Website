import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import particles from './assets/particles.json'; // 👈 move this to the top

const personalInfo = {
  name: "Krish",
  school: "Mathematics/Statistics and AI at Carnegie Mellon",
  links: {
    github: 'https://github.com/krishp0130',
    linkedin: 'https://linkedin.com/in/kp-krish-patel',
    email: 'krishp@andrew.cmu.edu'
  },
};

const App = () => {
  const theme = {
    background: '#ffffff',
    text: '#000000',
    accent: '#000000',
    secondary: '#333333',
    lightGray: '#b8bac7',
    primary: '#000000'
  };
  
  const fonts = {
    main: 'Times New Roman, serif',
    heading: 'Times New Roman, serif',
    carnegie: 'Source Serif Pro, serif'
  };

  return (
    <div style={{
      backgroundColor: theme.background,
      color: theme.text,
      fontFamily: fonts.main,
      minHeight: '100vh'
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@900&display=swap" rel="stylesheet" />
      <HeroSection theme={theme} fonts={fonts} />
      <ExperienceSection theme={theme} fonts={fonts} />
      <ProjectsSection theme={theme} fonts={fonts} />
    </div>
  );
};

const HeroSection = ({ theme, fonts }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = 400;
    canvas.height = 600;

    let particlesArray = particles.map(p => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      targetX: p.x,
      targetY: p.y,
      radius: p.radius
    }));

    const animate = () => {
      const spacing = 4;

      ctx.fillStyle = theme.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach(p => {
        p.x += (p.targetX - p.x) * 0.05;
        p.y += (p.targetY - p.y) * 0.05;

        const x = Math.round(p.x / spacing) * spacing;
        const y = Math.round(p.y / spacing) * spacing;

        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = theme.primary;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [theme.background, theme.primary]);

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
      <div style={{ display: 'flex', gap: '80px', alignItems: 'center', maxWidth: '1200px', width: '100%' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '56px', marginBottom: '24px', fontFamily: fonts.heading, fontWeight: 'normal' }}>
            Hey, I'm {personalInfo.name}.
          </h1>
          <p style={{ fontSize: '28px', marginBottom: '48px', lineHeight: '1.4' }}>
            I'm studying {personalInfo.school.split('Carnegie Mellon')[0]}
            <span style={{ fontFamily: fonts.carnegie, fontWeight: '900' }}>Carnegie Mellon</span>.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}><Github size={32} /></a>
            <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: theme.primary }}><Linkedin size={32} /></a>
            <a href={`mailto:${personalInfo.links.email}`} style={{ color: theme.primary }}><Mail size={32} /></a>
          </div>
        </div>
        <div style={{ flex: '0 0 400px' }}>
          <canvas ref={canvasRef} style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />
        </div>
      </div>
    </section>
  );
};


// Dummy Experience Section
const ExperienceSection = ({ theme, fonts }) => (
  <section style={{ minHeight: '100vh', padding: '80px 40px', backgroundColor: theme.lightGray }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '48px', marginBottom: '60px', fontFamily: fonts.heading }}>Experience</h2>
      <p style={{ fontSize: '20px', color: theme.secondary }}>Experience section coming soon...</p>
    </div>
  </section>
);

// Dummy Projects Section
const ProjectsSection = ({ theme, fonts }) => (
  <section style={{ minHeight: '100vh', padding: '80px 40px' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '48px', marginBottom: '60px', fontFamily: fonts.heading }}>Projects</h2>
      <p style={{ fontSize: '20px', color: theme.secondary }}>Projects section coming soon...</p>
    </div>
  </section>
);

export default App;
