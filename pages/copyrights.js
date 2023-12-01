import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
 
const Footer = dynamic(() => import('../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})
 
const BillingInformations = (props) =>{
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
                          }}>Copyright policy</h1>
                        {/* <p>WHEN YOU USE OUR SERVICE, YOU’RE TRUSTING US WITH YOUR INFORMATION. WE UNDERSTAND THIS IS A BIG RESPONSIBILITY AND WORK HARD TO PROTECT YOUR INFORMATION AND PUT YOU IN CONTROL.</p> */}
                    </div>
                </div>
                <div className={styles.paragraph}>
                    <div
                        className={styles.sliderContainer}
                    >
                        <h1>NOTIFICATION OF INFRINGEMENT for aurorafast tv</h1>
                        <p>aurorafast tv takes copyright and other intellectual property rights very seriously. It is aurorafast tv’s policy to (1) expeditiously block access to or remove content that it believes in good faith may contain material that infringes the copyrights of third parties and (2) remove and discontinue service to repeat offenders. aurorafast tv has adopted the following policy concerning copyright infringement in accordance with the Digital Millennium Copyright Act (DMCA), 17 U.S.C. 512. The DMCA provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. Procedure for Reporting Copyright Infringements: If you believe in good faith that any content residing on or accessible through aurorafast tv’s website or the aurorafast tv service infringes your copyrights, you may send us a notice requesting that the material be removed, or that access to it be blocked. The notice must include the following information (consult legal counsel or refer to 17 U.S.C. 512(c) to confirm these requirements): A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright that has been allegedly infringed. Identification of the copyrighted works claimed to have been infringed on aurorafast tv’s website or the aurorafast tv service, or if multiple copyrighted works are covered by a single notification, a representative list of such works. Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit aurorafast tv to locate the material. Contact information for the notifier, such as an address, telephone number and, if available, an e-mail address. A statement that the notifier has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and A statement that the information in the notification is accurate, and under penalty of perjury, that the notifying party is authorized to act on behalf of the owner of the copyright that is allegedly infringed. Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability. copyright.Please_note_2</p>
                        <h1>COUNTER-NOTIFICATION</h1>
                        <p>If you elect to send us a counter notice, to be effective it must be a written communication that includes the following (please consult your legal counsel or See 17 U.S.C. Section 512(g)(3) to confirm these requirements): A physical or electronic signature of the subscriber. Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled. A statement under penalty of perjury that the subscriber has a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled. The subscriber&apos;s name, address, and telephone number, and a statement that the subscriber consents to the jurisdiction of Federal District Court for the judicial district in which the address is located, or if the subscriber&apos;s address is outside of the United States, for any judicial district in which aurorafast tv may be found, and that the subscriber will accept service of process from the person who provided notification under subsection (c)(1)(C) or an agent of such person.</p>
                        <h1>DESIGNATED COPYRIGHT AGENT</h1>
                        <p>All notifications of claimed infringement with respect to aurorafast tv’s website or the aurorafast tv service should be sent to: mytoptvstore@gmail.com For clarity, only DMCA notices should go to the aurorafast tv Designated Copyright Agent. Any other feedback, comments, requests for technical support or other communications should be directed to aurorafast tv customer service through the aurorafast tv Contact Center. You acknowledge that if you fail to comply with all of the requirements of this section, your DMCA notice may not be valid.</p>
                        <h1>Privacy Policies</h1>
                        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of aurorafast tv. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on aurorafast tv, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that aurorafast tv has no access to or control over these cookies that are used by third-party advertisers.</p>
                        <h1>Third Party Privacy Policies</h1>
                        <p>privacy.NETFLY_TV_s You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites. What Are Cookies?</p>
                        <h1>Children&apos;s Information</h1>
                        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. aurorafast tv does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                        <h1>Online Privacy Policy Only</h1>
                        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in aurorafast tv. This policy is not applicable to any information collected offline or via channels other than this website.</p>
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
BillingInformations.getInitialProps = async (ctx) => {
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
  export default BillingInformations