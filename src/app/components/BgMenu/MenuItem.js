import React from 'react'

export default class MenuItems extends React.Component {
    state = {
        hover: false
    }
    handleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    render(){
    return (
        <div>
            <div className="menu_item">
                <div
                    className="items"
                    onMouseEnter={ this.handleHover }
                    onMouseLeave={ this.handleHover }
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </div>
            </div>
            <style jsx>
            {`
                .menu_item {
                    animation: 1s appear forwards;
                }
                .items{
                    font-size: 25px;
                    padding: 1rem 0;
                    margin: 0 5%
                    cursor: pointer;
                    color: ${this.state.hover ? 'red':'#444141'};
                    animation: 0.5s slideIn forwards;  
                    transition: transform .2s;
                    text-align: center;
                    
                }
                .items:hover {
                    transform: scale(1.5);
                }
                
                
                `}
            </style>
        </div>
    )
}
}
