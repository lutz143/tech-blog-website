// when the edit button is clicked, perform an asynchronous function that finds the hidden post id and title and does a PUT request
async function editFormHandler(event) {
  console.log('button pushed');
  event.preventDefault();

  const title = document.querySelector('#edit-post-title').value.trim();
  const post_content = document.querySelector('#post-content-edit').value.trim();
  const id = document.querySelector('#post-id-hidden').textContent;


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