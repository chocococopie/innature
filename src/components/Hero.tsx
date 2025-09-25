import heroImage from '../assets/hero.png';

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="plants" />
      </div>
      <div className="hero-overlay">
        <h1>Buzzing for a Better Future</h1>
        <p>Empowering schools to protect bees and educate students.</p>
        <button className="btn">Learn More</button>
      </div>
    </section>
  );
}
