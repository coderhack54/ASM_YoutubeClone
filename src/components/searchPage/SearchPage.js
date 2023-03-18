import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import { useParams } from "react-router-dom";
import { MakeRequest } from "../../utils/MakeRequest";
const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [subscribersCount, setSubscribersCount] = useState();
  const { searchitem } = useParams();
  useEffect(() => {
    MakeRequest(`search?q=${searchitem}`).then((data) => {
      setSearchResults(data.items);
    });
  }, [searchitem]);
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      {searchResults &&
        searchResults.map((item, index) => (
          <>
            {item.id.channelId && (
              <>
                <ChannelRow
                  verified
                  item={item}
                  setSubscribersCount={setSubscribersCount}
                />
                <hr />
              </>
            )}
            {item.id.videoId && (
              <VideoRow subscribersCount={subscribersCount} item={item} />
            )}
          </>
        ))}
    </div>
  );
};

export default SearchPage;
