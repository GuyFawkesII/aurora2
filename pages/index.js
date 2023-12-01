import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import React , {useState,useEffect,useRef,createRef} from 'react'
import PanZoom from "@sasza/react-panzoom";
import Splash from '../components/splash'
import { useDispatch, useSelector } from "react-redux";
import {useEffectOnceWhen,useWindowScrollPosition,useLocalstorageState} from 'rooks'
import { useInView } from 'react-intersection-observer';
import useLocalStorage from '../hooks/useLocalStorage'
import {reviews,faq,para,splash} from '../data/home'
import JoinUs from '../components/buttons/join_us'
import axios from 'axios'
import SimpleSlider from '../components/channelsSlider'
import { useRouter } from 'next/router'
import AnimatedMap from '../components/pageCompo/map'
import { translations } from '../data/translation'
import EPGCards0 from '../components/epgCards/card0'
// import FAQComponent from '../components/pageCompo/faq'
import EPGCards1 from '../components/epgCards/card1'
import EPGCards2 from '../components/epgCards/card2'
import BestInIndustry from '../components/bestInIndustry'
import { fetchHeadlineData, fetchParams } from '../api'
import Ratings from '../components/pageCompo/rating'

const language = process.env.NEXT_PUBLIC_LANGUAGE;


const Footer = dynamic(() => import('../layout/Footer'), {
  ssr: false,
  loading: () => <></>
});

const FAQComponent = dynamic(() => import('../components/pageCompo/faqcompo'), {
  ssr: false,
  loading: () => <></>
});

const Notice = dynamic(() => import('../components/notice'), {
  ssr: false,
  loading: () => <></>
});

