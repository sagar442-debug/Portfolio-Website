export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Software as a service tool called Wizresume",
    description: "Build ats friendly resume in one click",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "No-BS-Resume-Builder",
    des: "A full stack SaaS tool that lets you build ATS friendly resume in one click!",
    img: "/WizResume.png",
    iconLists: [
      "/next.svg",
      "/mongodb.svg",
      "/cloudflare.svg",
      "/aws.svg",
      "/node.svg",
      "/c.svg",
    ],
    link: "https://no-bs-resume-builder.vercel.app/",
  },
  {
    id: 2,
    title: "Realtime Chat Application Eve Chat App",
    des: "A real time chat application to chat with your group and friends.",
    img: "/EveChatApp.png",
    iconLists: ["/re.svg", "/tail.svg", "/mongodb.svg", "/firebase.svg"],
    link: "https://eve-chat-app-v1.fly.dev/",
  },
  {
    id: 3,
    title: "Movix Explorer ",
    des: "A frontend heavy web application built to explore movies on the internet using imdb api.",
    img: "/MovixExplorer.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://movix-explore-react-web-app.vercel.app/",
  },
  {
    id: 4,
    title: "Image Compressor Web App",
    des: "Compress your image to any size you want your image to be with minimum effect on the quality!",
    img: "/FileComp.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://file-compressor-pi.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer at Inteligise 8 months",
    desc: `
Designed, built, and deployed the company’s flagship website and product prototype using Next.js, GraphQL, MongoDB, and Redis, improving processing speed and output accuracy by 60%.
Led end-to-end product design in Figma, integrating user feedback and modern UI principles to boost engagement metrics by 40%.
Architected a scalable, secure infrastructure on Microsoft Azure, cutting deployment times by 50% and reducing downtime to near-zero.
Integrated AI-driven modules to automate key workflows, increasing internal operational efficiency by 30%.
Championed best practices in code quality, CI/CD, and performance monitoring—mentored a team of 4+ developers.
Played a key role in aligning product development with business goals, directly contributing to a 2x increase in customer acquisition during beta launch.`,
    className: "md:col-span-2",
    thumbnail: "/Geomatics.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sagar442-debug",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/sagar_306",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sagar-sapkota091/",
  },
];
