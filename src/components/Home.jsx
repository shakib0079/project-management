
import Button from './Button'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-6'>
      <img className='w-14' src="List.png" alt="" />
      <div className='flex flex-col items-center'>
        <h3 className='font-bold'>No Project Selected</h3>
        <p className='text-sm text-stone-500'>Select project or create a new project</p>
      </div>
      <Button >Create new project</Button>
    </div>
  )
}
