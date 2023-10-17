import '../App.css';
import { Form } from 'react-bootstrap';
function Contact() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World! This is the Contact :)
        </p>
        <ul>
          <li>Offer Email and Phone number</li>
          <li>Social Media Links</li>
          <li>Contact Form (email, Name, Message)</li>
        </ul>
      </header>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type='email'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
