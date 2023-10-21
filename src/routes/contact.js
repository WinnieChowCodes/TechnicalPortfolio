import '../App.css';
import { Button, Form, Alert } from 'react-bootstrap';
import { SiDevpost, SiGithub, SiLinkedin } from 'react-icons/si';
function Contact() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Feel free to get in touch!</h1>
        <p>Email: WinnieChow606@outlook.com</p>
        <p>Phone number: XXXX XXXX X805</p>

        <div>
          <SiGithub size={100}/>{" "}
          <SiLinkedin size={100}/>{" "}
          <SiDevpost size={100}/>{" "}
        </div>

      </header>
      <div>
        <h2>Send me a message!</h2>
        <Alert variant="danger">
          Whoops! Seems like this form is not available! Try again later
        </Alert>
        <Form style={{textAlign:"left", paddingLeft:"25%", paddingRight:"25%"}}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="secondary">Send</Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
