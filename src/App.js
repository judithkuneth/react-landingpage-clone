/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import { jsx, css } from '@emotion/core';
import logo from './images/logo.png';
import flag from './images/flag.png';
import banner from './images/banner.png';
import board from './images/board.png';
import bugTracker from './images/bugTracker.png';
import eventMarketing from './images/eventMarketing.png';
import hr from './images/hr.png';
import talkShow from './images/talkShow.png';
import radar from './images/radar.png';
import logoSmall from './images/logoSmall.png';
import facebook from './images/facebook.svg';
import linkedin from './images/linkedin.svg';
import twitter from './images/twitter.svg';

const logoStyles = css`
  height: 25px;
  margin: 5px;
`;

const headerStyles = css`
  background-color: #444655;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;

const navStyles = css`
  /* display: center; */
  a {
    margin-right: 20px;
    color: white;
    text-decoration: none;
  }
`;

const flagStyles = css`
  margin-left: 25px;
  margin-right: 25px;
`;

const buttonSignup = css`
  border-radius: 12px;
  border: 2px solid #ffffff;
  height: 25px;
  background-color: transparent;
  color: white;
`;

const firstSectionStyle = css`
  div {
    /* display: flex; */
    align-items: center;
  }
  img {
    width: 55%;
  }
`;

function App() {
  return (
    <>
      <header css={headerStyles}>
        <img src={logo} alt="" css={logoStyles} />
        <nav css={navStyles}>
          <a href="#a">Features</a>
          <a href="#a">Templates</a>
          <a href="#a">Contact Us</a>
          <a href="#a">Blog</a>
          <a href="#a">Pricing</a>
          <button css={buttonSignup}>Sign Up</button>
          <img src={flag} alt="" css={flagStyles} />
        </nav>
      </header>
      <main>
        <section css={firstSectionStyle}>
          <div>
            <h1>Transform Ideas Into Action</h1>
            <p>
              Visualize product roadmaps, project plans, and reports for
              effective team collaboration and putting into action that impact
            </p>
            <input placeholder="Enter your mail" type="email"></input>
            <button>Get Started - Free Forever</button>
            <button>Watch Video/button</button>
            <img src={banner} alt="" />
          </div>
        </section>
        <section>
          <h1>Creative Visualization</h1>
          <p>Different views for different roles and context</p>
          <div>
            <button>Grid</button>
            <button>Timeline</button>
            <button>Board</button>
            <button>Mind Map</button>
            <button>Calendar</button>
            <img src={board} alt="" />
          </div>
        </section>
        <section>
          <h1>Make Your Life Easier</h1>
          <p>Get started fast with suitable templates for every team.</p>

          <a href="#a">
            <img src={talkShow} alt="" />
            <h1>Talk show- Event management</h1>
            <p>
              The Marketing department is responsible for running events.
              Particularly, They mainly organize the seminar and talk show to
              provide knowledge for audiences.
            </p>
          </a>

          <a href="#a">
            <img src={eventMarketing} alt="" />
            <h1>Event Marketing</h1>
            <p>
              Event Marketing has always been considered as an opportunity to
              build relationships, earn the trust of partners or customers and
              generate reputation.
            </p>
          </a>

          <a href="#a">
            <img src={hr} alt="" />
            <h1>Human Resource</h1>
            <p>
              The Human Resource Department has always faced the pressure to do
              recruitment. For the large scale of the company, the labor force
              is the inevitable issue.
            </p>
          </a>

          <a href="#a">
            <img src={bugTracker} alt="" />
            <h1>Bug & Issue Tracker</h1>
            <p>
              When It comes to the IT industry, Bug and Issue are inevitable in
              every project. The team of IT need to determine the solution and
              tool to manage and minimize the potential Bugs and Issues.
            </p>
          </a>

          <a href="#a">View all case studies</a>
        </section>
        <section>
          <h1>Single Place</h1>
          <p>Your love Apps can be integrated into UpDiagram.com</p>
          <img src={radar} alt="" />
        </section>
        <section>
          <h1>Let inspire your team to take action</h1>
          <img src={logoSmall} alt="" />
          <input placeholder="Enter your mail" styles="mail"></input>
          <button>Get Started - Free Forever</button>
        </section>
      </main>
      <footer>
        <section>
          <h1>Products</h1>
          <a href="#a">Templates</a>
          <a href="#a">Pricing</a>
          <h1>Company</h1>
          <a href="#a">About</a>
          <a href="#a">Contact Us</a>
          <h1>Resources</h1>
          <a href="#a">Blog</a>
          <a href="#a">Testimonials</a>
          <h1>Social networks</h1>
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
        </section>
        <section>
          <img src={logo} alt="" />
          <p>Copyrights © 2019 UpDiagram. All rights reserved.</p>
          <a href="#a">Terms of Policy and Service</a>
        </section>
      </footer>
    </>
  );
}

export default App;
