import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="hireme">
        Hire me! We will produce awesome projects, and have fun doing it
      </div>

      <div className="skillsmain">Skills:
      <div className='skillscointainer'>
        
        
        <span className='devicons devicons-react' title='React'></span>
        {/* react excaped html character            &#xe6ba              */}
        {/* <ion-icon className='reacticon' name="logo-react"></ion-icon> */}
        <span className='devicons devicons-mongodb' title='Mongo'></span>
        <span className='devicons devicons-nodejs_small' title='Node'></span>
        <span className='devicons devicons-github_badge' title='Github'></span>
        <span className='devicons devicons-javascript_badge' title='Javascript'></span>
        <span className='devicons devicons-bootstrap' title='Bootstrap'></span>
        <span className='devicons devicons-html5' title='HTML'></span>
        <span className='devicons devicons-css3' title='CSS'></span>
        
      </div>
      </div>
    </>
  );
};

export default Skills;
