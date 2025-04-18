'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function PrivacyPage() {
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

  return (
    <main className="min-h-screen bg-[#252525] text-white overflow-x-hidden">
      {/* Navigatie */}
      <nav className="relative p-4 bg-[#252525] border-b border-[#333] z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <img src="/Logo.svg" alt="Logo" className="h-13 ml-8 mr-16" />
            </a>

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

      {/* Privacy Policy Content */}
      <section className="flex justify-center items-start bg-[#1a1a1a] text-white py-16">
        <div className="max-w-4xl px-8 text-white">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Legal Notice</h2>
          <p className="text-lg mb-6">
            Unveil is a registered company, providing guided tours in Mechelen, Belgium. By accessing our website and services, you agree to comply with the terms of use and the privacy policies outlined here, in accordance with the General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679) and other applicable privacy laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy</h2>
          <p className="text-lg mb-6">
            We respect your privacy and are committed to protecting your personal data. Personal data, as defined by Article 4 of the GDPR, refers to any information that relates to an identified or identifiable natural person. This includes your name, email address, payment information, and other details that you provide to us voluntarily.
          </p>
          <p className="text-lg mb-6">
            All personal data collected through our website will be processed in accordance with the GDPR and other relevant laws, and will only be used for the purposes of providing our services, including but not limited to booking tours, processing payments, and sending confirmations or updates related to the services you request. Personal data will not be shared with third parties without your explicit consent, except where required by law.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookie Policy</h2>
          <p className="text-lg mb-6">
            We use cookies to enhance your experience on our website. By continuing to browse, you consent to our use of cookies, as described in our Cookie Policy. Cookies are small text files stored on your device that help us analyze how our site is used and allow us to improve its functionality.
          </p>
          <p className="text-lg mb-6">
            You can control the use of cookies by adjusting your browser settings. However, please note that some features of our website may not function properly if cookies are disabled. For detailed information on how we use cookies and how you can manage them, please review our full Cookie Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Ethical Guidelines</h2>
          <p className="text-lg mb-6">
            Unveil is committed to adhering to ethical guidelines that ensure our tours provide an honest, educational, and respectful portrayal of the history and culture of Mechelen. This commitment includes promoting cultural sensitivity and accuracy in all information provided during our tours.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights Under GDPR</h2>
          <p className="text-lg mb-6">
            Under the GDPR, you have various rights regarding the processing of your personal data, including:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li><strong>Right of Access:</strong> You have the right to access the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You can request that we correct any inaccurate or incomplete personal data.</li>
            <li><strong>Right to Erasure:</strong> You can request that we delete your personal data under certain conditions (e.g., if the data is no longer necessary for the purposes it was collected for).</li>
            <li><strong>Right to Restriction of Processing:</strong> You can request that we restrict the processing of your personal data in certain circumstances.</li>
            <li><strong>Right to Object:</strong> You can object to the processing of your personal data for specific reasons, including direct marketing.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Need Help? Connect With Us Instantly!</h2>
          <p className="text-lg mb-6">
  If you have any questions about our privacy policy, your rights under GDPR, or need assistance with your data, please contact us at <a href="mailto:team@unveil.be" className="text-[#5CD4FF]">team@unveil.be</a>.
</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How to Delete Your Account</h2>
          <p className="text-lg mb-6">
  If you wish to delete your account and all associated personal data, please send an email to our support team at <a href="mailto:team@unveil.be" className="text-[#5CD4FF]">team@unveil.be</a> with the subject "Request to Delete My Account". We will process your request in compliance with applicable data protection laws.
</p>
        </div>
      </section>
    </main>
  );
}
