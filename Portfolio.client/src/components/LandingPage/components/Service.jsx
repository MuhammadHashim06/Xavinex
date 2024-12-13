import { useState } from "react";
import cutomsoftware from '../../../assets/customsoftware.png'
import devops from '../../../assets/devops.png'
import legacy from '../../../assets/legacy.png'
import mobileapp from '../../../assets/mobileapp.png'
import qa from '../../../assets/qa.png'
import webapp from '../../../assets/webapp.png'
import "./Service.css";

export default function Service() {

  const aiSolutions = [
    {
      imageurl: 'aiAutomation', 
      head: "Intelligent Automation", 
      para: "Streamline your operations with AI-driven automation that enhances efficiency and reduces manual effort."
    },
    {
      imageurl: 'predictiveAnalytics', 
      head: "Predictive Analytics", 
      para: "Unlock actionable insights and predict future trends with advanced AI and machine learning models."
    },
    {
      imageurl: 'nlp', 
      head: "Natural Language Processing", 
      para: "Empower your systems to understand, interpret, and respond to human language intelligently."
    },
    {
      imageurl: 'customAI', 
      head: "Custom AI Solutions", 
      para: "Develop AI tools tailored to your business needs, solving unique challenges effectively."
    },
    {
      imageurl: 'realTime', 
      head: "Real-Time Decision Making", 
      para: "Enable your business to make quick, data-backed decisions with AI-powered insights."
    },
    {
      imageurl: 'aiIntegration', 
      head: "AI Integration", 
      para: "Seamlessly integrate AI capabilities into your existing systems to supercharge performance."
    }
  ];
  
  const productDevelopment = [
    {
      imageurl: 'endToEndDev', 
      head: "End-to-End Development", 
      para: "Transform your ideas into fully functional, market-ready products with our comprehensive services."
    },
    {
      imageurl: 'tailoredFeatures', 
      head: "Tailored Features", 
      para: "Build products with customized features that align perfectly with your business requirements."
    },
    {
      imageurl: 'userCentricDesign', 
      head: "User-Centric Design", 
      para: "Create intuitive and user-friendly interfaces to enhance user experience and engagement."
    },
    {
      imageurl: 'crossPlatform', 
      head: "Cross-Platform Compatibility", 
      para: "Ensure your product works seamlessly across web, mobile, and desktop platforms."
    },
    {
      imageurl: 'scalableSolutions', 
      head: "Scalable Solutions", 
      para: "Develop solutions that grow with your business, handling increased demand effortlessly."
    },
    {
      imageurl: 'postLaunchSupport', 
      head: "Post-Launch Support", 
      para: "Benefit from continuous updates and support to keep your product optimized and competitive."
    }
  ];
  
  const businessAdvisory = [
    {
      imageurl: 'expertConsultation', 
      head: "Expert Consultation", 
      para: "Leverage our expertise to craft strategies that drive growth and optimize operations."
    },
    {
      imageurl: 'marketAnalysis', 
      head: "Market Analysis", 
      para: "Gain insights into market trends and competitive landscapes to make informed decisions."
    },
    {
      imageurl: 'processOptimization', 
      head: "Process Optimization", 
      para: "Streamline workflows and improve efficiency with strategic recommendations."
    },
    {
      imageurl: 'technologyRoadmaps', 
      head: "Technology Roadmaps", 
      para: "Design long-term plans to integrate advanced technologies into your business."
    },
    {
      imageurl: 'riskManagement', 
      head: "Risk Management", 
      para: "Identify and mitigate risks to ensure stability and sustained growth."
    },
    {
      imageurl: 'scalableStrategies', 
      head: "Scalable Strategies", 
      para: "Develop strategies that adapt to your evolving business needs and market conditions."
    }
  ];

  const advancedTechSolutions = [
    {
      imageurl: 'endToEndImplementation', 
      head: "End-to-End Implementation", 
      para: "Delivering comprehensive tech solutions tailored to meet complex business challenges."
    },
    {
      imageurl: 'cloudIntegration', 
      head: "Cloud Integration", 
      para: "Modernize your business with secure and scalable cloud solutions."
    },
    {
      imageurl: 'iotSolutions', 
      head: "IoT Solutions", 
      para: "Enable connected devices to gather and analyze data for smarter operations."
    },
    {
      imageurl: 'customSoftwareDevelopment', 
      head: "Custom Software Development", 
      para: "Create bespoke software solutions designed for your specific operational needs."
    },
    {
      imageurl: 'dataSecurity', 
      head: "Data Security", 
      para: "Implement robust cybersecurity measures to safeguard your business and customer data."
    },
    {
      imageurl: 'continuousSupport', 
      head: "Continuous Support", 
      para: "Enjoy ongoing assistance and upgrades to keep your tech infrastructure ahead of the curve."
    }
  ];
  
  const generativeAI = [
    {
      imageurl: 'aiDrivenContentCreation', 
      head: "AI-Driven Content Creation", 
      para: "Revolutionize your workflows with AI-generated content that saves time and enhances creativity."
    },
    {
      imageurl: 'blockchainSolutions', 
      head: "Blockchain Solutions", 
      para: "Integrate blockchain technology for secure, transparent, and decentralized systems."
    },
    {
      imageurl: 'iotInnovations', 
      head: "IoT Innovations", 
      para: "Leverage IoT to connect devices and automate data-driven processes."
    },
    {
      imageurl: 'arVrCapabilities', 
      head: "AR/VR Capabilities", 
      para: "Adopt augmented and virtual reality solutions for enhanced customer engagement."
    },
    {
      imageurl: 'customAIModels', 
      head: "Custom AI Models", 
      para: "Build bespoke AI models tailored to your business needs and industry."
    },
    {
      imageurl: 'futureReadyTech', 
      head: "Future-Ready Tech", 
      para: "Stay ahead with emerging technologies that ensure long-term innovation and growth."
    }
  ];
  









  const sofware = [
    {
      imageurl : cutomsoftware,
      head: "Custom Software Development",
      para: "Power your business with enterprise-grade solutions tailored to your specific needs.",
    },
    {imageurl : webapp,
      head: "Web App Development",
      para: "Scale your business with our dedicated web app development services.",
    },
    {imageurl : mobileapp,
      head: "Mobile App Development",
      para: "Enable seamless user experiences with superior digital mobile app development.",
    },
    {imageurl : devops,
      head: "DevOps",
      para: "Automate, integrate & deliver faster with diverse and comprehensive DevOps solutions.",
    },
    {imageurl : legacy,
      head: "Legacy Software Modernization",
      para: "Regain the effectiveness of apps with upgraded & strategic legacy software modernization.",
    },
    {imageurl : qa,
      head: "QA & Testing",
      para: "Streamline your testing & ship bulletproof software with state-of-the-art QA & Testing.",
    },
  ];

  const product = [
    {
      imageurl : cutomsoftware,
      head: "Product Strategy",
      para: "Elevate Your Product Strategy, enabled by design and data to get competitive edge",
    },
    {imageurl : webapp,
      head: "Product Design",
      para: "Boost your digital products and keep your prospects hooked with our product design services.",
    },
    {imageurl : mobileapp,
      head: "Discovery Workshop",
      para: "Validate your product ideas and scope with minimum risks and investments.",
    },
    {imageurl : devops,
      head: "Clustox Product Studio",
      para: "Know the right potential of your project and lead the industry with future-ready products.",
    },
    {imageurl : legacy,
      head: "POC/MVP Development",
      para: "Validate your ideas with proof of concept using a rigorous testing road map.",
    },
    {imageurl : qa,
      head: "Augmented product",
      para: "Redefine industry standards and empower your business through elite augmented products.",
    },
  ];

  const advisory = [
    {
      imageurl : cutomsoftware,
      head: "Digital Transformation",
      para: "Drive impact through a digital-first strategy with Clustox’ digital transformation services.",
    },
    {imageurl : webapp,
      head: "Product development & growth",
      para: "Accelerate your digital product success with test-and-learn growth strategies",
    },
    {imageurl : mobileapp,
      head: "Process Consulting & Audit",
      para: "Carve your path to excellence through world-class consultancy services.",
    },
    {imageurl : devops,
      head: "Technology leadership advisory",
      para: "Shape your product’s path to perfection through visionary leadership advisory.",
    }, ];

  const techSolutions = [
    {
      imageurl : cutomsoftware,
      head: "Mulesoft",
      para: "Fuel your digital capabilities with our next-gen Mulesoft solutions.",
    },
    {imageurl : webapp,
      head: "AWS",
      para: "Scale your business growth by focusing on winning customers through innovative solutions.",
    },
    {imageurl : mobileapp,
      head: "Shopify",
      para: "Accelerate enterprise-grade capabilities and deliver conversion-focused experiences.",
    },
    {imageurl : devops,
      head: "Power BI",
      para: "Transform your data into confident decisions and actionable insights with AI capabilities.",
    },
    {imageurl : legacy,
      head: "TIBCO",
      para: "Empower your business with enterprise-grade and high-quality TIBCO solutions.",
    },
    {imageurl : qa,
      head: "Managed IT services",
      para: "Keep your IT infrastructure scalable and stable with Clustox managed IT services.",
    },  ];

  const emergingTech = [
    {
      imageurl : cutomsoftware,
      head: "Data Science ",
      para: "Get a steady stream of data democratization and insights for better decision making.",
    },
    {imageurl : webapp,
      head: "AI and ML",
      para: "Supercharge your innovation engine with next-gen AI-powered technologies",
    },
    {imageurl : mobileapp,
      head: "Blockchain",
      para: "Join the revolutionizing industry of passionate entrepreneurs with accelerating blockchain.",
    },
    {imageurl : devops,
      head: "Internet of Things",
      para: "Drive sustainability by value-centered IoT solutions and build multi-level data pipelines.",
    },
    {imageurl : legacy,
      head: "Generative AI",
      para: "Use predictive capabilities to paint a vision of limitless possibilities and innovation.",
    },
    {imageurl : qa,
      head: "Web3",
      para: "Utilize peer-to-peer decentralized networks with our futuristic and innovative Web3 expertise.",
    },  ];

  const [detail, setDetail] = useState(sofware);
  const [activeIndex, setActiveIndex] = useState(0);

  function switchInfo(index, type) {
    setActiveIndex(index);
    switch (type) {
      case "software":
        setDetail(aiSolutions);
        break;
      case "product":
        setDetail(productDevelopment);
        break;
      case "advisory":
        setDetail(businessAdvisory);
        break;
      case "techSolutions":
        setDetail(advancedTechSolutions);
        break;
      case "emergingTech":
        setDetail(generativeAI);
        break;
      default:
        setDetail(aiSolutions);
        break;
    }
  }

  return (
    <div className="landservice">
      <div className="heading">
        <h1>
          <span>Services</span> <span> We Offer </span>
        </h1>
      </div>
      <div className="navlinks">
        <ul>
          <li
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => switchInfo(0, "software")}
          >
            <i className="fas fa-code"></i> AI-Powered Software Development

          </li>
          <li
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => switchInfo(1, "product")}
          >
            <i className="fas fa-cogs"></i> Custom Product Development

          </li>
          <li
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => switchInfo(2, "advisory")}
          >
            <i className="fas fa-comments"></i> Business Advisory & Strategy

          </li>
          <li
            className={activeIndex === 3 ? "active" : ""}
            onClick={() => switchInfo(3, "techSolutions")}
          >
            <i className="fas fa-laptop-code"></i> Advanced Technology Solutions

          </li>
          <li
            className={activeIndex === 4 ? "active" : ""}
            onClick={() => switchInfo(4, "emergingTech")}
          >
            <i className="fas fa-rocket"></i> Generative AI & Emerging Tech
          </li>
        </ul>
      </div>
      <div className="detail">
        {detail.map((d, index) => (
          <div className="detailbox" key={index}>
          <img src={d.imageurl} alt="Logo.png" />
            <h2 className="font-bold text-lg">{d.head}</h2>
            <p className="text-md text-slate-700">{d.para}</p>
            <div className="linkbutton">
              <button className="chat">Let&lsquo;s Chat <i className="fas fa-arrow-right"></i> </button>
              <button>Learn more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
