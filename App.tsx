import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  Menu, 
  X, 
  ChevronRight, 
  Award, 
  BookOpen, 
  FlaskConical, 
  Users, 
  ArrowRight,
  Sparkles,
  Search,
  Home as HomeIcon,
  ExternalLink,
  FileText,
  Quote,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Globe,
  Youtube,
  Mic,
  Calendar,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Map,
  Compass,
  Send,
  Edit2,
  Save,
  Plus,
  Trash2,
  Download,
  Info,
  Maximize2,
  Book,
  Shield,
  Ticket,
  AlertTriangle,
  Building2,
  Flag,
  Globe2
} from 'lucide-react';
import { SCIENCE_DOMAINS, GROUP_STATS, MISSION_STATEMENT, PUBLICATIONS, Publication, GROUP_MEMBERS, SHANGHAI_MEMBERS, GroupMember, PROF_BIO, RESEARCH_PROJECTS, ResearchProject, HOME_ASSETS, RESEARCH_HIGHLIGHT_CONTENT, MONKEY_BUSINESS, Responsibility } from './constants';
import MolecularCanvas from './components/MolecularCanvas';
import Assistant from './components/Assistant';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon className="w-4 h-4" /> },
    { name: 'Research', path: '/research', icon: <FlaskConical className="w-4 h-4" /> },
    { name: 'Prof. Leigh', path: '/david', icon: <Award className="w-4 h-4" /> },
    { name: 'People', path: '/group', icon: <Users className="w-4 h-4" /> },
    { name: 'Publications', path: '/literature', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Virtual Tour', path: '/vtour', icon: <Compass className="w-4 h-4" /> },
    { name: 'Group Matters', path: '/group-matters', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 glass border-b border-purple-100 shadow-md' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a 
            href="https://www.manchester.ac.uk/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-90 transition-opacity"
            title="Go to The University of Manchester homepage"
          >
            <img 
              src="images/UoM_logo.png" 
              alt="University of Manchester Logo" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </a>
          
          <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
          
          <Link to="/" className="group flex flex-col">
            <h1 className="text-xl font-extrabold tracking-tight text-[#660099] group-hover:text-purple-700 transition-colors uppercase leading-none">Leigh group</h1>
            <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">Nanoscience Research</p>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${location.pathname.startsWith(link.path) && (link.path !== '/' || location.pathname === '/') ? 'bg-purple-50 text-[#660099]' : 'text-slate-600 hover:text-[#660099] hover:bg-slate-100'}`}
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#660099] p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-b border-purple-100 p-6 md:hidden flex flex-col space-y-2"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-4 p-4 rounded-2xl font-bold transition-colors ${location.pathname === link.path ? 'bg-purple-50 text-[#660099]' : 'bg-slate-50 text-slate-600'}`}
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HomePage = () => {
  const content = {
    welcomeTitle: "Welcome to the Leigh group website",
    researchTitle: "Our Research",
    researchPara1: "Our group explores, invents and discovers fundamental ways to control molecular-level dynamics and topology. This includes strategies and methods to synthesize interlocked molecular architectures (e.g. benzylic amide and metal ‘passive template’ catenanes, rotaxanes and molecular shuttles [1995-] and catalytic ‘active template’ synthesis [2006-]), molecular machinery [1999-], molecular ratchet mechanisms [2003-], molecular knotting [2011-], molecular assemblers [2013-], molecular robotics [2016-], and molecular weaving [2020-].",
    researchPara2: "Perhaps the best way to appreciate the technological potential of controlled molecular-level motion is to recognise that nanomotors and molecular-level machines lie at the heart of every significant biological process. Over billions of years of evolution Nature has not repeatedly chosen this solution for achieving complex task performance without good reason. When we learn how to build artificial structures that can control and exploit molecular level motion, and interface their effects directly with other molecular-level substructures and the outside world, it will potentially impact on every aspect of functional molecule and materials design. An improved understanding of physics and biology will surely follow.",
    quotes: HOME_ASSETS.quotes,
    projects: RESEARCH_PROJECTS,
    heroGallery: HOME_ASSETS.hero,
    researchGallery: HOME_ASSETS.research,
    footerGallery: HOME_ASSETS.footerCards
  };

  return (
    <div className="pt-32 pb-10 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center gap-8 mb-10 opacity-80 hover:opacity-100 transition-opacity">
          <a href="https://www.ucl.ac.uk/sustainable/take-action/staff-action/leaf-laboratory-efficiency-assessment-framework" target="_blank" rel="noopener noreferrer">
            <img src="images/Leaflogo.jpg" alt="LEAF logo" className="h-16 w-auto rounded shadow-sm border border-slate-100" />
          </a>
          <a href="#">
            <img src="images/CAMERA_banner.jpg" alt="CAMERA banner" className="h-16 w-auto rounded shadow-sm border border-slate-100" />
          </a>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 serif-font">{content.welcomeTitle}</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
          <div className="lg:col-span-8 aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/ObvxPSQNMGc?rel=0&showinfo=0" title="Nanobot Intro" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
             {content.heroGallery.map((hero: any, idx: number) => (
                <a key={idx} href={hero.link} target="_blank" rel="noopener noreferrer" className="block transform transition-transform hover:scale-105">
                  <img src={hero.image} alt={hero.alt} className="w-full h-auto rounded-2xl shadow-lg border-2 border-white" />
                </a>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3 space-y-6">
            <div className="sticky top-28">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#660099] flex items-center gap-2"><Sparkles className="w-4 h-4 text-[#ffcc00]" /> Recent Highlights</h3>
              </div>
              <div className="space-y-4 max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
                {content.projects.map((project: ResearchProject, idx: number) => (
                  <div key={idx} className="relative group">
                    <Link to={project.link} className="block">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all group-hover:shadow-md group-hover:border-purple-300">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <span className="text-white text-[10px] font-black uppercase tracking-widest">{project.title}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <main className="lg:col-span-9 space-y-16">
            <div className="flex flex-col md:flex-row gap-8 items-start pt-4">
               <div className="space-y-4">
                  <img src="images/GroupPhoto2025.jpg" alt="Leigh Group 2025" className="w-64 rounded-2xl shadow-lg border border-slate-100" />
                  <div className="bg-[#ffcc00] p-4 rounded-2xl shadow-md border-2 border-white max-w-[256px]">
                    <p className="text-[#660099] font-black text-[10px] uppercase tracking-tight leading-tight">INTERESTED IN JOINING THE LEIGH GROUP? <a href="https://www.catenane.net/pages/apply.html" target="_blank" className="underline ml-1">SEE HERE.</a></p>
                  </div>
               </div>
               <div className="space-y-2 flex-1">
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 serif-font">Professor David A Leigh</h2>
                 <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">FRS FRSE FRSC MAE</p>
                 <div className="w-20 h-1 bg-[#ffcc00] rounded-full mt-4"></div>
                 <Link to="/david" className="block mt-4">
                    <img src="images/general/daveleigh2006.jpg" alt="Professor David Leigh" className="w-48 h-auto rounded-[2rem] shadow-xl border-4 border-white grayscale hover:grayscale-0 transition-all" />
                 </Link>
               </div>
            </div>

            <section className="space-y-10">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-black text-slate-900 serif-font">{content.researchTitle}</h3>
                <div className="h-px flex-1 bg-slate-100"></div>
              </div>
              <div className="grid grid-cols-1 gap-8 text-slate-700 leading-relaxed text-lg serif-font italic pr-4">
                <p>{content.researchPara1} For some highlights see <Link to="/research" className="text-[#660099] font-bold underline">HERE</Link>.</p>
                <p>{content.researchPara2}</p>
              </div>
              
              <div className="bg-purple-50 p-10 rounded-[3rem] border border-purple-100 relative overflow-hidden group">
                 <Quote className="absolute top-4 right-8 w-20 h-20 text-[#660099] opacity-10 group-hover:scale-110 transition-transform" />
                 <p className="text-2xl font-bold text-[#660099] italic serif-font mb-4">"{content.quotes[0].text}"</p>
                 <p className="text-right font-black uppercase text-xs tracking-widest text-[#660099]/60">— {content.quotes[0].author}</p>
              </div>

              <div className="space-y-12">
                 <div className="space-y-6">
                    <img src="images/general/research-map.png" alt="Group's Research Interests" className="w-full rounded-[3rem] shadow-xl hover:shadow-2xl transition-all" />
                    <p className="text-xs text-slate-400 font-bold uppercase text-center tracking-[0.2em]">Group's Research Interests Map</p>
                 </div>
                 
                 <div className="space-y-6">
                    <img src="images/article_pictures/knotcatalysis2016/CartaMarinaKnot.jpg" alt="Knot Catalysis Visual" className="w-full max-w-2xl mx-auto rounded-[3rem] shadow-xl hover:shadow-2xl transition-all" />
                 </div>
              </div>

              <div className="bg-purple-50 p-10 rounded-[3rem] border border-purple-100 relative overflow-hidden group">
                 <Quote className="absolute top-4 right-8 w-20 h-20 text-[#660099] opacity-10 group-hover:scale-110 transition-transform" />
                 <p className="text-xl font-bold text-[#660099] italic serif-font mb-4">"{content.quotes[1].text}"</p>
                 <p className="text-right font-black uppercase text-xs tracking-widest text-[#660099]/60">— {content.quotes[1].author}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
                 {content.footerGallery.map((card: any, idx: number) => {
                    const CardWrapper = card.link.startsWith('http') ? 'a' : Link;
                    const wrapperProps = card.link.startsWith('http') 
                      ? { href: card.link, target: "_blank", rel: "noopener noreferrer" } 
                      : { to: card.link };
                    
                    return (
                      <CardWrapper key={idx} {...wrapperProps as any} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                        <h4 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-3">{idx === 0 ? <Compass className="text-[#660099]" /> : <Map className="text-[#ffcc00]" />}{card.title}</h4>
                        <p className="text-xs text-slate-400 font-bold uppercase mb-6 tracking-widest">{card.subtitle}</p>
                        <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-2xl group-hover:scale-[1.02] transition-transform" />
                      </CardWrapper>
                    );
                 })}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

const SupramolecularWorldPage = () => {
  return (
    <div className="pt-40 pb-32 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-24 h-24 bg-purple-50 text-[#660099] rounded-[2rem] flex items-center justify-center mx-auto border border-purple-100 shadow-xl">
            <Globe2 className="w-12 h-12" />
          </motion.div>
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 serif-font tracking-tight mb-4 uppercase">Supramolecular World</h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto italic font-medium">"The (Incomplete!) World of Catenanes, Rotaxanes and Molecular Machines."</p>
            <p className="text-sm text-slate-400 mt-4 font-bold uppercase tracking-widest">(Click on a name to view their group webpage)</p>
          </div>
          <div className="w-24 h-1 bg-[#ffcc00] mx-auto rounded-full"></div>
        </div>

        <div className="bg-slate-50 p-4 md:p-10 rounded-[3rem] border border-slate-100 shadow-inner overflow-x-auto custom-scrollbar">
          <div className="min-w-[1018px] flex justify-center">
            <svg
              width="1018.77"
              height="661.44"
              viewBox="0 0 1018.77 661.44"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <defs>
                <style type="text/css">{`
                  .land { fill: #CCCCCC; fill-opacity: 1; stroke: white; stroke-opacity: 1; stroke-width: 0.5; transition: fill 0.3s; }
                  .land:hover { fill: #BBBBBB; }
                  .group-link { cursor: pointer; }
                  .group-link text { font-size: 10px; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; fill: #660099; transition: fill 0.2s, font-size 0.2s; }
                  .group-link:hover text { fill: #ffcc00; font-size: 11px; text-decoration: underline; }
                  .connector-line { fill: none; stroke: #000000; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 0.4; }
                `}</style>
              </defs>

              <g className="map-paths">
                <path d="m 625.12,398.97 0.5,-0.15 0.11,0.84 2.19,-0.48 2.32,0.08 1.69,0.09 1.92,-2.07 2.1,-1.98 1.77,-1.9 0.53,1.05 0.38,2.44 -1.43,0.01 -0.23,2 0.5,0.42 -1.27,0.6 -0.01,1.25 -0.82,1.26 -0.07,1.21 -0.57,0.64 -8.42,-1.52 -1.08,-3.08 z" className="land" style={{fill: '#8000ff'}} />
                <path d="m 652.13,362.15 2.86,1.3 2.11,-0.46 0.59,-1.55 2.21,-0.52 1.58,-1.05 0.56,-2.79 2.36,-0.68 0.44,-1.25 1.33,0.94 0.84,0.11 1.56,0.03 2.12,0.74 0.85,0.42 2.03,-1.12 0.95,0.67 0.9,-1.6 1.68,0.07 0.43,-0.52 0.3,-1.43 1.21,-1.23 1.51,0.8 -0.3,1.09 0.85,0.17 -0.27,2.95 1.11,1.15 0.98,-0.74 1.25,-0.34 1.74,-1.57 1.93,0.26 2.9,0 0.5,1.01 -1.64,0.39 -1.42,0.65 -3.22,0.4 -3.01,0.73 -1.64,1.51 0.66,1.46 0.33,1.7 -1.4,1.43 0.12,1.3 -0.77,1.22 -2.67,-0.11 1.1,2.22 -1.78,0.85 -1.19,2 0.15,1.98 -1.1,0.92 -1.03,-0.3 -2.15,0.43 -0.3,0.91 -2.09,0 -1.56,1.84 -0.1,2.75 -3.65,1.33 -1.95,-0.28 -0.57,0.7 -1.67,-0.4 -2.81,0.48 -4.69,-1.64 2.54,-2.93 -0.23,-2.1 -2.12,-0.55 -0.22,-2.09 -0.92,-2.64 1.2,-1.83 -1.22,-0.49 0.77,-2.45 z" className="land" style={{fill: '#8000ff'}} />
                <path d="m 538.23,339.91 -0.35,1.27 0.4,1.59 1.16,0.9 -0.06,0.97 -0.91,0.54 -0.17,1.19 -1.3,1.76 -0.48,-0.25 -0.05,-0.8 -1.56,-1.23 -0.24,-1.75 0.24,-2.53 0.38,-1.16 -0.47,-0.59 -0.19,-1.19 1.22,-1.87 0.17,0.72 0.76,-0.34 0.6,1.02 0.67,0.38 z" className="land" style={{fill: '#c87137'}} />
                <path d="m 602.7,342.75 3.9,-0.58 0.58,0.98 1.07,0.64 -0.57,0.92 1.5,1.26 -0.79,1.16 1.19,0.99 1.26,0.59 0.06,2.5 -1.02,0.1 -1.14,-2.08 0.01,-0.55 -1.24,0.01 -0.83,-0.98 -0.58,0.1 -1.11,-1.06 -2.08,-0.91 0.27,-1.79 z" className="land" style={{fill: '#8000ff'}} />
                <path d="m 526.28,485.03 0.69,2.09 0.8,1.68 0.64,0.91 1.07,1.47 1.85,-0.23 0.93,-0.4 1.55,0.4 0.42,-0.7 0.7,-1.64 1.74,-0.11 0.15,-0.49 1.43,-0.01 -0.24,1.01 3.4,-0.02 0.05,1.77 0.57,1.09 -0.41,1.7 0.21,1.74 0.94,1.05 -0.15,3.37 0.69,-0.26 1.22,0.07 1.74,-0.42 1.28,0.17 0.3,0.88 -0.32,1.38 0.49,1.34 -0.42,1.07 0.24,0.99 -5.84,-0.04 -0.13,9.16 1.89,2.38 1.83,1.82 -5.15,1.19 -6.79,-0.41 -1.94,-1.4 -11.37,0.13 -0.42,0.21 -1.67,-1.32 -1.82,-0.09 -1.68,0.5 -1.35,0.56 -0.26,-1.83 0.39,-2.55 0.97,-2.65 0.15,-1.24 0.91,-2.59 0.67,-1.17 1.61,-1.87 0.9,-1.27 0.29,-2.11 -0.15,-1.61 -0.84,-1.01 -0.75,-1.72 -0.69,-1.69 0.15,-0.59 0.86,-1.12 -0.85,-2.72 -0.57,-1.88 -1.4,-1.77 0.27,-0.54 1.16,-0.38 0.81,0.05 0.98,-0.34 8.27,0.01 z m -10.91,-0.54 -0.71,0.3 -0.75,-2.1 1.13,-1.21 0.85,-0.47 1.05,0.96 -1.02,0.59 -0.46,0.72 -0.09,1.21 z" className="land" style={{fill: '#c83737'}} />
                <path d="m 296.85,654.16 -2.66,0.25 -1.43,-1.73 -1.69,-0.13 -3,0 0,-10.57 1.08,2.15 1.4,3.53 3.65,2.87 3.93,1.21 -1.28,2.42 z m 1.5,-122.44 1.65,2.18 1.09,-2.43 3.2,0.12 0.45,0.64 5.15,4.94 2.29,0.46 3.43,2.26 2.89,1.2 0.4,1.36 -2.76,4.73 2.83,0.85 3.15,0.48 2.22,-0.5 2.54,-2.4 0.46,-2.74 1.39,-0.59 1.41,1.79 -0.06,2.49 -2.36,1.73 -1.88,1.28 -3.16,3.08 -3.74,4.37 -0.7,2.59 -0.75,3.37 0.03,3.3 -0.61,0.74 -0.22,2.17 -0.19,1.76 3.56,2.91 -0.38,2.37 1.75,1.51 -0.14,1.7 -2.69,4.52 -4.16,1.91 -5.62,0.75 -3.08,-0.36 0.59,2.15 -0.57,2.72 0.52,1.85 -1.68,1.3 -2.87,0.51 -2.7,-1.35 -1.08,0.97 0.39,3.71 1.89,1.14 1.54,-1.19 0.84,1.96 -2.58,1.18 -2.25,2.38 -0.41,3.91 -0.66,2.11 -2.65,0.01 -2.2,2.04 -0.8,3.01 2.76,2.98 2.68,0.83 -0.96,3.73 -3.31,2.38 -1.82,5.03 -2.56,1.72 -1.15,2.06 0.91,4.64 1.87,2.63 -1.18,-0.23 -2.6,-0.71 -6.78,-0.61 -1.16,-2.63 0.05,-3.33 -1.87,0.28 -0.99,-1.6 -0.25,-4.6 2.15,-1.88 0.89,-2.68 -0.33,-2.11 1.49,-3.52 1.02,-5.35 -0.3,-2.33 1.22,-0.75 -0.3,-1.48 -1.3,-0.78 0.92,-1.63 -1.27,-1.46 -0.65,-4.4 1.13,-0.77 -0.47,-4.54 0.66,-3.75 0.75,-3.22 1.68,-1.3 -0.85,-3.46 -0.01,-3.22 2.12,-2.26 -0.06,-2.87 1.6,-3.31 0.01,-3.09 -0.73,-0.61 -1.29,-5.69 1.73,-3.34 -0.27,-3.11 1,-2.9 1.84,-2.96 1.98,-1.95 -0.84,-1.23 0.59,-1 -0.09,-5.14 3.05,-1.51 0.96,-3.16 -0.34,-0.76 2.34,-2.72 3.62,0.72 z" className="land" style={{fill: '#008000'}} />
                <path d="m 528.11,315.1 -0.21,1.71 -1.58,0.01 0.54,0.89 -0.93,2.65 -0.53,0.69 -2.45,0.1 -1.42,0.92 -2.32,-0.31 -4.01,-1.05 -0.62,-1.43 -2.77,0.72 -0.33,0.77 -1.7,-0.58 -1.43,-0.11 -1.27,-0.74 0.43,-1.01 -0.11,-0.74 0.85,-0.22 1.42,1.14 0.4,-1.09 2.47,0.18 2.01,-0.74 1.34,0.12 0.87,0.85 0.27,-0.7 -0.4,-2.72 1.01,-0.54 0.98,-1.95 2.09,1.37 1.57,-1.74 0.99,-0.32 2.18,1.3 1.31,-0.22 1.3,0.8 -0.23,0.54 z" className="land" style={{fill: '#c87137'}} />
                <path d="m 888.18,593.41 2.71,1.28 1.53,-0.51 2.19,-0.71 1.68,0.25 0.2,4.43 -0.96,1.3 -0.29,3.06 -0.98,-1.05 -1.95,2.67 -0.58,-0.21 -1.72,-0.12 -1.73,-3.28 -0.38,-2.5 -1.62,-3.25 0.07,-1.7 1.83,0.34 z m -5.15,-86.06 1.01,2.25 1.8,-1.08 0.93,1.22 1.35,1.13 -0.29,1.28 0.6,2.48 0.43,1.45 0.71,0.35 0.76,2.5 -0.27,1.52 0.91,1.99 3.04,1.54 1.98,1.41 1.88,1.29 -0.37,0.72 1.6,1.87 1.09,3.25 1.12,-0.66 1.14,1.31 0.69,-0.46 0.48,3.21 1.99,1.87 1.3,1.17 2.19,2.49 0.79,2.49 0.07,1.77 -0.19,1.94 1.34,2.68 -0.16,2.81 -0.49,1.48 -0.76,2.87 0.06,1.86 -0.55,2.34 -1.24,3 -2.08,1.63 -1.02,2.59 -0.94,1.67 -0.83,2.93 -1.08,1.71 -0.71,2.58 -0.36,2.4 0.14,1.11 -1.61,1.22 -3.14,0.13 -2.59,1.45 -1.29,1.38 -1.69,1.54 -2.32,-1.58 -1.72,-0.63 0.44,-1.85 -1.53,0.67 -2.46,2.58 -2.42,-0.97 -1.59,-0.56 -1.6,-0.25 -2.71,-1.03 -1.81,-2.18 -0.52,-2.66 -0.65,-1.75 -1.38,-1.4 -2.7,-0.41 0.92,-1.66 -0.68,-2.52 -1.37,2.35 -2.5,0.63 1.47,-1.88 0.42,-1.95 1.08,-1.65 -0.22,-2.47 -2.28,2.85 -1.75,1.15 -1.07,2.69 -2.19,-1.4 0.09,-1.79 -1.75,-2.43 -1.48,-1.25 0.53,-0.77 -3.6,-2 -1.97,-0.09 -2.7,-1.6 -5.02,0.31 -3.63,1.18 -3.19,1.1 -2.68,-0.22 -2.97,1.7 -2.43,0.77 -0.54,1.75 -1.04,1.36 -2.38,0.08 -1.76,0.3 -2.48,-0.61 -2.02,0.37 -1.92,0.15 -1.67,1.8 -0.82,-0.15 -1.41,0.96 -1.35,1.08 -2.05,-0.13 -1.88,0 -2.97,-2.17 -1.51,-0.64 0.06,-1.93 1.39,-0.46 0.48,-0.76 -0.1,-1.2 0.34,-2.3 -0.31,-1.95 -1.48,-3.29 -0.46,-1.85 0.12,-1.83 -1.12,-2.08 -0.07,-0.93 -1.24,-1.26 -0.35,-2.47 -1.6,-2.48 -0.39,-1.33 1.23,1.35 -0.95,-2.88 1.39,0.9 0.83,1.2 -0.05,-1.59 -1.39,-2.43 -0.27,-0.97 -0.65,-0.92 0.3,-1.77 0.57,-0.75 0.38,-1.52 -0.3,-1.77 1.16,-2.17 0.21,2.29 1.18,-2.07 2.28,-1 1.37,-1.28 2.14,-1.1 1.27,-0.23 0.77,0.37 2.21,-1.11 1.7,-0.33 0.42,-0.65 0.74,-0.27 1.55,0.07 2.95,-0.87 1.52,-1.31 0.72,-1.58 1.64,-1.49 0.13,-1.17 0.07,-1.59 1.96,-2.47 1.18,2.51 1.19,-0.58 -1,-1.38 0.88,-1.41 1.24,0.63 0.34,-2.21 1.53,-1.42 0.68,-1.14 1.41,-0.49 0.04,-0.8 1.23,0.34 0.05,-0.72 1.23,-0.41 1.36,-0.39 2.07,1.32 1.56,1.71 1.75,0.02 1.78,0.27 -0.59,-1.58 1.34,-2.3 1.26,-0.75 -0.44,-0.71 1.22,-1.63 1.7,-1.01 1.43,0.34 2.36,-0.54 -0.05,-1.45 -2.05,-0.94 1.49,-0.41 1.86,0.7 1.49,1.17 2.36,0.73 0.8,-0.29 1.74,0.88 1.64,-0.82 1.05,0.25 0.66,-0.55 1.29,1.41 -0.75,1.53 -1.06,1.16 -0.96,0.1 0.33,1.15 -0.82,1.43 -1,1.41 0.2,0.81 2.23,1.6 2.16,0.93 1.44,1 2.03,1.72 0.79,0 1.47,0.75 0.43,0.9 2.68,0.99 1.85,-1 0.55,-1.57 0.57,-1.29 0.35,-1.59 0.85,-2.3 -0.39,-1.39 0.2,-0.84 -0.32,-1.64 0.37,-2.16 0.54,-0.58 -0.44,-0.95 0.68,-1.51 0.53,-1.56 0.07,-0.81 1.04,-1.06 0.79,1.39 0.19,1.78 0.7,0.34 0.12,1.2 1.02,1.45 0.21,1.62 -0.08,1.01 z" className="land" style={{fill: '#d4aa00'}} />
                <path d="m 606.68,347.71 0.83,0.97 1.24,-0.01 -0.01,0.56 1.14,2.08 -1.92,-0.48 -1.42,-1.66 -0.44,-1.37 0.58,-0.09 z m 6.65,-5.43 1.24,0.25 0.48,-0.95 1.67,-1.51 1.47,1.97 1.43,2.62 1.31,0.17 0.86,0.99 -2.31,0.29 -0.49,2.82 -0.48,1.26 -1.03,0.84 0.08,1.77 -0.7,0.18 -1.75,-1.87 0.97,-1.78 -0.83,-1.06 -1.05,0.27 -3.31,2.66 -0.06,-2.5 -1.26,-0.59 -1.19,-0.99 0.79,-1.16 -1.49,-1.26 0.56,-0.92 -1.07,-0.64 -0.58,-0.97 0.69,-0.61 2.09,1.07 1.51,0.22 0.38,-0.43 -1.38,-2.02 0.73,-0.52 0.79,0.13 1.93,2.27 z" className="land" style={{fill: '#8000ff'}} />
                <path d="m 533.79,328.36 1.02,-0.01 -0.7,1.72 1.35,1.5 -0.41,1.82 -0.66,0.17 -0.53,0.36 -0.91,0.89 -0.41,2.1 -2.48,-1.44 -1.06,-1.61 -1.07,-0.85 -1.29,-1.45 -0.6,-1.21 -1.38,-1.83 0.59,-1.64 1.01,0.91 0.6,-0.82 1.31,-0.09 2.41,0.66 1.94,-0.06 z" className="land" style={{fill: '#c87137'}} />
                <path d="m 740.34,405.66 -0.05,2.15 -0.98,-0.46 0.18,2.41 -0.8,-1.56 -0.16,-1.52 -0.54,-1.45 -1.17,-1.76 -2.58,-0.12 0.26,1.25 -0.88,1.67 -1.2,-0.61 -0.41,0.55 -0.79,-0.33 -1.08,-0.27 -0.44,-2.48 -0.97,-2.28 0.47,-1.84 -1.72,-0.82 0.62,-1.12 1.75,-1.15 -2.02,-1.63 0.99,-2.11 2.22,1.34 1.34,0.16 0.25,2.15 2.66,0.42 2.61,-0.05 1.61,0.53 -1.29,2.59 -1.26,0.18 -0.86,1.73 1.53,1.58 0.46,-1.94 0.78,-0.01 z" className="land" style={{fill: '#8000ff'}} />
                <path d="m 489.8,301.16 2.05,0.35 2.6,-0.93 1.77,1.95 1.55,1.04 -0.32,2.97 -0.73,0.16 -0.31,2.43 -2.45,-1.97 -1.44,0.34 -1.96,-2.06 -1.3,-1.77 -1.3,-0.07 -0.41,-1.56 z" className="land" style={{fill: '#c87137'}} />
                <path d="m 472.58,441.65 -1.92,-0.73 -1.32,0.11 -0.98,0.71 -1.26,-0.6 -0.49,-0.93 -1.26,-0.62 -0.19,-1.64 0.77,-1.21 -0.07,-0.96 2.23,-2.36 0.41,-1.96 0.77,-0.7 1.36,0.38 1.17,-0.58 0.38,-0.74 2.18,-1.28 0.53,-0.9 2.62,-1.2 1.55,-0.41 0.7,0.55 1.79,-0.01 -0.22,1.4 0.38,1.31 1.58,1.87 0.08,1.38 3.24,0.65 -0.07,1.95 -0.61,0.86 -1.37,0.26 -0.57,1.24 -0.96,0.32 -2.46,-0.06 -1.3,-0.22 -0.9,0.46 -1.24,-0.21 -4.87,0.13 -0.07,1.61 z" className="land" style={{fill: '#c83737'}} />
                <path d="m 544.03,330.81 0.81,1.6 1.08,-0.29 2.16,0.61 4.12,0.2 1.39,-0.99 3.3,-0.9 2.04,1.41 1.65,0.41 -1.46,1.59 -1.02,2.73 0.9,2.16 -2.41,-0.51 -2.86,1.18 -0.03,1.86 -2.55,0.35 -1.97,-1.3 -2.25,1.03 -2.07,-0.11 -0.2,-2.47 -1.41,-1.21 0.47,-0.54 -0.31,-0.45 0.47,-1.21 1.07,-1.19 -1.36,-1.66 -0.25,-1.42 z" className="land" style={{fill: '#c87137'}} />
                <path d="m 562.77,481.18 -0.18,-3.37 -0.71,-1.26 1.71,0.22 0.86,-1.59 1.49,0.18 0.16,1.1 0.6,0.63 0.03,0.91 -0.69,0.58 -1.1,1.46 -1.01,1.01 z" className="land" style={{fill: '#c83737'}} />
                <path d="m 488.05,451.17 -2.32,0.33 -0.69,-1.94 0.13,-6.46 -0.57,-0.58 -0.1,-1.39 -0.98,-0.99 -0.85,-0.83 0.36,-1.5 0.96,-0.32 0.57,-1.24 1.37,-0.26 0.61,-0.86 0.94,-0.83 1.01,-0.01 2.14,1.64 -0.11,0.95 0.63,1.68 -0.55,1.14 0.29,0.76 -1.36,1.75 -0.86,0.87 -0.53,1.77 0.07,1.79 z" className="land" style={{fill: '#c83737'}} />
                <path d="m 304.29,531.6 -3.2,-0.13 -1.09,2.43 -1.65,-2.18 -3.67,-0.73 -2.33,2.72 -2.03,0.41 -1.1,-4.15 -1.5,-3.34 0.88,-2.87 -1.47,-1.25 -0.37,-2.12 -1.38,-2 1.77,-3.14 -1.21,-2.44 0.65,-0.97 -0.51,-1.07 1.1,-1.44 0.06,-2.44 0.13,-2.02 0.61,-0.96 -2.43,-4.58 2.09,0.24 1.44,-0.07 0.63,-0.85 2.45,-1.15 1.47,-1.06 3.67,-0.48 -0.29,2.12 0.34,1.09 -0.23,1.9 3.05,2.55 3.14,0.47 1.1,1.07 1.9,0.57 1.16,0.83 1.76,-0.03 1.63,0.85 0.12,1.66 0.55,0.84 0.04,1.25 -0.82,0.04 1.08,3.37 5.37,0.12 -0.41,1.68 0.3,1.15 1.53,0.82 0.67,1.82 -0.5,2.32 -0.77,1.29 0.27,1.69 -0.88,0.61 -0.04,-0.91 -2.62,-1.51 -2.6,-0.05 -4.89,0.86 -1.34,2.62 -0.07,1.6 -1.11,3.59 z" className="land" style={{fill: '#008000'}} />
                <path d="m 318.93,557.04 3.74,-4.37 3.17,-3.08 1.88,-1.28 2.36,-1.73 0.06,-2.49 -1.41,-1.79 -1.39,0.59 0.55,-1.78 0.38,-1.82 0,-1.68 -1.01,-0.55 -1.05,0.49 -1.04,-0.13 -0.33,-1.18 -0.26,-2.77 -0.53,-0.9 -1.89,-0.82 -1.14,0.59 -2.96,-0.58 0.18,-4.06 -0.83,-1.66 0.88,-0.61 -0.27,-1.69 0.77,-1.29 0.5,-2.32 -0.67,-1.82 -1.53,-0.82 -0.3,-1.15 0.41,-1.68 -5.37,-0.12 -1.08,-3.37 0.82,-0.04 -0.04,-1.25 -0.55,-0.84 -0.12,-1.66 -1.63,-0.85 -1.76,0.03 -1.16,-0.83 -1.9,-0.57 -1.1,-1.07 -3.14,-0.47 -3.05,-2.55 0.23,-1.9 -0.34,-1.09 0.29,-2.12 -3.67,0.48 -1.47,1.06 -2.45,1.15 -0.63,0.85 -1.44,0.07 -2.09,-0.24 -1.58,0.49 -1.28,-0.33 0.19,-4.3 -2.3,1.66 -2.47,-0.07 -1.06,-1.51 -1.86,-0.16 0.59,-1.21 -1.56,-1.72 -1.17,-2.53 0.74,-0.51 0,-1.19 1.7,-0.81 -0.28,-1.51 0.71,-0.98 0.21,-1.3 3.2,-1.91 2.3,-0.53 0.37,-0.42 2.53,0.13 1.26,-7.65 0.07,-1.21 -0.44,-1.59 -1.24,-1.02 0.01,-2.02 1.58,-0.46 0.56,0.29 0.09,-1.07 -1.64,-0.29 -0.03,-1.74 5.46,0.06 0.93,-0.96 0.78,0.88 0.54,1.65 0.53,-0.35 1.55,1.48 2.18,-0.18 0.54,-0.86 2.08,-0.65 1.16,-0.45 0.32,-1.18 2.01,-0.8 -0.16,-0.58 -2.37,-0.24 -0.39,-1.76 0.11,-1.87 -1.25,-0.72 0.52,-0.26 2.08,0.36 2.23,0.7 0.81,-0.66 2.01,-0.44 3.14,-1.04 1.03,-1.07 -0.38,-0.79 1.46,-0.12 0.66,0.64 -0.37,1.23 0.96,0.42 0.65,1.3 -0.78,0.98 -0.45,2.38 0.72,1.41 0.2,1.29 1.73,1.3 1.38,0.14 0.31,-0.54 0.88,-0.12 1.27,-0.49 0.91,-0.74 1.55,0.23 0.68,-0.1 1.53,0.23 0.25,-0.57 -0.47,-0.55 0.28,-0.81 1.13,0.25 1.33,-0.29 1.6,0.59 1.23,0.58 0.87,-0.76 0.62,0.12 0.39,0.79 1.34,-0.2 1.07,-1.06 0.86,-2.06 1.66,-2.55 0.96,-0.13 0.69,1.54 1.57,4.88 1.5,0.46 0.08,1.92 -2.11,2.29 0.87,0.84 4.96,0.44 0.1,2.79 2.13,-1.83 3.53,1.01 4.65,1.7 1.37,1.63 -0.46,1.54 3.26,-0.86 5.46,1.48 4.19,-0.11 4.14,2.31 3.58,3.13 2.16,0.8 2.4,0.12 1.02,0.88 0.95,3.57 0.47,1.69 -1.12,4.66 -1.43,1.84 -3.95,3.94 -1.79,3.21 -2.07,2.48 -0.7,0.06 -0.79,2.1 0.2,5.4 -0.78,4.48 -0.3,1.93 -0.88,1.15 -0.5,3.94 -2.84,3.88 -0.48,3.09 -2.27,1.31 -0.66,1.81 -3.04,-0.01 -4.41,1.17 -1.98,1.35 -3.14,0.89 -3.3,2.44 -2.37,3.06 -0.41,2.32 0.47,1.73 -0.53,3.18 -0.63,1.55 -1.96,1.75 -3.11,5.68 -2.47,2.59 -1.91,1.54 -1.27,3.16 -1.86,1.91 -0.78,-1.9 1.24,-1.57 -1.62,-2.25 -2.2,-1.82 -2.89,-2.08 -1.04,0.09 -2.81,-2.5 z" className="land" style={{fill: '#008000'}} />
                {/* Simplified additional paths following provided source IDs logic */}
                <path d="m 263.11,400.45 -0.69,0.15 -0.71,-1.76 -1.05,-0.89 0.61,-1.95 0.84,0.12 0.98,2.55 0.02,1.78 z" className="land" style={{fill: '#0080ff'}} />
                <path d="m 737.61,388.03 1.14,1 -0.2,1.93 -2.29,0.09 -2.36,-0.21 -1.77,0.49 -2.55,-1.19 -0.05,-0.63 1.85,-2.34 1.51,-0.8 2.01,0.73 1.48,0.08 z" className="land" style={{fill: '#8000ff'}} />
                <path d="m 552.42,521.2 0.56,0.52 0.89,1.71 3.17,3.25 1.2,0.32 0.01,1.05 0.82,1.9 2.17,0.46 1.79,1.36 -3.97,2.22 -2.52,2.26 -0.93,2.03 -0.84,1.15 -1.53,0.25 -0.49,1.47 -0.29,0.96 -1.79,0.72 -2.28,-0.15 -1.34,-0.86 -1.18,-0.38 -1.37,0.72 -0.69,1.48 -1.33,0.93 -1.4,1.39 -2.01,0.32 -0.62,-1.09 0.26,-1.9 -1.67,-2.93 -0.75,-0.46 0,-8.86 2.76,-0.11 0.08,-10.57 2.09,-0.09 4.32,-1.03 1.08,1.21 1.78,-1.15 0.86,-0.01 1.58,-0.66 0.5,0.22 z" className="land" style={{fill: '#c83737'}} />
                <path d="m 546.35,289.32 2.71,0.04 3.04,-1.8 0.65,-2.72 2.3,-1.57 -0.26,-2.2 1.7,-0.84 3.02,-1.93 2.95,1.26 0.4,1.23 1.47,-0.59 2.74,1.18 0.27,2.31 -0.6,1.32 1.76,3.15 1.14,0.87 -0.17,0.86 1.89,0.83 0.81,1.25 -1.09,1.02 -2.26,-0.16 -0.54,0.44 0.66,1.54 0.69,2.93 -2.41,0.27 -0.86,1 -0.19,2.26 -1.11,-0.43 -2.53,0.22 -0.74,-1.05 -1.05,0.78 -1.05,-0.65 -2.21,-0.09 -3.13,-1.08 -2.83,-0.36 -2.17,0.1 -1.54,1.23 -1.34,0.17 -0.05,-2.01 -0.87,-2.12 1.68,-0.94 0.02,-1.85 -0.78,-1.78 z" className="land" style={{fill: '#c87137'}} />
                <path d="m 114.5,285.05 0,0 -1.54,-1.83 -2.47,-1.57 -0.79,-4.36 -3.61,-4.13 -1.51,-4.94 -2.69,-0.34 -4.46,-0.13 -3.29,-1.54 -5.8,-5.64 -2.68,-1.05 -4.9,-1.99 -3.88,0.48 -5.51,-2.59 -3.33,-2.43 -3.11,1.21 0.58,3.93 -1.55,0.36 -3.24,1.16 -2.47,1.86 -3.11,1.16 -0.4,-3.24 1.26,-5.53 2.98,-1.77 -0.77,-1.46 -3.57,3.22 -1.91,3.77 -4.04,3.95 2.05,2.65 -2.65,3.85 -3.01,2.21 -2.81,1.59 -0.69,2.29 -4.38,2.63 -0.89,2.36 -3.28,2.13 -1.92,-0.38 -2.62,1.38 -2.85,1.67 -2.33,1.63 -4.81,1.38 -0.44,-0.81 3.07,-2.27 2.74,-1.51 2.99,-2.71 3.48,-0.56 1.38,-2.06 3.89,-3.05 0.63,-1.03 2.07,-1.83 0.48,-4 1.43,-3.17 -3.23,1.64 -0.9,-0.93 -1.52,1.95 -1.83,-2.73 -0.76,1.94 -1.05,-2.7 -2.8,2.17 -1.72,0 -0.24,-3.23 0.51,-2.02 -1.81,-1.98 -3.65,1.07 -2.37,-2.63 -1.92,-1.36 -0.01,-3.25 -2.16,-2.48 1.08,-3.41 2.29,-3.37 1,-3.15 2.27,-0.45 1.92,0.99 2.26,-3.01 2.04,0.54 2.14,-1.96 -0.52,-2.92 -1.57,-1.16 2.08,-2.52 -1.72,0.07 -2.98,1.43 -0.85,1.43 -2.21,-1.43 -3.97,0.73 -4.11,-1.56 -1.18,-2.65 -3.55,-3.91 3.94,-2.87 6.25,-3.41 h 2.31 l -0.38,3.48 5.92,-0.27 -2.28,-4.34 -3.45,-2.72 -1.99,-3.64 -2.69,-3.17 -3.85,-2.38 1.57,-4.03 4.97,-0.25 3.54,-3.58 0.67,-3.92 2.86,-3.91 2.73,-0.95 5.31,-3.76 2.58,0.57 4.31,-4.61 4.24,1.83 2.03,3.87 1.25,-1.65 4.74,0.51 -0.17,1.95 4.29,1.43 2.86,-0.84 5.91,2.64 5.39,0.78 2.16,1.07 3.73,-1.34 4.25,2.46 3.05,1.13 z" className="land" style={{fill: '#0080ff'}} />
                <path d="m 1013.52,221 -2.78,2.97 -4.6,0.7 -0.07,6.46 -1.12,1.35 -2.63,-0.19 -2.14,-2.26 -3.73,-1.92 -0.63,-2.89 -2.85,-1.1 -3.19,0.87 -1.52,-2.37 0.61,-2.55 -3.36,1.64 1.26,3.19 -1.59,2.83 -0.02,0.04 -3.6,2.89 -3.63,-0.48 2.53,3.44 1.67,5.2 1.29,1.67 0.33,2.53 -0.72,1.6 -5.23,-1.32 -7.84,4.51 -2.49,0.69 -4.29,4.1 -4.07,3.5 -1.03,2.55 -4.01,-3.9 -7.31,4.42 -1.28,-2.08 -2.7,2.39 -3.75,-0.76 -0.9,3.63 -3.36,5.22 0.1,2.14 3.19,1.17 -0.38,7.46 -2.6,0.19 -1.2,4.15 1.17,2.1 -4.9,2.47 -0.97,5.4 -4.18,1.14 -0.84,4.66 -4.04,4.18 -1.04,-3.08 -1.2,-6.69 -1.56,-10.65 1.35,-6.95 2.37,-3.07 0.15,-2.44 4.36,-1.18 5.01,-6.78 4.83,-5.73 5.04,-4.57 2.25,-8.37 -3.41,0.51 -1.68,4.92 -7.11,6.36 -2.3,-7.14 -7.24,2 -7.02,9.56 2.32,3.38 -6.26,1.42 -4.33,0.56 0.2,-3.95 -4.36,-0.84 -3.47,2.7 -8.57,-0.94 -9.22,1.62 -9.08,10.33 -10.75,11.78 4.42,0.61 1.38,3 2.72,1.05 1.79,-2.38 3.08,0.31 4.05,5.19 0.09,3.92 -2.19,4.51 -0.24,5.27 -1.26,6.85 -4.23,6.01 -0.94,2.82 -3.81,4.66 -3.78,4.53 -1.81,2.28 -3.74,2.25 -1.77,0.05 -1.76,-1.86 -3.76,2.79 -0.44,1.26 -0.39,-0.66 -0.02,-1.93 1.43,-0.1 0.4,-4.55 -0.74,-3.36 2.41,-1.4 3.4,0.7 1.89,-3.89 0.96,-4.46 1.09,-1.51 1.47,-3.76 -4.63,1.24 -2.43,1.65 -4.26,0 -1.13,-3.95 -3.32,-3.03 -4.88,-1.38 -1.04,-4.28 -0.98,-2.73 -1.05,-1.94 -1.73,-4.61 -2.46,-1.71 -4.2,-1.39 -3.72,0.13 -3.48,0.84 -2.32,2.31 1.54,1.1 0.04,2.52 -1.56,1.45 -2.53,4.72 0.03,1.93 -3.95,2.74 -3.37,-1.63 -3.35,0.36 -1.47,-1.46 -1.68,-0.47 -4.11,3.06 -3.69,0.71 -2.58,1.06 -3.53,-0.7 -2.6,0.04 -1.7,-2.2 -2.75,-2.09 -2.81,-0.58 -3.55,0.57 -2.65,0.81 -3.98,-1.84 -0.53,-3.32 -3.3,-1.15 -2.54,-0.53 -3.14,-1.87 -2.9,4.66 1.14,2.6 -2.73,3.03 -4.05,-1.09 -2.8,-0.16 -1.87,-2.04 -2.92,-0.06 -2.44,-1.35 -4.26,2.07 -5.35,3.74 -2.96,0.74 -1.1,0.35 -1.49,-2.63 -3.61,0.58 -1.19,-1.84 -1.96,-0.85 -1.35,-2.55 -1.55,-0.8 -4.03,1.14 -3.86,-2.57 -1.49,2.33 -6.27,-11.58 -3.58,-3.66 1.03,-1.5 -7.03,4.49 -2.69,0.27 0.23,-2.58 -3.6,-1.63 -2.93,1.17 -0.88,-5.01 -5.04,-1.06 -2.52,2.03 -7.02,1.79 -1.37,1.19 -10.49,1.66 -1.29,1.62 2.02,3.21 -2.69,1.2 0.53,1.25 -2.69,2.22 4.54,3.1 -0.7,2.11 -3.94,-0.19 -0.81,1.31 -3.59,-2.29 -4.45,0.09 -2.98,1.87 -3.32,-1.79 -6.18,-3.1 -4.38,0.12 -5.79,4.85 -0.35,3.19 -2.88,-2.53 -2.24,4.77 0.82,0.87 -1.62,3.21 2.38,2.84 2.08,-0.12 1.79,2.76 -0.28,2.1 1.42,0.66 -1.28,2.39 -2.72,0.66 -2.79,4.09 2.55,3.7 -0.28,2.59 3.06,4.46 -1.67,1.51 -0.48,0.95 -1.24,-0.25 -1.93,-2.27 -0.79,-0.13 -1.76,-0.87 -0.86,-1.55 -2.62,-0.79 -1.7,0.6 -0.49,-0.71 -3.82,-1.83 -4.13,-0.62 -2.37,-0.66 -0.34,0.45 -3.57,-3.27 -3.2,-1.48 -2.42,-2.32 2.04,-0.64 2.33,-3.35 -1.57,-1.6 4.13,-1.67 -0.07,-0.9 -2.52,0.66 0.09,-1.83 1.45,-1.16 2.71,-0.31 0.44,-1.4 -0.62,-2.33 1.14,-2.23 -0.03,-1.26 -4.13,-1.41 -1.64,0.05 -1.73,-2.04 -2.15,0.69 -3.56,-1.54 0.06,-0.87 -1,-1.93 -2.24,-0.22 -0.23,-1.39 0.7,-0.91 -1.79,-2.58 -2.91,0.44 -0.85,-0.23 -0.71,1.04 -1.05,-0.18 -0.69,-2.94 -0.66,-1.54 0.54,-0.44 2.26,0.16 1.09,-1.02 -0.81,-1.25 -1.89,-0.83 0.17,-0.86 -1.14,-0.87 -1.76,-3.15 0.6,-1.31 -0.27,-2.31 -2.74,-1.18 -1.47,0.59 -0.4,-1.24 -2.95,-1.26 -0.9,-2.99 -0.24,-2.49 -1.35,-1.19 1.2,-1.66 -0.83,-4.96 2,-3.13 -0.42,-0.96 3.19,-3.07 -2.94,-2.68 6,-7.41 2.6,-3.45 1.05,-3.1 -4.15,-4.26 1.15,-4.15 -2.52,-4.85 1.89,-5.76 -3.26,-7.96 2.59,-5.48 -4.29,-4.99 0.41,-5.4 2.26,-0.72 4.77,-3.19 2.89,-2.81 4.61,4.86 7.68,1.88 10.59,8.65 2.15,3.51 0.19,4.8 -3.11,3.69 -4.58,1.85 -12.52,-5.31 -2.06,0.9 4.57,5.1 0.18,3.15 0.18,6.75 3.61,1.97 2.19,1.66 0.36,-3.11 -1.69,-2.8 1.78,-2.51 6.78,4.1 2.36,-1.59 -1.89,-4.88 6.53,-6.74 2.59,0.4 2.62,2.43 1.63,-4.81 -2.34,-4.28 1.37,-4.41 -2.06,-4.69 7.84,2.44 1.6,4.18 -3.55,0.91 0.02,4.04 2.21,2.44 4.33,-1.54 0.69,-4.61 5.86,-3.52 9.79,-6.54 2.11,0.38 -2.76,4.64 3.48,0.78 2.01,-2.58 5.25,-0.21 4.16,-3.19 3.2,4.62 3.19,-5.09 -2.94,-4.58 1.46,-2.66 8.28,2.44 3.88,2.49 10.16,8.8 1.88,-3.97 -2.85,-4.11 -0.08,-1.68 -3.38,-0.78 0.92,-3.83 -1.5,-6.49 -0.08,-2.74 5.17,-7.99 1.84,-8.42 2.08,-1.88 7.42,2.51 0.58,5.18 -2.66,7.28 1.74,2.78 0.9,5.94 -0.64,11.07 3.09,4.73 -1.2,5.01 -5.49,10.2 3.21,1.02 1.12,-2.51 3.08,-1.82 0.74,-3.55 2.43,-3.49 -1.63,-4.26 1.31,-5.08 -3.07,-0.64 -0.67,-4.42 2.24,-8.28 -3.64,-7.03 5.02,-6.04 -0.65,-6.62 1.4,-0.22 1.47,5.19 -1.11,8.67 3,1.59 -1.28,-6.37 4.69,-3.58 5.82,-0.49 5.18,5.18 -2.49,-7.62 -0.28,-10.28 4.88,-2.02 6.74,0.44 6.08,-1.32 -2.28,-5.38 3.25,-7.02 3.22,-0.3 5.45,-5.51 7.4,-1.51 0.94,-3.15 7.36,-1.08 2.29,2.61 6.29,-6.24 5.15,0.2 0.77,-5.24 2.68,-5.33 6.62,-5.31 4.81,4.21 -3.82,3.13 6.35,1.92 0.76,6.03 2.56,-2.94 8.2,0.16 6.32,5.84 2.25,4.35 -0.7,5.85 -3.1,3.24 -7.37,5.92 -2.11,3.08 3.48,1.43 4.15,2.55 2.52,-1.91 1.43,6.39 1.23,-2.56 4.48,-1.57 9,1.65 0.68,4.58 11.72,1.43 0.16,-7.47 5.95,1.74 4.48,-0.05 4.53,5.14 1.29,6.04 -1.66,3.84 3.52,6.98 4.41,3.49 2.71,-9.18 4.5,4 4.78,-2.38 5.43,2.72 2.07,-2.47 4.59,1.24 -2.02,-8.4 3.7,-4.07 25.32,6.06 2.39,5.35 7.34,6.65 11.32,-1.62 5.58,1.41 2.33,3.5 -0.34,6.02 3.45,2.29 3.75,-1.64 4.97,-0.21 5.29,1.57 5.31,-0.89 4.88,6.99 3.47,-2.48 -2.27,-5.07 1.25,-3.62 8.95,2.29 5.83,-0.49 8.06,3.84 3.92,3.44 6.87,5.86 7.35,7.34 -0.24,4.44 1.89,1.74 -0.65,-5.15 7.61,1.07 5.55,6.53 z" className="land" style={{fill: '#c87137'}} />
              </g>

              {/* Leader/Connector Lines */}
              <g className="connectors">
                <path d="M 107.20,143.54 C 160.02,250.74 160.02,250.74 160.02,250.74 l 0,0 0.78,1.57" className="connector-line" />
                <path d="m 140.31,380.81 c 0,0 0,-0.78 45.72,-37.04 -16.55,75.67 -17.34,75.67 -17.34,75.67" className="connector-line" />
                <path d="M 586.08,162.06 506.07,277.94" className="connector-line" />
                <path d="m 694.47,413.13 c -30.74,85.13 -30.74,85.13 -30.74,85.13 l 0,0" className="connector-line" />
                <path d="M 556.91,139.20 495.82,297.25" className="connector-line" />
                <path d="M 545,245 585,190" className="connector-line" />
                <path d="m 915.18,169.16 -46.11,190.76 19.31,-16.94" className="connector-line" />
                <path d="m 913.21,428.11 14.18,5.91" className="connector-line" />
                <path d="m 743.34,463.97 27.58,0" className="connector-line" />
                <path d="M 777.63,501.02 838.33,359.53" className="connector-line" />
                <path d="M 828.08,397.76 749.65,364.65" className="connector-line" />
                <path d="M 793.39,570.39 857.25,543.98" className="connector-line" />
                <path d="m 934.89,593.25 21.28,14.18" className="connector-line" />
                <path d="m 467.95,255.91 c -8.83,35.91 -8.83,35.91 -8.83,35.91" className="connector-line" />
                <path d="m 425.41,284.64 c 62.98,34.80 63.53,34.80 63.53,34.80" className="connector-line" />
                <path d="m 442.54,322.76 28.17,23.20" className="connector-line" />
                <path d="m 413.25,394.58 94.47,-89.50" className="connector-line" />
                <path d="M 443.09,476.35 536.46,297.35" className="connector-line" />
                <path d="M 444.75,493.48 503.86,320.55" className="connector-line" />
                <path d="M 471.27,508.95 577.90,379.67" className="connector-line" />
                <path d="M 474.58,574.69 512.15,328.84" className="connector-line" />
                <path d="M 449.72,656.46 578.45,349.28" className="connector-line" />
                <path d="m 503.84,226.82 -26.92,69.23" className="connector-line" />
                <path d="m 630.97,399.46 20.06,53.50" className="connector-line" />
              </g>

              {/* Researcher Links */}
              <g className="researcher-links">
                {/* UK Group */}
                <a href="http://www.ch.cam.ac.uk/person/jrn34" target="_blank" className="group-link" title="University of Cambridge"><text x="445" y="198.0">Jonathan Nitschke</text></a>
                <a href="https://www.durham.ac.uk/staff/matthew-o-kitching/" target="_blank" className="group-link" title="University of Durham"><text x="445" y="210.0">Matthew Kitching</text></a>
                <a href="https://www.st-andrews.ac.uk/chemistry/people/dp12/" target="_blank" className="group-link" title="University of St Andrews"><text x="445" y="222.0">Douglas Philp</text></a>
                <a href="https://pure.qub.ac.uk/en/persons/amilra-de-silva" target="_blank" className="group-link" title="Queen's University Belfast"><text x="445" y="186.0">Amilra P. de Silva</text></a>
                <a href="https://researchportal.hw.ac.uk/en/persons/ai-lan-lee/publications/" target="_blank" className="group-link" title="Heriot-Watt University"><text x="445" y="234.0">Ai-Lan Lee</text></a>
                <a href="https://www.gla.ac.uk/schools/chemistry/staff/graemecooke/" target="_blank" className="group-link" title="University of Glasgow"><text x="445" y="114.0">Graeme Cooke</text></a>
                <a href="https://www.ncl.ac.uk/nes/people/profile/andrewbenniston.html" target="_blank" className="group-link" title="University of Newcastle"><text x="445" y="162.0">Andrew Benniston</text></a>
                <a href="https://www.mcgonigalgroup.com/" target="_blank" className="group-link" title="Durham University"><text x="445" y="150.0">Paul McGonigal</text></a>
                <a href="http://www-hunter.ch.cam.ac.uk/index.php" target="_blank" className="group-link" title="University of Cambridge"><text x="445" y="102.0">Chris Hunter</text></a>
                <a href="http://beer.chem.ox.ac.uk/" target="_blank" className="group-link" title="University of Oxford"><text x="445" y="90.0">Paul Beer</text></a>
                <a href="http://hla.chem.ox.ac.uk/" target="_blank" className="group-link" title="University of Oxford"><text x="445" y="174.0">Harry Anderson</text></a>
                <a href="https://eps.leeds.ac.uk/chemistry/staff/4189/professor-michaele-hardie" target="_blank" className="group-link" title="University of Leeds"><text x="445" y="138.0">Michaele Hardie</text></a>
                <a href="https://golduplab.org/" target="_blank" className="group-link" title="University of Birmingham"><text x="445" y="126.0">Stephen Goldup</text></a>
                <a href="https://www.liverpool.ac.uk/cooper-group/" target="_blank" className="group-link" title="University of Liverpool"><text x="445" y="78.0">Andrew Cooper</text></a>
                <a href="https://neilchampnessgroup.com/" target="_blank" className="group-link" title="University of Birmingham"><text x="452.5" y="66.0">Neil Champness</text></a>
                <a href="https://www.york.ac.uk/chemistry/people/dr-avestro/" target="_blank" className="group-link" title="University of York"><text x="530.5" y="66.0">Alyssa Avestro</text></a>
                <a href="https://claydenchemistry.net/" target="_blank" className="group-link" title="University of Bristol"><text x="635" y="66.0">Jonathan Clayden</text></a>
                <a href="https://www.fieldengroup.net/" target="_blank" className="group-link" title="University of Birmingham"><text x="635" y="78.0">Stephen Fielden</text></a>
                <a href="https://www.physics.ox.ac.uk/research/group/self-assembled-structures-and-devices" target="_blank" className="group-link" title="University of Oxford"><text x="452.5" y="54.0">Andrew Turberfield</text></a>
                <a href="http://chemweb.bham.ac.uk/~tuckerj/index.html" target="_blank" className="group-link" title="University of Birmingham"><text x="550.5" y="54.0">James Tucker</text></a>
                <a href="http://www.lusby.chem.ed.ac.uk/" target="_blank" className="group-link" title="University of Edinburgh"><text x="620.5" y="54.0">Paul Lusby</text></a>
                <a href="https://www.mcternanresearchgroup.com/" target="_blank" className="group-link" title="King's College London"><text x="675.5" y="54.0">Charlie McTernan</text></a>

                {/* Americas Group */}
                <a href="http://www.chem.ucla.edu/dept/Faculty/mgghome/" target="_blank" className="group-link" title="University of California"><text x="27.0" y="323.0">Miguel García-Garibay</text></a>
                <a href="http://homepages.wmich.edu/~gfd7985/index.html" target="_blank" className="group-link" title="Western Michigan University"><text x="71.0" y="337.0">Gellert Mezei</text></a>
                <a href="http://www.scripps.edu/rebek/" target="_blank" className="group-link" title="The Scripps Research Institute"><text x="71.0" y="350.2">Julius Rebek</text></a>
                <a href="https://chem.wsu.edu/faculty/alex-li/" target="_blank" className="group-link" title="Washington State University"><text x="101" y="363">Alex Li</text></a>
                <a href="https://chem.utah.edu/directory/stang.php" target="_blank" className="group-link" title="The University of Utah"><text x="79.7" y="388.0">Peter Stang</text></a>
                <a href="http://www.scripps.edu/dawson/" target="_blank" className="group-link" title="The Scripps Research Institute"><text x="71" y="400.0">Philip Dawson</text></a>
                <a href="https://yiliu.lbl.gov/" target="_blank" className="group-link" title="Lawrence Berkeley National Laboratory"><text x="109" y="414">Yi Liu</text></a>
                <a href="http://www3.nd.edu/~smithgrp/doku.php?id=bradley_d._smith;" target="_blank" className="group-link" title="University of Notre Dame"><text x="72" y="426">Bradley Smith</text></a>
                <a href="http://www.indiana.edu/~floodweb/" target="_blank" className="group-link" title="Indiana University"><text x="83" y="438">Amar Flood</text></a>
                <a href="https://emanuelepenocchio.github.io/" target="_blank" className="group-link" title="Northwestern University"><text x="55" y="450">Emanuele Penocchio</text></a>
                <a href="https://sites.google.com/site/umdisaacslab/" target="_blank" className="group-link" title="University of Maryland"><text x="84" y="462.5">Lyle Isaacs</text></a>
                <a href="https://biodesign.asu.edu/stuart-lindsay/" target="_blank" className="group-link" title="Arizona State University"><text x="71" y="474.5">Stuart Lindsay</text></a>
                <a href="http://www-personal.umich.edu/~weilu/overview/overview.html" target="_blank" className="group-link" title="University of Michigan"><text x="102" y="486.2">Wei Lu</text></a>
                <a href="https://kws248.wixsite.com/sohlberg" target="_blank" className="group-link" title="Drexel University"><text x="75" y="498.7">Karl Sohlberg</text></a>
                <a href="https://www.hartleygroup.org/research/" target="_blank" className="group-link" title="Miami University"><text x="75" y="510.7">Scott Hartley</text></a>
                <a href="https://www.ornl.gov/staff-profile/rigoberto-c-advincula" target="_blank" className="group-link" title="University of Tennessee"><text x="42" y="523.5">Rigoberto Advincula</text></a>
                <a href="https://www.hartford.edu/directory/arts-science/mahan-eric.aspx" target="_blank" className="group-link" title="University of Hartford"><text x="71" y="537.0">Eric J. Mahan</text></a>
                
                <a href="https://masson-group-ohiouniversity.weebly.com/" target="_blank" className="group-link" title="Ohio University"><text x="150" y="430.0">Eric Masson</text></a>
                <a href="http://www.depts.ttu.edu/chemistry/Faculty/mayer/" target="_blank" className="group-link" title="Texas Tech University"><text x="152.5" y="454.0">Michael Mayer</text></a>
                <a href="https://nanobiotechnology.bme.columbia.edu/" target="_blank" className="group-link" title="Columbia University"><text x="152.5" y="466.0">Henry Hess</text></a>
                <a href="https://www.fandm.edu/directory/edward-fenlon.html" target="_blank" className="group-link" title="Franklin & Marshall College"><text x="152.5" y="478.0">Edward Fenlon</text></a>
                <a href="http://gagnegroup.web.unc.edu/" target="_blank" className="group-link" title="The University of North Carolina"><text x="152.5" y="488.0">Michel Gagné</text></a>
                <a href="http://bnorthrop.faculty.wesleyan.edu/" target="_blank" className="group-link" title="Wesleyan University"><text x="152.5" y="499.0">Brian Northrop</text></a>
                <a href="http://physics.umaine.edu/people/faculty/r-dean-astumian/" target="_blank" className="group-link" title="The University of Maine"><text x="152.5" y="510.0">Dean Astumian</text></a>
                <a href="http://swagergroup.mit.edu/" target="_blank" className="group-link" title="Massachusetts Institute of Technology"><text x="152.5" y="521.0">Tim Swager</text></a>
                <a href="https://www.aprahamiangroup.com/" target="_blank" className="group-link" title="Dartmouth College"><text x="152.5" y="532.0">Ivan Aprahamian</text></a>
                <a href="https://researchdirectory.uc.edu/p/smithrdb" target="_blank" className="group-link" title="University of Cincinnati"><text x="152.5" y="576.0">David Smithrud</text></a>
                <a href="http://www.jmtour.com/" target="_blank" className="group-link" title="Rice University"><text x="152.5" y="598.0">James Tour</text></a>
                <a href="https://jastilab.uoregon.edu/" target="_blank" className="group-link" title="University of Oregon"><text x="152.5" y="609.0">Ramesh Jasti</text></a>
                <a href="https://pme.uchicago.edu/rowan-group" target="_blank" className="group-link" title="University of Chicago"><text x="152.5" y="620.0">Stuart Rowan</text></a>
                <a href="http://yaghi.berkeley.edu/" target="_blank" className="group-link" title="UC Berkeley"><text x="152.5" y="642.0">Omar Yaghi</text></a>

                {/* Canada Group */}
                <a href="https://www.chemistry.utoronto.ca/people/directories/all-faculty/jik-chin" target="_blank" className="group-link" title="University of Toronto"><text x="95.5" y="82">Jik Chin</text></a>
                <a href="https://www.uwindsor.ca/people/loeb/" target="_blank" className="group-link" title="University of Windsor"><text x="80.5" y="91">Steve Loeb</text></a>
                <a href="https://www.chem.queensu.ca/macartney-donal-0" target="_blank" className="group-link" title="Queen's University"><text x="54.5" y="103">Donal MacArtney</text></a>
                <a href="http://publish.uwo.ca/~jwisner/" target="_blank" className="group-link" title="The University of Western Ontario"><text x="68.5" y="115.0">James Wisner</text></a>
                <a href="https://www.uwo.ca/chem/people/faculty/puddephatt.htm" target="_blank" className="group-link" title="The University of Western Ontario"><text x="42.5" y="128.0">Richard Puddephatt</text></a>
                <a href="http://www.sfu.ca/~nbranda/NRB/" target="_blank" className="group-link" title="Simon Fraser University"><text x="76" y="141.0">Neil Branda</text></a>

                {/* Japan Group */}
                <a href="http://www.nims.go.jp/fmg/index_e.html" target="_blank" className="group-link" title="National Institute for Materials Science"><text x="930.0" y="274.0">Masayoshi Higuchi</text></a>
                <a href="https://physorg.chem.s.u-tokyo.ac.jp/" target="_blank" className="group-link" title="The University of Tokyo"><text x="940.0" y="286.0">Hiroyuki Isobe</text></a>
                <a href="http://park.itc.u-tokyo.ac.jp/terao/custom.html" target="_blank" className="group-link" title="The University of Tokyo"><text x="890.0" y="298.0">Jun Terao</text></a>
                <a href="http://www.rs.kagu.tus.ac.jp/sslab/" target="_blank" className="group-link" title="Tokyo University of Science"><text x="940.0" y="298.0">Shinichi Saito</text></a>
                <a href="https://www.rs.tus.ac.jp/shionoyalab/tus/Top.html" target="_blank" className="group-link" title="Tokyo Institute of Technology"><text x="890.0" y="310.0">Mitsuhiko Shionoya</text></a>
                <a href="https://www.chem.es.osaka-u.ac.jp/supra/en/" target="_blank" className="group-link" title="Osaka University"><text x="890.0" y="322.0">Keiji Hirose</text></a>
                <a href="https://www.aidacreativehub.com/" target="_blank" className="group-link" title="The University of Tokyo"><text x="890.0" y="334.0">Takuzo Aida</text></a>
                <a href="https://www.kinbaralab-en.jp/home" target="_blank" className="group-link" title="Tokyo Institute of Technology"><text x="945.0" y="322.0">Kazushi Kinbara</text></a>
                <a href="https://www.sanken.osaka-u.ac.jp/labs/omm/" target="_blank" className="group-link" title="Osaka University"><text x="910.0" y="20.0">Yutaka Ie</text></a>
                <a href="https://stoddart.northwestern.edu/" target="_blank" className="group-link" title="The University of Hong Kong"><text x="890.0" y="346.0">Fraser Stoddart</text></a>
                <a href="http://zenglab.fzu.edu.cn/" target="_blank" className="group-link" title="Fuzhou University"><text x="950.0" y="334.0">Huaqiang Zeng</text></a>
                <a href="http://www.res.titech.ac.jp/~shinkin/" target="_blank" className="group-link" title="Tokyo Institute of Technology"><text x="910.0" y="32.0">Kohtaro Osakada</text></a>
                <a href="https://moltech.jp/ja/" target="_blank" className="group-link" title="The University of Tokyo"><text x="910.0" y="44.0">Eiichi Nakamura</text></a>
                <a href="http://www.chem.tsukuba.ac.jp/nabesima/en/member.html" target="_blank" className="group-link" title="University of Tsukuba"><text x="910.0" y="56.0">Tatsuya Nabeshima</text></a>
                <a href="https://www.sbchem.kyoto-u.ac.jp/ogoshi-lab/index_en.html" target="_blank" className="group-link" title="Kyoto University"><text x="910.0" y="68.0">Tomoki Ogoshi</text></a>
                <a href="https://researchmap.jp/read0118729" target="_blank" className="group-link" title="Shiga University of Medical Science"><text x="910.0" y="80.0">Yoshio Furusho</text></a>
                <a href="https://www.chembio.nagoya-u.ac.jp/labhp/polymer4/e/profile/yashima.html" target="_blank" className="group-link" title="Nagoya University"><text x="910.0" y="92.0">Eiji Yashima</text></a>
                <a href="https://supra.chem.nagoya-u.ac.jp/" target="_blank" className="group-link" title="Nagoya University"><text x="910.0" y="104.0">Kentaro Tanaka</text></a>
                <a href="https://www.chembio.nagoya-u.ac.jp/labhp/polymer4/TIG/j/research/index.html" target="_blank" className="group-link" title="Nagoya University"><text x="910.0" y="116.0">Tomoyuki Ikai</text></a>
                <a href="https://kendb.doshisha.ac.jp/profile/en.e55845777d4831f4.html" target="_blank" className="group-link" title="Doshisha University"><text x="910.0" y="128.0">Akira Nakamura</text></a>
                <a href="https://synth.chem.nagoya-u.ac.jp/wordpress/about?lang=en" target="_blank" className="group-link" title="Nagoya University"><text x="910.0" y="140.0">Hideto Ito</text></a>
                <a href="http://fujitalab.t.u-tokyo.ac.jp/home_e/" target="_blank" className="group-link" title="The University of Tokyo"><text x="910.0" y="152.0">Makoto Fujita</text></a>
                <a href="https://www.jst.go.jp/crest/mt/researchers/hamachi_itaru.html" target="_blank" className="group-link" title="Kyoto University"><text x="910.0" y="164.0">Itaru Hamachi</text></a>
                <a href="https://itami-lab.com/staff/kenichiroitami?lang=en" target="_blank" className="group-link" title="Nagoya University"><text x="930.0" y="176.0">Kenichiro Itami</text></a>

                {/* China Group */}
                <a href="http://ylli.iccas.ac.cn/" target="_blank" className="group-link" title="CAS (Beijing)"><text x="830.0" y="390.0">Yuliang Li</text></a>
                <a href="http://liumh.iccas.ac.cn/english" target="_blank" className="group-link" title="CAS (Beijing)"><text x="830.0" y="402.0">Minghua Liu</text></a>
                <a href="http://lsp.ipc.ac.cn/publication" target="_blank" className="group-link" title="CAS (Beijing)"><text x="830.0" y="414.0">Li-Zhu Wu</text></a>
                <a href="https://faculty.nwu.edu.cn/YingfengHan/en/index/70597/list/index.htm" target="_blank" className="group-link" title="Northwest University"><text x="830.0" y="426.0">Ying-Feng Han</text></a>
                <a href="https://www.chem.pku.edu.cn/zwliu/index.htm" target="_blank" className="group-link" title="Peking University"><text x="835.0" y="438.0">Chun-Hui Huang</text></a>
                <a href="http://zhangxigroup.com/en/index-en.html" target="_blank" className="group-link" title="Tsinghua University"><text x="840.0" y="450.0">Xi Zhang</text></a>
                <a href="https://mascl.group/" target="_blank" className="group-link" title="Tsinghua University"><text x="840.0" y="462.0">Mei-Xiang Wang</text></a>
                <a href="https://supramol.jlu.edu.cn/HOME/HOME.htm" target="_blank" className="group-link" title="Jilin University"><text x="880.0" y="474.0">Bai Yang</text></a>
                <a href="http://www.chem.pku.edu.cn/pei/" target="_blank" className="group-link" title="Peking University"><text x="918.5" y="390.0">Jian Pei</text></a>
                <a href="https://supram.nankai.edu.cn/" target="_blank" className="group-link" title="Nankai University"><text x="883.0" y="390.0">Yu Liu</text></a>
                <a href="http://chenjiang.fudan.edu.cn/EN/Default.aspx" target="_blank" className="group-link" title="Fudan University"><text x="890.0" y="402.0">Guosong Chen</text></a>
                <a href="https://chem.szu.edu.cn/hgwn/szdw/Department_of_Chemistry/Distinguished_professor/Li_Xiaopeng.htm" target="_blank" className="group-link" title="Shenzhen University"><text x="885.0" y="414.0">Xiaopeng Li</text></a>
                <a href="https://chem.ecust.edu.cn/_t222/main.htm" target="_blank" className="group-link" title="ECUST"><text x="910.0" y="426.0">He Tian</text></a>
                <a href="http://hysz.nju.edu.cn/supramol/former_version/LeyongWang/E-Prof_Wang.htm" target="_blank" className="group-link" title="Nanjing University"><text x="890.0" y="450.0">Leyong Wang</text></a>
                <a href="http://staff.ustc.edu.cn/~sliu/index.htm" target="_blank" className="group-link" title="USTC"><text x="920.0" y="462.0">Shiyong Liu</text></a>
                <a href="http://www.chemistry.hku.hk/staff/cmche/cmche.htm" target="_blank" className="group-link" title="University of Hong Kong"><text x="930.0" y="474.0">Chi-Ming Che</text></a>
                <a href="https://faculty.ecnu.edu.cn/_s34/yhb2_en/main.psp" target="_blank" className="group-link" title="East China Normal University"><text x="955.0" y="450.0">Haibo Yang</text></a>
                <a href="https://thezhanggroup.sjtu.edu.cn/" target="_blank" className="group-link" title="SJTU"><text x="950.0" y="414.0">Shaodong Zhang</text></a>
                <a href="https://www.sunjunqigroup.com/" target="_blank" className="group-link" title="Jilin University"><text x="920.0" y="562.0">Junqi Sun</text></a>
                <a href="http://cchen.iccas.ac.cn/" target="_blank" className="group-link" title="CAS (Beijing)"><text x="920.0" y="573.0">Chuan-Feng Chen</text></a>
                <a href="https://www.westlake.edu.cn/info/1398/3003.htm" target="_blank" className="group-link" title="Westlake University"><text x="833.5" y="379.0">Zhichang Liu</text></a>
                <a href="http://www.chemnanotopology.com/" target="_blank" className="group-link" title="East China Normal University"><text x="963.5" y="379.0">Liang Zhang</text></a>
                <a href="https://www.zhukelong.net/" target="_blank" className="group-link" title="Sun Yat-sen University"><text x="965.0" y="518.0">Kelong Zhu</text></a>
                <a href="http://www.huangfeihegroup.com/#/home" target="_blank" className="group-link" title="Zhejiang University"><text x="900.0" y="529.0">Feihe Huang</text></a>
                <a href="http://www.yangchenggroup.com/en/" target="_blank" className="group-link" title="Sichuan University"><text x="960.0" y="529.0">Cheng Yang</text></a>
                <a href="https://www.x-mol.com/groups/li_hao?lang=en" target="_blank" className="group-link" title="Zhejiang University"><text x="920.0" y="540.0">Hao Li</text></a>
                <a href="https://www.x-mol.com/groups/qu_dahui?lang=en" target="_blank" className="group-link" title="ECUST"><text x="955.0" y="540.0">Dahui Qu</text></a>

                {/* Europe Group (Strasbourg/Paris/etc) */}
                <a href="http://sams.ics-cnrs.unistra.fr/en/" target="_blank" className="group-link" title="Université de Strasbourg"><text x="300" y="253">Nicolas Giuseppone</text></a>
                <a href="http://nierengartengroup.com/" target="_blank" className="group-link" title="Université de Strasbourg"><text x="390" y="253">Jean-F. Nierengarten</text></a>
                <a href="https://isis.unistra.fr/laboratory-of-inorganic-chemistry-jean-pierre-sauvage/" target="_blank" className="group-link" title="Strasbourg"><text x="305" y="265">Jean-Pierre Sauvage</text></a>
                <a href="http://www-isis.u-strasbg.fr/supra/start" target="_blank" className="group-link" title="Strasbourg"><text x="320" y="277">Jean-Marie Lehn</text></a>
                <a href="http://www.otto-lab.com/" target="_blank" className="group-link" title="Groningen"><text x="557" y="137">Sijbren Otto</text></a>
                <a href="http://www.benferinga.com/" target="_blank" className="group-link" title="Groningen"><text x="557" y="101">Ben Feringa</text></a>
                <a href="http://www.credi-group.it/" target="_blank" className="group-link" title="Bologna"><text x="380" y="649">Alberto Credi</text></a>
                <a href="https://www.francescoriccilab.com/" target="_blank" className="group-link" title="Rome"><text x="385" y="625">Francesco Ricci</text></a>
                <a href="http://www.ehudkeinan.com/" target="_blank" className="group-link" title="Technion"><text x="352" y="517">Ehud Keinan</text></a>
                <a href="https://wennemers.ethz.ch/" target="_blank" className="group-link" title="ETH Zürich"><text x="370" y="529">Helma Wennemers</text></a>

                {/* Australia/NZ Group */}
                <a href="https://stuartbatten.net/" target="_blank" className="group-link" title="Monash University"><text x="730.0" y="552.0">Stuart Batten</text></a>
                <a href="https://profiles.uts.edu.au/Steven.Langford/about" target="_blank" className="group-link" title="UTS"><text x="730.0" y="564.0">Steven Langford</text></a>
                <a href="https://blogs.otago.ac.nz/jamescrowley/" target="_blank" className="group-link" title="University of Otago"><text x="902.0" y="590.0">James Crowley</text></a>
                <a href="https://aibn.uq.edu.au/Rowan" target="_blank" className="group-link" title="University of Queensland"><text x="730.0" y="612.0">Alan Rowan</text></a>
              </g>
            </svg>
          </div>
        </div>

        <div className="bg-purple-900 p-12 rounded-[3rem] text-white space-y-8 relative overflow-hidden">
          <Atom className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12" />
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black serif-font mb-4">A Global Endeavor</h2>
            <p className="text-purple-100 leading-relaxed text-lg italic">
              "The design of molecular machines is a collaborative global pursuit. From the pioneering efforts in Strasbourg and Groningen to the burgeoning research centers in Shanghai and beyond, this map outlines a small part of the vast community mapping the topology of the microscopic world."
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-[#c87137]"></div>
              Europe & UK
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-[#0080ff]"></div>
              Americas
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-[#8000ff]"></div>
              Asia & Pacific
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-[#c83737]"></div>
              Africa
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-[#008000]"></div>
              South America
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GroupMattersPage = () => {
  const downloadManual = () => {
    const password = prompt('Please enter your password to download the lab manual', ' ');
    if (password === 'leigh406') {
      window.open('https://www.catenane.net/images/general/DLvLeigh%20Group%20New%20Worker%20Information.html', '_blank');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="pt-40 pb-32 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="text-center space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-24 h-24 bg-purple-50 text-[#660099] rounded-[2rem] flex items-center justify-center mx-auto border border-purple-100 shadow-xl">
            <MessageSquare className="w-12 h-12" />
          </motion.div>
          <div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 serif-font tracking-tight mb-4 uppercase">Group Matters</h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto italic font-medium leading-relaxed">
              Internal information, safety protocols, and group perks.
            </p>
          </div>
          <div className="w-24 h-1 bg-[#ffcc00] mx-auto rounded-full"></div>
        </div>

        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden relative group">
           <img src="images/GroupPhoto2023.jpg" alt="Leigh Group Windermere 2023" className="w-full h-auto rounded-[2rem] transition-transform duration-1000 group-hover:scale-[1.01]" />
           <div className="absolute bottom-12 right-12 glass px-6 py-3 rounded-full shadow-xl">
             <span className="text-xs font-black uppercase tracking-widest text-[#660099]">Windermere • 2023</span>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <Shield className="text-[#660099] w-8 h-8" />
               <h2 className="text-3xl font-black text-slate-900 serif-font">Safety First</h2>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
               <p className="text-slate-600 font-medium">The current designated first aiders in our research group are:</p>
               <div className="flex flex-wrap gap-4">
                  <a href="/#/group" className="flex items-center gap-3 px-5 py-3 bg-purple-50 rounded-2xl hover:bg-[#660099] hover:text-white transition-all group/pill">
                    <Users className="w-4 h-4 text-[#660099] group-hover/pill:text-white" />
                    <span className="text-sm font-bold">Valerie Bruyr</span>
                  </a>
                  <a href="/#/group" className="flex items-center gap-3 px-5 py-3 bg-purple-50 rounded-2xl hover:bg-[#660099] hover:text-white transition-all group/pill">
                    <Users className="w-4 h-4 text-[#660099] group-hover/pill:text-white" />
                    <span className="text-sm font-bold">Daniel Tetlow</span>
                  </a>
               </div>
               <div className="pt-6 border-t border-slate-50">
                  <button 
                    onClick={downloadManual}
                    className="w-full py-5 bg-[#ffcc00] text-[#660099] rounded-[1.5rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:shadow-xl transition-all"
                  >
                    <Download className="w-5 h-5" /> Download Group Lab Manual
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-4 font-bold uppercase tracking-tighter flex items-center justify-center gap-2">
                    <AlertTriangle className="w-3 h-3" /> Password Required for Download
                  </p>
               </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
               <Briefcase className="text-[#660099] w-8 h-8" />
               <h2 className="text-3xl font-black text-slate-900 serif-font">Monkey Business</h2>
            </div>
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead className="bg-purple-50 border-b border-purple-100">
                     <tr>
                       <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-[#660099]">Responsibility</th>
                       <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-[#660099]">Monkey</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-50">
                     {MONKEY_BUSINESS.map((item, idx) => (
                       <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                         <td className="px-6 py-4 text-sm font-bold text-slate-900">{item.task}</td>
                         <td className="px-6 py-4 text-sm text-slate-600 font-medium italic">{item.person}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          </section>
        </div>

        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200 pb-8">
             <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <Ticket className="text-[#ffcc00] w-10 h-10" />
                   <h2 className="text-4xl md:text-5xl font-black text-slate-900 serif-font uppercase">Old Trafford Tickets</h2>
                </div>
                <p className="text-slate-500 max-w-2xl leading-relaxed font-medium">
                  The Leigh Group and their guests have use of a pair of Season Tickets for Manchester United. 
                  For the 2023-24 season the seats are in the <span className="text-[#660099] font-bold">Sir Alex Ferguson Stand</span>.
                </p>
             </div>
             <a href="http://www.manutd.com/en/Visit-Old-Trafford/Maps-And-Directions.aspx" target="_blank" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#660099] bg-purple-50 px-6 py-3 rounded-full hover:bg-[#660099] hover:text-white transition-all">
                <MapPin className="w-4 h-4" /> Get Directions
             </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-4">
                   <img src="images/general/OldTrafford2.bmp" alt="Old Trafford Seating" className="w-full rounded-[1.5rem]" />
                   <div className="p-4 bg-slate-50 rounded-2xl">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                         <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase text-slate-400">Stand</p>
                            <p className="text-sm font-bold text-slate-900">Sir Alex Ferguson</p>
                         </div>
                         <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase text-slate-400">Block</p>
                            <p className="text-sm font-bold text-slate-900">N3406</p>
                         </div>
                         <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase text-slate-400">Row</p>
                            <p className="text-sm font-bold text-slate-900">25</p>
                         </div>
                         <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase text-slate-400">Seats</p>
                            <p className="text-sm font-bold text-slate-900">81 & 82</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-6">
                   <h3 className="text-2xl font-black text-slate-900 serif-font">Booking Process</h3>
                   <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                      <p>Everyone in the group who wishes to should be able to see at least one game a season. <span className="font-bold text-slate-900">Prodip</span> or <span className="font-bold text-slate-900">Maria</span> keep the membership details necessary to allocate tickets electronically.</p>
                      <p>All home games in the Premier League, FA Cup and Champions League are available. Games marked with an * may or may not be played at Old Trafford.</p>
                      <div className="pt-4">
                        <img src="images/general/ManU2023.jpg" alt="Booking List" className="w-full rounded-2xl border border-slate-100" />
                      </div>
                   </div>
                </div>
             </div>
             <div className="space-y-8">
                <div className="bg-slate-900 p-4 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                   <img src="images/general/OldTraffordView.png" alt="View from seats" className="w-full rounded-[1.5rem] opacity-90 group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-8">
                      <div className="space-y-2">
                        <p className="text-[#ffcc00] text-[10px] font-black uppercase tracking-[0.3em]">Stadium Preview</p>
                        <p className="text-white font-bold text-lg">Pitch-perfect view from row 25</p>
                      </div>
                   </div>
                </div>
                <div className="bg-purple-900 p-8 rounded-[2.5rem] shadow-2xl text-white space-y-6 relative overflow-hidden">
                   <Atom className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5 rotate-12" />
                   <h3 className="text-2xl font-black serif-font">Game Day?</h3>
                   <p className="text-purple-200 text-sm leading-relaxed">Tickets will be sent to you electronically a few days before kick-off. Make sure you have the official United app installed.</p>
                   <button className="w-full py-4 bg-white text-[#660099] rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#ffcc00] hover:text-[#660099] transition-all">Request Ticket Allocation</button>
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ResearchLayout = ({ children, activeSlug }: { children: React.ReactNode, activeSlug?: string }) => {
  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-3 space-y-6">
          <div className="sticky top-32">
             <h3 className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-6 flex items-center gap-2">
                < Book className="w-4 h-4" /> Research Topics
             </h3>
             <nav className="space-y-1">
                {RESEARCH_PROJECTS.map((proj) => (
                   <Link 
                    key={proj.slug}
                    to={`/research/${proj.slug}`}
                    className={`block px-4 py-2 text-sm font-bold rounded-xl transition-all ${activeSlug === proj.slug ? 'bg-purple-50 text-[#660099] shadow-sm' : 'text-slate-500 hover:text-[#660099] hover:bg-slate-50'}`}
                   >
                    {proj.title}
                   </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-slate-100">
                   <Link to="/research" className="flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#660099] hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-3 h-3" /> Overview
                   </Link>
                </div>
             </nav>
          </div>
        </aside>
        <main className="lg:col-span-9">
          {children}
        </main>
      </div>
    </div>
  );
};

const ResearchHighlightPage = () => {
  const { slug } = useParams();
  const content = RESEARCH_HIGHLIGHT_CONTENT[slug || ""];

  if (!content) return (
    <ResearchLayout>
      <div className="text-center py-20">
        <h2 className="text-3xl font-black serif-font text-slate-900">Research Topic Details</h2>
        <p className="text-slate-500 mt-2">Information for {slug} is being updated. Please check back soon.</p>
        <Link to="/research" className="text-[#660099] font-bold mt-8 inline-block underline">Back to Overview</Link>
      </div>
    </ResearchLayout>
  );

  return (
    <ResearchLayout activeSlug={slug}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 serif-font leading-tight">{content.title}</h1>
          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
             <Quote className="w-8 h-8 text-purple-200 flex-shrink-0" />
             <div className="space-y-2">
                <p className="text-sm font-bold text-slate-700 leading-relaxed italic">{content.citation}</p>
                <a href={content.citationUrl} target="_blank" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-[#660099] hover:text-purple-800">
                   View Original Publication <ExternalLink className="ml-1 w-3 h-3" />
                </a>
             </div>
          </div>
        </div>

        {content.videoUrl && (
          <div key={content.videoUrl} className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900">
            {content.videoUrl.includes('youtube.com/embed') ? (
               <iframe className="w-full h-full" src={content.videoUrl} title={content.title} frameBorder="0" allowFullScreen></iframe>
            ) : (
              <video key={content.videoUrl} src={content.videoUrl} className="w-full h-full object-cover" controls autoPlay loop muted />
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6">
            {content.content.map((p, i) => (
              <p key={i} className="text-lg text-slate-600 leading-relaxed serif-font italic pr-4">{p}</p>
            ))}
          </div>
          <div className="lg:col-span-4">
            {content.mainImage && (
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
                <img src={content.mainImage} alt={content.title} className="w-full h-auto" />
              </div>
            )}
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex justify-between items-center">
           <Link to="/research" className="inline-flex items-center gap-3 px-6 py-3 bg-purple-50 text-[#660099] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#660099] hover:text-white transition-all shadow-sm">
              <ChevronRight className="w-4 h-4 rotate-180" /> Back to Research
           </Link>
           <div className="flex gap-4">
              <button className="p-3 bg-slate-50 text-slate-400 rounded-full hover:text-[#660099] transition-colors"><Twitter className="w-5 h-5" /></button>
              <button className="p-3 bg-slate-50 text-slate-400 rounded-full hover:text-[#660099] transition-colors"><ExternalLink className="w-5 h-5" /></button>
           </div>
        </div>
      </motion.div>
    </ResearchLayout>
  );
};

const ResearchPage = () => (
  <div className="pt-40 pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 space-y-32">
      <section className="space-y-12 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 serif-font tracking-tight uppercase">Research Frontiers</h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">In 2018 our group commissioned a short video from <strong>A Capella Science</strong> to introduce the topic of molecular robotics. The result was <strong>‘Nanobot’</strong>.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="aspect-video bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-2xl border border-purple-50 relative group">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/ObvxPSQNMGc?rel=0&showinfo=0" title="Nanobot Intro" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
           </div>
           <div className="aspect-video bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-2xl border border-purple-50 relative group">
              <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/ymC5KkVy8zc?rel=0&showinfo=0" title="Nanobots & Creativity" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
           </div>
        </div>
      </section>
      <section className="space-y-16">
        <div className="flex items-center justify-between border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-slate-900 serif-font">Research Highlights</h2>
            <p className="text-slate-500 font-medium">Click on the thumbnails to explore our key breakthroughs.</p>
          </div>
          <FlaskConical className="w-12 h-12 text-[#660099] opacity-20 hidden md:block" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {RESEARCH_PROJECTS.map((project, idx) => (
            <motion.div key={idx} whileHover={{ y: -8 }} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl overflow-hidden transition-all group">
              <Link to={project.link} className="block relative aspect-[4/3] bg-slate-100">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <div className="flex items-center text-white font-bold text-sm gap-2">Learn More <ArrowRight className="w-4 h-4" /></div>
                </div>
              </Link>
              <div className="p-6"><h4 className="text-lg font-bold text-slate-900 group-hover:text-[#660099] transition-colors line-clamp-1">{project.title}</h4></div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

const PublicationCard: React.FC<{ pub: Publication }> = ({ pub }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all flex flex-col md:flex-row gap-8 items-start mb-6 overflow-hidden"
  >
    <div className="flex-1 space-y-5">
      <div className="flex items-center space-x-3">
        <span className="text-[10px] font-black uppercase tracking-widest bg-purple-50 text-[#660099] px-3 py-1 rounded-full border border-purple-100">
          {pub.journal}
        </span>
        <span className="text-[10px] font-bold text-slate-400">{pub.year}</span>
      </div>
      
      <div>
        <a 
          href={pub.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-[#660099] transition-colors flex items-center gap-2 leading-tight"
        >
          {pub.title}
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </a>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed italic border-l-4 border-purple-100 pl-4">{pub.authors}</p>
      
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold">
        <span className="text-slate-400 uppercase tracking-tighter">Citation:</span>
        <span className="text-purple-600 italic font-bold">{pub.journal}</span>
        <span className="text-slate-900 font-bold">{pub.volume}</span>
        <span className="text-slate-500">{pub.pages}</span>
      </div>

      {pub.highlight && (
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl space-y-3">
          <div className="flex gap-3 items-start">
            <Quote className="w-4 h-4 text-[#660099] flex-shrink-0 mt-1" />
            <p className="text-xs text-slate-700 italic leading-relaxed">{pub.highlight}</p>
          </div>
          {pub.highlightUrl && (
            <a href={pub.highlightUrl} target="_blank" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-[#660099] hover:text-purple-800 transition-colors">
              Read Highlight <ArrowRight className="ml-1 w-3 h-3" />
            </a>
          )}
        </div>
      )}

      {pub.coverImg && (
        <div className="pt-4 flex items-center gap-6">
          <div className="flex flex-col items-center gap-2 group/cover">
             <a href={pub.coverUrl} target="_blank" className="block relative overflow-hidden rounded-xl border border-slate-100 shadow-sm group-hover/cover:shadow-manchester-gold/30 transition-all">
                <img src={pub.coverImg} alt="Journal Cover" className="w-32 h-auto group-hover/cover:scale-105 transition-transform" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover/cover:opacity-100 transition-opacity">
                   <Download className="text-white w-6 h-6" />
                </div>
             </a>
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cover Feature</span>
          </div>
        </div>
      )}
    </div>

    {pub.abstractImg && (
      <div className="w-full md:w-80 flex-shrink-0 group/abstract">
        <a href={pub.url} target="_blank" className="block w-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 relative transition-all group-hover/abstract:border-purple-200 shadow-sm">
          <img 
            src={pub.abstractImg} 
            alt="Graphical Abstract" 
            className="w-full h-auto object-contain p-4 opacity-90 group-hover/abstract:opacity-100 transition-opacity"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-purple-900/5 opacity-0 group-hover/abstract:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
             <div className="px-4 py-2 bg-white/90 rounded-full shadow-lg text-[10px] font-black uppercase tracking-widest text-[#660099] border border-purple-100">Click to View Paper</div>
          </div>
        </a>
      </div>
    )}
  </motion.div>
);

const PublicationsPage = () => {
  const years = Object.keys(PUBLICATIONS).sort((a, b) => parseInt(b) - parseInt(a));
  
  const scrollToYear = (year: string) => {
    const element = document.getElementById(`year-${year}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-40 pb-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-24 h-24 bg-purple-50 text-[#660099] rounded-[2rem] flex items-center justify-center mx-auto border border-purple-100 shadow-xl">
            <BookOpen className="w-12 h-12" />
          </motion.div>
          <div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 serif-font tracking-tight mb-4">Scientific Archive</h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto italic font-medium">"Mapping the topology of the microscopic world through synthesis and innovation."</p>
          </div>
          <div className="sticky top-24 z-20 py-4 bg-slate-50/80 backdrop-blur-sm">
            <div className="flex flex-wrap justify-center gap-2">
              {years.map(year => (
                <button 
                    key={year} 
                    onClick={() => scrollToYear(year)}
                    className="px-5 py-2 bg-white border border-slate-200 rounded-full text-xs font-black uppercase tracking-widest text-slate-500 hover:text-[#660099] hover:border-purple-300 hover:bg-purple-50 transition-all shadow-sm focus:outline-none"
                >
                    {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-32">
          {years.map((year) => (
            <section key={year} id={`year-${year}`} className="scroll-mt-56 space-y-10">
              <div className="flex items-center space-x-8">
                <h2 className="text-7xl md:text-9xl font-black text-slate-200 select-none absolute -left-10 md:left-auto opacity-40">{year}</h2>
                <div className="relative z-10">
                  <h3 className="text-4xl font-black text-[#660099] flex items-center gap-4">
                    <span className="w-8 h-1 bg-[#ffcc00] rounded-full"></span>
                    {year}
                  </h3>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-purple-200 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 gap-4 relative z-10">
                {PUBLICATIONS[year].map((pub, idx) => (
                  <PublicationCard key={idx} pub={pub} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="bg-white p-16 rounded-[3rem] text-center space-y-8 border border-purple-100 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#ffcc00]"></div>
          <Award className="w-16 h-16 text-[#ffcc00] mx-auto" />
          <h4 className="text-3xl font-bold text-slate-900 serif-font">Complete Research Legacy</h4>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">The Leigh Group has pioneered mechanical bonding, chemical topology, and artificial molecular motors for over three decades. This comprehensive list represents our commitment to scientific discovery at the notation scale.</p>
          <Link to="/" className="inline-flex items-center text-[#660099] font-bold hover:underline gap-2 mt-4">Back to overview <ChevronRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </div>
  );
};

const VirtualTourPage = () => (
  <div className="pt-40 pb-32 px-6 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto space-y-20">
      <div className="text-center space-y-8">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-24 h-24 bg-purple-50 text-[#660099] rounded-[2rem] flex items-center justify-center mx-auto border border-purple-100 shadow-xl">
          <Compass className="w-12 h-12" />
        </motion.div>
        <div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 serif-font tracking-tight mb-4 uppercase">Virtual Tour</h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto italic font-medium leading-relaxed">
            Explore the Sir Robert Robinson Laboratory at the University of Manchester.
          </p>
        </div>
        <div className="w-24 h-1 bg-[#ffcc00] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
            <Info className="absolute -top-4 -right-4 w-24 h-24 text-purple-100 group-hover:scale-110 transition-transform" />
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-black text-[#660099] serif-font">Our Facility</h3>
              <p className="text-slate-600 leading-relaxed">
                The Leigh group is housed in the <span className="font-bold text-slate-900">Sir Robert Robinson Laboratory</span>, a custom-designed state-of-the-art facility for advanced organic synthesis in the 21st century on the 4th Floor of the Chemistry Building.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-[#ffcc00] mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-slate-500 font-semibold">30 x 2m fumehoods in the main lab</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-[#ffcc00] mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-slate-500 font-semibold">600 MHz NMR spectrometer with cryoprobe</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-[#ffcc00] mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-slate-500 font-semibold">Mass spectrometers & microwave synthesizers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-8 rounded-[2.5rem] border border-purple-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <FlaskConical className="text-[#660099]" /> Manchester Chemistry
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              The University of Manchester has outstanding facilities to support organic chemistry, including NMR spectroscopy at 800, 600, 500, 400 and 300 MHz and state-of-the-art mass spectrometry and X-ray crystallography equipment.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="group relative bg-white p-4 rounded-[3rem] border border-slate-100 shadow-2xl transition-all hover:shadow-purple-100">
             <a href="https://www.catenane.net/images/general/vtourhigh.jpg" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-[2.5rem]">
                <img 
                  src="images/general/vtourmap_web.jpg" 
                  alt="Virtual Tour of the Leigh Lab" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]" 
                />
                <div className="absolute inset-0 bg-[#660099]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="bg-white/90 px-6 py-3 rounded-full shadow-xl flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="text-[#660099] w-5 h-5" />
                      <span className="font-black text-[10px] uppercase tracking-widest text-[#660099]">View Full Resolution Map</span>
                   </div>
                </div>
             </a>
             <div className="mt-8 flex justify-between items-center px-4">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Laboratory Floor Plan • 4th Floor</p>
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-purple-200"></div>
                   <div className="w-3 h-3 rounded-full bg-[#ffcc00]"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DavidLeighPage = () => {
  return (
    <div className="pt-40 pb-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-[3rem] p-1 border border-slate-100 shadow-xl overflow-hidden group">
            <div className="aspect-[3/4] overflow-hidden rounded-[2.8rem] bg-slate-100">
               <img src="https://www.catenane.net/images/general/dave%20leigh%20bio%20cropped.jpg" alt="David Leigh" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-black text-slate-900 serif-font">Professor David Leigh</h1>
                <div className="flex flex-wrap gap-2">
                  {PROF_BIO.titles.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-purple-50 text-[#660099] text-[10px] font-black rounded-md border border-purple-100">{t}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4 pt-4 border-t border-slate-50">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-[#660099] flex-shrink-0" />
                  <div className="text-sm text-slate-600 leading-relaxed">
                    {PROF_BIO.contact.manchester.map((line, idx) => (
                      <p key={idx} className={idx < 2 ? "font-bold text-slate-900 mb-0.5" : ""}>{line}</p>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-2">
                  <MapPin className="w-5 h-5 text-[#ffcc00] flex-shrink-0" />
                  <div className="text-sm text-slate-600 leading-relaxed">
                    {PROF_BIO.contact.shanghai.map((line, idx) => (
                      <p key={idx} className={idx === 0 || idx === 2 ? "font-bold text-slate-900 mb-0.5" : ""}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-50 flex flex-wrap gap-4">
                <a href={`mailto:${PROF_BIO.contact.email}`} className="p-3 bg-purple-50 rounded-2xl text-[#660099] hover:bg-[#660099] hover:text-white transition-all shadow-sm"><Mail className="w-5 h-5" /></a>
                <a href={`https://twitter.com/${PROF_BIO.contact.twitter.replace('@', '')}`} target="_blank" className="p-3 bg-blue-50 rounded-2xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Twitter className="w-5 h-5" /></a>
                <a href={PROF_BIO.contact.scholar} target="_blank" className="p-3 bg-amber-50 rounded-2xl text-amber-600 hover:bg-amber-600 hover:text-white transition-all shadow-sm"><GraduationCap className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3"><Sparkles className="w-5 h-5 text-[#ffcc00]" /> Memberships</h3>
            <ul className="space-y-3">
              {PROF_BIO.memberships.map((m, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600"><ChevronRight className="w-4 h-4 text-[#660099] flex-shrink-0 mt-0.5" />{m}</li>
              ))}
            </ul>
          </div>
        </aside>
        <main className="lg:col-span-8 space-y-16">
          <section className="space-y-8">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-purple-50 rounded-full text-[#660099] font-bold text-xs uppercase tracking-widest"><FileText className="w-4 h-4" /><span>Biography & Education</span></div>
            <p className="text-xl text-slate-700 leading-relaxed serif-font italic">"Pushing the boundaries of molecular structure and function through the design of artificial machines and complex topologies."</p>
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl space-y-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[10rem] opacity-50"></div>
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-[#660099]">Academic Foundation</h4>
                <p className="text-slate-600">{PROF_BIO.education}</p>
              </div>
              <div className="space-y-8">
                <h4 className="text-sm font-black uppercase tracking-widest text-[#660099]">Career Timeline</h4>
                <div className="space-y-6">
                  {PROF_BIO.career.map((c, i) => (
                    <div key={i} className="flex relative">
                      <div className="flex flex-col sm:flex-row sm:gap-6">
                        <span className="text-xs font-black text-[#660099] w-20 flex-shrink-0 pt-0.5">{c.year}</span>
                        <span className="text-sm text-slate-700 font-medium">{c.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="space-y-8">
            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <h2 className="text-4xl font-black text-slate-900 serif-font">Distinctions & Awards</h2>
                <p className="text-slate-500 text-sm">Recognizing pioneering contributions to nanoscience and topology.</p>
              </div>
              <Award className="w-12 h-12 text-[#ffcc00] opacity-30" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROF_BIO.awards.map((a, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-[#660099] font-black text-xs flex-shrink-0 group-hover:bg-[#660099] group-hover:text-white transition-colors">
                    {a.year.slice(-2)}'
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-slate-800 leading-tight group-hover:text-[#660099] transition-colors">{a.title}</p>
                    {a.link && (
                      <a href={a.link} target="_blank" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#ffcc00] flex items-center gap-1">View Details <ExternalLink className="w-2.5 h-2.5" /></a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const GroupMemberCard: React.FC<{ member: GroupMember }> = ({ member }) => {
  const [hasError, setHasError] = useState(false);
  const reverseEmail = (str: string) => str.split('').reverse().join('');
  const email = member.email ? reverseEmail(member.email) : '';

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
      setHasError(true);
      const filename = member.image.split('/').pop();
      // Try official site fallback based on typical path
      if (member.image.includes('ecnu')) {
        (e.target as HTMLImageElement).src = `https://www.catenane.net/images/current_members/ecnu/${filename}`;
      } else {
        (e.target as HTMLImageElement).src = `https://www.catenane.net/images/team/${filename}`;
      }
    } else {
      // Final generic fallback
      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }} 
      className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl overflow-hidden transition-all group"
    >
      <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={handleError} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-8 text-center space-y-3 relative z-10">
        <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#660099] transition-colors">{member.name}</h4>
        <p className="text-xs text-slate-500 font-semibold leading-relaxed px-4">{member.qualification}</p>
        {email && (
          <div className="pt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <a href={`mailto:${email}`} className="text-[#660099] hover:text-purple-800 transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest"><Mail className="w-3 h-3" /> Email Member</a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const GroupPage = () => {
  const [activeTab, setActiveTab] = useState<'manchester' | 'shanghai'>('manchester');
  const members = activeTab === 'manchester' ? GROUP_MEMBERS : SHANGHAI_MEMBERS;

  return (
    <div className="pt-40 pb-32 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-24 h-24 bg-purple-50 text-[#660099] rounded-[2rem] flex items-center justify-center mx-auto border border-purple-100 shadow-xl">
            <Users className="w-12 h-12" />
          </motion.div>
          <div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 serif-font tracking-tight mb-4 uppercase">Leigh Group Team</h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto italic font-medium">
              "A diverse global community of researchers dedicated to exploring the boundaries of chemical synthesis."
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-1">
              <button 
                onClick={() => setActiveTab('manchester')}
                className={`flex items-center gap-2 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'manchester' ? 'bg-[#660099] text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Building2 className="w-4 h-4" /> Manchester Team
              </button>
              <button 
                onClick={() => setActiveTab('shanghai')}
                className={`flex items-center gap-2 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'shanghai' ? 'bg-[#660099] text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Flag className="w-4 h-4" /> Shanghai Team
              </button>
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {members.map((member, idx) => (
              <GroupMemberCard key={`${activeTab}-${member.name}`} member={member} />
            ))}
          </AnimatePresence>
        </motion.div>

        {activeTab === 'shanghai' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-12 text-center">
             <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Affiliated with the School of Chemistry and Molecular Engineering, ECNU</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="pt-12 pb-12 px-6 border-t border-slate-100 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-3 space-y-6">
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.manchester.ac.uk/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-90 transition-opacity"
            >
              <img 
                src="images/UoM_logo.png" 
                alt="University of Manchester" 
                className="h-14 w-auto object-contain" 
              />
            </a>
            <div className="w-px h-8 bg-slate-200"></div>
            <span className="text-lg font-bold tracking-tight text-[#660099] uppercase">Leigh Group</span>
          </div>
          <p className="text-slate-500 leading-relaxed text-sm max-w-xs">Pushing the boundaries of molecular machines and chemical topology at the University of Manchester.</p>
        </div>
        <div className="md:col-span-2 space-y-6">
          <h5 className="text-slate-900 font-black uppercase text-[10px] tracking-[0.25em]">Research</h5>
          <ul className="space-y-4 text-sm text-slate-500 font-semibold">
            <li><Link to="/research" className="hover:text-[#660099] transition-colors">Molecular Robotics</Link></li>
            <li><Link to="/research" className="hover:text-[#660099] transition-colors">Knot Synthesis</Link></li>
            <li><Link to="/research" className="hover:text-[#660099] transition-colors">Information Ratchets</Link></li>
            <li><Link to="/research" className="hover:text-[#660099] transition-colors">Active Transport</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2 space-y-6">
          <h5 className="text-slate-900 font-black uppercase text-[10px] tracking-[0.25em]">The Group</h5>
          <ul className="space-y-4 text-sm text-slate-500 font-semibold">
            <li><Link to="/group" className="hover:text-[#660099] transition-colors">Our People</Link></li>
            <li><Link to="/david" className="hover:text-[#660099] transition-colors">David Leigh</Link></li>
            <li><Link to="/literature" className="hover:text-[#660099] transition-colors">Publications</Link></li>
            <li><a href="https://leighgroup.org" target="_blank" className="hover:text-[#660099] transition-colors">Official Website</a></li>
          </ul>
        </div>
        <div className="md:col-span-5 space-y-6">
          <h5 className="text-slate-900 font-black uppercase text-[10px] tracking-[0.25em]">Connect</h5>
          <p className="text-sm text-slate-500 font-semibold">Manchester Institute of Biotechnology</p>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <input type="email" placeholder="Email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-slate-900 placeholder:text-slate-400 font-medium transition-all" />
            </div>
            <button className="bg-[#660099] p-4 rounded-full hover:bg-purple-800 transition-all shadow-lg flex items-center justify-center flex-shrink-0"><ArrowRight className="w-5 h-5 text-white" /></button>
          </div>
        </div>
      </div>
      <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest order-2 md:order-1">© {new Date().getFullYear()} The Leigh Group. University of Manchester.</p>
        <div className="flex space-x-10 text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] order-1 md:order-2">
            <a href="#" className="hover:text-[#660099] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#660099] transition-colors">Accessibility</a>
            <a href="https://leighgroup.org" target="_blank" className="text-[#660099] hover:underline">Official Site</a>
        </div>
      </div>
    </div>
  </footer>
);

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-100">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<motion.div key="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><HomePage /></motion.div>} />
            <Route path="/research" element={<motion.div key="research" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><ResearchPage /></motion.div>} />
            <Route path="/research/:slug" element={<motion.div key={location.pathname} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><ResearchHighlightPage /></motion.div>} />
            <Route path="/david" element={<motion.div key="david" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><DavidLeighPage /></motion.div>} />
            <Route path="/group" element={<motion.div key="group" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><GroupPage /></motion.div>} />
            <Route path="/literature" element={<motion.div key="literature" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><PublicationsPage /></motion.div>} />
            <Route path="/vtour" element={<motion.div key="vtour" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><VirtualTourPage /></motion.div>} />
            <Route path="/group-matters" element={<motion.div key="group-matters" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><GroupMattersPage /></motion.div>} />
            <Route path="/supramolecular-world" element={<motion.div key="supramolecular" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><SupramolecularWorldPage /></motion.div>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Assistant />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
