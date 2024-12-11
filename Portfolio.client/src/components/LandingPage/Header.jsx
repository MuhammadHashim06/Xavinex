// import heroimage from '../../public/home-video-banner.png'
import "./Header.css";
import clutch from "../../assets/clutch.png";
import Designrush from "../../assets/Designrush.png";
import Firmstalk from "../../assets/Firmstalk.png";
import GoodFirms from "../../assets/GoodFirms.png";
import TechDeveloper from "../../assets/TechDeveloper.png";
import Techimply from "../../assets/Techimply.png";
import wings from "../../assets/wings.svg";
export default function Header() {
  return (
    <div className="header">
      <h1 className="text-5xl text-white text-center font-bold">
      Transforming Ideas into Reality with AI-Driven Innovation</h1>
      <div className="bullets">
        <ul className="flex gap-8 items-center p-3">
          <li>Build</li>
          {/* <li>
            <img src={greenbubble} alt="" />
          </li> */}
          <li>Scale</li>
          {/* <li>
            {" "}
            <img src={greenbubble} alt="" />{" "}
          </li> */}
          <li>Optimize</li>
        </ul>
      </div>
      <div className="chatbutton">
        <button className="bg-blue-700 px-3 py-2 rounded-md">
          {" "}
          Let&apos;s Chat <i className="fas fa-arrow-right"></i>{" "}
        </button>
      </div>
      <div className="awards">
      <div className="box">
        <div className="wing">
          <img src={wings} alt="" />
        </div>
        <div className="text">
          <div className="logo">
            {" "}
            <img src={clutch} alt="" />
          </div>
          <p className="font-bold text-white">Leader in AI-Powered Outreach: Revolutionizing customer engagement through data-driven, scalable solutions.</p>
        </div>
      </div>
      <div className="box">
        <div className="wing">
          <img src={wings} alt="" />
        </div>
        <div className="text">
          <div className="logo">
            {" "}
            <img src={Techimply} alt="" />
          </div>
          <p className="font-bold text-white">Top Generative AI Innovators: Pioneering advancements in generative AI to transform businesses globally.
          </p>
        </div>
      </div>
      <div className="box">
        <div className="wing">
          <img src={wings} alt="" />
        </div>
        <div className="text">
          <div className="logo">
            {" "}
            <img src={GoodFirms} alt="" />
          </div>
          <p className="font-bold text-white">Excellence in Microservices Development: Crafting scalable microservices for seamless integration and growth.
          </p>
        </div>
      </div>
      <div className="box">
        <div className="wing">
          <img src={wings} alt="" />
        </div>
        <div className="text">
          <div className="logo">
            {" "}
            <img src={TechDeveloper} alt="" />
          </div>
          <p className="font-bold text-white">Customer-Centric AI Solutions: Focused on enabling businesses to achieve exceptional success with intelligent automation.</p>
        </div>
      </div>
      <div className="box">
        <div className="wing">
          <img src={wings} alt="" />
        </div>
        <div className="text">
          <div className="logo">
            {" "}
            <img src={Designrush} alt="" />
          </div>
          <p className="font-bold text-white">Trusted Software Development Partner: Providing cutting-edge software tailored to unique business needs.
          </p>
        </div>
      </div>
      <div className="box">
        <div className="wing">
          <img src={wings} alt="" />
        </div>
        <div className="text">
          <div className="logo">
            {" "}
            <img src={Firmstalk} alt="" />
          </div>
          <p className="font-bold text-white">Sustainability-Driven Solutions: Ensuring positive global impact through sustainable AI practices.</p>
        </div>
      </div>
      </div>
    </div>
  );
}
