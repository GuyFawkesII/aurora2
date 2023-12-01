import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Plans = dynamic(() => import('../components/pageCompo/pricing'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})
const Footer = dynamic(() => import('../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})
const Pricing = (props) => {
    const {isMobileView} = props
    return (
        <div
          id="4"
          className={styles.main}
        >
                <div className={styles.para}>
                    <h1>Our pricing</h1>
                    <Suspense fallback={null}>
                        <Plans
                          isMobileView={isMobileView}
                          cart = {true}
                        />
                    </Suspense>
                </div>
              <Suspense fallback={null}>
                <Footer
                    isMobileView={isMobileView}
                />
              </Suspense>
        </div>
    )
}
Pricing.getInitialProps = async (ctx) => {
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
  export default Pricing