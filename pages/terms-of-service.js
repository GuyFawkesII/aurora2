import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense, useEffect } from 'react'
 
const Footer = dynamic(() => import('../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
  })
 
const TermsOfService = (props) => {
    const {isMobileView} = props
    useEffect(()=>{
      window.scrollTo(0, 0);
      // console.log("top")
    },[])
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
                        >Terms and conditions</h1>
                        {/* <p>WHEN USING aurorafast tv PRODUCTS YOU MUST AGREE TO THE GENERAL TERMS AND CONDITIONS.</p> */}
                    </div>
                </div>
                <div className={styles.paragraph}>
                    <div
                        className={styles.sliderContainer}
                        style={{
                          textAlign : "left"
                        }}
                    >
                  <h1>Welcome to aurorafast tv!</h1>
                  <p>These terms and conditions outline the rules and regulations for the use of aurorafast tv&apos;s Website, located at https://aurorafast.co.uk. By accessing this website we assume you accept these terms and conditions. Do not continue to use aurorafast tv if you do not agree to take all of the terms and conditions stated on this page. The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &apos;Client&apos;, &apos;You&apos; and &apos;Your&apos; refers to you, the person log on this website and compliant to the Company&apos;s terms and conditions. &apos;The Company&apos;, &apos;Ourselves&apos;, &apos;We&apos;, &apos;Our&apos; and &apos;Us&apos;, refers to our Company. &apos;Party&apos;, &apos;Parties&apos;, or &apos;Us&apos;, refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropspriate manner for the express purpose of meeting the Client’s needs in respect of the provision of the Company’s stated services, by and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same..</p>
                  <h1>Cookies</h1>
                  <p>We employ the use of cookies. By accessing aurorafast tv, you agreed to use cookies in agreement with the aurorafast tv&apos;s Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
                  <h1>License</h1>
                  <p>Unless otherwise stated, aurorafast tv and/or its licensors own the intellectual property rights for all material on aurorafast tv. All intellectual property rights are reserved. You may access this from aurorafast tv for your personal use subjected to restrictions set in these terms and conditions. You must not: Republish material from aurorafast tvSell, rent or sub-license material from aurorafast tvReproduce, duplicate or copy material from aurorafast tvRedistribute content from aurorafast tvThis Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. aurorafast tv does not filter, edit, publish or review Comments before their presence on the website. Comments do not reflect the views and opinions of aurorafast tv, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, aurorafast tv shall not be liable for the Comments or any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website. aurorafast tv reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions. You warrant and represent that: You are entitled to post the Comments on our website and have all necessary licenses and consents to do so; The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party; The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity. You hereby grant aurorafast tv a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any forms, formats or media.</p>
                  <h1>Hyperlinking to our Content</h1>
                  <p>The following organizations may link to our Website without prior written approval: Government agencies; Search engines; News organizations; Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site. These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site. We may consider and approve other link requests from the following types of organizations: commonly-known consumer and/or business information sources; dot.com community sites; associations or other groups representing charities; Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and internet portals; accounting, law and consulting firms; and educational institutions and trade associations. We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of aurorafast tv, and (d) the link is in the context of general resource information. These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site. If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to aurorafast tv. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response. Approved organizations may hyperlink to our Website as follows: By use of our corporate name; or By use of the uniform resource locator being linked to; or By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site. No use of BENETVFLI&apos;s logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
                  <h1>iFrames</h1>
                  <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
                  <h1>Content Liability</h1>
                  <p>We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
                  <h1>Your Privacy</h1>
                  <p>Please read Privacy Policy.</p>
                  <h1>Reservation of Rights</h1>
                  <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
                  <h1>Disclaimer</h1>
                  <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will: limit or exclude our or your liability for death or personal injury; limit or exclude our or your liability for fraud or fraudulent misrepresentation; limit any of our or your liabilities in any way that is not permitted under applicable law; or exclude any of our or your liabilities that may not be excluded under applicable law. The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
                  <h1>Quality of streams</h1>
                  <p>A perfect viewing experience relies upon your network access and device capabilities. The elements will be based on your location, internet capacity, the number of devices connected to the same network, the content you have chosen, and the configuration of the device you are using. Subsequently, aurorafast tv can’t make any guarantees about the content in these regards. Please note sharing a subscription will result in permanent suspension or device ban.</p>
                  <h1>Guarantee of streams</h1>
                  <p>While aurorafast tv does attempt to regularly update its channel list, aurorafast tv cannot and does not guarantee the availability of any channels listed in the aurorafast tv services. You understand that channels may become unavailable on a temporary or permanent basis at any time and for reasons beyond the control of aurorafast tv. aurorafast tv cannot and does not make any representations or warranties regarding the content or quality of any channels available through the software. You understand that picture quality may vary for reasons beyond the control of aurorafast tv, including the speed and quality of your Internet connection. The content of all channels available through aurorafast tv is the sole responsibility of the channel provider. You understand that premium channels, including but not limited to HBO, Cinemax, and Showtime, are not available through aurorafast tv.</p>
                  <h1>Responsibility</h1>
                  <p>aurorafast tv does not host any videos or TV streams on our website. We provide easier access to these streams which are otherwise freely available on the net. All channel names, content, and trademarks are the property of their respective owners. We are not affiliated and we do not claim to be affiliated with any of the owners or providers of videos and TV streams that are accessible through our website. This site and the products and services offered on this site are not associated, affiliated, endorsed, or sponsored by aurorafast tv or another brand shown on this website nor have they been reviewed tested or certified by any of these brands. All trademarks, logos, and service marks displayed are registered and/or unregistered Trademarks of their respective owners. Every effort has been made to accurately represent the product(s) sold through this website and their potential. Any claims made or examples given are believed to be accurate, however, they should not be relied on in any way in deciding whether or not to purchase. Any testimonials and examples used are exceptional results, don&apos;t apply to the average purchaser and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual&apos;s success depends on his or her background, dedication, desire, and motivation as well as other factors not always known and sometimes beyond control. There is no guarantee you will duplicate the results stated here. You recognize any business endeavor has inherent risk for loss of capital.</p>
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
TermsOfService.getInitialProps = async (ctx) => {
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
  export default TermsOfService