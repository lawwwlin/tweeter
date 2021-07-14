$(document).ready(() => {
  const $newTweet = $('.new-tweet');
  $newTweet.keyup(function() {
    const $input = $('#tweet-text');
    const text = $input.val();
    const length = text.length;
    const $counter = this.lastElementChild.lastElementChild.lastElementChild;
    $counter.value = 140 - length;
    if (length > 140) {
      $counter.className = 'negative';
    } else {
      $counter.className = 'counter';
    }
  });
});
