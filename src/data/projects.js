import project1 from '../assets/projects/project-1.png';
import project2 from '../assets/projects/project-2.png';
import project3 from '../assets/projects/project-3.png';
import project4 from '../assets/projects/project-4.png';
import project5 from '../assets/projects/project-5.png';

export const projects = [
    {
        id: 1,
        title: "Luxe Furnishings",
        category: "E-commerce",
        description: "A high-end furniture brand's digital experience, focusing on minimalist design and seamless shopping.",
        image: project1,
        features: ["Custom Webflow E-commerce", "Advanced CMS Filtering", "GSAP Animations"],
        showInHome: true,
        link: null
    },
    {
        id: 2,
        title: "FinTrack Dashboard",
        category: "Fintech",
        description: "Advanced analytics dashboard for managing complex financial data with clean, intuitive visualizations.",
        image: project2,
        features: ["React Integration", "Data Visualization", "User Authentication"],
        showInHome: true,
        link: null
    },
    {
        id: 3,
        title: "Cre8ive Agency",
        category: "Creative Portfolio",
        description: "A bold, vibrant agency portfolio that breaks the mold with unique layouts and immersive interactions.",
        image: project3,
        features: ["Custom Interactions", "Responsive Design", "Client-First Naming"],
        showInHome: true,
        link: "" // Testing validation
    },
    {
        id: 4,
        title: "HealthCore Platform",
        category: "Healthcare",
        description: "A secure, accessible web portal for patients to manage appointments, prescriptions, and health records.",
        image: project4,
        features: ["HIPAA Compliant", "Member Portal", "Accessibility Optimized"],
        showInHome: false,
        link: null
    },
    {
        id: 5,
        title: "EcoDrive App Landing",
        category: "SaaS",
        description: "High-converting landing page for an electric vehicle routing application with dynamic pricing calculators.",
        image: project5,
        features: ["API Integration", "Lottie Animations", "Lighthouse Score 99+"],
        showInHome: false,
        link: null // Testing validation
    }
];
