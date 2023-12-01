import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Image from 'next/image'
import {dt} from '../data/abouus'

const Footer = dynamic(() => import('../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})


const AboutUs = (props) => {
    const {isMobileView} = props
    return (
        <>
            <div
                id="7"
                className={styles.container}
                style={{
                    background : "#fff"
                }}
            >
                <div
                    className="headerContainer"
                    style={{
                        background : "#fff",
                        maxWidth : "700px",
                        margin : "auto"
                    }}
                >
                    <div
                        style={{
                            background : "#fff"
                        }}
                    >
                        <h1>{dt[0].title}</h1>
                        <p>{dt[0].description}</p>
                    </div>
                </div>
            <div>
                <div 
                    className={styles.paragraph}
                    style={{
                        // background :"blue",
                        width : "100%"
                    }}
                >
                    <div
                        className={styles.sliderContainer}
                    >
                        <h1>{dt[1].title}</h1>
                        <div className="cards">
                            {dt[1].content.map((obj,index)=>{
                                return(
                                    <>
                                        <div
                                            key={obj.id}
                                            className="card"
                                            style={{
                                                padding: "24px 23px",
                                                margin: "0px",
                                                border: "1px solid rgb(239 239 239)",
                                                borderRadius: "15px",
                                                boxShadow: "1px 1px 4px grey",
                                                background: "#f9faff",
                                            }}
                                        >
                                            <div
                                                className={styles.features_container}
                                            >
                                                <div>
                                                    <Image
                                                        src={obj.icon}
                                                        height = "80px"
                                                        width = "80px"
                                                        alt={`abt-${index}`}
                                                    />
                                                </div>
                                                <strong>{obj.title}</strong>
                                                <p
                                                    styles={{
                                                        fontSize : "17px",
                                                        padding : "0 16px"
                                                    }}
                                                >{obj.description}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div
                            className={styles.container_2}
                            style={{
                                background : "#fff"
                            }}
                        >
                            <h1
                                style={{
                                    textAlign : "center"
                                }}
                            >
                                {/* <span>Over 1200+</span>
                                purchased our plans & Still counting. */}
                                <span>{dt[2].title}</span>
                            </h1>
                            <div
                                className='cards cards-3'
                            >
                                {dt[2].content.map((obj,index)=>{
                                    return (
                                        <>
                                            <div
                                                key={index}
                                                className='card'
                                                style={{
                                                    border : "0px solid"
                                                }}
                                            >
                                                <div
                                                    className='wrapper'
                                                >
                                                    <div
                                                        className={styles.circular_container}
                                                        style={{
                                                            background : "#f9faff"
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display : "grid"
                                                            }}
                                                        >
                                                            <strong
                                                                style={{
                                                                    color : obj.color
                                                                }}
                                                            >
                                                                {obj.nb}
                                                            </strong>
                                                            <span>
                                                                {obj.title}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <Suspense fallback={null}>
                            <Footer
                                isMobileView={isMobileView}
                            />
                        </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
AboutUs.getInitialProps = async (ctx) => {
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
  export default AboutUs