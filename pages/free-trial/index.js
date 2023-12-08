import EmailForm from "../../components/forms/email"
import React , {useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import { useLocalstorageState } from "rooks";
// import Plans from "../../components/pageCompo/pricing";
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import styles from '../../styles/Home.module.css'
import Image from "next/image";
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaRocketchat} from 'react-icons/fa'
import {GrServerCluster} from 'react-icons/gr'
import {MdAndroid} from 'react-icons/md'
import {GiServerRack} from 'react-icons/gi'
// import { faq } from "../../data/home";
import {HiMinus,HiPlus} from 'react-icons/hi'
import Brand from "../../layout/Brand";
import {useWindowScrollPosition} from 'rooks'
import {reviews,faq,para,splash} from '../../data/home'
import JoinUs from '../../components/buttons/join_us'
import AnimatedMap from '../../components/pageCompo/map'
import { translations } from "../../data/translation";
import { fetchParams } from "../api";
const language = process.env.NEXT_PUBLIC_LANGUAGE

const Testimonials = dynamic(() => import('../../components/pageCompo/testimonials'), {
  suspense: true,
  ssr : true
})
const isTrialPage = process.env.NEXT_PUBLIC_IS_TRIAL

// import EmailForm0 from "../components/forms/form0";
// import styles from '../styles/Home.module.css'

