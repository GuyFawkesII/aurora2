import { useRouter } from "next/router"
import styles from '../../styles/Home.module.css'
import {BsShieldFillCheck} from 'react-icons/bs'
import { translations } from "../data/translation"
const language = process.env.NEXT_PUBLIC_LANGUAGE


const JoinUs = (props) => {
    const {
        text
    }=props
    const router = useRouter()
    const handleJoiUs = () => {
        router.push('/checkout')
    }
    return (
                                        <div
                                        style={{
                                            display : "grid",
                                            gap : "0",
                                            width : "100%"
                                        }}
                                    >
                                        {/* <button
                                            className={styles.button_contact}
                                            onClick={()=>{setOpenChat(true)}}
                                        >
                                            Contact Us
                                        </button> */}
                                            <button
                                                id="join_us"
                                                className={styles.button_contact}
                                                style={{
                                                width : "100%",
                                                background : "#00c200",
                                                padding : text ? "1rem 0" : undefined,
                                                display : "flex",
                                                alignItems : "center",
                                                justifyContent : "center",
                                                color : "white"
                                                }}
                                                onClick={()=>handleJoiUs()}
                                            >
                                                {!text ?
                                                    <span>
                                                            {translations[language].join_us_now}
                                                        <p>{translations[language].instant_access}</p>
                                                    </span>
                                                    :
                                                    <span
                                                        style={{
                                                        }}
                                                    >{text}</span>
                                                }
                                        </button>
                                        <div
                                            style={{
                                                display : "flex",
                                                justifyContent : "center",
                                                alignItems : "center",
                                                gap : "5px",
                                                marginTop : "5px"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    color : "#8c8c8c",
                                                    display : "flex",
                                                    alignItems : "center",
                                                    fontSize : "12px",
                                                }}
                                            >
                                                <BsShieldFillCheck />
                                            </div>
                                            <p
                                                style={{
                                                    margin :0,
                                                    fontSize : "12px",
                                                    color : "darkgrey",
                                                    display : "flex",
                                                    alignItems : "center"
                                                }}
                                            >
                                                {translations[language].money_back}
                                                {/* 30-Days Money-Back Guarantee */}
                                            </p>
                                        </div>
                                    </div>
    )
}
export default JoinUs