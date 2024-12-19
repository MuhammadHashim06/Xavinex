import "./Needs.css";
import { DevelopmentServices } from "../data/ExpertsData";
export default function Needs() {
  return (
    <div className="expertneeds">
        <div className="needsbackground"></div>
      <div className="topdiv">
        <h1>
          <span>React Developers</span> For Your Needs
        </h1>
        <p>
          Minimize your development roadblocks by hiring our experienced and
          dedicated team of React developers. Explore all the benefits:
        </p>
        {DevelopmentServices.map((d, index) => {
          return (
            <div className="card" key={index}>
              <span>{d.id}</span>
              <div className="card-body">
                <h1>{d.title}</h1>
                <p>{d.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
