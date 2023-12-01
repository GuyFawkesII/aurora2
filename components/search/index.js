import React, { useState, useEffect,useRef } from 'react';
import CountryFlag from 'react-country-flag';
import { useDispatch,useSelector } from 'react-redux';
import { setChannelFilter } from '../../store/actions';
import { translations } from '../../data/translation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import CountriesFilter from './countriesFilter';
// import ChannelsList from './channels';
// import { FixedSizeList as List } from 'react-window'; // Import FixedSizeList
const language = process.env.NEXT_PUBLIC_LANGUAGE

const svgMarkup = `
<svg viewBox="0 0 2050 2050" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:#4d4c78;}.cls-2{fill:#323150;}.cls-3{fill:#67baeb;}.cls-4{fill:#46a1f8;}.cls-5{fill:#29a700;}.cls-6{fill:#4b7d27;}.cls-7{fill:#80d964;}.cls-8{fill:#83d0fb;}.cls-9{fill:#64639c;}</style></defs><title></title><path class="cls-1" d="M814.4,1614.8v160.1h433.4V1614.8C1085.8,1657.3,939.2,1662.5,814.4,1614.8Z"></path><path class="cls-2" d="M958.7,1718.5a33.6,33.6,0,0,1-33.6-33.6v-42a509.2,509.2,0,0,1-110.7-28.1v160.1h433.4v-56.4Z"></path><path class="cls-1" d="M1031.1,1666.3A774.5,774.5,0,0,1,482.3,1439a20,20,0,1,1,28.3-28.3A736.1,736.1,0,1,0,1317.6,212a20,20,0,0,1,15.6-36.9,776.2,776.2,0,0,1-302.1,1491.2Z"></path><circle class="cls-3" cx="1031.1" cy="890.2" r="641.3"></circle><path class="cls-4" d="M1422.9,1341.3c-314.1,163.6-701.4,41.6-865-272.5-109.4-209.9-91.1-452.5,26.8-639.2C386.1,621.9,328.1,928.8,462.4,1186.4c163.6,314.1,550.8,436.1,864.9,272.5A637.7,637.7,0,0,0,1573,1233.2,642.4,642.4,0,0,1,1422.9,1341.3Z"></path><path class="cls-5" d="M1158.3,261.7l-134.5,70a129.4,129.4,0,0,0-54.9,174.5h0a14.7,14.7,0,0,1-6.1,19.9L895,561.5a76.6,76.6,0,0,0-32.6,103.3h0a76.6,76.6,0,0,0,103.3,32.5l512.5-267A641.7,641.7,0,0,0,1158.3,261.7Z"></path><path class="cls-6" d="M967.1,689.9h0A76.6,76.6,0,0,1,972,581.7l56.5-51.5a14.7,14.7,0,0,0,.8-20.8h-.1a129.5,129.5,0,0,1,8.3-182.8l5.1-4.6-18.8,9.8a129.4,129.4,0,0,0-54.9,174.5h0a14.7,14.7,0,0,1-6.1,19.9L895,561.5a76.6,76.6,0,0,0-32.6,103.3h0a76.6,76.6,0,0,0,103.3,32.5l5.8-3C970,692.9,968.5,691.4,967.1,689.9Z"></path><rect class="cls-5" height="123.16" rx="61.6" ry="61.6" transform="translate(-365.2 732.6) rotate(-27.5)" width="160" x="1233.5" y="1050.6"></rect><rect class="cls-7" height="82.92" rx="41.5" ry="41.5" transform="translate(-32.1 556.4) rotate(-27.5)" width="179.5" x="1030.5" y="302.2"></rect><rect class="cls-7" height="56.94" rx="28.5" ry="28.5" transform="translate(-360.3 722.5) rotate(-27.5)" width="103.9" x="1243.3" y="1068.5"></rect><path class="cls-5" d="M740.7,1111.7a80,80,0,0,0-108-34l-5.8,3h0c-44.6-85.5-141.7-125.8-231.1-102.1a646.1,646.1,0,0,0,146.7,327.1l8-4.7,156.1-81.4a79.9,79.9,0,0,0,34.1-107.9Z"></path><path class="cls-6" d="M557.9,1068.8a644.9,644.9,0,0,1-36-82.7,201.9,201.9,0,0,0-126.1-7.5,646.1,646.1,0,0,0,146.7,327.1l8-4.7,129.9-67.7A638.3,638.3,0,0,1,557.9,1068.8Z"></path><path class="cls-5" d="M1651.7,728.2l-51.4,26.7a142.6,142.6,0,0,0-60.5,192.3h0l-4.1,2.1a56.4,56.4,0,1,0,52.1,100.1l73-38A640.2,640.2,0,0,0,1651.7,728.2Z"></path><rect class="cls-7" height="56.94" rx="28.5" ry="28.5" transform="translate(-196.5 832.1) rotate(-27.5)" width="103.9" x="1549.1" y="788.9"></rect><rect class="cls-1" height="73.2" rx="15.2" ry="15.2" transform="translate(217.3 -577.1) rotate(25.8)" width="113.1" x="1312" y="149.1"></rect><rect class="cls-1" height="73.2" rx="15.2" ry="15.2" transform="translate(1088.5 23.9) rotate(41.1)" width="113.1" x="455.8" y="1426.3"></rect><path class="cls-1" d="M1367,1953.4H695.1a30.1,30.1,0,0,1-29.1-37.6l32.8-127a30.3,30.3,0,0,1,29.2-22.6h606.2a30.1,30.1,0,0,1,29.1,22.6l32.9,127A30.1,30.1,0,0,1,1367,1953.4Z"></path><path class="cls-2" d="M1387.5,1882.1H772a30.1,30.1,0,0,1-29.2-37.6l20.3-78.3H728a30.3,30.3,0,0,0-29.2,22.6l-32.8,127a30.1,30.1,0,0,0,29.1,37.6H1367a30.1,30.1,0,0,0,29.2-37.6Z"></path><circle class="cls-8" cx="808.8" cy="399.3" r="97.6"></circle><circle class="cls-8" cx="1481.1" cy="648.9" r="110.8"></circle><rect class="cls-9" height="93.63" rx="46.8" ry="46.8" width="362.4" x="951.1" y="1766.2"></rect></g></svg>
`;
const lock = `
<svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><path class="cls-1" d="M1.5,1.5a29.83,29.83,0,0,0,21,0"></path><line class="cls-1" x1="0.55" y1="7.23" x2="23.45" y2="7.23"></line><line class="cls-1" x1="23.45" y1="11.05" x2="20.03" y2="11.05"></line><line class="cls-1" x1="3.97" y1="11.05" x2="0.55" y2="11.05"></line><line class="cls-1" x1="4.36" y1="2.45" x2="3.41" y2="22.5"></line><line class="cls-1" x1="19.64" y1="2.45" x2="20.59" y2="22.5"></line><line class="cls-1" x1="12" y1="3.41" x2="12" y2="11.05"></line><rect class="cls-1" x="9.14" y="11.05" width="5.73" height="6.68" rx="1.91"></rect><line class="cls-1" x1="0.55" y1="22.5" x2="23.45" y2="22.5"></line></g></svg>
`
const options = {
  keys: ['name'],
};

