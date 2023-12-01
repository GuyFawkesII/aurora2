import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Footer = dynamic(() => import('../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})

  
const RefundPolicy = () => {
    return (
            <div
                className={styles.container}
            >
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
            </div>
    )
}
RefundPolicy.getInitialProps = async (ctx) => {
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
export default RefundPolicy