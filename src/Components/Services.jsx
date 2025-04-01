import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { services } from '../constants'
import { SectionWrapper } from '../hoc'

const Services = () => {
    
    useEffect (() => {
        Aos.init({duration: 1500});
    }, []);

  return (
    <div className='flex justify-start items-end h-[50vh] services' id='services'>
        {services.map((service) => (
            <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className='w-[60vw] h-auto'
            key={service.name}
            >--
                <img src={service.icon} alt="" />
                <h1 className='text-center font-bold text-[24px] leading-[36px] tracking-[-0.75px] pr-[4vw]'>{service.header}</h1>
                <p className='w-[307px] text-center text-[16px] leading-[24px] text-[#696871] tracing-[-0.5px] font-[Mulish] mt-[20px]'>{service.para}</p>
            </div>
        ))}
    </div>
  )
}

export default SectionWrapper(Services, '')