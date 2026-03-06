function PlayerCard({ player }) {

  return (

    <div className="bg-surface border border-border rounded-xl p-4 hover:shadow-lg transition">

      <h2 className="text-lg font-semibold text-text-primary">
        {player.name}
      </h2>

      <p className="text-sm text-gray-400">
        Team: {player.team }
      </p>

      <div className="mt-3 flex gap-4 text-sm text-text-muted">

      <span>PTS: {player.pts}</span>
      <span>REB: {player.reb}</span>
      <span>AST: {player.ast}</span>

      </div>

    </div>

  );
}

export default PlayerCard;