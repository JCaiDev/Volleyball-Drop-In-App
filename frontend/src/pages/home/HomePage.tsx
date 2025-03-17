import { useNavigate } from "react-router-dom";
import logo from "../../assets/icon_volleyball.png";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("google auth page");
  };
  const handleGoogleMapSearch = () => {
    console.log("navigation ...");
  };

  return (
    <div className="homepage">
      <header className="navbar">
        <img className="logo" src={logo} alt="volleyball logo" />
        <h1>Ontario Volleyball Drop-In Association</h1>
        <h4 className="login-btn" onClick={handleLogin}>
          Sign-in with Google
        </h4>
      </header>

      <section className="hero">
        <h2>Find & Join Drop-In Volleyball Games!</h2>
        <p>Earn Your Play Time</p>
      </section>

      <section className="search-bar">
        <input
          type="text"
          placeholder="Search by location, date or skill level"
        />
        <button className="search-button">Search</button>
      </section>
      <section className="game-list">
        <h3>Upcoming Games</h3>
        <div className="game-card">
          <h4>The League: Saturday Night Live - Richmond Hill</h4>
          <p>Richmond Green Secondary School</p>
          <span onClick={handleGoogleMapSearch}>
            📍 1 William F. Bell Pkway <br></br> Richmond Hill, ON L4S 2T9
          </span>
          <p>🕒 Saturday 7:45 PM - 10:00 PM </p>
          <p>👥 19/24 Spots</p>
          <button onClick={() => navigate("/games")}>Join Game</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
