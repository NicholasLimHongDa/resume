const profileData = {
  title: "Resume",
  name: "Nicholas Lim Hong Da",
  sub_title: "JPA Scholar",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `I am an innovative and passionate developer with a primary interest in <strong>C#</strong>, 
    <strong>C++</strong> and its applications.`,
    contact: {
      email: "nicholas.lim.hong.da.cs@gmail.com",
      phone: "+60 16-709 1345",
      address: "Johor, Johor Bahru, MYS"
    }
  },
  links: [
    { title: "Github", src: "https://github.com/NicholasLimHongDa" },
    { title: "LinkedIn", src: "https://www.linkedin.com/in/NicholasLimHongDa/" }
  ],
  education: [
    {
      alma: "CSE, TUT, Toyohashi",
      duration: "2022 - 2024",
      std: "B.Tech. (Computer Science & Engineering)",
      score: "CGPA 3.44"
    },
    {
      alma: "DICE, NITTC, Toyota",
      duration: "2019 - 2022",
      std: "Diploma (Information & Computer Engineering)",
      score: "CGPA 3.78"
    },
    {
      alma: "KTJ, INTEC, Shah Alam",
      duration: "2017 - 2019",
      std: "Japanese Preparatory Course",
      score: "CGPA 3.20"
    }
  ],
  skills: [
    {
      graph: "true",
      category: "Programming Languages",
      // topics: [{ "name" :"C#", "perc": 90 }, { "name" :"C++", "perc": 90 }, { "name" :"Python", "perc": 60 }, 
                    // { "name" :"HTML", "perc": 40 }, { "name" :"CSS", "perc": 40 }, { "name" :"JavaScript", "perc": 40 }]
      topics: [{ "name" :"C#", "perc": 95, "duration": "2 years" }, { "name" :"C++", "perc": 80, "duration": "1.5 years" }, { "name" :"Python", "perc": 70, "duration": "1 year" }, 
                    { "name" :"HTML", "perc": 55, "duration": "6 months" }, { "name" :"CSS", "perc": 55, "duration": "6 months" }, { "name" :"JavaScript", "perc": 55, "duration": "6 months" }]
    },
    {
      category: "Technical Skills",
      topics: [
        "Linux",
        "Ubuntu",
        "Bash",
        "Git",
        "JSON",
        ".NET",
        "SQL",
        "Docker",
        "Unity Game Engine",
        "ROS",
        "Cypress"
      ]
    },
    {
      category: "Knowledge",
      topics: [
        "SDLC",
        "STLC",
        "Scrum & Agile",
        "FT/UAT/SIT",
        "Requirement Analysis", 
        "Automated Testing", 
        "Manual Testing",
        "FDA 21 CFR Part 11", 
        "GxP"
      ]
    },
    {
      category: "Spoken Languages",
      topics: [
        "English",
        "Japanese",
        "Bahasa Malaysia",
        "Mandarin"
      ]
    }
  ],
  projects: [
    {
      title: "HSR Collaborative Search",
      duration: "Apr - Dec 2023",
      link: "https://github.com/NicholasLimHongDa/2023-tut-thesis-paper",
      desc: `Developed a robotic behavior aimed at enhancing collaborative search task efficiency by assisting humans in object search tasks. 
      Published a paper detailing the complexities of human-robot communication, and suggested possible enhancements to the algorithm.`
      // skill: `Linux, Ubuntu, Bash, ROS, C#, C++, Python, SteamVR, .NET, Unity`, 
    },
    {
      title: "Speaker at TEDxToyotaKosen",
      duration: "Mar 2022",
      link: "https://www.ted.com/tedx/events/48471",
      desc: `Delivered a presentation on the challenges of acquiring a non-native language and strategies to facilitate second language acquisition. 
      Hosted a brief discussion on the strengths of Natural Language Processing algorithms and their potential applications in society.`
    },
    {
      title: "Powerpoint Subtitle System",
      duration: "Sept 2021 - Jan 2022",
      link: "https://github.com/NicholasLimHongDa/powerpoint-subtitle-system",
      desc: `Developed a Microsoft PowerPoint plugin facilitating voice recognition for Japanese language, integrating line breaks to enhance subtitle readability. 
      Designed and implemented using Microsoft Azure Cognitive Services, .NET, C#, and <a href='https://taku910.github.io/cabocha/'> CaboCha </a>`,
      // skill: `C#, .NET, Bash, PowerPoint Programming, Natural Language Processing, `, 
    }
  ],
  experiences: [
    {
      organization: "Cognizant Sdn. Bhd.",
      title: "Validation Analyst",
      desc: `<strong>CSV Analyst</strong> at <strong> Cognizant </strong>`,
      date: "Jul 2024 - Present",
      details: [`Facilitated trilingual communication (English, Mandarin, Japanese) with key stakeholders across multiple regions.`,
      `Ensured regulatory compliance by aligning all new implementations and software changes with GxP practices and FDA 21 CFR Part 11.`, 
      `Analyzed software requirements and designed comprehensive test scripts, achieving <1% defect leakage through maximum test coverage.`, 
      `Proven expertise in software testing methodologies, including Functional Testing, System Integration Testing, and User Acceptance Testing.`]
    },
    {
      organization: "Netcom Inc.",
      title: "Software Development Intern",
      desc: `<strong>Software development intern</strong> at <a href="https://www.netcom-inc.co.jp/"> <strong> Netcom Inc. </strong> </a>`,
      date: "Jan 2024 - Apr 2024",
      details: [
        `Designed and developed a gesture recognition mobile app using Unity, C#, and .NET Core for disabled persons 
        with Bluetooth Low Energy connection capabilities.  
        `, 
        `The application is capable of detecting and interpreting subtle gestures into actionable inputs, 
        enabling remote control of devices such as smartphones, televisions, and personal computers.`, 
        `The project was endorsed by National Institute of Advanced Industrial Science and Technology (AIST) of Japan.`
        
      ]
    },
    {
      organization: "Toyota Smile Life Inc.",
      title: `Part-time Language Interpreter`,
      desc: `Japanese-English, Japanese-Bahasa Melayu Interpreter`,
      date: "Aug 2023 - Jan 2024",
      details: [
        `Responsibilities included translating and interpreting technical instructions from Japanese to English for foreign workers at Toyota Motor Corporation factories.`, 
        `Conducted interpretation and translation tasks for Japanese-English and Japanese-Bahasa Melayu language pairs.`
      ]
    }
    /*
    ,
    {
      organization: "AJIS Co. Ltd.",
      title: "Part-time Inventory Manager",
      desc: `Part-time Inventory Manager`,
      date: "Jan 2023 - Jan 2024",
      details: [
        `Conducted inventory counts at customer stores and reporting findings to immediate supervisors or store managers in Japanese.`,
      ]
    }
    */
  ],
  certifications: [
    {
      desc: `<strong>Google IT Automation with Python Professional Certificate</strong>`,
      details: [
        `Credential ID: WHF5I489SX6J`
      ],
      date: "Nov 2024"
    },
    {
      desc: `<strong>ISTQB Certified Tester, Foundation Level 4.0</strong>`,
      details: [
        `Credential ID: MY0182-24`
      ],
      date: "Oct 2024"
    },
    {
      desc: `<strong>Japanese Proficiency Level N1</strong> by <strong>JLPT</strong>`,
      details: [
        `Credential ID: N1A283092J`
      ],
      date: "Jul 2023"
    }
  ],
  events: []
};
