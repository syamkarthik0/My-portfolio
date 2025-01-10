import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
 
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },

];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },   
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      "name": "DSA (Data Structures and Algorithms)",
      "icon": "/assets/tech/dsa.png",
      "link": "https://en.wikipedia.org/wiki/Data_structure"
    }
    
  ],
  frameworks: [
     {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Spring Boot",
      icon: "/assets/tech/springboot.png",  
      link: "https://spring.io/projects/spring-boot",
    },

    {
      name: "Spring Data JPA",
      icon: "/assets/tech/springdatajpa.png",
      link: "https://spring.io/projects/spring-data-jpa"
    },
    {
      name: "Spring Security",
      icon: "/assets/tech/springsecurity.png",
      link: "https://spring.io/projects/spring-security"
    },
    {
      name: "Spring Data MongoDB",
      icon: "/assets/tech/springdatamongodb.png",
      link: "https://spring.io/projects/spring-data-mongodb"
    }
    
    
    
  ],
  libraries: [
    {
      name: "Hibernate",
      icon: "/assets/tech/hibernate.png",
      link: "https://hibernate.org"
    },
    {
      name: "JPA",
      icon: "/assets/tech/jpa.png",
      link: "https://javax.persistence.org"
    },
    {
      name: "Lombok",
      icon: "/assets/tech/lombok.png",
      link: "https://projectlombok.org"
    },
    {
      name: "Redux",
      icon: "/assets/tech/redux.png",
      link: "https://redux.js.org"
    },
    {
      name: "Material-UI",
      icon: "/assets/tech/mui.png",
      link: "https://mui.com"
    }
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },

    {
      name: "Swagger",
      icon: "/assets/tech/swagger.png",
      link: "https://swagger.io"
    },
    {
      name: "Axios",
      icon: "/assets/tech/axios.png",
      link: "https://axios-http.com"
    },
    {
      name: "RESTful APIs",
      icon: "/assets/tech/restfulapi.png",
      link: "https://restfulapi.net"
    },
    {
      name: "Fetch API",
      icon: "/assets/tech/fetch.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
    },
    {
      "name": "Maven",
      "icon": "/assets/tech/maven.png",
      "link": "https://maven.apache.org/"
    }
  ],
  environments: [
    {
      name: "AWS",
      icon: "/assets/tech/aws.png",
      link: "https://aws.amazon.com/"
    },    
    {
      name: "Google Authentication",
      icon: "/assets/tech/google-auth.png",
      link: "https://developers.google.com/identity"
    }
    
    
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    }
    
  ],
};


const projects = [
  {
    name: "OTT-Platform",
    description:
      "Developed a dynamic OTT platform with TMDB API integration to provide up-to-date movie data. Created a responsive, userfriendly frontend using React, displaying movie information like titles, genres, release dates, and ratings. Implemented Redux for efficient state management, enhancing the app’s scalability and performance.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "red-text-gradient",
        },
        {
          name: "Material-UI",
          color: "green-text-gradient",
        },
        {
          name: "TMDB API",
          color: "purple-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "yellow-text-gradient",
        },
        {
          name: "Restful APIs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "purple-text-gradient",
        },
        {
          name: "Axios",
          color: "orange-text-gradient",
        },
        {
          name: "Swagger",
          color: "yellow-text-gradient",
        },
        {
          name: "Postman",
          color: "pink-text-gradient",
        },
        {
          name: "Maven",
          color: "blue-text-gradient",
        },
      ],
      
    image: "/assets/projects/movie-site.png",
    source_code_link: "https://github.com/syamkarthik0/OTT-Platform",
    deployed_link: "https://rulzbirdcinema.netlify.app/",
  },
  {
    name: "Weather-APP",
    description:
      "Built a real-time weather application with a responsive frontend using React, integrating a weather API for live data (temperature,humidity, etc.) worldwide. Enabled users to search locations and instantly view current weather updates, with a focus on smoothuser experience and efficient API handling.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "red-text-gradient",
        },
        {
          name: "Material-UI",
          color: "green-text-gradient",
        },
        {
          name: "Weather API",
          color: "purple-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "yellow-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "purple-text-gradient",
        },
        {
          name: "Axios",
          color: "orange-text-gradient",
        },
      ],      
    image: "/assets/projects/weather-app.png",
    source_code_link: "https://github.com/syamkarthik0/WeatherApp",
    deployed_link: "https://weather-site-by-me.netlify.app/",
  },
  {
    name: "MicroTweet",
    description:
    "Developed a microservices-based social media platform with high-performance functionality across user profiles, tweet handling, relationship management, and search capabilities. Each feature was implemented as a standalone microservice, deployed on Google Cloud Run for scalability and real-time data processing.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "yellow-text-gradient",
      },
      {
        name: "Redis",
        color: "red-text-gradient",
      },
      {
        name: "Google Cloud Run",
        color: "purple-text-gradient",
      },
      {
        name: "Render",
        color: "pink-text-gradient",
      },
      {
        name: "Data Structures & Algorithms",
        color: "green-text-gradient",
      },  

      ],      
    image: "/assets/projects/tweetpage.png",
    source_code_link: "https://github.com/syamkarthik0/TweetDSA.git",
    
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/syamkarthik0",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/dharmavarapu-karthik-375381290/",
  },

  
];

const heroTexts = [
  
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  projects,
  socials,
  heroTexts,
};
