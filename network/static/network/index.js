document.addEventListener('DOMContentLoaded', () => {

  // Use buttons to toggle between views
  document.querySelector('#all-posts').addEventListener('click', () => load_posts_view('all-posts'));
  document.querySelector('#following').addEventListener('click', () => load_posts_view('following'));
  document.querySelector('#profile').addEventListener('click', load_profile_view);

  // By default, load the inbox
  load_posts_view('all-posts');
});

// Posts view include "All Posts" view and "Following" view
function load_posts_view(view) {
  // Show posts view and hide other views
  document.querySelector('#posts-view').style.display = 'block';
  document.querySelector('#profile-view').style.display = 'none';

  // Show the mailbox name
  document.querySelector('h3').innerHTML = `${view.charAt(0).toUpperCase() + view.slice(1)}`;

  if (view === 'following') {
    document.querySelector('#new-post').style.display = 'none';
  } else { // All posts view
      document.querySelector('#content-post').value = '';
      document.querySelector('#compose-post').onsubmit = () => {
        new_post();
        return false;
      };
  }
  fetch(`/allposts/${view}`)
  .then(response => response.json())
  .then(posts => {
    console.log(posts)
  });
}

function new_post() {
  const post_content = document.querySelector('#content-post').value;

  fetch('/newpost', {
    method: 'POST',
    body: JSON.stringify({
      post_content: post_content
    })
  })
  .then(response => response.json())
  .then(result => {
    console.log(result);
    load_posts_view('all-posts');
  });
}

function load_profile_view() {
  // Show profile view and hide other views
  document.querySelector('#posts-view').style.display = 'none';
  document.querySelector('#profile-view').style.display = 'block';

}