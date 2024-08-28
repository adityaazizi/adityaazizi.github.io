import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = `A passionate AI and Software Engineer specializing in model development and data analysis, leveraging advanced techniques to create robust and scalable solutions. With a keen focus on delivering cutting-edge technologies, dedicated to optimizing processes and enhancing decision-making capabilities. Committed to innovation, consistently staying at the forefront of the ever-evolving tech landscape to provide the most effective and efficient solutions for complex problems.`;

export const EDUCATIONS = [
  {
    year: "Sept 2019 - Jan 2023",
    university: "Universitas Sebelas Maret",
    location: "Surakarta, Indonesia",
    degree: "Bachelor Degree in Computer Science",
    description: `Graduated with honors (Cumlaude) with GPA 3.71/4.00. Awarded Most Outstanding Student 2023 in the Faculty of Information Technology and Data Science, and named Most Inspirational Student 2022 in the Informatics Department. Additionally, runner-up in the Gemastik XV ICT Scientific Paper Competition 2022 by Puspresnas Kemendikbudristek.`,
  },
];

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    location: "Depok, Indonesia",
    role: "AI Engineer",
    company: "PT. Teknologi Artifisial Indonesia",
    description: `Developed a video inference engine for accurate vehicle counting and speed estimation. Implemented a Retrieval-Augmented Generation (RAG) chatbot for enhanced company profile interactions. Developed a pose estimation engine for precise workout monitoring and performance tracking. Established a robust CI/CD workflow for the company’s AI engine and model repository utilizing Docker, GitHub Actions, and Google Cloud Platform. Implemented advanced query systems to streamline the retrieval of procedural troubleshooting steps.`,
    technologies: [
      "Python",
      "PyTorch",
      "Docker",
      "Google Cloud Platform",
      "Langchain",
      "Github",
    ],
  },
  {
    year: "Jul 2023 - Dec 2023",
    location: "Remote, Indonesia",
    role: "Data Analyst Apprentice",
    company: "GoTo Impact Foundation",
    description: `Learned data analytics skills including Python, SQL (Google Cloud Sandbox), data visualization (Looker Studio), and statistical inference. Collaborated with a team of five friends to complete a capstone project on student bullying in Indonesia, responsible for processing and transforming data to prepare it for visualization in Looker Studio using Python and Google Cloud Platform. Awarded Best Team for the SDGs 4: Quality of Education topic.`,
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "SQL",
      "BigQuerry",
      "Looker Studio",
    ],
  },
  {
    year: "Jun 2021 - Dec 2022",
    role: "Software Enginer Intern",
    location: "Surakarta, Indonesia",
    company: "Universitas Sebelas Maret",
    description: `Composed and optimized complex queries using PostgreSQL to support robust data management and retrieval operations. Built and maintained APIs using GoLang, ensuring secure and efficient data communication between the front-end and back-end systems. Utilized Docker for containerization and GitHub for version control, maintaining a consistent and reliable working environment. Successfully completed four critical modules within one and a half years, demonstrating a strong ability to manage time and deliver results.`,
    technologies: ["ReactJs", "GO", "PostgreSQL", "Minio", "Docker", "Github"],
  },
  {
    year: "Apr 2021 - Sep 2022",
    role: "AI Course Mentor",
    location: "Remote, Indonesia",
    company: "Indonesia AI",
    description: `Managed a class of 10-15 mentees, delivering instructional materials, assigning tasks, and evaluating performance. Conducted 2-hour mentoring sessions every weekend for a month per course, providing consistent guidance and support. Taught a variety of courses, including Basic Python, Data and Machine Learning Libraries, Machine Learning, and Deep Learning, ensuring comprehensive skill development. Assisted mentees with their capstone projects, aiding in their successful completion and enhancing their graduation portfolios.`,
    technologies: [
      "Python",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Scikit-Learn",
      "TensorFlow",
    ],
  },
  {
    year: "Feb 2022 - Jul 2022",
    role: "Machine Learning Apprentice",
    location: "Remote, Indonesia",
    company: "Bangkit Academy Led by Google, GoTo & Traveloka",
    description: `Studied key topics such as Python, TensorFlow, project structuring, and data deployment. Led a capstone project with a team of five (2 Android Developers, 1 DevOps, 2 Machine Learning Engineers) to develop ‘Paras,’ an application for early detection of facial diseases. Utilized technologies including Android Studio, Node.js, TensorFlow, Google Cloud Platform, and GitHub. Graduated and obtained the TensorFlow Developer Certificate.`,
    technologies: [
      "Python",
      "Mathematics",
      "Tensorflow",
      "Google Cloud Platform",
    ],
  },
  {
    year: "Sep 2020 - Jun 2022",
    role: "Assistant Lecturer",
    location: "Surakarta, Indonesia",
    company: "Universitas Sebelas Maret",
    description: `Assisted professors in teaching one course each semester for four semesters, providing materials, assignments, and assessments. Managed a class of 20-30 students, fostering an engaging learning environment. Served as a teaching assistant for courses in Basic Programming, Data Structures and Algorithms, Numerical Methods, and Software Engineering.`,
    technologies: ["C++", "Data Structure", "MATLAB", "Agile & Scrum"],
  },
];

