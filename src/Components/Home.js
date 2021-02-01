import React from 'react';
import { IoRainyOutline } from 'react-icons/io5';
import DetailToday from './DetailToday'
import HomePageBackground from './HomeBackground';
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable-next-line */
import Detail7Days from './Detail7Days'



class Home extends React.Component {
    constructor(props) {
        super(props)
        const {inputCity} = this.props
        this.state = {
            currentCity: inputCity,
            mainPageDisplay: true, // true即显示，false=>display:none
            todayMonth:'',
            todayDate:'',
            todayHour:'',
            todayMinute:'',
            changeCity: ['','']
        }
    }

    // 1. 只会在装载之前调用一次，在 render 之前调用
    // componentWillMount(){
    // }
    
    // 2. 只会在装载完成之后调用一次，在 render 之后调用
    async componentDidMount() {
        // 初始加载页面显示的信息
        const{currentCity} = this.state
        this.updateTime(currentCity)
        this.updateWeather(currentCity)
    }

    // 3. 更新后 在render之后调用
    // componentDidUpdate(){
    // }
    
    
    // 提交搜索后，更新今天时间和未来七天天气数据
    handleSubmit = (e) => {
        e.preventDefault()

        // 先停止初始的setInterval,在进行新的计时
        this.stopTime()
        
        const{changeCity} = this.state
        const newCity = changeCity[0]
        this.setState({
            currentCity:newCity,
        })

        // 延迟1s消失主页，更新数据
        setTimeout(() => {
            this.setState({
                mainPageDisplay:false
            })
        },1000)

        // 等更新完current city后 再执行两个更新函数，否则同时执行，currentCity还是旧的信息
        setTimeout(() => {
            const{currentCity} = this.state
            this.updateTime(currentCity)
            this.updateWeather(currentCity)
        },1)
    }

    // 提交搜索后，获取输入的地点信息，更改state
    handleOnChangeCity = (e) => {
        // console.log(e.target.value)
        // 使用changeCity寄存输入的信息，避免文字在没提交前一直在变动
        const{currentCity} = this.state
        this.setState({
            changeCity : [e.target.value,currentCity]
        })
    }

    // 得到输入地点的实时时间
    async getTime(currentCity) {

        // 获取本机当地时间：
        // const time = `${new Date().toString().slice(4,10)} ${new Date().toString().slice(16,24)}`
        // document.getElementById('weatherPage__today--time').textContent = time;

        // 获取用户输入地址对应的时间：
        const apiUrl1 = `https://maps.googleapis.com/maps/api/geocode/`
            +
            `json?address=${currentCity}&key=AIzaSyCowgF-_iCq3G2JN4JaM-zj3fmD-7OQP30`
        const response = await fetch(apiUrl1);
        const data = await response.json();
        const {geometry:{location:{lat,lng}}} = data.results[0] // 解构
        console.log(apiUrl1)

        const apiUrl2 = `https://api.openweathermap.org/data/2.5/`
        +`weather?lat=${lat}&lon=${lng}&appid=9bf729522efcbfd825ccfbef7c8f2410`
        console.log(apiUrl2)

        const responseToday = await fetch(apiUrl2);
        const dataToday = await responseToday.json();
        const {timezone} = dataToday // 解构
        const GMT = timezone/3600
        
        // (UTC) is equal to the local time minus(-) the UTC offset.
        if(GMT===0) {
        const apiUrl3 = `http://worldtimeapi.org/api/timezone/Etc/GMT`
        console.log(apiUrl3)
        const responseGMT = await fetch(apiUrl3);
        const dataGMT = await responseGMT.json();
        const {utc_datetime,utc_offset} = dataGMT // 解构
        const month = utc_datetime.toString().slice(5,7)
        const date2 = utc_datetime.toString().slice(8,10)
        let hour = Number(utc_datetime.toString().slice(11,13))
        const minute = utc_datetime.toString().slice(13,19)
        hour -= Number(utc_offset.toString().slice(0,3))
        // console.log(hour,minute)
        const monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        const getMonth = monthList[month/1-1]
        const information = [getMonth,date2,hour,minute]
        // console.log(information)
        
        this.setState({
            todayMonth:getMonth,
            todayDate:date2,
            todayHour:hour,
            todayMinute:minute
        })
        return information            
        //   document.getElementById('weatherPage__today--time').textContent = `${getMonth}.${date2} ${hour}${minute}`;

        }if(GMT>0){
        const apiUrl3 = `http://worldtimeapi.org/api/timezone/Etc/GMT+${GMT}`
        console.log(apiUrl3)
        const responseGMT = await fetch(apiUrl3);
        const dataGMT = await responseGMT.json();
        const {utc_datetime,utc_offset} = dataGMT // 解构
        const month = utc_datetime.toString().slice(5,7)
        const date2 = utc_datetime.toString().slice(8,10)
        let hour = Number(utc_datetime.toString().slice(11,13))
        const minute = utc_datetime.toString().slice(13,19)
        hour -= Number(utc_offset.toString().slice(0,3))
        // console.log(hour,minute)
        const monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        const getMonth = monthList[month/1-1]
        //   document.getElementById('weatherPage__today--time').textContent = `${getMonth}.${date2} ${hour}${minute}`;
        const information = [getMonth,date2,hour,minute]
        // console.log(information)
        this.setState({
            todayMonth:getMonth,
            todayDate:date2,
            todayHour:hour,
            todayMinute:minute
        })
        return information
        }
        const apiUrl3 = `http://worldtimeapi.org/api/timezone/Etc/GMT${GMT}`
        console.log(apiUrl3)
        const responseGMT = await fetch(apiUrl3);
        const dataGMT = await responseGMT.json();
        const {utc_datetime,utc_offset} = dataGMT // 解构
        const month = utc_datetime.toString().slice(5,7)
        const date2 = utc_datetime.toString().slice(8,10)
        let hour = Number(utc_datetime.toString().slice(11,13))
        const minute = utc_datetime.toString().slice(13,19)
        hour -= Number(utc_offset.toString().slice(0,3))
        // console.log(hour,minute)
        const monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        const getMonth = monthList[month/1-1]
        //   document.getElementById('weatherPage__today--time').textContent = `${getMonth}.${date2} ${hour}${minute}`;
        const information = [getMonth,date2,hour,minute]
        // console.log(information)
        this.setState({
            todayMonth:getMonth,
            todayDate:date2,
            todayHour:hour,
            todayMinute:minute
        })
        return information 
    }

