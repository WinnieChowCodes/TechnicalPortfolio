import '../App.css';
import projectsJSON from '../utils/projectsJSON';

function Projects() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {projectsJSON[0].projectTitle}
        </p>
      </header>
    </div>
  );
}

export default Projects;
