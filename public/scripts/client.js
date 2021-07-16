/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

  const loadTweets = () => {
    $.getJSON('/tweets', (tweets) => {
      console.log(tweets);
      renderTweets(tweets);
    });
  };

  loadTweets();

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
  $form.on('submit', function(event) {
    event.preventDefault();
    const $input = $('#tweet-text');
    const text = $input.val().trim();

    const $errorLong = $('#error-long');
    const $errorNone = $('#error-none');
    if (text.length === 0) {
      $errorLong.css('display', 'none');
      $errorNone.css('display', 'block');
      return;
    } else if (text.length > 140) {
      $errorNone.css('display', 'none');
      $errorLong.css('display', 'block');
      return;
    }

    $errorNone.css('display', 'none');
    $errorLong.css('display', 'none');
    
    const urlEncodedData = $(this).serialize();
    $.post('/tweets', urlEncodedData, (response) => {
      loadTweets();
    });

    const $counter = $('#character-counter');
    $counter.text(140);
    $input.val('');
  });
});
