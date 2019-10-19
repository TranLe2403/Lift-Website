import Header from './Header'
import React from 'react'


export default function Layout(props) {
  return (
    <div>
      <div className="nav">
        <Header />
          {props.children}
      </div>

      <style jsx>{`
        .nav{
          height: 100vh;
          display: flex;
          flex-direction: column;
        }  
      `}
      </style>
    </div>
  )
}
