// src/Home.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [games, setGames] = useState([]);

  // RAWG API key
  const apiKey = 'e20bc2c9b0634e63adb9e384d87524c3'; // Replace with your API key

  // Fetch games data from RAWG API
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

  // Slider settings with autoplay enabled
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Gamikkky</h1>
          <p>Discover, track, and share your favorite games with the community.</p>
          <Link to="/games">
            <button className="cta-button">Explore Games</button>
          </Link>
        </div>
      </section>

      {/* Featured Games with Slider */}
      <section className="featured-games">
        <h2>Featured Games</h2>
        <Slider {...settings}>
          {games.map((game) => (
            <div className="game-card" key={game.id}>
              {/* Wrap the game card in a Link to navigate to the game details page */}
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

      {/* Community Section */}
      <section className="community-section">
        <h2>Join the Conversation</h2>
        <p>Engage with fellow gamers, write reviews, and discover new favorites.</p>
        <button className="cta-button">Join Now</button> 
      </section>
    </div>
  );
};

export default Home;
