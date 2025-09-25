export default function StatsGrid({ stats }: any){
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="label">Honeybee Population</div>
        <div className="value">{stats.honeybeeColonies ?? '2.5M'} colonies</div>
      </div>
      <div className="stat-card">
        <div className="label">Wild Bee Species</div>
        <div className="value">{stats.wildBeeSpecies ?? '4,000+'} species</div>
      </div>
    </div>
  );
}
