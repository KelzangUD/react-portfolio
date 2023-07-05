import React from 'react'

const HeroSection = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover w-screen h-screen">
        <div class="w-full h-full backdrop-brightness-50 grid content-center leading-loose">
            <div className='pl-12 text-white text-6xl font-semibold'>
                <h1>Hello</h1>
                <h1>I'm Web Developer</h1>
                <h1>From Land Of GNH</h1>
            </div>
            <div className='pl-12 mt-6 text-white text-3xl font-semibold'>
                <button>ABOUT ME</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
