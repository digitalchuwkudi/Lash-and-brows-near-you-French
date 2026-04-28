import React, { useState, useEffect } from 'react';
import {
  Menu, X, Eye, Sparkles, Heart, GraduationCap,
  Home, ShieldCheck, Clock, Zap, Calendar, MapPin,
  MessageCircle, Phone, ArrowRight, CheckCircle2,
  Instagram, Map, Play, ChevronRight, Star, Music, Facebook, Sun, Moon
} from 'lucide-react';

const services = [
  {
    title: "Extensions de Cils",
    icon: <Eye className="w-6 h-6 text-primary" />,
    items: [
      { name: "EXTENSION DE CILS CLASSIQUE", duration: "1h", price: "CFA 10,000" },
      { name: "EXTENSION DE CILS 2D/HYBRIDE", duration: "1h 20", price: "CFA 15,000" },
      { name: "EXTENSION DE CILS 3D/VOLUME", duration: "1h", price: "CFA 25,000" },
      { name: "EXTENSION DE CILS 4D/MÉGA VOLUME", duration: "1h", price: "CFA 30,000" },
      { name: "REMPLISSAGE DE CILS", duration: "50 min", price: "CFA 10,000" },
    ]
  },
  {
    title: "Sourcils",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    items: [
      { name: "RETOUCHE DE SOURCILS", duration: "2h", price: "CFA 30,000" },
      { name: "SOURCILS COMBO", duration: "2h", price: "CFA 50,000" },
      { name: "MICROSHADING (OMBRÉ)", duration: "2h", price: "CFA 35,000" },
      { name: "MICROBLADING", duration: "2h", price: "CFA 40,000" },
      { name: "LAMINATION DES SOURCILS", duration: "40 min", price: "CFA 15,000" },
      { name: "COLORATION DES SOURCILS", duration: "15 min", price: "CFA 10,000" },
      { name: "CORRECTION DES SOURCILS", duration: "30 min", price: "CFA 5,000" },
    ]
  },
  {
    title: "Lèvres",
    icon: <Heart className="w-6 h-6 text-primary" />,
    items: [
      { name: "LIP BLUSH", duration: "1h 45", price: "CFA 35,000" },
    ]
  },
  {
    title: "Formation",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    items: [
      { name: "MICROBLADING & EXTENSION DE CILS", duration: "3 semaines", price: "CFA 50,000" },
      { name: "EXTENSION DE CILS & LAMINATION DES SOURCILS", duration: "2 semaines", price: "CFA 45,000" },
      { name: "EXTENSION DE CILS (INCLUT KITS DE FORMATION)", duration: "2 semaines", price: "CFA 30,000" },
      { name: "EXTENSION DE CILS, LAMINATION & MAQUILLAGE PERMANENT", duration: "4 semaines", price: "CFA 65,000" },
    ]
  }
];

const features = [
  {
    icon: <Home className="w-6 h-6 text-primary" />,
    title: "Pas de Visites en Salon",
    desc: "Plus besoin de vous rendre en salon, vous économisez du temps et de l'argent."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Professionnelle & Certifiée",
    desc: "Obtenez des résultats impeccables avec une technicienne professionnelle et certifiée."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "Hygiène Stricte",
    desc: "Nous respectons des normes d'hygiène strictes pour votre sécurité et votre confort."
  },
  {
    icon: <Heart className="w-6 h-6 text-primary" />,
    title: "Confort & Intimité",
    desc: "Profitez de votre transformation dans le confort et l'intimité de votre maison."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Résultats Durables",
    desc: "Parfait pour les femmes actives et les mères qui veulent se réveiller prêtes."
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Gain de Temps",
    desc: "Réduit de moitié votre temps de maquillage matinal. Réveillez-vous prête tous les jours."
  }
];

