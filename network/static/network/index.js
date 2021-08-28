document.addEventListener('DOMContentLoaded', () => {

  // Use buttons to toggle between views
  document.querySelector('#allposts').addEventListener('click', () => load_posts_view('allposts'));
  if (document.getElementById('following')) {
    document.querySelector('#following').addEventListener('click', () => load_posts_view('following'));
  }
  if (document.getElementById('profile-nav')) {
    document.querySelector('#profile-nav').addEventListener('click', load_profile_view);
  }

  // By default, when logged in, load the inbox
  load_posts_view('allposts');
});

// Posts view include "All Posts" view and "Following" view
function load_posts_view(view) {
  // Show posts view and hide other views
  document.querySelector('#posts-view').style.display = 'block';
  document.querySelector('#profile-view').style.display = 'none';

  if (view === 'following') {
    document.querySelector('#new-post').style.display = 'none';
  } else { // All posts view
      // document.querySelector('#content-post').value = '';
      if (document.getElementById('compose-post')) {
        document.querySelector('#compose-post').onsubmit = () => {
          new_post();
        };
      }
  }
  fetch(`/allposts/${view}`)
  .then(response => response.json())
  .then(posts => {
    console.log(posts);

    posts.forEach(post => {

      const element = document.createElement('div');
      element.className = "post-div";

      document.querySelector('#posts-view').append(element);
      element.innerHTML = `<a class="user-profile" href="#">${post["user"]}</a> says: <pre> ${post["content"]} <br><br> ${post["post_date"]} <br> LIKES`;
    })
    document.body.addEventListener('click', function (e) {
      if (e.target.className === 'user-profile') {
        load_profile_view();
      }
    });
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
    load_posts_view('allposts');
  });
  return false;
}

function load_profile_view() {
  // Show profile view and hide other views
  document.querySelector('#posts-view').style.display = 'none';
  document.querySelector('#profile-view').style.display = 'block';

}