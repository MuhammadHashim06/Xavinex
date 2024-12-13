import "./HeroSection.css";
import {
  aiSolutions,
  productDevelopment,
  businessAdvisory,
  advancedTechSolutions,
  generativeAI,
} from "../data/ServiceData";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="ServiceHero">
      <div className="herobackground"></div>
      <div className="herocontent">
        <div className="upperhero">
          <div className="toptitle">Build . Scale . Optimize</div>
          <div className="middletitle">
            <h1>Boost your success with our expertise</h1>
            <p>
              Power your innovation flywheel with bespoke and effective
              development solutions.
            </p>
            <button>
              Let s Chat <i className="fas fa-arrow-right"></i>{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="servicesection">
        <div className="servicecard">
          <h1>AI Solutions</h1>
          <ul>
            {aiSolutions.map((s, index) => {
              return (
                <NavLink to={''} key={index}>
                  <li >{s.head}</li>
                </NavLink>
              )
            })}
          </ul>
        </div>
        <div className="servicecard">
          <h1>Product Development</h1>
          <ul>
            {productDevelopment.map((s, index) => {
               return (
                <NavLink to={''} key={index}>
                  <li >{s.head}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="servicecard">
          <h1>Business Advisory</h1>
          <ul>
            {businessAdvisory.map((s, index) => {
               return (
                <NavLink to={''} key={index}>
                  <li >{s.head}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="servicecard">
          <h1>Advance Tech Solution</h1>
          <ul>
            {advancedTechSolutions.map((s, index) => {
               return (
                <NavLink to={''} key={index}>
                  <li >{s.head}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="servicecard">
          <h1>Generative AI</h1>
          <ul>
            {generativeAI.map((s, index) => {
               return (
                <NavLink to={''} key={index}>
                  <li >{s.head}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="servicecard help">
          <h1>Ready to get started?</h1>
          <p>Business Excellence Starts Here: Unlock Our Services.</p>
          <button>Let s chat  <i className="fas fa-arrow-right" ></i> </button>
        </div>
      </div>
    </div>
  );
}
