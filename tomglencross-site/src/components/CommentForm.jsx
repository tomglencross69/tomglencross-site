import { useState } from 'react';

export default function CommentForm({ blogId, userId, refreshComments}) {
 const [commentText, setCommentText] = useState('');
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false)

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsFormDisabled(true); 
    setError(null);
    setSuccessMessage('');

    if (!username || !commentText) {
      setError('Please fill in all fields.');
      setIsSubmitting(false)
      setIsFormDisabled(false);
      return;
    }

    try {
      const response = await fetch(`/api/blogposts/${blogId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          comment_text: commentText,
          ispending: true
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Comment submitted successfully!');
        setCommentText('');
        setUsername('');
        await refreshComments();
      } else {
        setError(data.error || 'An error occurred.');
      }
    } catch (error) {
      setError('Failed to submit the comment.');
    } finally {
      setIsSubmitting(false);
      
      setTimeout(() => {
        setIsFormDisabled(false);
        setSuccessMessage('');
      }, 60000);
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
            disabled={isFormDisabled}
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
            disabled={isFormDisabled}
          />
        </div>
        <div className='grid grid-cols-3 pt-2'>
        <button className='text-lg md:text-xl px-7 border col-start-3 justify-self-end bg-gray-200 hover:text-pinkCustom dark:text-pinkCustom dark:hover:text-blueCustom disabled:bg-gray-100 disabled:hover:text-black disabled:dark:hover:text-black disabled:dark:text-black' type="submit" disabled={isSubmitting || isFormDisabled}>
        {isSubmitting
              ? 'Submitting...'
              : successMessage
              ? 'Submitted :)'
              : 'Submit'}
        </button>
        </div>
      {successMessage && <div className="text-pinkCustom animate-fade-out text-center">{successMessage}</div>}
      {error && <div className='text-red'>{error}</div>}
      </form>
    </div>
  );
}