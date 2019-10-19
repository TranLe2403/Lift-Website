import React from 'react'

export default class Menu extends React.Component{

render(){
    return (
        <React.Fragment>
            <div className="menu_list">
                {
                    this.props.open ? <div className="list">{this.props.children}</div> : null
                }
            </div>
            <style jsx>
                {`
                .menu_list{
                    margin-top: 23px;;
                    position: absolute;
                    right: 0;
                    height: ${this.props.open ? '100vh' : 0};
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    background-color: #F1EBEB;
                    opacity: 0.95;
                    color: black;
                    transition: height 0.3s ease;
                    z-index: 2;
                    align-items: center;
                    }
                .list {
                    padding: 30px;
                    font-family: Orbitron;
                    letter-spacing: 3px;
                }
                `}
            </style>
        </React.Fragment>
    )
}
}