    // 得到输入地点的实时天气
    async getWeather (currentCity) {
        // ------------------第1个api函数----------------
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/`
        +
        `json?address=${currentCity}&key=AIzaSyCowgF-_iCq3G2JN4JaM-zj3fmD-7OQP30`
        console.log(apiUrl);
        const response = await fetch(apiUrl);
        const data = await response.json();
        const {geometry:{location:{lat,lng}}} = data.results[0] // 解构

        // ------------------第二个api函数----------------
        const apiUrlSecond = `https://api.openweathermap.org/data/2.5/`
        +
        `onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts`
        +
        `&appid=9bf729522efcbfd825ccfbef7c8f2410&units=metric`
        console.log(apiUrlSecond)
        const responseSecond = await fetch(apiUrlSecond);
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

    stopTime = () => clearInterval(this.timer)

    // 更改页面display：none
    changePage = () => {
        const{mainPageDisplay} = this.state
        console.log(mainPageDisplay)
        if(!mainPageDisplay){
            return "mainPage__display-none"
        }
        return "mainPage"
    }

    // 每秒更新时间
    async updateTime(currentCity){
        this.getTime(currentCity);
        // this.timer = setInterval(() => {
        //     this.getTime(currentCity);            
        // }, 1000)
    }

    // 提交地点后，更新七天的天气
    updateWeather(currentCity){
        this.getWeather(currentCity)
    }

    render() {
        const {currentCity} = this.state
        console.log(currentCity)
        const {todayMonth,todayDate,todayHour,todayMinute} = this.state
        const date = `${todayMonth}.${todayDate} ${todayHour}${todayMinute}`

        return(
          <>
            <div>
              <div className="mainPage">
                <div className={this.changePage()}>

                  <HomePageBackground />

                  <div className="mainPage__webName">
                    <h1>
                      Find Your Weather.
                    </h1>   
                    <IoRainyOutline className="mainPage__webIcon" />
                  </div>

                  <div className="mainPage__SearchBar">
                    <div id='form'>
                      <form onSubmit={this.handleSubmit}>
                        <input
                          onChange={this.handleOnChangeCity}
                          className="mainPage__search"
                          type="text"
                          name="search"
                          placeholder="enter your city"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='weatherPage'>
                <div className="weatherPage__background" />

                <div className="weatherPage__content">
                  <div className="weatherPage__search">
                    <form onSubmit={this.handleSubmit}>
                      <input 
                        onChange={this.handleOnChangeCity}
                        className="weatherPage__search--input" 
                        type="text" 
                        onClick={this.cc}
                        placeholder="Search"
                      />
                    </form>
                  </div>          
                </div>
            
                <DetailToday 
                  todayDetail={currentCity}
                  todayTime={date}
                />
            
                <Detail7Days city={currentCity} />

              </div>
            </div>
          </>
        )
    }
}
  
export default Home
