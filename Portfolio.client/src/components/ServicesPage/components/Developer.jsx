import "./Developer.css";
import { developers } from "../data/ServiceData";
export default function Developer() {
  return (
    <div className="servicedeveloper">
      <div className="heading">
        <h1>
          <span>Need more than</span> developers?
        </h1>
        <p>Unlock endless possibilities with Xavinex</p>
      </div>

      <div className="developer-list">
        {developers.map((d, index) => {
          return (
            <div className="developer-card" key={index}>
              <div className="profile-img">
                <img src={d.profileurl} alt="" />
              </div>
              <div className="profile-info">
                <h1>{d.title}</h1>
                <p>{d.description}</p>
              </div>
            </div>
          );
        })}
        <div className="developer-card teamassemble">
          <div className="profile-img"></div>
          <div className="profile-info">
            <h1>
              In addition to devs, we also provide clients with designers,
              product managers, QA specialists, and more.
            </h1>
            <button>Assemble your team <i className="fas fa-arrow-right" ></i> </button>
          </div>
        </div>
      </div>
    </div>
  );
}
