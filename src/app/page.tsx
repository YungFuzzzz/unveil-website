'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [selectedTour, setSelectedTour] = useState('tour1');

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

  useEffect(() => {
    const handleSmoothScroll = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');

      if (href && href.startsWith('#')) {
        event.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false); // close mobile menu after click
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('nav ul li a');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  const scrollToTopPicks = () => {
    const section = document.getElementById('top-picks');
    if (section) {
      const offset = 50;
      const top = section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Tours', href: '/tours' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  

  return (
    <main className="min-h-screen bg-[#252525] text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="relative p-4 bg-[#252525] border-b border-[#333] z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <Link href="/">
  <Image 
    src="/Logo.svg" 
    alt="Logo" 
    width={45} 
    height={22} 
    className="ml-8 mr-16"
  />
</Link>


            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-12 font-bold">
              {navLinks.map((item, idx) => (
                <li key={idx} className="relative group">
                  {item.href.startsWith('#') ? (
                    <a href={item.href} className="text-white transition-colors duration-300 hover:text-white">
                      {item.name}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#5CD4FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                    </a>
                  ) : (
                    <Link href={item.href} className="text-white transition-colors duration-300 hover:text-white">
                      {item.name}
                      <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#5CD4FF] transition-transform duration-300 origin-left transform ${pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </Link>
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
                    {item.href.startsWith('#') ? (
                      <a href={item.href} className="relative text-white transition-all">
                        {item.name}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#5CD4FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                      </a>
                    ) : (
                      <Link href={item.href} onClick={() => setMenuOpen(false)} className="relative text-white transition-all">
                        {item.name}
                        <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#5CD4FF] transition-transform duration-300 origin-left transform ${pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                      </Link>
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


{/* Hero Section */}
<div id="home" className="relative w-full h-screen overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="none"
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/introVideo.webm" type="video/webm" />
    <source src="/introVideo.mp4" type="video/mp4" />
    <p>Je browser ondersteunt geen video.</p>
  </video>

  {/* Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-0">
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
      Listen, discover, experience
    </h1>

    <h3 className="text-2xl md:text-3xl mt-6 text-white">
      Explore Mechelen at your own pace
    </h3>

    <button
      onClick={scrollToTopPicks}
      className="mt-16 px-6 py-3 rounded-md font-bold text-white bg-[#5CD4FF] hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer"
    >
      Discover now
    </button>
  </div>
</div>


      <div className="text-center mt-16 px-6 sm:px-8 md:px-4">
  <h2 className="text-5xl font-bold mb-6">Our tours</h2>

  <div className="flex flex-col md:flex-row justify-center md:justify-center items-center md:items-start mt-12 md:mt-24 space-y-16 md:space-y-0 md:space-x-24">
    {/* Tour 1 */}
    <div className="w-full md:w-1/3">
    <Image
  src="/tour1.2.svg"
  alt="Tour 1"
  width={500} 
  height={500} 
  className="w-full"
/>
      <h3 className="text-2xl font-bold mt-8 text-left">Mechelen & the Holocaust</h3>
      <p className="mt-4 text-left">
        Discover the poignant stories of the Holocaust in Mechelen. Experience history, honor the victims, and be moved by the power of remembrance.
      </p>
    </div>

    {/* Tour 2 */}
    <div className="w-full md:w-1/3">
    <Image 
  src="/tour2.2.svg" 
  alt="Tour 2" 
  width={500} // Set the appropriate width
  height={300} // Set the appropriate height
  className="w-full"
/>
      <h3 className="text-2xl font-bold mt-8 text-left">The Dijle: Mirror of Mechelen</h3>
      <p className="mt-4 text-left">
  From historical trade routes to modern connector, discover how this river has shaped and reflected the city&apos;s story through the ages.
</p>
    </div>
  </div>
</div>

<div className="relative w-full mt-24 px-6 sm:px-8 md:px-4">
  <div className="relative w-full mx-auto rounded-md overflow-hidden md:max-w-[calc(100%-370px)]">
  <Image 
  src="/wide-image.svg" 
  alt="Wide Image" 
  className="w-full object-cover h-[20vh] sm:h-[55vh] md:h-auto" 
  width={1200} // Provide a width for optimization
  height={800} // Provide a height for optimization
/>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
        Explore Mechelen
      </h1>
    </div>
  </div>
</div>



<section id="top-picks" className="mt-19 px-6 md:px-12">
  {/* Titel en beschrijving */}
  <div className="text-center">
    <h2 className="text-4xl md:text-5xl font-bold">Unveil top picks</h2>
    <p className="mt-7 text-base md:text-lg">
      Unveil Mechelen like never before: where surprises await, history comes alive, and every corner tells a unique story!
    </p>
  </div>

  {/* Knoppen */}
  <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0 mt-11">
    <button
      onClick={() => setSelectedTour('tour1')}
      className={`rounded-lg flex w-full md:w-[195.11px] h-[42px] justify-center items-center font-bold cursor-pointer transition-all duration-300 ${
        selectedTour === 'tour1' ? 'bg-white text-black' : 'bg-[#5CD4FF] text-white'
      }`}
    >
      All tours
    </button>

    <button
      onClick={() => setSelectedTour('tour2')}
      className={`rounded-lg flex w-full md:w-[195.11px] h-[42px] justify-center items-center font-bold cursor-pointer transition-all duration-300 ${
        selectedTour === 'tour2' ? 'bg-white text-black' : 'bg-[#5CD4FF] text-white'
      }`}
    >
      The Holocaust
    </button>

    <button
      onClick={() => setSelectedTour('tour3')}
      className={`rounded-lg flex w-full md:w-[195.11px] h-[42px] justify-center items-center font-bold cursor-pointer transition-all duration-300 ${
        selectedTour === 'tour3' ? 'bg-white text-black' : 'bg-[#5CD4FF] text-white'
      }`}
    >
      The Dijle
    </button>
  </div>

  {/* Kaarten */}
  <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0 mt-12">
    {selectedTour === 'tour1' && (
      <>
        <div className="w-full md:w-[421.33px] h-[620.98px] bg-[#444] rounded-2xl shadow-lg p-4">
        <Image 
  src="/holocaust-image.png" 
  alt="Mechelen & the Holocaust" 
  className="w-full rounded-t-md" 
  width={1200} // Provide a width for optimization (adjust based on the image dimensions)
  height={800} // Provide a height for optimization (adjust based on the image dimensions)
  priority // Optional: you can add this if the image is critical and should be loaded immediately
/>
          <div className="flex items-center justify-between mt-4">
            <div className="bg-white rounded-md px-3 py-1">
              <span className="text-black text-sm">Self-Guided Tour</span>
            </div>
            <div className="flex items-center">
            <Image
  src="/rating-star.svg"
  alt="Star"
  className="w-4 h-4 mr-1"
  width={16}  // Adjust width based on the image size
  height={16} // Adjust height based on the image size
/>

              <span className="text-white">4.2</span>
            </div>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white">Mechelen & the Holocaust</h3>
          <p className="mt-1 text-white">Mechelen</p>
          <p className="mt-2 text-white">
            Discover the history of the Holocaust, honoring the lives lost and the lessons we carry forward.
          </p>
          <a
            href="/tours"
            className="mt-12 inline-block px-6 py-2 rounded-md font-bold bg-[#5CD4FF] text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Discover
          </a>
        </div>

        <div className="w-full md:w-[421.33px] h-[580.98px] md:h-[620.98px] bg-[#444] rounded-2xl shadow-lg p-4">
        <Image
  src="/dijle-image.png"
  alt="The Dijle: Mirror of Mechelen"
  className="w-full rounded-t-md"
  width={1200}  // Adjust the width based on the actual image size or layout needs
  height={800}  // Adjust the height based on the actual image size or layout needs
/>
          <div className="flex items-center justify-between mt-4">
            <div className="bg-white rounded-md px-3 py-1">
              <span className="text-black text-sm">Self-Guided Tour</span>
            </div>
            <div className="flex items-center">
            <Image
  src="/rating-star.svg"
  alt="Star"
  className="w-4 h-4 mr-1"
  width={16}  // Adjust width to match the original size or your design
  height={16} // Adjust height to match the original size or your design
/>
              <span className="text-white">3.6</span>
            </div>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white">The Dijle: Mirror of Mechelen</h3>
          <p className="mt-1 text-white">Mechelen</p>
          <p className="mt-2 text-white">
  Discover how the Dijle River has shaped the city&apos;s history.
</p>

          <a
            href="/tours"
            className="mt-12 inline-block px-6 py-2 rounded-md font-bold bg-[#5CD4FF] text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Discover
          </a>
        </div>

        <div className="w-full md:w-[421.33px] h-[620.98px] bg-[#444] rounded-2xl shadow-lg p-4">
        <Image
  src="/monument-image.png"
  alt="The Monuments of Mechelen"
  className="w-full rounded-t-md"
  width={1200}  // Adjust width based on your image's natural size or layout requirements
  height={800}  // Adjust height based on your image's natural size or layout requirements
/>
          <div className="flex items-center justify-between mt-4">
            <div className="bg-white rounded-md px-3 py-1">
              <span className="text-black text-sm">Self-Guided Tour</span>
            </div>
            <div className="flex items-center">
            <Image
  src="/rating-star.svg"
  alt="Star"
  className="w-4 h-4 mr-1"
  width={16}  // Adjust width based on your image's natural size or layout requirements
  height={16}  // Adjust height based on your image's natural size or layout requirements
/>
              <span className="text-white">4.8</span>
            </div>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white">The Monuments of Mechelen</h3>
          <p className="mt-1 text-white">Mechelen</p>
          <p className="mt-2 text-white">
            Discover Mechelen, where monuments tell the story of a city shaped by history and transformation.
          </p>
          <a
            href="/tours"
            className="mt-12 inline-block px-6 py-2 rounded-md font-bold bg-[#5CD4FF] text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Discover
          </a>
        </div>
      </>
    )}

    {selectedTour === 'tour2' && (
      <div className="w-full md:w-[421.33px] h-[620.98px] bg-[#444] rounded-2xl shadow-lg p-4">
      <Image
  src="/holocaust-image.png"
  alt="Mechelen & the Holocaust"
  className="w-full rounded-t-md"
  width={500}  // Set the width according to the image size or layout needs
  height={300} // Set the height according to the image size or layout needs
/>
        <div className="flex items-center justify-between mt-4">
          <div className="bg-white rounded-md px-3 py-1">
            <span className="text-black text-sm">Self-Guided Tour</span>
          </div>
          <div className="flex items-center">
          <Image
  src="/rating-star.svg"
  alt="Star"
  className="w-4 h-4 mr-1"
  width={16}  // Set an appropriate width for the star icon
  height={16} // Set an appropriate height for the star icon
/>
            <span className="text-white">4.2</span>
          </div>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-white">Mechelen & the Holocaust</h3>
        <p className="mt-1 text-white">Mechelen</p>
        <p className="mt-2 text-white">
          Discover the history of the Holocaust, honoring the lives lost and the lessons we carry forward.
        </p>
        <a
          href="/tours"
          className="mt-12 inline-block px-6 py-2 rounded-md font-bold bg-[#5CD4FF] text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Discover
        </a>
      </div>
    )}

    {selectedTour === 'tour3' && (
      <div className="w-full md:w-[421.33px] h-[620.98px] bg-[#444] rounded-2xl shadow-lg p-4">
  <Image
  src="/dijle-image.png"
  alt="The Dijle River Experience"
  className="w-full rounded-t-md"
  width={1200}  // Set an appropriate width
  height={800}  // Set an appropriate height
/>
        <div className="flex items-center justify-between mt-4">
          <div className="bg-white rounded-md px-3 py-1">
            <span className="text-black text-sm">Self-Guided Tour</span>
          </div>
          <div className="flex items-center">
          <Image
  src="/rating-star.svg"
  alt="Star"
  className="w-4 h-4 mr-1"
  width={16}  // Set appropriate width
  height={16} // Set appropriate height
/>
            <span className="text-white">4.8</span>
          </div>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-white">The Dijle River Experience</h3>
        <p className="mt-1 text-white">Mechelen</p>
        <p className="mt-2 text-white">
          Discover Mechelen, where monuments tell the story of a city shaped by history and transformation.
        </p>
        <a
          href="/tours"
          className="mt-12 inline-block px-6 py-2 rounded-md font-bold bg-[#5CD4FF] text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Discover
        </a>
      </div>
    )}
  </div>
</section>

<div className="relative w-full mt-23 px-6.5 sm:px-10 md:px-4">
  <div className="relative w-full mx-auto rounded-md overflow-hidden md:max-w-[calc(100%-320px)]">
  <Image
  src="/closer-look.png"
  alt="Wide Image"
  width={1920} // kies een realistische breedte
  height={1080} // kies een realistische hoogte
  className="w-full object-cover h-[22vh] sm:h-[55vh] md:h-auto"
/>

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 sm:px-10">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
        Take a closer look
      </h1>
    </div>
  </div>
</div>



<section id="download" className="mt-12 flex flex-col items-center">
  <div className="flex flex-col items-center justify-center mt-8 space-y-8 sm:space-y-12 md:space-x-[150px] sm:flex-row sm:space-y-0">
    
    {/* Smartphone mockup */}
    <div className="w-[255px] h-[520px] sm:w-[450px] sm:h-[920px] overflow-hidden relative rounded-[40px] sm:rounded-[75px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover bg-white"
      >
        <source src="/AnimationMobile.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* QR code with title */}
    <div className="flex flex-col items-center space-y-4 sm:space-y-8 mb-15">
      <h3 className="text-white text-center font-nunito text-4xl sm:text-6xl font-bold leading-tight mb-8 sm:mb-12">
        Download now
      </h3>
      <div
        className="w-[210px] sm:w-[391px] h-[210px] sm:h-[391px] rounded-[27px] bg-cover bg-center"
        style={{
          backgroundImage: "url(/qr-code.png)",
          padding: '6.5px',
        }}
      />
    </div>
  </div>  
</section>





<section id="image-slider" className="mt-12 overflow-x-auto mb-18 hidden md:block">
  <div className="flex justify-center gap-4 px-4">
    {Array.from({ length: 7 }).map((_, index) => (
      <div
        key={index}
        className="relative w-[80vw] sm:w-[40vw] md:w-[20vw] lg:w-[13vw] aspect-square flex-shrink-0 overflow-hidden rounded-[25px]"
      >
        <Image
          src={`/image-slider${index + 1}.png`}
          alt={`Image ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 13vw"
        />
      </div>
    ))}
  </div>
</section>




<footer className="w-full h-auto bg-black text-white px-6 md:px-18 py-2 md:py-6 mt-5 md:mt-5">
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
            <li><a href="#home" className="hover-underline-animation">Home</a></li>
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