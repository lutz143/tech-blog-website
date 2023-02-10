// create an asynchronouse function that listend for the click of comment input to clear the text value in the input box
async function clearCommentBox(event) {
  const textCommentArea = document.querySelector('#comment-input')
  textCommentArea.value = '';
}

// create an asynchronouse function that listend for the click of comment post button to input a new comment through a POST request
async function commentFormHandler(event) {
  event.preventDefault();

  const user_id = document.querySelector('#user-id-hidden').textContent;
  const post_id = document.querySelector('#post-id-hidden').textContent;
  const comment = document.querySelector('textarea[name="comment-text"]').value.trim();

  if (user_id && post_id && comment) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          user_id,
          post_id,
          comment
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('#comment-post-btn').addEventListener('click', commentFormHandler);
document.querySelector('#comment-input').addEventListener('click', clearCommentBox);