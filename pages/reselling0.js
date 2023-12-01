import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
// import st from '../styles/Support.module.css'
import Image from 'next/image'
import React , {useState,useEffect} from 'react'
// import { useDispatch,useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophyStar,
  faBadgeCheck,
  faHeadSet
    
} from "@fortawesome/free-solid-svg-icons";
// const BasicTable = dynamic(() => import('../components/tables/basicTable'), {
//     suspense: true,
// })
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions";
import {plans,promise,dt,credits,credits2,faq} from '../data/reselling'

const Plan = dynamic(() => import('../components/pageCompo/plan'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})
const Footer = dynamic(() => import('../layout/Footer'), {
    suspense: true,
    ssr : true,
    loading: undefined,
})
const CartA = dynamic(() => import('../components/pageCompo/CartA'), {
    ssr: false,
})
const ResellerPage = (props) => {
    const {isMobileView} = props
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const [selectedPlan,setSelectedPlan]=useState(0)
    const handleSelectedPlan = (obj) => {
        setSelectedPlan(obj)
    }
    const plan = useSelector((state) => state.cart.data.plan);
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(
    //         setCart({
    //             plan : {
    //                 ...plan,
    //                 connection : 1
    //         }}))
    // },[])
    const handleActivePeriod = (p) => {
        dispatch(
            setCart({
                plan : {
                    ...plan,
                    period : p
        }}))
    }
    const [change,setchange]=useState(false)
    return (
        <>
            <div
                id="2"
                className={styles.main}
                style={{
                    maxWidth : "1100px",
                    margin : "auto",
                }}
            >
                    <div
                        className={styles.para}
                        style={{
                            background : "#fff"
                        }}
                    >
                        <h1>Reselling Program</h1>
                        <div
                            className={styles.header}
                        >
                            {
                                faq.map((obj,index)=>{
                                    return (
                                        <div
                                            key={index}
                                        >
                                            <h1>{obj.title}</h1>
                                            <p>{obj.description}</p> 
                                        </div>
                                            )
                                        })
                                    }
                            <h1>Credit Points Calculation</h1>
                                <table>
                                    <tbody>
                                    {
                                        credits.map((obj,index)=>{
                                            return (
                                                <tr
                                                    key={index}
                                                >
                                                    <td>{obj.period}</td>
                                                    <td>{obj.credits}</td> 
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            <h1>How many Credit Points will you get?</h1>
                            <table>
                                <tbody>
                                    {
                                        credits2.map((obj,index)=>{
                                            // console.log(obj)
                                            return (
                                                <tr
                                                    key={index}
                                                >
                                                    <td>{obj.price}</td>
                                                    <td>{obj.credits}</td> 
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <h1>Our pricing Plans</h1>
                        <div
                            style={{
                                display: isMobileView ? "block" : "grid",
                                gridTemplateColumns: "64% 34%",
                                position: "relative",
                                height: "100%",
                                width: "100%",
                                gap: "24px"
                            }}
                        >
                            <div
                                style={{
                                    width : "100%",
                                }}
                            >
                            <Suspense fallback={null}>
                                <Plan
                                    data={plans.prices[0]}
                                    preferences = {plans.preferences}
                                    isMobileView={isMobileView}
                                    cart = {false}
                                    color = "#0078d7"
                                    change={change}
                                    setchange={setchange}
                                    isActive={plans.preferences.isActive}
                                />
                            </Suspense>
                            </div>
                            {!isMobileView ?
                                <div
                                    className="cart_wrapper"
                                >
                                    <CartA
                                        // plan={selectedPlan}
                                        data={plans.prices}
                                        isActive={plans.preferences.isActive}
                                        handleActivePeriod={handleActivePeriod}
                                        setchange={setchange}
                                        periods = {false}
                                    />
                                </div>
                            :null}
                        </div>
                        <h1>What makes us special?</h1>
                        <Image
                            src="/line.png"
                            height={20}
                            width = {100}
                            alt="line_image"
                        />
                        <div
                            className="cards-2 cards"
                            style={{
                                marginTop: "38px"
                            }}
                        >
                            {dt.map((obj,index)=>{
                                return (
                                    <div
                                        key={index}
                                        className="card"
                                        style={{
                                            padding : "15px",
                                            margin : 0
                                        }}
                                    >
                                    <div
                                        className={styles.features_container}
                                    >
                                        <div>
                                            <Image
                                                src={obj.image}
                                                height = "80px"
                                                width = "80px"
                                                alt={`index-${index}`}
                                            />
                                        </div>
                                        <strong>{obj.title}</strong>
                                        <p>{obj.descriptiom}</p>
                                    </div>
                                </div>
                                )
                            })}
                    </div>
                    <h1>Our Promise</h1>
                    <div
                            className="cards"
                            style={{
                                marginTop: "38px"
                            }}
                        >
                            {promise.map((obj,index)=>{
                                return (
                                    <div
                                        key={index}
                                        className="card"
                                        style={{
                                            padding : "15px",
                                            margin : 0
                                        }}
                                    >
                                    <div
                                        className={styles.features_container}
                                    >
                                        <div>
                                            <Image
                                                src={obj.image}
                                                height = "80px"
                                                width = "80px"
                                                alt={`line-${index}`}
                                            />
                                        </div>
                                        <strong>{obj.title}</strong>
                                        <p>{obj.descriptiom}</p>
                                    </div>
                                </div>
                                )
                            })}
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
ResellerPage.getInitialProps = async (ctx) => {
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
  export default ResellerPage