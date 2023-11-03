/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useStudyBoxContext } from '../../Hooks/useStudyBoxContext';
import Moment from 'moment';
import Fade from 'react-reveal/Slide';

const StudyBoxDetails = () => {
  const { studybox, dispatch } = useStudyBoxContext();

  useEffect(() => {
    const fetchStudyBox = async () => {
      const response = await fetch('/study/studybox');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_STUDYBOX', payload: json });
      }
    };
    fetchStudyBox();
  }, []);
  return (
    <div className="pt-72 mx-8">
      <div className="">
        {studybox &&
          studybox.map(({ date, class1, subject, task }) => {
            let adjustdate = Moment(date).format('YYYY-MM-DD ');

            return (
              <>
                <Fade right>
                  <div className="mx-4 my-8 px-3 border-solid border-2 border-cyan-400 hover:border-orange-400 sm:w-2/4 sm:m-auto sm:mb-8 shadow-xl shadow-cyan-100/50 hover:shadow-orange-100/50">
                    <h1 className="text-center pb-2 pt-3">
                      <p className="font-bold">Date:</p> {adjustdate}
                    </h1>
                    <h2 className="flex gap-2 pb-2">
                      <p className="font-bold">Class:</p> {class1}
                    </h2>
                    <h2 className="flex gap-2 pb-2">
                      <p className="font-bold">Subject: </p> {subject}
                    </h2>
                    <h1 className="text-center font-bold">Task to Achieve 👇 </h1>
                    <p className="pb-4 text-center">{task}</p>
                    <div className='pb-2 w-1/4 m-auto lg:relative    lg:left-16 '>
                      <button className="  py-2 px-6 rounded-3xl font-bold bg-orange-400 hover:scale-105 duration-200 ">
                        Done
                      </button>
                    </div>
                  </div>
                </Fade>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default StudyBoxDetails;
