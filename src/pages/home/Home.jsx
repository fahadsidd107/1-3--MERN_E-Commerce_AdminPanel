import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'

import './Home.css'
import { userAndSalesData } from '../../Data'
import WidgetSm from '../../components/widgetsm/WidgetSm'
import WidgetLg from '../../components/widgetlg/WidgetLg'
function Home() {
  return (
    <div className='home'>
    <FeaturedInfo/>
    <Chart title="Sales and Users Analytics" data={ userAndSalesData } userDataKey="users" salesDataKey='sales' grid/>
    <div className='homeWidgets'>
      <WidgetSm/>
      <WidgetLg/>
    </div>
    </div>
  )
}

export default Home