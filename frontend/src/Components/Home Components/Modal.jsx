import { useState } from 'react'
import { useStudyBoxContext } from '../../Hooks/useStudyBoxContext';

const Modal = ({ open, onClose }) => {
  const { dispatch } = useStudyBoxContext()
  const [date, setDate] = useState('');
  const [class1, setClass1] = useState('');
  const [subject, setSubject] = useState('');
  const [task, setTask] = useState('');
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const studybox = {date, class1, subject, task}

    const response = await fetch('/study/studybox', {
      method: 'POST',
      body: JSON.stringify(studybox),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setDate('')
      setClass1('')
      setSubject('')
      setTask('')
      setError('')
      dispatch({type: 'CREATE_STUDYBOX', payload: json})
      console.log('new studybox added', json)
    }
  }

  if (!open) return null;
  return(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black-rgba z-50" />
      <div className=" top-12  fixed z-50 bg-sky-100  p-4 sm:left-1/3 sm:top-72">
        <h1 className="font-extrabold text-center pb-5 text-2xl">Study Box</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex gap-2.5 pb-2">
            <label htmlFor="date" className="font-bold">
              Choose a Date:
            </label>
            <input
              type="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          <div className="flex gap-2.5 pb-2">
            <label htmlFor="class" className="font-bold">
              Enter a Class:
            </label>
            <input
              type="text"
              placeholder="Enter a Class"
              className="pl-2"
              onChange={(e) => setClass1(e.target.value)}
              value={class1}
            />
          </div>

          <div className="flex gap-2.5 pb-5">
            <label htmlFor="addsubject" className="font-bold">
              Add Subject:
            </label>
            <input
              type="text"
              placeholder="Enter a Subject"
              className="pl-2"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>

          <div className="pb-5">
            <label
              htmlFor="task"
              className="font-bold
             "
            >
              Enter Task
            </label>
            <textarea
              name="des"
              placeholder="Enter Daily Task"
              cols="30"
              rows="10"
              className="pl-2 pt-4 relative w-full"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            ></textarea>
          </div>

          {error && <div>{error}</div>}

          <div className="flex justify-around">
            <button
              onClick={onClose}
              className=" bg-cyan-400 py-2 px-6 rounded-3xl font-bold hover:bg-orange-400"
            >
              Cancel
            </button>
            <button
              className=" bg-cyan-400 py-2 px-6 rounded-3xl font-bold hover:bg-orange-400"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>

  
  );
};

export default Modal;
