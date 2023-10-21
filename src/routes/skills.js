import '../App.css';
import '../styles/skillbar.css';
import { Card, CardGroup, Image } from 'react-bootstrap';
import { IoLogoGithub, IoPeopleCircleSharp, IoLogoReact } from "react-icons/io5";
import { SiCsharp, SiPython, SiVisualstudio, SiPhp, SiXamarin, SiMicrosoftazure, SiMicrosoftoffice } from 'react-icons/si';
import { GiPuzzle, GiPencilBrush, GiTeamIdea, GiGears } from "react-icons/gi";
import { FaArrowsSplitUpAndLeft } from "react-icons/fa6";
function Skills() {
  return (
    <body>
      <div>
        <h1>Take a look at my stats!</h1>
        <p>Equipped skills (Displayed in a character stat format)</p>

        <div id='skillStats'>
          <div><Image src='https://medibangpaint.com/en/wp-content/uploads/2020/08/IMG_4534-768x768.jpg' style={{width:"100%", height:"auto"}} /></div>
          <div id="skillsContainer" style={{ width: '50%', paddingRight: 10 }}>
            <p>HTML</p>
            <div class="skillContainer">
              <div class="skills html">95%</div>
            </div>

            <p>CSS</p>
            <div class="skillContainer">
              <div class="skills css">90%</div>
            </div>

            <p>JavaScript</p>
            <div class="skillContainer">
              <div class="skills js">80%</div>
            </div>

            <p>React & React Native</p>
            <div class="skillContainer">
              <div class="skills react">80%</div>
            </div>

            <p>Java</p>
            <div class="skillContainer">
              <div class="skills java">75%</div>
            </div>

            <p>MySQL</p>
            <div class="skillContainer">
              <div class="skills sql">60%</div>
            </div>

            <p>GitHub</p>
            <div class="skillContainer">
              <div class="skills github">75%</div>
            </div>

            <p>Amazon Web Services</p>
            <div class="skillContainer">
              <div class="skills aws">50%</div>
            </div>
          </div>
        </div>

        <header className="App-header">
        <h1>My Top 3 Skills</h1>
        <CardGroup>
          <Card
            bg='dark'
            text='white'
            border='light'
            style={{ width: '18rem' }}>
            <IoLogoGithub size='large' />
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>#1 GitHub</Card.Title>
            </Card.Body>
          </Card>

          <Card
            bg='dark'
            text='white'
            border='light'
            style={{ width: '18rem' }}>
            <IoPeopleCircleSharp size='large' />
            <Card.Body>
              <Card.Title>#2 Agile</Card.Title>
            </Card.Body>
          </Card>

          <Card
            bg='dark'
            text='white'
            border='light'
            style={{ width: '18rem' }}>
            <IoLogoReact size='large' />
            <Card.Body>
              <Card.Title>#3 React</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </header>

        <p>Additional Skills</p>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <SiCsharp size={100} />
          <SiPython size={100} />
          <SiVisualstudio size={100} />
          <SiPhp size={100} />
          <SiXamarin size={100} />
          <SiMicrosoftazure size={100} />
          <SiMicrosoftoffice size={100} />
        </div>
        <p>Soft skills</p>

        <div id='softSkills' style={{ display: 'flex', justifyContent: 'space-around' }}>
          <GiPuzzle size={100} /> {/*Problem Solver*/}
          <GiPencilBrush size={100} /> {/*Creative*/}
          <GiTeamIdea size={100} /> {/*Teamwork*/}
          <GiGears size={100} /> {/*Self-Motivated*/}
          <FaArrowsSplitUpAndLeft size={100} /> {/*Adaptible*/}
        </div>
      </div>
    </body>
  );
}

export default Skills;
