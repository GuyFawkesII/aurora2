import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ChannelItem from "./channelItems"
import { channels } from "../../data/channels"
import { FixedSizeList as List } from 'react-window'; // Import FixedSizeList
import Fuse from 'fuse.js';
// import { useSelector } from "react-redux";
import { translations } from "../../data/translation";
import { useEffectOnceWhen } from "rooks";
import { setChannelFilter } from "../../store/actions";
// import { SET_FILTERED_CHANNELS } from "../../store/types";

const language = process.env.NEXT_PUBLIC_LANGUAGE

const MyChannels = (props) => {
    const {
      // searchTerm,
      performSearch,
      currentCountry,
      setSearchResult
    }=props
    // console.log()
    const country = useSelector(state=>state.channel.filter.country)
    const searchTerm = useSelector(state=>state.channel.filter.keyword)
    // if (country==currentCountry){
    //   console.log(channels[currentCountry])
    // }
    const dispatch = useDispatch()
    const [results,setResults]=useState(channels[currentCountry])
    // console.log(currentCountry,country)
    // console.log(results)
    useEffect(()=>{
      if (currentCountry==country && channels[currentCountry]){
        setSearchResult(channels[currentCountry].length)
      }
    },[country])
    useEffect(()=>{
      dispatch(
        setChannelFilter({
          state:'idle'
        })
      )
    },[country])
    const state = useSelector(state=>state.channel.filter.state)
    // console.log(currentCountry)
    return (
      <>
          {/* <div>
              <span
                style={{
                  fontWeight : 800
                }}
              >{channels[currentCountry] ? channels[currentCountry].length : 0}</span> {translations[language].channelsS.searchResults}
          </div> */}
        <div
          style={{
            display : country==currentCountry && searchTerm=='' && state=='idle' ? "block" : "none",
            maxWidth : "10000px",
            background : "white",
            padding : "10px",
            borderRadius : "10px",
            marginTop : "10px"
          }}
        >
            <List
              height={400} // Set the height of the list
              // width={300} // Set the width of the list
              itemCount={channels[currentCountry] ? channels[currentCountry].length : 0} // The number of items in the list
              itemSize={50} // The height of each item in the list
            >
              {({ index, style }) => {
                // console.log(results[index])
                return (
                  <div style={style}>
                      <ChannelItem
                        name={results[index].name}
                        country={results[index].country}
                        // setLoaded={setLoaded}
                        // loaded={loaded}
                      />
                </div>
                )
              }}
            </List>
        </div>
      </>
    )
}
export default MyChannels