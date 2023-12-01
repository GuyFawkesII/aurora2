import styled from 'styled-components'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React , {useState,useEffect,useRef,createRef} from 'react'
import { Suspense } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { useEffectOnceWhen } from "rooks";
import { useRouter } from 'next/router'
import { push } from "@socialgouv/matomo-next";
import {pass} from '../../data/pass'
import {useSelector,useDispatch} from 'react-redux'
import Link from 'next/link'
import {BsShieldFillCheck} from 'react-icons/bs'
import JoinUs from '../buttons/join_us'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';
import { translations } from '../../data/translation'
// import { push } from "@socialgouv/matomo-next";
import { useInView } from 'react-intersection-observer';


const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return ` after ${minutes}min${seconds}s`;
  };



const language = process.env.NEXT_PUBLIC_LANGUAGE


const TypeEffect = dynamic(() => import('../typewritter'), {
    suspense: true,
    ssr : true,
    loading: undefined,
  })

const Container = styled.div.attrs(props => ({
    background: props.background || '#ffff'
  }))`
    height: 100vh;
    width: 100%;
    top: 0;
    // background: ${props => props.background};
  `

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
const Splash = (props) => {
    const {
        setOpenChat,
        setDisplayDes,
        displayDes,
        backImage,
        isMobileView,
        splashData,
    } = props
    // console.log(headlineData)
    const prefe = useSelector(state=>state.preferences.currency)
    // console.log(prefe)
    var router = useRouter();
    var b = router.query["b"];
    const [dim,setDim] = useState(null)
    const [windowSize, setWindowSize] = useState(0);
    useEffect(()=>{
        if (windowSize!=0){
            setDim({
                width : windowSize.innerWidth + 'px',
                height :  windowSize.innerWidth + 'px',
            })
        }
    },[windowSize])
    useEffectOnceWhen(()=>{
        setWindowSize(getWindowSize())
    },(typeof window!=='undefined'))
    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [])
    const [image,setImage]=useState(null)
    useEffectOnceWhen(()=>{
        setImage(b)
    },(typeof b !=='undefined'))
    const [displayButton,setDisplayButton]=useState(false)
    // const router = useRouter()

    const divName = "Splash"
    const { ref, inView, entry } = useInView({
        threshold: 0.2,
    });
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
      console.log(splashData)
    const media = splashData && splashData.media ? ( isMobileView ? splashData.media.mobile : splashData.media.desktop) : {type : 'image' , url : '/splah.png'}
    return (
        <>
         <div ref={ref} className={styles.splash}>
              <Container
                // background = "linear-gradient(#bde9f3, #fff)"
              >
                <div className={styles.splash_content_container}>
                        {isMobileView ?
                            <>
                                <div
                                    style={{
                                        position: "relative",
                                        height: "100%"
                                    }}
                                >
                                    <div className="unset-img"
                                        // style={{
                                        //     position : "relative"
                                        // }}
                                    >
                                        {media.type=='video' ?
                                            <div
                                                style={{
                                                    // height : "220px",
                                                    // width : "100%",
                                                    // border : "3px solid black",
                                                    padding : "0px 18px",
                                                    display : "flex",
                                                    // alignItems : "center",
                                                    paddingTop : "48px"
                                                }}
                                                className="videoControlelr"
                                            >
                                                <ReactPlayer
                                                    url={media.url} // replace with your video file or YouTube/Vimeo URL
                                                    playing={true} // Autoplay
                                                    controls={false} // Disable controls
                                                    volume={0} // Mute the sound
                                                    width="100%"
                                                    loop={true}
                                                    // height="360"
                                                />
                                            </div>
                                            :null}
                                            {media.type=='image' ?
                                                <LazyLoadImage
                                                    src={media.url}
                                                    alt="splash_background"
                                                    className="custom-img"
                                                    effect="blur"
                                                    visibleByDefault={true}
                                                    threshold={100}
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
                                            :null}
                                    {/* {displayDes && isMobileView ?
                                        <div
                                            style={{
                                                position : "absolute",
                                                height : "100%",
                                                width  : "100%",
                                                display : "flex",
                                                alignItems : "center",
                                                justifyContent : "center",
                                                top : 0
                                            }}
                                        >
                                            <a
                                                href={pass.prices[prefe.index].url} target="_blank" rel="noreferrer"
                                                style={{
                                                    display : "flex",
                                                    gap : "7px",
                                                    alignItems: "center",
                                                    margin : "3px"
                                                }}
                                            >
                                                <div
                                                    className="newPass"
                                                >
                                                    <div>
                                                        <span
                                                            style={{
                                                                padding: "6px",
                                                                background: "#ffff",
                                                                borderRadius: "8px",
                                                                color: "#000",
                                                                fontWeight: 800
                                                            }}
                                                        >
                                                            NEW
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span>{pass.prices[prefe.index].amount} {pass.prices[prefe.index].symbol} {pass.title} </span>
                                                    </div>
                                            </div>
                                            </a>
                                        </div>
                                    :null} */}
                                    </div>
                                </div>
                                <div className={styles.dis_container}>
                                    {displayDes && isMobileView ?
                                        <></>
                                        // <a
                                        //     href={pass.prices[prefe.index].url} target="_blank" rel="noreferrer"
                                        //     style={{
                                        //         display : "flex",
                                        //         gap : "7px",
                                        //         alignItems: "center",
                                        //         margin : "3px"
                                        //     }}
                                        // >
                                        //     <div
                                        //         className="newPass"
                                        //     >
                                        //         <div>
                                        //             <span
                                        //                 style={{
                                        //                     padding: "6px",
                                        //                     background: "#ffff",
                                        //                     borderRadius: "8px",
                                        //                     color: "#000",
                                        //                     fontWeight: 800
                                        //                 }}
                                        //             >
                                        //                 NEW
                                        //             </span>
                                        //         </div>
                                        //         <div>
                                        //             <span>{pass.prices[prefe.index].amount} {pass.prices[prefe.index].symbol} {pass.title} </span>
                                        //         </div>
                                        // </div>
                                        // </a>
                                    :null}
                                    <div
                                        style={{
                                            display : "flex",
                                            alignItems: "center",
                                            justifyContent : "center",
                                        }}
                                        className={styles.splash_content_title}>
                                            <h1
                                                style={{
                                                    padding : "0 10px"
                                                }}
                                                className="typewriter"
                                            >
                                                <span
                                                    style={{
                                                        color : "#013c75"
                                                    }}
                                                >{splashData.headline && splashData.headline.slogan1 ? splashData.headline.slogan1 : translations[language].slogan1} </span>
                                                <span
                                                    style={{
                                                        color : "#11c851"
                                                    }}
                                                >{splashData.headline && splashData.headline.slogan2 ? splashData.headline.slogan2 :  translations[language].slogan2} </span>
                                                <span
                                                    style={{
                                                        color : "#013c75"
                                                    }}
                                                >{splashData.headline && splashData.headline.slogan3 ? splashData.headline.slogan3 : translations[language].slogan3}</span>
                                            </h1>
                                            {/* <Suspense fallback={`Loading...`}>
                                                <TypeEffect
                                                    setDisplayDes={setDisplayDes}
                                                    textContent='THE #1 MOST TRUSTED IPTV PROVIDER'
                                                    setDisplayButton={setDisplayButton}
                                                    highlightedWord="TRUSTED"
                                                    highlightColor="#11c851"
                                                    defaultColor="#013c75"
                                                />
                                            </Suspense> */}
                                        </div>
                                    <div className={styles.splash_content_description}>
                                    {/* {displayDes ? */}
                                        <p
                                            style={{
                                                fontSize : "18px"
                                            }}
                                        >
                                            {splashData.headline && splashData.headline.slogan_description2 ? splashData.headline.slogan_description2 : translations[language].slogan_description2}
                                        </p>
                                    {/* :null} */}
                                    </div>
                                    <div
                                        className={styles.button_container}
                                    >
                                    {/* {displayButton ? */}
                                        <JoinUs
                                            background="blue"
                                        />
                                        {/* :null} */}
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                    <div className={styles.dis_container}>
                                        {displayDes ?
                                            <></>
                                            //     <a
                                            //     href={pass.prices[prefe.index].url} target="_blank" rel="noreferrer"
                                            //     style={{
                                            //         display : "flex",
                                            //         gap : "7px",
                                            //         alignItems: "center"
                                            //     }}
                                            // >
                                            //     <div
                                            //         className="newPass"
                                            //     >
                                            //             <div>
                                            //                 <span
                                            //                     style={{
                                            //                         padding: "6px",
                                            //                         background: "#ffff",
                                            //                         borderRadius: "8px",
                                            //                         color: "#000",
                                            //                         fontWeight: 800
                                            //                     }}
                                            //                 >
                                            //                     NEW
                                            //                 </span>
                                            //             </div>
                                            //             <div>
                                            //                 <span>{pass.prices[prefe.index].amount} {pass.prices[prefe.index].symbol} {pass.title}</span>
                                            //             </div>
                                            //     </div>
                                            // </a>
                                        :null}
                                        <div className={styles.splash_content_title}>
                                            {/* <Suspense fallback={`Loading...`}>
                                                <TypeEffect
                                                    setDisplayDes={setDisplayDes}
                                                    textContent='THE #1 MOST TRUSTED IPTV PROVIDER'
                                                    setDisplayButton={setDisplayButton}
                                                    highlightedWord="TRUSTED"
                                                    highlightColor="#11c851"
                                                    defaultColor="#013c75"
                                                />
                                            </Suspense> */}
                                            <h1 className="typewriter">
                                                <span
                                                    style={{
                                                        color : "#013c75"
                                                    }}
                                                >{splashData.headline && splashData.headline.slogan1 ? splashData.headline.slogan1 : translations[language].slogan1} </span>
                                                <span
                                                    style={{
                                                        color : "#11c851"
                                                    }}
                                                >{splashData.headline && splashData.headline.slogan2 ? splashData.headline.slogan2 :  translations[language].slogan2} </span>
                                                <span
                                                    style={{
                                                        color : "#013c75"
                                                    }}
                                                >{splashData.headline && splashData.headline.slogan3 ? splashData.headline.slogan3 : translations[language].slogan3}</span>
                                            </h1>
                                        </div>
                                        <div className={styles.splash_content_description}>
                                        {/* {displayDes ? */}
                                            <p
                                                style={{
                                                    fontSize : "19px",
                                                    lineHeight : "28px"
                                                }}
                                            >
                                                {translations[language].slogan_description}
                                            </p>
                                        {/* :null} */}
                                        </div>
                                        <div
                                            className={styles.button_container}
                                        >
                                        {/* {displayButton ? */}
                                            <>
                                                <button
                                                    id="contact_us"
                                                    className={styles.button_contact}
                                                    onClick={()=>{setOpenChat(true)}}
                                                >
                                                    {translations[language].contact_us}
                                                </button>
                                                <button
                                                    id="join_us"
                                                    className={styles.button_contact}
                                                    onClick={()=>router.push('/checkout')}
                                                >
                                                    <Link
                                                        href="/checkout"
                                                    >
                                                        <span>
                                                        {translations[language].join_us_now}
                                                            <p>{translations[language].instant_access}</p>
                                                        </span>
                                                    </Link>
                                                </button>
                                            </>
                                            {/* :null} */}
                                        </div>
                                    </div>
                                    {media.type=='image' ?
                                    <div
                                        className="unset-img"
                                        style={{
                                            position: "relative",
                                            height: "100%",
                                            display : "flex"
                                        }}
                                    >
                                                <LazyLoadImage
                                                    src={media.url}
                                                    alt="splash_background"
                                                    className="custom-img"
                                                    effect="blur"
                                                    layout="fill"
                                                    visibleByDefault={true}
                                                    threshold={100}
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
                                        {/* {dim !=null ?
                                            <Image
                                                src="/splashimage.png"
                                                layout="fill"
                                                className="custom-img"
                                                // width="100%"
                                                // height="100%"
                                                alt="splash_background"
                                            />
                                            :
                                            <p></p>
                                        } */}
                                    </div>
                                    :null}
                                    {media.type=='video' ?
                                            <div
                                                style={{
                                                    // height : "220px",
                                                    // width : "100%",
                                                    // border : "3px solid black",
                                                    padding : "0px 18px",
                                                    display : "flex",
                                                    // alignItems : "center",
                                                    paddingTop : "48px"
                                                }}
                                                className="videoControlelr"
                                            >
                                                <ReactPlayer
                                                    url={media.url} // replace with your video file or YouTube/Vimeo URL
                                                    playing={true} // Autoplay
                                                    controls={false} // Disable controls
                                                    volume={0} // Mute the sound
                                                    width="100%"
                                                    loop={true}
                                                    // height="360"
                                                />
                                            </div>
                                            :null}
                            </>
                    }
                </div>
                <div
                  className="polygon_container"
                  style={{
                    // marginTop : "1.2rem",
                    // display : "flex",
                    position : "absolute",
                    // right : "0",
                    // height : "50px",
                    // background : "grey",
                    width : "100%"
                  }}
                >
                  <svg className="svg-intro-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polygon fill={isMobileView ? "#202abb":"#313ee7"} points="0,100 100,0 100,100"></polygon>
                  </svg>
                </div>
            </Container>
        </div>
        </>
    )
}
export default Splash