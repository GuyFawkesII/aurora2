import styles from '../styles/Home.module.css'
import SearchChannel from '../components/search'
import { translations } from '../data/translation'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
// import MyChannels from '../components/search/channels'
// import SearchResults from '../components/search/searchResults'
import {useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
// import styles
import LoadingChannels from '../components/search/loading'
import { useRouter } from 'next/router'

const Footer = dynamic(() => import('../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})
const MyChannels = dynamic(() => import('../components/search/channels'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})
const SearchResults = dynamic(() => import('../components/search/searchResults'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})
const language = process.env.NEXT_PUBLIC_LANGUAGE

const countries = [
    "AllCountries",
    "GB",
    "ES",
    "US",
    "CL",
    "FR",
    "AU",
    "AL",
    "AM",
    "CN",
    "BE",
    "CA",
    "TT",
    "CZ",
    "DE",
    "DK",
    "FI",
    "GR",
    "IE",
    "IS",
    "IT",
    "KU",
    "KZ",
    "LA",
    "LT",
    "MT",
    "MO",
    "NL",
    "NO",
    "PL",
    "PT",
    "RU",
    "SE",
    "CH",
    "TR",
    "ASIA"
]

const ChannelsList = (props) => {
    const {isMobileView} = props
    // console.log(translations[language].channels.list)
    const [searchResult,setSearchResult]=useState(-1)
    const router = useRouter()
    return (
        <>
            <div
                id="channelsList"
                className={styles.container}
                style={{
                    background : "rgb(245 247 255)",
                    padding : "80px 1rem 2rem",
                    paddingTop : "80px",
                    height : "100%"
                }}
            >
                <h1
                    style={{
                        color : "black",
                        fontWeight : 'bold',
                        fontSize : "32px",
                        textAlign  :"center",
                        padding : "0 11px",
                        lineHeight : "42px"
                    }}
                >{translations[language].channelsS.title}</h1>
                <div
                    style={{
                        fontWeight : 600,
                        fontSize : "15px",
                        color : "black",
                        textAlign : "center",
                        padding : "0 10px",
                        lineHeight : "25px",
                        maxWidth : "900px",
                        margin : "auto"
                    }}
                >
                    {translations[language].channelsS.description}
                </div>
                <div
                    style={{
                        maxWidth : "1000px",
                        margin : "auto",
                        // minHeight : ""
                    }}
                >
                    <SearchChannel
                        // channels={translations[language].channels.list}
                    />
                    <div
                        style={{
                            maxHeight : "500px",
                            height : "100%",
                            color : "black",
                            // overflowY : "scroll",
                            width : "100%",
                        }}
                    >
                    <LoadingChannels />
                    {searchResult>=0 ?
                    <div>
                        <span
                            style={{
                            fontWeight : 800
                            }}
                        >{searchResult}
                        </span> {translations[language].channelsS.searchResults}
                    </div>
                    :null}
                    {countries.map((country,index)=>{
                        // console.log(country)
                        return (
                        <div
                            key={index}
                        >
                                <Suspense fallback={null}>
                                    <MyChannels
                                        // searchTerm={searchTerm}
                                        // performSearch={activeCountry==country && performSearch}
                                        currentCountry={country}
                                        setSearchResult={setSearchResult}
                                    />
                                </Suspense>
                        </div>
                        )
                    })}
                    <Suspense fallback={null}>
                        <SearchResults
                            setSearchResult={setSearchResult}
                        />
                    </Suspense>
                    {/* <SearchResults /> */}
                    </div>
                </div>
            </div>
            <div
                style={{
                    marginTop: "-49px",
                    background: "#f5f7ff",
                    paddingTop: "46px",
                    paddingBottom: "67px"
                }}
            >
            <div
                    style={{
                      // marginTop : "-6rem",
                      // display : "flex",
                      // position : "absolute",
                      // right : "0",
                      // height : "50px",
                      // background : "grey",
                      marginTop : "3rem",
                      width : "100%",
                      // display : "none"
                    }}
                    className="polygon_container"
                  >
                    <svg
                        style={{
                          marginBottom : isMobileView ? "-0.7rem" : "-1rem",
                          height : "37px"
                        }}
                        className="svg-intro-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon fill={isMobileView ? "#202abb" : "#313de7"} points="0,100 100,0 100,100"></polygon>
                    </svg>
                  </div>
                <div
              // id="patra"
              className={styles.paragraph}
              style={{
                // position : "absolute",
                // marginTop : "-20px",
                padding : 0,
                background : isMobileView ? "#202abb":"#313ee7",
                margin : 0,
                width : "100%",
                maxWidth : "100%",
                // marginTop : isMobileView ? undefined : "73px",
                // margin
                // display : "none"
                // position : "relative"
              }}
            >
              <div
                style={{
                  position : "relative",
                  zIndex : 10,
                  padding : isMobileView ? "5rem 2rem 7rem" : "4rem 0 8rem",
                }}
              >
                <h1
                  style={{
                    color : "white",
                    textAlign : "center"
                  }}
                >
                  {translations[language].para_titles.t5}</h1>
                <div
                  className={styles.container_2}
                  style={{
                    background : "transparent"
                  }}
                >
                  <div
                    className={styles.buttonContainer}
                  >
                      <a
                        // href="/checkout"
                        onClick={()=>router.push('/checkout')}
                      >
                      <button
                        style={{
                          background : "white",
                          color: "#3f5366",
                          fontWeight: 800
                      
                        }}
                        id="join-us-now"
                      >
                       {translations[language].join_us_now}
                      </button>
                    </a>
                    <button
                      style={{
                        background : "white",
                        color: "#3f5366",
                        fontWeight: 800
                      }}
                      onClick={()=>{setOpenChat(true)}}
                    >
                      <a>
                          {translations[language].contact_us}
                      </a> 
                    </button>
                  </div>
                </div>
              </div>
              {/* {!isMobileView? */}
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
                      width : "100%",
                    }}
                  >
                    <svg className="svg-features-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon fill="#f5f7ff" points="0,100 100,0 100,100"></polygon>
                    </svg>
                  </div>
                {/* :null} */}
            </div>
            </div>
            <Suspense fallback={null}>
                <Footer
                  isMobileView={isMobileView}
                  position="relative"
                  background ="f5f7ff"
                />
              </Suspense>
        </>
    )
}
ChannelsList.getInitialProps = async (ctx) => {
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
export default ChannelsList