import React from 'react'
import './ChannelRow.css'
import Avatar from '@mui/material/Avatar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function ChannelRow({image,channel, verified, subs,noOfVideos, description}) {
  return (
    <div className="ChannelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="ChannelRow__text">
        <h4>{channel} {verified && <CheckCircleOutlineIcon />}</h4>
        <p>{subs} subscriber . {noOfVideos}  videos </p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow
