import { early, fiverr, do1 } from "../assets/images";
import {
    css,
    express,
    git,
    github,
    contact,
    html,
    cat,
    c,
    ape,
    java1,
    oreo,
    assembly,
    network,
    bitcoin,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    nft,
    roblox,
    metamask,
    react,
    aws,
    bash,
    elastic_search,
    ethereum,
    java,
    linux,
    magento,
    wordpress,
    mariadb,
    mysql,
    nginx,
    python,
    solidity,
    apache
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: apache,
        name: "Apache",
        type: "Frontend",
    },
    { 
        imageUrl: aws,
        name: "AWS",
        type: "Cloud Service",
    },
    { 
        imageUrl: bash,
        name: "Bash",
        type: "Scripting Language",
    },
    { 
        imageUrl: elastic_search,
        name: "Elastic Search",
        type: "Search Engine",
    },
    { 
        imageUrl: ethereum,
        name: "Ethereum",
        type: "Blockchain Platform",
    },
    { 
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    { 
        imageUrl: linux,
        name: "Linux",
        type: "Operating System",
    },
    { 
        imageUrl: magento,
        name: "Magento",
        type: "E-commerce Platform",
    },
    { 
        imageUrl: wordpress,
        name: "WordPress",
        type: "Content Management System",
    },
    { 
        imageUrl: mariadb,
        name: "MariaDB",
        type: "Database Management System",
    },
    { 
        imageUrl: mysql,
        name: "MySQL",
        type: "Database Management System",
    },
    { 
        imageUrl: nginx,
        name: "Nginx",
        type: "Web Server",
    },
    { 
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    { 
        imageUrl: solidity,
        name: "Solidity",
        type: "Programming Language",
    },
    { 
        imageUrl: nft,
        name: "NFT",
        type: "Digital Asset",
    },
    { 
        imageUrl: roblox,
        name: "Roblox",
        type: "Game Development Platform",
    },
    { 
        imageUrl: metamask,
        name: "MetaMask",
        type: "Cryptocurrency Wallet",
    },    
    { 
        imageUrl: apache,
        name: "Apache",
        type: "Web Server",
    }    
];

export const experiences = [
    {
        title: "Freelancer",
        company_name: "Fiverr",
        icon: fiverr,
        iconBg: "#b7e4c7",
        date: "Jun 2020 - Present",
        points: [
            "Content Writing",
            "Web Scrapping using Python and Software",
            "Website Design/ Development",
            "Generated NFTs using algorithm",
            "NFT art using Photoshop",
            "Worked on C/C++ and Rust assignments/tasks",
            "Wrote few codes in Assembly/C/C++/Java/Python",
            "Created networking simulations on packet tracer",
            "Minted NFTs on opensea using selenium",
            "Advertising(Facebook, Instagram, Medium",
            "Twitter, Telegram, Reddit and Discord",
        ],
    },
    {
        title: "Blockchain Intern",
        company_name: "Erly Stage Studios",
        icon: early,
        iconBg: "#accbe1",
        date: "Jul 2021 - Aug 2021",
        points: [
            "Generated 10k NFTs using the algorithm in Ruby programming language.",
            "Developed Oreo Obby game on Roblox platform for Oreo Pakistan using Lua programming.",
        ],
    },
    {
        title: "Cloud Engineer",
        company_name: "Cloudways - DigitalOcean",
        icon: do1,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - Present",
        points: [
            "Resolving customer issues related to Cloud through chats and tickets.",
            "Interacting with clients to understand and address their concerns.",
            "Working on Linux systems to troubleshoot various issues.",
            "Handling SSL, Nginx, Varnish, reverse proxy, DNS, Git issues, server-side problems, and server deployments.",
            "Developed Oreo Obby game on Roblox platform for Oreo Pakistan using Lua programming.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ThakurGumansingh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/thakurgumansingh/',
    }
];

export const projects = [
    {
        iconUrl: ape,
        theme: 'btn-back-red',
        name: 'NFT Generator',
        description: 'Developed a GUI-based NFT Generator using Streamlit in Python. The tool simplifies the process by taking a folder containing various parts of an image with different variations(such as nose, eyes, face etc) as input and generates all possible combinations seamlessly.',
        link: 'https://github.com/ThakurGumansingh/NFT-Generator',
    },
    {
        iconUrl: cat,
        theme: 'btn-back-green',
        name: 'Crazy Cats',
        description: 'Successfully generated and minted 5000 CrazyCats NFTs on OpenSea, utilizing the Polygon network through MetaMask. Automated the minting process using the Python NFT minter tool and subsequently sold a portion of the collection on the OpenSea marketplace.',
        link: 'https://opensea.io/collection/crazycats1',
    },
    {
        iconUrl: oreo,
        theme: 'btn-back-blue',
        name: 'Oreo obby Game',
        description: 'Oreo Obby Game on Roblox, first designed the game using the Roblox platform and then replaced the Roblox assets with Oreo related assets provided by team member, later scripted the obstacles with Lua programming language.',
        link: '',
    },
    {
        iconUrl: java1,
        theme: 'btn-back-pink',
        name: 'Flight Booking System(Java)',
        description: 'A fully responsive web-based Flight Booking System for university project named Karachi Airlines based on the Model View Controller (MVC) Architecture made using Java Servlets, Java Server Pages (JSPs).',
        link: 'https://github.com/ThakurGumansingh/Flight-Booking-System-Java',
    },
    {
        iconUrl: network,
        theme: 'btn-back-black',
        name: 'SZABIST Campuses Network Simulation',
        description: 'In this project, I have simulated the University Campuses on packet tracer, every lab classroom, connected throgh network, using Ring Topology.',
        link: 'https://github.com/ThakurGumansingh/Univerity-Campus-Simulation-PacketTracer',
    },
    {
        iconUrl: bitcoin,
        theme: 'btn-back-yellow',
        name: 'Cryptocurrency Price Predirection - Research Paper',
        description: 'Wrote research paper on Cryptocurrency price prediction using advanced deep learning models like LSTM, ARIMA, XG Boost, GRU, and Prophet.',
        link: 'https://github.com/ThakurGumansingh/Cryptocurrency_price_prediction',
    },
    {
        iconUrl: c,
        theme: 'btn-back-yellow',
        name: 'Flight Booking System(C Language)',
        description: 'An C langauge based flight booking system that initiates with a menu, allowing users to select options and proceed.',
        link: 'https://github.com/ThakurGumansingh/Flight-Booking-System-C',
    },
    {
        iconUrl: assembly,
        theme: 'btn-back-yellow',
        name: 'Flight Booking System(Assembly)',
        description: 'An assembly-based flight booking system that initiates with a menu, allowing users to select options and proceed.',
        link: 'https://github.com/ThakurGumansingh/Flight-Booking-System-Assembly',
    }
];