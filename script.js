// Gives NavBar a background when a certain scroll threshold is reached (buggy)
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
});

// Boolean variable to determine scroll direction
var scrollUp = false;

window.onscroll = function(e) {
  // scrollUp becomes "false" if scroll direction is down and "true" if up
  scrollUp = this.oldScroll > this.scrollY;
  this.oldScroll = this.scrollY;
}

// EventListerner for scrolling, uses previous function and "scrollUp" to determine direction
window.addEventListener('scroll', () => {
  // If scrollUp is "true", unhide the NavBar. Otherwise, the NavBar will be hidden when scrollUp is "false"
  if (scrollUp) {
      return document.querySelector('nav').classList.remove('hide')
  }
    return document.querySelector('nav').classList.add('hide')
});
