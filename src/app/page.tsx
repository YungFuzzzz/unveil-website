import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between p-4 bg-#252525">
        <div className="flex items-center">
          <img src="/logo-expanded.svg" alt="Logo" className="h-8 mr-16" />
          <ul className="flex space-x-12">
            <li>
              <a href="#tours" className="hover-underline-animation font-bold">TOURS</a>
            </li>
            <li>
              <a href="#how-it-works" className="hover-underline-animation font-bold">HOW IT WORKS</a>
            </li>
            <li>
              <a href="#reviews" className="hover-underline-animation font-bold">REVIEWS</a>
            </li>
            <li>
              <a href="#trip-planner" className="hover-underline-animation font-bold">TRIP PLANNER</a>
            </li>
            <li>
              <a href="#faq" className="hover-underline-animation font-bold">FAQ</a>
            </li>
            <li>
              <a href="#contact" className="hover-underline-animation font-bold">CONTACT</a>
            </li>
          </ul>
        </div>
        <button className="px-4 py-2 rounded-md text-white font-bold" style={{ backgroundColor: '#5CD4FF' }}>
          Unveil App
        </button>
      </nav>

      <div className="relative w-full">
        <img src="/hero-image.png" alt="Hero" className="w-full" style={{ filter: 'blur(5px)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Listen, Discover, Experience</h1>
          <h3 className="text-xl md:text-2xl mt-4">Explore Mechelen at your own pace</h3>
          <button className="mt-6 px-6 py-3 rounded-md text-white font-bold" style={{ backgroundColor: '#5CD4FF' }}>
            Discover Now
          </button>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold">Our Tours</h2>
        <div className="flex justify-center mt-8 space-x-24">
          <div className="w-1/3">
            <img src="/tour1.svg" alt="Tour 1" className="w-full" />
            <h3 className="text-2xl font-bold mt-4 text-left">Mechelen & the Holocaust</h3>
            <p className="mt-2 text-left">
              Discover the poignant stories of the Holocaust in Mechelen. Experience history, honor the victims, and be moved by the power of remembrance.
            </p>
          </div>
          <div className="w-1/3">
            <img src="/tour2.svg" alt="Tour 2" className="w-full" />
            <h3 className="text-2xl font-bold mt-4 text-left">The Dijle: Mirror of Mechelen</h3>
            <p className="mt-2 text-left">
              From historic trade route to modern connector, discover how this river has shaped and reflected the city's story through the ages.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-12 px-4 md:px-12">
        <img src="/wide-image.svg" alt="Wide Image" className="w-full mx-auto rounded-md" style={{ maxWidth: 'calc(100% - 370px)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Explore Mechelen</h1>
          <button className="mt-6 px-6 py-3 rounded-md text-white font-bold" style={{ backgroundColor: '#5CD4FF' }}>
            Explore now
          </button>
        </div>
      </div>
    </div>
  );
}