import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forum.css';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', image: null, tag: '' });
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const navigate = useNavigate();

  const handleNewPostChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewPost({ ...newPost, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPostWithId = { ...newPost, id: posts.length, date: new Date().toLocaleString(), likes: 0, dislikes: 0, author: 'Anonymous' };
    setPosts([...posts, newPostWithId]);
    setNewPost({ title: '', content: '', image: null, tag: '' });
    setShowNewPostForm(false);
  };

//   const handlePostClick = (id) => {
//     navigate(/forum/${id});
//   };

  const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleDislike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post));
  };

  return (
    <div className="forum-page">
      <button className="new-post-btn" onClick={() => setShowNewPostForm(true)}>New Post</button>
      {showNewPostForm && (
        <form className="new-post-form" onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={newPost.title} onChange={handleNewPostChange} required />
          <textarea name="content" placeholder="Your post" value={newPost.content} onChange={handleNewPostChange} required></textarea>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <input type="text" name="tag" placeholder="Tag (optional)" value={newPost.tag} onChange={handleNewPostChange} />
          <button type="submit">Post</button>
        </form>
      )}
      <div className="posts-list">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <h2 onClick={() => handlePostClick(post.id)}>{post.title}</h2>
            <p>by {post.author}</p>
            <p>{post.date}</p>
            {post.tag && <span className="tag">{post.tag}</span>}
            <div className="post-actions">
              <button onClick={() => handleLike(post.id)}>Like ({post.likes})</button>
              <button onClick={() => handleDislike(post.id)}>Dislike ({post.dislikes})</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;