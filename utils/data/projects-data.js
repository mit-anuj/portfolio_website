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
        name: 'Attendo',
        description: 'This innovative project revolutionizes attendance tracking through a QR code-based system. Teachers display their QR code, which students scan to mark attendance seamlessly while seated. The platform supports four user roles: staff, students, employees, and administration, with the admin module encompassing comprehensive management capabilities. This approach not only simplifies attendance recording but also enhances accuracy and efficiency, catering to the diverse needs of educational institutions. It’s a step towards modernizing academic administrative tasks, leveraging technology for streamlined operations.',
        tools: ['HTML','CSS', 'Javascript','Php' ],
        role: 'Front End Developer',
        code: 'https://github.com/madm234/updated--Qr-code-Attendance-2022',
        demo: 'https://aeis.dituniversity.edu.in/qrcode/yogi/index',
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