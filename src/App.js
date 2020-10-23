/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import logo from './logo.png';
import flag from './flag.png';
import banner from './banner.png';
import board from './board.png';
import bugTracker from './bugTracker.png';
import eventMarketing from './eventMarketing.png';
import hr from './hr.png';
import talkShow from './talkShow.png';
import radar from './radar.png';
import logoSmall from './logoSmall.png';
import facebook from './facebook.svg';
import linkedin from './linkedin.svg';
import twitter from './twitter.svg';
import calendarMobile from './calendarMobile.png';
import triangle from './triangle.svg';
import triangleOrange from './triangleOrange.svg';

const logoStyles = css`
  height: 25px;
  margin: 5px;
`;

const logoSmallStyles = css`
  height: 150px;
`;

const calendarMobileStyles = css`
  height: 300px;
`;

const headerStyles = css`
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 190px;
  position: fixed;
  top: 0px;
  width: 100%;
`;

const navStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    margin-right: 20px;
    color: #4a4a4a;
    text-decoration: none;
  }
`;

const flagStyles = css`
  margin-left: 25px;
  margin-right: 25px;
`;

const buttonSignup = css`
  border-radius: 16px;
  border: 2px solid #ff6384;
  background-color: transparent;
  color: #ff6384;
  padding: 5px 8px;
  margin: 0px 0px;
`;

const buttonGetStarted = css`
  padding: 10px 20px;
  margin: 10px 0px;
`;

const watchVideoButton = css`
  background: #ffffff;
  color: #009cbd;
  text-decoration: underline;
  padding: 10px 0px;
  font-size: 20px;
  margin-top: 5px;
  margin-left: 0px;
  padding: 0px 0px;
`;
const generalSectionStyle = css`
  margin: 60px 190px;
`;
const firstSectionStyle = css`
  ${generalSectionStyle}
  h1 {
    color: #757575;
  }
  > div {
    display: flex;
    align-items: center;
  }
  img {
    width: 50%;
    margin-top: 10px;
  }
`;

const secondSectionStyle = css`
  text-align: center;
  button {
    border-radius: 18px;
    margin-bottom: 20px;
  }
  background-image: url(${triangle});
  background-repeat: no-repeat;
  background-size: 19%;
  padding-bottom: 100px;
`;

const linkBold = css`
  font-weight: bold;
  font-size: 18px;
`;

const thirdSectionStyle = css`
  ${generalSectionStyle}
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const innerSectionStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  a {
    padding: 10px;
    width: 250px;
    height: 460px;
    text-decoration: none;
    border: 2px solid #9896a4;
    border-radius: 20%;
    box-shadow: 0px 2px 0px 0px #000000;
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    img {
      height: 130px;
      width: 153px;
      align-self: center;
      margin-top: 10px;
    }
    p {
      display: contents;
    }
  }
`;

const fourthSectionStyle = css`
  text-align: center;
  background-image: url(${triangleOrange});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 14%;
`;

const imageRadarStyle = css`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const fifthSectionStyles = css`
  text-align: center;
  /* background-repeat: no-repeat;
  background-size: 25%; */
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(139deg, #3023ae, #c86dd7);
  }
`;

const sixthSectionStyles = css`
  ${generalSectionStyle}
  text-align: center;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
  }
  img {
    margin-left: 10px;
  }
`;

const footerStyles = css`
  ${generalSectionStyle}
  text-align: left;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    text-decoration: none;
    margin-left: 10px;
  }
  p {
    font-size: 16px;
    color: #272727;
    margin-bottom: 0px;
  }
`;

const logoFooterStyles = css`
  height: 28px;
`;

function App() {
  return (
    <>
      <header css={headerStyles}>
        <div>
          <img src={logo} alt="" css={logoStyles} />
        </div>
        <div>
          <nav css={navStyles}>
            <a href="#a">Features</a>
            <a href="#a">Templates</a>
            <a href="#a">Contact Us</a>
            <a href="#a">Blog</a>
            <a href="#a">Pricing</a>
            <button css={buttonSignup}>Sign Up</button>
            <img src={flag} alt="" css={flagStyles} />
          </nav>
        </div>
      </header>
      <main>
        <section css={firstSectionStyle}>
          <div>
            <div>
              <h1>Transform Ideas Into Action</h1>
              <p>
                Visualize product roadmaps, project plans, and reports for
                effective team collaboration and putting into action that impact
              </p>
              <input placeholder="Enter your mail" type="email"></input>
              <button css={buttonGetStarted}>Get Started - Free Forever</button>
              <br />
              <button css={watchVideoButton}>Watch Video</button>
            </div>
            <img src={banner} alt="" />
          </div>
        </section>
        <section css={secondSectionStyle}>
          <h1>Creative Visualization</h1>
          <p>Different views for different roles and context</p>
          <div>
            <button>Grid</button>
            <button>Timeline</button>
            <button>Board</button>
            <button>Mind Map</button>
            <button>Calendar</button>
          </div>
          <img src={board} alt="" />
        </section>

        <section css={thirdSectionStyle}>
          <h1>Make Your Life Easier</h1>
          <p>Get started fast with suitable templates for every team.</p>

          <div css={innerSectionStyle}>
            <a href="#a">
              <img src={talkShow} alt="" />
              <h2>Talk show- Event management</h2>
              <p>
                The Marketing department is responsible for running events.
                Particularly, They mainly organize the seminar and talk show to
                provide knowledge for audiences.
              </p>
            </a>

            <a href="#a">
              <img src={eventMarketing} alt="" />
              <h2>Event Marketing</h2>
              <p>
                Event Marketing has always been considered as an opportunity to
                build relationships, earn the trust of partners or customers and
                generate reputation.
              </p>
            </a>

            <a href="#a">
              <img src={hr} alt="" />
              <h2>Human Resource</h2>
              <p>
                The Human Resource Department has always faced the pressure to
                do recruitment. For the large scale of the company, the labor
                force is the inevitable issue.
              </p>
            </a>

            <a href="#a">
              <img src={bugTracker} alt="" />
              <h2>Bug & Issue Tracker</h2>
              <p>
                When It comes to the IT industry, Bug and Issue are inevitable
                in every project. The team of IT need to determine the solution
                and tool to manage and minimize the potential Bugs and Issues.
              </p>
            </a>
          </div>
          <br />
          <a css={linkBold} href="#a">
            View all case studies
          </a>
        </section>

        <section css={fourthSectionStyle}>
          <h1>Single Place</h1>
          <p>Your love Apps can be integrated into UpDiagram.com</p>
          <img css={imageRadarStyle} src={radar} alt="" />
        </section>

        <section css={fifthSectionStyles}>
          <div>
            <img css={logoSmallStyles} src={logoSmall} alt="" />
            <div>
              <h1>Let inspire your team to take action</h1>
              <input placeholder="Enter your mail" styles="mail"></input>
              <button>Get Started - Free Forever</button>
            </div>
            <img css={calendarMobileStyles} src={calendarMobile} alt="" />
          </div>
        </section>
      </main>
      <footer>
        <section css={sixthSectionStyles}>
          <div>
            <div>
              <h4>Products</h4>
              <a href="#a">Templates</a>
              <br />
              <a href="#a">Pricing</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#a">About</a>
              <br />
              <a href="#a">Contact Us</a>
            </div>
            <div>
              <h4>Resources</h4>
              <a href="#a">Blog</a>
              <br />
              <a href="#a">Testimonials</a>
            </div>
            <div>
              <h4>Social networks</h4>
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </section>
        <section css={footerStyles}>
          <div>
            <img css={logoFooterStyles} src={logo} alt="" />
            <div>
              <p>Copyrights © 2019 UpDiagram. All rights reserved.</p>
              <a href="#a">Terms of Policy and Service</a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
