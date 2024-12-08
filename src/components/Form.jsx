import Button from "./Button";


export default function Form() {
  return (
    <div className="w-3/4 border border-green-400 flex justify-between items-start">
      <form action="" className="w-2/3 flex flex-col justify-center border border-blue-600 gap-2">
        <div className="flex flex-col gap-1">
            <label className="text-sm">Title:</label>
            <input className="bg-slate-400 rounded-sm" type="text" />
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-sm">Project Description:</label>
            <textarea className="bg-slate-400 rounded-sm" type="text" />
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-sm">Project Date:</label>
            <input className="bg-slate-400" type="date" />
        </div>
        <div>
            <Button>Save</Button>
            <Button color="red" >Cancel</Button>
        </div>
      </form>
    </div>
  )
}
