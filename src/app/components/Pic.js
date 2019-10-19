import React from 'react'

export default function Pic (props) {
    return (
        <div>
            <img src={props.src} alt={props.alt} className="gamePic" />
            <style jsx>
                {`
                    .gamePic{
                        width: 133px;
                        height: 156px;        
                        padding-bottom: 10px;            
                    }
                    @media screen and (min-width: 768px) {
  /* For desktop: */
                    .gamePic {
                        width: 100%;
                        height: 100%;
                        padding-bottom: 0;
                    }
      }
                `}
            </style>
        </div>

    );
}
