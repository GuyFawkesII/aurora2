import Footer from "./Footer";
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { setPreferences , setSplash } from "../store/actions";
import useLocalStorage from '../hooks/useLocalStorage'
import {useEffectOnceWhen,useWindowScrollPosition,useLocalstorageState} from 'rooks'
import { push } from "@socialgouv/matomo-next";
import {preferences} from '../data/preferences'
import Notification from "../components/notification";
// import TagManager from 'react-gtm-module';
import Script from "next/script";
import ErrorBoundary from "./errorBoundaries";

const language = process.env.NEXT_PUBLIC_LANGUAGE

const Navbar = dynamic(() => import('./NavBar'), {
  ssr: false,
})
const LiveChat = dynamic(() => import('../components/chat'), {
  ssr: false,
})
const ChatTracker = dynamic(() => import('../components/chat/chatTracker'), {
  ssr: false,
})
const Cookies = dynamic(() => import('../components/pageCompo/cookies'), {
  ssr: false,
})
const ProgressBar = dynamic(() => import('../components/pageCompo/progress'), {
  ssr: false,
})

const getRandomChar = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
};



// const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
// const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

// const tgm = process.env.NEXT_PUBLIC_TAG_MANAGER
// const googleAnalytics = process.env.NEXT_PUBLIC_ANALYTICS


