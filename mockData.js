export const INITIAL_COMPANIES = [
  {
    id: "ust",
    name: "UST Global",
    logo: "🌴",
    logoColor: "bg-teal-600 text-white",
    rating: 4.4,
    reviewCount: 342,
    about: "UST is a global digital technology solutions company. Headquartered in California, our massive campuses in Technopark Trivandrum and Infopark Kochi drive digital transformation for global Fortune 500 enterprises with over 15,000 employees in Kerala.",
    industry: "IT Services & Consulting",
    location: "Infopark Kochi / Technopark Trivandrum",
    website: "https://www.ust.com",
    employees: "15,000+ (Kerala)",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=60"
    ],
    reviews: [
      { author: "Rahul Nair", rating: 5, date: "2026-04-12", comment: "Outstanding work culture, modern infrastructure, and great work-life balance at the Trivandrum campus." }
    ],
    isVerified: true
  },
  {
    id: "infosys",
    name: "Infosys",
    logo: "🔷",
    logoColor: "bg-blue-600 text-white",
    rating: 4.2,
    reviewCount: 452,
    about: "Infosys is a global leader in next-generation digital services and consulting. Our signature campus in Technopark, Trivandrum is built with traditional Kerala architectural ethics and represents one of the largest IT hubs in the state, offering pioneering software development operations.",
    industry: "IT Services",
    location: "Technopark Trivandrum",
    website: "https://www.infosys.com",
    employees: "10,000+ (Kerala)",
    gallery: [
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=600&auto=format&fit=crop&q=60"
    ],
    reviews: [
      { author: "Deepak K.", rating: 4, date: "2026-03-20", comment: "The Technopark campus is beautiful. Standard MNC processes, great learning curve, and helpful peers." }
    ],
    isVerified: true
  },
  {
    id: "tataelxsi",
    name: "Tata Elxsi",
    logo: "🧩",
    logoColor: "bg-cyan-700 text-white",
    rating: 4.1,
    reviewCount: 198,
    about: "Tata Elxsi is a world-leading provider of design and technology services across industries. Our Trivandrum centers specialize in embedded systems, automotive engineering, broadcast engineering, IoT, and product prototyping.",
    industry: "Engineering Research & Design",
    location: "Technopark Trivandrum",
    website: "https://www.tataelxsi.com",
    employees: "4,000+ (Kerala)",
    gallery: [
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&auto=format&fit=crop&q=60"
    ],
    reviews: [],
    isVerified: true
  }
];

export const INITIAL_JOBS = [
  {
    id: "job1",
    title: "Senior Full Stack Engineer (React/Node)",
    companyId: "ust",
    companyName: "UST Global",
    logo: "🌴",
    logoColor: "bg-teal-600 text-white",
    salary: "₹12,00,000 - ₹18,00,000 LPA",
    salaryVal: 15,
    experience: "5 - 8 Years",
    expMin: 5,
    location: "Kochi",
    district: "Ernakulam",
    jobType: "Hybrid",
    category: "Software Development",
    desc: "We are seeking a senior engineer to drive our enterprise client platform migrations. You will engineer microservices, lead front-end teams in React, and architect robust cloud pipelines.",
    skills: ["React.js", "Node.js", "Express", "MongoDB", "AWS", "Docker"],
    responsibilities: [
      "Develop clean, responsive UI matching high-fidelity Figma mockups.",
      "Design microservices APIs and link MongoDB with optimized indexes."
    ],
    benefits: ["Comprehensive Family Health Insurance", "Flexible Work Hours"],
    process: ["Online Technical Assessment", "System Design Interview"],
    isFeatured: true,
    isApproved: true,
    postedDate: "2026-05-18"
  },
  {
    id: "job2",
    title: "Associate Software Engineer - Java / Spring Boot",
    companyId: "infosys",
    companyName: "Infosys",
    logo: "🔷",
    logoColor: "bg-blue-600 text-white",
    salary: "₹4,50,000 - ₹7,00,000 LPA",
    salaryVal: 5.5,
    experience: "1 - 3 Years",
    expMin: 1,
    location: "Thiruvananthapuram",
    district: "Thiruvananthapuram",
    jobType: "Onsite",
    category: "Software Development",
    desc: "Join our core digital engineering group at Trivandrum. This role involves software coding, debugging, unit testing, and operating with large-scale relational databases.",
    skills: ["Java", "Spring Boot", "REST APIs", "MySQL", "Git"],
    responsibilities: [
      "Write clean, documented, and reusable Java code.",
      "Integrate RESTful services with Angular/React frontends."
    ],
    benefits: ["Fully Paid Gym & Recreation Access"],
    process: ["Coding Test on Hackerrank", "Technical Panel Interview"],
    isFeatured: true,
    isApproved: true,
    postedDate: "2026-05-19"
  },
  {
    id: "job7",
    title: "Digital Marketing Specialist (SEO & Growth)",
    companyId: "carestack",
    companyName: "CareStack (KSUM)",
    logo: "🦷",
    logoColor: "bg-emerald-500 text-white",
    salary: "₹5,00,000 - ₹8,50,000 LPA",
    salaryVal: 7,
    experience: "2 - 4 Years",
    expMin: 2,
    location: "Kochi",
    district: "Ernakulam",
    jobType: "Hybrid",
    category: "Digital Marketing",
    desc: "We are seeking a result-driven Digital Marketing Specialist to lead our SaaS customer acquisition. You will design, execute, and optimize organic search (SEO), content marketing strategies, Google/Meta Ads campaigns, and scale conversion funnels.",
    skills: ["SEO", "Google Analytics", "Content Writing", "Copywriting", "SMM", "Meta Ads", "Email Marketing"],
    responsibilities: [
      "Optimize website content and landing pages for organic SEO growth.",
      "Execute paid campaigns on Google/Meta Ads."
    ],
    benefits: ["Generous ESOPs", "Health Insurance"],
    process: ["Resume Screening", "Case Study Challenge", "Marketing Panel"],
    isFeatured: true,
    isApproved: true,
    postedDate: "2026-05-20"
  },
  {
    id: "job8",
    title: "Commercial Product Photographer & Videographer",
    companyId: "toonz",
    companyName: "Toonz Animation",
    logo: "🎨",
    logoColor: "bg-yellow-500 text-black",
    salary: "₹6,00,000 - ₹10,00,000 LPA",
    salaryVal: 8,
    experience: "3 - 6 Years",
    expMin: 3,
    location: "Thiruvananthapuram",
    district: "Thiruvananthapuram",
    jobType: "Onsite",
    category: "Photography & Creative Arts",
    desc: "Join Toonz visual media house as a Commercial Product Photographer and Videographer. You will direct photoshoot sessions, record studio visual assets, and edit promotional video reels.",
    skills: ["Commercial Photography", "Lighting", "Adobe Photoshop", "Adobe Premiere", "Videography"],
    responsibilities: [
      "Lead creative product, portrait, and cinematic studio photography.",
      "Edit high-resolution images and videos."
    ],
    benefits: ["Pro DSLRs provided", "Full Studio Access"],
    process: ["Portfolio Review", "Live Studio Shoot Test"],
    isFeatured: true,
    isApproved: true,
    postedDate: "2026-05-20"
  }
];

export const KERALA_DISTRICTS = [
  "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", 
  "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", 
  "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"
];
