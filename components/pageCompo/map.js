import React, { useEffect, useState,useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import CountryFlag from 'react-country-flag';
import { useInView } from 'react-intersection-observer';
import { translations } from '../../data/translation';
import { push } from "@socialgouv/matomo-next";

const language = process.env.NEXT_PUBLIC_LANGUAGE


const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60000);
  const seconds = ((duration % 60000) / 1000).toFixed(0);
  return ` after ${minutes}min${seconds}s`;
};

const countries = [
    {
      name: 'canada',
      channels: 350,
      topPercentage: 10,
      leftPercentage: 10,
      code: 'CA',
    },
    {
      name: 'usa',
      channels: 800,
      topPercentage: 35,
      leftPercentage: 10,
      code: 'US',
    },
    {
      name: 'mexico',
      channels: 220,
      topPercentage: 60,
      leftPercentage: 17,
      code: 'MX',
    },
    {
      name: 'europe',
      channels: 700,
      topPercentage: 15,
      leftPercentage: 35,
      code: 'EU',
    },
    {
      name: 'emirate',
      channels: 400,
      topPercentage: 35,
      leftPercentage: 35,
      code: 'AE',
    },
    {
      name: 'nigeria',
      channels: 350,
      topPercentage: 55,
      leftPercentage: 45,
      code: 'NG',
    },
    {
      name: 'russia',
      channels: 350,
      topPercentage: 15,
      leftPercentage: 60,
      code: 'RU',
    },
    {
      name: 'japan',
      channels: 350,
      topPercentage: 45,
      leftPercentage: 70,
      code: 'JP',
    },
    {
      name: 'australia',
      channels: 350,
      topPercentage: 65,
      leftPercentage: 75,
      code: 'AU',
    },
  ];


const getRandomIncrement = () => Math.floor(Math.random() * 3) + 1; // Returns 1, 2, or 3

const AnimatedMap = (props) => {
  // const { ref, inView } = useInView({
  //   threshold: 0,
  // });
  const {
    isMobileView
  }=props
  // const [countries,setCoun]
  const [imageLoaded, setImageLoaded] = useState(false);
  const [updatedChannels, setUpdatedChannels] = useState([...countries]);

  const scalingCountryIndexRef = useRef(null);
  const [activeIndexs, setActiveIndexs] = useState([]);

  const handleUpdatedChannels = (index) => {
    // Check if the index is not already in the array
    if (!activeIndexs.includes(index)) {
      // Add the index to the array
      setActiveIndexs((prevIndexes) => [...prevIndexes, index]);

      // Wait for 1 second and then remove the index
      setTimeout(() => {
        setActiveIndexs((prevIndexes) => prevIndexes.filter((i) => i !== index));
      }, 1000);
    }
  };
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setActiveIndexs([])
      setUpdatedChannels((prevChannels) => {
        const channelsToUpdate = getRandomInt(1, 3); // Random number between 1 and 3 (inclusive)
        const updatedChannels = [...prevChannels];
  
        // Create an array to track which indexes have been updated
        const updatedIndexes = [];
  
        for (let i = 0; i < channelsToUpdate; i++) {
          let randomIndex;
          
          // Find a unique random index that hasn't been updated yet
          do {
            randomIndex = getRandomInt(0, prevChannels.length - 1);
          } while (updatedIndexes.includes(randomIndex));
  
          updatedIndexes.push(randomIndex);
  
          // Update the channels for the selected country
          const randomIncrement = getRandomIncrement();
          updatedChannels[randomIndex] = {
            ...prevChannels[randomIndex],
            channels: Math.min(prevChannels[randomIndex].channels + randomIncrement, 1000),
          };
  
          // Add the index to activeIndexs
          setActiveIndexs((prevIndexes) => [...prevIndexes, randomIndex]);
        }
  
        return updatedChannels;
      });
    }, 3000);
  
    return () => clearInterval(updateInterval);
  }, []);
  
  const divName = "Map"
  const { ref, inView, entry } = useInView({
      threshold: !isMobileView ? 1 : 0.5,
  });
  const [viewStartTime, setViewStartTime] = useState(null);
  const [viewDuration, setViewDuration] = useState(0);
  const [isCountdownStarted, setIsCountdownStarted] = useState(false);
  useEffect(() => {
      // When the div enters the view, start the timer
      if (inView) {
        if (!isCountdownStarted) {
          setIsCountdownStarted(true);
          setTimeout(() => {
            if (inView) {
              setViewStartTime(Date.now());
              push(['trackEvent', 'View', 'Started Viewing', divName]);
            }
          }, 1000); // One-second countdown
        }
      } else {
        setIsCountdownStarted(false);
        // When the user exits the view, calculate the view duration
        if (viewStartTime) {
          const endTime = Date.now();
          const duration = endTime - viewStartTime;
          setViewDuration(duration);
  
          if (duration >= 1000) {
            const formattedDuration = formatDuration(duration);
            push(['trackEvent', 'View', 'Quit Viewing', divName + formattedDuration, duration]);
          }
          
          setViewStartTime(null); // Reset the start time
        }
      }
    }, [inView, isCountdownStarted, divName]);
  
  return (
    <>
      <div ref={ref} className="image-containerX">
        <LazyLoadImage
          src="/world.webp"
          alt="map"
          className="custom-img"
          threshold={100}
          visibleByDefault={true}
          onLoad={() => setImageLoaded(true)}
          placeholder={
            <span
              style={{
                height: '250px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                color: 'white',
              }}
            >
              <FontAwesomeIcon icon={faSpinner} className="fa-spin-pulse fa-spin-reverse" />
            </span>
          }
        />
        {updatedChannels.map((obj, index) => (
          <div
            key={index}
            className="dot"
            style={{
              background : activeIndexs.includes(index) ? "#52c952" : "white",
              top: `${obj.topPercentage}%`,
              border : "0",
              left: `${obj.leftPercentage}%`,
              transform: inView ? `${activeIndexs.includes(index) ? 'scale(1.2)' : 'scale(1)'}` : 'scale(0)',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: '7px',
                fontWeight: 700,
                alignItems: 'center',
                gap: '10px',
                color : activeIndexs.includes(index) ? "white" : "black",
              }}
            >
              <CountryFlag countryCode={obj.code} svg />
              <span>+ {obj.channels} {translations[language].channels}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimatedMap;
