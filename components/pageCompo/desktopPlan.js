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

const Price = dynamic(() => import('./price'), {
    ssr : false,
})

const Plan = (props) => {
    const {data,openModal,color} = props
    const [slides,setSlides]=useState(null)
    const preferences = useSelector((state) => state.preferences.currency);
    const [pref,setPref] = useLocalStorage("currency",null)
    const dispatch = useDispatch()
    const sliderRef = useRef()
    const [activeSlide,setActiveSlide]=useState(0)
    useEffect(()=>{
        setSlides(null)
        setSlides(data)
    },[data])
    useEffect(()=>{
        sliderRef.current.slickGoTo(activeSlide)
    },[activeSlide])
    const animation = useSpring({
        from: { filter : "blur(11px)" },
        to: async next => {
            await next({ filter : "blur(9px)" })
            await next({ filter : "blur(0px)"  })
        },
    })
    useEffect(()=>{
        if (typeof sliderRef.current !=='undefined'){
            sliderRef.current.slickGoTo(0)
        }
    },[data])
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "1px",
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
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
            <div>
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
                                        className="shadow card_container_co"
                                        style={{
                                            borderRadius: "11px",
                                            marginBottom: "56px",
                                            marginTop : "43px",
                                            position : "relative",
                                            padding : "5px"
                                        }}
                                    >
                                        <div
                                            className="pri-container"
                                            style={{
                                                background : obj.bestSeller && color ? "linear-gradient(90deg, rgba(255,236,194,1) 0%, rgba(255,223,152,1) 48%, rgba(255,229,170,1) 100%)" : `linear-gradient(to bottom,  ${color} -359%,#FFFFFF 60%)`,
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
                                            <strong
                                                style={{
                                                    color : "#fff",
                                                    background : color
                                                }}
                                            >
                                                {obj.connection}
                                            </strong>
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
                                                            style={{
                                                                display : "flex"
                                                            }}
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
                                                                            color: "white",
                                                                            padding : "5px",
                                                                            background : "#00e400",
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
                                                                    color : obj.available ? "#000":"#9a9a9a"
                                                                }}
                                                            >
                                                                {obj.name}
                                                            </p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="buttonContainerBN shadow"
                                    >
                                        {/* <button
                                            // onClick={()=>{openModal(index)}}
                                        > */}
                                            <a
                                                href={obj.price[preferences.index].url} target="_blank" rel="noreferrer"
                                            >
                                                Choose Plan
                                            </a>
                                        {/* </button> */}
                                    </div>
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