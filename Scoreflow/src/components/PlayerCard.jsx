export default function PlayerCard({ player }) {
  const { name, team, pts, reb, ast } = player;

  return (
    <div className="bg-surface border border-border rounded-lg p-5 shadow-sm hover:bg-card transition-colors duration-200">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 bg-card rounded-full flex items-center justify-center text-xl font-bold text-primary border border-border">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{name}</h3>
          <p className="text-sm text-text-secondary">{team}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
        <div className="text-center">
          <div className="text-xs text-text-muted mb-1">PTS</div>
          <div className="font-semibold text-text-primary">{pts}</div>
        </div>
        <div className="text-center border-l border-r border-border">
          <div className="text-xs text-text-muted mb-1">REB</div>
          <div className="font-semibold text-text-primary">{reb}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-text-muted mb-1">AST</div>
          <div className="font-semibold text-text-primary">{ast}</div>
        </div>
      </div>
    </div>
  );
}
