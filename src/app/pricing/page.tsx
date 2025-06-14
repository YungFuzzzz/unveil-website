'use client';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, CheckCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about' },   
    { name: 'Our Tours', href: '/tours' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  const plans = [
    {
      name: 'Day pass',
      price: '€1,99/day',
      subtitle: 'Includes full city unlock and access to all tours and soundspots for one day',
      features: [
        'Full city unlocked',
        'All soundspots included',
        'All tours included',
        'Valid for 24 hours',
        'No subscription needed', 
      ],
      button: 'Get day pass',
      highlight: false,
      badge: 'Day pass'
    },
    {
      name: 'Week pass',
      price: '€7,99/week',
      subtitle: 'Includes full city unlock and access to all tours and soundspots for one week',
      features: [
        'Full city unlocked',
        'All soundspots included',
        'All tours included',
        'Valid for 7 days',
        'No subscription needed',
      ],
      button: 'Get week pass',
      highlight: true,
      badge: 'Week pass'
    },
    {
      name: 'City pass',
      price: '€24,99/lifetime',
      subtitle: 'One-time purchase, lifetime access to the complete city and all tours & sound spots',
      features: [
        'Full city unlocked forever',
        'All soundspots included',
        'All tours included',
        'Lifetime access',
        'Early access to beta features'
      ],
      button: 'Get city pass',
      highlight: false,
      badge: 'City pass'
    }
  ];

  return (
    <main className="min-h-screen bg-[#252525] text-white overflow-x-hidden">
      <nav className="relative p-4 bg-[#252525] border-b border-[#333] z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <Link href="/home">
  <Image
    src="/Logo.svg"
    alt="Logo"
    width={45} 
    height={40} 
    className="h-13 ml-8 mr-16"
  />
</Link>
            <ul className="hidden md:flex space-x-12 font-bold">
              {navLinks.map((item, idx) => (
                <li key={idx} className="relative group">
                  <Link
                    href={item.href}
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#5CD4FF] transition-transform duration-300 origin-left transform ${
                        pathname === item.href
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <button className="px-4 mr-10 py-2 rounded-md font-bold text-white bg-[#5CD4FF] hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
              Unveil app
            </button>
          </div>
          <div className="md:hidden pr-4">
            <button onClick={() => setMenuOpen(true)} aria-label="Open Menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="fixed left-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#1a1a1a] z-50 flex flex-col justify-between p-8 shadow-2xl"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close Menu"
                  className="text-white hover:text-[#5CD4FF] transition"
                >
                  <X size={32} />
                </button>
              </div>
              <motion.nav className="flex flex-col space-y-6 text-lg font-semibold">
                {navLinks.map((item, idx) => (
                  <motion.div key={idx} className="relative group">
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="relative text-white transition-all"
                    >
                      {item.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#5CD4FF] transition-transform duration-300 origin-left transform ${
                          pathname === item.href
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
              <motion.div
                className="pt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button className="w-full py-3 rounded-md bg-[#5CD4FF] text-white font-bold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                  Try for free
                </button>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Pricing Section */}
      <section className="px-4 py-28 md:py-32 bg-[#1f1f1f] text-white flex justify-center">
        <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
  Our plans
</h2>

          <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
           A perfect plan for every type of traveler.
          </p>

          <div className="flex flex-col lg:flex-row justify-center gap-10">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex-1 rounded-2xl border bg-[#1b1b1b] p-10 text-left shadow-md hover:shadow-xl transition-all flex flex-col justify-between ${
                  plan.highlight ? 'border-2 border-[#5CD4FF]' : 'border-[#333]'
                }`}
              >
                <div className="text-center pt-6">
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-4xl font-extrabold text-[#5CD4FF] mb-2 whitespace-nowrap">
                      {plan.price.replace(/\//g, ' / ')}
                    </p>
                  <p className="text-sm text-white font-normal mb-3">{plan.subtitle}</p>
                  {plan.badge && (
                    <span className="inline-block text-xs bg-[#333] text-[#5CD4FF] px-3 py-1 rounded-full font-medium mb-6">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <ul className="text-gray-300 text-base space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-[#5CD4FF] min-w-[18px] mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 text-base rounded-md bg-[#5CD4FF] text-white font-semibold hover:bg-white hover:text-black transition cursor-pointer">
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full h-auto bg-black text-white px-6 md:px-18 py-2 md:py-6">
      
          <div className="flex flex-col md:flex-row md:items-start md:gap-48 pt-10 md:pt-16">
            
            {/* Unveil beschrijving wrapper */}
            <div className="flex flex-col space-y-6 items-start text-left mb-10 md:mb-0">
              
              {/* Logo */}
      <Image
        src="/unveil-logo.svg"
        alt="Unveil Logo Group"
        width={160} // Dit is gelijk aan de breedte van w-40 (waarbij 1rem = 16px)
        height={66} // Dit is gelijk aan de hoogte van md:w-66 (wat 16.5rem = 264px is)
        className="w-40 md:w-66" // De class blijft behouden om styling toe te passen
      />
      
              {/* Beschrijving */}
              <p className="max-w-sm pt-2">
                Uncover the secrets of Mechelen. The ultimate way to sightsee and explore like a local!
              </p>
      
              {/* Download images */}
              <div className="flex space-x-4 pt-2 justify-start">
              <Image
        src="/app-store.png"
        alt="Download on the App Store"
        width={120} // Pas dit aan aan hoe breed de afbeelding ongeveer moet zijn
        height={48} // H-12 = 3rem = 48px
        className="w-auto h-12"
      />
      <Image
        src="/play-store.png"
        alt="Download on the Playstore"
        width={120} // Pas dit aan aan hoe breed de afbeelding ongeveer moet zijn
        height={48} // H-12 = 3rem = 48px
        className="w-auto h-12"
      />
              </div>
            </div>
      
            {/* Rechter kolom met drie divs */}
            <div className="flex flex-col md:flex-row md:space-x-39 space-y-10 md:space-y-0 items-start text-left w-full">
              
            <div className="flex flex-col space-y-2 md:space-y-4 md:mr-38">
            <h3 className="font-bold mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li><a href="/home" className="hover-underline-animation">Home</a></li>
                  <li><a href="/about" className="hover-underline-animation">About Us</a></li>
                  <li><a href="/tours" className="hover-underline-animation">Our Tours</a></li>
                  <li><a href="/pricing" className="hover-underline-animation">Pricing</a></li>
                  <li><a href="/contact" className="hover-underline-animation">Contact</a></li>
                </ul>
              </div>
      
              <div className="flex flex-col space-y-2 md:space-y-4 md:mr-38">
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/links" className="hover-underline-animation">Legal Notice</a></li>
                  <li><a href="/links" className="hover-underline-animation">Privacy</a></li>
                  <li><a href="/links" className="hover-underline-animation">Cookie Policy</a></li>
                  <li><a href="/links" className="hover-underline-animation">Ethical</a></li>
                  <li><a href="/links" className="hover-underline-animation">Need Help? Chat with us</a></li>
                  <li><a href="/links" className="hover-underline-animation">How to delete my account</a></li>
                </ul>
              </div>
      
              <div className="flex flex-col space-y-2 md:space-y-4 md:mr-38">
                <h3 className="font-bold mb-4">Socials</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.instagram.com/unveil_mechelen/" target="_blank" rel="noopener noreferrer" className="hover-underline-animation">Instagram</a></li>
                  <li><a href="https://www.facebook.com/unveil.503510/" target="_blank" rel="noopener noreferrer" className="hover-underline-animation">Facebook</a></li>
                  <li><a href="https://www.tiktok.com/@team.unveil8" target="_blank" rel="noopener noreferrer" className="hover-underline-animation">TikTok</a></li>
                  <li><a href="https://www.linkedin.com/company/unveil-mechelen" target="_blank" rel="noopener noreferrer" className="hover-underline-animation">LinkedIn</a></li>
                  <li><a href="https://www.youtube.com/@Team-Unveil" target="_blank" rel="noopener noreferrer" className="hover-underline-animation">YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>
      
          <div className="font-light text-center mt-26 pt-6 border-t border-white/10">
        Unveil Thomas More Mechelen | @Team Unveil
      </div>
      
        </footer>
    </main>
  );
}
