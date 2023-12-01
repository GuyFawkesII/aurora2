import { useSpring, animated, config } from "react-spring";
import styled from 'styled-components'
import React , {useState,useEffect} from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import { preferences } from "../../data/preferences";
import {MdCheckBoxOutlineBlank,MdOutlineCheckBox} from 'react-icons/md'
import { push } from "@socialgouv/matomo-next";
import { translations } from "../../data/translation";

const language  = process.env.NEXT_PUBLIC_LANGUAGE

const Cookies = () => {
    const linkAnimation = useSpring({
        from: { transform: 'translate3d(300px, 0, 0)', opacity: 1 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
      })
    const [cookies,setCookies] = useLocalStorage("cookies",{
      shown : false,
      necessary : true,
      analytical : false,
      marketing : false
    })
    const [showMessage,setMessage]=useState(false)
    useEffect(()=>{
        if (!cookies.shown){
            setTimeout(() => {
                setMessage(true)
            }, preferences[0].timeout);
        }
    },[cookies])
    const handleMessage = (b) => {
        push(["trackEvent", "cookies", b]);
        if (b=="all"){
            setCookies({
                shown : true,
                necessary : true,
                analytical : true,
                marketing : true
            })
        }
        else {
            setCookies({
                shown : true,
                necessary : true,
                analytical : false,
                marketing : false
            })
        }
        setMessage(false)
    }
    return (
        <>
            {showMessage ?
                <div
                    style={{
                        width : "100%",
                        display  : "flex",
                        alignItems : "center",
                        justifyContent : "center",
                        position : "relative",
                        height : "100%"
                    }}
                >
                <Container
                    style={linkAnimation}
                    // onClick={closeModal}
                >
                    <h3>{translations[language].cookies.part1}</h3>
                    <span>{translations[language].cookies.part2}</span>
                    <br />
                    <a
                        href="https://www.cookiebot.com/en/gdpr-cookies/" target="_blank"  rel="noreferrer"
                    >{translations[language].cookies.part3}</a>
                    <div
                        style={{
                            margin : "0.5rem -1rem 0rem",
                            borderBottom : "1px solid #d7d7d7",
                            width : "calc(100% + 1rem)",
                        }}
                    ></div>
                    <div
                        className="cookies"
                    >
                        <div
                            className="cookies-container"
                            onClick={()=>{
                                setCookies({
                                    ...cookies,
                                    necessary : !cookies.necessary
                                })
                            }}
                        >
                            <div
                                className="cookies-check"
                            >
                                {!cookies.necessary ?
                                    <MdCheckBoxOutlineBlank />
                                :
                                    <MdOutlineCheckBox />
                                }
                            </div>
                            <div>
                                <span
                                    style={{
                                        fontWeight : "700",
                                        fontSize : "14px"
                                    }}                                
                                >{translations[language].cookies.necessary} </span> <span>{translations[language].cookies.necessary_des}</span>
                            </div>
                        </div>
                        <div
                            className="cookies-container"
                            onClick={()=>{
                                setCookies({
                                    ...cookies,
                                    analytical : !cookies.analytical
                                })
                            }}
                        >
                            <div
                                className="cookies-check"
                            >
                                {!cookies.analytical ?
                                    <MdCheckBoxOutlineBlank />
                                :
                                    <MdOutlineCheckBox />
                                }
                            </div>
                            <div>
                                <span
                                    style={{
                                        fontWeight : "700",
                                        fontSize : "14px"
                                    }}
                                >{translations[language].cookies.analytics} </span> <span>{translations[language].cookies.analytics_des}</span>
                            </div>
                        </div>
                        <div
                            className="cookies-container"
                            onClick={()=>{
                                setCookies({
                                    ...cookies,
                                    marketing : !cookies.marketing
                                })
                            }}
                        >
                            <div
                                className="cookies-check"
                            >
                                {!cookies.marketing ?
                                    <MdCheckBoxOutlineBlank />
                                :
                                    <MdOutlineCheckBox />
                                }
                            </div>
                            <div>
                                <span
                                    style={{
                                        fontWeight : 700,
                                        fontSize : "14px"
                                    }}
                                >{translations[language].cookies.marketing} </span> <span>{translations[language].cookies.marketing_des}</span>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display : "grid",
                            width : "100%",
                            gap : "5px",
                            margin : "1rem 0 0"
                        }}

                    >
                        <button
                            style={{
                                background : "transparent",
                                color : "#000",
                                padding : "14px"
                            }}
                            onClick={()=>{
                                handleMessage("necessary")
                            }}
                        >{translations[language].cookies.accept_necessary}</button>
                        <button
                            style={{
                                padding : "14px",
                                color : "white",
                                border : "0"
                            }}
                            onClick={()=>{
                                handleMessage("all")
                            }}
                        >{translations[language].cookies.accept_all}</button>
                    </div>
                </Container>
                </div>
            :null}
        </>
    )
}
export default Cookies


const AreyouSure = styled.div`

`
const Container = styled(animated.div)`
    position: fixed;
    bottom: 0;
    background: #ffff;
    font-size: 11px;
    z-index: 102;
    border-radius: 12px;
    margin: 1rem 1rem;
    border: 2px solid #0000ff;
    width: calc(100% - 2rem);
    padding: 1rem 1rem;
    text-align: left;
    max-width : 700px;
    & h3 {
        color : #000;
        margin : 0
    }
    & span {
        color : #000
    }
    & button {
        width : 100%;
        background : blue;
        border-radius : 5px
    }
    & a {
        width : 100%;
        color : #000;
        // border-radius : 5px;
        border-bottom : 1px solid blue
    }
}
`;