import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faAngular, faBootstrap, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './component/navigationBar';
import Projects from './component/projects';
import sqlIcon from './img/SQL.jpg';
import typescriptLogo from './img/typescript.jpg';
import nextLogo from './img/nextjs.png';
import cSharp from './img/c.jpg';
import netCore from './img/netCore.png';
import visualStudio from './img/vStudio.png';
import vsCode from './img/vscode.png';
import aspNet from './img/AspNetImg.jpg';
import visualBasic from './img/VisualbasicImg.svg';
import Contact from './component/contact';
import Footer from './component/footer';

const App = () => {

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <NavigationBar />
      <div className="landing">
        <div className="home_wrap">
          <div className="home_inner"></div>
        </div>
      </div>
      <div className="caption center_block">
        <h3>Hello, I'm John Neil</h3>
        <h3>Software Developer</h3>
      </div>
      <div className="container-fluid d-flex justify-content-center" id='about'>
        <div className="row welcome">
          <div className="col-12 p-3">
            <h1><strong>About Me</strong></h1>
            <h4>
              <i>
                <strong>I'm a product of self-motivated and a dreamer</strong>
              </i>
            </h4>
          </div>
          <hr />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row px-5">
          <div className="col-md-12 aboutMeDescription">
            <p>I'm self-motivated, ambitious, and always eager to learn. I take on challenges head-on and get things done, no matter how familiar they are.</p>
            <p>I thrive in a team environment and see myself as an asset for both the team's success and my own. I'm passionate about what I do and constantly strive to improve. Let's achieve great things together!</p>
          </div>
        </div>
      </div>

      {/* <!--- Skills Section --> */}
      <div className="container-fluid d-flex justify-content-center" id="skills">
        <div className="row welcome text-center">
          <div className="col-12 p-3">
            <h1><strong>Skills</strong></h1>
          </div>
          <hr />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon className="fa-html5" icon={faHtml5} />
            <h4>HTML5</h4>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon className="fa-css3-alt" icon={faCss3} />
            <h4>CSS3</h4>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon className="fa-js" icon={faJs} />
            <h4>JavaScript</h4>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon className="fa-react" icon={faReact} />
            <h4>React JS</h4>
          </div>
          <div className="col-sx-12 col-sm-6 col-md-3">
            <img className="icon" src={typescriptLogo} alt="ypescript" />
            <h4>Typescript</h4>
          </div>
          <div className="col-sx-12 col-sm-6 col-md-3">
            <img className="icon" src={nextLogo} alt="NextJs" />
            <h4>Next JS</h4>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon className="fa-html5" icon={faAngular} />
            <h4>Angular</h4>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <img className="icon" src={cSharp} alt="C#" />
            <h4>C#</h4>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <img className="icon" src={netCore} alt="netCore" />
            <h4>.NET CORE</h4>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon className="fa-bold" icon={faBootstrap} />
            <h4>Bootstrap</h4>
          </div>
          <div className="col-sx-12 col-sm-6 col-md-3">
            <img className="icon" src={sqlIcon} alt="Sql" />
            <h4>SQL Server</h4>
          </div>
          <div className="col-sx-12 col-sm-6 col-md-3">
            <img className="icon" src={aspNet} alt="ASP.NET" />
            <h4>ASP.NET</h4>
          </div>
          <div className="col-sx-12 col-sm-6 col-md-3">
            <img className="icon" src={visualBasic} alt="Visual Basic" />
            <h4>Visual Basic</h4>
          </div>
          <div className="col-sx-12 col-sm-6 col-md-3">
            <img className="icon" src={visualStudio} alt="Visual Studio" />
            <h4>Visual Studio</h4>
          </div>
          <div className="col-sx-12 col-sm-6 col-md-3">
            <img className="icon" src={vsCode} alt="ASP.NET" />
            <h4>VS Code</h4>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <FontAwesomeIcon className="fa-spin" icon={faSpinner} />
            <h4>Coming Soon...</h4>
          </div>
          <hr className='welcome my-4' />
        </div>
      </div>

      {/* <!-- Projects --> */}
      <div className="container-fluid d-flex justify-content-center" id="projects">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1>Projects</h1>
          </div>
          <hr />
        </div>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-secondary" data-toggle="modal" data-target=".bd-example-modal-lg" onClick={() => setModalShow(true)}>View Projects</button>
        <hr />
      </div>
      <Projects show={modalShow} onHide={() => setModalShow(false)} />

      {/* <!--- Fixed background --> */}
      <figure>
        <div className="fixed-wrap">
          <div className="fixed">
          </div>
        </div>
      </figure>

      {/* <!--- Contact --> */}
      <div className="container-fluid d-flex justify-content-center" id="contact">
        <div className="row welcome text-center">
          <h1>Contact</h1>
          <div className="col-12">
          </div>
          <hr />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  )

}

export default App;