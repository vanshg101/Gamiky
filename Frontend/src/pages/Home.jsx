import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const games = [
    { id: 1, title: 'The Witcher 3', image: '/assets/witcher3.jpg', rating: 4.8 },
    { id: 2, title: 'Cyberpunk 2077', image: '/assets/cyberpunk.jpg', rating: 4.3 },
    { id: 3, title: 'Red Dead Redemption 2', image: '/assets/rdr2.jpg', rating: 4.9 },
    { id: 4, title: 'God of War', image: '/assets/godofwar.jpg', rating: 4.7 },
    { id: 5, title: 'Horizon Zero Dawn', image: '/assets/horizon.jpg', rating: 4.5 },
    { id: 6, title: 'Elden Ring', image: '/assets/eldenring.jpg', rating: 4.8 },
    { id: 7, title: 'Minecraft', image: '/assets/minecraft.jpg', rating: 4.6 },
    { id: 8, title: 'Fortnite', image: '/assets/fortnite.jpg', rating: 4.3 },
    { id: 9, title: 'Among Us', image: '/assets/amongus.jpg', rating: 4.2 },
    { id: 10, title: 'Apex Legends', image: '/assets/apex.jpg', rating: 4.4 },
    { id: 11, title: 'The Last of Us Part II', image: '/assets/lastofus2.jpg', rating: 4.5 },
    { id: 12, title: 'Ghost of Tsushima', image: '/assets/ghostoftsushima.jpg', rating: 4.7 },
    { id: 13, title: 'Death Stranding', image: '/assets/deathstranding.jpg', rating: 4.3 },
    { id: 14, title: 'Sekiro', image: '/assets/sekiro.jpg', rating: 4.6 },
    { id: 15, title: 'Doom Eternal', image: '/assets/doometernal.jpg', rating: 4.4 },
    { id: 16, title: 'Overwatch', image: '/assets/overwatch.jpg', rating: 4.5 },
    { id: 17, title: 'Valorant', image: '/assets/valorant.jpg', rating: 4.2 },
    { id: 18, title: 'Genshin Impact', image: '/assets/genshin.jpg', rating: 4.3 },
    { id: 19, title: 'League of Legends', image: '/assets/league.jpg', rating: 4.1 },
    { id: 20, title: 'PUBG', image: '/assets/pubg.jpg', rating: 4.4 },
  ];

  // Slider settings with autoplay enabled
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,              // Enable autoplay
    autoplaySpeed: 1500,         // Time between slides (in milliseconds)
    pauseOnHover: true,          // Pause the autoplay on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
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
          <button className="cta-button">Explore Games</button>
        </div>
      </section>

      {/* Featured Games with Slider */}
      <section className="featured-games">
        <h2>Featured Games</h2>
        <Slider {...settings}>
          {games.map((game) => (
            <div className="game-card" key={game.id}>
              <img src={game.image} alt={game.title} className="game-image" />
              <div className="game-info">
                <h3>{game.title}</h3>
                <p>Rating: {game.rating}</p>
              </div>
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
