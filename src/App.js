import './App.css';
import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

//page imports
import Home from './routes/home';
import Skills from './routes/skills';
import Projects from './routes/projects';
import Contact from './routes/contact';
import SingleProject from './routes/singleProject';
import Hobbies from './routes/hobbies';

//react-bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function App() {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar collapseOnSelect expand="sm" bg="dark" data-bs-theme="dark" sticky='top'>
          <Navbar.Brand href="#">Winnie Chow</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact Me</Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleProject" element={<SingleProject />} />
        </Routes>
      </body>
    </html>
  );
}