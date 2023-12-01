import React , {useState,useEffect} from 'react'
import { push } from "@socialgouv/matomo-next";
import { useEffectOnceWhen, useLocalstorageState } from 'rooks';
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
// import styles from '../../styles/Home.module.css'
// import {BsWindows,BsApple,BsAndroid2} from 'react-icons/bs'
// import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdIosShare} from 'react-icons/md'
import Image from 'next/image';
import { useRouter } from 'next/router';
import {BsFillCheckCircleFill} from 'react-icons/bs'
import Brand from '../../layout/Brand';
import styles from '../../styles/Home.module.css'
import {Dt} from '../../data/plans'
// import { useEffect,useState , useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Apps from '../../components/apps';
import {MdNavigateNext} from 'react-icons/md'
import { translations } from '../../data/translation';
import {FaArrowRightLong} from 'react-icons/fa6'
import { fetchParams } from "../../api";
import JoinUs from '../../components/buttons/join_us';

const isTrialPage = process.env.NEXT_PUBLIC_IS_TRIAL

const language = process.env.NEXT_PUBLIC_LANGUAGE

const Plans = dynamic(() => import('../../components/pageCompo/pricing'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})
const Footer = dynamic(() => import('../../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})

const FreeTrialSucess0 = (props) => {
  const {
    isMobileView,
    params
  }=props
  const [userEmail,setUserEmail]=useLocalstorageState('userEmail',[])
  const router = useRouter()
  const trialStartDate = new Date(); // Replace with actual trial start date
  const trialEndDate = new Date(trialStartDate.getTime() + 24 * 60 * 60 * 1000); // Trial duration: 24 hours
  const availableChannels = ['Channel 1', 'Channel 2', 'Channel 3']; // Replace with actual available channels
  const trialFeatures = ['HD streaming', 'On-demand content']; // Replace with actual trial features
  const limitations = '* Please note that some premium channels and features may not be available during the trial period.';
  const [showAccessDetails, setShowAccessDetails] = useState(false);
  const [gotTrial,setGotTrial]=useLocalstorageState('gotTrial',{
    gotTrial : false,
    startDate : null,
    endData : null
  })
  const preferences = useSelector((state) => state.preferences.currency);
  const handleContactSupport = () => {
    // Add logic to contact support and retrieve access details here
    // For example, you can open a live chat or send an email
  };
const hideAccessDetails = () => {
  return '***';
};
const renderAccessDetails = () => {
  if (showAccessDetails) {
    return (
      <div>
        <p>{translations[language].trialSuccessPage.username} {retrieveUsername()}</p>
        <p>{translations[language].trialSuccessPage.password} {retrievePassword()}</p>
      </div>
    );
  }
  return (
    <div
      style={{
          padding: "8px 12px 10px",
          border: "1px solid",
          boxShadow: "rgb(231 231 231) 2px 2px 1px 0px",
          border: "1px solid #cecece",
          borderRadius : "10px",
          background : "#f8faff"
      }}
    >
      <h2
        style={{
          marginBottom: "0px",
          marginTop: 0
        }}
      >{translations[language].trialSuccessPage.access_details}</h2>
      <p>{translations[language].trialSuccessPage.username} ******</p>
      <p>{translations[language].trialSuccessPage.password} ******</p>
      <span>{translations[language].trialSuccessPage.contact_support}</span>
      <div>
        <button
          className='btn button_blue'
          style={{
            // height : "39px",
            width : "100%",
            maxWidth : "500px"
          }}
          onClick={() => setOpenChat(true)}>{translations[language].trialSuccessPage.get_access_details}</button>
        </div>
    </div>
  );
};
const retrieveUsername = () => {
  // Replace with logic to retrieve the username
  return 'exampleUsername';
};
const retrievePassword = () => {
  // Replace with logic to retrieve the password
  return 'examplePassword';
};
const [openChat,setOpenChat]=useState(false)
const [chatLoading,setChatLoading]=useState(false)
const [messageSent,setMessageSend]=useState(false)
useEffect(()=>{
  if (typeof $crisp !=='undefined'){
    setChatLoading(false)
  }
  else {
    setChatLoading(true)
  }
  if (openChat==true){
    // push(["trackEvent", "click event", "open chat"]);
    console.log($crisp)
    // $crisp.push(['on', 'chat:opened',handleChatOpen]);
    $crisp.push(['do', 'chat:open']);
    $crisp.push(["set", "user:email", [userEmail[0]]]);
    if (!gotTrial.gotTrial){
      setGotTrial({
        gotTrial : true,
        startDate : trialStartDate,
        endData : trialEndDate
      })
    }
    if (!messageSent && !gotTrial.gotTrial){
      $crisp.push(["do", "message:send", ["text",translations[language].trialSuccessPage.initial_message]]);
    }
    // $crisp.push(['on', 'chat:closed',handleChatClosed]);
    setOpenChat(false)
    setMessageSend(true)
  }
},[openChat])
  return (
      <div
        id="5"
        className={styles.container}
        style={{
          // height : "100%"
        }}
      >
          <div
              className="splash_free_trial"
          >
              <div
                  className="free_trial_success_page"
                  style={{
                      padding: "0 12px 22px",
                      background : "#f7f7f7",
                  }}
              >
                {params.free_trial_enabled ?
                <>
                <div
                  style={{
                    textAlign : "center",
                    paddingTop : "94px",
                    height : isMobileView ? "98vh" : "98vh",
                    // display : isMobileView ? "grid" : "grid",
                    // text-align: center;
                    // padding-top: 113px;
                    maxWidth: "534px",
                    margin: "auto",
                    marginBottom : "10vh",
                    display : "flex",
                    alignItems : "center"
                  }}
                >
                  <div>
                    <div
                      className='success_button'
                    >
                      <BsFillCheckCircleFill />
                    </div>
                    <div>
                      <h1>{translations[language].trialSuccessPage.trial_activated}</h1>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#828282"
                        }}
                      >
                        {translations[language].trialSuccessPage.thank_you}
                      </p>
                    </div>
                    <div
                      style={{
                        // display : "flex",
                        display: "flex",
                        width: "100%",
                        margin: 0,
                        justifyContent: "center",
                        alignItems: "flex-end",
                      }}
                    >
                      <div
                        style={{
                          textAlign : "left",
                          width : "100%",
                        }}
                      >
                        {renderAccessDetails()}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    maxWidth : "500px",
                    margin : "auto"
                  }}
                >
                  <h2>{translations[language].trialSuccessPage.trial_details}</h2>
                  <p>{translations[language].trialSuccessPage.start_date} {gotTrial.gotTrial ? gotTrial.startDate.toLocaleString() : trialStartDate.toLocaleString()}</p>
                  <p>{translations[language].trialSuccessPage.end_date} {gotTrial.gotTrial ? gotTrial.endData.toLocaleString() : trialEndDate.toLocaleString()}</p>
                  <h2>{translations[language].trialSuccessPage.trial_features}</h2>
                  <ul>
                    {translations[language].trialSuccessPage.trialFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                      ))}
                  </ul>
                  <p
                    style={{
                      fontSize : "13px",
                    }}
                  >{translations[language].trialSuccessPage.limitations}</p>
                {/* <h2>
                    Devices
                  </h2> */}
                </div>
                <Apps
                  isMobileView={isMobileView}
                />
              <div
                style={{
                  maxWidth : "839px",
                  margin : 'auto',
                  paddingBottom : "3rem",
                  paddingTop : "3rem",
                  color : "#000",
                  background : "#f7f7f7",
                }}
              >
                  <h1>{translations[language].trialSuccessPage.our_pricing_plans}</h1>
                  <div
                        style={{
                            display : isMobileView ? "block" : "flex",
                            gap : "2rem",
                            height : "100%",
                            justifyContent : "center"
                        }}
                    >
                        {Dt.map((obj,index)=>{
                            return (
                                <>     
                                    <div
                                        key={index}
                                        style={{
                                            border: "2px solid rgb(236 236 236)",
                                            borderRadius : "10px",
                                            maxWidth : isMobileView ? undefined : "250px",
                                            maxHeight : "250px",
                                            background : "#fff",
                                            display : isMobileView ? "block" : "grid",
                                            height : "100%",
                                            width : "100%",
                                            alignItems : "center",
                                            justifyContent : "center",
                                            padding : "10px 0",
                                            textAlign : "center",
                                            color : "#000",
                                            // border : index==period ? "2px solid blue" : undefined,
                                            // boxShadow : index==period ? "0px 0px 5px blue" : undefined,
                                            marginTop : isMobileView ? "20px" : undefined
                                        }}
                                        onClick={()=>{router.push('/checkout')}}
                                    >
                                        {!isMobileView ?
                                        <>
                                            <strong
                                                style={{
                                                    color : "#000"
                                                }}
                                            >{obj.period==1 ? '1 ' + translations[language].checkout.month_pass : obj.period + ' ' + translations[language].checkout.months_pass }</strong>
                                            <div
                                                style={{
                                                    display : "grid"
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        color : "#000",
                                                        fontWeight : 800,
                                                        fontSize : "30px"
                                                    }}
                                                >
                                                    {obj.Connections[0].price[preferences.index].amount}
                                                    {/* &#160;  */}
                                                    <span
                                                        style={{
                                                            fontSize : "20px",
                                                        }}
                                                    >
                                                        {obj.Connections[0].price[preferences.index].symbol}
                                                    </span>
                                                </div>
                                                <span
                                                    style={{
                                                        fontSize : "15px",
                                                        marginTop : "-15px"
                                                    }}
                                                >
                                                    per month
                                                </span>
                                                <span
                                                    style={{
                                                        color : index == 1 ? "#fff":"#000",
                                                        background : index == 1 ? "#00e800":"#fff",
                                                        border : index == 1 ? 0 : "1px solid grey",
                                                        borderRadius : "12px",
                                                        fontSize : "14px"
                                                    }}
                                                >
                                                    {obj.save}
                                                </span>
                                                <span
                                                    style={{
                                                        fontSize : "10px",
                                                        marginTop : "10px"
                                                    }}
                                                >
                                                    {index==0 ? '7-day money-back guarantee' :"30-day money-back guarantee"}
                                                </span>
                                            </div>
                                                <button
                                                  style={{
                                                    width : "calc(100% + 40px)",
                                                    border :"1px solid grey",
                                                    background : "#0fb70f",
                                                    color : "white",
                                                    height : "40px",
                                                    display :"flex",
                                                    alignItems :"center",
                                                    justifyContent  :"center",
                                                    marginLeft  :"-20px",
                                                    marginTop : "10px",
                                                    borderRadius  :"5px",
                                                    fontWeight : 800,
                                                    border : 0 
                                                  }}
                                                >
                                                  {translations[language].order_now}
                                                </button>
                                        </>
                                        :
                                        <div
                                            style={{
                                                width : "100%",
                                                display : "flex",
                                                justifyContent : "space-between",
                                                padding : "0px 0rem 0 1rem",
                                                alignItems  : "center"

                                            }}
                                        >
                                            <strong>{obj.period==1 ? '1 ' + translations[language].checkout.month_pass : obj.period + ' ' + translations[language].checkout.months_pass }</strong>
                                            <div
                                                    style={{
                                                        color : "#000",
                                                        fontWeight : 800,
                                                        fontSize : "20px"
                                                    }}
                                                >
                                                    {obj.Connections[0].price[preferences.index].amount}
                                                    {/* &#160;  */}
                                                    <span
                                                        style={{
                                                            fontSize : "12px",
                                                        }}
                                                    >
                                                        {obj.Connections[0].price[preferences.index].symbol} / {translations[language].month}
                                                    </span>
                                              </div>
                                              <div
                                                style={{
                                                  // height : "100%",
                                                  width : "50px",
                                                  display : "flex",
                                                  alignItems : "center",
                                                  justifyContent : "center"
                                                }}
                                              >
                                                <FaArrowRightLong />
                                              </div>
                                        </div>
                                        }
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                </>
                :
                <>
                <div
                  style={{
                    textAlign : "center",
                    paddingTop : "94px",
                    height : isMobileView ? "98vh" : "98vh",
                    // display : isMobileView ? "grid" : "grid",
                    // text-align: center;
                    // padding-top: 113px;
                    maxWidth: "534px",
                    margin: "auto",
                    marginBottom : "10vh",
                    display : "flex",
                    alignItems : "center",
                    // padding : "94px 10px"
                  }}
                >
                  <div>
                    <div
                      className='success_button'
                    >
                      <BsFillCheckCircleFill />
                    </div>
                    <div>
                      <h1>{translations[language].trialSuccessPage.trial_waitList}</h1>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#828282"
                        }}
                      >
                        {translations[language].trialSuccessPage.trial_waitList_thank_you}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    maxWidth : "700px",
                    margin : "auto",
                    padding : isMobileView ? "10px" : "10px 30px",
                    border : "1px solid rgb(219 219 219)",
                    borderRadius : "5px",
                    boxShadow : "1px 1px 1px #e8edfe",
                    marginBottom : isMobileView ? undefined : "4rem"
                  }}
                >
                  <div
                    style={{
                      fontWeight : 800,
                      fontSize : "26px",
                      textAlign : "center"
                    }}
                  >
                    {translations[language].explore_competitive_pricing}
                  </div>
                  <div
                    style={{
                      color : "grey",
                      textAlign: "center"
                    }}
                  >
                    {translations[language].cant_wait}
                  </div>
                  <div
                    style={{
                      marginTop : "40px"
                    }}
                  >
                    <JoinUs
                      text={translations[language].explore_now}
                    />
                  </div>
                </div>
                {/* <Apps
                  isMobileView={isMobileView}
                /> */}
              {/* <div
                style={{
                  maxWidth : "839px",
                  margin : 'auto',
                  paddingBottom : "3rem",
                  paddingTop : "3rem",
                  color : "#000",
                  background : "#f7f7f7",
                }}
              >
                  <h1>{translations[language].trialSuccessPage.our_pricing_plans}</h1>
                  <div
                        style={{
                            display : isMobileView ? "block" : "flex",
                            gap : "2rem",
                            height : "100%",
                            justifyContent : "center"
                        }}
                    >
                        {Dt.map((obj,index)=>{
                            return (
                                <>     
                                    <div
                                        key={index}
                                        style={{
                                            border: "2px solid rgb(236 236 236)",
                                            borderRadius : "10px",
                                            maxWidth : isMobileView ? undefined : "250px",
                                            maxHeight : "250px",
                                            background : "#fff",
                                            display : isMobileView ? "block" : "grid",
                                            height : "100%",
                                            width : "100%",
                                            alignItems : "center",
                                            justifyContent : "center",
                                            padding : "10px 0",
                                            textAlign : "center",
                                            color : "#000",
                                            // border : index==period ? "2px solid blue" : undefined,
                                            // boxShadow : index==period ? "0px 0px 5px blue" : undefined,
                                            marginTop : isMobileView ? "20px" : undefined
                                        }}
                                        onClick={()=>{router.push('/checkout')}}
                                    >
                                        {!isMobileView ?
                                        <>
                                            <strong
                                                style={{
                                                    color : "#000"
                                                }}
                                            >{obj.period==1 ? '1 ' + translations[language].checkout.month_pass : obj.period + ' ' + translations[language].checkout.months_pass }</strong>
                                            <div
                                                style={{
                                                    display : "grid"
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        color : "#000",
                                                        fontWeight : 800,
                                                        fontSize : "30px"
                                                    }}
                                                >
                                                    {obj.Connections[0].price[preferences.index].amount}
                                                    <span
                                                        style={{
                                                            fontSize : "20px",
                                                        }}
                                                    >
                                                        {obj.Connections[0].price[preferences.index].symbol}
                                                    </span>
                                                </div>
                                                <span
                                                    style={{
                                                        fontSize : "15px",
                                                        marginTop : "-15px"
                                                    }}
                                                >
                                                    per month
                                                </span>
                                                <span
                                                    style={{
                                                        color : index == 1 ? "#fff":"#000",
                                                        background : index == 1 ? "#00e800":"#fff",
                                                        border : index == 1 ? 0 : "1px solid grey",
                                                        borderRadius : "12px",
                                                        fontSize : "14px"
                                                    }}
                                                >
                                                    {obj.save}
                                                </span>
                                                <span
                                                    style={{
                                                        fontSize : "10px",
                                                        marginTop : "10px"
                                                    }}
                                                >
                                                    {index==0 ? '7-day money-back guarantee' :"30-day money-back guarantee"}
                                                </span>
                                            </div>
                                                <button
                                                  style={{
                                                    width : "calc(100% + 40px)",
                                                    border :"1px solid grey",
                                                    background : "#0fb70f",
                                                    color : "white",
                                                    height : "40px",
                                                    display :"flex",
                                                    alignItems :"center",
                                                    justifyContent  :"center",
                                                    marginLeft  :"-20px",
                                                    marginTop : "10px",
                                                    borderRadius  :"5px",
                                                    fontWeight : 800,
                                                    border : 0 
                                                  }}
                                                >
                                                  {translations[language].order_now}
                                                </button>
                                        </>
                                        :
                                        <div
                                            style={{
                                                width : "100%",
                                                display : "flex",
                                                justifyContent : "space-between",
                                                padding : "0px 0rem 0 1rem",
                                                alignItems  : "center"

                                            }}
                                        >
                                            <strong>{obj.period==1 ? '1 ' + translations[language].checkout.month_pass : obj.period + ' ' + translations[language].checkout.months_pass }</strong>
                                            <div
                                                    style={{
                                                        color : "#000",
                                                        fontWeight : 800,
                                                        fontSize : "20px"
                                                    }}
                                                >
                                                    {obj.Connections[0].price[preferences.index].amount}
                                                    <span
                                                        style={{
                                                            fontSize : "12px",
                                                        }}
                                                    >
                                                        {obj.Connections[0].price[preferences.index].symbol} / {translations[language].month}
                                                    </span>
                                              </div>
                                              <div
                                                style={{
                                                  // height : "100%",
                                                  width : "50px",
                                                  display : "flex",
                                                  alignItems : "center",
                                                  justifyContent : "center"
                                                }}
                                              >
                                                <FaArrowRightLong />
                                              </div>
                                        </div>
                                        }
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div> */}
                </>
                }
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
FreeTrialSucess0.getInitialProps = async (ctx) => {
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
export default FreeTrialSucess0