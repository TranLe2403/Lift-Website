import React from 'react'
export default function Des(props) {
    return (
      <div>
        <div className="content">
          <h2 className="game_title">{props.game}</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <style jsx>
        {`
        
        .game_title {
          font-family: 'Orbitron';
          font-size: 24px;
          letter-spacing: 1.5px;
          text-align: center;
        }
        .desc{
          font-family: 'Montserrat';
          font-size: 14px;
          width: 100%;
          height: 100%;
          letter-spacing: 1px;
          text-align: justify;
        }
        @media screen and (min-width: 768px) {
  /* For desktop: */
        .desc {
          font-size: 30px;
          letter-spacing: 2px;

        }
        .game_title {
          font-size: 40px;
          letter-spacing: 3px;
          text-align: left;
        }
      }
    
        `}
      </style>


        
      </div>
  
    );
  }