import React , {useState,useEffect} from 'react'
import axios from 'axios'


const Admin = () =>{
    const [Dt,setData]=useState([])
    const getPlans = async () => {
        const plans = await axios.post('http://localhost:8050/getPlans',null)
        // console.log(plans)
        // let pl = JSON.parse(plans.data)
        // console.log(pl)
        console.log(plans.data)
        setData(plans.data)
    }
    useEffect(()=>{
        getPlans()
    },[])
    return (
        <div
            style={{
                position : "absolute",
                top : "0",
                zIndex : 2001,
                width : "100%",
                height : "100%",
                background : "#fff"
            }}
        >
            <div
                style={{
                    position : "relative",
                    width : "calc(100% - 20px)",
                    height : "calc(100% - 20px)",
                    margin : "10px",
                    border : "1px solid #000"
                }}
            >
                <div
                    style={{
                        margin : "10px",
                        display : "grid",
                        // border : "1px solid #000",
                        gridTemplateColumns : "10% 10% 10% 10% 20% 20% 20%"
                    }}
                >
                    <div
                        style={{
                            border : "1px solid #000",
                            height : "20px"
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
export default Admin