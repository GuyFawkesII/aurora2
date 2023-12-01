import { useInView } from 'react-intersection-observer';
import { translations } from '../data/translation';
import React , {useState,useEffect,useRef,createRef} from 'react'
import { push } from "@socialgouv/matomo-next";
import { useRouter } from 'next/router';
const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return ` after ${minutes}min${seconds}s`;
  };

const language = process.env.NEXT_PUBLIC_LANGUAGE


const BestInIndustry = (props) => {
    const {
        isMobileView
    }=props
    const { ref, inView, entry } = useInView({
        threshold: 0.2,
    });
    const router = useRouter()
    const divName = "best in industy"
    const [viewStartTime, setViewStartTime] = useState(null);
    const [viewDuration, setViewDuration] = useState(0);
    const [isCountdownStarted, setIsCountdownStarted] = useState(false);
  
    // Specify your div name
  
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
            ref={ref}
        >
            <div
              style={{
                fontWeight : 900,
                fontSize : "30px",
                width : "100%",
                textAlign : "center",
                color : "black",
                lineHeight: "38px",
                marginBottom: "19px"
              }}
            >
              {translations[language].why_are_we_the_best}
            </div>
            <div
              style={{
                  color : "grey"
              }}
            >
              {translations[language].thebest_des}
            </div>
            <div
              style={{
                width : "100%",
                display : "flex",
                justifyContent : "center",
                marginTop : "31px",
                // paddingBottom : ""
              }}
            >
              <button
                style={{
                  background:"#313ee7",
                  border: 0,
                  padding: "11px 17px",
                  borderRadius: "7px",
                  fontWeight: 800,
                  color : "white"
                }}
                onClick={()=>router.push('/checkout')}
              >
                {translations[language].see_our_pricing_plans}
              </button>
            </div> 
        </div>
    )
}
export default BestInIndustry