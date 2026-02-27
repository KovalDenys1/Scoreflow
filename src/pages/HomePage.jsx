import { Link } from "react-router-dom";
import { games } from "../data/mockData";
import GameCard from "../components/GameCard";
import { Calendar, Activity, CheckCircle2, ArrowRight } from "lucide-react";

function HomePage() {
  const totals = {
    upcoming: games.filter((game) => game.status === "upcoming").length,
    live: games.filter((game) => game.status === "live").length,
    finished: games.filter((game) => game.status === "finished").length,
  };

  const cards = [
    { label: "Upcoming", value: totals.upcoming, icon: Calendar, color: "text-info" },
    { label: "Live", value: totals.live, icon: Activity, color: "text-danger" },
    { label: "Finished", value: totals.finished, icon: CheckCircle2, color: "text-text-muted" },
  ];

  const featuredGames = games.slice(0, 3);

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="bg-surface border border-border rounded-xl p-8 md:p-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Welcome to <span className="text-primary">Scoreflow</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
          Your ultimate dashboard for NBA game results, live scores, and comprehensive player statistics.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/games"
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
          >
            View Games
          </Link>
          <Link
            to="/players"
            className="px-6 py-3 bg-transparent border border-border text-text-primary font-medium rounded-lg hover:bg-card transition-colors"
          >
            Player Stats
          </Link>
        </div>
      </section>

      {/* Status Widgets */}
      <section>
        <h2 className="text-2xl font-semibold text-text-primary mb-4">Today's Overview</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.label} className="rounded-lg border border-border bg-surface p-6 flex items-center gap-4 shadow-sm">
                <div className={`p-3 rounded-full bg-card ${card.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-secondary">{card.label} Games</p>
                  <p className="text-2xl font-bold text-text-primary">{card.value}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Featured Games */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-text-primary">Featured Games</h2>
          <Link to="/games" className="text-primary hover:text-orange-400 font-medium flex items-center gap-1 text-sm">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
