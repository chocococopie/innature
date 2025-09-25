import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Resources(){
  const [bees, setBees] = useState<any[]>([]);
  useEffect(()=> {
    axios.get('/api/bees').then(r => setBees(r.data));
  }, []);
  return (
    <div className="resources container">
      <h2>Bee Species</h2>
      <div className="bees-grid">
        {bees.map(b => (
          <div className="bee-card" key={b.id}>
            <img src={b.image} alt={b.name} />
            <h4>{b.name}</h4>
            <p>{b.status}</p>
            <button className="btn small">Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
}
