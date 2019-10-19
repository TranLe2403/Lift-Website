import React from 'react'
import Img from './Logo'
import Link from './Link'
import Burger from './BgMenu'

export default function Header() {
  
  const links = [
      {href: "/", name: "HOME"},
      {href: "/games", name: "GAMES"},
      {href: "/team", name: "TEAM"},
      {href: "/contact", name: "CONTACT"}
  ];

  return (
    <div>
      <div className="menuMobile" >
        <div className="nav_logo">
          <Img />
        </div>
        <div className ="nav_bar_mobile">       
          <Burger /> 
        </div>
      </div>
      <div className="header">
        <div className="nav_logo">
          <Img />
        </div>
        <div className="menu">


          {
            links.map(link => {
              return (
              <Link activeClassName="active" href={link.href} as={ process.env.BACKEND_URL + link.href} key={link.name}>
                  <a className="link">{link.name}</a>
              </Link>
              
            )})
          }
          
        </div>
      </div>
      
      <style jsx>{`
        /* For mobile phones: */
        
          .menuMobile {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #F9A825;
          height: 80px;
          position: fixed;
          z-index: 10;

        }
        .nav_bar_mobile{
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 30px;

          
        }
                
        .header {
          display: none;
        }

      @media only screen and (min-width: 768px) {
  /* For desktop: */
        .menu right{width: 75%;}
        .nav_logo left{25%;}
        .menuMobile {display: none;}
      
      .header {
        position: sticky;
        top: 0;        
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #F9A825;
        height: 80px;
      }
      .link:hover{
        color: gray;
        font-style: italic;
      }
  }

      .active{
        border-bottom: 5px solid #444141;
 
      }
      .nav_logo {
        padding: 10px 30px;
        width: 60px;
        height: 60px;
      }
      .menu {  
        padding-right: 30px;
        font-weight: 1000;
          }
      .link {
        color: #444141;
        margin-right: 20px;
        font-family: Orbitron;
        font-size:25px;
        text-decoration: none;
        letter-spacing: 3px;
        padding: 10px;

      }

    `}</style>
    </div>

  )
}

