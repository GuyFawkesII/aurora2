import { translations } from "../../../data/translation"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { useState,useEffect } from "react"
import { push } from "@socialgouv/matomo-next";
import { useInView } from 'react-intersection-observer';


const language = process.env.NEXT_PUBLIC_LANGUAGE




const QandAs = dynamic(() => import('./qa'),{
    suspense: true,
    ssr : true,
    loading: undefined,
})


const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60000);
  const seconds = ((duration % 60000) / 1000).toFixed(0);
  return ` after ${minutes}min${seconds}s`;
};



const FAQComponent = (props) => {
    const {
      isMobileView,
      params
    }=props
    console.log(params)
    const [isOpen,setIsOpen] = useState(null)
    const divName = "FAQ"
    const { ref, inView, entry } = useInView({
        threshold: !isMobileView ? 1 : 0.9,
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
                <div
                  ref={ref}
                >
                  {translations[language].homePage.faq.map((qa,index)=>{
                    // console.log(index)
                    // console.log(qa)
                    return (
                      <div
                        key={qa.id}
                      >
                        <Suspense fallback={null}>
                          <QandAs
                            data={qa}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            index={qa.id}
                            params={params}
                          />
                        </Suspense>
                      </div>
                    )
                  })}
                </div>
        </>
    )
}
export default FAQComponent