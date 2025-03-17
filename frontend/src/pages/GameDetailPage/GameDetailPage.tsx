import { useState } from "react";

function GameDetailPage() {
  //sample data
  const [players, setPlayers] = useState<Player[]>([
    {
      id: 1,
      name: "Sky Tyler",
      position: "Setter",
      paid: true,
      team: "Team A",
    },
    {
      id: 2,
      name: "Yikwun",
      position: "Middle Blocker",
      paid: false,
      team: "Team A",
    },
    {
      id: 3,
      name: "Rose",
      position: "Middle Blocker",
      paid: true,
      team: "Team A",
    },
    {
      id: 4,
      name: "Jennie",
      position: "Outside Hitter",
      paid: false,
      team: "Team A",
    },
    {
      id: 5,
      name: "Jisoo",
      position: "Opposite Hitter",
      paid: false,
      team: "Team A",
    },
    {
      id: 6,
      name: "Lalisa",
      position: "Middle Blocker",
      paid: false,
      team: "Team A",
    },
  ]);

  return (
    <div className="game-detail-container">
      <div className="game-info">
        <h1>The League: Saturday Night Live - Richmond Hill</h1>
        <p>Richmond Green Secondary School</p>
        <span>
          📍 1 William F. Bell Pkway <br></br> Richmond Hill, ON L4S 2T9
        </span>
        <p>🕒 Saturday 7:45 PM - 10:00 PM </p>
        <p>👥 19/24 Spots</p>
        <button>Join</button>
      </div>
      <div className="player-container">
        <div className="playerlist">
          <h2>👥 Players</h2>
          <table className="player-table"></table>
        </div>
        <div className="team-section"></div>
      </div>

      <p>
        <strong>📏 Rules:</strong> Indoor shoes, king's court ... etc
      </p>
    </div>
  );
}

export default GameDetailPage;
