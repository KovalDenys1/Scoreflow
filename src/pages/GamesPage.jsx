import { useMemo, useState } from "react";
import { games } from "../data/mockData";
import GameCard from "../components/GameCard";
import EmptyState from "../components/EmptyState";
import { CalendarX2 } from "lucide-react";

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

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Games</h1>
          <p className="mt-2 text-text-secondary">Switch between upcoming, live, and finished games.</p>
        </div>
        
        {/* Tabs */}
        <div className="flex bg-surface p-1 rounded-lg border border-border w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                activeTab === tab.key
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary hover:bg-card"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {filteredGames.length === 0 ? (
        <EmptyState 
          icon={CalendarX2}
          message={`No ${activeTab} games found for this date.`} 
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}

export default GamesPage;
