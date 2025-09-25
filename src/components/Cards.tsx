const cardData = [
  { title: 'Create a Bee-Friendly Garden', text: 'Transform your school grounds into a vibrant habitat for bees.'},
  { title: 'Access Educational Resources', text: 'Download lesson plans, activity guides, and more.'},
  { title: 'Join Our Community', text: 'Connect with other schools and share your experiences.'},
  { title: 'Volunteer', text: 'Help maintain plantings and lead student activities.'}
];

export default function Cards(){
  return (
    <div className="cards">
      {cardData.map((c, i) => (
        <div className="card" key={i}>
          <h4>{c.title}</h4>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  );
}
