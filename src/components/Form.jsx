import Button from "./Button";


export default function Form() {
  return (
    <div className="h-3/4 w-full flex justify-center items-center">
  <div className="w-2/3 bg-white">
    <form action="" className="w-full p-8 flex flex-col gap-4">
      <div className="flex flex-col">
        <label>Title: </label>
        <input type="text" className="bg-slate-200 h-12 rounded-sm" />
      </div>
      <div className="flex flex-col">
        <label>Project Description: </label>
        <textarea type="text" className="bg-slate-200 h-12 rounded-sm min-h-36"></textarea>
      </div>
      <div className="flex flex-col">
        <label>Date: </label>
        <input type="date" className="bg-slate-200 h-12 rounded-sm" />
      </div>
      <div className="flex gap-4">
        <Button>Save</Button>
        <Button>Cancel</Button>
      </div>
    </form>
  </div>
</div>
  )
}
