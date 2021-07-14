/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};

$(document).ready(() => {
  const createTweetElement = (tweetData) => {
    const user = tweetData.user;
    const $tweet = $('<article>');
    const $header = $('<header>');
    const $avatar = $(`<img src='${user.avatars}'>`);
    const $name = $('<h3>').addClass('avatar-name').text(` ${user.name}`);
    $name.prepend($avatar);
    const $userid = $('<h3>').addClass('username').text(`${user.handle}`);
    $header.append($name, $userid);
    
    const $content = $('<h3>').addClass('tweet').text(`${tweetData.content.text}`);

    const $footer = $('<footer>');
    const $time = $('<div>');
    const $icons = $('<div>').append($(`<i class="fas fa-flag"></i>`), $(`<i class="fas fa-retweet"></i>`), $(`<i class="fas fa-thumbs-up"></i>`));
    const formattedTime = timeago.format(tweetData.created_at);
    $time.text(`${formattedTime}`);
    $footer.append($time, $icons);

    $tweet.append($header, $content, $footer);
    return $tweet;
  };
  
  const $tweet = createTweetElement(tweetData);
  $('#tweet-container').prepend($tweet);
});
