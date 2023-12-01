import React, {useEffect,useState} from 'react'
// import {BsFillPlayBtnFill} from 'react-icons/bs'
// import {TbMovie} from 'react-icons/tb'
// import {ImHappy} from 'react-icons/im'
import Image from 'next/image'
const Card = (props) => {
    const {Data,isVisible,className,boldTitle,isMobileView,isOpen,setIsOpen,index} = props
    const [nb,setNb]=useState(0)
    useEffect(()=>{
        if (typeof nb !=='undefined'){
            if (nb<Data.nb && isVisible){
                setTimeout(()=>{
                    setNb(nb+Data.step)
                },[Data.speed])
            }
        }
    },[nb,isVisible])
    // console.log(index)
    return(
            <>
                <div 
                
                    className={`card back-grey ${className}`}
                    style={{
                        background : "transparent",
                        color : "#fff",
                        border : "0",
                        // margin : !isMobileView ? "13px -31px" : undefined
                        gap : !isMobileView ? "0rem 10rem" : undefined
                    }}    
                >
                    <>
                    <div 
                        className="card-content"
                        style={{
                            lineHeight : "33px",
                            padding : 0
                        }}
                    >
                        <div
                            style={{
                                fontSize : "40px",
                                textAlign : "left",
                                marginBottom : "8px",
                            }}
                        >
                            <div
                                style={{
                                width : Data.iconWidthDesktop ? Data.iconWidthDesktop : "77px",
                                height : "74px",
                                marginTop : "-2px",
                                margin : "auto"
                                }} 
                                dangerouslySetInnerHTML={{ __html: Data.icon }} />
                            {/* {Data.icon=='customer' ?
                                <ImHappy />
                            :null}
                            {Data.icon=='movie' ?
                                <TbMovie />
                            :null}
                            {Data.icon=='channel' ?
                                <BsFillPlayBtnFill />
                            :null} */}
                        </div>
                        {typeof Data.nb !== 'undefined' ?
                            <div
                                style={{
                                    textAlign : "center"
                                }}
                            >
                                <strong
                                    style={{
                                        fontSize : boldTitle ? "2rem" : "1rem",
                                        color : "#fff",
                                        // marginTop : "15px",
                                    }}
                                >{nb}</strong>
                                <p
                                    style={{
                                        color : "#fff",
                                        textAlign  : "center",
                                        fontWeight : 800,
                                        fontSize : "18px",
                                        marginTop : "-3px"
                                    }}
                                >{Data.title}</p>
                            </div>
                        :
                            <div
                                style={{
                                    color : "#fff",
                                    textAlign : "center",
                                    fontWeight : 800,
                                    // marginTop : "10px"
                                }}
                            >{Data.title}</div>
                        }
                    </div>
                    <div
                        style={{
                            border : "1px solid #fff",
                            width : "50px",
                            margin : "auto"
                            // marginLeft : "20px"
                        }}
                    >

                    </div>
                    <div
                        style={{
                            color : "#fff",
                            textAlign : "left"
                        }}
                    >
                        <p
                            style={{
                                color : "#fff",
                                fontSize : "13px"
                            }}
                        >{Data.LearnMore}</p>
                    </div>
                    {/* <span
                        onClick={()=>{setIsOpen(index)}}
                    >
                        Learn More
                    </span> */}
                    {/* <strong></strong>
                    {Data.title} */}
                    </>
                </div>
            </>
    )
}
export default Card