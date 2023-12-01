import React, { useEffect, useState } from 'react';
import {AiOutlineDownload} from 'react-icons/ai' 
import { translations } from '../data/translation';

const language = process.env.NEXT_PUBLIC_LANGUAGE

// FileDownloadComponent.jsx

const tabs = translations[language].appsComponent.tabs

const Apps = (props) => {
  const {
    isMobileView
  }=props
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const changeTab = (index) => {
    setActiveTab(index);
    setSelectedSubcategory(null);
  };

  const selectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };
  const [url,setUrl]=useState(null)
  const downloadFile = (ur) => {
    setUrl(ur)
    // console.log(`Downloading ${url}`);
    // Implement your file download logic here, using file.url if available
  };
  useEffect(()=>{
    if (url){
        window.open(url, '_blank');
    }
    setUrl(null)
  },[url])
  return (
    <div
        style={{
            maxWidth: "1100px",
            margin: "auto"
        }}
    >
        <div
            style={{
                textAlign : "center",
                marginBottom : "1rem",
                padding : "1rem"
            }}
        >
            <span
                style={{
                    fontWeight : 800,
                    fontSize : "40px",
                    color : "black",
                    margin : "auto"
                }}
            >{translations[language].appsComponent.iptv_apps}</span>
            <p
                style={{
                    color : "grey",
                    margin : "auto",
                    lineHeight : "21px"
                }}
            >
                {translations[language].appsComponent.desc}
            </p>
        </div>
        <div
            style={{
                border : "1px solid #dddddd",
                padding : "10px",
                width : "auto",
                margin : "auto",
                maxWidth : "1100px",
                borderRadius : "5px",
                background : "white"
            }}
        >
        <div
            style={{
                // width : "100%",
                background : "white",
                display : "flex",
                // borderTop : "1px solid grey",
                maxWidth: "1100px",
                margin: "auto",
                marginBottom : isMobileView ? undefined : "22px",
                // borderLeft : "1px solid grey",
                // borderRight : "1px solid grey"
            }}
        >
            {translations[language].appsComponent.tabs.map((tab, index) => (
            <button
                style={{
                    width : "100%",
                    border : "0",
                    fontWeight : isMobileView ? 600 : 800,
                    // background : index==activeTab ? "white" : undefined,
                    color : index==activeTab ? "#1c42c5" : "#232122",
                    paddingTop : "10px",
                    display : "grid",
                    // color : "black",
                    background : "white"
                }}
                key={index} onClick={() => changeTab(index)}
            >
                {tab.image ?
                    <span>
                            <img
                                style={{
                                    height : "40px",
                                    width : "50px"
                                }} 
                                src={`/${index==activeTab ? tab.image + 'blue.webp' : tab.image+'.webp'}`} alt={tab.name} />
                    </span>
                :null}
                <span>
                    {tab.name}
                </span>
            </button>
            ))}
        </div>

        <div
            style={{
                padding : "23px 10px 10px",
                margin : "auto",
                maxWidth : "1000px"
            }}
        >
            <div
                style={{
                    width : "100%",
                    // display : "grid",
                    color : "black",
                    paddingBottom : "16px",
                }}
            >
                <div
                    style={{
                        fontWeight : 800
                    }}
                >{tabs[activeTab].title}</div>
                <div>{tabs[activeTab].description}</div>
            </div>
            {tabs[activeTab].categories.map((category, index) => (
            <div 
                key={index}
                style={{
                    display : isMobileView ? "grid" : "flex",
                    alignItems : "center",
                    color : "black",
                    gap : "10px",
                    alignItems : "center"
                }}
            >
                {/* <div
                    style={{
                        fontWeight : 800,
                        fontSize : "25px",
                        color : "black"
                    }}
                >{category.name}</div> */}
                {category.image ?
                    <div
                        style={{
                            maxHeight : "40px",
                            marginBottom : "10px",
                            width : "100%"
                        }}
                    >
                        <img
                            style={{
                                height : "40px"
                            }} 
                            src={category.image} alt={category.name} />
                    </div>
                :null}
                <div
                    style={{
                        width : "100%",
                        display : isMobileView ? "grid" : "flex",
                        gap : "10px",
                        marginBottom : "20px",
                        alignItems : "center"
                    }}
                >
                {category.buttons.map((button, subIndex) => (
                    <div 
                        key={subIndex}
                        style={{
                            display : "flex",
                            alignItems : "center",
                            gap : "5px",
                            // width : "100%"
                        }}    
                    >
                    {/* Assuming image is associated with the entire category */}
                    {/* <img src={category.image} alt={category.name} /> */}
                    {/* <p>{button.name}</p> */}
                    {button.url && (
                        <button
                            style={{
                                // width : "100%",
                                background : "#511bc9",
                                padding : "10px 30px",
                                border : "0",
                                borderRadius : "10px",
                                fontWeight : 800,
                                display : "flex",
                                alignItems : "center",
                                gap : "10px"
                            }} 
                            onClick={() => downloadFile(button.url)}>{button.name}
                            {button.action=='download' ?
                                <span
                                    style={{
                                        fontWeight : 800,
                                        fontSize : "20px",
                                        color : "white"
                                    }}
                                >
                                    <AiOutlineDownload />
                                </span>
                            :null}
                        </button>
                    )}
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Apps;
