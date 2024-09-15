import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'CapLab',
        description: "Me and my team build a platform to centralizing project submission, collaboration and evaluation workflows for efficiency. Revolutionized project management with streamlined processes.Fosters collaborative innovation, ensuring data security and promoting excellence with robust features for seamless interactions and feedback exchanges.",
        tools: ["Next.js"," Supabase","Node.js","Vercel","Git","Mailgun","Resend",'Tailwind CSS'],
        role: 'Full Stack Developer',
        code: 'https://github.com/rahuldivyansh/caplab/tree/main',
        demo: 'https://caplab.shortr.in/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Leetcode Clone',
        description: 'I developed a LeetCode-inspired coding platform that allows users to practice problems in multiple programming languages, including JavaScript and Python. The platform features integrated YouTube solutions for each problem, providing in-depth explanations and tutorials. Users can interact with problems by liking them and adding them to their favorites, offering a personalized experience for tracking progress. This project demonstrates my full-stack development skills and passion for creating user-friendly tools that enhance learning and productivity.',
        tools: ['HTML','CSS', 'Javascript','Php' ],
        role: 'Full Stack Developer',
        code: 'https://github.com/mit-anuj/leetcode-clone',
        demo: 'https://leetcode-clone-rouge.vercel.app/',
        image: travel,
    },
    {
        id: 3,
        name: 'Sorting Visualizer',
        description: 'Crafted a dynamic website illustrating sorting algorithms through captivating animations, where learning meets visual delight. Empowered users to control the animation’s pace and size of the array, embracing the journey of knowledge at their own tempo.',
        tools: ['HTML','CSS','Javascript'],
        code: 'https://github.com/mit-anuj/Sorting-Visualizer',
        role: 'Full Stack Developer',
        demo: 'https://mit-anuj.github.io/Sorting-Visualizer/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'iNotebook',
        description: "Crafted a captivating Full-Stack application, streamlining user onboarding with smooth login and signup functionalities. Incorporated a user-friendly form for easy note-taking and organization. Developed a visually striking landing page to display notes, fostering user engagement. Employed cutting-edge technologies to deliver top-notch performance and a satisfying user experience. This project exemplifies the fusion of aesthetic design and technical prowess, providing a seamless digital environment for note management.",
        tools: ['ReactJS', 'Bootstrap', 'NodeJS', 'Express', "MongoDB",'Mongoose'],
        code: 'https://github.com/mit-anuj/iNotebook',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },