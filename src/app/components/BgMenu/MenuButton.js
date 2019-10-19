  import React from 'react'

  export default class MenuButton extends React.Component {
    state = {
      colorButton: this.props.color ? this.props.color : '#F1EBEB'
    }
    render(){
    return (
        <React.Fragment>
           <div className="button" onClick = {this.props.onClick}>
                <div className ="line top"></div>       
                <div className="line middle"/>
                <div className="line bottom"/>
            </div> 
           <style jsx>
            {`
                .button {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    padding: 4px;
                    }
                .line {
                    height: 2px;
                    width: 35px;
                    background-color: ${this.state.colorButton}; 
                    transition: all 0.2s ease;
                }
                .top {
                    transform: ${this.props.open ? 'rotate(45deg)' : 'none'};
                    transform-origin: top left;
                    margin-bottom: 10px;
                }
                .middle {
                    opacity: ${this.props.open ? 0 : 1};
                    transform: ${this.props.open ? 'translateX(-16)' : 'none'};
                }
                .bottom {
                    transform: ${this.props.open ? 'translateX(-1px) rotate(-45deg)' : 'none'};
                    transform-origin: top left;
                    margin-top: 10px;
                }
                `}
            </style>
        </React.Fragment>
    )
  }
}