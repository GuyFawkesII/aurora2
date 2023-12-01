import styled from 'styled-components'
import styles from '../../styles/Reseller.module.css'
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
import { translations } from '../../data/translation'

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
const ResellerSplash = (props) => {
    const {setOpenChat,setDisplayDes,displayDes,backImage,isMobileView} = props
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
    return (
        <>
         <div className={styles.splash}>
              <Container
                // background = "linear-gradient(#bde9f3, #fff)"
              >
                <div
                    className={styles.splash_content_container}
                    // style={{
                    //     padding : ""
                    // }}
                >
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
                                        {dim !=null ?
                                            <Image
                                                src="/splashReseller.svg"
                                                layout="fill"
                                                className="custom-img"
                                                // width="100%"
                                                // height="100%"
                                                alt="splash_background"
                                            />
                                            :
                                            <p></p>
                                        }
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
                                            justifyContent : "center"
                                        }}
                                        className={styles.splash_content_title}>
                                            <span
                                                style={{
                                                    fontSize: "20px",
                                                    fontWeight: 1000,
                                                    color: "rgb(56 78 132)",
                                                    lineHeight: "40px",
                                                    textAlign : "center"
                                                }}
                                            >
                                                {translations[language].resellingPage.slogan.span1} 
                                                <span
                                                    style={{
                                                        color : "#f84492"
                                                    }}
                                                > {translations[language].resellingPage.slogan.span2} </span> {translations[language].resellingPage.slogan.span3} 
                                            </span>
                                        </div>
                                    <div 
                                        style={{
                                            padding : "10px",
                                            textAlign : "center"
                                        }}
                                        className={styles.splash_content_description}>
                                    {/* {displayDes ? */}
                                        <p
                                            style={{
                                                textAlign : "center"
                                            }}
                                        >
                                            {translations[language].resellingPage.slogan_description} 
                                        </p>
                                    {/* :null} */}
                                    </div>
                                    <div
                                        className={styles.button_container}
                                    >
                                        <div
                                            className={styles.button_container}
                                            style={{
                                                width : "100%",
                                                display : "flex",
                                                padding  : 0
                                                // justifyContent : "center"
                                            }}
                                            onClick={()=>{setOpenChat(true)}}
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
                                                    id="join_us"
                                                    className={styles.button_contact}
                                                    style={{
                                                        width :"100%"
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
                                            <span
                                                style={{
                                                    fontSize: "50px",
                                                    fontWeight: 1000,
                                                    color: "rgb(56 78 132)",
                                                    lineHeight: "70px"
                                                }}
                                            >
                                                {translations[language].resellingPage.slogan.span1}
                                                <span
                                                    style={{
                                                        color : "#f84492"
                                                    }}
                                                > {translations[language].resellingPage.slogan.span2}</span> {translations[language].resellingPage.slogan.span3}
                                            </span>
                                            {/* <Suspense fallback={`Loading...`}>
                                                <TypeEffect
                                                    setDisplayDes={setDisplayDes}
                                                    textContent="The world's best IPTV reseller program"
                                                    setDisplayButton={setDisplayButton}
                                                />
                                            </Suspense> */}
                                        </div>
                                        <div className={styles.splash_content_description}>
                                        {/* {displayDes ? */}
                                            <p>
                                            {translations[language].resellingPage.slogan_description}
                                            </p>
                                        {/* :null} */}
                                        </div>
                                        <div
                                            className={styles.button_container}
                                            style={{
                                                width : "100%",
                                                display : "flex",
                                                padding  : 0
                                                // justifyContent : "center"
                                            }}
                                            onClick={()=>{setOpenChat(true)}}
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
                                                    id="join_us"
                                                    className={styles.button_contact}
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
                                    <div
                                        className="unset-img"
                                        style={{
                                            position: "relative",
                                            height: "100%"
                                        }}
                                    >
                                        {dim !=null ?
                                            <Image
                                                src="/splashReseller.svg"
                                                layout="fill"
                                                className="custom-img"
                                                // width="100%"
                                                // height="100%"
                                                alt="splash_background"
                                            />
                                            :
                                            <p></p>
                                        }
                                    </div>
                            </>
                    }
                </div>
                {/* <div
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
                </div> */}
            </Container>
        </div>
        </>
    )
}
export default ResellerSplash