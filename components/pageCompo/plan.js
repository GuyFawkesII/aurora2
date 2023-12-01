import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React , {useEffect, useState, useRef} from 'react'
import { useSpring , animated } from "react-spring";
import Image from 'next/image'
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from '../../hooks/useLocalStorage';
import dynamic from 'next/dynamic'
import { setPreferences } from "../../store/actions";
import { setCart } from "../../store/actions";

const Price = dynamic(() => import('./price'), {
    ssr : false,
})

const Plan = (props) => {
    const {data,openModal,color,isMobileView,change,setchange,cart,isActive} = props
    // const color = "#000"
    const [slides,setSlides]=useState(null)
    const preferences = useSelector((state) => state.preferences.currency);
    const plan = useSelector((state) => state.cart.data.plan);
    // const [pref,setPref] = useLocalStorage("currency",null)
    const dispatch = useDispatch()
    const handleActivePlan = (dt) => {
        dispatch(
            setCart({
                plan : {
                    ...plan,
                    connection : dt
            }}))
    }
    const sliderRef = useRef()
    // const [activeSlide,setActiveSlide]=useState(0)
    useEffect(()=>{
        setSlides(data)
        if (change){
            setTimeout(()=>{
                setchange(false)
            },2000)
        }
    },[data])
    const animation = useSpring({
        from: { 
            filter : "blur(11px)",
            position: "relative",
            height: "100%",
            width: "100%"
        },
        to: async next => {
            await next({ filter : "blur(0px)" })
        },
    })
    useEffect(()=>{
        const slide = isMobileView ? 0 :  plan.connection.slug
        if (typeof sliderRef.current !=='undefined'){
            sliderRef.current.slickGoTo(slide)
        }
    },[data])
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "1px",
        slidesToShow: isMobileView ? 1 : 3,
        speed: 500,
        slidesToScroll: 1
    }
    const Arrows = () => {
        return(
            <>
                <div className="slider-arrow">
                    <button
                    className="arrow-btn prev"
                    onClick={() => sliderRef.current.slickPrev()}
                    >
                        ◀️
                    </button>
                    <button
                    className="arrow-btn next"
                    onClick={() => sliderRef.current.slickNext()}
                    >
                        ▶️
                    </button>
                </div>
            </>
        )
    }
    return (
        <>
            <div
                style={{
                    width : "100%"
                }}
            >
                <animated.div
                    style={animation}
                >
                    {typeof sliderRef.current !=='undefined' ?
                        <Arrows />
                    :null}
                    <Slider
                        {...settings}
                        ref={sliderRef}
                    >
                        {slides &&
                        slides.Connections.map((obj, index) => {
                            return (
                                <>
                                    <div
                                        key={index}
                                        // onClick={()=>{handleSelectedPlan(obj)}}
                                        className="card_container_co"
                                        style={{
                                            borderRadius: "11px",
                                            marginBottom: "11px",
                                            marginTop : isMobileView ? "43px" : "0",
                                            position : "relative",
                                            padding : "5px",
                                            border  : isMobileView ? `0px solid ` : `2px solid ${color}`
                                        }}
                                        onClick={()=>{handleActivePlan({
                                            id : obj.id,
                                            slug : obj.connection
                                        })}}
                                    >
                                        <div
                                            className="pri-container"
                                            style={{
                                                // background : isMobileView ? 
                                                //     (obj.bestSeller && color ? "linear-gradient(90deg, rgba(255,236,194,1) 0%, rgba(255,223,152,1) 48%, rgba(255,229,170,1) 100%)" : `linear-gradient(to bottom,  ${color} -359%,#FFFFFF 60%)`) : "transpaernt",
                                                background : "#f2f2f2"
                                            }}
                                        >
                                            <div
                                                className="shadow-gold"
                                                style={{
                                                    position : "absolute",
                                                    height : "80ppx",
                                                    width : "80px",
                                                    top: "-36px",
                                                    right: "-13px",
                                                    borderRadius : "50%",
                                                    zIndex: 2
                                                }}
                                            >
                                                {typeof obj.bestSeller !== 'undefined' ?
                                                    <Image
                                                        src={obj.bestSeller}
                                                        width ="80px"
                                                        height ="80px"
                                                        alt={`plan-${index}`}
                                                    />
                                                :null}
                                            </div>
                                        <div
                                            className="title-container"
                                        >
                                            <span
                                                style={{
                                                    // color : isMobileView ? "#fff" : "#000",
                                                    // background : isMobileView ? color : "transparent",
                                                    color : "rgb(106 106 106)",
                                                    background : "rgb(210 210 210)",
                                                    fontSize: "18px",
                                                    fontWeight: 500,
                                                    display: "flex",
                                                    textAlign: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                 {obj.connection} {obj.connection==1 ? 'DEVICE' : 'DEVICES'}
                                            </span>
                                            <Price
                                                amount = {obj.price[preferences.index].amount}
                                                symbol = {obj.price[preferences.index].symbol}
                                            />
                                        </div>
                                            <div
                                                style={{
                                                    padding: "9px",
                                                    // border: "1px solid #000",
                                                    borderRadius: "10px",
                                                    margin :"96px 0px 0 0px"
                                                }}
                                            >
                                                <span>{slides.title}</span>
                                                {obj.features.map((obj,i)=>{
                                                    return(
                                                        <div
                                                            key={i}
                                                        >
                                                            <button
                                                                className="plan_button"
                                                            >
                                                                {obj.available ?
                                                                    <div
                                                                        style={{
                                                                            alignItems: "center",
                                                                            display: "flex",
                                                                            marginRight: "9px"
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon
                                                                            icon={faCheck}
                                                                            style={{ 
                                                                                fontSize: 10,
                                                                                color: "grey",
                                                                                padding : "5px",
                                                                                // background : "#00e400",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    :
                                                                    <div
                                                                        style={{
                                                                            alignItems: "center",
                                                                            display: "flex",
                                                                            marginRight: "9px"
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon
                                                                            icon={faMinus}
                                                                            style={{
                                                                                fontSize: 10,
                                                                                color: "white",
                                                                                padding : "5px",
                                                                                background : "#c4c4c4",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                }
                                                                <p
                                                                    style={{
                                                                        color : obj.available ? "#000":"#9a9a9a",
                                                                        textAlign : "left",
                                                                        fontWeight: 500,
                                                                        fontSize : "14px"
                                                                    }}
                                                                >
                                                                    {obj.name}
                                                                </p>
                                                            </button>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {isMobileView ?
                                            null
                                            :
                                            <div
                                                className="chekc_box_cpmtaomer darkborder"
                                                sytle={{
                                                    display : cart==false ? "none" : "block"
                                                }}
                                            >
                                                <div className={plan.connection.slug==obj.connection ? "check_box_active" : ""}></div>
                                            </div>
                                        }
                                    </div>
                                    {isMobileView ?
                                    <div
                                        // className="buttonContainerBN shadow"
                                        style={{
                                            margin : "8px 20px 30px 22px"
                                        }}
                                        // sytle={{
                                        //     display : cart==true ? "none" : "block"
                                        // }}
                                    >
                                        {/* <button
                                            // onClick={()=>{openModal(index)}}
                                        > */}
                                        {isActive ?
                                            <a
                                                className="btn button_green buttonContainerBN"
                                                // style={{
                                                //     borderRadius : "27px"
                                                // }}
                                                href={obj.price[preferences.index].url} target="_blank" rel="noreferrer"
                                            >
                                                CHOOSE PLAN
                                            </a>
                                            :
                                            <a
                                                className="disabled-button"
                                                // href={obj.price[preferences.index].url} target="_blank" rel="noreferrer"
                                            >
                                                CHOOSE PLAN
                                            </a>
                                            }
                                            {/* {isActive ?
                                                <a
                                                    href={activeConnection ? activeConnection.price[preferences.index].url : "/"} target="_blank" rel="noreferrer"
                                                >
                                                    <button
                                                    >

                                                            Buy Now
                                                    </button> 
                                                </a>
                                                :
                                                <a
                                                    // href={activeConnection ? activeConnection.price[preferences.index].url : "/"} target="_blank" rel="noreferrer"
                                                >
                                                    <button
                                                        className='disabled-button'
                                                    >

                                                            Buy Now
                                                    </button> 
                                                </a>
                                            } */}
                                    </div>
                                    :null}
                                </>
                            )
                        })}
                    </Slider>
                </animated.div>
            </div>
        </>
    )
}
export default Plan