import React from 'react'
import './FeaturedInfo.css'
import {  ArrowDownward, ArrowUpward } from '@material-ui/icons';

function FeaturedInfo() {
  return (
    <div className='featuredinfo'>
    <div className='featuredItem'>
        <span className="featureTitle">Revenue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>Rs.1000</span>
          <span className='featuredMoneyRate'>-0.2 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className='featuredSub'>Compared to the last month</span>
    </div>

    <div className='featuredItem'>
        <span className="featureTitle">Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>Rs.10000</span>
          <span className='featuredMoneyRate'>-1.02 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className='featuredSub'>Compared to the last month</span>
    </div>

    <div className='featuredItem'>
        <span className="featureTitle">Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>Rs.8000</span>
          <span className='featuredMoneyRate'>+10.02 <ArrowUpward className='featuredIcon positive'/></span>
        </div>
        <span className='featuredSub'>Compared to the last month</span>
    </div>

    </div>
  )
}

export default FeaturedInfo