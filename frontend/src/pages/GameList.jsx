// src/pages/GamesList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GameList.css';

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // RAWG API key
  const apiKey = 'e20bc2c9b0634e63adb9e384d87524c3';

  // Fetch games data from RAWG API
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page_size=50`);
        setGames(response.data.results);
      } catch (error) {
        console.error('Error fetching data from RAWG API', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`);
        setCategories(response.data.results);
      } catch (error) {
        console.error('Error fetching categories from RAWG API', error);
      }
    };

    fetchGames();
    fetchCategories();
  }, []);

  const filteredGames = selectedCategory === 'All'
    ? games
    : games.filter(game => game.genres.some(genre => genre.name === selectedCategory));

  return (
    <div className="games-list-container">
      <header className="list-header">
        <h1>Explore Games</h1>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </select>
      </header>

      <section className="games-grid">
        {filteredGames.map(game => (
          <div key={game.id} className="game-card">
            <img src={game.background_image} alt={game.name} className="game-image" />
            <div className="game-info">
              <h3>{game.name}</h3>
              <p>Rating: {game.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default GamesList;
