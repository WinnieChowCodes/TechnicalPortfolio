import '../App.css';
import { Image } from 'react-bootstrap';

function Home() {
  return (
    <body>
          <div className="App">
      <header className="App-header">
        <Image src='https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg' roundedCircle width={250} height={250}/>
        <p>
          A nerd who somehow got a hold of a computer
        </p>
        <p style={{fontSize:17}}>Hello, I'm Winnie! I am a software engineer who specialises in creating modern web applications utilising REST APIs.</p>
      </header>
    </div>
    </body>
  );
}

export default Home;
