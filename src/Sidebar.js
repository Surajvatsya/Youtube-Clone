import React from 'react'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import './Sidebar.css';
function Sidebar() {
  return (
    
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <SidebarRow Icon={HomeIcon} title="Library" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HomeIcon} title="Home" />
    </div>
  )
}

export default Sidebar
