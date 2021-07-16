$(document).ready(() => {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 20) {
      return $('#page-button').css('display', 'block');
    } else {
      return $('#page-button').css('display', 'none');
    }
  });
  
  $('#page-button').click(function() {
    $(window).scrollTop(0);
    $('#tweet-text').focus();
  });
});
