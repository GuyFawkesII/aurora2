"use client";
import { useSelector } from "react-redux"

const LoadingChannels = () => {
    const state= useSelector(state=>state.channel.filter.state)
    return (
        <>
            {state=='loading' ?
                <div
                    style={{
                        padding : "10px",
                        background : "white",
                        
                    }}
                >
                <div className="skeleton-wrapper">
                    {[1, 2, 3, 4, 5,6,7,8,9,10].map((item) => (
                    <div key={item} className="skeleton-item">
                        {/* <div className="skeleton-header"></div> */}
                        <div className="skeleton-content"></div>
                        {/* <div className="skeleton-footer"></div> */}
                    </div>
                    ))}
                </div>
                </div>
            :null}
        </>
    )
}
export default LoadingChannels