import styles from '../styles/Support.module.css'
import Link from 'next/link'
import React  , {useState} from 'react'
import QandA from '../components/pageCompo/faq'
// import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Suspense , useEffect } from 'react'
// import {faq,features,benefits,header} from '../data/support'
// import Apps from '../components/apps'
import { translations } from '../data/translation'

const language = process.env.NEXT_PUBLIC_LANGUAGE


const Footer = dynamic(() => import('../layout/Footer'), {
    // suspense: true,
    ssr : true,
    loading: undefined
})

const Faq = (props) => {
    const {isMobileView} = props
    const [isOpen,setIsOpen] = useState(null)
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    // console.log(translations[language].faqList)
    return (
        <div
            id="1"
            className={styles.container}
            style={{
                position : "absolute",
                // overflowY : "scroll"
            }}
        >
            <div
                className="headerContainer"
                style={{
                    background : "#fff"
                }}
            >
                <div
                    style={{
                        textAlign : "center",
                        margin : "auto"
                    }}
                >
                    <h1>{translations[language].header.title}</h1>
                    <p>{translations[language].header.description}</p>
                </div>
            </div>
            <div 
                className={styles.paragraph}
                style={{
                    maxWidth : "1100px",
                    margin : "auto"
                }}
            >
                <Link
                    href = "/"
                > 
                <div>{translations[language].back_to_home}</div>
                 </Link>
                {translations[language].faqList.map((obj,index)=>{
                    return(
                            <div
                                key = {index}
                            >
                                {
                                    obj.qa.map((qaa,index)=>{
                                        return(
                                            <div
                                                key={qaa.id}
                                            >
                                                <QandA
                                                    data={qaa}
                                                    isOpen={isOpen}
                                                    setIsOpen={setIsOpen}
                                                    index = {qaa.id}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    )
                })}
                {/* <h1>{benefits.title}</h1>
                <p>{benefits.description}</p>
                <div
                    className="cards-2 cards"
                >
                    {features.map((obj,index)=>{
                        return (
                            <div
                                key={index}
                                className="card"
                                style={{
                                    padding : 0,
                                    margin : 0,
                                    padding : "14px"
                                }}
                            >
                                <div
                                    className={styles.features_container}
                                >
                                    <div>
                                        <Image
                                            src={obj.url}
                                            height = "80px"
                                            width = "80px"
                                            alt={`line-${index}`}
                                        />
                                    </div>
                                    <strong>{obj.title}</strong>
                                    <p>{obj.description}</p>
                                </div>
                        </div>
                        )
                    })}
                </div> */}
                <div
                    className={styles.buttonContainer}
                >
                    <button>
                        <Link
                            href = "/checkout"
                        >
                            Finally Interested ? Start now
                        </Link>
                    </button>
                </div>
            </div>
            
              <Suspense fallback={null}>
                <Footer
                    isMobileView={isMobileView}
                />
              </Suspense>
        </div>
    )
}
Faq.getInitialProps = async (ctx) => {
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
  export default Faq