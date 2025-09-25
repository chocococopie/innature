import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import StatsGrid from '../components/StatsGrid';
import Cards from '../components/Cards';
// import MapSection from '../components/MapSection';
import ContactForm from '../components/ContactForm';

export default function Home() {
  // const [schools, setSchools] = useState<any[]>([]);
  const [stats, setStats] = useState<{ honeybeeColonies?: string; wildBeeSpecies?: string }>({});

  useEffect(() => {
    // axios.get('/api/schools').then(r => setSchools(r.data));
    axios.get('/api/stats').then(r => setStats(r.data));
  }, []);

  return (
    <div className="container">
      <Hero />
      <section className="why">
        <h2>Why Bees Matter</h2>
        <p>Bees are essential pollinators, playing a crucial role in our ecosystem by pollinating plants that provide food for humans and animals. Their decline threatens biodiversity and food security.</p>
      </section>

      <section className="threats">
        <h3>Threats to Bees</h3>
        <p>Bees face numerous threats, including habitat loss, pesticide use, diseases, and climate change.</p>
      </section>

      <StatsGrid stats={stats} />

      <section className="get-involved">
        <h3>Get Involved</h3>
        <Cards />
      </section>

      {/* <MapSection schools={schools} /> */}

      <ContactForm />

    </div>
  );
}
