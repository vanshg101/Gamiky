import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TrendingGames.css'; // Create a separate CSS file for styling

const TrendingGames = () => {
  const [trendingGames, setTrendingGames] = useState([]);
  const apiKey = 'e20bc2c9b0634e63adb9e384d87524c3'; // Replace with your API key

  useEffect(() => {
    const fetchTrendingGames = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&ordering=-rating&page_size=3`);
        setTrendingGames(response.data.results);
      } catch (error) {
        console.error('Error fetching trending games:', error);
      }
    };

    fetchTrendingGames();
  }, []);

  return (
    <div className="trending-games">
      <h2>Trending Games</h2>
      <ul>
        {trendingGames.map(game => (
          <li key={game.id}>
            <div className="game-info1">
              <span className="game-title">{game.name}</span>
              <span className="game-rating">{game.rating}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingGames;
