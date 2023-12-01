import { useEffect, useState } from "react";
import Link from 'next/link'

const Header = () => {
    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
    const [backgroundTransparacy1, setBackgroundTransparacy1] = useState(0);
    const [padding, setPadding] = useState(0);
    const [boxShadow, setBoxShadow] = useState(0);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });
  
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };
  
    useEffect(() => {
      let backgroundTransparacyVar = clientWindowHeight / 1600;
  
      if (backgroundTransparacyVar < 1) {
        let paddingVar = 30 - backgroundTransparacyVar * 20;
        let boxShadowVar = backgroundTransparacyVar * 0.1;
        setBackgroundTransparacy(backgroundTransparacyVar);
        setBackgroundTransparacy1(1-backgroundTransparacyVar)
        setPadding(paddingVar);
        setBoxShadow(boxShadowVar);
      }
    }, [clientWindowHeight]);
    return (
        <>
            <div
                className="nav"
                style={{
                    background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
                    // padding: `${padding}px 0px`,
                    boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
                  }}
            >
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="Lcontainer">
                        <div
                            className="nav-title"
                            style={{
                                color: `rgba(20, 169, 219, ${backgroundTransparacy})`,
                                filter: "brightness(85%)"
                            }}
                        >
                            AuroraTV
                        </div>
                        <div
                            className="nav-title"
                            style={{
                                color: `rgba(255, 255, 255, ${backgroundTransparacy1})`,
                                filter: "brightness(85%)"
                            }}
                        >
                            AuroraTV
                        </div>
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                <div
                    className="nav-links"
                    style={{
                        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
                    }}
                >
                    {/* <ActiveLink
                        href="/plans"
                    >Plans</ActiveLink> */}
                    <Link href="/plans">Stackoverflow</Link>
                    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
                    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
                    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
                </div>
            </div>
    </>
)}
export default Header