import hardwork from '../../Assets/Features/5.png';
import time from '../../Assets/Features/6.png';
import consistency from '../../Assets/Features/3.avif';
import focus from '../../Assets/Features/4.webp';


const Feature = () => {
  const features = [
    {
      id: 1,
      img: hardwork,
      des: 'Hardwork',
    },


    {
      id: 3,
      img: consistency,
      des: 'Consistency',
    },

    {
        id: 2,
        img: time,
        des: 'Time Oriented',
      },

    {
      id: 4,
      img: focus,
      des: 'Focus',
    },
  ];
  return (
    <div className='flex relative top-36 justify-evenly flex-wrap'>
      {features.map((feature) => {
        return (
            <div key={feature.id} className=' '>
              <img src={feature.img} alt={feature.des} className=' relative rounded-full w-20 h-20 md:w-52 md:h-52 hover:scale-105 cursor-pointer ' />
              <h2 className='text-center font-bold pt-2 cursor-pointer'>{feature.des}</h2>
            </div>
        );
      })}
    </div>
  );
};

export default Feature;
