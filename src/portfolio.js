/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohammadreza Khahani",
  title: "Hi all, I'm Reza",
  subTitle: emoji(
    "A Senior Android Developer with a strong track record of delivering impactful features and solutions in the mobile app industry. With my strong technical skills, dedication to clean coding practices, and passion for creating exceptional user experiences, I am committed to driving innovation and delivering high-quality solutions in the Android development space."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/khahani",
  linkedin: "https://www.linkedin.com/in/khahani/",
  gmail: "mr.khahani@gmail.com",
  medium: "https://medium.com/@mr.khahani",
  stackoverflow: "https://stackoverflow.com/users/6751083/mohammadreza-khahani",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "COMMUNICATE PLAN, CODE, TEST, DELIVER, REPEAT",
  skills: [
    emoji(
      "⚡ Develop highly interactive User-Interface for your Android apps"
    ),
    emoji("⚡ Write industrial code quality, highly maintainable and flexible"),
    emoji(
      "⚡ Crosss-Team communicator, follow up till done"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Android SDK",
      fontAwesomeClassname: "fab fa-gear"
    },
    {
      skillName: "Design",
      fontAwesomeClassname: "fab fa-ruler-combined"
    },
    {
      skillName: "Debugger",
      fontAwesomeClassname: "fab fa-bug"
    },
    {
      skillName: "Algorithm",
      fontAwesomeClassname: "fab fa-chart-diagram"
    },
    {
      skillName: "Problem-Solver",
      fontAwesomeClassname: "fab fa-square-root-variable"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Kotlin", //Insert stack or technology you have experience in
      progressPercentage: "98%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Android",
      progressPercentage: "95%"
    },
    {
      Stack: "Programming",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Android Developer",
      company: "Snapp!",
      companylogo: require("./assets/images/cab.snapp.passenger_512x512.webp"),
      date: "Feb 2024 - Present",
      desc: "Snapp is the first and leading mobile and web-based ride-hailing platform in Iran. Its mission is to enhance the effectiveness, efficiency, and quality of urban transportation in Iran, through exceptional software and service capabilities.",
      descBullets: [
        "Implemented a feature that increase 5% voucher conversion rate",
        "Decrease project build time about 80%"
      ]
    },
    {
      role: "Senior Android Developer",
      company: "Fivver",
      companylogo: require("./assets/images/fivver.png"),
      date: "Jul 2023 - Feb 2024",
      desc: "Design, develop, and maintain standing-out Native Android Applications with cutting-edge technologies, qualities, and scalability to address business requirements and satisfy customers' needs."
    },
    {
      role: "Senior Android Developer",
      company: "Paramount+",
      companylogo: require("./assets/images/paramount.png"),
      date: "May 2022 - Jul 2023",
      desc: "Developed a new feature that impacted 2+ million users in Brazil and Mexico when I was part of the Android monetization team as a Senior Android engineer. Paramount+ has 16+ million users around the globe and nearly 50 Android developers work on the code base with 400+ modules with a variety of architectures but mainly focused on MVVM.",
    },
    {
      role: "Android Developer",
      company: "Badesaba",
      companylogo: require("./assets/images/badesaba.jpg"),
      date: "Mar 2019 - Mar 2020",
      desc: "Refactor the most complex screen of the app to make it more maintainable.",
      descBullets: [
        "Refactor the most complex screen of the app to make it more maintainable",
        "Writing automation UI test with Appium"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/cab.snapp.passenger_512x512.webp"),
      projectName: "Snapp!",
      projectDesc: "Snapp is the first and leading mobile and web-based ride-hailing platform in Iran",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://snapp.ir/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/paramount.png"),
      projectName: "Paramount+",
      projectDesc: "Paramount+ Android and Android TV application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.cbs.app&hl=en_US"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Kotlin for Java developer",
      subtitle:
        "Certified by JetBrains company by passing the Kotlin for Java developer course on Coursera.",
      image: require("./assets/images/kotlin.png"),
      imageAlt: "Kotlin for Java developers",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/verify/QWLT349DMEPV"
        },
      ]
    },
    {
      title: "Android Engineer",
      subtitle:
        "Certified by TripleByte company by passing the Android Engineer Interview process.",
      image: require("./assets/images/triplebyte.jpeg"),
      imageAlt: "Android Enginner",
      footerLink: [
        {
          name: "Certification",
          url: "https://triplebyte.com/certificate/PgWMpEo"
        },
      ]
    },
    {
      title: "B2 Upper Intermediate English",
      subtitle:
        "Certified by EF SET English test and gained 52/100 score equivalent to B2 Upper Intermediate.",
      image: require("./assets/images/ef-set.jpg"),
      imageAlt: "B2 Upper Intermediate English",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.efset.org/cert/tp9JPF"
        },
      ]
    },
    {
      title: "Android Developer Trainer",
      subtitle:
        "Certified by EuroCert as a certified Android Developer Trainer.",
      image: require("./assets/images/eurocert-logo.jpg"),
      imageAlt: "Android developer trainer",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.eurocertglobal.eu/Pages/view.aspx?PostID=30"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+98-9398885961",
  email_address: "mr.khahani@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "MrKhahani", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
