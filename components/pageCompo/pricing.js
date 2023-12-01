import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from 'next/dynamic'
import React , {useState,useEffect,useRef} from 'react'
import { Suspense } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/actions";
import {Dt} from '../../data/plans'

const Plan = dynamic(() => import('./plan'), {
    ssr: false,
})
const Cart = dynamic(() => import('./cart'), {
    ssr: false,
})

const Plans = (props) =>{
    const {isMobileView} = props
    // console.log(isMobileView)
    const openModal = (index) => {
        setModalVisible(true)
        setPaymentModal(index)
    }
    const [selectedPlan,setSelectedPlan]=useState(null)
    const handleSelectedPlan = (obj) => {
        setSelectedPlan(obj)
    }
    const dispatch = useDispatch()
    const plan = useSelector((state) => state.cart.data.plan);
    const handleActivePeriod = (p) => {
        dispatch(
            setCart({
                plan : {
                    ...plan,
                    period : p
        }}))
    }
    const [change,setchange]=useState(false)
    return (
        <>
                    <div
                        style={{
                            display: isMobileView ? "block" : "grid",
                            gridTemplateColumns: "64% 34%",
                            position: "relative",
                            height: "100%",
                            width: "100%",
                            gap: "24px"
                        }}
                    >
                    <div>
                        {isMobileView ?
                            <div
                                className="tabs_container"
                            >
                                {Dt &&
                                    Dt.map((obj,index)=>{
                                        return (
                                            <>
                                                <div className="tab">
                                                    <div 
                                                        onClick={()=>{handleActivePeriod({
                                                            id : obj.id,
                                                            nb : obj.period
                                                        });setchange(true)}}
                                                        key={obj.id}
                                                    >
                                                        <p
                                                            className={plan.period.nb === obj.period ? "title active-anim" : "title"}
                                                        >
                                                            {obj.period} {obj.period==1 ?  "MONTH" : "MONTHS"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        :null}
                            {/* {!isMobileView ? */}
                                <div
                                    style={{
                                        width : "100%",
                                    }}
                                >
                                    <Plan
                                        data={Dt[plan.period.id]}
                                        preferences = {null}
                                        openModal={openModal}
                                        color ={Dt[plan.period.id].color}
                                        isMobileView={isMobileView}
                                        handleSelectedPlan={handleSelectedPlan}
                                        change={change}
                                        setchange={setchange}
                                        isActive={true}
                                    />
                                    <div>
                                    </div>
                                </div>
                    </div>
                    {!isMobileView ?
                        <div
                            className="cart_wrapper"
                        >
                            <Cart
                                plan={selectedPlan}
                                data={Dt}
                                handleActivePeriod={handleActivePeriod}
                                setchange={setchange}
                                periods = {true}
                            />
                        </div>
                    :null}
                </div>
        </>
    )
}
export default Plans