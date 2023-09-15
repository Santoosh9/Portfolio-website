import { VscFileMedia, VscVerifiedFilled } from 'react-icons/vsc';
import { FaGlobe } from 'react-icons/fa';
import { HiCloud, HiCircleStack } from 'react-icons/hi2';

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaGlobe />,
    title: 'Web Deveploment',
    des: 'Web Application Developmen, Website Maintenance and Support, and E-commerce Solutions',
  },
  {
    id: 2,
    icon: <HiCircleStack />,
    title: 'MERN-Stack Development',
    des: 'User Interface Deveploment, State Management, Database Integration (MongoDB) and Error Handling ',
  },
  {
    id: 3,
    icon: <VscFileMedia />,
    title: 'Frontend Deveploment',
    des: 'Responsive Design, Integration with Backend, Page Templates and Single Page Application ',
  },
  {
    id: 4,

    title: 'Quality Assurance',
    icon: <VscVerifiedFilled />,
    des: 'User Acceptance Testing, Functional Testing, Documentation and Bug Reporting and Issue Tracking',
  },

  {
    id: 5,
    icon: <HiCloud />,
    title: 'Hosting Websites',
    des: 'Web Hosting and Deployment to Help clients choose suitable hosting providers and plans. Deploy websites and applications to production servers.',
  },
];
