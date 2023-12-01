// import useIsInViewport from "../../../hooks/useIntersection"
import {useEffect, useRef, useState, useMemo} from 'react';
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components'
import Card from './card'
import CardMobile from './cardMobile';
// import {statistics} from '../../../data/home'
import { translations } from '../../../data/translation';
import { push } from "@socialgouv/matomo-next";

const language = process.env.NEXT_PUBLIC_LANGUAGE

// const Card = dynamic(() => import('./card'))
// const CardMobile = dynamic(() => import('./cardMobile'))
const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return ` after ${minutes}min${seconds}s`;
  };


const Ratings = (props) => {
    const {isMobileView} = props
    // const inVi = true
    const divName = "Why are we the best"
    const { ref, inView, entry } = useInView({
        threshold: !isMobileView ? 0.2 : 0.3,
    });
    // useEffect(()=>{
    //     push(["trackEvent", "click event", "open chat"]);
    // },[inView])
    const mergedData = [
        ...translations[language].statistics.dt,
        ...translations[language].statistics.dt2
    ]

    const [isOpen,setIsOpen] = useState(null)


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
    return(
        <>
            <h1
                id="why_are_the_best"
                style={{
                    color : "#fff",
                    width : "100%",
                    textAlign : isMobileView ? "center" : undefined,
                    // fontSize  :isMobileView ? "" : ""
                    lineHeight: "38px",
                    fontSize: isMobileView ? "28px" : "24px",
                    maxWidth : isMobileView ? "321px" : undefined,
                    margin : "auto",
                    marginTop : "20px"
                }}
            >{translations[language].zero_buffering}</h1>
            <div
                style={{
                    marginBottom: "4rem",
                    margin : isMobileView ? "0 0.5rem" : "0 1rem"
                }}
                ref={ref}
            >
                {isMobileView ?
                    <>
                        <div
                            style={{
                                // height : "300px"
                            }} 
                            className="cards-grid cards-2">
                            {translations[language].statistics.dt.map((obj,index)=>{
                                return(
                            <div
                                key={index}
                                className={`grid_${index+1}`}
                                style={{
                                    padding : isMobileView ? "1rem" : undefined,
                                    position : "relative",
                                    height : "100%",
                                    width : "100%",
                                    // borderLeft : isMobileView && index==1 ? "1px solid #d7d7d745" : undefined,
                                    borderTop : isMobileView && index==2 ? "1px solid #d7d7d745" : undefined,
                                    borderBottom : isMobileView && index==2 ? "1px solid #d7d7d745" : undefined,
                                    paddingBottom : isMobileView && index==2 ? "3rem" : undefined
                                }}
                            >
                                {isMobileView && index==1 ?
                                    <div
                                        style={{
                                            position : "absolute",
                                            height : "100%",
                                            left : "-3px",
                                            // margin
                                            display : "flex",
                                            alignItems : "center"
                                            // border : "1px solid #fff"
                                        }}
                                    >
                                        <div
                                            style={{
                                                position : "relative",
                                                height : "50%",
                                                // marginTop : "50%",
                                                border : "1px solid #d7d7d745"
                                            }}
                                        >

                                        </div>
                                    </div>
                                :null}
                                {isMobileView ?
                                        <CardMobile
                                            index={index + translations[language].statistics.dt.length}
                                            Data = {obj}
                                            isVisible={true}
                                            setIsOpen={setIsOpen}
                                            isOpen={isOpen}
                                            isMobileView={isMobileView}
                                        />
                                    :
                                    <Card
                                        index={index}
                                        Data = {obj}
                                        isVisible={true}
                                        setIsOpen={setIsOpen}
                                        isOpen={isOpen}
                                        boldTitle = {true}
                                        isMobileView= {isMobileView}
                                    >
                                    </Card>
                                }
                                </div>
                                )
                            })}
                        </div>
                        <div
                            className="cards-grid cards-2"
                            style={{
                                gap : "0.5rem.5rem"
                            }}

                        >
                            {translations[language].statistics.dt2.map((obj,index)=>{
                                return(
                            <div
                                key={index}
                                className={`grid_${index+1}`}
                                style={{
                                    padding : isMobileView ? "1rem" : undefined,
                                    position : isMobileView ? "relative" : undefined,
                                    // border : isMobileView ? "1px solid #fff" : undefined,
                                    // borderLeft : isMobileView && index==1 ? "1px solid #d7d7d745" : undefined,
                                    borderTop : isMobileView && index==2 ? "1px solid #d7d7d745" : undefined,
                                    // marginTop : isMobileView && index==2 ? "10px": undefined
                                }}
                            >
                                {isMobileView && index==1 ?
                                    <div
                                        style={{
                                            position : "absolute",
                                            height : "100%",
                                            left : "-3px",
                                            // margin
                                            display : "flex",
                                            alignItems : "center"
                                            // border : "1px solid #fff"
                                        }}
                                    >
                                        <div
                                            style={{
                                                position : "relative",
                                                height : "50%",
                                                // marginTop : "50%",
                                                border : "1px solid #d7d7d745"
                                            }}
                                        >

                                        </div>
                                    </div>
                                :null}
                                {isMobileView ?
                                        <CardMobile
                                            index={index + translations[language].statistics.dt.length}
                                            Data = {obj}
                                            isVisible={inView}
                                            setIsOpen={setIsOpen}
                                            isOpen={isOpen}
                                            isMobileView={isMobileView}
                                        />
                                    :
                                    <Card
                                        index={index + translations[language].statistics.dt.length}
                                        Data = {obj}
                                        isVisible={inView}
                                        setIsOpen={setIsOpen}
                                        isOpen={isOpen}
                                        isMobileView={isMobileView}
                                    >
                                    </Card>
                                }
                                </div>
                                )
                            })}
                        </div>
                    </>
                :
                <div 
                    className="cards-3"
                    style={{
                        margin : !isMobileView ? "0 9rem" : undefined,
                    }}
                >
                    {mergedData.map((obj,index)=>{
                        return(
                            <div
                                key={index}
                                style={{
                                    // border : isMobileView ? "1px solid #fff" : undefined,
                                    borderLeft : isMobileView && index==1 ? "1px solid #d7d7d745" : undefined,
                                    borderTop : isMobileView && index==2 ? "1px solid #d7d7d745" : undefined
                                }}
                            >
                                {isMobileView ?
                                        <CardMobile
                                            index={index}
                                            Data = {obj}
                                            isVisible={inView}
                                            setIsOpen={setIsOpen}
                                            boldTitle = {true}
                                            isMobileView={isMobileView}
                                            isOpen={isOpen}
                                            className={`grid`}
                                        />
                                        :
                                        <Card
                                            index={index}
                                            Data = {obj}
                                            isVisible={inView}
                                            setIsOpen={setIsOpen}
                                            boldTitle = {true}
                                            isMobileView={isMobileView}
                                            isOpen={isOpen}
                                            className={`grid`}
                                        >
                                        </Card>
                                }
                            </div>
                        )
                    })}
                </div>
                }
            </div>
            {isOpen!=null  ?
                    <div
                        className="notice-content"
                    >
                        <div
                            className="close-popup"
                        >
                            <span
                                onClick={()=>setIsOpen(null)}
                            >X</span>
                        </div>
                        <p>
                            {mergedData[isOpen].LearnMore}
                        </p>
                    </div>
                    :
                    null
            }
        </>
    )
}
export default Ratings