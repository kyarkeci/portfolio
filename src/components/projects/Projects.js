import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" An application that allows users to create an account, make posts, comments, display the post and comments from different users. 
          Skills:  Java/Spring boot, MySQL,Spring security"
          src={projectOne}
        />
        <ProjectsCard
          title="Hotel booking App "
          des=" The Application is designed to allow users book an hotel room 
          Skills used: Java/Spring boot, MySQL,Spring security,HTML,CSS"
          src={projectTwo}
        />
        <ProjectsCard
          title="Blog"
          des="An application that allows users register and post personal experiences
          Skills used Java/Spring boot, MongoDB, Postman,Thymeleaf "
          src={projectThree}
        />
        <ProjectsCard
          title="Period Tracker"
          des=" Developed a mobile application to help individuals track menstrual cycles"
          src={projectOne}
        />
        <ProjectsCard
          title="Restaurant App "
          des=" Developed a comprehensive restaurant management application to streamline operations, enhance customer service,
           and optimize business processes for a fictional restaurant.
            The application encompasses various modules, including order management,
             inventory control, table reservations, and customer feedback management.
             it is built using Java/Spring boot, MySQL,Spring security"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects