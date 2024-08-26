import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './GameDetails.css';

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forums, setForums] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newForum, setNewForum] = useState('');
  const [newReview, setNewReview] = useState('');
  const [newComment, setNewComment] = useState('');
  const [selectedForumId, setSelectedForumId] = useState(null);
  const apiKey = 'e20bc2c9b0634e63adb9e384d87524c3';

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
        setGame(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching game details:', error);
        setLoading(false);
      }
    };

    const fetchForums = async () => {
      try {
        const response = await axios.get(`/api/forums?gameId=${id}`);
        if (Array.isArray(response.data)) {
          setForums(response.data);
        } else {
          console.error('Forums data is not an array:', response.data);
          setForums([]);
        }
      } catch (error) {
        console.error('Error fetching forums:', error);
        setForums([]);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/reviews?gameId=${id}`);
        if (Array.isArray(response.data)) {
          setReviews(response.data);
        } else {
          console.error('Reviews data is not an array:', response.data);
          setReviews([]);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setReviews([]);
      }
    };

    fetchGameDetails();
    fetchForums();
    fetchReviews();
  }, [id]);

  const handleCreateForum = async () => {
    try {
      await axios.post('/api/forums', { gameId: id, content: newForum });
      setNewForum('');
      // Refetch forums after creating a new one
      const response = await axios.get(`/api/forums?gameId=${id}`);
      if (Array.isArray(response.data)) {
        setForums(response.data);
      }
    } catch (error) {
      console.error('Error creating forum:', error);
    }
  };

  const handlePostComment = async (forumId) => {
    try {
      await axios.post(`/api/forums/${forumId}/comments`, { content: newComment });
      setNewComment('');
      // Refetch forums after posting a comment
      const response = await axios.get(`/api/forums?gameId=${id}`);
      if (Array.isArray(response.data)) {
        setForums(response.data);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const handleCreateReview = async () => {
    try {
      await axios.post('/api/reviews', { gameId: id, content: newReview });
      setNewReview('');
      // Refetch reviews after creating a new one
      const response = await axios.get(`/api/reviews?gameId=${id}`);
      if (Array.isArray(response.data)) {
        setReviews(response.data);
      }
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };

  const handleLikeForum = async (forumId) => {
    try {
      await axios.post(`/api/forums/${forumId}/like`);
      const response = await axios.get(`/api/forums?gameId=${id}`);
      if (Array.isArray(response.data)) {
        setForums(response.data);
      }
    } catch (error) {
      console.error('Error liking forum:', error);
    }
  };

  const handleDislikeForum = async (forumId) => {
    try {
      await axios.post(`/api/forums/${forumId}/dislike`);
      const response = await axios.get(`/api/forums?gameId=${id}`);
      if (Array.isArray(response.data)) {
        setForums(response.data);
      }
    } catch (error) {
      console.error('Error disliking forum:', error);
    }
  };

  const handleLikeReview = async (reviewId) => {
    try {
      await axios.post(`/api/reviews/${reviewId}/like`);
      const response = await axios.get(`/api/reviews?gameId=${id}`);
      if (Array.isArray(response.data)) {
        setReviews(response.data);
      }
    } catch (error) {
      console.error('Error liking review:', error);
    }
  };

  const handleDislikeReview = async (reviewId) => {
    try {
      await axios.post(`/api/reviews/${reviewId}/dislike`);
      const response = await axios.get(`/api/reviews?gameId=${id}`);
      if (Array.isArray(response.data)) {
        setReviews(response.data);
      }
    } catch (error) {
      console.error('Error disliking review:', error);
    }
  };

  const handlePostCommentOnReview = async (reviewId) => {
    try {
      await axios.post(`/api/reviews/${reviewId}/comments`, { content: newComment });
      setNewComment('');
      const response = await axios.get(`/api/reviews?gameId=${id}`);
      if (Array.isArray(response.data)) {
        setReviews(response.data);
      }
    } catch (error) {
      console.error('Error posting comment on review:', error);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!game) return <div className="error">Error loading game details. Please try again later.</div>;

  return (
    <div className="game-details-container">
      {/* Hero Section */}
      <div className="game-hero" style={{ backgroundImage: `url(${game.background_image})` }}>
        <div className="game-hero-overlay">
          <h1>{game.name}</h1>
          <p>Released: {game.released}</p>
          <p>Rating: {game.rating}/5</p>
        </div>
      </div>

      {/* Main Game Info Section */}
      <div className="game-info-section">
        <div className="game-info-card">
          <h2>About the Game</h2>
          <p>{game.description_raw.length > 300 ? `${game.description_raw.substring(0, 300)}...` : game.description_raw}</p>
          <button className="cta-button">Read More</button>
        </div>

        <div className="game-info-meta">
          <div className="meta-section">
            <h2>Platforms</h2>
            <p>{game.platforms?.map(p => p.platform.name).join(', ') || 'N/A'}</p>
          </div>

          <div className="meta-section">
            <h2>Genres</h2>
            <p>{game.genres?.map(g => g.name).join(', ') || 'N/A'}</p>
          </div>

          <div className="meta-section">
            <h2>Developers</h2>
            <p>{game.developers?.map(d => d.name).join(', ') || 'N/A'}</p>
          </div>

          <div className="meta-section">
            <h2>Tags</h2>
            <div className="tags-container">
              {game.tags?.slice(0, 5).map(tag => (
                <span key={tag.id} className="tag">
                  {tag.name}
                </span>
              )) || <p>No tags available</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Game Highlights Section */}
      <div className="game-highlights-section">
        <h2>Game Highlights</h2>
        <div className="highlights-container">
          <div className="highlight-card">
            <h3>Playtime</h3>
            <p>{game.playtime || 'N/A'} hours</p>
          </div>
          <div className="highlight-card">
            <h3>Metacritic</h3>
            <p>{game.metacritic ? `${game.metacritic}/100` : 'N/A'}</p>
          </div>
          <div className="highlight-card">
            <h3>Available in Stores</h3>
            <p>{game.stores?.length || 0} stores</p>
          </div>
        </div>
      </div>

      {/* Game Stores Section */}
      <div className="game-stores-section">
        <h2>Available on:</h2>
        <div className="stores-container">
          {game.stores?.length > 0 ? (
            game.stores.map(store => (
              <a
                key={store.id}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="store-link"
              >
                {store.store.name}
              </a>
            ))
          ) : (
            <p>N/A</p>
          )}
        </div>
      </div>

      {/* Official Website Section */}
      <div className="game-official-website">
        {game.website && (
          <a
            href={game.website}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Visit Official Website
          </a>
        )}
      </div>

      {/* Community Forum Section */}
      <div className="game-community-forum">
        <h2>Community Forum</h2>

        <div className="create-forum-section">
          <textarea
            value={newForum}
            onChange={(e) => setNewForum(e.target.value)}
            placeholder="Create a new forum..."
          />
          <button onClick={handleCreateForum} className="cta-button">
            Create Forum
          </button>
        </div>

        <div className="forums-list">
          {forums.length > 0 ? (
            forums.map(forum => (
              <div key={forum.id} className="forum-card">
                <div className="forum-header">
                  <h3>{forum.title}</h3>
                  <div className="forum-actions">
                    <button onClick={() => handleLikeForum(forum.id)} className="like-button">
                      Like ({forum.likes})
                    </button>
                    <button onClick={() => handleDislikeForum(forum.id)} className="dislike-button">
                      Dislike ({forum.dislikes})
                    </button>
                  </div>
                </div>
                <p>{forum.content}</p>

                <div className="comments-section">
                  <div className="comments-list">
                    {forum.comments?.map(comment => (
                      <div key={comment.id} className="comment-card">
                        <div className="comment-header">
                          <h4>Comment by {comment.author}</h4>
                          <div className="comment-actions">
                            <button onClick={() => handleLikeComment(forum.id, comment.id)} className="like-button">
                              Like ({comment.likes})
                            </button>
                            <button onClick={() => handleDislikeComment(forum.id, comment.id)} className="dislike-button">
                              Dislike ({comment.dislikes})
                            </button>
                          </div>
                        </div>
                        <p>{comment.content}</p>
                        <div className="replies-list">
                          {comment.replies?.map(reply => (
                            <div key={reply.id} className="reply-card">
                              <p>{reply.content}</p>
                              {/* Additional actions for replies, if needed */}
                            </div>
                          ))}
                        </div>
                      </div>
                    )) || <p>No comments yet</p>}
                  </div>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                  />
                  <button onClick={() => handlePostCommentOnReview(forum.id)} className="cta-button">
                    Post Comment
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No forums available for this game.</p>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="game-reviews">
        <h2>Reviews</h2>

        <div className="create-review-section">
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write a review..."
          />
          <button onClick={handleCreateReview} className="cta-button">
            Submit Review
          </button>
        </div>

        <div className="reviews-list">
          {reviews.length > 0 ? (
            reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <h3>{review.title}</h3>
                  <div className="review-actions">
                    <button onClick={() => handleLikeReview(review.id)} className="like-button">
                      Like ({review.likes})
                    </button>
                    <button onClick={() => handleDislikeReview(review.id)} className="dislike-button">
                      Dislike ({review.dislikes})
                    </button>
                  </div>
                </div>
                <p>{review.content}</p>

                <div className="comments-section">
                  <div className="comments-list">
                    {review.comments?.map(comment => (
                      <div key={comment.id} className="comment-card">
                        <div className="comment-header">
                          <h4>Comment by {comment.author}</h4>
                          <div className="comment-actions">
                            <button onClick={() => handleLikeComment(review.id, comment.id)} className="like-button">
                              Like ({comment.likes})
                            </button>
                            <button onClick={() => handleDislikeComment(review.id, comment.id)} className="dislike-button">
                              Dislike ({comment.dislikes})
                            </button>
                          </div>
                        </div>
                        <p>{comment.content}</p>
                      </div>
                    )) || <p>No comments yet</p>}
                  </div>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                  />
                  <button onClick={() => handlePostCommentOnReview(review.id)} className="cta-button">
                    Post Comment
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews available for this game.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
