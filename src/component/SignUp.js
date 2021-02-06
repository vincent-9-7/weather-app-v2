import React from 'react'
import './SignUp.css'



class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            password:''
        }
    }

    componentDidMount(){

    }

    handleSubmite = (e) => (
        // 防止真的提交（刷新页面）
        (e.preventDefault(),
        // 打印获取的信息
        console.log(this.state))
       )

    // 3. 简便方法，把上面的 name password在一个函数获取
    handleFormOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        const{username,password} = this.state
        return(
          <>
            {/* //关闭 A form label must be associated with a control  报错
            // 仅当label htmlFor(React) or for(HTML)和input id匹配时才有效。
            //  eg:
            // <label htmlFor="temp-id">Label</label>
            // <input type="text" id="temp-id" /> */}

            <form onSubmit={this.handleSubmite}>
              <div className='username'>
                <label htmlFor="nameInput">username</label>
                <input
                  id='nameInput'
                  type='text'
                  name='username'
                  value={username}
                  onChange={this.handleFormOnChange}
                />
              </div>

              <div className='password'>
                <label htmlFor="passwordInput">password</label>
                <input 
                  id='passwordInput'
                  type='password' 
                  name='password' 
                  value={password} 
                  onChange={this.handleFormOnChange}
                />
              </div>

              <button type='submit'>Sign up</button>
            </form>

            <div>
              <h1>This is the return from the button</h1>
              <div>
                <span>
                  Your name is: 
                  {' '}
                  {username}
                </span>
                <span>
                  Your password is:
                  {' '}
                  {password}
                </span>
              </div>
            </div>

          </>
        )
    }

}

export default SignUp