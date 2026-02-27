import Badge from './Badge';

function formatTime(isoString) {
  return new Date(isoString).toLocaleString("en-US", {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function GameCard({ game }) {
  const { status, homeTeam, awayTeam, score, startTime } = game;

  return (
    <div className="bg-surface border border-border rounded-lg p-4 shadow-sm hover:bg-card transition-colors duration-200 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs text-text-secondary font-medium">
          {status === 'upcoming' ? formatTime(startTime) : 'Final Score'}
        </span>
        <Badge status={status} />
      </div>

      <div className="flex justify-between items-center flex-grow">
        {/* Home Team */}
        <div className="flex flex-col items-center w-1/3">
          <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mb-2 text-lg font-bold border border-border">
            {homeTeam.substring(0, 3).toUpperCase()}
          </div>
          <span className="text-sm font-medium text-center">{homeTeam}</span>
        </div>

        {/* Score */}
        <div className="flex flex-col items-center w-1/3">
          {status === 'upcoming' ? (
            <span className="text-text-muted text-sm font-medium">VS</span>
          ) : (
            <div className="flex items-center gap-2 text-2xl font-bold">
              <span className={score?.home > score?.away ? 'text-primary' : 'text-text-primary'}>
                {score?.home || 0}
              </span>
              <span className="text-text-muted">-</span>
              <span className={score?.away > score?.home ? 'text-primary' : 'text-text-primary'}>
                {score?.away || 0}
              </span>
            </div>
          )}
        </div>

        {/* Away Team */}
        <div className="flex flex-col items-center w-1/3">
          <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mb-2 text-lg font-bold border border-border">
            {awayTeam.substring(0, 3).toUpperCase()}
          </div>
          <span className="text-sm font-medium text-center">{awayTeam}</span>
        </div>
      </div>
    </div>
  );
}
