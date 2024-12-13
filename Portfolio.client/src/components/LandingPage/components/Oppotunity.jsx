import "./Opportunity.css";
import arrow from "../../../assets/opportunityarraow.png";
import opportunityimage from "../../../assets/home-opportunity-img-bg.webp.png";
import opportunityicon from "../../../assets/oprtunityicon.png";
export default function Oppotunity() {
  return (
    <div className="landopportunity">
      <div className="leftbox">
        <h1 className="title font-bold text-4xl">
        <span>Dynamic </span>Collaboration Opportunities for All
        </h1>
        <div className="opportunity">
          <div className="card">
            <img className="arrow" src={arrow} />
            <div className="logo">
              <img src={opportunityicon} />
            </div>
            <div className="content">
              <h1 className="font-bold">Startups</h1>
              <p className="text-md">
              Accelerate your startup’s growth with AI-powered tools and tailored tech solutions. From MVP development to market entry, we help you scale seamlessly.

              </p>
              <h1 className="font-bold">Discuss your idea</h1>
            </div>
          </div>
          <div className="card">
            <img className="arrow" src={arrow} />
            <div className="logo">
              {" "}
              <img src={opportunityicon} />
            </div>
            <div className="content">
              <h1 className="font-bold">Scaleups</h1>
              <p>
              Empower your business to scale with AI-driven innovation and cutting-edge solutions. Accelerate growth with strategic guidance and seamless implementation.
              {" "}
              </p>
              <h1 className="font-bold">Share your project insights</h1>
            </div>
          </div>
          <div className="card">
            <img className="arrow" src={arrow} />
            <div className="logo">
              {" "}
              <img src={opportunityicon} />
            </div>
            <div className="content">
              <h1 className="font-bold">SMBs & Enterprises</h1>
              <p>
              Automate processes and unlock new opportunities with customized AI-powered tools and software solutions. Transform your business with expert collaboration{" "}
              </p>
              <h1 className="font-bold">Connect with our experts now</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="rightbox">
        <img src={opportunityimage} alt="" />
      </div>
    </div>
  );
}
