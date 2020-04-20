
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm A.Rupesh",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks"),
  resumeLink: "https://drive.google.com/open?id=1lI0H2AS9gYH1IAYLzJO8erjtgQrXQKXK"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/rupesh1310",
  linkedin: "https://www.linkedin.com/in/rupesh1310/",
  gmail: "a.rupesh66@gmail.com",
  gitlab: "https://gitlab.com/rupesh1310",
  facebook: "https://www.facebook.com/rupesh1310"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "ODRjNTUxMmYzOTdiMThiMWQzNjFlYjRkMWVlOTE4ODI3NTgyZmM2MA==",
  githubUserName: "rupesh1310"
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME HIGH END APPLICATIONS THAT I CREATED WHILE LEARNING",
  projects: [
    {
      image: "https://raw.githubusercontent.com/rupesh1310/NATOURS/master/public/img/logo-green-round.png",
      link: "https://github.com/rupesh1310/NATOURS"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  achivementsCards: [
    {
      title: "Kharagpur Winter of Code",
      description: "First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries",
      image:
        "https://avatars2.githubusercontent.com/u/15631779?s=400&v=4",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/open?id=1XuBf_CBKvg-0C7d3NMekYv4nTccBm6Kn" },
               { name: "Final Project", url: "https://github.com/rupesh1310/lterm" }
      ]
    },
    {
      title: "Completed Full Stack MERN Bootcamp",
      description: "Completed Full Stack MERN Bootcamp from learncodeonline inc.",
      image: "https://learnyst.s3.amazonaws.com/assets/schools/2410/resources/images/logo_lco_t17sd.png",
      footerLink: [ { 
        name: "Full Stack MERN Bootcamp", url: "https://drive.google.com/open?id=1ktnK5JN4F0vrk4E0SXDNucUnx5q5FlQd" 
        },
        { name: "Final Project", url: "https://github.com/rupesh1310/mernbootcamp" }
      ]
    },

    {
      title: "Machine Learning with Javascript",
      description: "Completed Certifcation from UDEMY for Machine Learning with Javascript",
      image: "https://www.pipelinersales.com/wp-content/uploads/2019/06/large-udemy.jpg",
      footerLink: [
        { name: "Certification", url: "https://www.udemy.com/certificate/UC-Q9XP8D1Z/" },
        { name: "Final Project", url: "https://github.com/rupesh1310/ML-kits" }
      ]
    },
    {
      title: "The Complete JavaScript Course: Build a Real-World Project",
      description: "Completed Certifcation from UDEMY for The Complete JavaScript Course: Build a Real-World Project",
      image: "https://cdn.worldvectorlogo.com/logos/udemy-1.svg",
      footerLink: [
        { name: "Certification", url: "http://ude.my/UC-TPR9PVT6" },
        { name: "Final Project", url: "https://github.com/rupesh1310/Dice-Game" }
      ]
    },
    {
      title: "Modern React with Redux",
      description: "Completed Certifcation from UDEMY for Modern React with Redux",
      image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      footerLink: [
        { name: "Certification", url: "https://www.udemy.com/certificate/UC-Q5Y0EKZ6/" },
        { name: "Final Project", url: "https://github.com/rupesh1310/curated-search" }
      ]
    },
    {
      title: "Learn and Understand NodeJS",
      description: "Completed Certifcation from UDEMY for Learn and Understand NodeJS",
      image: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png",
      footerLink: [
        { name: "Certification", url: "https://www.udemy.com/certificate/UC-UXF7FU7W/" }
      ]
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      description: "Completed Certifcation from Free Code Camp for JavaScript Algorithms and Data Structures",
      image: "https://s3.amazonaws.com/freecodecamp/curriculum-diagram-full.jpg",
      footerLink: [
        { name: "Certification", url: "https://www.freecodecamp.org/certification/rupesh1310/javascript-algorithms-and-data-structures" }
      ]
    },
    {
      title: "Responsive Web Design",
      description: "Completed Certifcation from Free Code Camp for Responsive Web Design",
      image: "https://pbs.twimg.com/profile_images/867345321516572672/csjzMLDA_400x400.jpg",
      footerLink: [
        { name: "Certification", url: "https://www.freecodecamp.org/certification/rupesh1310/responsive-web-design" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff. i love to write and teach others what i have learned",

  blogs: [
    {
      url: "https://medium.com/@a.rupesh66/ysearch-4d31e31ee60",
      image: "https://miro.medium.com/max/875/1*jZQhTjjt_cutgz2UVoIUOA.png",
      title: "React.js app for fast searching and playing Youtube videos using the Youtube API",
      description: "If you’re learning React, you have probably already been through lots of tutorials on how to build a to-do list etc. At some point, you’ll look for alternate ideas to try make useful web applications and learn but you’ll keep bumping into different versions of the default to-do list example."
    },
    {
      url: "https://medium.com/@a.rupesh66/why-you-should-switch-to-reactjs-bab5e46e26de",
      image: "https://miro.medium.com/max/1400/1*qZT6HsLWRHftyq5SUaVVyg.png",
      title: "Why you should switch to ReactJS ?",
      description: "React is a JavaScript library for building the user interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Conducted a seminars on Web Development.",
      subtitle: "At Codex coding club of Institute of technical Education & Research",
      // slides_url: "https://bit.ly/saadpasta-slides",
      // event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+91-7004561163",
  email_address: "a.rupesh66@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "rupesh_1310"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, blogSection, talkSection,  contactInfo , twitterDetails};
