import { useState, useEffect, useMemo } from "react";
import PlayerCard from "../components/PlayerCard";

function PlayersPage() {

  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    fetch("http://localhost:5000/players")
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  const filteredPlayers = useMemo(() => {

    const results = players.filter(player =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

 
    if (searchQuery === "") {
      return results.slice(0, 100);
    }

    return results;

  }, [players, searchQuery]);

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          NBA Players
        </h1>

        <input
          type="text"
          placeholder="Search player..."
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          className="border p-2 rounded-md"
        />

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {filteredPlayers.map(player => (
          <PlayerCard key={player.id} player={player}/>
        ))}

      </div>

    </div>
  );
}

export default PlayersPage;