import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
// import st from '../styles/Support.module.css'
import Image from 'next/image'
import React , {useState,useEffect} from 'react'
import { useLocalstorageState } from 'rooks'
// import { useDispatch,useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophyStar,
  faBadgeCheck,
  faHeadSet
    
} from "@fortawesome/free-solid-svg-icons";
// const BasicTable = dynamic(() => import('../components/tables/basicTable'), {
//     suspense: true,
// })
import {GoChevronDown} from 'react-icons/go'
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions";
import {plans,promise,dt,credits,credits2,faq} from '../data/reselling'
import SplashReseller from '../components/splash/resellerSplash'
import { useWindowEventListener, useWindowScrollPosition } from 'rooks'
import {FaChevronRight} from 'react-icons/fa'
import { translations } from '../data/translation'

const language = process.env.NEXT_PUBLIC_LANGUAGE

const Plan = dynamic(() => import('../components/pageCompo/plan'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})

const QandA = dynamic(() => import('../components/pageCompo/faq'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})

const Footer = dynamic(() => import('../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})
const CartA = dynamic(() => import('../components/pageCompo/CartA'), {
    ssr: false,
})
const ResellerPage0 = (props) => {
    const {isMobileView} = props
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const [selectedPlan,setSelectedPlan]=useState(0)
    const handleSelectedPlan = (obj) => {
        setSelectedPlan(obj)
    }
    const plan = useSelector((state) => state.cart.data.plan);
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(
    //         setCart({
    //             plan : {
    //                 ...plan,
    //                 connection : 1
    //         }}))
    // },[])
    const handleActivePeriod = (p) => {
        dispatch(
            setCart({
                plan : {
                    ...plan,
                    period : p
        }}))
    }
    const [change,setchange]=useState(false)
    const position = useWindowScrollPosition()
    const [displayDes,setDisplayDes]=useState(false)
    const [openChat,setOpenChat]=useState(false)
    const [isOpen,setIsOpen] = useState(null)


    const [resellerMessage,setResellerMessage]=useLocalstorageState('reseller',false)
    useEffect(()=>{
        if (openChat==true){
        //   push(["trackEvent", "click event", "open chat"]);
          console.log($crisp)
          // $crisp.push(['on', 'chat:opened',handleChatOpen]);
          $crisp.push(['do', 'chat:open']);
        //   $crisp.push(["set", "user:email", [userEmail[0]]]);
        //   if (!gotTrial.gotTrial){
        //     setGotTrial({
        //       gotTrial : true,
        //       startDate : trialStartDate,
        //       endData : trialEndDate
        //     })
        //   }
          if (!resellerMessage){
            $crisp.push(["do", "message:send", ["text","Hello! I am interested in your reseller program, I need more informations"]]);
          }
          // $crisp.push(['on', 'chat:closed',handleChatClosed]);
          setOpenChat(false)
          setResellerMessage(true)
        //   setMessageSend(true)
        }
      },[openChat])
    return (
        <>
                <div
                    id="5"
                    className={styles.container}
                    style={{
                        background : position.scrollY>36 ? "#fff" : undefined
                    }}
                >
                    <main className={styles.main}>
                        <SplashReseller
                            displayDes={displayDes}
                            setOpenChat={setOpenChat}
                            setDisplayDes={setDisplayDes}
                            // backImage={splash.image.url}
                            isMobileView={isMobileView}
                        />
                    </main>
                    {/* <div
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
                                // paddingBottom : isMobileView ? "4rem" : "8rem",
                                // paddingTop : isMobileView ? undefined : "2rem",
                                padding : isMobileView ? "0 1rem 4rem 1rem" : "2rem 0 8rem 0"
                            }}
                        >
                        <h1
                            style={{
                                color : "#fff",
                                fontSize : isMobileView ? "23px" : "40px",
                                marginBottom : isMobileView ? undefined : "2rem",
                                textAlign : isMobileView ? "center": undefined
                            }}
                        >
                            Why You Should Use Our IPTV reseller program ?
                        </h1>
                        <div
                            className="cards-2 cards"
                            style={{
                                marginTop: "38px"
                            }}
                        >
                            {dt.map((obj,index)=>{
                                return (
                                    <div
                                        key={index}
                                        className="card"
                                        style={{
                                            padding : isMobileView ? undefined : "15px",
                                            margin : 0,
                                            border : 0,
                                            display : "grid"
                                        }}
                                    >
                                    <div
                                        className={styles.features_container}
                                    >
                                        <div>
                                            <Image
                                                src={obj.image}
                                                height = "80px"
                                                width = "80px"
                                                alt={`index-${index}`}
                                            />
                                        </div>
                                        <strong
                                            style={{
                                                color : "white",
                                                fontSize : isMobileView ? "12px" : undefined
                                            }}
                                        >{obj.title}</strong>
                                        <p
                                            style={{
                                                color : "white"
                                            }}
                                        >{obj.description}</p>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                        <div
                            style={{
                                position : "relative",
                                width : isMobileView ? undefined : "200px",
                                margin : "auto",
                                border : "1px solid #fff"
                            }}
                        >
                        </div>
                        <h1
                            style={{
                                color : "#fff",
                                fontSize : "40px",
                                marginBottom : isMobileView ? undefined : "2rem",
                                textAlign : isMobileView ? "center" : undefined
                            }}
                        >
                            Our promises
                        </h1>
                        <div
                            className="cards"
                            style={{
                                marginTop: "38px"
                            }}
                        >
                            {promise.map((obj,index)=>{
                                return (
                                    <div
                                        key={index}
                                        className="card"
                                        style={{
                                            padding : "15px",
                                            margin : 0,
                                            border : 0
                                        }}
                                    >
                                        <div
                                            className={styles.features_container}
                                        >
                                            <div>
                                                <Image
                                                    src={obj.image}
                                                    height = "80px"
                                                    width = "80px"
                                                    alt={`line-${index}`}
                                                />
                                            </div>
                                            <strong
                                                style={{
                                                    color : "white"
                                                }}
                                            >{obj.title}</strong>
                                            <p
                                                style={{
                                                    color : "white"
                                                }}
                                            >{obj.descriptiom}</p>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
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
                    </div> */}
                    <div
                        className={styles.para}
                        style={{
                            background : "#fff",
                            maxWidth : "900px",
                            margin : "auto",
                            padding : isMobileView ? "0rem 16px 2rem" : "0rem 2rem"
                        }}
                    >
                        <h1
                            style={{
                                width :"100%",
                                textAlign : "center"
                            }}
                        >FAQ</h1>
                        <div
                            className={styles.header}
                            style={{
                                // marginBottom : isMobileView ? undefined : "3rem"
                            }}
                        >
                            {/* {
                                faq.map((obj,index)=>{
                                    return (
                                        <div
                                            key={index}
                                        >
                                            <h1>{obj.title}</h1>
                                            <p>{obj.description}</p> 
                                        </div>
                                            )
                                        })
                                                    } */}
                                {translations[language].resellingPage.faqList.map((qa,index)=>{
                                    let data = {
                                        question : qa.title,
                                        answer : qa.description
                                    }
                                    return (
                                    <div
                                        key={qa.id}
                                    >
                                        <Suspense fallback={null}>
                                        <QandA
                                            data={data}
                                            isOpen={isOpen}
                                            setIsOpen={setIsOpen}
                                            index={index}
                                        />
                                        </Suspense>
                                    </div>
                                    )
                                })}
                            </div>



                            {/* <h1>How many Credit Points will you get?</h1> */}



                        {/* <h1>Our pricing Plans</h1>
                        <div
                            style={{
                                display: isMobileView ? "block" : "grid",
                                gridTemplateColumns: "64% 34%",
                                position: "relative",
                                height: "100%",
                                width: "100%",
                                gap: "24px"
                            }}
                        >
                            <div
                                style={{
                                    width : "100%",
                                }}
                            >
                            <Suspense fallback={null}>
                                <Plan
                                    data={plans.prices[0]}
                                    preferences = {plans.preferences}
                                    isMobileView={isMobileView}
                                    cart = {false}
                                    color = "#0078d7"
                                    change={change}
                                    setchange={setchange}
                                    isActive={plans.preferences.isActive}
                                />
                            </Suspense>
                            </div>
                            {!isMobileView ?
                                <div
                                    className="cart_wrapper"
                                >
                                    <CartA
                                        // plan={selectedPlan}
                                        data={plans.prices}
                                        isActive={plans.preferences.isActive}
                                        handleActivePeriod={handleActivePeriod}
                                        setchange={setchange}
                                        periods = {false}
                                    />
                                </div>
                            :null}
                        </div> */}
                        {/* <h1>What makes us special?</h1>
                        <Image
                            src="/line.png"
                            height={20}
                            width = {100}
                            alt="line_image"
                        />
                        <div
                            className="cards-2 cards"
                            style={{
                                marginTop: "38px"
                            }}
                        >
                            {dt.map((obj,index)=>{
                                return (
                                    <div
                                        key={index}
                                        className="card"
                                        style={{
                                            padding : "15px",
                                            margin : 0
                                        }}
                                    >
                                    <div
                                        className={styles.features_container}
                                    >
                                        <div>
                                            <Image
                                                src={obj.image}
                                                height = "80px"
                                                width = "80px"
                                                alt={`index-${index}`}
                                            />
                                        </div>
                                        <strong>{obj.title}</strong>
                                        <p>{obj.descriptiom}</p>
                                    </div>
                                </div>
                                )
                            })}
                    </div>
                    <h1>Our Promise</h1> */}
                </div>
                            <div
                                // className={styles.para}
                                style={{
                                    marginTop : isMobileView ? undefined : "5rem",
                                    width :  !isMobileView ? "900px" : undefined,
                                    marginLeft : "auto",
                                    marginRight : "auto",
                                    color : "#000",
                                    marginBottom : isMobileView ? "4rem" : "2rem"
                                }}
                            >  
                                    {/* <h1></h1> */}
                                    <div
                                        style={{
                                            width : isMobileView ? undefined : "100%",
                                            maxWidth : "900px",
                                            border: "1px solid #e4e4e4",
                                            padding : isMobileView ? "6px 15px 21px" : "15px 5rem 2rem 3rem",
                                            boxShadow : "0px 0px 4px #e9e9e9",
                                            borderRadius : "7px",
                                            marginTop : "4rem",
                                            margin : isMobileView ? "1rem" : undefined
                                        }}
                                    >
                                            <h1
                                                style={{
                                                    width :"100%",
                                                    textAlign : "center",
                                                    fontSize : isMobileView ? undefined : "30px",
                                                    margin : 0,
                                                    lineHeight : isMobileView ? "35px" : undefined
                                                }}
                                            >{translations[language].resellingPage.pricing.pay_as_you_go}</h1>
                                        <h2
                                            style={{
                                                lineHeight : isMobileView ? "25px" : undefined
                                            }}
                                        className="ccc_subtitle">
                                            {translations[language].resellingPage.pricing.desc1}
                                            {/* <br /> */}
                                            <br />
                                            {translations[language].resellingPage.pricing.desc2}
                                            <br/>
                                            {/* <br/> */}
                                            {translations[language].resellingPage.pricing.desc3}                                        </h2>

                                        <div
                                            sytle={{
                                                display :"flex",
                                                justifyContent : "center",
                                                width : "100%"
                                            }}
                                        >
                                            <div
                                                    style={{
                                                        display : "grid",
                                                        // width : "100%",
                                                        // gap : "10px",
                                                        gridTemplateColumns : !isMobileView ? "33.33% 33.33% 33.33%" : undefined,
                                                        gap : "10px"
                                                    }}
                                            >
                                                {
                                                    credits2.map((obj,index)=>{
                                                        // console.log(obj)
                                                        return (
                                                            <div
                                                                key={index}
                                                                style={{
                                                                    display : "flex",
                                                                    alignItems : "center",
                                                                    justifyContent : "center",
                                                                    textAlign : "center",
                                                                    width : "100%",
                                                                    gap : "10px"
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        width : "100%",
                                                                        display : isMobileView ? "grid" : undefined,
                                                                        gridTemplateColumns : isMobileView ? "45% 10% 45%" : undefined
                                                                    }}
                                                                >
                                                                    <div>
                                                                        <div
                                                                            style={{
                                                                                borderRadius : "10px",
                                                                                background : "orange",
                                                                                padding : "0 0",
                                                                                fontWeight : 800,
                                                                                color : "#fff",
                                                                                fontSize : "25px"
                                                                            }}
                                                                        >{obj.price} {obj.currency}</div>
                                                                        <div
                                                                            style={{
                                                                                // display : "flex",
                                                                                textAlign : "center",
                                                                                fontWeight : 600
                                                                            }}
                                                                        >{translations[language].resellingPage.pricing.topup}</div>
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            display : "flex",
                                                                            justifyContent : "center",
                                                                            width : "100%",
                                                                            fontWeight : 800,
                                                                            fontSize : "25px",
                                                                            alignItems : "center",
                                                                            height : isMobileView ? "65%" : undefined
                                                                        }}
                                                                    >
                                                                        {isMobileView ?
                                                                            <FaChevronRight />
                                                                            :
                                                                            <GoChevronDown />
                                                                        }
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            style={{
                                                                                borderRadius : "10px",
                                                                                background : "orange",
                                                                                padding : "0 0",
                                                                                fontWeight : 800,
                                                                                color : "#fff",
                                                                                fontSize : "25px"
                                                                            }}
                                                                        >{obj.credits}</div>
                                                                        <div
                                                                            style={{
                                                                                // display : "flex",
                                                                                textAlign : "center",
                                                                                fontWeight : 600
                                                                            }}
                                                                        >
                                                                            {translations[language].resellingPage.pricing.credits} 
                                                                            <span
                                                                                style={{
                                                                                    fontWeight : 500,
                                                                                    fontSize : "12px"
                                                                                }}
                                                                            > ({parseFloat((obj.price/obj.credits).toFixed(2))}{obj.currency} {translations[language].resellingPage.pricing.per_credit}) </span>
                                                                        </div> 
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <h1
                                            style={{
                                                width : "100%",
                                                textAlign : "center",
                                                margin : "2rem 0",
                                                lineHeight : isMobileView ? "35px" : undefined
                                            }}
                                        >{translations[language].resellingPage.pricing.packageCost.title}</h1>
                                        <div
                                            style={{
                                                position : "relative",
                                                width : "100%",
                                                display : "flex",
                                                justifyContent : "center"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    // borderTop  : ""
                                                    display : !isMobileView ? "flex" : "grid",
                                                    // width : "100%",
                                                    // gap : "10px",
                                                    gridTemplateColumns : "50% 50%",
                                                    margin : "auto",
                                                    gap : "10px",
                                                    width : isMobileView ? "100%" : undefined
                                                }}
                                            >
                                            {
                                                translations[language].resellingPage.pricing.packageCost.credits.map((obj,index)=>{
                                                    return (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                display : "flex",
                                                                alignItems : "center",
                                                                justifyContent : "center",
                                                                width : isMobileView ? "100%" : undefined
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "grid",
                                                                    borderRadius: "8px",
                                                                    background: "#4a4abb33",
                                                                    padding: isMobileView ? "8px 5px" : "8px 2rem",
                                                                    // color: "#fff",
                                                                    textAlign: "center",
                                                                    width : isMobileView ? "100%" : undefined
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        fontWeight : 700,
                                                                        color : "#273558"
                                                                    }}
                                                                >{obj.period} {obj.period==1 ? translations[language].month : translations[language].months}</div>
                                                                <div>{obj.credits} {translations[language].points}</div> 
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                width : "100%",
                                                display : "flex",
                                                justifyContent : "center",
                                                marginTop : "2rem"
                                            }}
                                        >
                                            <div
                                                className={styles.button_container}
                                                style={{
                                                    width : "100%",
                                                    display : isMobileView ? "block" : "flex",
                                                    padding  : 0,
                                                    justifyContent : "center"
                                                    // justifyContent : "center"
                                                }}
                                            >
                                            {/* {displayButton ? */}
                                                <>
                                                    {/* <button
                                                        id="contact_us"
                                                        className={styles.button_contact}
                                                        onClick={()=>{setOpenChat(true)}}
                                                    >
                                                        Contact Us
                                                    </button> */}
                                                    <button
                                                        onClick={()=>{setOpenChat(true)}}
                                                        id="join_us"
                                                        className={styles.button_contact}
                                                        style={{
                                                            background : "#11c851",
                                                            width : isMobileView ? "100%" : undefined
                                                        }}
                                                        // onClick={()=>router.push('/checkout')}
                                                    >
                                                        {/* <Link
                                                            href="/checkout"
                                                        > */}
                                                            <span>
                                                                {translations[language].resellingPage.become_a_reseller}
                                                                <p>{translations[language].instant_access}</p>
                                                            </span>
                                                        {/* </Link> */}
                                                    </button>
                                                </>
                                                {/* :null} */}
                                            </div>
                                        </div>
                                    </div>
                        </div>
              <Suspense fallback={null}>
                <Footer
                    isMobileView={isMobileView}
                />
              </Suspense>
            </div>
        </>
    )
}
ResellerPage0.getInitialProps = async (ctx) => {
    let isMobileView = (ctx.req
      ? ctx.req.headers['user-agent']
      : navigator.userAgent).match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
      
      //Returning the isMobileView as a prop to the component for further use.
      return {
        isMobileView: Boolean(isMobileView)
      }
  }
  export default ResellerPage0