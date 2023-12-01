import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React , {useEffect, useState, useRef} from 'react'
import { useSpring , animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
    faEye,
  } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import { push } from "@socialgouv/matomo-next";
import { useInView } from 'react-intersection-observer';



const language = process.env.NEXT_PUBLIC_LANGUAGE


const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return ` after ${minutes}min${seconds}s`;
  };

function getPeriodFromNow(date) {
    const currentDate = new Date();
    const inputDate = new Date(date);
  
    const timeDifference = currentDate.getTime() - inputDate.getTime();
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    const getDaysAgo = (days) => {
      if (days === 0) {
        return language === 'es' ? 'Hoy' : 'Today';
      } else if (days === 1) {
        return language === 'es' ? 'Hace 1 día' : '1 day ago';
      } else {
        return language === 'es' ? `Hace ${days} días` : `reviewed ${days} days ago`;
      }
    };
  
    const getWeeksAgo = (weeks) => {
      if (weeks === 1) {
        return language === 'es' ? 'Hace 1 semana' : '1 week ago';
      } else {
        return language === 'es' ? `Hace ${weeks} semanas` : `reviewed ${weeks} weeks ago`;
      }
    };

    const getMonthsAgo = (months) => {
      if (months === 1) {
        return language === 'es' ? 'Hace 1 mes' : '1 month ago';
      } else {
        return language === 'es' ? `Hace ${months} meses` : `reviewed ${months} months ago`;
      }
    };
  
    if (dayDifference < 7) {
      return getDaysAgo(dayDifference);
    } else {
      const weekDifference = Math.floor(dayDifference / 7);
      if (weekDifference < 4) {
        return getWeeksAgo(weekDifference);
      } else {
        const monthDifference = Math.floor(dayDifference / 30);
        return getMonthsAgo(monthDifference);
      }
    }
  }





const FiveStar = () => {
    const arr = [1,2,3,4,5]
    return (
        <>
        
        <div
              style={{
                display: "grid",
                gridAutoFlow: "column",
                width: "50px",
                justifyContent: "space-between",
                alignItems: "center",
                // margin: "0 auto 0"
              }}
            >
            {arr.map((obj,index)=>{
                return (
                    <div
                        key={index}
                        style={{
                            position : "relative",
                            height : "8px",
                            width : "8px"
                        }}
                    >
                        <Image
                        src="/star.svg"
                        alt="star"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        />
                    </div>
                )
            })}
            </div>
        </>
    )
}
const Testimonials = (props) => {
    const {data,openImageModal,isMobileView} = props
    const [images,setImages] = useState(null)
    useEffect(()=>{
        setImages(data)
    },[data])
    const settings = {
        // dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: isMobileView ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear"
    }
    const [reviews,setReviews]=useState([0,1,2,3])
    const getPlans = async () => {
        const plans = await axios.post('https://br.aurorafast.co.uk/getReviews',{
            language : language
        })
        // console.log(plans)
        // let pl = JSON.parse(plans.data)
        // console.log(pl)
        setReviews(plans.data)
        // setData(plans.data)
    }
    useEffect(()=>{
        getPlans()
    },[])
    const [isSliding,setIsSliding]=useState(false)


    const divName = "Reviews"
    const { ref, inView, entry } = useInView({
        threshold: !isMobileView ? 1 : 0,
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
            ref={ref}
        >
                    <Slider
                        {...settings}
                        beforeChange={() => setIsSliding(true)}
                        afterChange={() => setIsSliding(false)}
                    >
                        {reviews &&
                        reviews.map((obj, index) => {
                            // console.log("reviews screens",obj.screen)
                            return (
                                    <div
                                        key={index}
                                        className="slideContainer"
                                        style={{
                                            width : "100%",
                                            padding : "9px",
                                            position : "relative",
                                            height : "350px",
                                            paddingTop : "10px"
                                            // border : "1px solid #000",
                                            // marginRight : "10px"
                                        }}
                                        onClick={()=>{
                                            if (!obj.screen.includes('none') && !isSliding){
                                                openImageModal(obj.screen)}}
                                            }
                                    >
                                        <div
                                            style={{
                                                display : reviews.length==4 ? undefined :  "grid",
                                                gridTemplateRows : obj.screen && obj.screen.includes('none') ? 
                                                                       "10% 90%" : "10% 45% 45%" ,
                                                height : "100%",
                                                padding : "15px",
                                                margin: "3px",
                                                background: "#a8bbcd1a",
                                                padding: "10px 16px 13px",
                                                borderRadius : "10px",
                                                paddingTop : "20px"
                                            }}
                                        >
                                        {reviews.length==4 ?
                                            <div
                                                style={{
                                                    width : "100%",
                                                    height : "100%",
                                                    display : "flex",
                                                    alignItems : "center",
                                                    justifyContent : "center"
                                                }}
                                            >
                                                <div className="lds-ring-blue"><div></div><div></div><div></div><div></div></div>
                                            </div>
                                        :
                                        <>
                                            <div
                                                style={{
                                                    display : "flex",
                                                    justifyContent : "space-between",
                                                    alignItems : "center"
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display : "grid",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "12px",
                                                            fontWeight: 700,
                                                            color : "#555555",
                                                            textAlign:"left"
                                                        }}
                                                    > {obj.reviewer}</span>
                                                <span
                                                    style={{
                                                        color : "grey",
                                                        fontSize : "10px",
                                                        marginTop: "-5px"
                                                    }}
                                                >
                                                    {/* {language=='en' ? */}
                                                    {getPeriodFromNow(obj.date)}
                                                </span>
                                                </div>
                                                <div
                                                    style={{
                                                        height : "100%",
                                                        paddingTop :"8px"
                                                    }}
                                                >
                                                    <FiveStar />
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    display : "flex",
                                                    alignItems : "center",
                                                    height : "100%",
                                                    margin : "auto"
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontSize : isMobileView ? "14px" : "12px",
                                                        lineHeight : "20px",
                                                        textAlign : "left",
                                                    }}
                                                >{obj.reviewText}</p>
                                            </div>
                                        {!obj.screen.includes('none') ?
                                            <div
                                                style={{
                                                    textAlign : "left",
                                                    display : "grid",
                                                    position : "relative",
                                                    height :"100%",
                                                    width : "100%"
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position : "absolute",
                                                        top : "5px",
                                                        width : "100%",
                                                        height : "100%"
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position:"relative",
                                                            border : "1px solid rgb(239 239 239)",
                                                            // left : "50%",
                                                            // right: "50%"
                                                            margin : "auto",
                                                            width : "50%"
                                                        }}
                                                    >
                                                    </div>
                                                </div>
                                                <Image
                                                        // src="https://cdn.aurorafast.co.uk/images/review1.png"
                                                        src={obj.screen}
                                                        alt="30days"
                                                        // alt="Image"
                                                        layout="fill"
                                                        objectFit="cover"
                                                        objectPosition="center"
                                                    />
                                            </div>
                                        :null}
                                        </>
                                        }
                                        </div>
                                    </div>
                            )
                        })}
                    </Slider>
        </div>
    )
}
export default Testimonials