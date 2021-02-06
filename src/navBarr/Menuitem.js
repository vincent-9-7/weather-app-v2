import React from 'react'

const MenuItems = [
    // {
    //     title: 'Home',
    //     url: '/Home',
    //     className: 'nav-links'
    // }
    {   
        id:'1',
        title:<i className="fas fa-cloud-rain" />,
        url: '/',
        className: 'nav-links'
    },
    {   
        id:'2',
        title:<i className="fas fa-user-plus" />,
        url: '#Sign-Up',
        className: 'nav-links'
    },
    {   
        id:'3',
        title:    <i className="fas fa-sign-in-alt" />,
        url: '#Sign-In',
        className: 'nav-links'
    },
    {
        id:'4',
        title:<i className="fas fa-sign-out-alt" />,
        url: '#Sign-Out',
        className: 'nav-links',
    }
    // 最后这个为了mobile设计
    // {
    //     title: 'Sign up',
    //     url: '#Sign',
    //     className: 'nav-links-mobile'
    // }
]

export default MenuItems