import React, {useEffect,useState} from 'react'
// import {BsFillPlayBtnFill} from 'react-icons/bs'
// import {TbMovie} from 'react-icons/tb'
// import {ImHappy} from 'react-icons/im'
import Image from 'next/image'
const CardMobile = (props) => {
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
                        textAlign : "center",
                        height : "100%",
                        // padding : ""
                        border : "0",
                        borderRadius : "10px",
                        padding : "1rem 0 0",
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
                                // textAlign : "left"
                            }}
                        >
                            <div
                                style={{
                                    width : "77px",
                                    height : "74px",
                                    marginTop : "-2px",
                                    margin : "auto",
                                    display: "flex",
                                    alignItems: "center"
                                }} 
                                dangerouslySetInnerHTML={{ __html: Data.icon }} />
                        </div>
                        {typeof Data.nb !== 'undefined' ?
                            <div
                                style={{
                                    // textAlign : "left"
                                    marginTop : "15px"
                                }}
                            >
                                <strong
                                    style={{
                                        // fontSize : boldTitle ? "2rem" : "1rem",
                                        fontSize : isMobileView ? "30px" : "25px",
                                        color : "#fff",
                                        // marginTop : isMobileView ? "10px" : undefined
                                    }}
                                >{nb}</strong>
                                <p
                                    style={{
                                        color : "#fff",
                                        fontWeight : 800,
                                        fontSize : "14px"
                                    }}
                                >{Data.title}</p>
                            </div>
                        :
                            <div
                                style={{
                                    color : "#fff",
                                    fontWeight : 800,
                                    fontSize : "15px"
                                    // textAlign : "left"
                                }}
                            >{Data.title}</div>
                        }
                    </div>
                    </>
                </div>
            </>
    )
}
export default CardMobile