import Layout from '../components/MyLayout.js'
import Img from '../components/Logo'
import Logo_Contact from '../components/Contact'
import React from 'react'

export default function Contact() {
    return (
        <Layout>
            <div className="contact_page">
                <div className="title_bar">
                    <h1 className="title">CONTACT</h1>
                </div>
                <div className="bg_layer">
                    <div className="contact">
                        <div className="logo_contact">
                            <Logo_Contact />
                        </div>
                        <div className="logo_part">
                            <div className="des_logo">
                                <Img />
                            </div>
                            <h1 className="logo_name">LIFT STUDIO</h1>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                .bg_layer{
                    height: calc(100% - 100px);
                }
                .contact_page{
                    flex-grow: 1;
                }
                .contact::before{
                    content: " ";
                    background: linear-gradient(to right, rgba(4,4,4,0.85), rgba(4,4,4,0.85)), url("https://cutt.ly/LwpgFq9") ;
                    background-size: 100% 100%;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: -1;
                    
                }

            .contact {
                display: flex;
                position: relative;
                z-index: 1;
                height: 100%;
                align-items: center;
                flex-direction: column;
            }
          .title_bar {
            height: 65px;
            background-color: #F9A825;
            text-align: center;

          }
          .title {
            margin-top: 20px;
            font-family: 'Orbitron';
            text-align: center;
            font-size: 26px;
            border-bottom: 3px solid #444141;
            letter-spacing: 5px;
            color: #444141;
            display: inline-block;

            
          }
            .logo_name{
                font-family: 'Orbitron';
                font-size: 26px;
                letter-spacing: 2px;
                color: white;
                width:100%;
                text-align: center;
                line-height: 30px;
            }
            .des_logo {
                width: 70%;                
            }
            .logo_contact {
                width: 100%;
                height: 50%;
            }
            .logo_part{
                display: flex;
                align-items: center;
                flex-direction: column;
                z-index: 1;
                width: 50%;

            }
        @media screen and (min-width: 768px) and (max-width: 1559px) {
  /* For desktop: */
        .contact {
            flex-direction: row;
        }
        .logo_part {
            padding: 100px 10px 100px 40px;

        }
        .logo_name{
            font-size: 45px;
            letter-spacing: 7px;
            line-height: 50px;
            width: 80%;
            }
        .logo_contact {
            width: 50%;
            display: flex;
            align-items: center;
        }
        .des_logo {
            width: 50%;                
        }
        .title { font-size: 60px;}
        .title_bar {height: 100px;}
      }
      @media screen and (min-width: 1560px) {
        .contact {
            flex-direction: row;
        }
        .logo_part {
            padding: 100px 10px 100px 40px;

        }
        .logo_name{
            font-size: 50px;
            letter-spacing: 12px;
            line-height: 55px;
            width: 100%;
            }
        .logo_contact {
            width: 50%;
            display: flex;
            align-items: center;
        }
        .des_logo {
            width: 45%;                
        }
        .title { font-size: 60px;}
        .title_bar {height: 100px;}
}
        `}
            </style>
        </Layout>
    );
}
