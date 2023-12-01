import { useDispatch, useSelector } from "react-redux";
import { setPreferences } from "../../store/actions";
import React , {useState,useEffect} from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import { useSpring , animated } from "react-spring";
import { push } from "@socialgouv/matomo-next";

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

const CurrencySwitcher = (props) => {
    const {left,right , menu,top,show} = props
    const [isOpen,setIsOpen]=useState(false)
    const dispatch = useDispatch();
    const [pref,setPref] = useLocalStorage("currency",null)
    const prefere = useSelector((state)=>state.preferences.currency)
    const handleCurrency = (i) => {
            if (i=="USD"){
              setIsOpen(false)
              setPref(dt[0])
              dispatch(
                setPreferences(dt[0])
              );
            }
            if (i=="EUR"){
              setPref(dt[1])
              setIsOpen(false)
              dispatch(
                setPreferences(dt[1])
              );
            }
            if (i=="POUND"){
              setPref(dt[2])
              setIsOpen(false)
              dispatch(
                setPreferences(dt[2])
              )
            }
            push(['trackEvent', 'click', 'currencySwitch' , 'changed currency to ' + i ]);
    }
    useEffect(()=>{
      if (isOpen){
        push(['trackEvent', 'click', 'currencySwitch' ,  'opened currencySwitcher']);
      }
    },[isOpen])
    return (
        <>
            <div
              style={{
                alignItems: "center",
                position: "absolute",
                right: "0px",
                height: "100%",
                width : "100%",
                display : menu == "left flex" ? "flex" : "block",
                left : left,
              }}
            >
              <div
                style={{
                  position : "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <div
                    onClick={()=>setIsOpen(!isOpen)}
                    style={{
                      fontWeight: 800,
                      padding: "2px 13px",
                      // border: "2px solid rgb(143 143 198)",
                      borderRadius: "3px",
                      // background: "rgb(174 174 196)",
                      background: "rgb(88 88 186)",
                      borderRadius: "7px",
                      color : "#fff",
                      fontSize : "18px",
                      width: "45px",
                      position : "absolute",
                      right : "0",
                      left : menu == "left flex" ? "0" : "",
                      display : "flex"
                    }}
                >
                  <span
                    style={{
                      margin : "auto"
                    }}
                  >{prefere.symbol}</span>
                </div>
                {isOpen ?
                  <div
                    style={{
                      position: menu == "left flex" ? "relative" : "absolute",
                      padding: menu == "left flex" ? "0 10px" : "auto",
                      right: "0px",
                      background: "rgb(255 255 255)",
                      padding: menu =="left flex" ? "auto" : "9px",
                      zIndex: 3,
                      borderRadius: "7px",
                      top:  top ? top : (menu == "left flex" ? "auto" : "62px"),
                      border : "1px solid #024d94",
                      lineHeight: "2rem",
                      display : menu =="left flex" ? "flex" : "block",
                      left : menu == "left flex" ? "51px"  : "auto",
                      gap: "3px",
                      color: "#000",
                      padding : "3px 10px"
                    }}
                  >
                      {dt.map((obj,index)=>{
                          return(
                              <div
                                  style={{
                                    display : "flex",
                                    margin : "0 0 0 8px"
                                  }}
                                  key={index}
                                  onClick={()=>handleCurrency(obj.name)}
                              >
                                  <span
                                    style={{
                                      display: "flex",
                                      textAlign: "center",
                                    }}
                                  >{obj.symbol} {obj.name}</span>
                              </div>
                          )
                      })}
                  </div>
                :null}
              </div>
            </div>
        </>
    )
}
export default CurrencySwitcher