/* eslint-disable react-hooks/exhaustive-deps */
import { useState} from 'react';

//components import
import Feature from './Feature';
import Modal from './Modal';
import  Fade  from 'react-reveal/Slide';
import  Slide  from 'react-reveal/Slide';
import StudyBoxDetails from './StudyBoxDetails';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className='relative top-28 bg-[url("/src/Assets/banner.jpg")] bg-cover h-96 bg-center '>
        <h1 className="text-center pt-24 pl-4 pr-4 text-2xl  md:text-4xl  text-white ">
          <Slide top cascade>
            Prepare With Us and Ace Your GCE Exams{' '}
          </Slide>
        </h1>
      </div>
      <Feature />
      <div className="relative top-56 text-center">
        <h3 className="md:text-4xl  text-2xl font-bold">
          <Fade left big cascade>
            Create a new Study Box
          </Fade>
        </h3>
          <Fade right >
          <button className="relative top-4 bg-cyan-400 py-2 px-6 rounded-3xl font-bold hover:bg-orange-400" onClick={() => setIsOpen(true)}>
            Create
          </button>
          </Fade>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      <StudyBoxDetails />
      
    </>
  );
};

export default Home;
