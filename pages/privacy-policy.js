import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
 
const Footer = dynamic(() => import('../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
  })
 
const PrivacyPolicy = (props) => {
    const {isMobileView} = props
    return (
        <>
            <div
                className={styles.container}
                style={{
                  background : "white"
                }}
            >
                <div
                    className="headerContainer"
                    style={{
                      background : "white",
                      marginTop : "10vh",
                      height : "auto"
                    }}
                >
                    <div
                      style={{
                        width : "100%",
                        padding : "0 3.5rem"
                      }}
                    >
                        <h1
                          style={{
                            textAlign : "center",
                            width : "100%"
                          }}
                  >
                       Privacy</h1>
                        <p>WHEN YOU USE OUR SERVICE, YOU’RE TRUSTING US WITH YOUR INFORMATION. WE UNDERSTAND THIS IS A BIG RESPONSIBILITY AND WORK HARD TO PROTECT YOUR INFORMATION AND PUT YOU IN CONTROL.</p>
                    </div>
                </div>
                <div className={styles.paragraph}>
                    <div
                        className={styles.sliderContainer}
                    >
                  <h1>Privacy Policy for aurorafast tv</h1>
                  <p>At aurorafast tv, accessible from https://aurorafast.co.uk, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by NETFLY TV and how we use it.</p>
 
                  <h1>Log Files</h1>
                  <p>aurorafast tv follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.</p>
 
                  <h1>Cookies and Web Beacons</h1>
                  <p>Like any other website, NETFLY TV uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.</p>
 
                  <h1>Privacy Policies</h1>
                  <p>You may consult this list to find the Privacy Policy for each of the advertising partners of NETFLY TV. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on NETFLY TV, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that NETFLY TV has no access to or control over these cookies that are used by third-party advertisers.</p>
 
                  <h1>Third Party Privacy Policies</h1>
                  <p>privacy.NETFLY_TV_s You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites. What Are Cookies?</p>
 
                  <h1>Children&apos;s Information</h1>
                  <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. NETFLY TV does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
 
                  <h1>Online Privacy Policy Only</h1>
                  <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in NETFLY TV. This policy is not applicable to any information collected offline or via channels other than this website.</p>
 
                  <h1>Consent</h1>
                  <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                </div>
              </div>
              <Suspense fallback={null}>
                <Footer
                  isMobileView={isMobileView}
                />
              </Suspense>
            </div>
        </>
    )
}
PrivacyPolicy.getInitialProps = async (ctx) => {
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
export default PrivacyPolicy