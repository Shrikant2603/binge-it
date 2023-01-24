import { Badge } from '@mui/material';
import React from 'react'
import { img_300, unavailable } from "../../config/config";
import ContentModal from '../contentModal/ContentModal';
import "./SingleContent.css";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  let dateGB = new Date(date);
  let formattedDate = dateGB.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
  });

  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
      
        badgeContent={vote_average?vote_average.toFixed(1):"N/A"}
        color={vote_average > 6 ? "success" : "error"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{formattedDate}</span>
      </span>
    </ContentModal>
  )
}

export default SingleContent