import React, { useEffect, useState } from "react";
import { conversionUnits } from "../../utils/constants";
import { MakeRequest } from "../../utils/MakeRequest";
import "./VideoRow.css";

const VideoRow = ({ subscribersCount, item }) => {
  const [videoData, setVideoData] = useState();
  function getTimeElapsed(obj) {
    const now = new Date();
    const timestamp = new Date(obj);
    const diff = now.getTime() - timestamp.getTime();
    const diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diff / (1000 * 60));
    const diffSeconds = Math.floor(diff / (1000 * 60));
    return (
      (diffYears && `${diffYears} years ago`) ||
      (diffMonths && `${diffMonths} months ago`) ||
      (diffDays && `${diffDays} days ago`) ||
      (diffHours && `${diffHours} hours ago`) ||
      (diffMinutes && `${diffMinutes} minutes ago`) ||
      (diffSeconds && `${diffSeconds} seconds ago`)
    );
  }
  useEffect(() => {
    MakeRequest(`videos?part=snippet&id=${item.id.videoId}`).then((data) => {
      setVideoData(data.items[0]);
    });
  }, [item]);
  return (
    <div className="videoRow">
      <img src={videoData?.snippet?.thumbnails?.medium?.url} alt="" />
      <div className="videoRow__text">
        <h3>{videoData?.snippet?.title}</h3>
        <p className="videoRow__headline">
          {videoData?.snippet?.channelTitle} •{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">
              {conversionUnits(subscribersCount)}
            </span>{" "}
            Subscribers
          </span>{" "}
          {conversionUnits(videoData?.statistics?.viewCount)} views •
          {getTimeElapsed(videoData?.snippet?.publishedAt)}
        </p>
        <p className="videoRow__description">
          {videoData?.snippet?.description.substring(0, 150)}
        </p>
      </div>
    </div>
  );
};

export default VideoRow;
