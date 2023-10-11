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

//react-bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky='top'>
        <Container>
          <Navbar.Brand href="#">Winnie Chow</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes></>
  );
}