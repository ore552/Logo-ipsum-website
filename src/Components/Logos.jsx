import {useEffect} from 'react'
import { Icons } from "../constants/"
import { SectionWrapper } from '../hoc'
import Aos from 'aos'
import "aos/dist/aos.css"


function Logos() {
  useEffect (() => {
    Aos.init({duration:1500});
  }, []);
  return (
    <>
    <div data-aos="fade-right" className='logs flex flex-warp gap-10 justify-between mt-5'>
        {Icons.map((icons) => (
          <img src={icons.icon} key={icons.name} alt=''/>
        ))}
    </div>
    </>
  )
}

export default SectionWrapper(Logos, '')
