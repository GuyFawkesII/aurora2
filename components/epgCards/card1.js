import Image from 'next/image'
import { translations } from '../../data/translation'
import JoinUs from '../buttons/join_us'
import {useEffect,useState} from 'react'
import { push } from "@socialgouv/matomo-next";
import { useInView } from 'react-intersection-observer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const language = process.env.NEXT_PUBLIC_LANGUAGE

const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return ` after ${minutes}min${seconds}s`;
  };


const EPGCards1 = (props)=> {
    const {
        isMobileView
    }=props
    const divName = "EPG in Most Channels"
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
        <div
        style={{
          marginTop : "2rem",
          width : "100%",
          height : "auto",
          border: "1px solid #e4e4e4",
          padding : isMobileView ? "1rem 0" : "1rem 2rem",
          boxShadow : "0px 0px 4px #e9e9e9",
          borderRadius : "7px"
        }}
        ref={ref}
      >
        <div
          style={{
            display : "grid",
            gridTemplateColumns : isMobileView ? undefined : "50% 50%",
            gridAutoFlow: "dense",
            width : "100%",
            height : "100%",
            alignItems : "center",
            direction: isMobileView ? undefined  : "rtl"
          }}
        >
          <div
            style={{
              padding : isMobileView ? undefined : "0 1rem",
              position : "relative",
              width : "calc(100% - 2rem)",
              height : isMobileView ? "232px" : "338px", 
              margin : "0 1rem"
            }}
          >
                            {/* <Image
                              src="/efg.webp"
                              alt="alit"
                              // alt="Image"
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                            /> */}
                                                <LazyLoadImage
                                                    src="/efg.webp"
                                                    alt="splash_background"
                                                    className="custom-img"
                                                    effect="blur"
                                                    visibleByDefault={true}
                                                    // threshold={100}
                                                    // placeholder={
                                                    //     <span
                                                    //         style={{
                                                    //             height : "250px",
                                                    //             width : "100%",
                                                    //             display : "flex",
                                                    //             alignItems : "center",
                                                    //             justifyContent : "center",
                                                    //             fontSize : "28px",
                                                    //             color : "#013c75"
                                                    //         }}
                                                    //     >
                                                    //         <FontAwesomeIcon icon={faSpinner} className="fa-spin-pulse fa-spin-reverse" />
                                                    //     </span>
                                                    // } // Set the placeholder text
                                                    // other props...
                                                />
          </div>
          <div
            style={{
              display : "grid"
            }}
          >
            <div
              style={{
                padding : "0 1rem",
                fontSize : "30px",
                lineHeight : "30px",
                marginBottom : "1rem",
                textAlign : isMobileView ? undefined : "left"
              }}
            >
              <span
                style={{
                  color : "#05b6fd",
                  // margin : "0 1rem",
                  fontWeight : 800
                  }}
              >EPG</span>
              <span
                style={{
                  color : "#000",
                  fontWeight : 700
                  // margin : "0 1rem"
                  // font
                }}
              >&#160;{translations[language].in_most_channels}</span>
            </div>
            <div
              style={{
                padding : "0 1rem"
              }}
            >
              <p
                style={{
                  fontSize : "15px",
                  lineHeight : "20px",
                  textAlign : isMobileView ? undefined : "left"
                }}
              >
                {translations[language].in_most_channels_descriotion}
                {/* At our IPTV business, we prioritize delivering exceptional features to our valued customers. Among the most sought-after features is the Electronic Program Guide (EPG). From the very beginning, ensuring a comprehensive and up-to-date EPG has been our top priority. We take great pride in our achievements, as we have successfully extended EPG coverage to the majority of our IPTV channels. */}
              </p>
            </div>
            <div
              style={{
                padding : "1rem 1rem 0",
                width : "100%"
              }}
            >
              <JoinUs />
            </div>
          </div>
        </div>
      </div>
    )
}
export default EPGCards1