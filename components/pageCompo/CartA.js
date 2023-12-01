import React , {useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import styles from '../../styles/Home.module.css'
import {BsPaypal} from 'react-icons/bs'
import {BiCreditCardFront} from 'react-icons/bi'
import {FaBtc} from 'react-icons/fa'
import {TbCurrencyDogecoin} from 'react-icons/tb'
import {SiLitecoin} from 'react-icons/si'
const CurrencySwitcher = dynamic(() => import('./currencySwitcher'), {
    suspense: true,
    ssr : true,
    loading: undefined,
  })

const CartA = (props) => {
    const {data,handleActivePeriod,setchange,periods,isActive} = props
    // console.log(data)
    // console.log(isActive)
    const preferences = useSelector((state) => state.preferences.currency);
    const plan = useSelector((state) => state.cart.data.plan);
    // console.log(plan)
    const [activeConnection,setActiveConnection]=useState(null)
    const [activePeriod,setActivePeriod]=useState(null)
    // useEffect(()=>{

    // },[])
    useEffect(()=>{
        // if (periods){
            // var period = data.find(obj => {
            //     return obj.id === plan.period.id
            // })
            // setActivePeriod(period)
            var connection = data[0].Connections.find(obj => {
                return obj.connection === plan.connection.slug
            })
            setActiveConnection(connection)
        // }
    },[plan])
    // console.log(periods,activeConnection,plan)
    const [paymentMethod,setPaymentMethod] = useState("CC")
    return(
        <div className="cart_container">
            {/* {periods ?
                <>
                    <strong>PAYMENT PERIOD</strong>
                    <div
                        className="tabs_container"
                    >
                        {data &&
                            data.map((obj,index)=>{
                                return (
                                    <>
                                        <div className="tab">
                                            <div
                                                onClick={()=>{handleActivePeriod({
                                                    id : obj.id,
                                                    nb : obj.period
                                                });setchange(true)}}
                                                key={obj.id}
                                            >
                                                <p
                                                    className={plan.period.nb === obj.period ? "title active-anim" : "title"}
                                                >
                                                    {obj.period} {obj.period==1 ?  "MONTH" : "MONTHS"}
                                                </p>
                                            </div>
                                        </div>
                                </>
                            )
                        })
                    }
                </div>
                </>
            :null} */}
            <div
                style={{
                    position : "relative",
                    width : "100%",
                    display: "flex"
                }}
            >
                <strong>TOTAL COST</strong>
                <p
                    style={{
                        position: "absolute",
                        right: "56px",
                        bottom: 0
                    }}
                >change currency</p>
                <Suspense fallback={null}>
                    <CurrencySwitcher
                        left={true}
                        top = "36px"
                    />
                </Suspense>
            </div>
            <div
                className='total_const_container'
            >
                <div
                    className="currency_pri_container"
                >
                    <span className='symbol'>{preferences.symbol}</span>
                    <span
                        className="price"
                    >
                        { activeConnection ? activeConnection.price[preferences.index].amount : null }
                    </span>
                </div>
            </div>
            <strong>CHOOSE PAYMENT METHOD</strong>
            <div
                className='total_const_container'
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "end",
                        marginBottom: "14px",
                        position: "relative",
                        width: "100%",
                        gap: "8px"
                    }}
                >
                    <span className="checkbox_container">
                        {paymentMethod == "CC" ?
                            <span
                                className="inset_checkbox"
                            >
                            </span>
                        :null}
                    </span>
                        <div>
                            Credit Card / Paypal
                        </div>
                    <div
                        style={{
                            position : "absolute",
                            right : "5px",
                            display : "flex",
                            gap : "5px"
                        }}
                    >
                        <BiCreditCardFront />
                        <BsPaypal />
                    </div>
                    
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "end",
                        marginBottom: "14px",
                        position: "relative",
                        width: "100%",
                        gap: "8px",
                        color : "#8f8f8f"
                    }}
                >
                    <span className="checkbox_container disabled">
                        {paymentMethod == "Crypto" ?
                            <span
                                className="inset_checkbox"
                            >
                            </span>
                        :null}
                    </span>
                        <div
                        >
                            Crypto (Coming Soon)
                        </div>
                    <div
                        style={{
                            position : "absolute",
                            right : "5px",
                            display : "flex",
                            gap : "5px"
                        }}
                    >
                        <FaBtc />
                        <TbCurrencyDogecoin />
                        <SiLitecoin />
                    </div>
                    
                </div>
            </div>
            <div
                className={styles.buttonContainer}
          >
              {isActive ?
                <a
                    href={activeConnection ? activeConnection.price[preferences.index].url : "/"} target="_blank" rel="noreferrer"
                >
                    <button
                    >

                            Buy Now
                    </button> 
                </a>
                :
                <a
                    // href={activeConnection ? activeConnection.price[preferences.index].url : "/"} target="_blank" rel="noreferrer"
                >
                    <button
                        className='disabled-button'
                    >

                            Buy Now
                    </button> 
                </a>
            }
                </div>
        </div>
    )
}
export default CartA