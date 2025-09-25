import { useState } from 'react';
import axios from 'axios';

export default function ContactForm(){
  const [form, setForm] = useState({ schoolName: '', contactPerson: '', email: '', phone: ''});
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/participate', form);
      setSent(true);
    } catch (err) {
      alert('Error submitting form');
    }
  };

  if (sent) return <div className="message">Thanks — we received your submission.</div>;

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Want to see your school on the map?</h3>
      <label>School Name<input name="schoolName" value={form.schoolName} onChange={onChange} /></label>
      <label>Contact Person<input name="contactPerson" value={form.contactPerson} onChange={onChange} /></label>
      <label>Email<input name="email" value={form.email} onChange={onChange} type="email" /></label>
      <label>Phone Number<input name="phone" value={form.phone} onChange={onChange} /></label>
      <button type="submit" className="btn">Submit</button>
    </form>
  );
}
