function LandingPage() {
  return (
    <section className="landingPageBody">
      <header className="landing-header">
        <div className="header-container">
          <div className="logo-container">
            <img src="/logo.png" className="logo" />
            <h1>Arizona Tree</h1>
          </div>
          <div className="links-container">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Map</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="desciption-section mb-24">
        <div className="description-container">
          <div className="information-container">
            <h2>Why Trees?</h2>
            <div className="information">
              <p>
                Studies found that increasing tree canopy cover from the current
                level of about 10 percent to 25 percent could reduce the
                temperature of a typical Phoenix neighborhood by 4.3 degrees
                Fahrenheit.
              </p>

              <a href="/Home">
                <button>View Map</button>
              </a>
            </div>
          </div>
          <div className="w-[48%] ml-auto p-2 bg-white rounded-2xl">
            <img src="/lander.jpg" className="main-image" />
          </div>
        </div>
      </div>

      <div className="types-section">
        <h3>Benefits of planting trees in urban areas</h3>
        <div className="types-container mt-12">
          <div>
            <img src="/temp.jpg" className="card" />
            <h4>Temperature</h4>
            <p>
              Trees help fight climate change by removing carbon from the
              atmosphere and improving air quality. They also help reduce the
              urban heat island effect by providing shade and reflecting
              sunlight.
            </p>
          </div>
          <div>
            <img src="animals.jpg" className="card" />
            <h4>Animal Biodiversity</h4>
            <p>
              Trees provide food, protection, and homes for many species of
              birds and mammals, including nearly one third of federally
              threatened and endangered species.
            </p>
          </div>
          <div>
            <img src="water.jpg" className="card" />
            <h4>Storm ruuoff</h4>
            <p>
              Trees reduce the amount of storm water runoff, which can help
              reduce erosion and pollution in waterways and the effects of
              flooding.
            </p>
          </div>
        </div>
      </div>

      <div className="quote-section">
        <div className="quote-container">
          <p>
            Planting a tree is more than nurturing nature; it's an investment in
            a healthier, more sustainable future for our planet.
          </p>
        </div>
      </div>

      <div className="popup-section">
        <div className="popup-container">
          <div className="action">
            <p className="get-yours">Learn more now!</p>
            <p className="shop-now">
              Click here to view our map of tree canopy coverage.
            </p>
          </div>
          <div className="click-now">
            <button>View Map</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
