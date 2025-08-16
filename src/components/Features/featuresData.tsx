import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // Mobile App Development — phone + spark
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7 2C5.895 2 5 2.895 5 4v16c0 1.105.895 2 2 2h10c1.104 0 2-.895 2-2V4c0-1.105-.896-2-2-2H7zm0 2h10v16H7V4zm5 14.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/>
</svg>
    ),
    title: "Mobile App Development",
    paragraph:
      "We build fast, secure, and user-friendly mobile applications tailored for both Android and iOS. Our apps are designed to deliver smooth performance, attractive interfaces, and scalability to meet business growth.",
  },
  {
    id: 2,
    icon: (
      // Web Development — browser window + code brackets
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
  <path d="M3 4a1 1 0 0 0-1 1v3h20V5a1 1 0 0 0-1-1H3zm19 6H2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9zM8.5 13l-2.5 3 2.5 3h1.5l-2-3 2-3H8.5zm7 0l2 3-2 3h-1.5l2.5-3-2.5-3H15.5z"/>
</svg>
    ),
    title: "Web Development",
    paragraph:
      "We create modern, responsive, and SEO-friendly websites that provide seamless user experiences. From simple business websites to complex platforms, we ensure your web presence is strong and impactful.",
  },
  {
    id: 3,
    icon: (
      // Cloud & DevOps — cloud + gear
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cloud DevOps">
        <path d="M20 16.5A3.5 3.5 0 0 0 16.5 13H15a4 4 0 0 0-7.9.6A3 3 0 0 0 6 18h10z"/>
        <g transform="translate(3.5,2.5)">
          <circle cx="14" cy="14" r="2" />
          <path d="M14 10v-1M14 18v-1M16 14h1M12 14h-1" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </g>
      </svg>
    ),
    title: "Cloud & DevOps Solutions",
    paragraph:
      "We offer cloud integration and DevOps services to optimize infrastructure, improve deployment cycles, and enhance scalability. Our solutions ensure reliability, cost-efficiency, and security for your business.",
  },
  {
    id: 4,
    icon: (
      // Cybersecurity — shield + lock
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cybersecurity">
        <path d="M12 2l7 3v5c0 5.25-3.75 9.75-7 11-3.25-1.25-7-5.75-7-11V5l7-3z"/>
        <rect x="9.2" y="9.8" width="5.6" height="4.4" rx="0.8" ry="0.8" fill="white"/>
        <path d="M11 11.5v-1a1 1 0 1 1 2 0v1" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: "Cybersecurity Services",
    paragraph:
      "We safeguard your digital assets with advanced security measures including threat monitoring, penetration testing, and compliance support. Our goal is to minimize risks and build customer trust.",
  },
  {
    id: 5,
    icon: (
      // AI & Automation — brain / circuit + spark
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-bot"
>
  <rect width="16" height="12" x="4" y="10" rx="2" />
  <path d="M12 6V4" />
  <path d="M8 2h8" />
  <circle cx="8" cy="16" r="1" />
  <circle cx="16" cy="16" r="1" />
</svg>

    ),
    title: "AI & Automation",
    paragraph:
      "We develop AI-powered solutions and automation tools that streamline operations, enhance decision-making, and reduce manual effort. From chatbots to predictive analytics, we help businesses work smarter.",
  },
  {
    id: 6,
    icon: (
      // E-Commerce — shopping bag + cart tag
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ecommerce">
        <path d="M6 6h12l-1.2 10.2A2 2 0 0 1 14.9 18H9.1a2 2 0 0 1-1.9-1.8L6 6z" />
        <path d="M8 6V4a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="10.5" cy="20.5" r="1" />
        <circle cx="15.5" cy="20.5" r="1" />
      </svg>
    ),
    title: "E-Commerce Solutions",
    paragraph:
      "We design and develop feature-rich e-commerce platforms with secure payment gateways, inventory management, and personalized shopping experiences to boost online sales.",
  },
];

export default featuresData;
