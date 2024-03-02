import React from 'react'
import bill from '../assets/bill (1).png'

const About = () => {
  return (
    <div className='md: px-14 p-4 max-w-s mx-auto'>
        <div className='flex flex-row md:fex-row justify-between items-start'>
            <div className='md:w-1/2'>
                <img src={bill} alt=""/>
            </div>
            <div className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                    Take <span className='text-secondary'>Control of Everthing</span> in Your Hands
                </h2>
                <p className='text-tertiary text-lg mb-7'>A paragraph is a collection of words 
                combined together to make a longer unit than a sentence. It's a set of
                 sentences that are well-organized and coherent
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default About
