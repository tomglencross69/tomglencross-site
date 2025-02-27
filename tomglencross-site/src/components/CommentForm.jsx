import { useState } from 'react';

export default function CommentForm({ blogId, userId, refreshComments}) {
 const [commentText, setCommentText] = useState('');
  const [username, setUsername] = useState('tom_glencross');
  const [email, setEmail] = useState('tom.glencross@tomglencross.com');
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
        const randomCommentId = Math.floor(Math.random() * (100 - 19 + 1)) + 19;

      const response = await fetch(`/api/blogposts/${blogId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment_id: randomCommentId,
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
    <div className='pl-5'>
      <div className='text-3xl'>Comment ?</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='text-xl pr-10'>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Your username"
            required
          />
        </div>
        <div>
          <label className='text-xl pr-6'>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email (won't be displayed)"
            required
          />
        </div>
        <div>
          <label></label>
          <textarea
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Comment here..."
            rows="auto"
            cols="auto"
            required
            className='text-xl pr-6 border'
          />
        </div>
        <button className='text-xl p-1 border' type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Comment'}
        </button>
      </form>

      <div>
        Note: Your email address will not be displayed with your comment. Only your username will be shown.
      </div>

      {error && <div className='text-red'>{error}</div>}
      {successMessage && <div className='text-green'>{successMessage}</div>}
    </div>
  );
}