// const TypeEffect = dynamic(() => import('../components/typewritter'), {
//   // suspense: true,
//   ssr : true,
//   loading: undefined,
// })
// const Plans = dynamic(() => import('../components/pageCompo/pricing'), {
//   suspense: true,
//   ssr : true,
//   loading: undefined,
// })
// const CurrencySwitcher = dynamic(() => import('../components/pageCompo/currencySwitcher'), {
//   ssr: false,
// })
const CurrencyPopup = dynamic(() => import('../components/pageCompo/currencyPopup'), {
  ssr: false,
  loading: ()=><></>
})
const Testimonials = dynamic(() => import('../components/pageCompo/testimonials'), {
  ssr : false,
  loading: ()=><></>
})
const Modal = dynamic(() => import('../components/modal'),{
  // suspense: true,
  ssr : false,
  loading: ()=><></>
})
// const Ratings = dynamic(() => import('../components/pageCompo/rating'),{
//   // suspense: true,
//   ssr : false,
//   loading: ()=><></>
// })
function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const Home = (props) => {
  const {
    isMobileView,
    serverData,
    params
  } = props
  const [openChat,setOpenChat]=useState(false)
  const [chatLoading,setChatLoading] = useState(false)
  // const handleChatOpen = () => {
  //   push(["trackEvent", "crisp", "chat opened"]);
  // }
  // const handleChatClosed = () => {
  //   push(["trackEvent", "crisp", "chat closed"]);
  // }
  useEffect(()=>{
    if (typeof $crisp !=='undefined'){
      setChatLoading(false)
    }
    else {
      setChatLoading(true)
    }
    if (openChat==true){
      // push(["trackEvent", "click event", "open chat"]);
      // $crisp.push(['on', 'chat:opened',handleChatOpen]);
      $crisp.push(['do', 'chat:open']);
      // $crisp.push(['on', 'chat:closed',handleChatClosed]);
      setOpenChat(false)
    }
  },[openChat])
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
  const [currency,setCurrency] = useLocalStorage("currency",null)
  const panZoomRef = createRef()
  const [displayDes,setDisplayDes]=useState(false)
  const [visibleImage,setVisibleImage]=useState(null)
  const [modalVisible,setModalVisible]=useState(false)
  const closeModal = () => {
    setModalVisible(false)
    setVisibleImage(null)
  }
  const openImageModal = (url) =>{
    setModalVisible(true)
    setVisibleImage(url)
  }
  useEffect(()=>{
    if (typeof $crisp !=='undefined'){
      setChatLoading(false)
    }
    else {
      setChatLoading(true)
    }
    if (openChat==true){
      $crisp.push(['do', 'chat:open']);
      setOpenChat(false)
    }
  },[openChat])
  const handleZoom = (a) => {
    if (typeof panZoomRef.current !=="undefined"){
    if (a==-1){
      panZoomRef.current.zoomOut(0.5)
    }
    else {
      panZoomRef.current.zoomIn(0.5)
    }
    }
  }
  const [isOpen,setIsOpen] = useState(null)
  const [opened,setOpened] = useState(false)
  const prefere = useSelector((state)=>state.preferences)
  const [modalOpen,setMoodalOpen] = useState(false)
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  useEffect(()=>{
    if (inView && currency==null && !opened){
      setMoodalOpen(true)
    }
  },[inView])
  const closeCurrModal = () => {
    if (modalOpen){
      setMoodalOpen(false)
      setOpened(true)
    }
  }
  const position = useWindowScrollPosition()
  // console.log(language)
  // console.log(translations['en'])
  const features = [
    {
      name: translations[language].feature1_name,
      title: translations[language].feature1_title,
      description: translations[language].feature1_description,
    },
    {
      name: translations[language].feature2_name,
      title: translations[language].feature2_title,
      description: translations[language].feature2_description,
    },
    {
      name: translations[language].feature3_name,
      title: translations[language].feature3_title,
      description: translations[language].feature3_description,
    },
    {
      name: translations[language].feature4_name,
      title: translations[language].feature4_title,
      description: translations[language].feature4_description,
    },
    {
      name: translations[language].feature5_name,
      title: translations[language].feature5_title,
      description: translations[language].feature5_description,
    },
    {
      name: translations[language].feature6_name,
      title: translations[language].feature6_title,
      description: translations[language].feature6_description,
    },
    {
      name: translations[language].feature8_name,
      title: translations[language].feature8_title,
      description: translations[language].feature8_description,
    },
    {
      name: translations[language].feature9_name,
      title: translations[language].feature9_title,
      description: translations[language].feature9_description,
    },
    {
      name: translations[language].feature10_name,
      title: translations[language].feature10_title,
      description: translations[language].feature10_description,
    },
    {
      name: translations[language].feature11_name,
      title: translations[language].feature11_title,
      description: translations[language].feature11_description,
    }
  ];
  

  const [isNotice,setIsNotice]=useState(false)
  async function getParams() {
      const params = await axios.post('https://br.aurorafast.co.uk/getParams',null)
      // console.log(plans)
      // let pl = JSON.parse(plans.data)
      // console.log(pl)
      setIsNotice(params.data.notice)
      // setData(plans.data)
  }
  useEffect(()=>{
    getParams()
  },[])
  const [noti,setNoti]=useLocalstorageState('notice',false)
  const [notice,setNotice]=useState(false)
  const [startedCounting,setStartedCounting]=useState(false)
  useEffect(()=>{
    if (position.scrollY>=50 && !startedCounting){
      setStartedCounting(true)
    }
  },[position])
  useEffectOnceWhen(() => {
    if (startedCounting) {
      // setStartedCounting(true)
      const timer = setTimeout(() => {
        setNotice(true);
        setNoti(true)
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, startedCounting && !noti && isNotice);
  const router = useRouter()


  return (
    <>
    <div
      id="home"
      className={styles.container}
      style={{
        background : position.scrollY>36 ? "#fff" : undefined
      }}
    >
        {modalOpen ?
          <CurrencyPopup
            closeModal={closeCurrModal}
          />
        :null}
        {visibleImage !=null && modalVisible!=false ?
          <Modal
            closeModal={closeModal}
          >
              <div>
                <PanZoom
                  zoomMin={1}
                  height="100%"
                  width="100%"
                  disabledMove={false}
                  ref={panZoomRef}
                >
                  <div
                    style={{
                      display : "flex",
                      alignItems : "center",
                      justifyContent : "center"
                    }}
                  >
                    <Image
                      src={visibleImage}
                      // layout='responsive'
                      // objectFit='contain'
                      width={isMobileView ? dim.width : "600px"}
                      height={isMobileView ? dim.width : "600px"}
                      alt="qa"
                    />
                  </div>
                </PanZoom>
            </div>
              {/* <div
                style={{
                  zIndex : -1,
                  position : "fixed",
                  width : "100%",
                  height : "100%",
                  top : 0,
                }}
              >
                  <div
                    style={{
                      position : "absolute",
                      width : "100%",
                      alignItems: "center",
                      display: "flex",
                      marginRight: "9px",
                      justifyContent : "center",
                      bottom : "22px",
                      zIndex : 200
                    }}
                  >
                    <div
                      onClick={()=>{handleZoom(-1)}}
                    >
                      <FontAwesomeIcon
                        icon={faMagnifyingGlassMinus}
                        style={{
                          fontSize: 25,
                          color: "#b2b2b2",
                          padding : "10px",
                          border : "2px solid #949494",
                          borderRadius : "7px",
                        }}
                      />
                    </div>
                    <div
                      onClick={()=>{handleZoom(1)}}
                    >
                      <FontAwesomeIcon
                        icon={faMagnifyingGlassPlus}
                        style={{
                          fontSize: 25,
                          color: "#b2b2b2",
                          padding : "10px",
                          marginLeft : "5px",
                          border : "2px solid #949494",
                          borderRadius : "7px"
                        }}
                      />
                    </div>
                </div>
              </div> */}
          </Modal>
        :null}
      <main className={styles.main}>
          <Splash
            displayDes={displayDes}
            setOpenChat={setOpenChat}
            setDisplayDes={setDisplayDes}
            backImage={splash.image.url}
            isMobileView={isMobileView}
            splashData={serverData.splash}
            // params ={params}
          />
      </main>
         <div
            // id="patra"
            className={styles.paragraph}
            style={{
              marginTop : "-20px",
              padding : 0,
              background : isMobileView ? "#202abb":"#313ee7",
              margin : 0,
              width : "100%",
              maxWidth : "100%",
              // display : "none"
              // position : "relative"
            }}
          >
                <div
                  style={{
                    marginTop : "-6rem",
                    // display : "flex",
                    position : "absolute",
                    // right : "0",
                    // height : "50px",
                    // background : "grey",
                    width : "100%",
                    display : "none"
                  }}
                >
                  <svg className="svg-intro-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polygon fill={isMobileView ? "#202abb":"#313ee7"} points="0,100 100,0 100,100"></polygon>
                  </svg>
                </div>
            <div
              style={{
                position : "relative",
                zIndex : 10,
                padding : isMobileView ? "0 0 4rem" : "2rem 0rem 6rem"
              }}
            >
              <Ratings
                isMobileView={isMobileView}
              />
            </div>
                <div
                  className="polygon_container_1"
                  style={{
                    // marginTop : "-2rem",
                    // display : "flex",
                    left : 0,
                    position : "absolute",
                    // right : "0",
                    // height : "50px",
                    // background : "grey",
                    width : "100%"
                  }}
                >
                  <svg className="svg-features-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polygon fill="#fff" points="0,100 100,0 100,100"></polygon>
                  </svg>
                </div>
          </div>
          <div
            className={styles.paragraph}
            style={{
              marginTop : isMobileView ? "3rem" : "3rem",
              border: "1px solid #d0d7e2",
              maxWidth: "855px",
              borderRadius: "5px",
              boxShadow: "0px 3px 3px #e2e8f6",
              margin : isMobileView  ? "4rem 16px" : undefined,
              paddingBottom : "28px",
              textAlign : "center"
            }}
          >
            <BestInIndustry
              isMobileView={isMobileView}
            />
          </div>          
          <div
            className={styles.paragraph}
            style={{
              marginTop : isMobileView ? "3rem" : "3rem",
            }}
          >
            <h1
              style={{
                fontSize : "30px",
                maxWidth : "600px",
                margin : "auto",
                fontWeight : 800,
                lineHeight : "39px",
                marginBottom : !isMobileView ? "3rem" : "1rem",
                textAlign : "center",
                display : "none"
              }}
            >
              {!isMobileView ?
               <>
                Unleash Entertainment&apos;s Power: Feature-Packed IPTV Service
               </>
               :
               <>
                Feature-Packed IPTV Service
               </>
              }
            </h1>
            <div
              style={{
                padding : isMobileView ? "16px 15px 7px" : "2rem",
                boxShadow : "0px 0px 4px #e9e9e9",
                borderRadius : "7px",
                border: "1px solid #e4e4e4",
                display : "none"
              }}
            >
              <div
                style={{
                  display : "grid",
                  gridTemplateColumns: !isMobileView ? "repeat(3, 1fr)" : undefined,
                  gap : !isMobileView ? "1.5rem" : undefined
                }}
              >
                {features.map((obj,index)=>{
                  return (
                      <div
                        key={index}
                        style={{
                          background : "#4e91f3",
                          display : index==9 ? "none" : "flex",
                          alignItems : "center",
                          justifyContent : "center",
                          marginBottom : isMobileView ? "0.7rem" : undefined,
                          borderRadius : "10px",
                          fontWeight : 700,
                          color : "white",
                          padding : !isMobileView ? "1rem 0" : "5px 0",
                          // display 
                        }}
                      >
                        {obj.name}
                      </div>
                  )
                })}
              </div>
            </div>
          </div>





          <div
            className={styles.paragraph}
            style={{
              // marginTop : "-20px",
              // height : "400px",
              // background : "#202abb",
              display : isMobileView ? undefined : "none"
            }}
          >
            <SimpleSlider />
          </div>



          <div
            // id="patra"
            className={styles.paragraph}
            style={{
              marginTop : "-20px",
              // maxWidth : ""
            }}
          >
            {/* <div
              className="uptime-container"
              style={{
                display : "none",
              }}
            >
              <strong>Uptime</strong><span> Last 90 days</span>
              <div
                style={{
                  width : "100%",
                  // height : "200px",
                  border: "1px solid #e4e4e4",
                  padding : isMobileView ? "6px 15px 21px" : "6px 15px 7px",
                  boxShadow : "0px 0px 4px #e9e9e9",
                  borderRadius : "7px"
                }}
              >
                <div
                  style={{
                    display : "grid"
                  }}
                >
                  {
                    uptime.map((obj,index)=>{
                      return (
                          <div
                            key={index}
                          >
                            <div
                              style={{
                                display : !isMobileView ? "flex" : "grid",
                                gap : !isMobileView ? "15px" : undefined,
                                // gap : "15px",
                                // color : "green",
                                alignItems: "center",
                                padding: "0rem 0"
                              }}
                            >
                              <span
                                style={{
                                  fontWeight : 700,
                                  width : !isMobileView ? "250px" : undefined,
                                  // color : ""
                                }}
                              >
                                {obj.title}
                              </span>
                              <div
                                style={{
                                  width: "100%",
                                  height: "25px",
                                  position: "relative",
                                  display: isMobileView ? "grid" : "flex",
                                  gridTemplateColumns : isMobileView ? "15% 65% 20%" : undefined,
                                  // gap : isMobileView ? "10px" : undefined,
                                  alignItems: "center",
                                  // justifyContent: "center"
                                }}
                              >
                                <span
                                  style={{
                                    color : "#3cd672",
                                    fontSize : "15px",
                                    paddingRight : "15px"
                                  }}
                                >
                                  {obj.up}
                                </span>
                                <div
                                  style={{
                                    position : "relative",
                                    // width : isMobileView ? "calc(100%)" : "400",
                                    width : "100%",
                                    height : "25px"
                                  }}
                                >
                                  <Image
                                    src="/a7da1b0.svg"
                                    alt="alit"
                                    // alt="Image"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                  />
                                </div>
                                <div
                                  style={{
                                    display : "flex",
                                    gap : "7px",
                                    paddingLeft : "7px"
                                  }}
                                >
                                  <div
                                    style={{
                                      background: "#8cff8c73",
                                      borderRadius: "50%",
                                      height: "29px",
                                      width: "29px",
                                      minWidth : "29px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center"
                                    }}
                                  >
                                    <div
                                      className ="circle"
                                    />
                                  </div>
                                  <div
                                    style={{
                                      color : "#3cd672",
                                      fontSize : "15px"
                                    }}
                                  >
                                    Up
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      )
                    })
                  }
                  </div>
              </div>
            </div> */}
            <EPGCards0
              isMobileView={isMobileView}
            />
            <EPGCards1
              isMobileView={isMobileView}
            />
            <EPGCards2
              isMobileView={isMobileView}
            />
            {/* <div
              className={styles.sliderContainer}
            >
              <h1>{para[2].title}</h1>
              <Image
                src="/line.png"
                height={20}
                width = {100}
                alt="lineImage"
              />
              <br/>
              <div
                className={styles.flex_columns_1_2}
              >
                <div
                  style={{
                    padding : "1.2rem"
                  }}
                >
                  <span>{para[2].content[0].title}</span>
                  <p>
                  {para[2].content[0].paragraph}
                  </p>
                </div>
                <div
                  style={{
                    padding : "1.2rem"
                  }}
                >
                  <span>{para[2].content[1].title}</span>
                  <p>
                    {para[2].content[1].paragraph}
                  </p>
                </div>
              </div>
            </div> */}
            <div
              className={styles.sliderContainer}
              style={{
                marginTop : "4rem",
                position : "relative",
                width : "100%",
                height : "auto"
              }}
            >
            <div
            // className={styles.paragraph}
            style={{
              marginTop : "-20px",
              // height : "400px",
              background : "blue",
              background : "#202abb",
              // display : isMobileView ? undefined : "none",
              marginTop : "40px",
              padding : "73px 37px",
              marginBottom : "40px",
              width : "calc(100% + 4rem)",
              marginLeft : "-2rem",
              borderRadius : isMobileView ? undefined : "10px" 
            }}
          >
            <AnimatedMap
              isMobileView={isMobileView}
            />
            <p
              style={{
                textAlign : "center",
                color : "white",
                fontWeight : 800,
                fontSize : "26px",
                lineHeight  : "33px"
              }}
            >
              {translations[language].channels_from_every_country}
            </p>
            <p
              style={{
                color : "white",
                lineHeight : "30px",
                marginTop : "10px",
                textAlign : "center",
                padding : "0 10px"
              }}
            >
              {translations[language].map_description}
            </p>
            <div
              style={{
                border : "1px solid white",
                padding : "10px",
                background : "white",
                borderRadius : "20px",
                color : "black",
                textAlign : "center",
                fontWeight : 700
              }}
              onClick={()=>router.push('/checkout')}
            >
              {translations[language].get_our_iptv_channels}
            </div>
          </div>
          <div
              style={{
                display: "grid",
                gridAutoFlow: "column",
                width: "176px",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "0 auto 0"
              }}
            >
              <div
                style={{
                  position : "relative",
                  height : "20px",
                  width : "20px"
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
              <div
                style={{
                  position : "relative",
                  height : "20px",
                  width : "20px"
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
              <div
                style={{
                  position : "relative",
                  height : "20px",
                  width : "20px"
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
              <div
                style={{
                  position : "relative",
                  height : "20px",
                  width : "20px"
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
              <div
                style={{
                  position : "relative",
                  height : "20px",
                  width : "20px"
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
            </div>
            <h1
              style={{
                margin : "9px 0 1px",
                textAlign : "center",
                lineHeight : isMobileView ? "39px" : undefined
              }}
            >{translations[language].five_star_experience}</h1>
            <div
              style={{
                width : "100%",
                display : "flex",
                justifyContent : "center"
              }}
            >
              <Image
                  src="/line.png"
                  height={20}
                  width = {100}
                  alt="line_image"
                />
            </div>
              <br/>
              <div
                style={{
                  textAlign : "center"
                }}
              >
                <p
                  style={{
                    margin: 0,
                    lineHeight: "21px",
                    fontSize: "14px"
                  }}
                >
                  {translations[language].reviews_description}
                </p>
              </div>
              {/* <Suspense fallback={null}> */}
                <Testimonials
                  data={reviews}
                  openImageModal={openImageModal}
                  isMobileView = {isMobileView}
                />  
              {/* </Suspense> */}
              <div
                style={{
                  width : "100%",
                  marginTop : "-2rem",
                  marginBottom : "3rem",
                  maxWidth:"300px",
                  margin : "auto"
                }}
              >
                <JoinUs
                  text={translations[language].get_my_instant_access}
                />
              </div>
            </div>
            <div
              style={{
                margin : "4rem 0",
                width : "100%",
                // height : "200px",
                border : "1px solid #e4e4e4",
                padding : "1rem 2rem",
                boxShadow : "0px 0px 4px #e9e9e9",
                borderRadius : "7px",
                display : "none"
              }}
            >
              <div
                style={{
                  display : "grid",
                  gridTemplateColumns : !isMobileView ? "30% 70%" : undefined,
                  width : "100%",
                  height : "100%"
                }}
              >
                <div
                  style={{
                    width : "198px",
                    height : "206px",
                    position  : "relative",
                    display : "flex",
                    margin : "auto"
                  }}
                >
                    <Image
                      src="/30days.webp"
                      alt="30days"
                      // alt="Image"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                </div>
                <div
                  style={{
                    display : "grid",
                    textAlign : "left"
                  }}
                >
                  <h1
                    style={{
                      textAlign : isMobileView ? "center" : "left",
                      margin : 0,
                      display : "flex",
                      alignItems : "center",
                      color : "black",
                      lineHeight : isMobileView ? "40px" : undefined,
                      marginBottom : "15px"
                    }}
                  >{translations[language].money_back}</h1>
                  <p
                    style={{
                      margin : 0,
                      textAlign : isMobileView ? "center" : "left"
                    }}
                  ></p>
                </div>
              </div>
            </div>
            <h1
              style={{
                textAlign:"center",
                margin : 0
              }}
            >
              Need Help ?
            </h1>
            <div
              style={{
                width : "100%",
                display : "flex",
                justifyContent : "center"
              }}
            >
              <Image
                  src="/line.png"
                  height={20}
                  width = {100}
                  alt="line_image"
                />
            </div>
              <br/>
            <div
              className={styles.sliderContainer}
              style={{
                marginTop : "10px",
                marginBottom : "2rem"
              }}
            >
                <div
                  className={styles.title_container}
                  // sty
                >
                  <strong>{translations[language].faq}</strong>
                  <div
                    style={{
                      position:"absolute",
                      right : 0,
                    }}
                  >
                    {/* <Link href="/support">{para[3].t}</Link> */}
                  </div>
                </div>
                <FAQComponent
                  params={params}
                />
            </div>
          </div>
          <div
                    style={{
                      // marginTop : "-6rem",
                      // display : "flex",
                      // position : "absolute",
                      // right : "0",
                      // height : "50px",
                      // background : "grey",
                      marginTop : "3rem",
                      width : "100%",
                      // display : "none"
                    }}
                    className="polygon_container"
                  >
                    <svg
                        style={{
                          marginBottom : isMobileView ? "-0.7rem" : "-1rem",
                          height : "37px"
                        }}
                        className="svg-intro-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon fill={isMobileView ? "#202abb" : "#313de7"} points="0,100 100,0 100,100"></polygon>
                    </svg>
                  </div>
          <div
              // id="patra"
              className={styles.paragraph}
              style={{
                position : "absolute",
                marginTop : "-20px",
                padding : 0,
                background : isMobileView ? "#202abb":"#313ee7",
                margin : 0,
                width : "100%",
                maxWidth : "100%",
                // display : "none"
                // position : "relative"
              }}
            >
                {/* {!isMobileView? */}
                {/* :null} */}
              <div
                style={{
                  position : "relative",
                  zIndex : 10,
                  padding : isMobileView ? "5rem 2rem 7rem" : "4rem 0 8rem",
                }}
              >
                <h1
                  style={{
                    color : "white",
                    textAlign : "center"
                  }}
                >
                  {translations[language].para_titles.t5}</h1>
                <div
                  className={styles.container_2}
                  style={{
                    background : "transparent"
                  }}
                >
                  <div
                    className={styles.buttonContainer}
                  >
                      {/* <Link
                        href="/checkout"
                      > */}
                      <button
                        style={{
                          background : "white",
                          color: "#3f5366",
                          fontWeight: 800
                        }}
                        onClick={()=>{console.log("hello");router.push('/checkout')}}
                        id="join-us-now"
                      >
                       {translations[language].join_us_now}
                      </button>
                    {/* </Link> */}
                    <button
                      style={{
                        background : "white",
                        color: "#3f5366",
                        fontWeight: 800
                      }}
                      onClick={()=>{setOpenChat(true)}}
                    >
                      <a>
                          {translations[language].contact_us}
                      </a> 
                    </button>
                  </div>
                </div>
              </div>
              {/* {!isMobileView? */}
                  <div
                    className="polygon_container_1"
                    style={{
                      // marginTop : "-2rem",
                      // display : "flex",
                      left : 0,
                      position : "absolute",
                      // right : "0",
                      // height : "50px",
                      // background : "grey",
                      width : "100%"
                    }}
                  >
                    <svg className="svg-features-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon fill="#fff" points="0,100 100,0 100,100"></polygon>
                    </svg>
                  </div>
                {/* :null} */}
                <Footer
                  isMobileView={isMobileView}
                  position="relative"
                />
            </div>
            {notice && <Notice isMobileView={isMobileView} position="relative" setNotice={setNotice} />}
    </div>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const { k } = ctx.query;
  // console.log(k, language);
  let isMobileView = (ctx.req
    ? ctx.req.headers['user-agent']
    : navigator.userAgent
  ).match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );
  try {
    const serverData = await fetchHeadlineData(k, language);
    // console.log(serverData)
    // const params = await fetchParams()
    // console.log(headlineData)
    // console.log("serverData",serverData)
    // Returning the isMobileView and headlineData as props to the component for further use.
    return {
      isMobileView: Boolean(isMobileView),
      serverData : serverData,
      params : serverData.params
    }
  } catch (error) {
    console.error(error);
    // Handle the error here, for example, show an error message.
    return {
      isMobileView: Boolean(isMobileView),
      serverData: {
        params : null,
        splash : null
      },
    };
  }
};

export default Home;
