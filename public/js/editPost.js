async function editFormHandler(event) {
  console.log('button pushed');
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_content = document.querySelector('input[name="post-content"]').value.trim();
  const id = document.querySelector('#post-id-hidden').textContent;

  console.log(title);
  console.log(post_content);
  console.log(id);
  console.log(`/api/posts/${id}`);

  // title && 
  if (title && post_content) {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
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
  .querySelector('#update-post-btn')
  .addEventListener('click', editFormHandler);