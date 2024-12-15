import { Link } from "react-router-dom";
import { caseStudies } from "../data/CaseStudies";
import "./CaseList.css";
export default function CaseList() {
  return (
    <div className="caselist">
      <div className="uppertext">
        <h1>
          Bringing Vision <span> To Life </span>
        </h1>
        <p>
          We are committed to offer tailor-made solutions well-aligned with your
          goals.
        </p>
      </div>
      <div className="list">
        {caseStudies.map((cs, index) => {
          return (
            <div
              className="caseCard"
              key={index}
              style={{ backgroundColor: cs.background,color:cs.color }}
            >
              <div className="leftpanel">
                <div className="logo">
                  <img src={cs.logo} alt="" />
                </div>
                <div className="middletext">
                  <h1>{cs.title}</h1>
                  <p>{cs.description}</p>
                  <div className="techstack">
                    {cs.stack && cs.stack.length > 0 ? (
                      cs.stack.map((s, idx) => {
                        return <li key={idx}>{s}</li>;
                      })
                    ) : (
                      <p>No tech stack available</p>
                    )}
                  </div>
                  <Link to={cs.link || "#"}>
                    <button>
                      Explore <i className="fas fa-arrow-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="rightpanel">
                <div className="image">
                  <img src={cs.image || "/default-image.jpg"} alt="" />{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
