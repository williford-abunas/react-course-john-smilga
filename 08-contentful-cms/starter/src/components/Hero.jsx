import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful Starter</h1>
          <p>
            lore ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
            Maecenas congue ligula ac quam viverra nec consectetur ante
            hendrerit. Donec et mollis dolor. Praesent et diam eget libero
            egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut
            porta lorem lacinia consectetur.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
