import '../App.css';
import projectsJSON from '../utils/projectsJSON';

function SingleProject() {
  const projectID = localStorage.getItem("pID");

    return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World! This is the {projectsJSON[projectID].projectTitle} Page
        </p>
      </header>
    </div>
  );
}

export default SingleProject;
