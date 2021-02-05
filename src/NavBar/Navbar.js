import React from 'react';
import './Navbar.css';
import MenuItems from './Menuitem';
// import Button from './Button';
/* eslint-disable camelcase */

class Navbar extends React.Component{
    constructor(){
        super()
        this.state = {
            clicked: false
        }
    }

    handleClick = () => {
        const {clicked} = this.state
        this.setState({
            clicked: !clicked
        })
    }

    render(){
        const {clicked} = this.state
        return(
          <nav className="NavbarItems">

            {/* 缩小后的 菜单按钮与叉按钮切换 */}
            <div className="menu-icon" role="presentation" onClick={this.handleClick}>
              <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            {/* nav-menu active是缩小后的菜单被点击后的样式 */}
            {/* ul,li需要有独一无的key，例如item.id，否则报错 */}
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
              {MenuItems.map((item) => (
                <li key={item.id}>
                  <a className={item.className} href={item.url}>
                    {item.title}
                  </a>
                </li>
                ))}
            </ul>
                
            {/* <Button>Sign up</Button> */}
          </nav>
        )
    }
}

export default Navbar