export default function Layout({ children }) {
    const styles = {
      display: "flex",
      flexDirection: "row"
    };
    // const {scrollX, scrollY} = useWindowScrollPosition();
    // console.log(scrollX)
    var router = useRouter();
    var currency = router.query["curr"];
    var b = router.query["b"];
    const dispatch = useDispatch();
    // const prefere = useSelector((state)=>state.preferences.currency)
    const [pref,setPref] = useLocalStorage("currency",null)
    const removeQueryParam = (param) => {
      const { pathname, query } = router;
      const params = new URLSearchParams(query);
      params.delete(param);
      router.replace(
          { pathname, query: params.toString() },
          undefined, 
          { shallow: true }
      )
    }
    // const [submitToDb,setSubmitToDb]=useLocalstorageState('tob',true)
    // const router = useRouter();
    const { tob } = router.query;
    // console.log(tob)
    useEffectOnceWhen(()=>{
      setSubmitToDb(false)
    },typeof tob !=='undefined')
    useEffect(()=>{
      push(['enableJSErrorTracking']);
    },[])
    useEffect(() => {
      const limitedInterval = setInterval(() => {
        // console.log(typeof $crisp)
        // console.log(`message ${i}, appeared after ${delay * i++} seconds`);
        if (typeof $crisp !=='undefined') {
          clearInterval(limitedInterval);
          push(["trackEvent", "crisp", "loaded"]);
        }
      }, 1000);
    }, []);
    useEffect(()=>{
      if (b){
        dispatch(
          setSplash(b)
        );
        removeQueryParam('b');
      }
    },[dispatch,b])
    useEffect(() => {
      let dt = [
        {
          index : 0,
          name : "USD",
          symbol : "$"
        },
        {
          index : 1,
          name : "EUR",
          symbol : "€"
        },
        {
          index : 2,
          name : "POUND",
          symbol : "£"
        },
      ]
        if (currency=="USD"){
          setPref(dt[0])
          dispatch(
            setPreferences(dt[0])
          );
          removeQueryParam('curr');
        }
        if (currency=="EUR"){
          setPref(dt[1])
          dispatch(
            setPreferences(dt[1])
          );
          removeQueryParam('curr');
        }
        if (currency=="POUND"){
          setPref(dt[2])
          dispatch(
            setPreferences(dt[2])
          )
          removeQueryParam('curr');
        }
    }, [currency,dispatch]);
    const handleNavbar = () => {
      setNavBAr(!navbarOpen);
    }
    useEffect(()=>{
      let dt = [
        {
          index : 0,
          name : "USD",
          symbol : "$"
        },
        {
          index : 1,
          name : "EUR",
          symbol : "€"
        },
        {
          index : 2,
          name : "POUND",
          symbol : "£"
        },
      ]
      if (language=="en"){
        dispatch(
          setPreferences(dt[2])
        );
      }
      else if (language=="es"){
        dispatch(
          setPreferences(dt[1])
        );
      }
    },[])
    const [cookies,setCookies] = useLocalStorage("cookies",{
      shown : false,
      necessary : false,
      analytical : false,
      marketing : false
    })
    const [navbarOpen,setNavBAr] = useState(false)
    //
    useEffect(() => {
      const formatTime = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        return `${minutes}min${seconds}s`;
      };
      const handleVisibilityChange = () => {
        let startTime = sessionStorage.getItem('startTime');
        let isReturningUser = sessionStorage.getItem('isReturningUser') === 'true';
    
        if (document.visibilityState === 'visible') {
          if (isReturningUser) {
            const endTime = Date.now();
            const timeSpent = endTime - startTime;
            const formattedTime = formatTime(timeSpent);
            push(['trackEvent', 'window visibility', 'visible', `returned after ${formattedTime}`, timeSpent]);
            sessionStorage.setItem('isReturningUser', 'false');
          }
          sessionStorage.setItem('startTime', Date.now().toString());
        } else if (document.visibilityState === 'hidden') {
          if (!isReturningUser) {
            isReturningUser = true;
            sessionStorage.setItem('isReturningUser', 'true');
            const endTime = Date.now();
            const timeSpent = endTime - startTime;
            const formattedTime = formatTime(timeSpent);
            push(['trackEvent', 'window visibility', 'hidden', `quit after ${formattedTime}`, timeSpent]);
          }
        }
      };
    
      document.addEventListener('visibilitychange', handleVisibilityChange);
    
      // Initialize the state in sessionStorage if it's not already set.
      if (sessionStorage.getItem('startTime') === null) {
        sessionStorage.setItem('startTime', Date.now().toString());
        sessionStorage.setItem('isReturningUser', 'false');
      }
    
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }, []);
    
    
    const [userId,setUserId] = useLocalStorage('uuid',null)
    useEffect(() => {
      if (!window.matomoUserIdSet) {
        if (userId) {
          push(['setUserId', userId]);
        } else {
          let randomID = '';
          for (let i = 0; i < 12; i++) {
            randomID += getRandomChar();
          }
          setUserId(randomID);
          push(['setUserId', randomID]);
        }
        window.matomoUserIdSet = true;
      }
    }, [userId]);    
    const position = useWindowScrollPosition();
    console.log(position);  // Check what this logs    
    // useEffect(() => {
    //   // Initialize GTM with your GTM container ID
    //   TagManager.initialize({ gtmId: tgm });
    // }, []);
    const [fixed,setFixed]=useState(false)
    useEffect(()=>{
      setFixed(true)
    },[])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
      setLoading(false)
    },[])
    return (
      <>
            <Script strategy="lazyOnload">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_TAG_MANAGER}');`}
            </Script>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS}`}
            />
            <Script strategy="lazyOnload">
              {`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS}', {
                          page_path: window.location.pathname,
                          });
                      `}
            </Script>
          {/* {loading ?
          <div
            style={{
              position : "fixed",
              top : 0,
              width : "100%",
              height : "100%",
              left : 0,
              background : "black",
              zIndex : 10000000000
            }}
          >
            <div
              style={{
                height : "100%",
                width : "100%",
                display : "flex",
                alignItems : "center",
                justifyContent : "center"
              }}
            >
              Loading ...
            </div>
          </div>
          :null} */}
          <section
          style={{
            position: fixed ? "absolute" : "fixed",
            // height: "100%",
            width: "100%",
            top : 0,
            // overflowX: "hidden"
          }}
        >
          <main style={styles}>
            <Notification />
              {preferences[0].isActive && cookies.shown==false ?
              <Cookies />
              :null
            }
              <Navbar
                handleNavbar={handleNavbar}
                navbarState={navbarOpen}
                // scrolled={scrolled}
              />
            {typeof $crisp !== 'undefined' ?
              <ChatTracker />
            :null}
            <LiveChat
            />
                {/* <section style={{ 
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top : 0,
                    overflowX: "hidden"
                  }}></section>       */}
            </main>
            <ProgressBar />
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
        </section>
      </>
)}