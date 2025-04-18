'use client';

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
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Tours', href: '/tours' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  const plans = [
    {
      name: 'Basic',
      price: '€9,99/mo',
      subtitle: 'or €1.99/day',
      features: [
        '10 tour per month',
        'Essential features like location & timeslots',
        'Email support (response within 48h)',
        'Access to community & guide updates',
        'Personal dashboard with tour history'
      ],
      button: 'Choose basic',
      highlight: false,
      badge: 'Starter'
    },
    {
      name: 'Pro',
      price: '€24,99/mo',
      subtitle: 'or €4.99/day',
      features: [
        'Up to 50 tours per month',
        'Advanced stats & insights',
        'Priority support within 12h',
        'Custom branding & promo page',
        'Access to exclusive events & webinars'
      ],
      button: 'Choose pro',
      highlight: true,
      badge: 'Most popular'
    },
    {
      name: 'Ultimate',
      price: '€49,99/mo',
      subtitle: 'or €9.99/day',
      features: [
        'Unlimited tours per month',
        'All Pro features included',
        '24/7 premium support (chat & phone)',
        'Dedicated account manager',
        'Early access to beta features & updates'
      ],
      button: 'Choose ultimate',
      highlight: false,
      badge: 'Professional'
    }
  ];

  return (
    <main className="min-h-screen bg-[#252525] text-white overflow-x-hidden">
      <nav className="relative p-4 bg-[#252525] border-b border-[#333] z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <img src="/Logo.svg" alt="Logo" className="h-13 ml-8 mr-16" />
            </a>
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
              Try for free
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
      <section className="px-4 py-27 md:py-32 bg-[#1f1f1f] text-white flex justify-center">
        <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
  Our plans
</h2>

          <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
            Flexible, transparent, and surprise-free. A perfect plan for every type of traveler.
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
                  <p className="text-4xl font-extrabold text-[#5CD4FF] mb-1">{plan.price}</p>
                  <p className="text-sm text-white font-normal mb-2">{plan.subtitle}</p>
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
    </main>
  );
}
