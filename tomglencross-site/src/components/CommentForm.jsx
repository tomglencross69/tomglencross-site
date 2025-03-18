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
        setSuccessMessage('Comment submitted successfully!');
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
    <div className='pb-10'>
      <div className='text-2xl md:text-3xl pb-2'>Leave a comment... </div>
      <form id="comment-form" onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 py-2'>
          <label htmlFor="text" className='text-base md:text-lg col-start-1'>USERNAME</label>
          <input
          className='w-full border text-base placeholder:text-sm placeholder:md:text-base dark:text-black dark:placeholder:text-pinkCustom pl-1'
            type="text"
            id="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Your username"
            required
            maxLength={30}
          />
        </div>
        <div className='grid grid-cols-2 pb-2 '>
          <label htmlFor="email" className='text-base md:text-lg'>EMAIL</label>
          <input
          className='w-full border text-base placeholder:text-sm placeholder:md:text-base dark:text-black dark:placeholder:text-pinkCustom pl-1'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email (won't be displayed)"
            autoComplete="on"
            required
            maxLength={100}
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
            className='text-lg border col-span-3 p-2 dark:text-black dark:placeholder:text-pinkCustom'
            maxLength={1000}
          />
        </div>
        <div className='grid grid-cols-3 pt-2'>
        <button className='text-lg md:text-xl px-7 border col-start-3 justify-self-end bg-gray-200 hover:text-pinkCustom dark:text-pinkCustom dark:hover:text-blueCustom' type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        </div>
      {successMessage && <div className="text-pinkCustom animate-fade-out text-center">{successMessage}</div>}
      {error && <div className='text-red'>{error}</div>}
      </form>

      <div className='text-sm md:text-base text-justify pt-1'>
        Your email address will not be displayed with your comment - only your username will be shown. Comments will appear after admin approval.
      </div>

    </div>
  );
}