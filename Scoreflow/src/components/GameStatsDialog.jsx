import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { players } from '../data/mockData';

export default function GameStatsDialog({ game, isOpen, onClose }) {
  // Early return if no game
  if (!game) return null;

  // Function to format date
  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Filter players by team
  const homePlayers = players.filter(p => p.team === game.homeTeam);
  const awayPlayers = players.filter(p => p.team === game.awayTeam);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        {/* Backdrop */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        
        {/* Dialog Content */}
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface border border-border rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
          
          {/* Title */}
          <Dialog.Title className="text-xl font-bold text-text-primary mb-4 text-center">
            {game.homeTeam} vs {game.awayTeam}
          </Dialog.Title>

          {/* Game Info Section */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-text-secondary mb-5">
                {game.status === 'upcoming' ? formatDate(game.startTime) : game.status === 'live' ? 'Live' : 'Finished'}
              </div>
              {game.score ? (
                <div className="text-3xl font-bold">
                  <span className={game.score.home > game.score.away ? 'text-primary' : 'text-text-primary'}>
                    {game.score.home}
                  </span>
                  <span className="text-text-muted mx-4">-</span>
                  <span className={game.score.away > game.score.home ? 'text-primary' : 'text-text-primary'}>
                    {game.score.away}
                  </span>
                </div>
              ) : (
                <div className="text-text-muted">VS</div>
              )}
            </div>

            {/* Player Stats Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Home Team */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{game.homeTeam}</h3>
                <div className="space-y-2">
                  {homePlayers.map(player => (
                    <div key={player.id} className="bg-card p-3 rounded border border-border">
                      <div className="font-medium text-text-primary">{player.name}</div>
                      <div className="text-sm text-text-secondary">
                        PTS: {player.pts} | REB: {player.reb} | AST: {player.ast}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Away Team */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{game.awayTeam}</h3>
                <div className="space-y-2">
                  {awayPlayers.map(player => (
                    <div key={player.id} className="bg-card p-3 rounded border border-border">
                      <div className="font-medium text-text-primary">{player.name}</div>
                      <div className="text-sm text-text-secondary">
                        PTS: {player.pts} | REB: {player.reb} | AST: {player.ast}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-text-muted hover:text-text-primary">
              <X className="w-5 h-5" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}