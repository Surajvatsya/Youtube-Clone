import React from 'react'
import ChannelRow from './ChannelRow'
import TuneIcon from '@mui/icons-material/Tune';
import './SearchPage.css'
function SearchPage() {
  return (
    <div classsName="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow 
        image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="1.03M"
        noOfVideos={345} 
          description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills"
      />
    </div>
  )
}

export default SearchPage
