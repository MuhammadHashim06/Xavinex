import "./Challenges.css";
import client1 from "../../assets/Bookfy.png";
import client2 from "../../assets/Alvee.svg.png";
import client3 from "../../assets/IREP.svg.png";
import client4 from "../../assets/MyFriend.svg.png";
import client5 from "../../assets/YallaGrub.svg.png";
import client6 from "../../assets/Alvee.svg.png";
import client7 from "../../assets/IREP.svg.png";
import client8 from "../../assets/MyFriend.svg.png";
import client9 from "../../assets/YallaGrub.svg.png";
import techchallengeimg from "../../assets/Challaenges.png";

import hire1 from "../../assets/recruitment-img.png";

const logos = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
];

const lowerhire = [
  {
    heading: "Simplify Your Hiring Process",
    subheading:
      "Hire skilled developers, AI consultants, and tech experts through our seamless hiring process, designed to save you time and deliver exceptional results.",
    buttontext: "Start Hiring now",
    url: "",
    imgurl: hire1,
  },
  {
    heading: "How Our Hiring Process Works?",
    subheading:
      "We rigorously vet candidates to bring you the top 3% of skilled professionals, ensuring expertise and a perfect fit for your requirements.",
    buttontext: "Hire Super Talent",
    url: "",
    imgurl: hire1,
  },
  {
    heading: "How Our CAP™ Methodology Ensures Quality",
    subheading:
      "Discover the power of our CAP™ (Collaborate, Analyze, Perfect) methodology, designed to guarantee precision and excellence in every project",
    buttontext: "Start Conversation",
    url: "",
    imgurl: hire1,
  },
];

export default function Challenges() {
  return (
    <div className="challengescomp">
      <div className="upperchallenge">
        <div className="colordiv orange"></div>

        <div className="client">
          <h1>
            <span>Our Valued</span> Client
          </h1>
          <div className="logos">
            {logos.map((imgurl, key) => {
              // Use the key prop on the parent div, not the img tag
              return (
                <div className="logo-img" key={key}>
                  <img src={imgurl} alt={`client-logo-${key}`} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="techchallenge">
          <div className="chatext">
            <h1>
              <span>Facing Tech Challenges?</span> <br />
              Let’s Solve Them Together!

            </h1>
            <p>
            Collaborate with Xavinex to tackle your toughest technology challenges with AI-powered solutions and innovative strategies.
Schedule a meeting to discuss how we can empower your business and help you scale effectively.

            </p>
            <button>
              Let s Chat <i className="fa-solid fa-arrow-right"></i>{" "}
            </button>
          </div>
          <div className="chaimage">
            <img src={techchallengeimg} alt="" />
          </div>
        </div>
      </div>
      <div className="lowerChallaeges">
        <div className="hirebox">
          <div className="hirecard">
            <div className="hiretext">
              <h1>{lowerhire[0].heading}</h1>
              <p>{lowerhire[0].subheading}</p>
              <button>{lowerhire[0].buttontext}</button>
            </div>
            <div className="hireimage">
              <img src={lowerhire[0].imgurl} alt="" />
            </div>
          </div>
          <div className="hirecard">
            <div className="hireimage">
              <img src={lowerhire[1].imgurl} alt="" />
            </div>
            <div className="hiretext">
              <h1>{lowerhire[1].heading}</h1>
              <p>{lowerhire[1].subheading}</p>
              <button>{lowerhire[1].buttontext}</button>
            </div>
          </div>
          <div className="hirecard">
            <div className="hiretext">
              <h1>{lowerhire[2].heading}</h1>
              <p>{lowerhire[2].subheading}</p>
              <button>{lowerhire[2].buttontext}</button>
            </div>
            <div className="hireimage">
              <img src={lowerhire[2].imgurl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
