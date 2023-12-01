import React, {useEffect,useState} from 'react'
const Modal = (props) => {
    const {children,closeModal} = props
    // useEffect(()=>{
    //     document.body.style.position = 'fixed';
    //     document.body.style.top = `-${window.scrollY}px`;
    // },[])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },[2000])
    },[isLoading])
    return (
        <div
            style={{
                position: "fixed",
                zIndex: 10000000,
                background: "rgb(175 175 175 / 19%)",
                top: 0,
                width: "100%",
                height: "100vh",
                right: 0,
                overflow: "hidden",
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
                display : "flex",
                overflowY: "hidden",
                backdropFilter:"blur(2px)"
            }}
        >
            <div
                style={{
                    position : "absolute",
                    top : "10px",
                    right : "10px",
                    height : "30px",
                    width : "100px",
                    justifyContent:"center",
                    alignItems : "center",
                    display : "flex",
                    borderRadius : "10px",
                    background : "red",
                    backdropFilter: "blur(12px)",
                    padding: "18px",
                    fontSize: "18px",
                    fontWeight: 800,
                    border: "1px solid #fff",
                    zIndex : 3
                }}
                onClick={()=>closeModal()}
            >
                <span>
                    Close
                </span>
            </div>
            <div
                style={{
                    // position : "relative",
                    width : "100%",
                }}
            >
                {isLoading ?
                <div
                    style={{
                        position : "absolute",
                        width  : "100%",
                        height : "100%",
                        alignItems : "center",
                        justifyContent : "center",
                        display : "flex",
                        top : 0
                    }}>
                        <div className="lds-ripple"><div></div><div></div></div>
                    </div>
                    :null}
            {children}
        </div>
        </div>
    )
}
export default Modal