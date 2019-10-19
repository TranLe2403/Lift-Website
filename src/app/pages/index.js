import Layout from '../components/MyLayout.js'
import Img from '../components/Logo'
import React from 'react'
/*  Responsive by JS
import WindowDimensionsProvider from '../components/WindowDimensionsProvider'
import   Content from '../components/Content'



function App (){
  return (
    <WindowDimensionsProvider>  
    <div className="App">
      <Content />
    </div>
  </WindowDimensionsProvider>
  );
}*/

export default function Blog() {
  return (
    <Layout>
      <div className="bg">
        <div className="home">
          <div className="logo_part">
            <div className="des_logo">
              <Img />
            </div>
            <h1 className="title">LIFT STUDIO</h1>
          </div>
          <p className="description">Ut enim ad minim veniam,laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <style jsx>
        {`
        .bg {
          flex-grow: 1;
        }




        .des_logo {
          width: 70%;
          height: 100%;
          position: relative;
          padding-bottom: 10px;
        }
        .des_logo::after {
          z-index: 1;
          opacity: 1; 
          position: absolute;
        }
      .home::before {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          content: " ";
          background-image: linear-gradient(to right, rgba(4,4,4,0.85), rgba(4,4,4,0.85)),
                            url("https://cutt.ly/EwpgjBY"), 
                            url("https://cutt.ly/4wpgxGI"),
                            url("https://cutt.ly/2wpgcwu"),
                            url("https://cutt.ly/zwpgcDs");
          background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
          background-position: top left, top right, bottom left, bottom right;
          background-size: 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
        }
      .title {
          font-family: 'Orbitron';
          font-size:22px;
          letter-spacing: 2px;
          color: white;
          width:100%;
          text-align: center;
          line-height: 30px;

        }
        .description {
          font-family: 'Montserrat';
          font-size: 17px;
          color: white;
          width: 50%;
          text-align: center;
          letter-spacing: 2px;
          text-align: justify;
          line-height: 25px;
        }
        .home {
          display: flex;
          align-items: center;
          flex-direction: column; 
          position: relative;
          z-index: 1;
          height: 100%;
          justify-content: center;
          
        }
        .logo_part {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 55%;

        }



        @media screen and (min-width: 768px) and (max-width: 1559px) {
  /* For desktop: */
        
        .des_logo {
          width: 50%;
        }
        .title {
          font-size: 45px;
          letter-spacing: 7px;
          width: 60%;
          line-height: 55px;

        }
        .description{ 
          font-size: 20px;
          letter-spacing: 5px;
          width: 50%;
          }
          .home::before {
            background-position: 0 0, 33% 0, 66.5% 0, 100% 0;
            background-size: 100%, 25%, 25%, 25%, 25%;
          }
        
      }
      @media screen and (min-width: 1560px) {
        .title {
          font-size: 50px;
          letter-spacing: 12px;
          line-height: 55px;
          width: 60%;

        }
        .description{ 
          font-size: 20px;
          letter-spacing: 5px;
          width: 50%;
          }
          .home::before {
            background-position: 0 0, 33% 0, 66.5% 0, 100% 0;
            background-size: 100%, 25%, 25%, 25%, 25%;
          }
        .des_logo {
            width: 45%;                
        }
}
        `}
      </style>

    </Layout>
  );
}
