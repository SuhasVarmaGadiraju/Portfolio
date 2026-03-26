import React, { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certRef = useRef(null);
  useEffect(() => {
    const el = certRef.current;
    if (!el) return;
    
    let animationId;
    let isPaused = false;
    let isActive = true;

    const scroll = () => {
      if (!isActive) return;
      if (!isPaused && el) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    // Delay start to ensure element is fully rendered
    const startTimeout = setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 1500);

    const pause = () => { isPaused = true; };
    const resume = () => { isPaused = false; };

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);

    return () => {
      isActive = false;
      clearTimeout(startTimeout);
      cancelAnimationFrame(animationId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
    };
  }, []);

  const [isScrolling, setIsScrolling] = React.useState(false);
  const scrollTimerRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Gadiraju Phani Rama Suhas Varma" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A passionate AI/ML Engineer with a strong interest in building intelligent systems, predictive models, and data-driven solutions. I enjoy exploring the depths of machine learning and deep learning, uncovering patterns in data that others overlook. Driven by curiosity and a problem-solving mindset, I am constantly learning, experimenting, and pushing the boundaries of what AI can achieve."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="/assets/Suhas_Varma_CV.pdf"
                download="Suhas_Varma_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Suhas Varma"
              title="AI/ML Engineer"
              handle="SuhasVarmaGadiraju"
              status="Online"
              contactText="Contact Me"
              avatarUrl={`${import.meta.env.BASE_URL}assets/suhas.jpg`}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I'm Suhas Varma, an AI/ML Engineer passionate about building intelligent systems and solving complex problems through data. With hands-on experience in machine learning, deep learning, and Python-based development, I enjoy designing models that learn, adapt, and create real impact. I believe in continuous growth — always exploring new algorithms, datasets, and ideas that push the boundaries of artificial intelligence."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      6<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      1<span className="text-violet-500">+</span>
                    </h1>
                    <p>Year of Experience</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      7.59<span className="text-violet-500">/10</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>


                <ShinyText
                  text="Learning every day, building one project at a time."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-xl font-bold text-white mb-2">🎓 Education</h3>

                {/* B.Tech */}
                <div className="relative pl-6 border-l-2 border-violet-500/50">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-violet-500 border-2 border-zinc-900"></div>
                  <div className="bg-zinc-900/60 border border-violet-500/20 rounded-xl p-4 hover:border-violet-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="text-white font-bold text-sm">B.Tech — CSE (AI & ML)</h4>
                      <span className="text-violet-400 text-xs bg-violet-500/10 px-2 py-1 rounded-full">Present</span>
                    </div>
                    <p className="text-zinc-400 text-xs mt-1">Lovely Professional University</p>
                    <p className="text-violet-300 text-xs mt-1 font-semibold">CGPA: 7.59 / 10</p>
                  </div>
                </div>

                {/* 12th */}
                <div className="relative pl-6 border-l-2 border-violet-500/50">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-violet-500 border-2 border-zinc-900"></div>
                  <div className="bg-zinc-900/60 border border-violet-500/20 rounded-xl p-4 hover:border-violet-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="text-white font-bold text-sm">Intermediate (12th)</h4>
                      <span className="text-violet-400 text-xs bg-violet-500/10 px-2 py-1 rounded-full">2023</span>
                    </div>
                    <p className="text-zinc-400 text-xs mt-1">Tirumala College</p>
                    <p className="text-violet-300 text-xs mt-1 font-semibold">96%</p>
                  </div>
                </div>

                {/* 10th */}
                <div className="relative pl-6 border-l-2 border-violet-500/50">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-violet-500 border-2 border-zinc-900"></div>
                  <div className="bg-zinc-900/60 border border-violet-500/20 rounded-xl p-4 hover:border-violet-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="text-white font-bold text-sm">SSC (10th)</h4>
                      <span className="text-violet-400 text-xs bg-violet-500/10 px-2 py-1 rounded-full">2021</span>
                    </div>
                    <p className="text-zinc-400 text-xs mt-1">Tirumala School</p>
                    <p className="text-violet-300 text-xs mt-1 font-semibold">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">A selection of projects I've worked on — from academic coursework to personal builds — reflecting my skills and growth as a developer.</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}

        {/* Certificates Section */}
        <div className="certificates mt-32" id="certificates">
          <h1 className="text-4xl font-bold mb-4 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Certificates</h1>
          <p className="text-base/loose opacity-50 mb-14 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Professional credentials that validate my technical expertise and continuous learning journey.</p>

          <div className="relative overflow-hidden">
            <div className="cert-marquee">
              {/* Original 6 certificates */}
              <div className="flex gap-6 pb-4">

                {/* 1. Edunet AI */}
                <a href="https://drive.google.com/file/d/1jlijooMccIq-i6xJA8x_cWtRxritVpm_/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 min-w-[320px] max-w-[320px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">Jan 2026</span>
                    <span className="text-xs text-zinc-500">IBM SkillsBuild</span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">Edunet — Artificial Intelligence</h3>
                  <p className="text-zinc-400 text-sm">Completed the IBM SkillsBuild AI program covering core AI concepts, machine learning fundamentals, and practical applications.</p>
                  <span className="text-violet-400 text-xs mt-auto">View Certificate →</span>
                </a>

                {/* 2. Python Basic */}
                <a href="https://drive.google.com/file/d/1Z-6STVb6Ytu2_uC5RLxdrGx7sXXGAnkv/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 min-w-[320px] max-w-[320px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">Nov 2025</span>
                    <span className="text-xs text-zinc-500">HackerRank</span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">Python (Basic) — Certificate of Accomplishment</h3>
                  <p className="text-zinc-400 text-sm">Passed the HackerRank Python Basic skill certification test demonstrating proficiency in core Python programming concepts.</p>
                  <span className="text-violet-400 text-xs mt-auto">View Certificate →</span>
                </a>

                {/* 3. Deloitte */}
                <a href="https://drive.google.com/file/d/1pedrRBBoWoLf39nhMYLD8q9srU-yeJGg/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 min-w-[320px] max-w-[320px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">Nov 2025</span>
                    <span className="text-xs text-zinc-500">Deloitte / Forage</span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">Deloitte Technology Job Simulation</h3>
                  <p className="text-zinc-400 text-sm">Completed practical tasks in Coding and Development as part of Deloitte's Technology Job Simulation program via Forage.</p>
                  <span className="text-violet-400 text-xs mt-auto">View Certificate →</span>
                </a>

                {/* 4. Oracle */}
                <a href="https://drive.google.com/file/d/1SU0YZX6PdOPE4JziaTewHUn6zu2dAJEA/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 min-w-[320px] max-w-[320px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">Nov 2025</span>
                    <span className="text-xs text-zinc-500">Oracle University</span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</h3>
                  <p className="text-zinc-400 text-sm">Recognized by Oracle Corporation as a certified professional in AI Foundations on Oracle Cloud Infrastructure.</p>
                  <span className="text-violet-400 text-xs mt-auto">View Certificate →</span>
                </a>

                {/* 5. Live MOOC C */}
                <a href="https://drive.google.com/file/d/1Da5tbzgm_cb-a7DJZj8oqzHctNYpdl5W/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 min-w-[320px] max-w-[320px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">Mar 2024</span>
                    <span className="text-xs text-zinc-500">CSE Pathshala</span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">Mastering in C: Basic to Beyond</h3>
                  <p className="text-zinc-400 text-sm">Successfully completed a 25-hour live MOOC course on C programming covering fundamentals to advanced concepts.</p>
                  <span className="text-violet-400 text-xs mt-auto">View Certificate →</span>
                </a>

                {/* 6. Hackathon */}
                <a href="https://drive.google.com/file/d/15jdCPswsTdZdybt15sy90Q79Eb3PxPKW/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 min-w-[320px] max-w-[320px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">Feb 2024</span>
                    <span className="text-xs text-zinc-500">LPU</span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">HACK-IOT Hackathon — Certificate of Participation</h3>
                  <p className="text-zinc-400 text-sm">Participated in the HACK-IOT event organized by the School of Electronics and Electrical Engineering at LPU, Phagwara.</p>
                  <span className="text-violet-400 text-xs mt-auto">View Certificate →</span>
                </a>
              </div>

              {/* Duplicated 6 certificates for infinite scroll */}
              <div className="flex gap-6 pb-4 ml-6">

                {/* 1. Edunet AI */}
                <a href="https://drive.google.com/file/d/1jlijooMccIq-i6xJA8x_cWtRxritVpm_/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 min-w-[320px] max-w-[320px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">Jan 2026</span>
                    <span className="text-xs text-zinc-500">IBM SkillsBuild</span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">Edunet — Artificial Intelligence</h3>
                  <p className="text-zinc-400 text-sm">Completed the IBM SkillsBuild AI program covering core AI concepts, machine learning fundamentals, and practical applications.</p>
                  <span className="text-violet-400 text-xs mt-auto">View Certificate →</span>
                </a>

                {/* 2. Python Basic */}
                <a href="https://drive.google.com/file/d/1Z-6STVb6Ytu2_uC5RLxdrGx7sXXGAnkv/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 min-w-[320px] max-w-[320px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">Nov 2025</span>
                    <span className="text-xs text-zinc-500">HackerRank</span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">Python (Basic) — Certificate of Accomplishment</h3>
                  <p className="text-zinc-400 text-sm">Passed the HackerRank Python Basic skill certification test demonstrating proficiency in core Python programming concepts.</p>
                  <span className="text-violet-400 text-xs mt-auto">View Certificate →</span>
                </a>

                {/* 3. Deloitte */}
                <a href="https://drive.google.com/file/d/1pedrRBBoWoLf39nhMYLD8q9srU-yeJGg/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 min-w-[320px] max-w-[320px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">Nov 2025</span>
                    <span className="text-xs text-zinc-500">Deloitte / Forage</span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">Deloitte Technology Job Simulation</h3>
                  <p className="text-zinc-400 text-sm">Completed practical tasks in Coding and Development as part of Deloitte's Technology Job Simulation program via Forage.</p>
                  <span className="text-violet-400 text-xs mt-auto">View Certificate →</span>
                </a>

                {/* 4. Oracle */}
                <a href="https://drive.google.com/file/d/1SU0YZX6PdOPE4JziaTewHUn6zu2dAJEA/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 min-w-[320px] max-w-[320px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">Nov 2025</span>
                    <span className="text-xs text-zinc-500">Oracle University</span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</h3>
                  <p className="text-zinc-400 text-sm">Recognized by Oracle Corporation as a certified professional in AI Foundations on Oracle Cloud Infrastructure.</p>
                  <span className="text-violet-400 text-xs mt-auto">View Certificate →</span>
                </a>

                {/* 5. Live MOOC C */}
                <a href="https://drive.google.com/file/d/1Da5tbzgm_cb-a7DJZj8oqzHctNYpdl5W/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 min-w-[320px] max-w-[320px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">Mar 2024</span>
                    <span className="text-xs text-zinc-500">CSE Pathshala</span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">Mastering in C: Basic to Beyond</h3>
                  <p className="text-zinc-400 text-sm">Successfully completed a 25-hour live MOOC course on C programming covering fundamentals to advanced concepts.</p>
                  <span className="text-violet-400 text-xs mt-auto">View Certificate →</span>
                </a>

                {/* 6. Hackathon */}
                <a href="https://drive.google.com/file/d/15jdCPswsTdZdybt15sy90Q79Eb3PxPKW/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-3 p-6 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 min-w-[320px] max-w-[320px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">Feb 2024</span>
                    <span className="text-xs text-zinc-500">LPU</span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-violet-300 transition-colors">HACK-IOT Hackathon — Certificate of Participation</h3>
                  <p className="text-zinc-400 text-sm">Participated in the HACK-IOT event organized by the School of Electronics and Electrical Engineering at LPU, Phagwara.</p>
                  <span className="text-violet-400 text-xs mt-auto">View Certificate →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1 className="text-4xl mb-6 font-bold text-center">Contact</h1>
          <form
            action="https://formsubmit.co/suhasvarma1530@gmail.com"
            method="POST"
            className="bg-zinc-800 p-10 w-full max-w-2xl mx-auto rounded-md"
            autoComplete="off"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Full Name</label>
                <input type="text" name="Name" placeholder="Input Name..." className="border border-zinc-500 p-2 rounded-md bg-zinc-900" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input type="email" name="Email" placeholder="Input Email..." className="border border-zinc-500 p-2 rounded-md bg-zinc-900" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold">Message</label>
                <textarea name="message" id="message" cols="45" rows="7" placeholder="Message..." className="border border-zinc-500 p-2 rounded-md bg-zinc-900" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors">
                  <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />

      {/* Left Nav - Home & About */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        <div className="relative group">
          <a href="#" title="Home"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800/80 border border-zinc-700 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-500"
            style={{ opacity: isScrolling ? 0 : 1 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-zinc-700">
            Home
          </span>
        </div>
        <div className="relative group">
          <a href="#about" title="About"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800/80 border border-zinc-700 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-500"
            style={{ opacity: isScrolling ? 0 : 1 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-zinc-700">
            About
          </span>
        </div>
      </div>

      {/* Right Nav - Projects & Contact */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="relative group">
          <a href="#project" title="Projects"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800/80 border border-zinc-700 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-500"
            style={{ opacity: isScrolling ? 0 : 1 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
              <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z"/>
            </svg>
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-zinc-700">
            Projects
          </span>
        </div>
        <div className="relative group">
          <a href="#contact" title="Contact"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800/80 border border-zinc-700 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-500"
            style={{ opacity: isScrolling ? 0 : 1 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-zinc-700">
            Contact
          </span>
        </div>
      </div>
    </>
  )
}

export default App
