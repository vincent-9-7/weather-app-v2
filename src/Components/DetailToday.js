import React from 'react';
import { WiDegrees } from "react-icons/wi";


const DetailToday = ({todayDetail,todayTime}) => (
  <>
    {/* <h1>3.2 这里放详情页 左侧的 today 信息</h1> */}
    <div className="weatherPage__today col-l-12">

      <div className='weatherPage__today weatherPage__today--tep'>
        <span id='today--tep' />
        <WiDegrees className="degree" />

    
        <div className='weatherPage__today weatherPage__today--location'>
          <span id='weatherPage__today--detail'>{todayDetail}</span>
          {/* <br /> */}
          <span id='weatherPage__today--time'>{todayTime}</span>
        </div>

        <div className='weatherPage__today weatherPage__today--icon'>
          <img id='today--icon' className="weatherPage__today--icon" src='' alt="today" />
                  
          <div className='weatherPage__today weatherPage__today--main'>
            <span id='today--main' />
          </div>
        </div>

      </div>
    </div>

    
  </>

)

export default DetailToday