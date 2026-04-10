import { useState, useEffect, useMemo } from "react";
import PlayerCard from "../components/PlayerCard";

function PlayersPage() {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("http://localhost:5000/players")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPlayers(data);
        } else if (Array.isArray(data.data)) {
          setPlayers(data.data);
        } else {
          setError("Unexpected player data from backend.");
        }
      })
      .catch((err) => {
        console.error("Failed to load players", err);
        setError("Unable to load players. Make sure the backend server is running on port 5000.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredPlayers = useMemo(() => {
    const list = Array.isArray(players) ? players : [];

    const results = list.filter((player) =>
      player.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery === "") {
      return results.slice(0, 100);
    }

    return results;
  }, [players, searchQuery]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">NBA Players</h1>
          <p className="text-sm text-text-secondary mt-1">Browse player names, teams, and stats.</p>
        </div>

        <input
          type="text"
          placeholder="Search player..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded-md bg-surface text-text-primary border-border focus:outline-none"
        />
      </div>

      {loading ? (
        <div className="text-text-secondary">Loading players...</div>
      ) : error ? (
        <div className="text-danger">{error}</div>
      ) : filteredPlayers.length === 0 ? (
        <div className="text-text-secondary">No players found.</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PlayersPage;