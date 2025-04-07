
import strakit from "../assets/strakit.jpg";
import coderone from "../assets/coderone.png";

export const services = [
  { title: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", stars: 5 },
  { title: "CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", stars: 5 },
  { title: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", stars: 5 },
  { title: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", stars: 4 },
  {
    title: "MERN Stack",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png",
    stars: 4,
  },
  { title: "Java", icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", stars: 3 }
];

export const name = 'Mukilan';
export const experiences = [
  {
    'company': 'StaraKit',
    'role': 'Full-Stack Developer (Intern)',
    'duration': 'March 2024 - May 2024',
    'logo': strakit,
    'points': [
      'Involved in dynamic contributions to web and mobile📱 development projects, actively influencing and improving project outcomes.',
      'Developed multiple shared components to simplify tasks for fellow developers, boosting efficiency and teamwork.',
      'Enhanced product performance through significant contributions to backend development, optimizing essential components for improved efficiency 📈.',
      'Implemented data security for the company’s product to provide role-based access control ⚙️.'
    ],
    'url': 'https://strackit.com/',
  },
  {
    'company': 'CoderOne',
    'role': 'UI/UX Designer (Intern)',
    'duration': 'December 2024 - February 2025',
    'logo': coderone,
    'points': [
      'Gained hands-on experience in UI/UX principles, wireframing, prototyping, and responsive design using Figma.',
      'Successfully recreated a Figma Collaborative Tool clone, replicating real-time design collaboration features, toolbar, layers panel, and responsive canvas structure.',
      'Worked on two end-to-end design projects including a modern dashboard interface and a team collaboration platform, following design systems and accessibility guidelines.',
      'Practiced component-based design using Auto Layout, reusable components, constraints, and interactive prototyping.',
      'Collaborated with mentors for weekly design reviews and feedback, improving design thinking and attention to user-centered experiences.'
    ],
    'url': 'https://coderone.in/',
  }
]
