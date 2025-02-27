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
        <button className="px-4 py-2 rounded-md text-white font-black" style={{ backgroundColor: '#5CD4FF' }}>
          Unveil App
        </button>
      </nav>
      <div className="relative w-full">
        <img src="/hero-image.png" alt="Hero" className="w-full" style={{filter: 'blur(5px)'}} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Listen, Discover, Experience</h1>
          <h3 className="text-xl md:text-2xl mt-4">Explore Mechelen at your own pace</h3>
          <button className="mt-6 px-6 py-3 rounded-md text-white font-black" style={{ backgroundColor: '#5CD4FF' }}>
            Discover Now
          </button>
        </div>
      </div>
    </div>
  );
}