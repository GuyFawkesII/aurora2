import { useDispatch, useSelector } from "react-redux";
import { translations } from "../../data/translation"
import React , {useState,useEffect} from 'react'
import { fetchFilteredChannels } from "../../store/actions";
import { setChannelFilter } from "../../store/actions";


const language = process.env.NEXT_PUBLIC_LANGUAGE

const SearchInput = () => {
    const dispatch = useDispatch()
    const [searchTerm,setSearchTerm]=useState('')
    const activeCountry = useSelector(state=>state.channel.filter.country)
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const [loading,setLoading]=useState(false)
    // const searchTerm = useSelector(state=>state.channel.filter.keyword)
    const handleSearchChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm)
        // dispatch(
        //     setChannelFilter({
        //         keyword : newSearchTerm,
        //     })
        //   )
        // setSearchTerm(newSearchTerm);
        // dispatch(
        //     fetchFilteredChannels({
        //       country: activeCountry,
        //       keyword: newSearchTerm,
        //     })
        // );
        // Clear any existing timeout
        // if (debounceTimeout) {
        //   clearTimeout(debounceTimeout);
        // }
        // setLoading(true); // Set loading state
        // Set a new timeout to trigger the search after 1000ms (1 second) of inactivity
        // const newTimeout = setTimeout(() => {
        //   // Dispatch the search action after the delay
        //   dispatch(
        //     fetchFilteredChannels({
        //       country: activeCountry,
        //       keyword: newSearchTerm,
        //     })
        //   );
        // }, 1);
        // setDebounceTimeout(newTimeout);
      };
    //   useEffect(() => {
    //     // Clear the timeout if the component unmounts
    //     return () => {
    //       if (debounceTimeout) {
    //         clearTimeout(debounceTimeout);
    //       }
    //     };
    //   }, [debounceTimeout]);
    useEffect(()=>{
        dispatch(
            fetchFilteredChannels({
              country: activeCountry,
              keyword: searchTerm,
            })
        );
    },[searchTerm])
    return (
        <>
            <input
                type="text"
                placeholder={translations[language].channelsS.search}
                value={searchTerm}
                onChange={(e) => handleSearchChange(e)}
            />
        </>
    )
}

export default SearchInput