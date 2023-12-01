import React from 'react';
// import './AutoScrollSlider.css'; // Import the CSS file

const images = [
    '/champions-league.png',
    '/dazn.webp',
    '/LaLiga.png',
    '/moto.png',
    '/bein.png',
    '/champions-league.png',
    '/dazn.webp',
    '/LaLiga.png',
    '/moto.png',
    '/bein.png',
    '/champions-league.png',
    '/dazn.webp',
    '/LaLiga.png',
    '/moto.png',
    '/bein.png',
    '/champions-league.png',
    '/dazn.webp',
    '/LaLiga.png',
    '/moto.png',
    '/bein.png',
    '/champions-league.png',
    '/dazn.webp',
    '/LaLiga.png',
    '/moto.png',
    '/bein.png',
    '/champions-league.png',
    '/dazn.webp',
    '/LaLiga.png',
    '/moto.png',
    '/bein.png',
    '/champions-league.png',
    '/dazn.webp',
    '/LaLiga.png',
    '/moto.png',
    '/bein.png',
    '/champions-league.png',
    '/dazn.webp',
    '/LaLiga.png',
    '/moto.png',
    '/bein.png',
    '/champions-league.png',
    '/dazn.webp',
    '/LaLiga.png',
    '/moto.png',
    '/bein.png',
    // '/_ipx/s_117x60/img/funnel/channels/bein.webp',
    // '/_ipx/s_104x56/img/funnel/channels/moto.svg',
    // '/_ipx/s_72x70/img/funnel/channels/champions-league.svg',
    // '/_ipx/s_70x70/img/funnel/channels/dazn.webp',
    // // '/_ipx/s_106x27/img/funnel/channels/espn.webp',
    // '/_ipx/s_155x50/img/funnel/channels/laliga.webp',
    // '/_ipx/s_152x65/img/funnel/channels/premier-league.webp',
    // '/_ipx/s_117x60/img/funnel/channels/bein.webp',
    // '/_ipx/s_104x56/img/funnel/channels/moto.svg',
    // '/_ipx/s_72x70/img/funnel/channels/champions-league.svg',
    // '/_ipx/s_70x70/img/funnel/channels/dazn.webp',
    // // '/_ipx/s_106x27/img/funnel/channels/espn.webp',
    // '/_ipx/s_155x50/img/funnel/channels/laliga.webp',
    // '/_ipx/s_152x65/img/funnel/channels/premier-league.webp',
    // '/_ipx/s_70x70/img/funnel/channels/dazn.webp',
    // // '/_ipx/s_106x27/img/funnel/channels/espn.webp',
    // '/_ipx/s_155x50/img/funnel/channels/laliga.webp',
    // '/_ipx/s_152x65/img/funnel/channels/premier-league.webp',
    // '/_ipx/s_117x60/img/funnel/channels/bein.webp',
    // '/_ipx/s_104x56/img/funnel/channels/moto.svg',
    // '/_ipx/s_72x70/img/funnel/channels/champions-league.svg',
    // '/_ipx/s_70x70/img/funnel/channels/dazn.webp',
    // // '/_ipx/s_106x27/img/funnel/channels/espn.webp',
    // '/_ipx/s_155x50/img/funnel/channels/laliga.webp',
    // '/_ipx/s_152x65/img/funnel/channels/premier-league.webp',
    // '/_ipx/s_70x70/img/funnel/channels/dazn.webp',
    // '/_ipx/s_106x27/img/funnel/channels/espn.webp',
    // '/_ipx/s_155x50/img/funnel/channels/laliga.webp'
];

const AutoScrollSlider = () => {
  return (
    <div className="slider">
      <div
        className='slide-track'
      >
        {images.map((image, i) => (
          <div
            className='slider'
            key={i}
          >
            <img key={i} src={image} alt={`Slide ${i + 1}`} className="slider-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollSlider;