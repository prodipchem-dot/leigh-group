import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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
  Trash2
} from 'lucide-react';
import { SCIENCE_DOMAINS, GROUP_STATS, MISSION_STATEMENT, PUBLICATIONS, Publication, GROUP_MEMBERS, GroupMember, PROF_BIO, RESEARCH_PROJECTS, ResearchProject, HOME_ASSETS } from './constants';
import MolecularCanvas from './components/MolecularCanvas';
import Assistant from './components/Assistant';

const Navbar = ({ onToggleEdit, isEditing }: { onToggleEdit: () => void, isEditing: boolean }) => {
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
    { name: 'Virtual Tour', path: '#', icon: <Compass className="w-4 h-4" /> },
    { name: 'Group Matters', path: '#', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 glass border-b border-purple-100 shadow-md' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-[#660099] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg transition-transform group-hover:rotate-6">L</div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#ffcc00] rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#660099] group-hover:text-purple-700 transition-colors uppercase">Leigh group</h1>
            <p className="text-[10px] text-slate-400 font-bold tracking-widest leading-none">University of Manchester</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${location.pathname === link.path ? 'bg-purple-50 text-[#660099]' : 'text-slate-600 hover:text-[#660099] hover:bg-slate-100'}`}
            >
              <span>{link.name}</span>
            </Link>
          ))}
          {location.pathname === '/' && (
            <button 
              onClick={onToggleEdit}
              className={`ml-4 flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${isEditing ? 'bg-[#ffcc00] text-[#660099]' : 'bg-[#660099] text-white hover:bg-purple-800'}`}
            >
              {isEditing ? <Save className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
              <span>{isEditing ? 'Finish' : 'Edit'}</span>
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#660099] p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
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

const HomePage = ({ isEditing }: { isEditing: boolean }) => {
  // Persistence logic for home page content
  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem('leigh-group-home-content');
    if (saved) return JSON.parse(saved);
    return {
      welcomeTitle: "Welcome to the Leigh group website",
      researchTitle: "Our Research",
      researchPara1: "Our group explores, invents and discovers fundamental ways to control molecular-level dynamics and topology. This includes strategies and methods to synthesize interlocked molecular architectures (e.g. benzylic amide and metal ‘passive template’ catenanes, rotaxanes and molecular shuttles [1995-] and catalytic ‘active template’ synthesis [2006-]), molecular machinery [1999-], molecular ratchet mechanisms [2003-], molecular knotting [2011-], molecular assemblers [2013-], molecular robotics [2016-] and molecular weaving [2020-].",
      researchPara2: "Perhaps the best way to appreciate the technological potential of controlled molecular-level motion is to recognise that nanomotors and molecular-level machines lie at the heart of every significant biological process. Over billions of years of evolution Nature has not repeatedly chosen this solution for achieving complex task performance without good reason. When we learn how to build artificial structures that can control and exploit molecular level motion, and interface their effects directly with other molecular-level substructures and the outside world, it will potentially impact on every aspect of functional molecule and materials design. An improved understanding of physics and biology will surely follow.",
      quote1: "What I cannot create, I do not understand",
      quote1Author: "Richard P. Feynman",
      projects: RESEARCH_PROJECTS,
      heroGallery: HOME_ASSETS.hero,
      researchGallery: HOME_ASSETS.research,
      footerGallery: HOME_ASSETS.footerCards
    };
  });

  useEffect(() => {
    localStorage.setItem('leigh-group-home-content', JSON.stringify(content));
  }, [content]);

  const updateField = (field: string, value: any) => {
    setContent((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleProjectUpdate = (index: number, field: keyof ResearchProject, value: string) => {
    const newProjects = [...content.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    updateField('projects', newProjects);
  };

  const addProject = () => {
    updateField('projects', [...content.projects, { title: 'New Project', image: 'https://images.unsplash.com/photo-1532187875685-d60320641329?auto=format&fit=crop&q=80&w=400', link: '#' }]);
  };

  const removeProject = (index: number) => {
    updateField('projects', content.projects.filter((_: any, i: number) => i !== index));
  };

  return (
    <div className="pt-32 pb-10 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Banners */}
        <div className="flex justify-center gap-8 mb-10 opacity-80 hover:opacity-100 transition-opacity">
          <a href="https://www.ucl.ac.uk/sustainable/take-action/staff-action/leaf-laboratory-efficiency-assessment-framework" target="_blank" rel="noopener noreferrer">
            <img src="images/Leaflogo.jpg" alt="LEAF logo" className="h-16 w-auto rounded shadow-sm border border-slate-100" />
          </a>
          <a href="#">
            <img src="images/CAMERA_banner.jpg" alt="CAMERA banner" className="h-16 w-auto rounded shadow-sm border border-slate-100" />
          </a>
        </div>

        <div className="text-center mb-12">
          {isEditing ? (
            <input 
              className="text-3xl font-black text-slate-900 serif-font text-center bg-purple-50 p-2 rounded-xl w-full max-w-2xl"
              value={content.welcomeTitle}
              onChange={(e) => updateField('welcomeTitle', e.target.value)}
            />
          ) : (
            <h2 className="text-3xl font-black text-slate-900 serif-font">{content.welcomeTitle}</h2>
          )}
        </div>

        {/* Intro Section with Video and Manchester Pics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
          <div className="lg:col-span-6 aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/ObvxPSQNMGc?rel=0&showinfo=0" 
              title="Nanobot Intro"
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="lg:col-span-6 flex justify-center gap-4">
             {content.heroGallery.map((hero: any, idx: number) => (
                <a key={idx} href={hero.link} target="_blank" rel="noopener noreferrer" className="w-1/2 block">
                  <img 
                    src={hero.image} 
                    alt={hero.alt} 
                    className="w-full h-auto rounded-[2rem] shadow-lg hover:scale-105 transition-transform" 
                  />
                </a>
             ))}
          </div>
        </div>

        {/* Main Content Layout: Sidebar + Main */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar: Some Highlights (Scrollable list) */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="sticky top-28">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#660099] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#ffcc00]" />
                  Recent Highlights
                </h3>
                {isEditing && (
                  <button onClick={addProject} className="p-1 bg-[#660099] text-white rounded-md hover:bg-purple-800 transition-colors">
                    <Plus className="w-3 h-3" />
                  </button>
                )}
              </div>
              <div className="space-y-4 max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
                {content.projects.map((project: ResearchProject, idx: number) => (
                  <div key={idx} className="relative group">
                    {isEditing ? (
                      <div className="bg-slate-50 p-3 rounded-2xl border border-dashed border-purple-200 space-y-2">
                        <input 
                          className="w-full text-[10px] font-bold p-1 bg-white border border-slate-200 rounded"
                          value={project.title}
                          onChange={(e) => handleProjectUpdate(idx, 'title', e.target.value)}
                        />
                        <input 
                          className="w-full text-[8px] p-1 bg-white border border-slate-200 rounded"
                          value={project.image}
                          onChange={(e) => handleProjectUpdate(idx, 'image', e.target.value)}
                        />
                        <button onClick={() => removeProject(idx)} className="text-red-500 hover:text-red-700 transition-colors">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all group-hover:shadow-md group-hover:border-purple-300">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <span className="text-white text-[10px] font-black uppercase tracking-widest">{project.title}</span>
                          </div>
                        </div>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Column */}
          <main className="lg:col-span-9 space-y-16">
            
            {/* Professor Header */}
            <div className="flex flex-col md:flex-row gap-8 items-start pt-4">
               <img src="images/general/daveleigh2006.jpg" alt="Professor David Leigh" className="w-48 h-48 rounded-[2rem] shadow-xl border-4 border-white grayscale hover:grayscale-0 transition-all" />
               <div className="space-y-2">
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 serif-font">Professor David A Leigh</h2>
                 <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">FRS FRSE FRSC MAE</p>
                 <div className="w-20 h-1 bg-[#ffcc00] rounded-full mt-4"></div>
               </div>
            </div>

            {/* Group Photo Section with FIXED JOIN US BANNER */}
            <div className="space-y-8">
              <div className="relative group">
                <img src="images/GroupPhoto2025.jpg" alt="Leigh Group 2025" className="w-full rounded-[3rem] shadow-2xl" />
                <div className="absolute top-8 right-8 bg-[#ffcc00] p-6 rounded-3xl shadow-2xl border-4 border-white max-w-sm z-10 transition-all hover:-translate-y-2 hover:shadow-manchester-gold/20">
                  <p className="text-[#660099] font-black text-sm uppercase tracking-tight leading-tight">
                    INTERESTED IN JOINING THE LEIGH GROUP AS A PhD OR POSTDOC? 
                    <a href="https://www.catenane.net/pages/apply.html" target="_blank" className="underline ml-1 hover:text-purple-800">SEE HERE.</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Research Text Section */}
            <section className="space-y-10">
              <div className="flex items-center gap-4">
                {isEditing ? (
                  <input 
                    className="text-2xl font-black text-slate-900 serif-font bg-purple-50 p-2 rounded-xl"
                    value={content.researchTitle}
                    onChange={(e) => updateField('researchTitle', e.target.value)}
                  />
                ) : (
                  <h3 className="text-2xl font-black text-slate-900 serif-font">{content.researchTitle}</h3>
                )}
                <div className="h-px flex-1 bg-slate-100"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-8 text-slate-700 leading-relaxed text-lg serif-font italic pr-4">
                {isEditing ? (
                  <>
                    <textarea 
                      className="w-full bg-purple-50 p-4 rounded-3xl border border-purple-100 min-h-[150px]"
                      value={content.researchPara1}
                      onChange={(e) => updateField('researchPara1', e.target.value)}
                    />
                    <textarea 
                      className="w-full bg-purple-50 p-4 rounded-3xl border border-purple-100 min-h-[150px]"
                      value={content.researchPara2}
                      onChange={(e) => updateField('researchPara2', e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <p>{content.researchPara1} For some highlights see <Link to="/research" className="text-[#660099] font-bold underline">HERE</Link>.</p>
                    <p>{content.researchPara2}</p>
                  </>
                )}
              </div>

              {/* Quote 1 */}
              <div className="bg-purple-50 p-10 rounded-[3rem] border border-purple-100 relative overflow-hidden group">
                 <Quote className="absolute top-4 right-8 w-20 h-20 text-[#660099] opacity-10 group-hover:scale-110 transition-transform" />
                 {isEditing ? (
                   <div className="space-y-4">
                     <textarea 
                      className="text-2xl font-bold text-[#660099] italic serif-font bg-white/50 p-2 rounded-xl w-full"
                      value={content.quote1}
                      onChange={(e) => updateField('quote1', e.target.value)}
                     />
                     <input 
                      className="text-right font-black uppercase text-xs tracking-widest text-[#660099]/60 bg-white/50 p-2 rounded-xl w-full"
                      value={content.quote1Author}
                      onChange={(e) => updateField('quote1Author', e.target.value)}
                     />
                   </div>
                 ) : (
                   <>
                    <p className="text-2xl font-bold text-[#660099] italic serif-font mb-4">"{content.quote1}"</p>
                    <p className="text-right font-black uppercase text-xs tracking-widest text-[#660099]/60">— {content.quote1Author}</p>
                   </>
                 )}
              </div>

              {/* Research Map Images (Wrapped in Links) */}
              <div className="space-y-12">
                 {content.researchGallery.map((asset: any, idx: number) => (
                    <div key={idx} className="space-y-4">
                      <a href={asset.link} target="_blank" rel="noopener noreferrer" className="block">
                        <img src={asset.image} alt={asset.alt} className="w-full rounded-[3rem] shadow-xl hover:shadow-2xl transition-all" />
                      </a>
                      {idx === 0 && <p className="text-xs text-slate-400 font-bold uppercase text-center tracking-[0.2em]">Group's Research Interests Map</p>}
                    </div>
                 ))}
              </div>

              {/* Footer Links (Tour/Map) - Generated from constants */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
                 {content.footerGallery.map((card: any, idx: number) => (
                    <a key={idx} href={card.link} target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                      <h4 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-3">
                        {idx === 0 ? <Compass className="text-[#660099]" /> : <Map className="text-[#ffcc00]" />}
                        {card.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-bold uppercase mb-6 tracking-widest">{card.subtitle}</p>
                      <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-2xl group-hover:scale-[1.02] transition-transform" />
                    </a>
                 ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

const DavidLeighPage = () => {
  return (
    <div className="pt-40 pb-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Sidebar Info */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-[3rem] p-1 border border-slate-100 shadow-xl overflow-hidden group">
            <div className="aspect-[3/4] overflow-hidden rounded-[2.8rem] bg-slate-100">
               <img 
                src="https://www.catenane.net/images/general/dave%20leigh%20bio%20cropped.jpg" 
                alt="David Leigh" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
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
                    <p className="font-bold text-slate-900 mb-1">Manchester Institute of Biotechnology</p>
                    {PROF_BIO.contact.manchester.slice(1).map(line => <p key={line}>{line}</p>)}
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-[#ffcc00] flex-shrink-0" />
                  <div className="text-sm text-slate-600 leading-relaxed">
                    <p className="font-bold text-slate-900 mb-1">East China Normal University</p>
                    {PROF_BIO.contact.shanghai.slice(2).map(line => <p key={line}>{line}</p>)}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50 flex flex-wrap gap-4">
                <a href={`mailto:${PROF_BIO.contact.email}`} className="p-3 bg-purple-50 rounded-2xl text-[#660099] hover:bg-[#660099] hover:text-white transition-all shadow-sm">
                  <Mail className="w-5 h-5" />
                </a>
                <a href={`https://twitter.com/${PROF_BIO.contact.twitter.replace('@', '')}`} target="_blank" className="p-3 bg-blue-50 rounded-2xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={PROF_BIO.contact.scholar} target="_blank" className="p-3 bg-amber-50 rounded-2xl text-amber-600 hover:bg-amber-600 hover:text-white transition-all shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#ffcc00]" />
              Memberships
            </h3>
            <ul className="space-y-3">
              {PROF_BIO.memberships.map((m, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600">
                  <ChevronRight className="w-4 h-4 text-[#660099] flex-shrink-0 mt-0.5" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-8 space-y-16">
          
          {/* Biography Section */}
          <section className="space-y-8">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-purple-50 rounded-full text-[#660099] font-bold text-xs uppercase tracking-widest">
              <FileText className="w-4 h-4" />
              <span>Biography & Education</span>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed serif-font italic">
              "Pushing the boundaries of molecular structure and function through the design of artificial machines and complex topologies."
            </p>
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

          {/* Awards Section */}
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
                      <a href={a.link} target="_blank" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#ffcc00] flex items-center gap-1">
                        View Details <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lectures Section */}
          <section className="space-y-8">
             <div className="inline-flex items-center space-x-3 px-4 py-2 bg-amber-50 rounded-full text-amber-700 font-bold text-xs uppercase tracking-widest">
              <Mic className="w-4 h-4" />
              <span>Selected Lectures</span>
            </div>
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
              <div className="p-8 space-y-1">
                {PROF_BIO.lectures.map((l, i) => (
                  <div key={i} className="flex gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors border-b border-slate-50 last:border-0">
                    <Calendar className="w-4 h-4 text-slate-300 mt-1" />
                    <div>
                      <span className="text-xs font-black text-[#660099] block mb-1">{l.year}</span>
                      <p className="text-sm font-medium text-slate-700">{l.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Media/Interviews Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-black text-slate-900 serif-font">Interviews & Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROF_BIO.interviews.map((int, i) => (
                <a 
                  key={i} 
                  href={int.link} 
                  target="_blank" 
                  className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all group flex flex-col gap-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{int.year} • {int.source}</span>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#660099] transition-colors">{int.title}</h4>
                    </div>
                    {int.type === 'video' ? <Youtube className="text-red-500" /> : int.type === 'audio' ? <Mic className="text-blue-500" /> : <FileText className="text-[#660099]" />}
                  </div>
                  <div className="flex items-center text-xs font-bold text-[#660099] mt-auto">
                    Listen / Read <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
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
  const [triedFallback, setTriedFallback] = useState(false);
  const reverseEmail = (str: string) => str.split('').reverse().join('');
  const email = member.email ? reverseEmail(member.email) : '';

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!triedFallback) {
      setTriedFallback(true);
      const filename = member.image.split('/').pop();
      (e.target as HTMLImageElement).src = `https://www.catenane.net/images/team/${filename}`;
    } else if (!hasError) {
      setHasError(true);
      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl overflow-hidden transition-all group"
    >
      <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          onError={handleError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-8 text-center space-y-3 relative z-10">
        <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#660099] transition-colors">{member.name}</h4>
        <p className="text-xs text-slate-500 font-semibold leading-relaxed px-4">{member.qualification}</p>
        {email && (
          <div className="pt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <a href={`mailto:${email}`} className="text-[#660099] hover:text-purple-800 transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest">
               <Mail className="w-3 h-3" />
               Email Member
             </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const GroupPage = () => (
  <div className="pt-40 pb-32 px-6 bg-slate-50">
    <div className="max-w-7xl mx-auto space-y-20">
      <div className="text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-24 h-24 bg-purple-50 text-[#660099] rounded-[2rem] flex items-center justify-center mx-auto border border-purple-100 shadow-xl"
        >
          <Users className="w-12 h-12" />
        </motion.div>
        <div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 serif-font tracking-tight mb-4">Manchester Team</h1>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto italic font-medium">
            "A diverse community of international researchers dedicated to exploring the boundaries of chemical synthesis."
          </p>
        </div>
        <div className="w-24 h-1 bg-[#ffcc00] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {GROUP_MEMBERS.map((member, idx) => (
          <GroupMemberCard key={idx} member={member} />
        ))}
      </div>

      <div className="bg-white p-12 rounded-[3rem] border border-purple-100 shadow-xl text-center space-y-8">
        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-purple-50 rounded-full text-[#660099] font-bold text-xs uppercase tracking-widest">
           <Award className="w-4 h-4 text-[#ffcc00]" />
           <span>Collaborations</span>
        </div>
        <h4 className="text-3xl font-bold text-slate-900 serif-font">Shanghai Team</h4>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We also maintain an active research program at East China Normal University (ECNU) in Shanghai. Our groups work in close collaboration on fundamental projects in molecular topology.
        </p>
        <div className="pt-4">
            <a href="https://leighgroup.org/pages/ecnupeople.html" target="_blank" className="inline-flex items-center text-[#660099] font-bold hover:underline gap-2">
               View Shanghai Group <ExternalLink className="w-4 h-4" />
            </a>
        </div>
      </div>
    </div>
  </div>
);

const PublicationCard: React.FC<{ pub: Publication }> = ({ pub }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all group flex flex-col md:flex-row gap-8 items-start mb-6 overflow-hidden"
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
        <span className="text-slate-900">{pub.volume}</span>
        <span className="text-slate-500">{pub.pages}</span>
      </div>

      {pub.highlight && (
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex gap-3 items-start">
          <Quote className="w-4 h-4 text-[#660099] flex-shrink-0 mt-1" />
          <p className="text-xs text-slate-700 italic leading-relaxed">{pub.highlight}</p>
        </div>
      )}
    </div>

    {pub.abstractImg && (
      <div className="w-full md:w-72 h-48 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 relative flex-shrink-0 group-hover:border-purple-200 transition-colors">
        <img 
          src={pub.abstractImg} 
          alt="Graphical Abstract" 
          className="w-full h-full object-contain p-4 opacity-80 group-hover:opacity-100 transition-opacity"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <FileText className="w-16 h-16 text-[#660099]" />
        </div>
      </div>
    )}
  </motion.div>
);

const PublicationsPage = () => {
  const years = Object.keys(PUBLICATIONS).sort((a, b) => parseInt(b) - parseInt(a));
  
  return (
    <div className="pt-40 pb-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-purple-50 text-[#660099] rounded-[2rem] flex items-center justify-center mx-auto border border-purple-100 shadow-xl"
          >
            <BookOpen className="w-12 h-12" />
          </motion.div>
          <div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 serif-font tracking-tight mb-4">Scientific Archive</h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto italic font-medium">
              "Mapping the topology of the microscopic world through synthesis and innovation."
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {years.map(year => (
              <a 
                key={year} 
                href={`#year-${year}`}
                className="px-5 py-2 bg-white border border-slate-200 rounded-full text-xs font-black uppercase tracking-widest text-slate-500 hover:text-[#660099] hover:border-purple-300 hover:bg-purple-50 transition-all shadow-sm"
              >
                {year}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-32">
          {years.map((year) => (
            <section key={year} id={`year-${year}`} className="scroll-mt-32 space-y-10">
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
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg">
            The Leigh Group has pioneered mechanical bonding, chemical topology, and artificial molecular motors for over three decades. 
            This comprehensive list represents our commitment to scientific discovery at the nanoscale.
          </p>
          <Link to="/" className="inline-flex items-center text-[#660099] font-bold hover:underline gap-2 mt-4">
             Back to overview <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ResearchPage = () => (
  <div className="pt-40 pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 space-y-32">
      
      {/* Intro Section */}
      <section className="space-y-12 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 serif-font tracking-tight">Research Frontiers</h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            In 2018 our group commissioned a short video from <strong>A Capella Science</strong> to introduce the topic of molecular robotics. The result was <strong>‘Nanobot’</strong>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="aspect-video bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-2xl border border-purple-50 relative group">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/ObvxPSQNMGc?rel=0&showinfo=0" 
                title="Nanobot Intro"
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
              <div className="absolute top-6 left-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-4 py-2 bg-[#660099] text-white text-xs font-bold rounded-full shadow-lg">Nanobot Part 1</span>
              </div>
           </div>
           <div className="aspect-video bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-2xl border border-purple-50 relative group">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/ymC5KkVy8zc?rel=0&showinfo=0" 
                title="Nanobots & Creativity"
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
              <div className="absolute top-6 left-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-4 py-2 bg-[#ffcc00] text-[#660099] text-xs font-bold rounded-full shadow-lg">Part 2: Creativity</span>
              </div>
           </div>
        </div>

        <div className="flex flex-col items-center gap-4">
           <p className="text-lg font-bold text-slate-700 italic">"Tim Blais did an amazing job! 😊"</p>
           <div className="w-12 h-1 bg-[#ffcc00] rounded-full"></div>
        </div>
      </section>

      {/* Project Grid Section */}
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
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl overflow-hidden transition-all group"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-[4/3] bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532187875685-d60320641329?auto=format&fit=crop&q=80&w=400";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <div className="flex items-center text-white font-bold text-sm gap-2">
                     Learn More <ArrowRight className="w-4 h-4" />
                   </div>
                </div>
              </a>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#660099] transition-colors line-clamp-1">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof / Impact */}
      <section className="bg-slate-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
         <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-100/50 rounded-full blur-[80px]"></div>
         <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-100/50 rounded-full blur-[80px]"></div>
         
         <div className="relative z-10 space-y-12 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white rounded-full shadow-sm text-slate-600 font-bold text-xs uppercase tracking-widest border border-purple-50">
               <MessageSquare className="w-4 h-4 text-[#660099]" />
               <span>Impact & Community</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 serif-font leading-tight">Engaging with the <br />Global Science Community</h3>
            <p className="text-slate-600 max-w-2xl mx-auto italic">
              Public engagement and clear communication are at the heart of our research. Our 'Nanobot' video garnered significant attention and feedback from scientists and enthusiasts worldwide.
            </p>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 max-w-4xl mx-auto overflow-hidden">
               <img 
                src="https://www.catenane.net/images/Nanobot%20comments.png" 
                alt="Community Comments" 
                className="w-full h-auto rounded-xl opacity-90 group-hover:opacity-100 transition-opacity" 
               />
               <p className="mt-6 text-[10px] uppercase font-black tracking-widest text-slate-400">Captured Jan 2019 • YouTube Community Feed</p>
            </div>
         </div>
      </section>

    </div>
  </div>
);

const Footer = () => (
  <footer className="pt-12 pb-12 px-6 border-t border-slate-100 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Logo and About */}
        <div className="md:col-span-3 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#660099] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">L</div>
            <span className="text-xl font-bold tracking-tight text-[#660099] uppercase">Leigh Group</span>
          </div>
          <p className="text-slate-500 leading-relaxed text-sm max-w-xs">
            Pushing the boundaries of molecular machines and chemical topology at the University of Manchester.
          </p>
        </div>

        {/* Research Column */}
        <div className="md:col-span-2 space-y-6">
          <h5 className="text-slate-900 font-black uppercase text-[10px] tracking-[0.25em]">Research</h5>
          <ul className="space-y-4 text-sm text-slate-500 font-semibold">
            <li><Link to="/research" className="hover:text-[#660099] transition-colors">Molecular Robotics</Link></li>
            <li><Link to="/research" className="hover:text-[#660099] transition-colors">Knot Synthesis</Link></li>
            <li><Link to="/research" className="hover:text-[#660099] transition-colors">Information Ratchets</Link></li>
            <li><Link to="/research" className="hover:text-[#660099] transition-colors">Active Transport</Link></li>
          </ul>
        </div>

        {/* The Group Column */}
        <div className="md:col-span-2 space-y-6">
          <h5 className="text-slate-900 font-black uppercase text-[10px] tracking-[0.25em]">The Group</h5>
          <ul className="space-y-4 text-sm text-slate-500 font-semibold">
            <li><Link to="/group" className="hover:text-[#660099] transition-colors">Our People</Link></li>
            <li><Link to="/david" className="hover:text-[#660099] transition-colors">David Leigh</Link></li>
            <li><Link to="/literature" className="hover:text-[#660099] transition-colors">Publications</Link></li>
            <li><a href="https://leighgroup.org" target="_blank" className="hover:text-[#660099] transition-colors">Official Website</a></li>
          </ul>
        </div>

        {/* Connect Column */}
        <div className="md:col-span-5 space-y-6">
          <h5 className="text-slate-900 font-black uppercase text-[10px] tracking-[0.25em]">Connect</h5>
          <p className="text-sm text-slate-500 font-semibold">Manchester Institute of Biotechnology</p>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 text-slate-900 placeholder:text-slate-400 font-medium transition-all" 
              />
            </div>
            <button className="bg-[#660099] p-4 rounded-full hover:bg-purple-800 transition-all shadow-lg hover:shadow-purple-200 active:scale-95 flex items-center justify-center flex-shrink-0">
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
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

const App: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-purple-100">
        <Navbar onToggleEdit={() => setIsEditing(!isEditing)} isEditing={isEditing} />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<motion.div key="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><HomePage isEditing={isEditing} /></motion.div>} />
              <Route path="/research" element={<motion.div key="research" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><ResearchPage /></motion.div>} />
              <Route path="/david" element={<motion.div key="david" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><DavidLeighPage /></motion.div>} />
              <Route path="/group" element={<motion.div key="group" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><GroupPage /></motion.div>} />
              <Route path="/literature" element={<motion.div key="literature" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><PublicationsPage /></motion.div>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <Assistant />
      </div>
    </Router>
  );
};

export default App;