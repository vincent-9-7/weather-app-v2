import React from 'react';
import axios from 'axios';
import {getLocationApi,getWeatherApi} from '../api/Api'

/* eslint-disable no-console */

export const getLocation = (currentCity) => axios.get(getLocationApi(currentCity));

export const getCurrentWeather = (lat,lng) => axios.get(getWeatherApi(lat,lng));

class Detail7Days extends React.Component {
    constructor(props){
        super(props)
        const{city} = this.props
        this.state = {
            currentCity : city        
        }
    }

    async componentDidMount() {
        this.getDay();
        this.getWeather();
    }

    // 得到接下来七天的星期名字
    getDay = () => {
        for(let i=0; i<6; i+=1) {
            const today = new Date().getUTCDay()
            const dayList = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
            // console.log(dayList[today])
            const order = ['second','third','forth','fifth','sixth','seventh']
            const day = `${order[i]}--day`;

            if(today+i < 7) {
                document.getElementById(`${day}`).textContent = dayList[today+i];
                // console.log(dayList[today+i])
            }else{
                document.getElementById(`${day}`).textContent = dayList[today+i-7];
            }         
        }
    }

    async getWeather () {
        const{currentCity} = this.state;
        // ------------------第1个api函数----------------
        const mapBoxApiUrl = await (await getLocation(currentCity)).config.url;
        // console.log(mapBoxApiUrl)
        const response = await fetch(mapBoxApiUrl);
        const data = await response.json();

        const {center} = data.features[0]// 解构
        const lat = center [1];
        const lng = center [0];        

        // ------------------第二个api函数----------------
        const weatherApi = await (await getCurrentWeather(lat,lng)).config.url;
        // console.log(weatherApi)
        const responseSecond = await fetch(weatherApi);
        const dataSecond = await responseSecond.json();
 
        // 获取当天的温度 icon description 信息
        const {temp} = dataSecond.current;
        const {icon:todayIcon, main} = dataSecond.current.weather[0];
        const todayTemp = temp.toString().split(".")[0];

        
        document.getElementById('today--tep').textContent = todayTemp;
        document.getElementById('today--icon').src = `http://openweathermap.org/img/wn/${todayIcon}@2x.png`;
        document.getElementById('today--main').textContent = main;

        document.getElementById('weatherPage__today--detail').textContent = currentCity;
        
      // 未来6天天气写入
        for(let i=0; i<6; i+=1) {
            const {max,min} = dataSecond.daily[i+1].temp;
            const {icon} = dataSecond.daily[i+1].weather[0];

            const highTemp = max.toString().split(".")[0];
            const lowTemp = min.toString().split(".")[0];
            const order = ['second','third','forth','fifth','sixth','seventh']
    
            const idHigh = `${order[i]}--high`;
            const idLow = `${order[i]}--low`;
            const idIcon = `${order[i]}--icon`;
            document.getElementById(`${idIcon}`).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            document.getElementById(`${idHigh}`).textContent = highTemp;
            document.getElementById(`${idLow}`).textContent = lowTemp;
        }
    }
   
    render(){
        return(
          <>
            {/* <h1>3.3 这里放详情页 右侧的 七天天气 信息</h1> */}
            <div className="weatherPage__detail weatherPage__detail--day">

              <div className='weatherPage__item weatherPage__item--day'>
                <span id='second--day' />
              </div>

              <div className='weatherPage__item weatherPage__item--icon'>
                <img id='second--icon' className="weatherPage__item--icon" src="" alt="second" />
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='second--high'>
                  {/* <WiDegrees /> */}
                </span>
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='second--low'>
                  {/* <WiDegrees /> */}
                </span>
              </div>

              {/* third */}
              <div className='weatherPage__item weatherPage__item--day'>
                <span id='third--day' />
              </div>

              <div className='weatherPage__item weatherPage__item--icon'>
                <img id='third--icon' className="weatherPage__item--icon" src="" alt="third" />
              </div>
              
              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='third--high'>
                   
                  {/* <WiDegrees /> */}
                </span>
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='third--low'>
                   
                  {/* <WiDegrees /> */}
                </span>
              </div>

              {/* Forth\ */}
              <div className='weatherPage__item weatherPage__item--day'>
                <span id='forth--day' />
              </div>

              <div className='weatherPage__item weatherPage__item--icon'>
                <img id='forth--icon' className="weatherPage__item--icon" src="" alt="forth" />
              </div>
              
              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='forth--high'>
                  {/* <WiDegrees /> */}
                </span>
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='forth--low'>
                  {/* <WiDegrees /> */}
                </span>
              </div>

              {/* fifth */}
              <div className='weatherPage__item weatherPage__item--day'>
                <span id='fifth--day' />
              </div>

              <div className='weatherPage__item weatherPage__item--icon'>
                <img id='fifth--icon' className="weatherPage__item--icon" src="" alt="fifth" />
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='fifth--high'>
                  {/* <WiDegrees /> */}
                </span>
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='fifth--low'>
                  {/* <WiDegrees /> */}
                </span>
              </div>

              {/* sixth */}
              <div className='weatherPage__item weatherPage__item--day'>
                <span id='sixth--day' />
              </div>

              <div className='weatherPage__item weatherPage__item--icon'>
                <img id='sixth--icon' className="weatherPage__item--icon" src="" alt="sixth" />
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='sixth--high'>
                  {/* <WiDegrees /> */}
                </span>
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='sixth--low'>
                  {/* <WiDegrees /> */}
                </span>
              </div>

              {/* seventh */}
              <div className='weatherPage__item weatherPage__item--day'>
                <span id='seventh--day' />
              </div>

              <div className='weatherPage__item weatherPage__item--icon'>
                <img id='seventh--icon' className="weatherPage__item--icon" src="" alt="seventh" />
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='seventh--high'>
                  {/* <WiDegrees /> */}
                </span>
              </div>

              <div className='weatherPage__item weatherPage__item--tep'>
                <span id='seventh--low'>
                  {/* <WiDegrees /> */}
                </span>
              </div>
            </div>
 
 
          </>
        )
    }
}

export default Detail7Days