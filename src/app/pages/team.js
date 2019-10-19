import Layout from '../components/MyLayout.js'
import Person from '../components/Person.js'




export default function Team() {

	return (
		<Layout>
			<div className="team_page">
				<div className="title_bar">
					<h1 className="title">OUR TEAM</h1>
				</div>
				<div className="bg">
					<div className="team">
						<Person background="#040404" name="TRAN LE" src="https://cutt.ly/Owpgbw5" alt="tranle" fb="https://www.facebook.com/tran2403" github="https://github.com/TranLe2403" gmail="mailto:tratran.0324@gmail.com" />
						<Person background="#1B1618" name="VU DAO" src="https://cutt.ly/TwpgbcE" alt="vudao" fb="https://www.facebook.com/anhvudao17" github="https://github.com/greengrass17" gmail="mailto:anhvudao17@gmail.com" />
						<Person background="#040404" name="QUAN DAO" src="https://cutt.ly/Xwpgvdt" alt="quandao" fb="https://www.facebook.com/dendimaniac" github="https://github.com/dendimaniac" gmail="mailto:daq30899@gmail.com" />

					</div>
				</div>
			</div>

			<style jsx>
				{`
			
			.team_page{
				flex-grow: 1;
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
      		.team {
				display: flex;
				flex-direction: column;  
				align-items: stretch;
				background-color: #040404;
				opacity: 0.85; 	
				height: 100%;
				  
			}
			.bg {
				background-color: #C4C4C4;
				opacity: 0.85;
				height: calc(100% - 60px);
			}
			@media screen and (min-width: 768px) {
  /* For desktop: */
  			.title_bar {
            	height: 100px;
        	}
        	.title {
        		font-size: 60px;
        	}
			.team {
				flex-direction: row;
			}
			.bg {
				height: calc(100% - 80px);

			}
      }
		
      			`}
			</style>
		</Layout>
	);
}
