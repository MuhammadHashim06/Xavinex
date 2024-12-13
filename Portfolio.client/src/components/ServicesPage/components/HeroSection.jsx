import "./HeroSection.css";
import { aiSolutions, productDevelopment, businessAdvisory, advancedTechSolutions, generativeAI} from '../data/ServiceData'

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
    {aiSolutions.map((s,index)=>{
        <li key={index} >{s.head}</li>
    })}
</div>
<div className="servicecard">
    <h1>Product Development</h1>
    {productDevelopment.map((s,index)=>{
        <li key={index} >{s.head}</li>
    })}
</div>
<div className="servicecard">
    <h1>Business Advisory</h1>
    {businessAdvisory.map((s,index)=>{
        <li key={index} >{s.head}</li>
    })}
</div>
<div className="servicecard">
    <h1>Advance Tech Solution</h1>
    {advancedTechSolutions.map((s,index)=>{
        <li key={index} >{s.head}</li>
    })}
</div>
<div className="servicecard">
    <h1>Generative AI</h1>
    {generativeAI.map((s,index)=>{
        <li key={index} >{s.head}</li>
    })}
</div>
</div>

    </div>
  );
}
