import { useMemo, useState, useEffect } from "react";
import { games as mockGames } from "../data/mockData";
import GameCard from "../components/GameCard";
import EmptyState from "../components/EmptyState";
import { CalendarX2 } from "lucide-react";
import { BalldontlieAPI } from "../services/nbaApi";

const tabs = [
  { key: "upcoming", label: "Upcoming" },
  { key: "live", label: "Live" },
  { key: "finished", label: "Finished" },
];



  return (
    <div className="space-y-8">
      



      
    </div>
  );


export default GamesPage;
