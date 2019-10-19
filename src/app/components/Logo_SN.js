import React from 'react'




export default function Logo(props) {
    return (
        <div>
            <img src={props.src} alt={props.alt} className="logo_SN" />
            <style jsx>
                {`
                    .logo_SN{
                        width: 30px; 
                        height: 30px;
                    }
                    @media screen and (min-width: 768px) {
  /* For desktop: */
                    .logo_SN { 
                        padding: 10px;
                        width: 50px;
                        height: 50px;
                        
                    }
                    }
                `}
            </style>
        </div>
    );
}