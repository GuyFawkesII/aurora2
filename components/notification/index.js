import { useEffect,useState } from 'react';


import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../store/actions";
import styled from 'styled-components';

const AnimatedContainer = styled.div`
  transition: transform 0.3s ease-in-out;
  transform: translateY(${props => props.translateX}px);
  position : fixed;
  z-index : 200;
  top : 20px;
  width : 100%
`;
const Notification = (props) => {
    const {
        // notification,
        // setNotification
    }=props
    // console.log("Helllo world")
    const [visible, setVisible] = useState(true);
    const notification = useSelector((state)=>state.notification.data)
    console.log(notification)
    const dispatch = useDispatch();
    // // const prefere = useSelector((state)=>state.preferences.currency)
    // useEffect(() => {
    //   // Hide the div after 4 seconds
    //   const timer = setTimeout(() => {
    //     setVisible(false);
    //     // setTimeout(() => {
    //     //     setNotification({
    //     //         active : false
    //     //     })
    //     // }, 1500);
    //   }, 3000);
    //   // Clean up the timer when component unmounts
    //   return () => clearTimeout(timer);
    // }, [visible]);
    // useEffect(()=>{
    //     if (!visible){
    //         const timer = setTimeout(() => {
    //             dispatch(
    //                 setNotification({
    //                     active : false
    //                 })
    //               );
    //               setVisible(false)
    //           }, 2000);
    //           // Clean up the timer when component unmounts
    //           return () => clearTimeout(timer);
    //     }
    //   },[visible])
      useEffect(()=>{
        // console.log(notification)
        if (notification.active){
            setVisible(true)
        }
      },[notification])





    const [translateX, setTranslateX] = useState(-100);

    //   const [isAnimating, setIsAnimating] = useState(false);

      useEffect(() => {
        let animationTimeout;
    
        if (visible) {
          setTranslateX(0); // Start the animation by setting translateX to 0
    
          // After 5 seconds, reset the animation by setting translateX to -100
          animationTimeout = setTimeout(() => {
            setTranslateX(-100);
            dispatch(
                setNotification({
                    active : false
                })
              );
            setVisible(false)
          }, 3000);
        } else {
          setTranslateX(-100); // When isAnimating is false, set translateX to -100
          clearTimeout(animationTimeout); // Clear the timeout if animation is interrupted
        }
        return () => {
          clearTimeout(animationTimeout); // Clean up the timeout on component unmount
        };
      }, [visible]);
    
    //   const setAnimation = () => {
    //     setIsAnimating(true);
    //   };
    return (
        <AnimatedContainer 
            translateX={translateX}
            // style={{
            //     position : "fixed",
            //     top : "10px",
            //     width : "100%",
            //     zIndex : 200,
            //     height: notification.active? undefined : 0
            // }}
        >
            {/* {notification.active ? */}
                <div
                    style={{
                        position : "relative",
                        width : "100%",
                        // height: notification.active? undefined : 0
                    }}
                >
                    <div
                        style={{
                            margin : "auto",
                            background : notification.type,
                            maxWidth : "347px",
                            // minHeight : "100px",
                            padding : "10px 15px",
                            borderRadius : "5px",
                            boxShadow : "1px 1px 1px solid #000",
                            // border: "1px solid #000",
                            display : "flex",
                            alignItems : "center",
                            justifyContent : "center",
                            color : notification.type=="yellow" ? "black" : "white",
                            // opacity: visible ? 1 : 0, // Set opacity to 1 if visible, otherwise 0
                            // transition: 'opacity 500s ease-in',
                            fontSize : "14px",
                            // padding : 
                        }}
                    >
                        <span
                            style={{
                                textAlign : "center",
                                lineHeight  : "30px"
                            }}
                        >
                            {notification.message}
                        </span>
                    </div>
                </div>
            {/* :null} */}
        </AnimatedContainer>
    )
}
export default Notification