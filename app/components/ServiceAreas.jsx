const citiesLeft = [
  'Shoreview, MN', 'Apple Valley, MN', 'Plymouth, MN', 'Bloomington, MN',
  'Eagan, MN', 'Burnsville, MN', 'White Bear Lake, MN', 'Richfield, MN', 'Maple Grove, MN',
];

const citiesRight = [
  'New Brighton, MN', 'Mounds View, MN', 'Roseville, MN', 'Brooklyn Park, MN',
  'St. Paul, MN', 'Eden Prairie, MN', 'Minneapolis, MN', 'Maplewood, MN', 'Woodbury, MN',
];

export default function ServiceAreas() {
  return (
    <section className="service-areas" id="service-areas">
      <div className="sa-map-layer">
        <div id="saMap" aria-label="Service area map"></div>
      </div>
      <div className="sa-content wrap">
        <div className="sa-left">
          <p className="eyebrow-gray">Where We Work</p>
          <h2>
            WE SERVE THE ENTIRE TWIN CITIES METRO{' '}
            <span className="text-orange">FROM MINNEAPOLIS AND ST.&nbsp;PAUL TO MAPLE GROVE,</span>
            <br /><span className="text-orange">WOODBURY, EDEN PRAIRIE,</span>
            <br />AND EVERYWHERE IN BETWEEN.
          </h2>
          <div className="city-cols">
            <div>
              {citiesLeft.map((city) => (
                <button key={city} className={`city-btn${city === 'Shoreview, MN' ? ' active' : ''}`} data-location={city}>
                  {city.toUpperCase()}
                </button>
              ))}
            </div>
            <div>
              {citiesRight.map((city) => (
                <button key={city} className="city-btn" data-location={city}>
                  {city.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <a href="/contact-us" className="btn-sa">VIEW OUR SERVICE AREA</a>
        </div>
      </div>
    </section>
  );
}
