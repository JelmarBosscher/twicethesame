var scrollVal = 0;
var vw;
var mobile = false;

function setup()
{ 
  setSize();

  var platform = navigator.platform.toLowerCase();
  var userAgent = navigator.userAgent.toLowerCase();

  setTimeout(moveWidget($('.songkick-widget'), $('.hoverBar')),3000);

}


function checkScroll(e)
{
  scrollVal = Math.max(window.pageYOffset,0);
}

$(window).ready(function() {
  setup();
  checkMobile();


  $('header').on('click', function(){
    $(this).toggleClass('active');
  });

  document.addEventListener('scroll', checkScroll, false);
});

function checkMobile(){
  vw = $(window).width();
  if (vw <= 768){
    mobile = true;
  } else {
    mobile = false;
  }
}

function moveWidget(element, target){
  target.append(element);
  console.log(target, element);
}

function setSize(){
  $('#main').height($(window).height() - 42);
}

$(window).resize(function() {
  checkMobile();
  setSize();
})