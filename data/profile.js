const profileData = {
  title: "Resume",
  name: "Nicholas Lim Hong Da",
  sub_title: "Fresh Graduate",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `I am an innovative and passionate developer with a primary interest in <strong>C#</strong>, 
    <strong>C++</strong> and its applications.`,
    contact: {
      email: "nicholas.lim.hong.da.cs@gmail.com",
      phone: "+60 16-709 1345",
      address: "Johor, MY"
    }
  },
  links: [
    // { title: "Codepen", src: "https://codepen.io/imvpn22" },
    { title: "Github", src: "https://github.com/NicholasLimHongDa" },
    { title: "LinkedIn", src: "https://www.linkedin.com/in/nlhd-cs/" }
    // { title: 'Twitter', src: 'https://twitter.com/imvpn22' }
    // { title: 'HackerEarth', src: 'https://www.hackerearth.com/@imvpn22' },
  ],
  education: [
    {
      alma: "CSE, TUT, Toyohashi",
      duration: "2022 - 2024",
      std: "B.Tech. (Computer Science & Engineering)",
      score: "97.09%"
    },
    {
      alma: "DICE, NITTC, Toyota",
      duration: "2019 - 2022",
      std: "Diploma (Information & Computer Engineering)",
      score: "94.41%"
    },
    {
      alma: "KTJ, INTEC, Shah Alam",
      duration: "2017 - 2019",
      std: "Japanese Preparatory Course",
      score: "77.80%"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      topics: ["C#", "C++", "HTML", "CSS", "JavaScript"]
    },
    {
      category: "Frameworks / Libraries",
      topics: [
        "ROS",
        "ROS2",
        ".NET",
        "Unity"
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
      Built upon prior research by Takahiro Ishii et al., the project emphasizes bidirectional communication 
      to prevent duplicate searches by the robot and human. 
      Implemented using <strong>ROS</strong> with FlexBE, <strong>C++</strong>, and <strong>Python</strong>. 
      Created a simulation environment utilizing <strong>Unity</strong> with PhotonPUN and SteamVR, alongside <strong>C#</strong>.`
    },
    {
      title: "Powerpoint Subtitle System",
      duration: "Sept 2021 - Jan 2022",
      link: "https://github.com/NicholasLimHongDa/powerpoint-subtitle-system",
      desc: `Developed a Microsoft PowerPoint plugin facilitating voice recognition for Japanese language, integrating line breaks to enhance subtitle readability. 
      Used Microsoft Azure Cognitive Services for voice recognition functionality. 
      Designed and implemented using <strong>.NET</strong>, <strong>C#</strong>, and <a href='https://taku910.github.io/cabocha/'> CaboCha </a>`
    }
  ],
  experiences: [
    {
      organization: "Netcom Inc.",
      title: "Software Development Intern",
      desc: `<strong>Software development intern</strong> at <a href="https://www.netcom-inc.co.jp/"> <strong> Netcom Inc. </strong> </a>`,
      date: "Jan 2024 - Mar 2024",
      details: [
        `Designed and developed a gesture recognition mobile app for disabled persons 
        using <strong>Unity</strong> with Bluetooth Low Energy and Bluetooth Classic 
        connection capabilities. 
        The project was endorsed by National Institute of Advanced Industrial Science and Technology (AIST) of Japan.`
      ]
    },
    {
      organization: "Toyota Smile Life Inc.",
      title: `Part-time Language Interpreter`,
      desc: `Japanese-English, Japanese-Bahasa Melayu Interpreter`,
      date: "Aug 2023 - Jan 2024",
      details: [
        `Responsibilities included translating and interpreting technical instructions from Japanese to English for foreign workers at Toyota Motor Corporation factories. 
        Conducted interpretation and translation tasks for Japanese-English and Japanese-Bahasa Melayu language pairs.`
      ]
    },
    {
      organization: "AJIS Co. Ltd.",
      title: "Part-time Inventory Manager",
      desc: `Part-time Inventory Manager`,
      date: "Jan 2023 - Jan 2024",
      details: [
        `Conducted inventory counts at customer stores and reporting findings to immediate supervisors or store managers. 
        All tasks are performed in Japanese.`
      ]
    },
    {
      organization: "TEDxToyotaKosen",
      title: "Speaker",
      desc: `<a href='https://www.youtube.com/watch?v=yZYTklWIhQ4'> How to Acquire a Second Language </a>`,
      date: "Mar 2022",
      details: [
        `Delivered a presentation on the challenges of acquiring a non-native language and strategies to facilitate second language acquisition.`
      ]
    }
  ],
  certifications: [
    {
      desc: `<strong>Japanese Proficiency Level N1</strong> by <strong>JLPT</strong>.`,
      details: [
        `The highest-level certificate of Japanese proficiency. Credential ID: N1A283092J`
      ],
      date: "Jul 2023"
    }
  ],
  events: []
};
