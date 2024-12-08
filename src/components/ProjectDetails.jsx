import TaskList from "./TaskList";

export default function ProjectDetails() {
  return (
    <div className="h-3/4 w-full text-black flex items-start justify-start">
        <div className="bg-white w-4/5 p-8 flex flex-col gap-8">
        <div className="flex justify-between items-start">
        <div>
            <h1>Learning React</h1>
            <p>Dec 27, 2024</p>
        </div>
        <button className="font-bold">Delete Task</button>
        </div>
        <div className="flex flex-col gap-4">
            <p>Learn react from group up</p>
            <p>Start with the basic finish with the advanced knoledge</p>
        </div>
        <div className="w-full border border-gray-600"></div>
        <TaskList />
        </div>
    </div>
  )
}
