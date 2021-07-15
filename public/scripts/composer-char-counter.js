$(document).ready(() => {
  const $tweetText = $('#tweet-text');
  $tweetText.on("input", onInput);
});

function onInput() {
  const $input = $('#tweet-text');
  const text = $input.val();
  const length = text.length;
  const $parent = $(this).parent();
  const $counter = $parent.find('output.counter');
  $counter.val(140 - length);
  $counter.toggleClass('negative', length > 140);
};
