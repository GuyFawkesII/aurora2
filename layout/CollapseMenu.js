import React , {useState} from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faHeadset,
  faMessage

} from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from 'react-spring';
import dynamic from 'next/dynamic'
import { translations } from '../data/translation';

const language = process.env.NEXT_PUBLIC_LANGUAGE

const CurrencySwitcher = dynamic(() => import('../components/pageCompo/currencySwitcher'), {
  ssr: false,
})

const CollapseMenu = (props) => {
  const {openChat,setOpenChat}=props
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });
  const [itemOpen,setItemOpen] = useState(null)
  const handleOpenItem = (i) => {
    if (itemOpen==null) {
      setItemOpen(i)
    }
    else {
      setItemOpen(null)
    }
  }
  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <Li onClick={props.handleNavbar}>
              <Link href="/">{translations[language].home}</Link>
          </Li>
            {/* <Li onClick={props.handleNavbar}>
              <Link href="/plans">Pricing</Link>
          </Li> */}
          <Li onClick={props.handleNavbar}>
              <Link href="/reselling">{translations[language].reselling}</Link>
          </Li>
          <Li onClick={props.handleNavbar}>
              <Link href="/checkout">{translations[language].pricing}</Link>
          </Li>
          <Li onClick={props.handleNavbar}>
              <Link href="/channels-list">{translations[language].channels}</Link>
          </Li>
          <Li
            onClick={()=>{handleOpenItem('support')}}
          >
            <div
              style={{
                display : "flex",
                position : "relative"
              }}
            >
              <span>{translations[language].support}</span>
              <div
                style={{
                  position : "absolute",
                  right : 0,
                  height: "100%",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                {itemOpen == 'support' && itemOpen !="tools" ?
                                <FontAwesomeIcon
                                    icon={faChevronUp}
                                        style={{ 
                                            fontSize: 16,
                                            color: "rgb(168 168 168)",
                                            float : "right"
                                        }}
                                />
                                :
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                        style={{ 
                                            fontSize: 16,
                                            color: "rgb(168 168 168)",
                                            float : "right"
                                        }}
                                />
                }
              </div>
            </div>
          </Li>
          {itemOpen=="support" ?
              <div
                onClick={props.handleNavbar}
                style={{
                  border: "4px solid rgb(246 246 246)",
                  margin: "-8px 0px 7px 0px",
                  padding: "9px 7px 0px 7px"
                }}
              >
                  <Linkit
                    onClick={()=>{handleOpenItem(null);props.handleNavbar}}
                  >
                      <FontAwesomeIcon
                        icon={faHeadset}
                        style={{ 
                          fontSize: 27,
                          color: "blue",
                          marginRight : 11
                        }}
                      />
                    <a
                      onClick={()=>{setOpenChat(true)}}
                      >
                    {translations[language].contact_us}</a>
                  </Linkit>
                  <Linkit
                    onClick={()=>{handleOpenItem(null);props.handleNavbar}}
                    >
                      <FontAwesomeIcon
                        icon={faMessage}
                        style={{ 
                          fontSize: 27,
                          color: "blue",  
                          marginRight : 11
                        }}
                      />
                    <Link href="/support">{translations[language].faq}</Link>
                  </Linkit>
                  {/* <Linkit>
                      <a
                          // onClick={()=>setTuto(false)}
                          href="https://expressvpn.com/"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display : "flex",
                            alignItems: "center"
                          }}
                        >ORDER VPN</a>
                  </Linkit> */}
              </div>
            :null}



          <div
            style={{
              width : "100%",
              margin : "1rem 0",
              borderBottom : "1px solid #e6e6e6"
            }}
          >

          </div>
          <Li 
            onClick={()=>{handleOpenItem('tools')}}
          >
            <div
              style={{
                display : "flex",
                position : "relative"
              }}
            >
              <span>{translations[language].iptv_tools}</span>
              <div
                style={{
                  position : "absolute",
                  right : 0,
                  height: "100%",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                {itemOpen == 'tools' && itemOpen !="support" ?
                                <FontAwesomeIcon
                                    icon={faChevronUp}
                                        style={{ 
                                            fontSize: 16,
                                            color: "rgb(168 168 168)",
                                            float : "right"
                                        }}
                                />
                                :
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                        style={{ 
                                            fontSize: 16,
                                            color: "rgb(168 168 168)",
                                            float : "right"
                                        }}
                                />
                }
              </div>
            </div>
          </Li>
          {itemOpen=="tools" ?
              <div
                onClick={props.handleNavbar}
                style={{
                  border: "4px solid rgb(246 246 246)",
                  margin: "-8px 0px 7px 0px",
                  padding: "9px 7px 0px 7px"
                }}
              >
                  <Linkit
                    onClick={()=>{handleOpenItem(null);props.handleNavbar}}
                  >
                      {/* <FontAwesomeIcon
                        icon={faHeadset}
                        style={{ 
                          fontSize: 27,
                          color: "blue",
                          marginRight : 11
                        }}
                      /> */}
                    <a
                          href="https://expressvpn.com/"
                          target="_blank"
                          rel="noreferrer"
                      // onClick={()=>{setOpenChat(true)}}
                    >{translations[language].order_vpn}</a>
                  </Linkit>
                  <Linkit
                    onClick={()=>{handleOpenItem(null);props.handleNavbar}}
                    >
                      {/* <FontAwesomeIcon
                        icon={faMessage}
                        style={{ 
                          fontSize: 27,
                          color: "blue",  
                          marginRight : 11
                        }}
                      /> */}
                    <a 
                          href="https://iptvhelpcenter.com/"
                          target="_blank"
                          rel="noreferrer"
                    // href="/support"
                    >{translations[language].tutorials}</a>
                  </Linkit>
                  {/* <Linkit>
                      <a
                          // onClick={()=>setTuto(false)}
                          href="https://expressvpn.com/"
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display : "flex",
                            alignItems: "center"
                          }}
                        >ORDER VPN</a>
                  </Linkit> */}
              </div>
            :null}

            <div
              style={{
                position : "absolute",
                bottom : 0,
                width : "100%",
                padding : "36px 21px",
                left: "0",
              }}
            >
              {/* <div
                style={{
                  position : "relative",
                  width : "100%",
                  height : "100%",
                  gap: "7px"
                }}
              >
              </div> */}
            </div>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const LinkOt = styled.li`
    background: transparent;
    border-bottom : 0px solid #c7c7c7 !important;
    padding: 0.5rem 1.5rem;
    margin-bottom: 7px;
    display : flex;
    align-items : center;
    & a {
      font-size: 1rem !important;
      line-height: 2;
      color: #000;
      text-transform: uppercase;
      -webkit-text-decoration: none;
      text-decoration: none;
      cursor: pointer;
      display: block;
      width: auto;
      font-weight: 700;
    }
    & span {
      font-size: 1.4rem;
      line-height: 2;
      color: #000;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      display : block;
      width : auto;
    }
`; 

const Linkit = styled.li`
    background: transparent;
    border-bottom : 0px solid #c7c7c7 !important;
    padding: 0.5rem 1.5rem;
    margin-bottom: 7px;
    display : flex;
    align-items : center;
    & a {
      font-size: 1rem !important;
      line-height: 2;
      color: #000;
      text-transform: uppercase;
      -webkit-text-decoration: none;
      text-decoration: none;
      cursor: pointer;
      display: block;
      width: auto;
      font-weight: 700;
    }
    & span {
      font-size: 1.4rem;
      line-height: 2;
      color: #000;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      display : block;
      width : auto;
    }
`;
const CollapseWrapper = styled(animated.div)`
    background: #fff;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 101;
    height: 100vh;
`;
const Li = styled.li`
    background: #f6f6f6;
    padding: 0.5rem 1.5rem;
    margin-bottom: 7px;
    & span {
      font-size: 1.4rem;
      line-height: 2;
      color: #000;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      display : block;
      width : auto;
    }
`;
const NavLinks = styled.ul`
  list-style-type: none;
  padding: 3rem 1rem 2rem 1rem;
  
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #000;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    display : block;
    width : auto;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;