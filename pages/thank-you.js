import { translations } from "../data/translation"
import { Suspense, useEffect,useState } from 'react'
import dynamic from 'next/dynamic'
import Brand from "../layout/Brand"
import { useRouter } from "next/router"

const Footer = dynamic(() => import('../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
  })


const lang = process.env.NEXT_PUBLIC_LANGUAGE

const ThankYou  = (props) => {
    const {
        language,
        isMobileView
    }=props
    // console.log(language)
    const langue = language || lang
    // const router = useRouter()
    // const domain = langue=='es' ? 'https://aurorarapido.com' : 'https://aurorafast.co.uk'
    const [domain,setDomain]=useState(false)
    useEffect(()=>{
        if (domain){
            window.location.href=langue=='es' ? 'https://aurorarapido.com' : 'https://aurorafast.co.uk'
            setDomain(false)
        }
    },[domain])
    return (
        <div
            style={{
                position : "fixed",
                height : "100vh",
                width : "100%",
                background : "white",
                zIndex : 10000,
                color : "black",
                overflowY : "scroll"
            }}
        >
            <div
                style={{
                    width : "100%",
                    display : "flex",
                    justifyContent : "center"
                }}
                onClick={()=>{
                    // router.push(domain)
                    setDomain(true)
                }}
            >
                <Brand
                    center={true}
                    isMobileView={isMobileView}
                />
            </div>
            <div
                style={{
                    maxWidth : "1000px",
                    margin : "auto"
                }}
            >
                <div
                    style={{
                        height : "300px",
                        width : "100%"
                    }}
                >
                    <img src="/image-6.png" alt="thankyou" height="100%" width="100%" style={{
                        objectFit : "contain"
                    }} />
                </div>
                <div
                    style={{
                        padding : "20px 20px"
                    }}
                >
                    <div>
                        <p
                            style={{
                                fontWeight : 700
                            }}
                        >{translations[langue].thank_you.step1}</p>
                        <span
                            style={{
                                lineHeight : "30px"
                            }}
                        >{translations[langue].thank_you.step01Des}</span>
                        <span
                            style={{
                                color : "blue",
                                textDecoration : "underline",
                            }}
                        >
                            <a href={`mailto:${translations[langue].thank_you.email1}`}>
                                {translations[langue].thank_you.email1}
                            </a>
                        </span>
                        <span>{translations[langue].thank_you.or}</span>
                        <span
                            style={{
                                color : "blue",
                                textDecoration : "underline",
                            }}
                        >
                            <a href={`mailto:${translations[langue].thank_you.email2}`}>
                                {translations[langue].thank_you.email2}
                            </a>
                        </span>
                        <span>
                            {translations[langue].thank_you.step11Des}
                        </span>
                    </div>
                    <div
                        style={{
                            marginTop : "10px"
                        }}
                    >
                        <p
                            style={{
                                fontWeight : 700
                            }}
                        >{translations[langue].thank_you.step2}</p>
                        <p
                            style={{
                                lineHeight : "30px"
                            }}
                        >{translations[langue].thank_you.step2Des}</p>
                    </div>
                </div>
            </div>
            <Suspense fallback={null}>
                <Footer
                  isMobileView={isMobileView}
                  position="relative"
                  langue = {langue}
                />
              </Suspense>
        </div>
    )
}
ThankYou.getInitialProps = async (ctx) => {
  let isMobileView = (ctx.req
    ? ctx.req.headers['user-agent']
    : navigator.userAgent).match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
      // Get the Accept-Language header from the HTTP request
      const userIPAddress = ctx.req.connection.remoteAddress || ctx.req.socket.remoteAddress || ctx.req.connection.socket.remoteAddress;
      // Use the `fetch` function to make a server-side request to ipinfo.io
      const token = '14b6fe65553e2c'; // Replace with your API token
      const url = `https://ipinfo.io/${userIPAddress}?token=${token}`;
      const response = await fetch(url);
      const geolocation = await response.json()
      let countries = ['MX','ES']
      const language = countries.includes(geolocation.country) ? 'es' : 'en'
    //Returning the isMobileView as a prop to the component for further use.
    return {
      isMobileView: Boolean(isMobileView),
      userIPAddress,
      language
    }
}
export default ThankYou