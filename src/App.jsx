/* eslint-disable no-undef */
// import Form from "./components/Form"
import Home from "./components/Home"
import { useState } from "react"
import ProjectDetails from "./components/ProjectDetails"
import Sidebar from "./components/Sidebar"
import { ProjectContextProvier } from "./context/ProjectContext"


function App() {

  const [projects, setProjects] = useState({});

  const addProject = () => {

  }

  return (
    <ProjectContextProvier value={{projects, addProject, deleteProject, addTasks, deleteTasks}}>
      <div className="h-screen flex gap-6 items-center">
        <Sidebar projects={projects}/>
        <div className="h-3/4 w-3/4">
          <Home />
        </div>
      </div>
    </ProjectContextProvier>
  )
}

export default App
