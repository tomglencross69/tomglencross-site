import { useState } from 'react';

export default function CommentForm({ blogId, userId, refreshComments}) {
 const [commentText, setCommentText] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage('');

    // Ensure username and email are provided
    if (!username || !email || !commentText) {
      setError('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`/api/blogposts/${blogId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment_id: 19,
          user_id: userId,
          username: username,
          email: email,
          comment_text: commentText,
          ispending: true
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Comment added successfully!');
        setCommentText('');
        setUsername('');
        setEmail('')
        await refreshComments();
      } else {
        setError(data.error || 'An error occurred.');
      }
    } catch (error) {
      setError('Failed to submit the comment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3>Add a Comment</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Your username"
            required
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email (won't be displayed)"
            required
          />
        </div>
        <div>
          <label>Comment</label>
          <textarea
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
            rows="4"
            cols="50"
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Comment'}
        </button>
      </form>

      <p style={{ fontSize: '0.9em', color: '#888' }}>
        Note: Your email address will not be displayed with your comment. Only your username will be shown.
      </p>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}