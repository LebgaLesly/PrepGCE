

const Modal = ({open, onClose}) => {
  if (!open) return null

  return (
    <>
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black-rgba z-50"/>
    <div className=' top-12  fixed z-50 bg-sky-100  p-4 sm:left-1/3 sm:top-72'>
      <h1 className='font-extrabold text-center pb-5 text-2xl'>Study Box</h1>
        <form action="">
          <div className='flex gap-2.5 pb-2'>
            <label htmlFor="date" className='font-bold'>Choose a Date:</label>
            <input type="date" id="date"  />
          </div>
          <div className='flex gap-2.5 pb-2'>
            <label htmlFor="class" className='font-bold'>Enter a Class:</label>
            <input type="text" placeholder='Enter a Class' className="pl-2"/>
          </div>

          <div className='flex gap-2.5 pb-5'>
            <label htmlFor="addsubject" className='font-bold'>Add Subject:</label>
            <input type="text" placeholder='Enter a Subject' className="pl-2"/>
          </div>

          <div className="pb-5">
            <label htmlFor="task" className='font-bold
             '>Enter Task</label>
            <textarea name="des" placeholder='Enter Daily Task' cols="30" rows="10"className="pl-2 pt-4 relative w-full" ></textarea>
          </div>

          <div className="flex justify-around">
          <button onClick={onClose} className=' bg-cyan-400 py-2 px-6 rounded-3xl font-bold hover:bg-orange-400'>Cancel</button>
          <button onClick={onClose} className=" bg-cyan-400 py-2 px-6 rounded-3xl font-bold hover:bg-orange-400">Create</button>
          </div>
         
        </form>
    </div>

    </>
  )
}

export default Modal
