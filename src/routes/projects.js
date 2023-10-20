import { Badge, Card, Col, Row, Stack, Button } from 'react-bootstrap';
import '../App.css';
import projectsJSON from '../utils/projectsJSON';
import { redirect, Link } from 'react-router-dom';

function getProject(projectID){
  localStorage.setItem('pID',projectID);
}

function Projects() {
  const projectsCardList = projectsJSON.map(project =>
    <Col>
      <Card bg='dark' text='white'>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" />
        <Card.Body>
          <Card.Header>{project.projectTitle}</Card.Header>
          <Card.Text>{project.projectDescShort}</Card.Text>
        </Card.Body>
        <Stack direction="horizontal" gap={2} style={{ display: "flex", justifyContent: "center" }}>{project.projectSkills.map(skill =>
          <Badge bg="secondary">{skill}</Badge>)}
        </Stack>
        <Card.Link href='#singleProject' onClick={() => {getProject(project.projectID)}}>Learn More...</Card.Link>
      </Card>
      <br />
    </Col>);


  return (
    <div className="App">
      <header className="App-header" style={{ padding: 10 }}>
        <Row xs={1} md={3}>{projectsCardList}</Row>
      </header>
      <Button><Link to="/hobbies" style={{color:"white"}}>Interested in my other projects? Take a look here</Link></Button>
    </div>
  );
}

export default Projects;
