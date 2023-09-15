import React from 'react';
import Title from '../layout/Titel';
import {
  ecommerce,
  recipes,
  shoes,
  libary,
  restromeal,
} from '../../assets/index';
import ProjectsCard, { ProjectsCard2 } from './ProjectsCard';

const Project = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=" E-learning Website"
          des="E-learning is  E-commerce website where user can view all types of TU qustions Tuition and LockSewa qustions. In the frontend part I use react and tailwind css for making this website. I use Redux for state management and there is lot of frontend feature I used."
          src={ecommerce}
        />
        <ProjectsCard
          title="Online Shoes Store"
          des="This is my ongoing project. I use React JS and Tailwind CSS for this web application. This is fully 
          responsive website. I use some CSS annimation on this project."
          src={shoes}
        />
        <ProjectsCard
          title="Recipe Finder App"
          des="By using React JS and SASS I build this web application. In application there are three main page and 
        some other page. I used react usestate hook for fetching data from custom API and css annimation. User can search 
      food ítems from serchbox"
          src={recipes}
        />

        <ProjectsCard2
          title="E-commerce Website"
          des="Online food ordering system An online food ordering system is a web-based 
      application. It is a full stack application which is my final year project (FYP). In front end I use react JS backend I use NodeJS and for database I use MongoDB"
          src={restromeal}
        />
        <ProjectsCard2
          title="Library management system"
          des="By using java programming language, I developed library management system.Library management system which helps to maintaining book in a 
          library and it helps to searching books in library"
          src={libary}
        />
      </div>
    </section>
  );
};

export default Project;
