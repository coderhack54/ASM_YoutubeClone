import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./ChannelRow.css";
import VerifiedIcon from "@mui/icons-material/CheckCircleOutline";
import { MakeRequest } from "../../utils/MakeRequest";
import { conversionUnits } from "../../utils/constants";
const ChannelRow = ({ verified, item, setSubscribersCount }) => {
  const [channelData, setChannelData] = useState();
  useEffect(() => {
    MakeRequest(`channels?part=snippet&id=${item.id.channelId}`).then(
      (data) => {
        console.log(data.items[0]);
        setChannelData(data.items[0]);
        setSubscribersCount(data.items[0]?.statistics?.subscriberCount);
      }
    );
  }, [item]);

  return (
    <div className="channelRow">
      <Avatar
        className="channelRow__logo"
        alt={channelData?.snippet?.title}
        src={channelData?.snippet?.thumbnails?.default?.url}
      />
      <div className="channelRow__text">
        <h4>
          {channelData?.snippet?.title} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {conversionUnits(channelData?.statistics?.subscriberCount)}
          subscribers • {channelData?.statistics?.videoCount} videos
        </p>
        <p>{channelData?.snippet?.description.substring(0, 150)} </p>
      </div>
    </div>
  );
};

export default ChannelRow;
