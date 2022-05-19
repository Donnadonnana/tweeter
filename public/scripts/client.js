/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
const createTweetElement = (data) => {
  const $tweet = $(`
  <section class="existing-tweet"><article class="existing-tweet-article">
          <header> 🧒${data.user.name} </header>
          <p>${data.content.text}</p>
          <footer class="existing-tweet-footer">${data.created_at}
            <div>
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </footer>
        </article>  </section>`)
  return $tweet;
}

const renderTweets = (data) => {
  
  for (let eachUser of data) {
    const $tweet = createTweetElement(eachUser);
    $('#tweets-container').append($tweet);
  }
  return;
}

renderTweets(data);
