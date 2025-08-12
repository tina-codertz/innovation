import { TeamMember, Project, Partner } from "../types";
import images1 from '../assets/im1.jpeg';
import images2 from '../assets/im2.jpeg';
import images3 from '../assets/im3.jpeg';
import images4 from '../assets/im4.jpeg';
// import images5 from '../assets/im5.jpg';
import images6 from '../assets/im7.jpeg';

import images8 from '../assets/im9.jpg';
import images9 from '../assets/im10.jpeg';

import images11 from '../assets/im12.jpeg';
import images12 from '../assets/im13.jpeg';








export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ms.Samia Adam",
    role: "Leader, Software Team",
    category: "core",
    image:
     images6,
    email: "sarah.johnson@aru.ac.tz",
    linkedin: "#",
    bio: "A visionary software engineer with a passion for building scalable and impactful digital solutions. With deep experience in full-stack development they guide the team in creating modern applications.",
  },
  {
    id: "2",
    name: "Mr.Innocent Kiwoly",
    role: "Leader, Networking and IOT Team",
    category: "core",
    image:
      images9,
    email: "michael.mwangi@aru.ac.tz",
    linkedin: "#",
    bio: "An expert in network architecture, leading efforts to connect the physical and digital worlds. Their work drives innovation in IoT-based solutions, smart systems, and efficient data communication.",
  },
  {
    id: "3",
    name: "Mr.Cirilo Villarta",
    role: "Leader, Multimedia Team",
    category: "core",
    image:images3,
    email: "amina.hassan@aru.ac.tz",
    linkedin: "#",
    bio: "A creative technologist who blends visual designto craft compelling multimedia experiences. From UI/UX to  video editing, they lead the team in turning ideas into engaging digital content..",
  },
  {
    id: "4",
    name: "Ms.Golden Haule",
    role: "Leader, AI & Machine Learning Team",
    category: "core",
    image:
      images8,
    email: "john.kiprotich@aru.ac.tz",
    linkedin: "#",
    bio: "A data-driven innovator focused on machine learning, data science, and automation. They lead AI research and development to solve complex problems using intelligent algorithms and predictive technologies..",
  },
  // {
  //   id: "5",
  //   name: "Ms. Glory Msasalaga",
  //   role: "AI and machine learning mentor",
  //   category: "mentors",
  //   image:
  //     "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   email: "robert.kimani@consultant.com",
  //   linkedin: "#",
  //   bio: "Former CTO with extensive experience in technology transfer and startup incubation in Tanzania.",
  // },
  // {
  //   id: "6",
  //   name: "Ms. Glory Msasalaga",
  //   role: "AI and machine learning mentor",
  //   category: "mentors",
  //   image:
  //     "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   email: "robert.kimani@consultant.com",
  //   linkedin: "#",
  //   bio: "Former CTO with extensive experience in technology transfer and startup incubation in Tanzania.",
  // },
  {
    id: "7",
    name: "Mr.Barakael Lucas",
    role: "Software expert and mentor",
    category: "mentors",
    image:images2,
    email: "baraka.Lucas@unep.org",
    linkedin: "#",
    bio: "Environmental scientist specializing in sustainable development and green technology initiatives.",
  },

  // Coordinators
  {
    id: "8",
    name: "Dr.Godfrey Luwemba",
    role: "Department  Coordinator",
    category: "coordinator",
    image:"https://media.licdn.com/dms/image/v2/D5603AQHPkH2xNammmg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700117038386?e=1758153600&v=beta&t=OKDmu-E8fI36fdxQN5G_llF4JZuTSj7oaNBJnVVFcPA"
      ,
    email: "christina.kimario@aru.ac.tz",
    linkedin: "#",
    bio: "Coordinator overseeing all innovation hub activities and strategic partnerships.",
  },
  {
    id: "9",
    name: "Dr.Eunice Likotiko",
    role: "Department Coordinator",
    category: "coordinator",
    image:
      images1,
    email: "john.mushi@aru.ac.tz",
    linkedin: "#",
    bio: "Coordinator overseeing all innovation hub activities and strategic partnerships.",
  },
  {
    id: "10",
    name: "Mr.Alexander Moreka",
    role: "Project Coordinator",
    category: "coordinator",
    image:"https://scholar.googleusercontent.com/citations?view_op=view_photo&user=Qa76QEcAAAAJ&citpid=1"
,
    email: "john.mushi@aru.ac.tz",
    linkedin: "#",
    bio: "Responsible for coordinating all innovative projects in the department and the university at large.",
  },
 

  // General Team Members
  {
    id: "11",
    name: "Software Team",
    role: "Team member",
    category: "member",
    images: [
      images4,
      
     
    ],
    email: "asha.mwita@aru.ac.tz",
    linkedin: "#",
    bio: "The Software Development Team specializes in building scalable, user-centric applications that solve real-world problems. With expertise in front-end, back-end, this team transforms ideas into powerful digital solutions through clean code and continuous innovation..",
  },
  {
    id: "12",
    name: "Networking and IOT Team",
    role: "Team member",
    category: "member",
    images: [
      images12,
      



    ],
    email: "peter.nnko@aru.ac.tz",
    linkedin: "#",
    bio: "The Network and IoT Team focuses on designing and implementing intelligent systems that connect devices and networks. Their work bridges the physical and digital worlds, delivering solutions in smart environments  for sustainability and efficiency.",
  },
  {
    id: "13",
    name: "Multimedia Team",
    role: "Team member",
    category: "member",
    images: [
      images6,
      
      
    ],
    email: "neema.joseph@aru.ac.tz",
    linkedin: "#",
    bio: "The Multimedia Team brings stories to life through digital design, video, audio, and interactive media. From UI/UX design to animation , this team enhances user engagement and experience by combining creativity with cutting-edge media tools.",
  },
  {
    id: "14",
    name: "AI and Machine learning Team",
    role: "Team member",
    category: "member",
    images: [
      images11,
     

     
    ],
    email: "kelvin.mrema@aru.ac.tz",
    linkedin: "#",
    bio: "The AI Team explores the power of machine learning, data science, and intelligent systems to drive innovation. Their work spans predictive analytics, computer vision, and automation — pushing boundaries to create smart solutions for the future.",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Diebetic Retinalpathy AI power mobile App",
    description:
      "Developing IoT sensors for precision farming to optimize water usage and crop yield for smallholder farmers.",
    image:
      "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["IoT", "Agriculture", "Sustainability"],
    status: "ongoing",
    date: "2024-01-15",
    type: "project",
  },
  {
    id: "2",
    title: "ARED (Assistive Robotic for Elderly )",
    description:
      "AI-powered platform for sustainable urban development and land use optimization in Dar es Salaam.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["AI", "Urban Planning", "GIS"],
    status: "ongoing",
    date: "2024-02-01",
    type: "project",
  },
  {
    id: "3",
    title: "Product sorting and counting system  ",
    description:
      "Real-time environmental monitoring system using satellite data and ground sensors.",
    image:
      "https://images.pexels.com/photos/3039036/pexels-photo-3039036.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["Climate", "Monitoring", "Data Analytics"],
    status: "ongoing",
    date: "2023-12-01",
    type: "project",
  },
  {
    id: "4",
    title: "AI-Powered smart city solution",
    description:
      "Developing AI algorithms for traffic management and smart city infrastructure.",
    image:
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["AI", "Smart City", "Traffic Management"],
    status: "ongoing",
    date: "2024-01-30",
    type: "project",

  },
  {
    id: "5",
    title: "Innovation Summit 2024",
    description:
      "Annual technology and innovation conference bringing together students, researchers, and industry leaders.",
    image:
      "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["Conference", "Networking", "Innovation"],
    status: "upcoming",
    date: "2024-03-15",
    type: "event",
    registrationLink: "#",
  },
  {
    id: "6",
    title: "Health and Nutrition tracking system",
    description:
      "Machine learning algorithms for optimizing solar and wind energy systems in rural Tanzania.",
    image:
      "https://images.pexels.com/photos/1833399/pexels-photo-1833399.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["Energy", "AI", "Sustainability"],
    status: "ongoing",
    date: "2024-01-01",
    type: "project",
  },
  {
    id: "7",
    title: "Tech Startup Bootcamp",
    description:
      "Intensive 3-day workshop for aspiring tech entrepreneurs and startup founders.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["Entrepreneurship", "Training", "Startups"],
    status: "upcoming",
    date: "2024-02-20",
    type: "event",
    registrationLink: "#",
  },
  {
    id: "8",
    title: "Smart Agriculture Solutions",
    description:
      "IoT-based precision farming solutions for smallholder farmers in Tanzania.",
    image:
      "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["IoT", "Agriculture", "Sustainability"],
    status: "ongoing",
    date: "2024-02-10",
    type: "project",
  },
  {
    id: "9",
    title: "MOBILE LUKU",
    description:
      "Using AI and data analytics to enhance climate resilience in urban areas.",
    image:
      "https://images.pexels.com/photos/256295/pexels-photo-256295.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["AI", "Climate", "Urban Planning"],
    status: "ongoing",
    date: "2024-03-01",
    type: "project",
  },
];

import ErasmusLogo from '../assets/erasmusplus.svg';
import ardhiLogo from '../assets/ardhi.jpeg';

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Erasmus+ (European Union)',
    logo: ErasmusLogo,
    website: 'https://erasmus-plus.ec.europa.eu/',
    description: 'European Union program supporting education, training, youth, and sport.'
  },
  {
    id: '2',
    name: 'VLIR-UOS',
    logo: "https://www.kuleuven.be/english/apply/images/logo-vlir-uos.png/@@download/image/Logo%20VLIR-UOS.png",
    website: 'https://www.vliruos.be/',
    description: 'Flemish Interuniversity Council for University Development Cooperation.'
  },
  {
    id: '3',
    name: 'AHUMAIN',
    logo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvXjuElZLKr0Mfh8RYpYJpfXDPdpQstaO13lWrhsvj6bPXuTFj",
    website: 'https://ahumain.com/',
    description: 'AI and digital innovation partner.'
  },
  {
    id: '4',
    name: 'Ardhi University',
    logo: ardhiLogo,
    website: 'https://www.aru.ac.tz/',
    description: 'Host university and key partner in innovation and research.'
  }
];
