import React from 'react';


// 有大括号必有 return,圆括号就没有 return
const Header = () => (
  
  <div className="menuBar">
    <div className="topnav" id="myTopnav">
      <a href="#home" className="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <i className="fa fa-bars" />
    </div>
  </div>


)

export default Header




// {/* <nav className="navbar navbar-inverse">
//       <div className="container-fluid">
//         <div className="navbar-header">
//           <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//             <span className="icon-bar" /> 
//             <span className="icon-bar" />
//             <span className="icon-bar" />                        
//           </button>

//           <a className="navbar-brand" href='#'>缩小后菜单变成图标</a>
//         </div>
//         <div className="collapse navbar-collapse" id="myNavbar">
//           <ul className="nav navbar-nav">
//             <li className="active"><a href="#">Home</a></li>
//             <li className="dropdown">
//               <a className="dropdown-toggle" data-toggle="dropdown" href="#">
//                 Page 1
//                 <span className="caret" />
//               </a>
//               <ul className="dropdown-menu">
//                 <li><a href="#">Page 1-1</a></li>
//                 <li><a href="#">Page 1-2</a></li>
//                 <li><a href="#">Page 1-3</a></li>
//               </ul>
//             </li>
//             <li><a href="#">Page 2</a></li>
//             <li><a href="#">Page 3</a></li>
//           </ul>

//           <form className='navbar-form navbar-left' action='/action_page.php'>
//             <div className='input-group'>
//               <input type="text" className="form-control" placeholder="Search" name="search" />
//               <div className="input-group-btn">
//                 <button className="btn btn-default" type="submit">
//                   <i className="glyphicon glyphicon-search" />
//                 </button>
//               </div>
//             </div>
//           </form>

//           <ul className="nav navbar-nav navbar-right">
//             <li>
//               <a href="#">
//                 <span className="glyphicon glyphicon-user" />
//                 {' '}
//                 Sign Up
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <span className="glyphicon glyphicon-log-in" />
//                 {' '}
//                 Login
//               </a>
//             </li>
//           </ul>

//         </div>
            
//       </div>
//     </nav>
//      */}