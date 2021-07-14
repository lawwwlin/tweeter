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

$(document).ready(() => {

  const renderTweets = (tweets) => {
    $('#tweet-container').empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').prepend($tweet);
    }
  };

  const createTweetElement = (tweet) => {
    const user = tweet.user;
    const $tweet = $('<article>');
    const $header = $('<header>');
    const $avatar = $(`<img src='${user.avatars}'>`);
    const $name = $('<h3>').addClass('avatar-name').text(` ${user.name}`);
    $name.prepend($avatar);
    const $userid = $('<h3>').addClass('username').text(`${user.handle}`);
    $header.append($name, $userid);
    
    const $content = $('<h3>').addClass('tweet').text(`${tweet.content.text}`);

    const $footer = $('<footer>');
    const $time = $('<div>');
    const $icons = $('<div>').append($(`<i class="fas fa-flag"></i>`), $(`<i class="fas fa-retweet"></i>`), $(`<i class="fas fa-thumbs-up"></i>`));
    const formattedTime = timeago.format(tweet.created_at);
    $time.text(`${formattedTime}`);
    $footer.append($time, $icons);

    $tweet.append($header, $content, $footer);
    return $tweet;
  };

  const $form = $('.new-tweet form');
  $form.submit(function(event) {
    event.preventDefault();
    const urlEncodedData = $(this).serialize();
    console.log(urlEncodedData);
    $.post('/tweets', urlEncodedData, (response) => {
      console.log(response);
    });
  });

  renderTweets(data);
});
