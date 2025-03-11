import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { SectionWrapper } from '../hoc'

function Metrics() {

    useEffect (() => {
         Aos.init({duration: 1500});
    }, []);

  return (
    <div data-aos="flip-up" className='metrics'>
     <h2 className="text-[50px] font-bold leading-[57px] tracking-[-1.56px] mb-[30px] w-[14.7cm]">In-depth metrics</h2>
     <p className="text-[20px] leading-[30px] text-[#696871] tracking-[-0.63px]  font-[Mulish] w-[456px] ml-[28px]">Accurate, real-time reporting at your fingertips. Getting data has never been easier.</p>
    </div>
  )
}

export default SectionWrapper(Metrics, '')