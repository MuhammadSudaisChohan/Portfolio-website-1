import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-">
    <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        alt="hero"
        width={200}
        height={200}
        src={require("../../../public/assessts/pictures/man1.jpg")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       About Me
       
      </h1>
      
      <p className="mb-5 leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
        illo ratione quibusdam ut atque libero assume ab sit aperiam
        laudantium modi.Vero, officia ratione est deleniti quia totam nostrum sit?
      </p>
      
      <div className="flex justify-center">
        <a href={'/assessts/cv/cv.pdf ' }>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
