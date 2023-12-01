// import '../../styles/fonts.css'

const Notice = (props) => {
    const {
        setNotice,
        isMobileView
    }=props
    return (
        <>
        <div
            style={{
                position : "fixed",
                width : "100%",
                height : "100%",
                background : "#00000026",
                zIndex : 100000,
                top : 0
            }}
            onClick={()=>setNotice(false)}
        >
        </div>
        <div
            style={{
                position : "fixed",
                width : "100%",
                height : "100%",
                zIndex : 100001,
                top : 0,
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                fontFamily : "monospaced0"
            }}
        >
            <div
                style={{
                    width : !isMobileView ? "841px" : "100%",
                    margin : isMobileView ? "10px" : undefined,
                    background : "white",
                    borderRadius : "15px",
                    height : !isMobileView ? "380px" : "90%",
                    position : "relative",
                    padding : isMobileView ? "22px 0" : undefined
                }}
            >
                <label
                    style={{
                        position : "absolute",
                        top : "15px",
                        right : "15px",
                        borderRadius : "5px",
                        border : "1px solid #1a2293",
                        color : "#1a2293",
                        fontWeight : "800",
                        fontSize : "20px",
                        padding : "0 10px"
                    }}
                    onClick={()=>{setNotice(false)}}
                >X</label>
                <div
                    className="notice"
                    style={{
                        overflow : isMobileView ? "scroll" : undefined,
                        height : isMobileView ? "100%" : undefined
                    }}
                >
                    <p>Dear Valued Members,</p>
                    {/* <br /> */}
                    <p>
                        Our main servers are now back up and running. We kindly request that you revert to the old line. Please be aware that you may experience brief periods of downtime, as our technicians are still working to enhance stability.
                    </p>
                    {/* <br /> */}
                    <p>
                        In the meantime, continue to use this link: 
                    <span
                        style={{
                            background : "grey",
                            fontWeight : 700,
                            padding : "2px 8px",
                            marginLeft : "5px",
                            borderRadius : "2px",
                            color : "#fff"
                        }}
                    >http://line.uhd-ott.io</span> . Please maintain your existing username and password.
                    </p>
                    {/* <br /> */}
                    <p>
                    The replacement lines we provided early last month will be deactivated at the end of their respective periods.
                    </p>
                    {/* <br /> */}
                    <p>
                    Thank you for your patience and understanding.                    
                    </p>
                    <p>AuroraFast Team</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Notice