
export const servicesData = [
    {
        id: "web_development",
        title: "Web Development",
        img: "services-1.jpg",
        icon: "bi-code-slash",
        subtitle: "Tailoring Tally to specific business needs.",
        description:
            "We create modern and responsive website designs tailored to your business.",
        image: "/images/services.jpg",
        points: [
            "Responsive design",
            "Modern UI/UX",
            "SEO friendly",
        ],
        categories: [
            {
                id: "frontend",
                title: "Frontend Development",
                items: [
                    { name: "React Development", slug: "react" },
                    { name: "HTML/CSS Websites", slug: "html-css" },
                    { name: "Landing Pages", slug: "landing-pages" },
                    { name: "Responsive Design", slug: "responsive" },
                ],
            },
            {
                id: "backend",
                title: "Backend Development",
                items: [
                    { name: "Node.js Development", slug: "nodejs" },
                    { name: "PHP Development", slug: "php" },
                    { name: "Laravel Development", slug: "laravel" },
                    { name: "API Development", slug: "api" },
                ],
            },
            {
                id: "fullstack",
                title: "Full Stack Solutions",
                items: [
                    { name: "MERN Stack", slug: "mern" },
                    { name: "Custom Web Apps", slug: "custom-web-apps" },
                    { name: "E-commerce Development", slug: "ecommerce" },
                ],
            },
        ],
    },

    {
        id: "crm",
        title: "Software Development",
        subtitle: "We design and develop responsive, high-performance websites and web applications tailored to your business needs.",
        description:
            "Custom software solutions to automate and scale your business operations.",
        image: "/images/services.jpg",
        points: [
            "Custom ERP systems",
            "CRM solutions",
            "Automation tools",
        ],
        img: "services-3.jpg",
        icon: "bi-people",
        categories: [
            {
                id: "crm-solutions",
                title: "CRM Solutions",
                items: [
                    { name: "Sales CRM", slug: "sales-crm" },
                    { name: "Lead Management", slug: "lead-management" },
                    { name: "Customer Support Systems", slug: "support-system" },
                ],
            },
            {
                id: "erp-systems",
                title: "ERP Systems",
                items: [
                    { name: "Inventory Management", slug: "inventory" },
                    { name: "HR Management", slug: "hrm" },
                    { name: "Accounting Systems", slug: "accounting" },
                ],
            },
            {
                id: "automation",
                title: "Automation Tools",
                items: [
                    { name: "Workflow Automation", slug: "workflow" },
                    { name: "Business Process Automation", slug: "bpa" },
                    { name: "Reporting Dashboards", slug: "dashboard" },
                ],
            },
        ],
    },

    {
        id: "tally",
        title: "Tally",
        subtitle: "We provide custom software solutions for businesses including CRM, ERP, and automation systems.",
        description:
            "Manage your products effectively with structured workflows.",
        image: "/images/services.jpg",
        points: [
            "Inventory tracking",
            "Product lifecycle",
            "Reports & analytics",
        ],
        img: "services-1.jpg",
        icon: "bi-calculator",
        categories: [
            {
                id: "tally-software",
                title: "Tally Softwares",
                items: [
                    { name: "Tally Software", slug: "tally-software" },
                    { name: "Tally Prime", slug: "tally-prime" },
                    { name: "TSS", slug: "tss" },
                ],
            },
            {
                id: "tally-services",
                title: "Tally Services",
                items: [
                    { name: "Tally on Cloud", slug: "tally-cloud" },
                    { name: "Support", slug: "support" },
                ],
            },
        ],
    },
];