import React, { useState } from 'react';
import './ReviewForm.css'; 

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', { name, rating, comment });
    setName('');
    setRating('');
    setComment('');
  };

  return (
    <div className="review-form-container">
      <h2>Doctor Review Form</h2>
      <div className="form-wrapper">
        <form className="review-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              className="form-control"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="">Select rating</option>
              <option value="5">5 stars</option>
              <option value="4">4 stars</option>
              <option value="3">3 stars</option>
              <option value="2">2 stars</option>
              <option value="1">1 star</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              className="form-control"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
