import React from 'react'
import Logo from '../components/Logo_SN.js'

export default function Person(props) {

    return (
        <div>
            <div className="person_info">
                <div className="block1">
                    <img src={props.src} alt={props.alt} className="avatar" />
                    <h2 className="name">{props.name}</h2>
                </div>
                
                <div className="logo_network">

                    <a className="logo" href={props.fb} target="_blank">
                        <Logo src="https://cutt.ly/IwpgIvr" alt="fb" />
                    </a>

                    <a className="logo" href={props.github} target="_blank">
                        <Logo src="https://cutt.ly/nwpgU6A" alt="github" />
                    </a>

                    <a className="logo" href={props.gmail} target="_blank">
                        <Logo src="https://cutt.ly/AwpgtSt" alt="gmail" />
                    </a>

                </div>
                <p className="desc">
                    Ut enim ad minim venim, labos nisi ut aliquip ex ea commo consequat.
                </p>
            </div>
            <style jsx>
                {`
        
        .block1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            justify-self: center;
            align-self: center;
        }
        .person_info{
            width: 100%;
            height: 35vh;
            background-color: ${props.background};
            display: grid;
            grid-template-columns: 30% 10% 50%;
            
            
        }
        .avatar{
            width: 80%;
            height: 60%;
            border-radius: 50%;
            padding: 10px 0;

        }
        .name {
          font-family: 'Orbitron';
          font-size: 14px;
          letter-spacing: 7px;
          color: #FFFFFF

        }
        .desc{
          font-family: 'Montserrat';
          font-size: 15px;
          width: 80%;
          color: #FFFFFF;
          letter-spacing: 3px;
          text-align: justify;
          justify-self: center;
          align-self: center;
        }
        .logo_network{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            align-self: center;
        }
        @media screen and (min-width: 768px) {
  /* For desktop: */
        .block1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            align-self: end;
        }
        .person_info{
            width: 100%;
            height: 100%;
            background-color: ${props.background};
            display: grid;
            grid-template-rows: auto 100px auto;  
            grid-template-columns: 100%;
            
        }
        .avatar{
            width: 65%;
            height: 50%;
            border-radius: 50%;
            padding: 10px 0;

        }
        .name {
          font-family: 'Orbitron';
          font-size: 25px;
          letter-spacing: 7px;
          color: #FFFFFF

        }
        .desc{
          font-family: 'Montserrat';
          font-size: 20px;
          width: 80%;
          color: #FFFFFF;
          letter-spacing: 3px;
          text-align: justify;
          align-self: start;
          margin-top: 0;
          margin-bottom: 30px; 
        }
        .logo_network{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            align-self: start;
        }
    }
        `}
            </style>
        </div>

    );
}