import styles from '../../styles/Home.module.css'
// import {Dt} from '../data/plans'
import { useEffect,useState , useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import EmailForm0 from '../../components/forms/form0';
import EmailForm from '../../components/forms/email';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiCheckShield} from 'react-icons/bi'
import {BsFillCreditCardFill} from 'react-icons/bs'
import {CiBitcoin} from 'react-icons/ci'
import {CgPaypal} from 'react-icons/cg'
import {AiOutlineCheck} from 'react-icons/ai'
// import CurrencyPopup from '../components/pageCompo/currencyPopup';
import { useInView } from 'react-intersection-observer';
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { setNotification } from "../../store/actions";
import { translations } from '../../data/translation';
import { push } from "@socialgouv/matomo-next";


const language = process.env.NEXT_PUBLIC_LANGUAGE


// import { useDispatch, useSelector } from "react-redux";


const CurrencyPopup = dynamic(() => import('../../components/pageCompo/currencyPopup'), {
    ssr: false,
})
const CurrencySwitcher = dynamic(() => import('../../components/pageCompo/currencySwitcher'), {
    ssr: false,
  })
const Checkout = (props) => {
    const {
        isMobileView
    }=props
    const [Dt,setData]=useState([])
    const getPlans = async () => {
        const plans = await axios.post('https://br.aurorafast.co.uk/getPlans',null)
        // console.log(plans)
        // let pl = JSON.parse(plans.data)
        // console.log(pl)
        console.log(plans.data)
        setData(plans.data)
    }
    useEffect(()=>{
        getPlans()
    },[])
    const [connections,setConnections]=useState(3)
    const preferences = useSelector((state) => state.preferences.currency);
    const targetRef = useRef(null);
    const scrollToElement = () => {
        const element = targetRef.current;
        const topOffset = element.offsetTop - 50; // Adjust the margin here
    
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth',
        });
    };

    const [period,setPeriod]=useState(1)
    const [devices,setDevices]=useState(1)
    const handleIncrease=()=>{
        if (devices<4){
            setDevices(devices+1)
            push(['trackEvent', 'click', 'increased' , 'number of devices' , devices+1 ]);
        }
    }
    const dispatch  = useDispatch()
    const handleDecrease=()=>{
        if (devices>1){
            push(['trackEvent', 'click', 'decreased' , 'number of devices' , devices-1 ]);
            setDevices(devices-1)
        }
    }
    const [paymentMethod,setPaymentMethod]=useState('cc')
    const [isOpen,setIsOpen] = useState(null)
    const [opened,setOpened] = useState(false)
    const prefere = useSelector((state)=>state.preferences)
    const [modalOpen,setMoodalOpen] = useState(false)
    const { ref, inView, entry } = useInView({
      threshold: 0,
    });12
    useEffect(()=>{
      if (inView && currency==null && !opened){
        setMoodalOpen(true)
      }
    },[inView])
    // const closeCurrModal = () => {
    //   if (modalOpen){
    //     setMoodalOpen(false)
    //     setOpened(true)
    //   }
    // }
    const handlePlan = (obj,index)=>{
        // console.log(obj)
        push(['trackEvent', 'click', 'on plans' , obj.period  + 'month pass' ]);
        if (obj.availability.enabled){
            setPeriod(index);
            scrollToElement();
        }
        else {
            dispatch(
                setNotification({
                  active : true,
                  message : obj.availability.notificationMsg,
                  type : 'yellow'
                })
              )
        }
    }
    const handlePaymentMethod = (method) => {
        push(['trackEvent', 'click', 'on payment method' , method ]);
    }
    return (
        <div
          id="5"
          className={styles.container}
          style={{
            background : "#f4f4f4",
            height : "100%",
            paddingBottom :"5rem"
          }}
        >
            {/* {modalOpen ?
            <CurrencyPopup
                closeModal={closeCurrModal}
            />
            :null} */}
            {Dt.length>0 ?
            <div
                style={{
                    padding : "5rem 1rem 0",
                    maxWidth : "800px",
                    margin : "auto"
                }}
            >
                <div
                    style={{
                        display : "flex",
                        alignItems : "center",
                        gap : "10px",
                        marginBottom : "10px"
                    }}
                >
                    <span
                        style={{
                            background: "#00c600",
                            height: "35px",
                            width: "35px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "23px",
                            fontWeight: 800,
                            borderRadius: "10px"
                        }}
                    >
                        1
                    </span>
                    <h1
                        style={{
                            color : "#000",
                            fontSize : "25px"
                            // margin : 0
                        }}
                    >{translations[language].checkout.choose_plan}</h1>
                </div>
                    <div
                        style={{
                            display : isMobileView ? "block" : "flex",
                            gap : "2rem",
                            height : "100%",
                            justifyContent : "center"
                        }}
                    >
                        {Dt.length>0 ?
                        <>
                        {
                            Dt.map((obj,index)=>{
                            return (
                                    <div
                                        key={index}
                                        style={{
                                            border: "2px solid rgb(236 236 236)",
                                            borderRadius : "10px",
                                            maxWidth : isMobileView ? undefined : "250px",
                                            maxHeight : "250px",
                                            background : obj.availability.enabled ? "#fff" : "rgb(179 179 179)",
                                            display : isMobileView ? "block" : "grid",
                                            height : "100%",
                                            width : "100%",
                                            alignItems : "center",
                                            justifyContent : "center",
                                            padding : "10px 0",
                                            textAlign : "center",
                                            color : obj.availability.enabled ? "#000" : "#fff",
                                            border : index==period ? "2px solid blue" : undefined,
                                            boxShadow : index==period ? "0px 0px 5px blue" : undefined,
                                            marginTop : isMobileView ? "25px" : undefined
                                        }}
                                        onClick={()=>{handlePlan(obj,index)}}
                                    >
                                        {!isMobileView ?
                                        <>
                                            <strong
                                                style={{
                                                    color : obj.availability.enabled ? "#000" : "#fff",
                                                }}
                                            >{obj.period==1 ? '1 ' + translations[language].checkout.month_pass : obj.period + ' ' + translations[language].checkout.months_pass }</strong>
                                            <div
                                                style={{
                                                    display : "grid"
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        color : obj.availability.enabled ? "#000" : "#fff",
                                                        fontWeight : 800,
                                                        fontSize : "30px"
                                                    }}
                                                >
                                                    {parseFloat((obj.Connections[0].price[preferences.index].amount / obj.period).toFixed(2))}
                                                    {/* &#160;  */}
                                                    <span
                                                        style={{
                                                            fontSize : "20px",
                                                        }}
                                                    >
                                                        {obj.Connections[0].price[preferences.index].symbol}
                                                    </span>
                                                </div>
                                                <span
                                                    style={{
                                                        fontSize : "15px",
                                                        marginTop : "-15px"
                                                    }}
                                                >
                                                    {translations[language].checkout.per_month}
                                                </span>
                                                {/* {obj.availability.enabled ? */}
                                                    <span
                                                        style={{
                                                            // color : index == 1 ? "#fff":"#000",
                                                            color : obj.availability.enabled  ? (index == 1 ? "#fff" : "#000") : "white",
                                                            background : obj.availability.enabled  ? (index == 1 ? "#00e800" : "#fff") : "grey",
                                                            border : index == 1 ? 0 : "1px solid #eaecff",
                                                            borderRadius : "12px",
                                                            fontSize : "14px"
                                                        }}
                                                    >
                                                        -{obj.save} {translations[language].checkout.off}
                                                    </span>
                                                {/* :null} */}
                                                <span
                                                    style={{
                                                        fontSize : "10px",
                                                        marginTop : "10px"
                                                    }}
                                                >
                                                    {index==0 ? '7-day money-back guarantee' :"30-day money-back guarantee"}
                                                </span>
                                            </div>
                                        </>
                                        :
                                        <div
                                            style={{
                                                width : "100%",
                                                display : "flex",
                                                justifyContent : "space-between",
                                                padding : "0 1rem",
                                                position : "relative"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "-27px",
                                                    right: 0,
                                                    height: 0,
                                                    width: "100%"
                                                    // background : "green",
                                                }}
                                            >
                                                {obj.availability.enabled ?
                                                    <span
                                                        style={{
                                                            background : index==1 ? "green": "#fff",
                                                            borderRadius : "10px",
                                                            padding : "5px 10px",
                                                            color : index==1 ? "white" : "black",
                                                            border : index==1 ? undefined : "1px solid #d9d9d9"
                                                        }}
                                                    >{translations[language].checkout.save} {obj.save}</span>
                                                :null}
                                            </div>
                                            <strong
                                                style={{
                                                    display : "flex",
                                                    alignItems : "center",
                                                    gap : "10px"
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display : "flex",
                                                        alignItems : "center",
                                                        height : "20px",
                                                        width :"20px",
                                                        border : obj.availability.enabled ? "1px solid grey" : "1px solid white",
                                                        justifyContent : "center",
                                                        borderRadius:"3px"
                                                    }}
                                                >
                                                    {period==index ?
                                                        <AiOutlineCheck />
                                                    :null}
                                                </div>
                                                {obj.period==1 ? '1 ' + translations[language].checkout.month_pass : obj.period + ' ' + translations[language].checkout.months_pass }</strong>
                                            <div
                                                    style={{
                                                        color : obj.availability.enabled ? "#000" : "white",
                                                        fontWeight : 800,
                                                        fontSize : "20px"
                                                    }}
                                                >
                                                    {parseFloat((obj.Connections[0].price[preferences.index].amount / obj.period).toFixed(2)) }
                                                    {/* &#160;  */}
                                                    <span
                                                        style={{
                                                            fontSize : "12px",
                                                        }}
                                                    >
                                                        {obj.Connections[0].price[preferences.index].symbol} / {translations[language].month}
                                                    </span>
                                                </div>
                                        </div>
                                        }
                                    </div>
                            )
                        })}
                        </>
                        :null}
                    </div>
                    <div
                        style={{
                            display : "flex",
                            alignItems : "center",
                            gap : "10px",
                            marginBottom : "10px",
                            marginTop : "50px"
                        }}
                        ref={targetRef}
                    >
                        <span
                            style={{
                                background: "#00c600",
                                height: "35px",
                                width: "35px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "23px",
                                fontWeight: 800,
                                borderRadius: "10px"
                            }}
                        >
                            2
                        </span>
                        <h1
                            style={{
                                color : "#000",
                                fontSize : "25px"
                                // margin : 0
                            }}
                        >{translations[language].checkout.checkout}</h1>
                    </div>
                    <div
                        style={{
                            display : "flex",
                            gap : "10px",
                            width : "100%"
                        }}
                    >
                        <div
                            style={{
                                border : "1px solid",
                                height : isMobileView ? undefined : "300px",
                                width : "600px",
                                background : "#fff",
                                padding : !isMobileView ? "1rem" : "8px 10px 10px",
                                borderRadius : "10px",
                                marginTop : isMobileView ? "1rem" : 0,
                            }}
                        >
                            {Dt.length>0 ?
                                <div
                                    style={{
                                        height : "100%",
                                        // marginTop : "1rem",
                                        // padding: "0 1rem"
                                    }}
                                    className="checkout"
                                >
                                    <EmailForm0
                                        url = {Dt.length>0 ?
                                                Dt[period].Connections[devices-1].price[preferences.index].url
                                                :null
                                        }
                                    >
                                        <div
                                            style={{
                                                display : "grid",
                                                width : "100%",
                                                gridTemplateColumns : !isMobileView ? "32% 32% 32%" : undefined,
                                                gap : "5px",
                                                margin : "auto",
                                                marginTop : isMobileView ? "15px" : "10px",
                                                fontWeight : isMobileView ? "800" : "700",
                                                // paddingBottom : "1rem"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    borderRadius : "7px",
                                                    // border : "1px solid",
                                                    color : "#000",
                                                    display : "flex",
                                                    justifyContent :  "space-between",
                                                    gap : "3px",
                                                    background: "#9292ff",
                                                    color: "#fff",
                                                    position : "relative",
                                                    padding : isMobileView ? "6px 11px" : "4px 7px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display : "flex",
                                                        justifyContent : "center",
                                                        alignItems : "center",
                                                        gap : "10px"
                                                    }}
                                                    onClick={()=>{handlePaymentMethod('paypal')}}
                                                >
                                                    <div
                                                        style={{
                                                            display : "flex",
                                                            alignItems : "center"
                                                        }}
                                                    >
                                                        <CgPaypal />
                                                    </div>
                                                    Paypal
                                                </div>
                                                <div
                                                    style={{
                                                        display : "flex",
                                                        alignItems : "center"
                                                    }}
                                                >
                                                    <AiOutlineCheck />
                                                </div>
                                            </span>
                                            <span
                                                style={{
                                                    borderRadius : "7px",
                                                    border : "1px solid",
                                                    color : "rgb(205 205 205)",
                                                    display : "flex",
                                                    // justifyContent : "center",
                                                    gap : "10px",
                                                    background : "#f4f4f4",
                                                    padding : isMobileView ? "6px 11px" : "4px 5px",
                                                    marginTop : isMobileView ? "7px" : undefined
                                                }}
                                                onClick={()=>{handlePaymentMethod('Credit Card')}}
                                            >
                                                <div
                                                    style={{
                                                        display : "flex",
                                                        alignItems : "center"
                                                    }}
                                                >
                                                    <BsFillCreditCardFill />
                                                </div>
                                                Credit Card
                                            </span>
                                            <span
                                                style={{
                                                    borderRadius : "7px",
                                                    border : "1px solid",
                                                    color : "rgb(205 205 205)",
                                                    display : "flex",
                                                    // justifyContent : "center",
                                                    gap : "10px",
                                                    background : "#f4f4f4",
                                                    padding : isMobileView ? "6px 11px" : "4px 5px",
                                                    marginTop : isMobileView ? "7px" : undefined
                                                }}
                                                onClick={()=>{handlePaymentMethod('CryptoCurrency')}}
                                            >
                                                <div
                                                    style={{
                                                        display : "flex",
                                                        alignItems : "center"
                                                    }}
                                                >
                                                    <CiBitcoin />
                                                </div>
                                                CryptoCurrency
                                            </span>
                                        </div>
                                        <div
                                            style={{
                                                display : "grid"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width : "100%",
                                                    // background : "grey",
                                                    padding : "10px 7px 25px",
                                                    position : "relative",
                                                    marginBottom : "10px",
                                                    borderRadius : "10px",
                                                    height : "100%",
                                                    color : "#000"
                                                    // position : "relative"
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width : "100%",
                                                        height: "33px",
                                                        marginTop: "13px",
                                                        display : "flex",
                                                        // justifyContent : "flex-end",
                                                    }}
                                                >
                                                    <span>{translations[language].checkout.devices}</span>
                                                    <div
                                                        style={{
                                                            display : "flex",
                                                            color : "#000",
                                                            gap : "5px",
                                                            position : "absolute",
                                                            right : "10px",
                                                            height : "24px"
                                                        }}
                                                    >
                                                        <button
                                                            style={{
                                                                padding :"5px 7px",
                                                                display : "flex",
                                                                justifyContent : "center",
                                                                alignItems : "center"
                                                            }}
                                                            onClick={()=>handleDecrease()}
                                                        >-</button>
                                                        <span
                                                            style={{
                                                                border : "1px solid #dbdbdb",
                                                                color : "rgb(123 123 123)",
                                                                padding : "0 5px",
                                                                display : "flex",
                                                                justifyContent : "center",
                                                                alignItems : "center",
                                                                borderRadius : "2px"
                                                            }}
                                                        >
                                                            {devices}
                                                        </span>
                                                        <button
                                                            style={{
                                                                padding :"5px",
                                                                display : "flex",
                                                                justifyContent : "center",
                                                                alignItems : "center"
                                                            }}
                                                            onClick={()=>handleIncrease()}
                                                        >+</button>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        width : "100%",
                                                        border : ".5px solid #eeeeee",
                                                        // margin : "10px 0"
                                                    }}
                                                    >
                                                </div>
                                                <div
                                                    style={{
                                                        display : "flex",
                                                        position : "relative",
                                                        alignItems :"center",
                                                        gap : "10px",
                                                        marginTop : "10px"
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            fontSize : "25px",
                                                            display : "flex",
                                                            alignItems : "center",
                                                            color : "#555555"
                                                        }}
                                                    >
                                                        <AiOutlineFundProjectionScreen />
                                                    </div>
                                                    <div
                                                        style={{
                                                            display:"flex",
                                                            alignItems : "center"
                                                        }}
                                                    >
                                                        {period==0 ? "1 " +  translations[language].month : Dt[period].period + " " + translations[language].months} - {translations[language].checkout.months_all_channels}
                                                    </div>
                                                    <div
                                                        style={{
                                                            position : "absolute",
                                                            right : "10px"
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                fontWeight : 700,
                                                                fontSize : "20px"
                                                            }}
                                                        >
                                                            {parseFloat(Dt[period].Connections[devices-1].price[preferences.index].amount.toFixed(2))}
                                                            <span
                                                                style={{
                                                                    fontSize : "14px",
                                                                    fontWeight : 800,
                                                                    // display : "flex",
                                                                    // justifyContent : "right"
                                                                }}
                                                            > {Dt[period].Connections[devices-1].price[preferences.index].symbol}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </EmailForm0>
                                </div>
                            :null}
                        </div>
                        {/* {!isMobileView ?
                            <div
                                style={{
                                    // height : "200px",
                                    width : "270px",
                                    // border : "1px solid",
                                    background : "#fff",
                                    color : "#000",
                                    padding: "0px 26px",
                                    borderRadius: "10px",
                                    height : "100%"
                                }}
                            >
                                <h3>
                                    Your Plan Includes
                                </h3>
                                <ul
                                    className='features_list'
                                ><li>Access to over 9000 TV Channels</li><li>Thousands of Movies &amp; Series</li><li>Easy Setup on All your Devices</li><li>Instant Delivery</li><li>Free Customer Support</li><li>Money-Back Guarantee</li></ul>
                            </div>
                        :null} */}
                    </div>
            </div>
            :
            <div
                style={{
                    position : "fixed",
                    width : "100%",
                    height : "100%",
                    // background : "blue"
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                    background : "#f4f4f4",
                }}
            >
                <div className="lds-dual-ring"></div>
            </div>
            }
            <div
              style={{
                position : "fixed",
                bottom : 0,
                width : "100%",
                padding : "36px 21px",
                left: "0",
              }}
            >
              <div
                style={{
                  position : "relative",
                  width : "100%",
                  height : "100%",
                  gap: "7px"
                }}
              >
                <CurrencySwitcher
                  left = "0"
                  menu = "left flex"
                />
              </div>
            </div>
        </div>
    )
}
Checkout.getInitialProps = async (ctx) => {
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
    export default Checkout