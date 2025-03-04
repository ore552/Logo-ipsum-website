import {useEffect} from 'react'
import Icons from '../constants'
import { SectionWrapper } from '../hoc'
import Aos from 'aos'
import "aos/dist/aos.css"


function Logos() {
  useEffect (() => {
    AOS.init({duration:1500});
  }, []);
  return (
    <>
    <div data-aos="fade-right" className='logs flex flex-warp gap-10 justify-between mt-5'>
        {Icons.map((icons) => (
       
        ))}
    </div>
    </>
  )
}

export default Logos