'use client';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-[#252525] text-white overflow-x-hidden">
      {/* Navigatie */}
      <nav className="relative p-4 bg-[#252525] border-b border-[#333] z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <Link href="/">
  <Image
    src="/Logo.svg"
    alt="Logo"
    width={45} // Stel de gewenste breedte in
    height={40} // Stel de gewenste hoogte in
    className="h-13 ml-8 mr-16"
  />
</Link>

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-12 font-bold">
              {navLinks.map((item, idx) => (
                <li key={idx} className="relative group">
                  {item.href.startsWith('/') ? (
                    <Link
                      href={item.href}
                      className="text-white transition-colors duration-300 hover:text-white"
                    >
                      {item.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#5CD4FF] transition-transform duration-300 origin-left transform ${
                          pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-white group-hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#5CD4FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop button */}
          <div className="hidden md:block">
            <button className="px-4 mr-10 py-2 rounded-md font-bold text-white bg-[#5CD4FF] hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
              Unveil app
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden pr-4">
            <button onClick={() => setMenuOpen(true)} aria-label="Open Menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
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
                <button onClick={() => setMenuOpen(false)} aria-label="Close Menu" className="text-white hover:text-[#5CD4FF] transition">
                  <X size={32} />
                </button>
              </div>

              <motion.nav className="flex flex-col space-y-6 text-lg font-semibold">
                {navLinks.map((item, idx) => (
                  <motion.div key={idx} className="relative group">
                    {item.href.startsWith('/') ? (
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="relative text-white transition-all"
                      >
                        {item.name}
                        <span
                          className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#5CD4FF] transition-transform duration-300 origin-left transform ${
                            pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="relative text-white transition-all"
                      >
                        {item.name}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#5CD4FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </motion.nav>

              <motion.div
                className="pt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button className="w-full py-3 rounded-md bg-[#5CD4FF] text-white font-bold hover:bg-white hover:text-black transition-all duration-300">
                  Unveil app
                </button>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* CONTACT SECTION */}
      <section className="w-full min-h-screen flex items-center justify-center bg-[#1f1f1f] px-6 py-10">
        <motion.div
          className="w-full max-w-6xl p-12 md:p-20 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
<h2 className="text-5xl md:text-6xl font-extrabold text-center mb-11 text-white">
  Got a question? We&apos;re here
</h2>



          <p className="text-center text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Fill out the form and our team will get back to you shortly.
          </p>

          {/* FORM */}
          <form
            action="https://formspree.io/f/xrbpvkzq"  // Formspree actie-URL
            method="POST"
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="flex flex-col space-y-4">
              <label htmlFor="name" className="text-lg font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-4 rounded-xl bg-[#1f1f1f] border border-[#444] text-white focus:outline-none focus:ring-2 focus:ring-[#5CD4FF] autofill:bg-[#1f1f1f]"
                required
              />
            </div>

            <div className="flex flex-col space-y-4">
              <label htmlFor="email" className="text-lg font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-4 rounded-xl bg-[#1f1f1f] border border-[#444] text-white focus:outline-none focus:ring-2 focus:ring-[#5CD4FF] autofill:bg-[#1f1f1f]"
                required
              />
            </div>

            <div className="md:col-span-2 flex flex-col space-y-4">
              <label htmlFor="message" className="text-lg font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="p-10 rounded-xl bg-[#1f1f1f] border border-[#444] text-white focus:outline-none focus:ring-2 focus:ring-[#5CD4FF]"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 mt-8">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#5CD4FF] text-white text-xl font-bold hover:bg-white hover:text-black transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