export const PROJECTS = [
  {
    title: "Vehicle Counting and Speed Estimation using YOLOv10",
    image: project3,
    description:
      "This project demonstrates the application of advanced computer vision techniques for real-time vehicle counting and speed estimation. By utilizing the YOLOv10 model, the system efficiently detects, counts, and tracks vehicles in video footage, providing accurate speed calculations based on movement trajectories. This project showcases my ability to implement cutting-edge AI models in practical applications, contributing to improved traffic monitoring and management solutions.",
    technologies: ["Python", "Ultralytics", "Supervision", "OpenCV"],
  },
  {
    title: "Simple RAG Project using Langchain, OpenAI and Pinecone",
    image: project6,
    description:
      "I built a simple Retrieval-Augmented Generation (RAG) project using LangChain, OpenAI API, and Pinecone vector database. This project integrates advanced natural language processing techniques to retrieve relevant information from a large dataset and generate coherent responses. Additionally, I implemented automated testing using Giskard to ensure the robustness and reliability of the system to stay intelligent, responsive, and dependable systems.",
    technologies: ["Python", "Langchain", "OpenAI API", "Pinecone"],
  },
  {
    title: "Student Bullying Analysis from Jabar Open Data",
    image: project2,
    description:
      "This Capstone Project was undertaken during the Generasi GIGIH 3.0 program, Data Analyst Track, organized by the GOTO Impact Foundation. Our team was honored with the Best Team award for our significant contributions to Sustainable Development Goal 4: Quality Education. This project involved applying data analysis techniques to address educational challenges, showcasing my ability to leverage data-driven insights for impactful social change.",
    technologies: ["Python", "SQL", "Looker Studio"],
  },
  {
    title: "ADResNet: Attention Guidded Residual Attention Network",
    image: project5,
    description:
      "I developed a project called ADResNet: Attention Guided Residual Network for color embedded grayscale image reconstruction. In this research, I proposed a novel solution that outperforms previous methods in both Peak Signal-to-Noise Ratio (PSNR) and Structural Similarity Index (SSIM) while maintaining a lower parameter count. This work exemplifies my ability to innovate within the field of computer vision, pushing the boundaries of existing techniques to achieve superior results with greater efficiency.",
    technologies: ["Python", "OpenCV", "PyTorch"],
  },
  {
    title: "CARSNet: Channel Attention Residual Segmentation Network",
    image: project4,
    description:
      "This is a research initiative conducted for the Gemastik XV 2022 ICT Scientific Paper competition, where my team and I earned a silver medal. We proposed a novel network model combining Improved Residual Networks and Channel Attention for high resolution satelite building image segmentation. Our model demonstrated superior performance, surpassing previous methods with higher F1 Score and IoU metrics while mantaining lower parameters.",
    technologies: ["Python", "OpenCV", "TensorFlow"],
  },
  {
    title: "E-Mail Automation using Python and SMTP",
    image: project1,
    description:
      "This project is a practical implementation of foundational Python programming concepts that I developed during the early stages of my learning journey. The program automates the process of sending emails, including subjects, attachments, and message content, to a list of multiple recipients. This project highlights my ability to apply basic programming skills to create efficient solutions for real-world tasks, demonstrating my growth in software development.",
    technologies: ["Python", "SMTP", "CRUD"],
  },
];

export const CONTACT = {
  address: "Jakarta Metropolitan Area, Indonesia",
  phoneNo: "+62 82333922510",
  email: "azizi.business@gmail.com",
};
