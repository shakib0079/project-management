
export default function TaskList() {
  return (
    <div className="bg-white w-4/5 flex flex-col gap-8">
    <h1>Tasks</h1>
    <div className="flex gap-8">
      <input type="text" className="bg-gray-200 w-2/4" />
      <button className="font-bold">Add Task</button>
    </div>
    <ul className="w-2/4 bg-gray-200 p-2 flex flex-col gap-2">
      <li className="bg-gray-300 p-2">Task One</li>
      <li className="bg-gray-300 p-2">Task two</li>
    </ul>
  </div>
  )
}
