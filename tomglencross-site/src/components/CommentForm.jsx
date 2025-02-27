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
    <div className='pl-5 pb-20 '>
      <div className='text-3xl pb-5'>Leave a comment... </div>
      <form id="comment-form" onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 py-2'>
          <label htmlFor="text" className='text-lg'>USERNAME</label>
          <input
          className='w-full border'
            type="text"
            id="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Your username"
            required
          />
        </div>
        <div className='grid grid-cols-2 pb-2 '>
          <label htmlFor="email" className='text-lg'>EMAIL</label>
          <input
          className='w-full border'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email (won't be displayed)"
            autoComplete="on"
            required
          />
        </div>
        <div className='grid grid-cols-3'>
          <label htmlFor="comment-box"></label>
          <textarea
          type="text"
          id="comment-box"
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Comment here..."
            rows="5"
            cols="auto"
            required
            className='text-xl border col-span-2'
          />
        </div>
        <div className='grid grid-cols-3 py-2'>
        <button className='text-xl p-1 border col-start-3 justify-self-end bg-pinkCustom hover:text-white' type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'SUBMIT'}
        </button>
        </div>
      </form>

      <div className='text-sm'>
        Your email address will not be displayed with your comment - only your username will be shown. Comments will appear after admin approval.
      </div>

      {error && <div className='text-red'>{error}</div>}
      {successMessage && <div className='text-green'>{successMessage}</div>}
    </div>
  );
}