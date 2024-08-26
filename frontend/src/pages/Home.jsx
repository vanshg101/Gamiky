import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [games, setGames] = useState([]);

  const apiKey = 'e20bc2c9b0634e63adb9e384d87524c3';

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page_size=20`);
        setGames(response.data.results);
      } catch (error) {
        console.error('Error fetching data from RAWG API', error);
      }
    };
    
    fetchGames();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="animated-text">Welcome to Gamikkky</h1>
          <p>Discover, track, and share your favorite games with the community.</p>
          <Link to="/games">
            <button className="cta-button">Explore Games</button>
          </Link>
        </div>
      </section>

      <section className="featured-games">
        <h2>Featured Games</h2>
        <Slider {...settings}>
          {games.map((game) => (
            <div className="game-card" key={game.id}>
              <Link to={`/game/${game.id}`}>
                <img src={game.background_image} alt={game.name} className="game-image" />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <p>Rating: {game.rating}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </section>

      {/* New Trending Games Section */}
      <section className="trending-games">
        <h2>Trending Now</h2>
        <div className="trending-games-container">
          {games.slice(0, 3).map((game) => (
            <div className="trending-game-card" key={game.id}>
              <Link to={`/game/${game.id}`}>
                <img src={game.background_image} alt={game.name} className="trending-game-image" />
                <div className="trending-game-info">
                  <h3>{game.name}</h3>
                  <p>Rating: {game.rating}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* New Community Section */}
      <section className="community-section">
        <h2>Join the Conversation</h2>
        <p>Engage with fellow gamers, write reviews, and discover new favorites.</p>
        <Link to="/community">
          <button className="cta-button">Join Now</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
