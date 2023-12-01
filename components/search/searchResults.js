import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';  // Import debounce from lodash
import { FixedSizeList as List } from 'react-window';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ChannelItem from './channelItems';
import { setChannelFilter } from '../../store/actions';
import { translations } from '../../data/translation';
import LoadingChannels from './loading';

const language = process.env.NEXT_PUBLIC_LANGUAGE;
const backend = process.env.NEXT_PUBLIC_BACKEND_SERVER1;

const SearchResults = (props) => {
  const { setSearchResult } = props;
  const country = useSelector(state => state.channel.filter.country);
  const searchTerm = useSelector(state => state.channel.filter.keyword);
  const state = useSelector(state => state.channel.filter.state);
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);

  // Initialize cancel token source
  let cancelTokenSource;

  const fetchSearchResults = async () => {
    if (cancelTokenSource) {
      // Cancel the previous request before making a new request
      cancelTokenSource.cancel();
    }
    cancelTokenSource = axios.CancelToken.source();
    // console.log(searchTerm)
    if (searchTerm=='' || !country) {
      // console.log("hello woeld")
      dispatch(
        setChannelFilter({
          state : 'idle'
        })
      )
      return;
    }
    try {
      const response = await axios.post(`${backend}search`, {
        data: {
          searchTerm,
          country,
        },
      }, {
        cancelToken: cancelTokenSource.token,
      });

      if (response.status === 200) {
        setResults(response.data);
        dispatch(
          setChannelFilter({
            state: 'idle',
          })
        );
      }
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  const debouncedFetchSearchResults = debounce(fetchSearchResults, 300);

  useEffect(() => {
    debouncedFetchSearchResults();

    if (searchTerm != '') {
      setSearchResult(-1);
    }

    return () => {
      debouncedFetchSearchResults.cancel();
      if (cancelTokenSource) {
        cancelTokenSource.cancel();
      }
    };
  }, [searchTerm, country]);
  return (
    <>
      {results.length === 0 && searchTerm !== '' && state != 'loading' ?
        <div>
          {translations[language].channelsS.no_channels_found}
        </div>
        : null}
      <div
        style={{
          display: searchTerm != '' && results.length > 0 && state=='idle' ? "block" : "none",
          maxWidth: "10000px",
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "10px"
        }}
      >
        <List
          height={400}
          itemCount={results.length}
          itemSize={50}
        >
          {({ index, style }) => (
            <div style={style}>
              <ChannelItem
                name={results[index].item.name}
                country={results[index].item.country}
              />
            </div>
          )}
        </List>
      </div>
    </>
  );
};

export default SearchResults;