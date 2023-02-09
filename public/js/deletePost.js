async function deleteFormHandler(event) {
  console.log('button pushed');
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_content = document.querySelector('input[name="post-content"]').value.trim();
  const id = document.querySelector('#post-id-hidden').textContent;
  const commentId = document.querySelector('#comment-id-hidden').textContent;
  const commentText = document.querySelector('#comment-text-hidden').textContent;

  console.log(title);
  console.log(post_content);
  console.log(id);
  console.log(commentId);
  console.log(commentText);
  console.log(`/api/posts/${id}`);

  
  if (commentId && post_content) {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE',
        body: JSON.stringify({
            commentId,
            commentText
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }

  if (title && post_content) {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  }

document
  .querySelector('#delete-post-btn')
  .addEventListener('click', deleteFormHandler);