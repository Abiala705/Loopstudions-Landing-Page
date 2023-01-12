import interactiveMobile from "../images/mobile/image-interactive.jpg";

import "./Interactive.css";

const Interactive = () => {
  return (
    <section className="mx-4 my-5">
      <div className="row interactive">
        <div className="col-12 col-md-6 interactive-image">
          <img src={interactiveMobile} alt="interactive mobile image" />
        </div>
        <div className="col-12 col-md-4 m-4 text-center interactive-text">
          <h1 className="pt-2">The Leader in Interactive VR</h1>
          <p className="pt-2">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interactive;
