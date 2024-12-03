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
        Enabling Visions <br /> Empowering Businesses
      </h1>
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
          <p className="font-bold text-white">2023 Clutch Global Winners</p>
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
          <p className="font-bold text-white">Top Mobile App Development Company</p>
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
          <p className="font-bold text-white">Top Software Development Company</p>
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
          <p className="font-bold text-white">Top Ruby on Rails Developers</p>
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
          <p className="font-bold text-white">Top 10 Software Developers</p>
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
          <p className="font-bold text-white">Top Software Development</p>
        </div>
      </div>
      </div>
    </div>
  );
}
