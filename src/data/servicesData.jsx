import React from 'react';
import {
    AIIcon,
    ConsultingIcon,
    CloudIcon,
    TrainingIcon,
    DesignIcon,
    CodeIcon,
    SecurityIcon,
    AutomationIcon,
    DigitalIcon,
    WebIcon,
    MobileIcon,
    TestingIcon
} from "../components/ServiceIcons";

import aiImg from '../assets/services/ai.avif';
import consultingImg from '../assets/services/it and business.avif';
import cloudImg from '../assets/services/data management.avif';
import trainingImg from '../assets/services/training.avif';
import designImg from '../assets/services/uiux.avif';
import softwareImg from '../assets/services/softwaredDevlopment.png';
import securityImg from '../assets/services/cyber.png';
import automationImg from '../assets/services/automation.png';
import digitalImg from '../assets/services/digital eng.png';
import webImg from '../assets/services/web dev.png';
import mobileImg from '../assets/services/mobile.png';
import testingImg from '../assets/services/testing.png';

export const servicesData = [
    {
        id: "ai-ml",
        title: "Artificial Intelligence & Machine Learning",
        icon: <AIIcon />,
        image: aiImg,
        shortText: "Automate workflows and surface predictive insights with custom AI models.",
        description: "We provide AI and machine learning solution that automate workflows, surface predictive insights, and improve decision-making. Our data scientists build custom models for forecasting, anomaly detection, NLP, computer vision, and recommender systems.",
        features: [
            "Predictive Analytics & Forecasting",
            "Natural Language Processing (NLP)",
            "Computer Vision & Image Recognition",
            "Custom Machine Learning Models",
            "AI Strategy & Implementation"
        ],
        benefits: [
            "Increased Operational Efficiency",
            "Data-Driven Decision Making",
            "Automated Complex Processes",
            "Enhanced Customer Experiences"
        ],
        fullContent: "In today's data-driven world, Artificial Intelligence (AI) and Machine Learning (ML) are no longer luxury technologies but essential tools for staying competitive. At Voxlom, we help enterprises harness the power of their data to build intelligent systems that learn, adapt, and evolve. Our solution cover the entire AI lifecycle, from data preparation and model training to deployment and continuous optimization."
    },
    {
        id: "consulting",
        title: "IT & Business Consulting",
        icon: <ConsultingIcon />,
        image: consultingImg,
        shortText: "Align technology roadmaps with business goals through expert strategic consulting.",
        description: "We align technology roadmaps with business goals through digital transformation strategy, process re-engineering, and technology selection.",
        features: [
            "Digital Transformation Strategy",
            "Process Re-engineering",
            "Technology Stack Selection",
            "IT Governance & Compliance",
            "Strategic Project Management"
        ],
        benefits: [
            "Optimized Tech Investment",
            "Reduced Operational Risk",
            "Faster Time-to-Market",
            "Scalable Business Architecture"
        ],
        fullContent: "Technology should be an enabler of business success, not a bottleneck. Our consulting services bridge the gap between high-level business objectives and technical execution. We work closely with your leadership teams to identify inefficiencies, select the right technologies, and create a roadmap for sustainable growth in a rapidly changing digital landscape."
    },
    {
        id: "cloud-data",
        title: "Data Management & Cloud Engineering",
        icon: <CloudIcon />,
        image: cloudImg,
        shortText: "Secure, scalable cloud architectures and real-time data pipelines on AWS, Azure, and GCP.",
        description: "We design secure, scalable data platforms and cloud architectures across major providers. Our teams implement data lakes, warehouses, and real-time pipelines.",
        features: [
            "Cloud Migration & Strategy",
            "Cloud-Native Architecture Design",
            "Data Warehousing & Data Lakes",
            "Real-time Data Processing",
            "Infrastructure as Code (IaC)"
        ],
        benefits: [
            "High System Availability",
            "Infinite Scalability",
            "Optimized Infrastructure Costs",
            "Enhanced Data Security"
        ],
        fullContent: "The cloud is the foundation of modern digital business. We specialize in building resilient, high-performance cloud environments that grow with your company. Whether you are moving from on-premise to the cloud or optimizing an existing multi-cloud setup, our engineering team ensures your data is accessible, secure, and ready for advanced analytics."
    },
    {
        id: "training",
        title: "Technology Training & Consulting",
        icon: <TrainingIcon />,
        image: trainingImg,
        shortText: "Upskill your teams in cloud, DevOps, AI/ML, and modern software development.",
        description: "We deliver hands-on technology training that upskill teams in cloud, DevOps, data engineering, and modern app development.",
        features: [
            "Custom Role-Based Training",
            "Cloud & DevOps Workshops",
            "AI/ML Foundational Courses",
            "Cybersecurity Awareness",
            "Executive Tech Primers"
        ],
        benefits: [
            "Bridged Internal Skills Gap",
            "Increased Team Productivity",
            "Faster Tech Adoption",
            "Improved Employee Retention"
        ],
        fullContent: "Technology is only as effective as the people who use it. We provide comprehensive training programs designed to empower your workforce with the skills needed to master modern technology stacks. Our training is project-focused and hands-on, ensuring your team can immediately apply what they've learned to solve real-world business problems."
    },
    {
        id: "design",
        title: "UI/UX Design & Development",
        icon: <DesignIcon />,
        image: designImg,
        shortText: "Craft user-centered experiences with cutting-edge design systems and responsive interfaces.",
        description: "We craft user-centered UI/UX for web and mobile, combining research, journey mapping, and high-fidelity prototypes.",
        features: [
            "User Research & Personas",
            "Information Architecture",
            "Interactive Prototyping",
            "Design Systems Development",
            "Visual Identity Design"
        ],
        benefits: [
            "Higher User Engagement",
            "Improved Conversion Rates",
            "Consistency Across Platforms",
            "Intuitive Product Navigation"
        ],
        fullContent: "Great design is about more than just aesthetics; it's about solving problems and creating delight. Our design team focuses on the user's journey, ensuring every interaction is meaningful and every interface is intuitive. We combine psychology, research, and expert visual design to build products that users love to use."
    },
    {
        id: "software-dev",
        title: "Software Development & Consulting",
        icon: <CodeIcon />,
        image: softwareImg,
        shortText: "Build custom product platforms with modern stacks and cloud-native architectures.",
        description: "We build custom software and product platforms with modern stacks, secure APIs, and agile execution.",
        features: [
            "Custom Enterprise Software",
            "SaaS Product Development",
            "API Architecture & Integration",
            "Microservices Development",
            "Agile Delivery Lifecycle"
        ],
        benefits: [
            "Tailored Business solution",
            "Reduced Technical Debt",
            "Scalable Software Core",
            "Seamless Third-Party Connectivity"
        ],
        fullContent: "Off-the-shelf software often falls short of unique business needs. We build bespoke software solution designed specifically to address your challenges. From initial discovery and architecture design to coding and deployment, we follow rigorous engineering standards to deliver software that is secure, maintainable, and highly performant."
    },
    {
        id: "security",
        title: "Cyber Protection & Security",
        icon: <SecurityIcon />,
        image: securityImg,
        shortText: "Defend your critical assets with advanced security architecture and strategy.",
        description: "We provide cybersecurity strategy, security architecture, and managed protection to defend critical organizational assets.",
        features: [
            "Security Risk Assessments",
            "Zero-Trust Architecture",
            "Cloud Security Hardening",
            "Identity & Access Management",
            "SOC Monitoring & Incident Response"
        ],
        benefits: [
            "Protected Intellectual Property",
            "Mitigated Data Breaches",
            "Regulatory Compliance (GDPR, HIPAA)",
            "Uninterrupted Business Operations"
        ],
        fullContent: "In an era of increasing digital threats, security cannot be an afterthought. We provide a proactive approach to cybersecurity, moving beyond simple firewalls to comprehensive protection strategies. Our security experts help you build a 'security-first' culture and implement technical safeguards that protect your data, your customers, and your reputation."
    },
    {
        id: "automation",
        title: "Automation solution",
        icon: <AutomationIcon />,
        image: automationImg,
        shortText: "Streamline tasks and cut costs with intelligent RPA and process orchestration.",
        description: "We implement intelligent automation with RPA and AI to streamline repetitive tasks and improve business accuracy.",
        features: [
            "Robotic Process Automation (RPA)",
            "Intelligent Document Processing",
            "Workflow Orchestration",
            "Legacy System Automation",
            "AI-Agent Integration"
        ],
        benefits: [
            "Significant Cost Savings",
            "Eliminated Human Error",
            "24/7 Process Execution",
            "Focus on High-Value Tasks"
        ],
        fullContent: "Human talent is best used for creative and strategic work, not repetitive data entry. Our automation solution use the latest in RPA and AI to handle the 'busy work' autonomously. We analyze your workflows, identify automation opportunities, and build intelligent bots that work alongside your team to boost morale and productivity."
    },
    {
        id: "digital-eng",
        title: "Digital Engineering",
        icon: <DigitalIcon />,
        image: digitalImg,
        shortText: "Re-architect legacy systems and build future-ready digital platforms.",
        description: "We drive digital transformation through modern product engineering and legacy system modernization.",
        features: [
            "Legacy Modernization",
            "System Re-architecture",
            "Continuous Integration/Deployment",
            "Digital Twin Development",
            "IoT Platform Engineering"
        ],
        benefits: [
            "Modernized Tech Infrastructure",
            "Increased System Resilience",
            "Data-Driven Innovation",
            "Enhanced Competitive Edge"
        ],
        fullContent: "Digital Engineering is the backbone of the modern enterprise. We help organizations break free from legacy constraints by re-architecting systems for the age of AI and Cloud. Our engineers apply advanced principles of scale, resilience, and connectivity to ensure your technical foundation supports your most ambitious business goals."
    },
    {
        id: "web-dev",
        title: "Web Development",
        icon: <WebIcon />,
        image: webImg,
        shortText: "High-performance, secure web applications built with modern frameworks.",
        description: "We build custom web applications using modern frameworks that are secure, scalable, and optimized for performance.",
        features: [
            "Progressive Web Apps (PWA)",
            "Single Page Applications (SPA)",
            "Server-Side Rendering (SSR)",
            "E-commerce Platforms",
            "Content Management Systems"
        ],
        benefits: [
            "Superior Load Speed",
            "Excellent Multi-Device Rendering",
            "Secure Customer Portals",
            "SEO-Optimized Codebase"
        ],
        fullContent: "Your website is often the first point of contact between you and your customers. Our web development team builds more than just sites; we build high-performance digital engines. Using technologies like React, Next.js, and specialized backend stacks, we create web experiences that are lightning-fast, secure, and designed to convert visitors into loyal customers."
    },
    {
        id: "app-dev",
        title: "Mobile App Development",
        icon: <MobileIcon />,
        image: mobileImg,
        shortText: "Intuitive mobile apps for iOS and Android focusing on performance and UX.",
        description: "We design and develop high-performance mobile applications focusing on intuitive interfaces and smooth performance.",
        features: [
            "Native iOS & Android Apps",
            "Cross-Platform (React Native/Flutter)",
            "Mobile-First Strategy",
            "Offline Application Support",
            "App Store Optimization (ASO)"
        ],
        benefits: [
            "Direct Customer Engagement",
            "Seamless On-the-Go Access",
            "Brand Loyalty Growth",
            "Leveraged Device Capabilities"
        ],
        fullContent: "The world has gone mobile, and your business should too. We develop mobile applications that feel like a natural extension of your brand. By prioritizing performance and fluid user experience, we ensure that your mobile presence provides real value to users, whether they are on a phone in their pocket or a tablet on their desk."
    },
    {
        id: "testing",
        title: "Software Testing & Maintenance",
        icon: <TestingIcon />,
        image: testingImg,
        shortText: "Bug-free software through comprehensive manual and automated QA strategies.",
        description: "We provide software testing and maintenance services to ensure your applications stay bug-free, secure, and performant.",
        features: [
            "Automated Regression Testing",
            "Performance & Load Testing",
            "Security Penetration Testing",
            "Usability & Compatibility QA",
            "24/7 Managed Maintenance"
        ],
        benefits: [
            "Verified Product Quality",
            "Minimized Post-Launch Bugs",
            "Guaranteed System Uptime",
            "Continuous Security Patches"
        ],
        fullContent: "Software is living and requires care. Our QA and maintenance team acts as the guardians of your digital products. We use rigorous testing frameworks to catch issues before your users do, and our maintenance services ensure your systems stay updated against security threats and perform consistently under high load."
    }
];

