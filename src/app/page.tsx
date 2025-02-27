import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between p-4 bg-black">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 mr-8" /> {/* Increased margin-right */}
          <ul className="flex space-x-4">
            <li>
              <a href="#tours" className="hover-underline-animation">TOURS</a>
            </li>
            <li>
              <a href="#how-it-works" className="hover-underline-animation">HOW IT WORKS</a>
            </li>
            <li>
              <a href="#reviews" className="hover-underline-animation">REVIEWS</a>
            </li>
            <li>
              <a href="#trip-planner" className="hover-underline-animation">TRIP PLANNER</a>
            </li>
            <li>
              <a href="#faq" className="hover-underline-animation">FAQ</a>
            </li>
            <li>
              <a href="#contact" className="hover-underline-animation">CONTACT</a>
            </li>
          </ul>
        </div>
        <button className="px-4 py-2 rounded-full text-black" style={{ backgroundColor: '#5CD4FF' }}>
          Unveil App
        </button>
      </nav>
    </div>
  );
}