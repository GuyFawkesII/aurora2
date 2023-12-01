import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const QandAs = (props) => {
    const {data,isOpen,setIsOpen,index,isMobileView,params} = props
    const [open,setOpen] = useState(false)
    const handleOpenClose = (index) =>{
        if (index==isOpen){
            setIsOpen(null)
        }
        else {
            setIsOpen(index)
        }
    }
    // const params = {
    //     free_trial_enabled : true
    // }
    // const 
    return (
        <>
            <div
                className="qa_container"
                style={{
                    borderRadius : "10px",
                    borderBottomLeftRadius : isOpen ? "0px" : undefined,
                    borderBottomRightRadius : isOpen ? '0px' : undefined
                    // position : "absolute"
                }}
                onClick={()=>{handleOpenClose(index)}}
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
            </div>
            {isOpen == index ?
                    <div
                        className="answer_container"
                        style={{
                            width  : "100%",
                            textAlign : "left",
                            color : "#525252",
                            padding : "10px 0",
                            position : "relative",
                            borderBottomLeftRadius : "10px",
                            borderBottomRightRadius : "10px",
                            background : "#f4f4f4",
                            marginBottom : "10px",
                            marginTop : "-10px",
                            padding : "0 10px 10px",
                            lineHeight : "25px"
                        }}
                    >
                        {/* {data.answer.map((obj,index)=>{
                            return (
                                <>
                                    {obj.type=='text' ?
                                        <span
                                            key={index}
                                        >{obj.content}</span>
                                    :null}
                                    {obj.type=="link" ?
                                        <span
                                            href={obj.url}
                                            key={index}
                                            style={{
                                                color : "blue",
                                                textDecoration : "underline"
                                            }}
                                        >
                                            <Link
                                                href={obj.content.url}
                                            >{obj.content.text}</Link>
                                        </span>
                                    :null}
                                </>
                            )
                        })} */}
                        {typeof data.answer === 'function' ? (
                            data.answer({ params }).map((obj, index) => (
                                <span key={index}>
                                    {obj.type=='text' ?
                                        <span
                                            key={index}
                                        >{obj.content}</span>
                                    :null}
                                    {obj.type=="link" ?
                                        <span
                                            href={obj.url}
                                            key={index}
                                            style={{
                                                color : "blue",
                                                textDecoration : "underline"
                                            }}
                                        >
                                            <Link
                                                href={obj.content.url}
                                            >{obj.content.text}</Link>
                                        </span>
                                    :null}
                                </span>
                            ))
                        ) : 
                        <>
                            {data.answer.map((obj,index)=>{
                                return (
                                    <>
                                        {obj.type=='text' ?
                                            <span
                                                key={index}
                                            >{obj.content}</span>
                                        :null}
                                        {obj.type=="link" ?
                                            <span
                                                href={obj.url}
                                                key={index}
                                                style={{
                                                    color : "blue",
                                                    textDecoration : "underline"
                                                }}
                                            >
                                                <Link
                                                    href={obj.content.url}
                                                >{obj.content.text}</Link>
                                            </span>
                                        :null}
                                    </>
                                )
                            })}
                        </>
                        }
                    </div>
                :null}
        </>
    )
}
// export default 

QandAs.getInitialProps = async (ctx) => {
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
  export default QandAs