const countries = [
  "AllCountries",
  "GB",
  "ES",
  "US",
  "CL",
  "FR",
  "AU",
  "AL",
  "AM",
  "CN",
  "BE",
  "CA",
  "TT",
  "CZ",
  "DE",
  "DK",
  "FI",
  "GR",
  "IE",
  "IS",
  "IT",
  "KU",
  "KZ",
  "LA",
  "LT",
  "MT",
  "MO",
  "NL",
  "NO",
  "PL",
  "PT",
  "RU",
  "SE",
  "CH",
  "TR",
  "ASIA"
]

const SearchChannel = (props) => {
  const {
    currentCountry
  }=props
  const [searchTerm, setSearchTerm] = useState('');
  // const [filteredChannels, setFilteredChannels] = useState(channels);
  const [activeCountry, setActiveCountry] = useState('AllCountries');
  // const [results,setResults]=useState([])
  const dispatch = useDispatch()
  const searchTimer = useRef(null); // To store the timer reference
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    console.log("newSearchTerm",newSearchTerm)
    setSearchTerm(newSearchTerm);
    // Clear the previous timer and start a new one
    dispatch(
      setChannelFilter({
        state : 'loading'
      })
    )
  }
  useEffect(()=>{
    clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => {
      dispatch(
        setChannelFilter({
          keyword : searchTerm,
          state : 'loading'
        })
      )
  }, 100); // Delay of 500ms 
  },[searchTerm])
  const [performSearch,setPerformSearch]=useState(false)
  // useEffect(()=>{
  //   dispatch(
  //     setChannelFilter({
  //       keyword : searchTerm,
  //       state : 'loading'
  //     })
  //   )
  // },[searchTerm])
  const handleActiveCountry = (country) => {
    dispatch(
      setChannelFilter({
        country : country,
        state : 'loading'
      })
    )
  }
  const state= useSelector(state=>state.channel.filter.state)
  return (
    <div
        className="channelsList"
        style={{
          maxWidth: '1000px',
          margin: 'auto',
        }}
    >
      <div
        style={{
          position : "relative",
          width : "100%",
        }}
      >
        <input
          type="text"
          placeholder={translations[language].channelsS.searchChannels}
          value={searchTerm}
          onChange={(e) => handleSearchChange(e)}
          />
        <div
          style={{
            position : "absolute",
            right : "15px",
            color : "black",
            top : "24px"
          }}
        >
          {state=='loading' && searchTerm!='' ?
            <FontAwesomeIcon icon={faSync} className="fa-spin-pulse fa-spin-reverse" />
          :null}
        </div>
      </div>
      <CountriesFilter />
      <ul>
        {/* <div
          style={{
            maxHeight : "500px",
            color : "black",
            overflowY : "scroll",
            width : "100%"
          }}
        >
          {countries.map((country,index)=>{
            // console.log(country)
            return (
              <div
                key={index}
                style={{
                  display : activeCountry==country ? "block" : "none" 
                }}
              >
                <ChannelsList
                  searchTerm={searchTerm}
                  performSearch={activeCountry==country && performSearch}
                  country={activeCountry}
                />
              </div>
            )
          })}
        </div> */}
      </ul>
    </div>
  );
};

export default SearchChannel;

// export default SearchChannel;