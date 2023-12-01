import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

const QandA = (props) => {
    const {data,isOpen,setIsOpen,index,isMobileView} = props
    const [open,setOpen] = useState(false)
    const handleOpenClose = (index) =>{
        if (index==isOpen){
            setIsOpen(null)
        }
        else {
            setIsOpen(index)
        }
    }
    return (
        <>
            <div
                className="qa_container"
                onClick={()=>{handleOpenClose(index)}}
                style={{
                    borderRadius : "10px"
                }}
            >
                <div
                    style={{
                        position : "relative",
                        display : "flex",
                        gap : "10px",
                        justifyContent : "space-between"
                    }}
                >
                    <strong
                        style={{
                            fontWeight : isMobileView ? 600 : undefined
                        }}
                    >
                        {data.question}
                    </strong>
                    <div
                        style={{
                            // position: "absolute",
                            width: "20px",
                            height: "20px",
                            right: 0
                        }}
                    >
                        {isOpen == index ?
                            <FontAwesomeIcon
                                icon={faChevronUp}
                                    style={{ 
                                        fontSize: 10,
                                        color: "#5b5b5b",
                                    }}
                            />
                            :
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                    style={{ 
                                        fontSize: 10,
                                        color: "#5b5b5b",
                                    }}
                            />
                        }
                    </div>
                </div>
                {isOpen == index ?
                    <div
                        className="answer_container"
                    >
                        <p>
                            {data.answer}
                        </p>
                    </div>
                :null}
            </div>
        </>
    )
}
// export default 

QandA.getInitialProps = async (ctx) => {
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
  export default QandA