// const Plans = dynamic(() => import('./components/pageCompo/pricing'), {
//     suspense: true,
//     ssr : true,
//     loading: undefined,
// })
const Footer = dynamic(() => import('../../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})

const FreeTrial = (props) => {

  const position = useWindowScrollPosition(); // default config: { wait = 100, passive = true }
  console.log(position); // {x: ..., y: ...}
  useEffect(()=>{
    console.log(position)
  },[position])


    const {isMobileView,params} = props
    const [state,setState]=useState('idle')
    const router = useRouter()
    useEffect(()=>{
        if (state=='loaded'){
            router.push(isTrialPage=='no' ? '/free-trial/success' : '/success');
        }
    },[state])
    const goHome = () => {
        router.push('/')
    }
    const [activeA,setActiveA]=useState('none')
    // const position = useWindowScrollPosition()
    const [visibleImage,setVisibleImage]=useState(null)
    const [modalVisible,setModalVisible]=useState(false)
    const openImageModal = (url) =>{
      setModalVisible(true)
      setVisibleImage(url)
    }
    console.log(params)
    return (
        <div
            id="5"
            className={styles.container}
        >
            <div
                className="splash_free_trial"
                style={{
                  background : position.scrollY>36 ? "#fff" : undefined
                }}
            >
                <div
                    style={{
                        display :"grid",
                        justifyContent : "center",
                        alignItems : "center",
                        width :"100%",
                        height : "100%",
                        // gridTemplateRows : "20% 10% 30% 40%",
                        padding : "0px 19px",
                        textAlign : "center",
                    }}
                >
                    <div
                        onClick={()=>goHome()}
                        style={{
                            // border: "3px solid blue",
                            fontSize: "24px",
                            color: "blue",
                            fontWeight: 800,
                            padding: "2px 16px",
                            margin: "auto",
                            maxWidth : "428px",
                            height: "",
                            paddingTop: "16px",
                            // height
                        }}
                    >
                        {/* <Brand /> */}
                    </div>
                    <div
                        className="free_container"
                        style={{
                            color : "#000",
                            // display : "flex",
                            // alignItems : "center",
                            // justifyContent : "center",
                            fontSize: "38px",
                            fontWeight: 700,
                            lineHeight: "50px",
                            // maxWidth : "530px"
                        }}
                    >
                      <div
                        className="my_title"
                      >
                        <span
                            style={{
                                background : "#8888ff",
                                padding : "5px 0 5px 9px",
                                marginRight : "5px",
                                color : "#fff"
                            }}
                        >
                          {translations[language].free_trial.title.part1} </span>{translations[language].free_trial.title.part2}
                      </div>
                      <p
                        className="p_1"
                        style={{
                          color : "rgb(102 102 102)",
                          textAlign : "center",
                          // lineHeight : "26px",
                          marginTop : "21px",
                          // fontSize : "17px"
                        }}
                      >
                        {params.free_trial_enabled ?
                          <>
                            {translations[language].free_trial.description}
                          </>
                          :
                          <>
                            {translations[language].free_trial.description_waitList}
                          </>
                          }
                        </p>
                    {/* <div
                        style={{
                            maxWidth : "610px"
                        }}
                    >
                    </div> */}
                    </div>
                    <div
                        style={{
                            maxWidth: "428px",
                            margin: "auto"
                        }}
                    >
                        <EmailForm
                            state={state}
                            setState={setState}
                            buttonText={params.free_trial_enabled ? translations[language].get_my_free_trial : translations[language].join_waitList }
                            enabled={params.free_trial_enabled}
                        />
                        <div
                            style={{
                                color : "#000",
                                marginTop :"10px"
                            }}
                        >
                            <p
                                style={{
                                    lineHeight: "15px",
                                    fontSize: "12px",
                                    textAlign: "left"
                                }}
                            >
                            <p
                                style={{
                                    lineHeight: "11px",
                                    color: "grey",
                                    fontSize: "11px"
                                }}
                            >
                                {translations[language].free_trial.notice.part1}  
                                <a
                                    style={{
                                        color : "blue"
                                    }}
                                     href="/privacy-policy" target="_blank" rel="noopener noreferrer">{translations[language].terms_of_service} </a>.
                                {translations[language].free_trial.notice.part2} 
                            </p>                            </p>
                        </div>
                    </div>
                </div>
                <div 
                  style={{ 
                    width: 'calc(100% - 20px)', 
                    position: 'relative' , 
                    margin : isMobileView ? "10px" : "auto",maxWidth : "690px" 
                  }}>
                  <div style={{ paddingBottom: '75%', position: 'relative', height: 0 }}>
                    <Image src="/splah.png" alt="splah" layout="fill" objectFit="cover" />
                  </div>
                </div>
                <div
                  style={{
                    display : isMobileView ? "grid" : "grid",
                    gap : isMobileView ? "5px" : "1rem 1rem",
                    gridTemplateColumns: isMobileView ? undefined : "repeat(auto-fit, minmax(489px, 1fr))",
                    margin: isMobileView ? undefined : "56px",
                    margin: isMobileView ? "10px" : "56px",
                    maxWidth: "1337px",
                    display: "grid",
                    gridGap: isMobileView ? undefined : "2rem 1rem",
                    gap: isMobileView ? "1rem 1rem" : undefined,
                    // gridTemplateColumns: "repeat(auto-fit, minmax(489px, 1fr))",
                    // marginBottom: "1rem",
                    // marginTop: "2rem",
                    padding: isMobileView ? undefined : "5rem"
                  }}
                >
                  {/* import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
                  import {FaRocketchat} from 'react-icons/fa'
                  import {GrServerCluster} from 'react-icons/gr'
                  import {BsAndroid} from 'react-icons' */}
                  <div
                    style={{
                      display : "grid",
                      justifyContent : "center",
                      boxShadow : "#d8d8d8 0px 1px 5px",
                      background : "white",
                      // width : ""
                      padding : "29px 18px",
                      gap : "10px",
                      margin : "10px",
                      textAlign : "center",
                      border: "1px solid rgb(239 239 239)",
                      borderRadius: "15px",
                      boxShadow: "1px 1px 4px grey",
                      background: "#f9faff",
                      // maxWidth : "20px"
                    }}
                  >
                    <div
                      style={{
                        width : "100%",
                        display : "flex",
                        justifyContent : "center"
                      }}
                    >
                      <div
                        style={{
                          borderRadius : "50%",
                          width : "70px",
                          height : "70px",
                          padding : "0px",
                          background : "rgba(5, 183, 114, 1)",
                          justifyContent : "center",
                          alignItems : "center",
                          display : "flex",
                          // width : "100%",
                          fontSize : "33px"
                        }}
                      >
                        <AiOutlineFundProjectionScreen />
                      </div>
                    </div>
                    <h3
                      style={{
                        color : "#000",
                        fontSize : "20px"
                      }}
                    >{translations[language].free_trial.features.part1.title}</h3>
                    <p>{translations[language].free_trial.features.part1.description}</p>
                  </div>
                  <div
                    style={{
                      display : "grid",
                      justifyContent : "center",
                      boxShadow : "#d8d8d8 0px 1px 5px",
                      background : "white",
                      // width : ""
                      padding : "29px 18px",
                      gap : "10px",
                      margin : "10px",
                      textAlign : "center",
                      border: "1px solid rgb(239 239 239)",
                      borderRadius: "15px",
                      boxShadow: "1px 1px 4px grey",
                      background: "#f9faff",
                    }}
                  >
                    <div
                      style={{
                        width : "100%",
                        display : "flex",
                        justifyContent : "center"
                      }}
                    >
                      <div
                        style={{
                          borderRadius : "50%",
                          width : "70px",
                          height : "70px",
                          padding : "0px",
                          background : "rgba(5, 183, 114, 1)",
                          justifyContent : "center",
                          alignItems : "center",
                          display : "flex",
                          // width : "100%",
                          fontSize : "33px"
                        }}
                      >
                        <FaRocketchat />
                      </div>
                    </div>
                    <h3
                      style={{
                        color : "#000",
                        fontSize : "20px"
                      }}
                      >{translations[language].free_trial.features.part2.title}</h3>
                      <p>{translations[language].free_trial.features.part2.description}</p>
                  </div>
                  <div
                    style={{
                      display : "grid",
                      justifyContent : "center",
                      boxShadow : "#d8d8d8 0px 1px 5px",
                      background : "white",
                      // width : ""
                      padding : "29px 18px",
                      gap : "10px",
                      margin : "10px",
                      textAlign : "center",
                      border: "1px solid rgb(239 239 239)",
                      borderRadius: "15px",
                      boxShadow: "1px 1px 4px grey",
                      background: "#f9faff",
                    }}
                  >
                    <div
                      style={{
                        width : "100%",
                        display : "flex",
                        justifyContent : "center"
                      }}
                    >
                      <div
                        style={{
                          borderRadius : "50%",
                          width : "70px",
                          height : "70px",
                          padding : "0px",
                          background : "rgba(5, 183, 114, 1)",
                          justifyContent : "center",
                          alignItems : "center",
                          display : "flex",
                          // width : "100%",
                          fontSize : "33px",
                          color : "#fff"
                        }}
                      >
                        <GiServerRack />
                      </div>
                    </div>
                    <h3
                      style={{
                        color : "#000",
                        fontSize : "20px"
                      }}
                      >{translations[language].free_trial.features.part3.title}</h3>
                      <p>{translations[language].free_trial.features.part3.description}</p>
                  </div>
                  <div
                    style={{
                      display : "grid",
                      justifyContent : "center",
                      boxShadow : "#d8d8d8 0px 1px 5px",
                      background : "white",
                      // width : ""
                      padding : "29px 18px",
                      gap : "10px",
                      margin : "10px",
                      textAlign : "center",
                      border: "1px solid rgb(239 239 239)",
                      borderRadius: "15px",
                      boxShadow: "1px 1px 4px grey",
                      background: "#f9faff",
                    }}
                  >
                    <div
                      style={{
                        width : "100%",
                        display : "flex",
                        justifyContent : "center"
                      }}
                    >
                      <div
                        style={{
                          borderRadius : "50%",
                          width : "70px",
                          height : "70px",
                          padding : "0px",
                          background : "rgba(5, 183, 114, 1)",
                          justifyContent : "center",
                          alignItems : "center",
                          display : "flex",
                          // width : "100%",
                          fontSize : "33px",
                          color : "#fff"
                        }}
                      >
                        <MdAndroid />
                      </div>
                    </div>
                    <h3
                      style={{
                        color : "#000",
                        fontSize : "20px"
                      }}
                      >{translations[language].free_trial.features.part4.title}</h3>
                      <p>{translations[language].free_trial.features.part4.description}</p>
                  </div>
                </div>
                <div
                  style={{
                    padding : "18px"
                  }}
                >
                <div
                        style={{
                            maxWidth: "428px",
                            margin: "auto"
                        }}
                    >
                        <EmailForm
                            state={state}
                            setState={setState}
                            buttonText={params.free_trial_enabled ? translations[language].get_my_free_trial : translations[language].join_waitList }
                        />
                        <div
                            style={{
                                color : "#000",
                                marginTop :"10px"
                            }}
                        >
                            <p
                                style={{
                                    lineHeight: "15px",
                                    fontSize: "12px",
                                    textAlign: "left"
                                }}
                            >
                            <p
                                style={{
                                    lineHeight: "18px",
                                    color: "grey",
                                    fontSize: "12px"
                                }}
                            >
                                {translations[language].free_trial.notice.part1}
                                <a
                                    style={{
                                        color : "blue"
                                    }}
                                     href="/privacy-policy" target="_blank" rel="noopener noreferrer">{translations[language].terms_of_service}</a>.
                                {translations[language].free_trial.notice.part2}
                            </p>                            </p>
                        </div>
                    </div>
                    </div>
                    <h3
                      style={{
                        color : "#000",
                        fontSize : "20px",
                        textAlign : "center"
                      }}
                    >{translations[language].how_it_works}</h3>
                    <div
                      style={{
                        margin : isMobileView ? "15px" : "auto",
                        marginBottom : "40px",
                        maxWidth : "500px",
                      }}
                    >
                      {
                        translations[language].free_trial.faq.map((obj,index)=>{
                          return (
                            <div
                              key={index}
                              style={{
                                marginBottom : "12px"
                              }}
                            >
                              <div
                                style={{
                                  background : activeA==index ? "rgba(4, 183, 114, 1)" : "#fff",
                                  borderTopLeftRadius : "5px",
                                  borderTopRightRadius : "5px",
                                  padding : "7px 8px",
                                  color : activeA==index ? "#fff" : "#000",
                                  display : "flex",
                                  justifyContent : "space-between",
                                  boxShadow : "rgb(150 150 150) 1px 1px 4px",
                                  borderRadius : activeA==index ? undefined : "5px"
                                }}
                                onClick={()=>setActiveA(activeA==index ? 'none' : index)}
                              >
                                <span
                                  style={{
                                    fontWeight : "700"
                                  }}
                                >{obj.q}</span>
                                <div>
                                  {activeA!=index?
                                    <HiPlus />
                                    :
                                    <HiMinus />
                                  }
                                </div>
                              </div>
                              {
                                activeA==index?
                                  <div
                                    style={{
                                      color : "#000",
                                      background : "#fff",
                                      padding : "10px",
                                      border : "1px solid grey"
                                    }}
                                  >
                                    <p>{obj.a}</p>
                                  </div>
                                  :null
                              }
                            </div>
                          )
                        })
                      }
                    </div>
                    <div
                      style={{
                        // width : "100%"
                      }}
                    >
                      <h1
                        style={{
                          margin : "9px 0 1px",
                          textAlign : "center",
                          lineHeight : isMobileView ? "39px" : undefined,
                          color : "black",
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
                              fontSize: "14px",
                              padding : "0 10px"
                            }}
                          >
                            {translations[language].reviews_description}
                          </p>
                        </div>
                        <div
                          style={{
                            position : "relative",
                            width : "100%",
                            padding : "25px",
                            maxWidth : "1000px",
                            margin : "auto"
                          }}
                        >
                          <Suspense fallback={null}>
                            <Testimonials
                              data={reviews}
                              openImageModal={openImageModal}
                              isMobileView = {isMobileView}
                            />
                          </Suspense>
                        </div>
                        <div
                          style={{
                            width : "100%",
                            marginTop : "-2rem",
                            marginBottom : "3rem",
                            maxWidth:"300px",
                            margin : "auto",
                            marginTop: !isMobileView  ? "-81px" : "-81px",
                            marginBottom: !isMobileView  ? "100px" : "100px"
                          }}
                        >
                          <JoinUs
                            text={translations[language].get_my_instant_access}
                          />
                        </div>
                </div>
                <div
            // className={styles.paragraph}
                  style={{
                    marginTop : "-20px",
                    // height : "400px",
                    background : "blue",
                    background : "#202abb",
                    // display : isMobileView ? undefined : "none",
                    marginTop : "40px",
                    padding : isMobileView ? "73px 37px" : "73px 237px",
                    marginBottom : "40px",
                    width : "calc(100%)",
                    maxWidth : "1000px",
                    margin : "auto",
                    borderRadius : !isMobileView ? "10px" : undefined,
                    marginBottom : !isMobileView  ? "100px" : "100px"
              // marginLeft : "-2rem"
            }}
          >
            <AnimatedMap />
            {/* <div
              style={{

              }}
            >
              <img src="https://iptvfiesta.com/_ipx/h_406/img/website/countries.webp" alt="map" width="100%" height="auto" />
            </div> */}
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
                <Suspense fallback={null}>
                  <Footer
                      isMobileView={isMobileView}
                  />
              </Suspense>
            </div>
          </div>
    )
}
FreeTrial.getInitialProps = async (ctx) => {
  // console.log(k, language);
  let isMobileView = (ctx.req
    ? ctx.req.headers['user-agent']
    : navigator.userAgent
  ).match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );
  try {
    const serverData = await fetchParams();
    // console.log(headlineData)
    // console.log("serverData",serverData)
    // Returning the isMobileView and headlineData as props to the component for further use.
    return {
      isMobileView: Boolean(isMobileView),
      params : serverData
    }
  } catch (error) {
    console.error(error);
    // Handle the error here, for example, show an error message.
    return {
      isMobileView: Boolean(isMobileView),
      params : null
    };
  }
};
export default FreeTrial