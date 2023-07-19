import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
unesp,
  plant,
  danilo,
  gobarber,
  threejs,
  rafa,
  podcastr,
  filipe,
  dexperWhite,
  medpass,
  savepng,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "Node.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];


const experiences = [
  {
    title: "FrontEnd Engineer",
    company_name: "Dexper",
    icon: dexperWhite,
    iconBg: "#383E56",
    date: "Jul 2022 - Present",
    points: [
      "Development and maintaining of a scalable events-oriented platform using Next.js and other React + JavaScript related technologies.",
      "Development of a Visual Editor Panel to apply style changes to the white-label product based on the client’s specific theming by using Firestore.",
      "Development of a middle layer to adapt and enrich the data to make it directly consumable by the components, avoiding requests and lots of logical pourposes in the components.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility, using BrowserStack.",
      "Usage of Next.js features such as file-system routing, SSG, and SSR.",
      "Firebase and Google Cloud Platform.",
      "Usage of Chakra UI and its most advanced features, such as Multipart styling.",
      "Usage of Storybook for creating documentation on FrontEnd.",
      "Experience with Redux and Redux Saga for state management and its side effects.",
      "Unit testing with Jest and React Testing Library.",
      "We hosted an event for GitHub last year called: GitHub Universe, and in the current year, we have hosted Figma’s Config 2023 Conference with about ~40k spectators."
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "Medpass",
    icon: medpass,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Sep 2022",
    points: [
      "Development and maintaining of a scalable health application with React Native, Expo Bare Workflow + TypeScript, used for people to schedule consults with health professionals such as doctors, psychologists, nurses, etc.",
      "Development of a medical dashboard to attend patients by video chat, using Chakra UI.",
      "Usage of Websockets (sockets.io) to establish communication between server and clients with real-time features like chat, notifications, and live updates.",
      "Experience with Clean Code and Use Cases ensuring best practices and standardization.",
      "Usage of Lottie to integrate dynamic and interactive animations into the mobile application, enhancing the user experience and visual appeal of the app.",
      "Mentored beginner level developers to introduce the platform overview and also to improve engineering skills.",
      "Unit testing with Jest and React Testing Library.",
      "Experience with React Query for managing and fetching asynchronous data in the application.",
      "Experienced CI/CD with CircleCI to automate the build, test, and deploy the application, ensuring faster development cycles and reliable software delivery.",
      "Experienced AWS by using its platform and some of its services.",
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "Savemais",
    icon: savepng,
    iconBg: "#383E56",
    date: "Jan 2021 - Sep 2021",
    points: [
      "Development of scalable financial applications used by several Credit Unions and Banks.",
      "Responsible for switching the current mobile technology used at the time which was Xamarin - changing it to React Native + TypeScript.",
      "Usage of native mobile features with Expo, such as camera to make the user's step by step signing in the app.",
      "Usage of Figma to create all user interfaces for mobile.",
      "Usage of atomic design for structuring and organizing the components of a user interface in a hierarchical manner, making it easier to create consistent, scalable, and reusable design systems.",
      "Maintained some Vanilla JavaScript legacy applications.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Development of REST APIs by using Node.js with TypeScript and Express.js, in a micro-service level.",
      "Usage of databases such as MongoDB and PostgreSQL.",
      "Usage of Docker to create and manage containerized applications, allowing developers to package applications and their dependencies into isolated containers for easy portability across different environments.",
      "Usage of Postman to test the HTTP requests and Swagger to create documentation for the APIs.",
    ],
  },
  {
    title: "Academical Researcher Trainee",
    company_name: "Unesp",
    icon: unesp,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Jul 2020",
    points: [
      "Introduced basic technology, algorithms, and HTML to elder people in the University’s Tech Lab.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A meticulous and perfectionist FrontEnd developer, delivering top-quality work with great attention to detail. Highly recommended!",
    name: "Danilo Pereira",
    designation: "UI/UX Designer",
    linkedin: 'https://www.linkedin.com/in/dnilopereira/',
    image: danilo,
  },
  {
    testimonial:
      "An exceptional FrontEnd Developer and a great co-worker, providing clear guidance and valuable insights. A pleasure to learn from him!",
    name: "Rafael Silva",
    designation: "Data Analyst",
    linkedin: 'https://www.linkedin.com/in/rafael-costa-da-silva-202931117/',
    image: rafa,
  },
  {
    testimonial:
    "Collaborating with Arthur was a pleasure! Excellent communication and top-notch coding skills.",
    name: "Filipe Pfluck",
    designation: "Software Engineer",
    linkedin: 'https://www.linkedin.com/in/filipe-hebestreit-pfluck-9389a31a6/',
    image: filipe,
  },
];

const projects = [
  {
    name: "Plant Manager",
    description:
      "Plant Manager is a daily reminder for people to water their plants, you can register your plant species in the application, and see what environment it adapts the most.",
    tags: [
      {
        name: "react-native-ts",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "style-sheet",
        color: "pink-text-gradient",
      },
    ],
    image: plant,
    source_code_link: "https://github.com/arthurfrollini/nlw-reactnative-plantmanager",
  },
  {
    name: "Podcastr",
    description:
      "Podcastr is a web application developed with Next.js to allow users to listen to their favorite podcasts, be aware of latest additions and read information of it.",
      tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react-typescript",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: podcastr,
    source_code_link: "https://github.com/arthurfrollini/nlw-next-podcastr",
  },
  {
    name: "GoBarber",
    description:
      "BackEnd API used for people to schedule an appointment in a barbershop, the code was written using pure javascript, sequelize and postgreSQL.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: gobarber,
    source_code_link: "https://github.com/arthurfrollini/bootcamp-node-gobarber",
  },
];

export { services, technologies, experiences, testimonials, projects };