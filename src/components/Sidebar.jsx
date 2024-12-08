/* eslint-disable react/prop-types */

import Button from "./Button";
import ProjectList from "./ProjectList";

export default function Sidebar({projects}) {
  return (
    <div className="w-1/4 h-3/4 bg-stone-950 flex items-center flex-col rounded-r-lg">
        <div className="w-full flex flex-col mt-8 gap-6">
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-xl font-extrabold text-white">YOUR PROJECT</h1>
                <Button onBtnChange>+Add Project</Button>
            </div>
            <div>
                {projects.lenght > 0 ? <ProjectList projects={projects}/> : ""}
            </div>
        </div>
    </div>
  )
}
