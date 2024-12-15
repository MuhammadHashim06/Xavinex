import "./Banner.css";
import banner from "../../../assets/Challaenges.png";
import { expertise } from "../data/ExpertsData";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="expertbanner">
      <div className="mainbanner">
        <div className="leftpanel">
          <h1>
            {" "}
            Hire <span>Expert Developers</span>{" "}
          </h1>
          <p>
            <ul>
              <li>
                {" "}
                <i className="fas fa-check"></i> Expert developers to build your
                dynamic website
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> Scalable web solutions with
                robust functionality
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> Expert React native developers
                with remarkable talent
              </li>
            </ul>
          </p>
          <button>Request CVs</button>
        </div>
        <div className="rightpanel">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="lowerbanner">
        <div className="expertslist">
          <h1>
            <span>Our React </span>Programmer s Expertise
          </h1>
          <p>
            Quickly onboard dedicated React Native developers and get full-cycle
            services of software innovation and creative scale-up.
          </p>
          {expertise.map((e, index) => {
            return (
              <div className="expertcard" key={index}>
                <h1>{e.title}</h1>
                <p>{e.description}</p>
                <Link>
                  <button>{e.cta} <i className="fas fa-arrow-right" ></i> </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
