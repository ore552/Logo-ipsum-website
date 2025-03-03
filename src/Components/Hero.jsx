import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion, useAnimation } from 'framer-motion'
import { slideIn, textVariant, zoomIn } from '../../utils/motion'
import {downArrow, earth_light} from "../assets"



function Hero () {

    const controls = useAnimation();

    const handleHover = () => {
        controls.start({ x: [0, -5, 5, -5, 0,], transition: {duration:0.7}});
    };

  return (
    <>
    <section className='hero mt-20 flex w-[80vw] pl-[3vw] overflow-hidden'>
        <motion.div variants={textVariant('.2')} className='hero-left w-[459px] h-[461px] mt-5 ml-[-4vw]'>
            <h1 className='hero-head text-[80px] w-[13.2cm] h-[231px] leading-[77px] pl-[2.5vw] font-bold'>Grow your subscription business</h1>
            <p className='hero-p pl-[2.5vw] text-[#696871] text-[25px] leading-[30px] tracking-[-0.63px] mt-10'>Outcome centered products that reduce churn, optimize pricing, and grow subscription business end-to-end.</p>

            <motion.div variants={slideIn('left', 'tween', '.5', '.3')} className='start pl-[2.5vw] mt-10 flext hero-btns'></motion.div>
            <motion.button
            onHoverStart={handleHover}
            onHoverEnd={() => controls.start({x: 0})}
            animate={controls}
            className='w-[211px] h-[50px] bg[#5454D4] text-white rounded-x1 text-[17px]'
            >Get Started</motion.button>
        </motion.div>
    </section>
    </>
  )
}

export default Hero