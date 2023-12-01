import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import React , {useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../store/actions";
import { useLocalstorageState } from 'rooks';
import { BiCheckShield } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { translations } from '../../data/translation';

const language = process.env.NEXT_PUBLIC_LANGUAGE

const EmailForm0 = (props) => {
  const {
    state,
    setStatem,
    children,
    url
  }=props
  const [gotTrial,setGotTrial]=useLocalstorageState('gotTrial',{
    gotTrial : false,
    startData : null,
    endData : null
  })
  const router = useRouter()
  const [submitToDb,setSubmitToDb]=useLocalstorageState('tob',true)
  const [userEmail,setUserEmail]=useLocalstorageState('userEmail',[])
  const dispatch  = useDispatch()
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(translations[language].invalid_email)
      .required(translations[language].email_required),
  });
  useEffect(()=>{
    console.log(submitToDb)
  },[submitToDb])
  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    setUserEmail([
      values.email,
      ...userEmail,
    ])
    console.log("yoo")
    window.open(url, '_blank');
    router.push(url);
    console.log("hello world")
    event.preventDefault();
    // router.post('/')
    // setState('loading')
    // if (submitToDb==true){
    //   try {
    //     // Send data to the API using Axios
    //     await axios.post('https://br.aurorafast.co.uk/create_contact', values);
    //     setTimeout(() => {
    //       setState('loaded')
    //     }, 1000);
    //     dispatch(
    //       setNotification({
    //         active : true,
    //         message : "Email submitted successfully",
    //         type : 'green'
    //       })
    //     )
    //     // Reset the form after successful submission
    //     resetForm();
    //     console.log('Form submitted successfully!');
    //   } catch (error) {
    //     console.log("error", error)
    //     dispatch(
    //       setNotification({
    //         active : true,
    //         message : "Email already exist, please choose another email",
    //         type : 'red'
    //       })
    //     )
    //     setState('idle')
    //     console.error('Error submitting form:', error);
    //   } 
    // }
    // else {
    //   setUserEmail([
    //     values.email,
    //     ...userEmail,
    //   ])
    //   setTimeout(() => {
    //     dispatch(
    //       setNotification({
    //         active : true,
    //         message : "Your email has been submitted successfully",
    //         type : 'green'
    //       })
    //     )
    //     setState('loaded')
    //   }, 1000);
    // }
  }

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div
            style={{
                // display : "grid",
                width : "100%",
                height : "100%",
                position : "relative"
                // gap : "10px"
            }}
            className="field_1"
        >
          {/* <label
            style={{
                color : "#000"
            }}
             htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" placeholder="Enter your email" />
          <div
            style={{
                color : "red",
                textAlign : "left"
            }}
          >
              <ErrorMessage name="email" component="div" />
          </div> */}
          {children}
          <div
            style={{
                // position : "absolute",
                bottom : "0",
                width : "100%"
            }}
          >
          <button
            className={state=='loading' ? 'btn' : 'btn button_green'}
            style={{
                width: "100%",
                height : "40px",
                marginBottom : "10px",
                background : state=='loading' ? "#00b40c" : undefined ,
                padding : state=='loading' ? "0px 40px" : undefined,
                // border: "4px solid rgb(0 122 0)",
                // color: "rgb(255, 255, 255)",
                // background: "#39ca39",
                // padding: "2px 6px 5px",
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                // fontSize: "19px",
                // fontWeight: 800,
                // borderRadius: "5px",
                // maxWidth: "500px"
            }}
            type="button"
            >
              {/* {state=='loading' ?
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                :
                <span>
                  Checkout
                </span>
              } */}
              <a
                style={{
                    width : "100%",
                    height : "100%",
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center"
                }}
                href={url} target="_blank" rel="noopener noreferrer"
              >{translations[language].checkout.checkout}</a>
              </button>
                                    <div
                                            style={{
                                                margin : "auto",
                                                color : "#000",
                                                display  :"flex",
                                                alignItems : "center",
                                                justifyContent : "center",
                                                fontSize : "11px",
                                                color : "grey",
                                                gap : "5px"
                                                // marginTop : "20px"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize : "19px",
                                                    color : "green",
                                                    display : "flex",
                                                    alignItems : "center",
                                                    // gap : "5px"
                                                }}
                                            >
                                                <BiCheckShield />
                                            </span>
                                            {translations[language].checkout.backedup}
                                        </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
export default EmailForm0;