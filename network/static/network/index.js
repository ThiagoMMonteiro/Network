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
  if (view === 'following') {
    document.querySelector('#new-post').style.display = 'none';
  }

  // Show the mailbox name
  document.querySelector('h3').innerHTML = `${view.charAt(0).toUpperCase() + view.slice(1)}`;

  // Clear out composition fields
  // document.querySelector('#compose-post').value = '';
}

function load_profile_view() {
  // Show profile view and hide other views
  document.querySelector('#posts-view').style.display = 'none';
  document.querySelector('#profile-view').style.display = 'block';

}