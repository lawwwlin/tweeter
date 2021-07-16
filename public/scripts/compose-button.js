// depending on the current screen size, the button will scroll accordingly

$(document).ready(() => {
  const $writeTweet = $('#write-tweet');
  $writeTweet.on('click', function() {
    const $newTweet = $('.new-tweet');
    // minus the fixed navi bar at the top because it will block everything
    const newTweetHeight = $newTweet.offset().top + $newTweet.height() - $('nav').height();
    
    if (isInView($newTweet)) {
      console.log('scrolling:', newTweetHeight);
      return $(window).scrollTop(newTweetHeight);
    }
    $(window).scrollTop(0);
    $('#tweet-text').focus();
  });

});

function isInView(elem) {
    const windowTop = $(window).scrollTop();
    const windowBot = windowTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBot = elemTop + $(elem).height();

    return ((elemBot <= windowBot) && (elemTop >= windowTop));
}
