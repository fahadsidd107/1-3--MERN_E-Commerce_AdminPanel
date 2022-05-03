import React from 'react'
import './Topbar.css'
import { NotificationsNone,Language,Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
<div className='topLeft'>
<span className='logo'>
Fahad
</span>
</div>
<div className='topRight'>
<div className='topIconContainer'>
<NotificationsNone/>
<span className='topIconBadge'>2</span>
</div>
<div className='topIconContainer'>
<Language/>
<span className='topIconBadge'>2</span>
</div>
<div className='topIconContainer'>
<Settings/>
</div>
<img src='https://avatars.githubusercontent.com/u/61376412?s=400&u=bd4075255e4b63efdd5dc216a0375013fe7e0781&v=4' className='topAvatar'/>
</div>
      </div>
    </div>
  )
}
