import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Footer = dynamic(() => import('../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
  })
  
const Contact = () =>{
    return (
        <>
            <div
                className={styles.paragraph}
            >
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
            </div>
        </>
    )
}
export default Contact