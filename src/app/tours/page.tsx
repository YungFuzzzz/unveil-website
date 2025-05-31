'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Menu, X, MapPin, Star, Headphones } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const tours = [
  {
    id: 1,
    title: 'Mechelen & the Holocaust',
    location: 'Kazerne Dossin, Mechelen',
    rating: 4.2,
    duration: '60–75 min',
    audio: true,
    route: ['Start at Kazerne Dossin', 'Zwartzustersvest', 'City center', 'End at Grote Markt'],
    image: '/holocaust-image.png',
  },
  {
    id: 2,
    title: 'The Dijle',
    location: 'Dijlepad & Surroundings',
    rating: 3.6,
    duration: '45–60 min',
    audio: true,
    route: ['Start at Dijlepad', 'Lamot site', 'Vismarkt', 'End at the Botanical Garden'],
    image: '/dijle-image.png',
  },
  {
    id: 3,
    title: 'Monuments of Mechelen',
    location: 'Historic Core of Mechelen',
    rating: 4.8,
    duration: '75–90 min',
    audio: true,
    route: ["Start at St. Rumbold's Tower", 'IJzerenleen', 'Kruidtuin', 'End at Hof van Busleyden'],
    image: '/monument-image.png',
  },
];



export default function ToursPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [customIcon, setCustomIcon] = useState<L.Icon | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    import('leaflet').then(L => {
      setCustomIcon(
        new L.Icon({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        })
      );
    });
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isClient]);

  if (!isClient || !customIcon) return null;

  return (
    <main className="min-h-screen bg-[#2f2f2f] text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="relative p-4 bg-[#252525] border-b border-[#444] z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/Logo.svg" alt="Logo" width={45} height={40} className="h-13 ml-8 mr-16" />
            </Link>
            <ul className="hidden lg:flex space-x-12 font-bold">
              {[{ name: 'Home', href: '/' }, { name: 'About Us', href: '/about' }, { name: 'Our Tours', href: '/tours' }, { name: 'Pricing', href: '/pricing' }, { name: 'Contact', href: '/contact' }].map((item, idx) => (
                <li key={idx} className="relative group">
                  <Link href={item.href} className="text-white hover:text-[#5CD4FF]">
                    {item.name}
                    <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#5CD4FF] origin-left transform transition-transform ${pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </Link>
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
          <div className="lg:hidden pr-4">
            <button onClick={() => setMenuOpen(true)} aria-label="Open Menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40">
          <motion.aside
            className="fixed left-0 top-0 bottom-0 w-3/4 max-w-sm bg-[#2a2a2a] p-8 flex flex-col justify-between shadow-2xl"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-end mb-6">
              <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-lg font-semibold">
              {[{ name: 'Home', href: '/' }, { name: 'About Us', href: '/about' }, { name: 'Our Tours', href: '/tours' }, { name: 'Pricing', href: '/pricing' }, { name: 'Contact', href: '/contact' }].map((item, idx) => (
                <div key={idx} className="relative group">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`relative text-white hover:text-[#5CD4FF] ${pathname === item.href ? 'text-[#5CD4FF]' : ''}`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#5CD4FF] origin-left transform transition-transform ${
                        pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                </div>
              ))}
            </nav>
            <button className="w-full py-3 mt-10 rounded-md bg-[#5CD4FF] font-bold hover:bg-white hover:text-black">
              Unveil app
            </button>
          </motion.aside>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-[#1f1f1f] text-white px-4 md:px-16 py-35 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-32">
          <motion.h2 className="text-5xl md:text-6xl font-extrabold" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Our tours
          </motion.h2>
          <motion.p className="text-lg md:text-xl text-white max-w-2xl mx-auto mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Uncover Mechelen’s hidden stories with immersive audio walks and tours.
          </motion.p>

          {/* Map */}
          <div className="mt-16 w-full h-[500px] rounded-3xl overflow-hidden border border-[#444] shadow-2xl">
            <MapContainer center={[51.0286, 4.4777]} zoom={14} scrollWheelZoom={false} className="w-full h-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
              {tours.map((tour) => (
                <Marker key={tour.id} icon={customIcon} position={[51.0286 + Math.random() * 0.01 - 0.005, 4.4777 + Math.random() * 0.01 - 0.005]}>
                  <Popup>
                    <strong>{tour.title}</strong>
                    <br />
                    {tour.location}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Tours List */}
        <div className="space-y-48 max-w-screen-xl mx-auto">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} gap-16 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2 w-full">
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden">
                  <Image src={tour.image} alt={tour.title} fill className="object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2 w-full space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold leading-snug">{tour.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[#5CD4FF]" />
                    {tour.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {tour.rating}
                  </span>
                  <span className="px-3 py-1 bg-[#2a2a2a] border border-[#444] rounded-full">{tour.duration}</span>
                  {tour.audio && (
                    <span className="px-3 py-1 bg-[#2a2a2a] border border-[#444] text-[#5CD4FF] rounded-full flex items-center gap-1">
                      <Headphones className="w-4 h-4" /> Audio
                    </span>
                  )}
                </div>
                <div className="bg-[#222] p-6 rounded-2xl border border-[#333]">
                  <h4 className="text-sm font-semibold text-[#5CD4FF] mb-4">Route</h4>
                  <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                    {tour.route.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
