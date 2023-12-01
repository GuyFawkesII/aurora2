import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import React , {useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../store/actions";
import { useLocalstorageState } from 'rooks';
import { translations } from '../../data/translation';
import useLocalStorage from '../../hooks/useLocalStorage';

const language = process.env.NEXT_PUBLIC_LANGUAGE

const backend_server = process.env.NEXT_PUBLIC_BACKEND_SERVER


const EmailForm = (props) => {
  const {
    state,
    setState,
    buttonText,
    enabled
  }=props
  const [gotTrial,setGotTrial]=useLocalstorageState('gotTrial',{
    gotTrial : false,
    startData : null,
    endData : null
  })
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
  const [userId,setUserId]=useLocalStorage('uuid',null)
  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    setUserEmail([
      values.email,
      ...userEmail,
    ])
    let data = {
      ...values,
      language : language,
      userId : userId
    }
    setState('loading')
    if (submitToDb==true){
      try {
        // Send data to the API using Axios
        const response = await axios.post(`${backend_server}create_contact`, data);
        // console.log(response.data)
        if (response.data[language].type=='green'){
          setTimeout(() => {
            setState('loaded')
          }, 1000);
          dispatch(
            setNotification(response.data[language])
          )
        }
        else {
          dispatch(
            setNotification(response.data)
          )
          setTimeout(() => {
            setState('error')
          }, 1000);
        }
        // Reset the form after successful submission
        resetForm();
        // console.log('Form submitted successfully!');
      } catch (error) {
        // console.log(error)
        dispatch(
          setNotification({
            active : true,
            message : translations[language].error_occured,
            type : 'red'
          })
        )
        // console.log("error", error)
        setState('idle')
        console.error('Error submitting form:', error);
      } 
    }
    else {
      setUserEmail([
        values.email,
        ...userEmail,
      ])
      setTimeout(() => {
        dispatch(
          setNotification({
            active : true,
            message :  translations[language].email_submitted_successfully,
            type : 'green'
          })
        )
        setState('loaded')
      }, 1000);
    }
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
                display : "grid",
                // gap : "10px"
            }}
        >
          {/* <label htmlFor="email">Email</label> */}
          <Field type="email" id="email" name="email" placeholder={translations[language].enter_your_email} />
          <div
            style={{
                color : "red",
                textAlign : "left"
            }}
          >
              <ErrorMessage name="email" component="div" />
          </div>
          <button
            className={state=='loading' ? 'btn' : 'btn button_green'}
            style={{
                // width: "100%",
                height : "44px",
                background : state=='loading' ? "#00b40c" : undefined ,
                padding : state=='loading' ? "0px 40px" : undefined
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
            type="submit">
              {state=='loading' ?
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                :
                <span>
                  {buttonText}
                </span>
              }
              </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EmailForm;
