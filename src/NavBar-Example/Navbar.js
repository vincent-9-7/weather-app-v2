import React from 'react';
import './Navbar.css';
import MenuItems from './MenuItem';
import Button from './Button';
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
            
            <h1 className="navbar-logo">
              React
              <i className="fas fa-rainbow" />
            </h1>

            <div className="menu-icon" role="presentation" onClick={this.handleClick}>
              <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
              {MenuItems.map((item) => (
                <li key={item.id}>
                  <a className={item.className} href={item.url}>
                    {item.title}
                  </a>
                </li>
                ))}
            </ul>

            <Button>Sign up</Button>
          </nav>


        )
    }
}

export default Navbar