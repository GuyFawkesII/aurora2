import React , {useState, useEffect, useRef, useLayoutEffect , createRef} from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Link from 'next/link'
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import {TbGridDots} from 'react-icons/tb'
import {useWindowScrollPosition,useWindowSize} from 'rooks'
import { useRouter } from 'next/router';
// import { useWindowSize } from "rooks";
import { translations } from '../data/translation';


const language = process.env.NEXT_PUBLIC_LANGUAGE

const Navbar = (props) => {

  const {
    scrolled,
    isMobileView
  }=props
  const router = useRouter()
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  })
  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  })
  const [openChat,setOpenChat]=useState(false)
  const [chatLoading,setChatLoading] = useState(false)
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(()=>{
    if (typeof $crisp !=='undefined'){
      setChatLoading(false)
    }
    else {
      setChatLoading(true)
    }
    if (openChat==true){
      $crisp.push(['do', 'chat:open']);
      setOpenChat(false)
    }
  },[openChat])
  const position = useWindowScrollPosition()
  useEffect(()=>{
    console.log("position",position)
  },[position])
  const [tuto,setTuto]=useState(false)
  const windowSize = useWindowSize()
  return (
    <header>
      {/* <FontProvider /> */}
      <NavBar
        style={barAnimation}
      >
          <div
            style={{
              position : "fixed",
              width : "100%",
              top : "0",
              height : "57px",
              background : position.scrollY>36 ? "#fff":"transparent",
              // background : "#fff",
              boxShadow : position.scrollY>36 ? "#d2d2d2 1px 1px 6px" : undefined
            }}
          >
          </div>
          <FlexContainer>
            <Brand
              backgroundTransparacy={0}
              copy = {false}
            />
            <NavLinks style={linkAnimation}>
              <Link href="/">{translations[language].home}</Link>
              {/* <Link href="/plans">Pricing</Link> */}
              <Link href="/reselling">{translations[language].reselling}</Link>
              <Link href="/checkout">{translations[language].pricing}</Link>
              <Link href="/channels-list">{translations[language].channels}</Link>
              <Link href="/support">{translations[language].support}</Link>
            </NavLinks>
            {windowSize.innerWidth>900 ?
              <div
                style={{
                  display : "flex",
                  position : "relative",
                  zIndex : 1000,
                  alignItems : "center",
                  gap : "15px"
                }}
              >
                <OrderButton
                  onClick={()=>router.push('/checkout')}
                >
                  {translations[language].order_now}
                </OrderButton>
                <label
                    onClick={()=>setTuto(!tuto)}
                    style={{
                      fontSize : "27px",
                      display : "flex",
                      alignItems : "center",
                      justifyContent : "center",
                      color : "#3d6ed7",
                      height : "30px",
                      width : "30px",
                      position : "relative",
                      zIndex : 10000
                    }}
                  >
                    <TbGridDots />
                  </label>
                  {tuto  ?
                    <div
                      style={{
                        position : "absolute",
                        height : "100px",
                        width : "100%",
                        background : "#e4ecfa",
                        top : "3.7rem",
                        borderRadius : "10px",
                        left : "-1rem",
                        boxShadow : "1px 1px 1px grey"
                      }}
                    >
                      <div
                        style={{
                          position : "absolute",
                          right : 0,
                          top : "-20px"
                        }}
                      >
                        <svg
                          style={{
                            height : "27px"
                          }}
                          className="svg-intro-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon fill="#e4ecfa" points="0,100 100,0 100,100"></polygon>
                        </svg>
                      </div>
                      <div
                        style={{
                          width : "100%",
                          height : "100%",
                          display : "grid",
                          color : "rgb(23 57 139)",
                          fontWeight : "600",
                          padding : "0 1rem",
                          fontSize : "15px"
                        }}
                      >
                        <a
                          onClick={()=>setTuto(false)}
                          href="https://expressvpn.com/"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display : "flex",
                            alignItems: "center"
                          }}
                        >{translations[language].order_vpn}</a>
                        <a
                          onClick={()=>setTuto(false)}
                          href="https://iptvhelpcenter.com/"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display : "flex",
                            alignItems: "center"
                          }}
                        >{translations[language].tutorials}</a>
                      </div>
                    </div>
                  :null}
              </div>
            :null}
            <BurgerWrapper>
              <BurgerMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
              />
            </BurgerWrapper>
          </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
        setOpenChat={setOpenChat}
        openChat={openChat}
      />
   </header>
  )
}

Navbar.getInitialProps = async (ctx) => {
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
export default Navbar

const OrderButton = styled.button`
  background: #11c851;
  height: 30px;
  border: 0;
  display : flex;
  align-items: center;
  justify-content : center;
  padding: 0px 16px;
  & a {
    display : flex;
    align-items: center;
    justify-content : center;
    width : 100%;
    height : 100%;
    padding : 0 16px
  }
`

const NavContainer = styled.div.attrs({
  style: ({ animatePercent }) => ({
    opacity: animatePercent ? animatePercent / 100 : 1,
  }),
})`
  background : #fff;
  opacity: ${({ animatePercent }) =>
    animatePercent ? `${animatePercent / 100}` : `1`};
`

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  // background: #b4f0ff59;
  z-index: 1;
  font-size: 1.4rem;
  z-index : 102
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 10rem 0 10rem;
  justify-content: space-between;
  height: 57px;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  align-items: center;
  display: flex;
  & a {
    color: #002381;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 13px;

    -webkit-transition: all 300ms linear 0s;
    transition: all 300ms linear 0s;
    -webkit-text-decoration: none;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;
    &:hover {
      color: #002381;
      border-bottom: 1px solid #002381;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
 
const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 769px) {
    display: none;
  }
`;