const steps = [
  {
    num: "01",
    icon: <Calendar className="w-6 h-6 text-primary" />,
    title: "Réservez en Ligne",
    desc: "Réservez via WhatsApp ou notre système de réservation en ligne facile."
  },
  {
    num: "02",
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    title: "Choisissez le Service",
    desc: "Choisissez le service souhaité et le créneau horaire préféré."
  },
  {
    num: "03",
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "Nous Venons à Vous",
    desc: "Nous nous déplaçons chez vous à Cotonou à l'heure prévue."
  },
  {
    num: "04",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "Transformation",
    desc: "Profitez de votre transformation et réveillez-vous prête tous les jours."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen font-sans selection:bg-primary/30 ${isDarkMode ? 'dark' : ''}`}>
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src="https://i.ibb.co/KjjmHHHC/lash-brows-service-logo-LE-auto-x4.jpg" alt="Lash & Brows Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
              <span className="font-semibold text-[13px] sm:text-base md:text-xl tracking-tight text-primary font-heading">LASH&BROWS <span className="text-gray-900 dark:text-white font-medium">NEAR YOU</span></span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-sm font-bold text-gray-900 dark:text-white hover:text-primary transition-colors">Accueil</a>
              <a href="#about" className="text-sm font-bold text-gray-900 dark:text-white hover:text-primary transition-colors">À Propos</a>
              <a href="#services" className="text-sm font-bold text-gray-900 dark:text-white hover:text-primary transition-colors">Services</a>
              <a href="#gallery" className="text-sm font-bold text-gray-900 dark:text-white hover:text-primary transition-colors">Galerie</a>
              <a href="#training" className="text-sm font-bold text-gray-900 dark:text-white hover:text-primary transition-colors">Formation</a>
              <a href="#contact" className="text-sm font-bold text-gray-900 dark:text-white hover:text-primary transition-colors">Contact</a>
              <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-xl font-black text-sm transition-all flex items-center gap-2 uppercase tracking-wider hover:-translate-y-1 shadow-[0_0_15px_rgba(255,99,33,0.4)]">
                RÉSERVER <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button className="lg:hidden text-gray-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-4 py-4 space-y-4">
            <a href="#" className="block text-sm font-bold text-gray-900 dark:text-white hover:text-primary">Accueil</a>
            <a href="#about" className="block text-sm font-bold text-gray-900 dark:text-white hover:text-primary">À Propos</a>
            <a href="#services" className="block text-sm font-bold text-gray-900 dark:text-white hover:text-primary">Services</a>
            <a href="#gallery" className="block text-sm font-bold text-gray-900 dark:text-white hover:text-primary">Galerie</a>
            <a href="#training" className="block text-sm font-bold text-gray-900 dark:text-white hover:text-primary">Formation</a>
            <a href="#contact" className="block text-sm font-bold text-gray-900 dark:text-white hover:text-primary">Contact</a>
            <button className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded-xl font-black transition-all flex items-center justify-center gap-2 uppercase tracking-wider hover:-translate-y-1 shadow-[0_0_15px_rgba(255,99,33,0.4)]">
              RÉSERVER <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50 dark:bg-black">
        <div className="absolute inset-0 z-0 bg-gray-50 dark:bg-black">
          <div className="absolute inset-0 bg-gray-50 dark:bg-black"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 dark:bg-[#1A0B05] border border-primary/20 mb-8 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-primary">SERVICE À DOMICILE PREMIUM</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] text-gray-900 dark:text-white font-heading tracking-tight">
            Service à Domicile pour <br/>
            <span className="text-primary">Extensions de Cils,<br/>Sourcils & Lip Blush<br/>à Cotonou</span>
          </h1>
          <p className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Évitez le salon - obtenez des résultats impeccables d'une experte certifiée, directement à votre porte. Des soins de beauté professionnels dans le confort de votre maison.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,99,33,0.4)] hover:-translate-y-1 uppercase tracking-wider">
              RÉSERVER <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">GRATUIT, SANS FRAIS</p>
            
            <div className="flex items-center gap-4 mt-12">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" alt="Client" className="w-10 h-10 rounded-full border-2 border-white dark:border-black" />
                <img src="https://i.pravatar.cc/100?img=5" alt="Client" className="w-10 h-10 rounded-full border-2 border-white dark:border-black" />
                <img src="https://i.pravatar.cc/100?img=9" alt="Client" className="w-10 h-10 rounded-full border-2 border-white dark:border-black" />
                <img src="https://i.pravatar.cc/100?img=10" alt="Client" className="w-10 h-10 rounded-full border-2 border-white dark:border-black" />
              </div>
              <div className="text-left text-sm">
                <p className="font-bold text-gray-900 dark:text-white">Plus de 70 Belles Femmes</p>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Ont fait confiance à notre expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-900 dark:text-white font-heading leading-[1.1]">
              Nos <span className="text-primary">Services</span><br/>Signatures
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium mt-6">
              Nous utilisons uniquement des matériaux de première qualité et les dernières techniques pour garantir des résultats époustouflants et durables qui subliment votre beauté naturelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((category, idx) => (
              <div key={idx} className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-900/50 rounded-[32px] p-6 flex flex-col hover:shadow-[0_0_20px_rgba(255,99,33,0.4)] transition-all duration-300">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-[#111111] flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white font-heading">{category.title}</h3>
                </div>
                
                <div className="flex-1 flex flex-col">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex flex-col items-center py-6 border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                      <span className="font-bold text-[13px] uppercase text-gray-900 dark:text-white text-center mb-2 leading-snug tracking-wide">{item.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-4">Durée: {item.duration}</span>
                      <span className="text-[#FF5722] font-bold text-[13px] bg-orange-50 dark:bg-[#1A0B05] px-5 py-2 rounded-full tracking-wide">{item.price}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-8 bg-primary hover:bg-primary-hover text-white transition-colors py-5 rounded-xl font-black flex items-center justify-center gap-2 hover:-translate-y-1 shadow-[0_0_15px_rgba(255,99,33,0.4)] uppercase text-sm">
                  RÉSERVER <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white text-xs font-bold shadow-sm uppercase tracking-wider">
              <Zap className="w-4 h-4 text-primary" /> RÉSERVEZ TÔT POUR GARANTIR VOTRE PLACE
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Home Service */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white font-heading">
              Pourquoi Choisir Notre <span className="text-primary">Service à Domicile ?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-8 leading-relaxed max-w-2xl mx-auto">
              Nous apportons l'expérience du salon à votre porte, offrant des soins premium sans le stress du déplacement ou de l'attente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: "Pas de Visite en Salon", desc: "Pas besoin de vous déplacer, vous économisez du temps et de l'argent." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>, title: "Professionnel & Certifié", desc: "Obtenez des résultats impeccables par une technicienne professionnelle et certifiée." },
              { icon: <Sparkles className="w-6 h-6" />, title: "Hygiène Stricte", desc: "Nous suivons des normes d'hygiène strictes pour votre sécurité et confort." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: "Confort & Intimité", desc: "Profitez de votre transformation dans le confort et l'intimité de votre maison." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, title: "Résultats Durables", desc: "Parfait pour les femmes occupées et les mamans qui veulent se réveiller prêtes." },
              { icon: <Clock className="w-6 h-6" />, title: "Gain de Temps", desc: "Réduit de moitié votre temps de maquillage matinal. Réveillez-vous prête chaque jour." }
            ].map((item, idx) => (
              <div key={idx} className="group bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-gray-800/50 rounded-3xl py-12 px-8 text-center flex flex-col items-center hover:shadow-[0_0_20px_rgba(255,99,33,0.4)] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black flex items-center justify-center text-primary mb-6 shadow-sm dark:shadow-none group-hover:-translate-y-2 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 font-heading">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white font-heading">
              Comment Ça <span className="text-primary">Marche</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-8 leading-relaxed max-w-2xl mx-auto">
              Un processus simple et sans stress pour obtenir le soin de beauté que vous méritez.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[48px] left-[12%] right-[12%] h-[2px] bg-primary/20 z-0"></div>
            
            {[
              { icon: <Calendar className="w-8 h-8" />, title: "Réservez en Ligne", desc: "Réservez via WhatsApp ou notre système de réservation en ligne.", step: "01" },
              { icon: <MessageCircle className="w-8 h-8" />, title: "Choisissez le Service", desc: "Choisissez votre service désiré et votre créneau horaire préféré.", step: "02" },
              { icon: <MapPin className="w-8 h-8" />, title: "Nous Venons à Vous", desc: "Nous venons à votre adresse à Cotonou à l'heure prévue.", step: "03" },
              { icon: <Sparkles className="w-8 h-8" />, title: "Transformation", desc: "Profitez de votre transformation et réveillez-vous prête chaque jour.", step: "04" }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-3xl bg-white dark:bg-[#111111] flex items-center justify-center text-primary mb-8 shadow-sm dark:shadow-none">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 bg-gray-50 dark:bg-black px-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8 px-4">{item.desc}</p>
                <span className="text-primary/40 font-bold text-4xl">{item.step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white font-heading">Notre <span className="text-primary">Galerie</span></h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-8 leading-relaxed max-w-2xl mx-auto">
              Découvrez les superbes transformations que nous avons réalisées pour nos magnifiques clientes.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                {[
                  "https://images.unsplash.com/photo-1588513706481-72469e8f2f29?q=80&w=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1512496015851-a1c825b27f4a?q=80&w=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop"
                ].map((img, idx) => (
                  <div key={`col1-${idx}`} className="rounded-[16px] overflow-hidden aspect-square">
                    <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
              
              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                {[
                  "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=600&auto=format&fit=crop"
                ].map((img, idx) => (
                  <div key={`col2-${idx}`} className="rounded-[16px] overflow-hidden aspect-square">
                    <img src={img} alt={`Gallery ${idx + 5}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4 h-full">
                {[
                  "https://images.unsplash.com/photo-1526413232644-8a40f41ce931?q=80&w=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1516975080661-460d3e1c668f?q=80&w=600&auto=format&fit=crop"
                ].map((img, idx) => (
                  <div key={`col3-${idx}`} className="rounded-[16px] overflow-hidden flex-1">
                    <img src={img} alt={`Gallery ${idx + 9}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-[#2A1A14] text-primary text-xs font-bold mb-6 uppercase tracking-widest">
                <GraduationCap className="w-4 h-4" /> FORMEZ-VOUS AVEC NOUS
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white font-heading">
                Lancez Votre <span className="text-primary">Carrière<br/>Beauté</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-10 text-base font-medium leading-relaxed">
                Rejoignez nos programmes de formation professionnelle et apprenez des meilleurs. Nous avons formé plus de 25 étudiantes qui sont maintenant des entrepreneuses à succès dans le domaine de la beauté.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                {[
                  { title: "FORMATION PRATIQUE", desc: "Apprenez les dernières techniques avec des sessions pratiques." },
                  { title: "KITS INCLUS", desc: "Obtenez tout ce dont vous avez besoin pour démarrer votre entreprise." },
                  { title: "CERTIFICATION", desc: "Recevez un certificat reconnu à la fin de la formation." },
                  { title: "SOUTIEN CONTINU", desc: "Bénéficiez d'un mentorat même après la fin de votre formation." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase text-gray-900 dark:text-white tracking-wide">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs font-medium mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="https://wa.me/2290190083461" target="_blank" rel="noopener noreferrer" className="inline-flex bg-primary hover:bg-primary-hover text-white px-8 py-5 rounded-xl font-black transition-all items-center gap-2 shadow-lg shadow-primary/30 uppercase text-sm tracking-wider hover:-translate-y-1">
                SE RENSEIGNER SUR LA FORMATION <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 gap-6">
                <div className="rounded-[32px] overflow-hidden group aspect-square">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" alt="Training 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-[32px] overflow-hidden group aspect-square">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" alt="Training 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-[24px] shadow-xl z-10">
                <div className="flex flex-col items-center justify-center text-center">
                  <GraduationCap className="w-8 h-8 mb-2" />
                  <p className="text-3xl font-black mb-1">25+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">ÉTUDIANTES<br/>FORMÉES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-900 dark:text-white font-heading">Ce Que Disent <span className="text-primary">Nos Clientes</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              Plus de 150 femmes magnifiques à Cotonou nous font confiance. Regardez leurs histoires de transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative aspect-[9/16] rounded-[32px] overflow-hidden bg-gray-200 group cursor-pointer border-4 border-white dark:border-gray-800 shadow-lg">
                <img src={`https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop&sig=${item}`} alt="Testimonial" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white dark:border-gray-800/20 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2 text-xs font-bold text-white/80">
                    <Play className="w-3 h-3" /> 0:00
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-[#2A1A14] text-primary text-xs font-bold mb-6 uppercase tracking-widest">
              <Calendar className="w-4 h-4" /> RÉSERVATIONS
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-900 dark:text-white font-heading">Prête pour votre <span className="text-primary">Transformation ?</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              Choisissez votre méthode de réservation préférée ci-dessous. Réservez en ligne via notre portail, utilisez WhatsApp pour des réponses instantanées, ou remplissez notre formulaire manuel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp Booking */}
            <div className="group bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-[32px] p-8 shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-green-500 group-hover:-translate-y-1 transition-transform duration-300" />
                <h3 className="text-xl font-black text-gray-900 dark:text-white font-heading">Réserver via WhatsApp</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium">Réponse la plus rapide. Remplissez les détails pour générer un message.</p>
              
              <form className="space-y-4 flex-1 flex flex-col" onSubmit={(e) => { e.preventDefault(); window.open('https://wa.me/2290190083461', '_blank'); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-400 mb-2 uppercase tracking-wider"><span className="w-3 h-3 rounded-full border border-gray-400 dark:border-gray-500 flex items-center justify-center text-[8px]">👤</span> NOM COMPLET *</label>
                    <input type="text" required placeholder="Votre Nom" className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-400 mb-2 uppercase tracking-wider"><Phone className="w-3 h-3" /> NUMÉRO WHATSAPP *</label>
                    <input type="tel" required placeholder="+229..." className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" />
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-400 mb-2 uppercase tracking-wider"><Sparkles className="w-3 h-3" /> SÉLECTIONNER LE SERVICE *</label>
                  <select required className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 dark:text-white appearance-none">
                    <option value="">Choisir un service</option>
                    {services.flatMap(category => category.items).map((item, idx) => (
                      <option key={idx} value={item.name}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-400 mb-2 uppercase tracking-wider"><Calendar className="w-3 h-3" /> DATE *</label>
                    <input type="date" required className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-400 mb-2 uppercase tracking-wider"><Clock className="w-3 h-3" /> HEURE *</label>
                    <input type="time" required className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 dark:text-white" />
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <button type="submit" className="w-full bg-[#00E676] hover:bg-green-500 text-white py-5 rounded-xl font-black transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 uppercase hover:-translate-y-1">
                    RÉSERVER VIA WHATSAPP <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Manual Booking */}
            <div className="group bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-[32px] p-8 shadow-lg hover:shadow-[0_0_20px_rgba(255,99,33,0.4)] transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 flex items-center justify-center text-primary group-hover:-translate-y-1 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white font-heading">Réservation Manuelle</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium">Soumettez votre demande et nous vous recontacterons.</p>
              
              <form className="space-y-4 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-400 mb-2 uppercase tracking-wider"><span className="w-3 h-3 rounded-full border border-gray-400 dark:border-gray-500 flex items-center justify-center text-[8px]">👤</span> NOM COMPLET *</label>
                    <input type="text" required placeholder="Votre Nom" className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-400 mb-2 uppercase tracking-wider"><Phone className="w-3 h-3" /> TÉLÉPHONE *</label>
                    <input type="tel" required placeholder="Votre Téléphone" className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" />
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-400 mb-2 uppercase tracking-wider"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg> ADRESSE EMAIL *</label>
                  <input type="email" required placeholder="Votre Email" className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-400 mb-2 uppercase tracking-wider"><Sparkles className="w-3 h-3" /> SÉLECTIONNER LE SERVICE *</label>
                  <select required className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 dark:text-white appearance-none">
                    <option value="">Choisir un service</option>
                    {services.flatMap(category => category.items).map((item, idx) => (
                      <option key={idx} value={item.name}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-400 mb-2 uppercase tracking-wider"><Calendar className="w-3 h-3" /> DATE *</label>
                    <input type="date" required className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-400 mb-2 uppercase tracking-wider"><Clock className="w-3 h-3" /> HEURE *</label>
                    <input type="time" required className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-gray-900 dark:text-white" />
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white py-5 rounded-xl font-black transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/30 uppercase hover:-translate-y-1">
                    SOUMETTRE LA RÉSERVATION <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Setmore Booking */}
            <div className="group bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-[32px] p-8 flex flex-col shadow-lg hover:shadow-[0_0_20px_rgba(255,99,33,0.4)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary group-hover:-translate-y-1 transition-transform duration-300" />
                <h3 className="text-xl font-black text-gray-900 dark:text-white font-heading">Réserver sur Setmore</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1 font-medium">Plus d'options de réservation pour vous. Consultez la disponibilité en temps réel et sécurisez votre place instantanément.</p>
              
              <div className="mt-auto pt-6">
                <button className="w-full bg-primary hover:bg-primary-hover text-white py-5 rounded-xl font-black transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/30 uppercase hover:-translate-y-1">
                  RÉSERVER MAINTENANT <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Expert */}
      <section id="about" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-stretch">
            <div className="relative h-full min-h-[600px] lg:min-h-full">
              <div className="absolute inset-0 rounded-[32px] overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop" alt="Expert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 rounded-[32px] border-4 border-primary/20 translate-x-4 translate-y-4 -z-10"></div>
            </div>
            
            <div className="py-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-[#2A1A14] text-primary text-xs font-bold mb-6 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> À PROPOS DE L'EXPERTE
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white font-heading">
                Rencontrez Votre <span className="text-primary">Experte Beauté</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-10 text-base font-medium leading-relaxed">
                <p>
                  Je suis Josella, une esthéticienne certifiée au service des clientes à travers Cotonou. Avec plus de 5 ans d'expérience dans l'industrie de la beauté, je me spécialise dans la fourniture de résultats de qualité salon premium dans le confort de votre maison ou bureau.
                </p>
                <p>
                  Pas de circulation, pas d'attente - juste des soins professionnels personnalisés adaptés à votre emploi du temps. J'utilise des produits de haute qualité pour créer des looks frais, naturels, confiants et durables qui subliment votre beauté sans effort.
                </p>
                <p>
                  Ma mission est simple : vous offrir une expérience de beauté relaxante, pratique et satisfaisante sans jamais quitter votre espace.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="group bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-gray-800 p-6 rounded-[24px] text-center shadow-sm hover:shadow-[0_0_15px_rgba(255,99,33,0.3)] hover:border-primary/50 transition-all duration-300">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2 group-hover:-translate-y-1 transition-transform duration-300" />
                  <p className="text-2xl font-black text-gray-900 dark:text-white font-heading">5+</p>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest mt-1">Années d'Expérience</p>
                </div>
                <div className="group bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-gray-800 p-6 rounded-[24px] text-center shadow-sm hover:shadow-[0_0_15px_rgba(255,99,33,0.3)] hover:border-primary/50 transition-all duration-300">
                  <Star className="w-6 h-6 text-primary mx-auto mb-2 group-hover:-translate-y-1 transition-transform duration-300" />
                  <p className="text-2xl font-black text-gray-900 dark:text-white font-heading">150+</p>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest mt-1">Clientes Satisfaites</p>
                </div>
                <div className="group bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-gray-800 p-6 rounded-[24px] text-center shadow-sm hover:shadow-[0_0_15px_rgba(255,99,33,0.3)] hover:border-primary/50 transition-all duration-300">
                  <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2 group-hover:-translate-y-1 transition-transform duration-300" />
                  <p className="text-2xl font-black text-gray-900 dark:text-white font-heading">25+</p>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest mt-1">Étudiantes Formées</p>
                </div>
                <div className="group bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-gray-800 p-6 rounded-[24px] text-center shadow-sm hover:shadow-[0_0_15px_rgba(255,99,33,0.3)] hover:border-primary/50 transition-all duration-300">
                  <Home className="w-6 h-6 text-primary mx-auto mb-2 group-hover:-translate-y-1 transition-transform duration-300" />
                  <p className="text-2xl font-black text-gray-900 dark:text-white font-heading">No. 1</p>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest mt-1">Experte Mobile</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white uppercase">NORMES D'HYGIÈNE STRICTES</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Votre sécurité et votre confort sont mes priorités absolues.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 uppercase tracking-widest">
            <Phone className="w-4 h-4" /> CONTACTEZ-NOUS
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-900 dark:text-white font-heading">Contactez-<span className="text-primary">Nous</span></h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 font-medium text-lg">
            Vous avez des questions ou besoin d'aide ? Contactez-nous directement par téléphone ou WhatsApp. Nous sommes toujours là pour vous aider !
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 p-8 rounded-[32px] flex flex-col items-center hover:border-primary/50 hover:shadow-[0_0_15px_rgba(255,99,33,0.3)] hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-black mb-2 text-gray-900 dark:text-white font-heading">Appelez-Nous</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Parlez directement avec notre équipe.</p>
              <a href="tel:+2290161205830" className="text-xl font-black text-primary">+229 01 61 20 58 30</a>
            </div>
            
            <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 p-8 rounded-[32px] flex flex-col items-center hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-black mb-2 text-gray-900 dark:text-white font-heading">WhatsApp</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Envoyez-nous un message à tout moment.</p>
              <a href="https://wa.me/2290190083461" className="text-xl font-black text-green-500">+229 01 90 08 34 61</a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-[#111111] rounded-[32px] p-8 flex flex-col justify-between shadow-lg border border-gray-200 dark:border-gray-800">
              <div>
                <h3 className="text-2xl font-black mb-8 text-gray-900 dark:text-white font-heading">Lash and Brows</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-[#2A1A14] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-gray-900 dark:text-white">Emplacement</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">Cotonou, Benin</p>
                      <a href="https://www.google.com/maps/place/Lash+and+brows/@6.3629383,2.4736715,17z/data=!3m1!4b1!4m6!3m5!1s0x1023559f3bac5445:0xfc92304e5de70066!8m2!3d6.3629383!4d2.4736715!16s%2Fg%2F11w21crwn4?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline font-bold mt-2 inline-block">Obtenir l'itinéraire &rarr;</a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-[#2A1A14] flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-gray-900 dark:text-white">Avis</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-900 dark:text-white font-bold">5.0</span>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                      <a href="https://www.google.com/maps/place/Lash+and+brows/@6.3629383,2.4736715,17z/data=!3m1!4b1!4m6!3m5!1s0x1023559f3bac5445:0xfc92304e5de70066!8m2!3d6.3629383!4d2.4736715!16s%2Fg%2F11w21crwn4?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline font-bold mt-2 inline-block">Lire les avis &rarr;</a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-[#2A1A14] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-gray-900 dark:text-white">Horaires</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">Lun - Sam: 9:00 - 18:00</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Dim: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <a href="https://www.google.com/maps/place/Lash+and+brows/@6.3629383,2.4736715,17z/data=!3m1!4b1!4m6!3m5!1s0x1023559f3bac5445:0xfc92304e5de70066!8m2!3d6.3629383!4d2.4736715!16s%2Fg%2F11w21crwn4?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="w-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white py-5 rounded-xl font-black mt-10 transition-colors shadow-lg text-center block">
                Voir sur Google Maps
              </a>
            </div>
            
            <div className="lg:col-span-2 rounded-[32px] overflow-hidden h-[400px] lg:h-auto bg-gray-200 dark:bg-gray-900 flex items-center justify-center shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.241324707297!2d2.471096575850937!3d6.362938293627768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023559f3bac5445%3A0xfc92304e5de70066!2sLash%20and%20brows!5e0!3m2!1sen!2sng!4v1712911234567!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Divider */}
      <div className="h-1.5 w-full bg-primary/60"></div>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white pt-20 pb-10 relative border-t border-gray-200 dark:border-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://i.ibb.co/KjjmHHHC/lash-brows-service-logo-LE-auto-x4.jpg" alt="Lash & Brows Logo" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                <span className="font-semibold text-xl tracking-tight text-primary font-heading">LASH&BROWS <span className="text-gray-900 dark:text-white font-medium">NEAR YOU</span></span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md text-base font-medium">
                Experte mobile premium en extensions de cils et sourcils à Cotonou. Transforme la beauté et renforce la confiance depuis 2021.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:-translate-y-1 hover:bg-orange-50 dark:hover:bg-[#F5E6D3]/10 transition-all duration-300">
                  <Instagram className="w-5 h-5 text-pink-500" />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:-translate-y-1 hover:bg-orange-50 dark:hover:bg-[#F5E6D3]/10 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:-translate-y-1 hover:bg-orange-50 dark:hover:bg-[#F5E6D3]/10 transition-all duration-300">
                  <Play className="w-5 h-5 text-red-500 fill-red-500" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-black mb-6 font-heading uppercase tracking-wider text-gray-900 dark:text-white">LIENS RAPIDES</h4>
              <ul className="space-y-4 font-bold text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#home" className="hover:text-primary transition-colors uppercase">ACCUEIL</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors uppercase">À PROPOS</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors uppercase">SERVICES</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors uppercase">GALERIE</a></li>
                <li><a href="#training" className="hover:text-primary transition-colors uppercase">FORMATION</a></li>
                <li><a href="#booking" className="hover:text-primary transition-colors uppercase">RÉSERVATIONS</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors uppercase">CONTACT</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-black mb-6 font-heading uppercase tracking-wider text-gray-900 dark:text-white">INFOS DE CONTACT</h4>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-bold text-sm uppercase">TÉLÉPHONE</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1"><a href="tel:+2290161205830" className="hover:text-primary transition-colors">+229 01 61 20 58 30</a></p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-bold text-sm uppercase">WHATSAPP</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1"><a href="https://wa.me/2290190083461" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">+229 01 90 08 34 61</a></p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-bold text-sm uppercase">EMPLACEMENT</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Cotonou, Benin Republic</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">&copy; {new Date().getFullYear()} LASH AND BROWS NEAR YOU. TOUS DROITS RÉSERVÉS.</p>
            <p className="text-primary text-xs font-bold">Cooked by Digital Chukwudi</p>
          </div>
        </div>
        
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-50 border ${isDarkMode ? 'bg-white border-gray-200' : 'bg-black border-gray-800'}`}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6 text-black" />
          ) : (
            <Moon className="w-6 h-6 text-white" />
          )}
        </button>
      </footer>
    </div>
  );
}
