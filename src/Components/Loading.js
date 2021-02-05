import React from 'react'
import $ from 'jquery';
import gif from "../img/load.gif"

class Loading extends React.Component{
    constructor(){
        super()
        this.state=''
    }

    // jquery放在这里
    componentDidMount(){
        this.jquery()
    }

    jquery = () => {
        // 加载完后关闭动画
        $(window).on('load', () => {
            $("#loading").hide();
        });
    }


    render(){
        return(
            //  {/* <!-- 加载等待动画 --> */}
          <div id='loading'> 
            <div>
              <img id="loading-image" src={gif} alt="Loading..." />
              <p id="loading-text">Loading...</p>
            </div>
            {/* <div>
              <p id="loading-text">Loading...</p>
            </div> */}
          </div>


        )
    }
}

export default Loading