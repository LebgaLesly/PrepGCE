//components import
import Feature from './Feature';

const Home = () => {
  return (
    <>
      <div className='relative top-28 bg-[url("/src/Assets/banner.jpg")] bg-cover h-96 bg-center pb-8 '>
        <h1 className="text-center pt-24 pl-5 pr-5 text-2xl  md:text-4xl  text-white">
          Prepare With Us and Ace Your GCE Exams{' '}
        </h1>
      </div>

      <Feature />


    </>
  );
};

export default Home;
