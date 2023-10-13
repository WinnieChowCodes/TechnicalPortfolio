import '../App.css';
import { Button, Image } from 'react-bootstrap';

function Home() {
  return (
    <body>
          <div className="App">
      <header className="App-header">
        <Image src='https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg' roundedCircle width={150} height={150}/>
        <p>
          A nerd who somehow got a hold of a computer
        </p>
        <p style={{fontSize:17}}>Hello, I'm Winnie! I am a software engineer and full stack developer who specialises in creating modern web applications utilising REST APIs.</p>
        <Button variant='primary'><b>Contact Me</b></Button>
      </header>
      <div className='About-Me'>
        <p>Ever since I was a child, I have had an insatiable curiosity about how things work. 
          I have always enjoyed creating things and I enjoy writing code and building applications; 
          recently during my studies, I learned about RESTful APIs and have been hooked on making apps 
          that utilise APIs. </p>
        <p>Currently, I spend my days working on my portfolio and building my resume.</p>

        <p>When I'm not at my computer, I enjoy passing the time by illustrating, learning a new craft,
          teaching myself a new recipe or spending time with my lovely partner :)
        </p>
      </div>
      <p>personal links (Github, DevPost,Linked In)</p>
    </div>
    </body>
  );
}

export default Home;
