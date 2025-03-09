import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#252525] text-white">
      <nav className="flex items-center justify-between p-4 bg-#252525">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-13 ml-8 mr-16" />
          <ul className="flex space-x-12">
            <li>
              <a href="#tours" className="hover-underline-animation font-bold">
                Tours
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover-underline-animation font-bold"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="hover-underline-animation font-bold"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="#trip-planner"
                className="hover-underline-animation font-bold"
              >
                Trip Planner
              </a>
            </li>
            <li>
              <a href="#faq" className="hover-underline-animation font-bold">
                Faq
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover-underline-animation font-bold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          className="px-4 mr-10 py-2 rounded-md text-white font-bold"
          style={{ backgroundColor: "#5CD4FF" }}
        >
          Unveil App
        </button>
      </nav>

      <div className="relative w-full">
        <img
          src="/hero-image.png"
          alt="Hero"
          className="w-full"
          style={{ filter: "blur(5px)" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Listen, Discover, Experience
          </h1>
          <h3 className="text-xl md:text-2xl mt-6">
            Explore Mechelen at your own pace
          </h3>
          <button
            className="mt-16 px-6 py-3 rounded-md text-white font-bold"
            style={{ backgroundColor: "#5CD4FF" }}
          >
            Discover Now
          </button>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold">Our Tours</h2>
        <div className="flex justify-center mt-8 space-x-24">
          <div className="w-1/3">
            <img src="/tour1.svg" alt="Tour 1" className="w-full" />
            <h3 className="text-2xl font-bold mt-4 text-left">
              Mechelen & the Holocaust
            </h3>
            <p className="mt-2 text-left">
              Discover the poignant stories of the Holocaust in Mechelen.
              Experience history, honor the victims, and be moved by the power
              of remembrance.
            </p>
          </div>
          <div className="w-1/3">
            <img src="/tour2.svg" alt="Tour 2" className="w-full" />
            <h3 className="text-2xl font-bold mt-4 text-left">
              The Dijle: Mirror of Mechelen
            </h3>
            <p className="mt-2 text-left">
              From historic trade route to modern connector, discover how this
              river has shaped and reflected the city's story through the ages.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-12 px-4 md:px-12">
        <img
          src="/wide-image.svg"
          alt="Wide Image"
          className="w-full mx-auto rounded-md"
          style={{ maxWidth: "calc(100% - 370px)" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Explore Mechelen
          </h1>
          <button
            className="mt-6 px-6 py-3 rounded-md text-white font-bold"
            style={{ backgroundColor: "#5CD4FF" }}
          >
            Explore now
          </button>
        </div>
      </div>

      <section id="top-picks" className="mt-12 px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Unveil top picks</h2>
          <p className="mt-4 text-lg">
            Unveil Mechelen like never before: where surprises await, history
            comes alive, and every corner tells a unique story!
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <div className="rounded-lg bg-[#5CD4FF] flex w-[195.11px] h-[42px] justify-center items-center">
            Self-Guided Tour
          </div>
          <div className="rounded-lg bg-[#5CD4FF] flex w-[195.11px] h-[42px] justify-center items-center">
            Mechelen & the Holocaust
          </div>
          <div className="rounded-lg bg-[#5CD4FF] flex w-[195.11px] h-[42px] justify-center items-center">
            The Dijle
          </div>
        </div>

        <div className="flex justify-center space-x-8 mt-12">
          {/* Card 1: Mechelen & the Holocaust */}
          <div
            style={{
              width: "421.33px",
              height: "587.98px",
              flexShrink: 0,
              borderRadius: "16px",
              background: "#444",
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.15)",
            }}
            className="p-4"
          >
            <img
              src="/holocaust-image.png"
              alt="Mechelen & the Holocaust"
              className="w-full rounded-t-md"
            />
            <div className="flex items-center justify-between mt-4">
              <div
                style={{
                  borderRadius: "8px",
                  background: "#FFF",
                  display: "flex",
                  padding: "7px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                }}
                className="w-auto max-w-full"
              >
                <span className="text-black uppercase">Self-Guided Tour</span>
              </div>
              <div className="flex items-center">
                <img
                  src="/rating-star.svg"
                  alt="Star"
                  className="w-4 h-4 mr-1"
                />
                <span>5.0</span>
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-bold">
              Mechelen & the Holocaust
            </h3>
            <p className="500 mt-1" style={{ color: "#5CD4FF" }}>
              Mechelen
            </p>
            <p className="mt-2">
              Discover the poignant stories of the Holocaust in Mechelen.
              Experience history, honor the victims, and be moved by the power
              of remembrance.
            </p>
            <button
              className="mt-4 px-6 py-2 rounded-md font-bold text-white uppercase"
              style={{ backgroundColor: "#5CD4FF" }}
            >
              Experience
            </button>
          </div>

          {/* Card 2: The Dijle: Mirror of Mechelen */}
          <div
            style={{
              width: "421.33px",
              height: "587.98px",
              flexShrink: 0,
              borderRadius: "16px",
              background: "#444",
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.15)",
            }}
            className="p-4"
          >
            <img
              src="/dijle-image.png"
              alt="The Dijle: Mirror of Mechelen"
              className="w-full rounded-t-md"
            />
            <div className="flex items-center justify-between mt-4">
              <div
                style={{
                  borderRadius: "8px",
                  background: "#FFF",
                  display: "flex",
                  padding: "7px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                }}
                className="w-auto max-w-full"
              >
                <span className="text-black uppercase">Self-Guided Tour</span>
              </div>
              <div className="flex items-center">
                <img
                  src="/rating-star.svg"
                  alt="Star"
                  className="w-4 h-4 mr-1"
                />
                <span>5.0</span>
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-bold">
              The Dijle: Mirror of Mechelen
            </h3>
            <p className="500 mt-1" style={{ color: "#5CD4FF" }}>
              Mechelen
            </p>

            <p className="mt-2">
              From historic trade route to modern connector, discover how this
              river has shaped and reflected the city&apos;s story through the
              ages.
            </p>
            <button
              className="mt-4 px-6 py-2 rounded-md font-bold text-white uppercase"
              style={{ backgroundColor: "#5CD4FF" }}
            >
              Experience
            </button>
          </div>

          {/* Card 3: The Monuments: Silent guardians of Mechelen */}
          <div
            style={{
              width: "421.33px",
              height: "587.98px",
              flexShrink: 0,
              borderRadius: "16px",
              background: "#444",
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.15)",
            }}
            className="p-4"
          >
            <img
              src="/monument-image.png"
              alt="The Monuments: Silent guardians of Mechelen"
              className="w-full rounded-t-md"
            />
            <div className="flex items-center justify-between mt-4">
              <div
                style={{
                  borderRadius: "8px",
                  background: "#FFF",
                  display: "flex",
                  padding: "7px 12px",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                }}
                className="w-auto max-w-full"
              >
                <span className="text-black uppercase">Self-Guided Tour</span>
              </div>
              <div className="flex items-center">
                <img
                  src="/rating-star.svg"
                  alt="Star"
                  className="w-4 h-4 mr-1"
                />
                <span>5.0</span>
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-bold">
              The Monuments: Silent guardians of Mechelen
            </h3>
            <p className="500 mt-1" style={{ color: "#5CD4FF" }}>
              Mechelen
            </p>
            <p className="mt-2">
              In the heart of Mechelen, the monuments rise as silent witnesses
              to a rich past.
            </p>
            <button
              className="mt-4 px-6 py-2 rounded-md font-bold text-white uppercase"
              style={{ backgroundColor: "#5CD4FF" }}
            >
              Experience
            </button>
          </div>
        </div>
      </section>

      <div className="relative w-full mt-12 px-4 md:px-12">
        <img
          src="/closer-look.png"
          alt="Wide Image"
          className="w-full mx-auto rounded-md"
          style={{ maxWidth: "calc(100% - 370px)" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl md:text-6xl font-bold text-white">
            Take a closer look
          </h1>
          <button
            className="mt-6 px-6 py-3 rounded-md text-white font-bold flex items-center"
            style={{ backgroundColor: "#5CD4FF" }}
          >
            Watch the Overview
            <img src="/video-play.svg" alt="arrow" className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      <section id="download" className="mt-12 flex flex-col items-center">
        <div className="flex items-center justify-center mt-8 space-x-[150px]">
          {/* Smartphone mockup */}
          <div
            className="w-[518px] h-[1022px] bg-cover bg-center"
            style={{ backgroundImage: "url(/audio-screen.png)" }}
          />
          {/* Rechter QR code met titel */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-center font-nunito text-6xl font-bold leading-tight mb-32">
              Download Now
            </h3>
            <div
              className="w-[391px] h-[391px] rounded-[27px] bg-cover bg-center"
              style={{ backgroundImage: "url(/qr-code.png)" }}
            />
          </div>
        </div>
      </section>
      <section id="image-slider" className="mt-12 overflow-x-auto mb-28">
        <div className="flex gap-4 px-4">
          <img
        src="/image-slider.png"
        alt="Image 1"
        className="w-[80vw] sm:w-[40vw] md:w-[20vw] lg:w-[13vw] h-auto flex-shrink-0 rounded-[25px]"
          />
          <img
        src="/image-slider.png"
        alt="Image 2"
        className="w-[80vw] sm:w-[40vw] md:w-[20vw] lg:w-[13vw] h-auto flex-shrink-0 rounded-[25px]"
          />
          <img
        src="/image-slider.png"
        alt="Image 3"
        className="w-[80vw] sm:w-[40vw] md:w-[20vw] lg:w-[13vw] h-auto flex-shrink-0 rounded-[25px]"
          />
          <img
        src="/image-slider.png"
        alt="Image 4"
        className="w-[80vw] sm:w-[40vw] md:w-[20vw] lg:w-[13vw] h-auto flex-shrink-0 rounded-[25px]"
          />
          <img
        src="/image-slider.png"
        alt="Image 5"
        className="w-[80vw] sm:w-[40vw] md:w-[20vw] lg:w-[13vw] h-auto flex-shrink-0 rounded-[25px]"
          />
          <img
        src="/image-slider.png"
        alt="Image 6"
        className="w-[80vw] sm:w-[40vw] md:w-[20vw] lg:w-[13vw] h-auto flex-shrink-0 rounded-[25px]"
          />
          <img
        src="/image-slider.png"
        alt="Image 7"
        className="w-[80vw] sm:w-[40vw] md:w-[20vw] lg:w-[13vw] h-auto flex-shrink-0 rounded-[25px]"
          />
        </div>
      </section>

      <footer className="w-full h-[500px] flex-shrink-0 bg-black text-white px-12 py-8">
        <div className="flex flex-start h-full gap-28 pt-16">
          {/* Unveil beschrijving wrapper */}
          <div className="flex flex-col space-y-6">
            {/* Logo */}
            <img
              src="/unveil-logo.svg"
              alt="Unveil Logo Group"
              className="w-auto"
            />
            {/* Beschrijving */}
            <p className="max-w-sm">
              Uncover the secrets of Mechelen with Unveil - the ultimate way to
              sightsee and explore like a local!
            </p>
            {/* Download images */}
            <div className="flex space-x-4">
              <img
                src="/app-store.png"
                alt="Download on the App Store"
                className="w-auto h-13"
              />
              <img
                src="/play-store.png"
                alt="Download on the Playstore"
                className="w-auto h-13"
              />
            </div>
          </div>

          {/* Rechter kolom met drie divs */}
          <div className="flex space-x-19">
            <div className="flex flex-col space-y-2 mr-38">
              <h3 className="font-bold mb-6">Unveil</h3>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About us</li>
                <li>Destinations</li>
                <li>Blog</li>
                <li>FAQ&apos;s</li>
                <li>Unveil City App</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2 mr-38">
              <h3 className="font-bold mb-6">Quick links</h3>
              <ul className="space-y-2">
                <li>Legal Notice</li>
                <li>Privacy</li>
                <li>Cookie Policy</li>
                <li>Ethical</li>
                <li>
                  Need Help? Connect With Us <br /> Instantly!
                </li>
                <li>How to delete my account</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2 mr-38">
              <h3 className="font-bold mb-6">Socials</h3>
              <ul className="space-y-2">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>TikTok</li>
                <li>Linkedin</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="font-bold text-center w-full bg-black">
          Unveil Thomas More Mechelen | @Team Unveil
        </div>
      </footer>
    </div>
  );
}
