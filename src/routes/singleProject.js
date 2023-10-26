import '../App.css';
import projectsJSON from '../utils/projectsJSON';

function SingleProject() {
  const projectID = localStorage.getItem("pID");

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {projectsJSON[projectID].projectTitle}
        </h1>
        <p>{projectsJSON[projectID].projectDescShort}</p>
      </header>
      {projectsJSON[projectID].projectDescLong}
    </div>
  );
}

export default SingleProject;
