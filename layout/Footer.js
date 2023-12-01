import Brand from '../layout/Brand'
import Link from 'next/link'
import {contact} from '../data/support'
import { translations } from '../data/translation'


const lan = process.env.NEXT_PUBLIC_LANGUAGE

const Footer = (props) => {
    const {
        isMobileView,
        position,
        langue,
        background
    } = props
    const language = langue || lan
    // console.log(isMobileView)
    return (
        <footer
            style={{
                position : position ? position : undefined,
                background : background ? "#f5f7ff" : undefined
            }}
            className="footer">
            <div
                className='container-fluid'
            >
                <div
                    className='footer-content'
                >
                    <div
                        className='footer-info'
                    >
                        <div
                            style={{
                                marginTop : "25px",
                            }}
                        >
                            <Brand
                                copy = {true}
                                center = {isMobileView ? true : false}
                            />
                        </div>
                        <div
                            className="copy"
                            style={{
                                width : "100%",
                                textAlign : "center"
                            }}
                        >{translations[language].copyright}</div>
                    </div>
                    {isMobileView ?
                        <div
                            className='nav-block'
                            style={{
                                margin: "0 2rem 1rem 2rem",
                                fontSize: "14px",
                                borderBottom: "1px solid #d8d8d8",
                                width: "calc(100% - 4rem )",
                                textAlign : "center"
                            }}
                        >
                            <div
                                className='nav-item'
                                style={{
                                    // display : isMobileView ? "none" : "block"
                                }}
                            >
                                <strong>{translations[language].contact}</strong>
                            </div>
                            <div
                                className="nav-item"
                            >
                                <a>E-mail : {contact.email}</a>
                            </div>
                            <div
                                className="nav-item"
                            >
                                <a>{translations[language].address} : {contact.address}</a>
                            </div>
                        </div>
                    : null}
                    <div
                        className='footer-nav'
                    >
                        <div
                            className='nav-block'
                            style={{
                                display : isMobileView ? "none" : "block"
                            }}
                        >
                            <div
                                className='nav-item'
                                style={{
                                    // display : isMobileView ? "none" : "block"
                                }}
                            >
                                <strong>{translations[language].contact}</strong>
                            </div>
                            <div
                                className="nav-item"
                            >
                                <a>E-mail : {contact.email}</a>
                            </div>
                            <div
                                className="nav-item"
                            >
                                <a>{translations[language].address} : {contact.address}</a>
                            </div>
                        </div>
                        <div
                            className='nav-block'
                            style={{
                                display : isMobileView ? "none" : "block"
                            }}
                        >
                            <div
                                className='nav-item'
                                style={{
                                    display : isMobileView ? "none" : "block"
                                }}
                            >
                                <strong>{translations[language].links}</strong>
                            </div>
                            <div
                                className="nav-item"
                            >
                                <Link href="/checkout">{translations[language].pricing_plans}</Link>
                            </div>
                            <div
                                className="nav-item"
                            >
                                <Link href="/reselling">{translations[language].reseller}</Link>
                            </div>
                            <div
                                className="nav-item"
                            >
                                <Link href="/about-us">{translations[language].about_us}</Link>
                            </div>
                        </div>
                        <div
                            className='nav-block'
                            style={{
                                fontWeight : isMobileView ? 700 : 500,
                            }}
                        >
                            <div
                                className='nav-item'
                                style={{
                                    display : isMobileView ? "none" : "block"
                                }}
                            >
                                <strong>{translations[language].legal}</strong>
                            </div>
                            <div
                                className="nav-item"
                            >
                                <Link href="/terms-of-service">{translations[language].terms_of_service}</Link>
                            </div>
                            <div
                                className="nav-item"
                            >
                                <Link href="/privacy-policy">{translations[language].privacy_policy}</Link>
                            </div>
                            <div
                                className="nav-item"
                            >
                                <Link href="/copyrights">{translations[language].copyrights}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer