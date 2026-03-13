import { useMemo, useState } from "react";
import { games } from "../data/mockData";
import GameCard from "../components/GameCard";
import EmptyState from "../components/EmptyState";
import { CalendarX2 } from "lucide-react";
import GameStatsDialog from '../components/GameStatsDialog';



const tabs = [
  { key: "upcoming", label: "Upcoming" },
  { key: "live", label: "Live" },
  { key: "finished", label: "Finished" },
];

function GamesPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const filteredGames = useMemo(
    () => games.filter((game) => game.status === activeTab),
    [activeTab]
  );

  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="space-y-8">

         {/* Tabs */}
        <div className="flex justify-center p-2 rounded-lg cursor-pointer text-center font-roboto gap-4 w-fit bg-surface mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`bg-black font-roboto border-none cursor-pointer px-6 py-2 text-sm font-medium rounded-md transition-colors duration-200${
                activeTab === tab.key
                  ? "bg-primary text-primary shadow-sm"
                  : "text-text-secondary hover:text-text-primary hover:bg-card"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      {filteredGames.length === 0 ? (
        <EmptyState
          icon={CalendarX2}
          message={`No ${activeTab} games found for this date.`}
        />
      ) : (
        <div className="font-roboto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGames.map((game) => (
            <GameCard 
            key={game.id} 
            game={game}
            onClick={() => setSelectedGame(game)}
            />
          ))}
        </div>
      )}
      <GameStatsDialog 
        game={selectedGame} 
        isOpen={!!selectedGame} 
        onClose={() => setSelectedGame(null)} 
      />
   
    </div>
  );
}


      {/* <div className="flex items-center">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Games</h1>
          <p className="mt-2 text-text-secondary">Switch between upcoming, live, and finished games.</p>
        </div>
      </div> */}


export default GamesPage;
