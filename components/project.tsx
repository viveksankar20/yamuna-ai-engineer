import Image from 'next/image'
import React from 'react'
import { Data } from '@/data';
import { motion } from 'framer-motion';

interface ProductCardProps{
  title: string;
  description: string;
  imageSrc: string;
  skills?: string[];
}

function Project() {
  return (
    <div id='Projects' data-aos="fade-up"
    data-aos-duration="200"
    data-aos-delay="200"
    data-aos-easing="ease-in-sine">

<div className="space-y-4 mb-8">
  <h1 className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
    Projects & Work
  </h1>

  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#00CAEE] text-center">
    A Showcase of My Key Projects
  </h1>

  <p className="text-sm sm:text-base text-gray-300 text-center mt-1">
    Dive into a collection of projects that highlight my skills, creativity, and problem-solving abilities.
  </p>
</div>

<div className='flex justify-center'>

<div className="relative w-full space-y-6 max-w-3xl">
{
  Data.projects.map((project, index) => (
    <div key={index} data-aos="fade-up"
    data-aos-duration="200"
    data-aos-delay="200"
    data-aos-easing="ease-in-sine" className='sticky top-32'>
    <ProjectCard
      key={index}
      title={project.title}
      description={project.description}
      imageSrc={project.imageSrc}
      skills={project.skills} // Pass the skills prop if needed
    />
    </div>
  ))}

</div>
</div>
{/* <div className="relative">
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
        <h2 className="text-4xl font-bold">The First slide</h2>
        <p className="mt-2">Scroll Down for next slide</p>
    </div>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
        <h2 className="text-4xl font-bold">The Second slide</h2>
        <p className="mt-2">Scroll Down for next slide</p>
    </div>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        <h2 className="text-4xl font-bold">The Third slide</h2>
        <p className="mt-2">Scroll Down</p>
    </div>
    <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
        <h2 className="text-4xl font-bold">The Fourth slide</h2>
    </div>
</div> */}
    </div>
  )
}


const ProjectCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageSrc,
  skills,
}) => {
  return (
    <motion.div
      className="border rounded-xl border-[#00CAEE] bg-[#14151D]  flex flex-col justify-center p-2 hover:shadow-costom-shadow transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >

      <div   className="relative w-full h-48 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <div className="my-3 group space-y-3 px-2">
        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2">
          {skills?.map((val, index) => (
            <span
              key={index}
              className=" capitalize px-2 py-1 font-semibold rounded bg-gray-800 text-sm hover:text-gray-900 text-blue-500 hover:bg-gradient-to-r from-emerald-300 to-sky-400 transition-all duration-300"
            >
              {val}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-bold text-xl text-[#00CAEE]">
          {title}
        </h2>

        {/* Description - expandable on hover */}
        <p className="text-sm text-gray-300 overflow-hidden whitespace-nowrap text-ellipsis group-hover:whitespace-normal group-hover:overflow-visible group-hover:text-clip transition-all duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
export default Project