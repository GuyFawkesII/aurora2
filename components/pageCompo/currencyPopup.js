import { useDispatch, useSelector } from "react-redux";
import { setPreferences } from "../../store/actions";
import React , {useState,useEffect} from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import styled from 'styled-components'
import { useSpring, animated, config } from "react-spring";
// import {useSelector , useDispatch} from 'react'
let dt = [
    {
      index : 0,
      name : "USD",
      symbol : "$"
    },
    {
      index : 1,
      name : "EUR",
      symbol : "€"
    },
    {
      index : 2,
      name : "POUND",
      symbol : "£"
    },
]
const Container = styled(animated.div)`
    position: fixed;
    bottom: 0;
    height: 283px;
    background: #ffd7c1;
    font-size: 1.4rem;
    z-index: 102;
    right: 13px;
    border-radius: 12px;
    margin: auto;
    top: 0;
    border: 6px solid #c9aa99;
}
`;
const Title = styled.h1`
    position : absolute;
    transform: rotateZ(-90deg);
    font-size: 22px;
    right: -56px;
    color: white;
    width: 281px;
    margin: auto;
    background: #0000005c;
    padding: 2px 9px 8px 9px;
    border-radius: 9px;
    justify-content: center;
    display: flex;
}
`;
const Cu = styled.div`
    font-size : 10px;
    color : #000;
    display : grid;
    justify-content : center;
    align-items : center;
    background : ${props => props.active ? "white" : "transparent"};
    padding : 5px;
    text-align: center;
    & strong {
        font-size: 29px;
    }
`
const CurrencyPopup = (props) => {
    const {closeModal} = props
    // console.log("hello")
    const [isOpen,setIsOpen]=useState(false)
    const dispatch = useDispatch();
    const [pref,setPref] = useLocalStorage("currency",null)
    const prefere = useSelector((state)=>state.preferences.currency)
    // console.log(prefere)
    const handleCurrency = (i) => {
            if (i=="USD"){
              setIsOpen(false)
              setPref(dt[0])
              dispatch(
                setPreferences(dt[0])
              );
              setTimeout(()=>{
                closeModal()
              },[1000])
            }
            if (i=="EUR"){
              setPref(dt[1])
              setIsOpen(false)
              dispatch(
                setPreferences(dt[1])
              );
              setTimeout(()=>{
                closeModal()
              },[1000])
            }
            if (i=="POUND"){
              setPref(dt[2])
              setIsOpen(false)
              dispatch(
                setPreferences(dt[2])
              )
              setTimeout(()=>{
                closeModal()
              },[1000])
            }
    }
    const linkAnimation = useSpring({
        from: { transform: 'translate3d(300px, 0, 0)', opacity: 1 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
      })
    return (
        <Container
            style={linkAnimation}
            // onClick={closeModal}
        >
            <div
                style={{
                    position : "relative",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex"
                }}
            >
                <Title>Choose a Currency</Title>
                <div
                    style={{
                        display : "block"
                    }}
                >
                    {
                        dt.map((obj,index)=>{
                            return (
                                <Cu
                                    key={index}
                                    onClick={()=>{handleCurrency(obj.name)}}
                                    active={obj.name == prefere.name}
                                >
                                    <strong>{obj.symbol}</strong>
                                    <span>{obj.name}</span>
                                </Cu>
                            )
                        })
                    }
                </div>
            </div>
            <div
                style={{
                    fontSize : "16px",
                    fontWeight : 800,
                    border : "5px solid rgb(202 183 183)",
                    color : "#fff",
                    display : "flex",
                    alignItems : "center",
                    justifyContent : "center",
                    textAlign : "center",
                    borderRadius : "6px",
                    marginTop : "11px",
                    background : "#ff0000b0",
                    display : "flex",
                    justifyContent : "center"
                }}
                onClick={closeModal}
            >
                    X
                </div>
        </Container>
    )
}
export default CurrencyPopup
