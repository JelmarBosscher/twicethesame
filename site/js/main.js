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

  $('.toggleEvents').live('click', function(e){
    e.preventDefault();
    toggleEvents();
  });
  $('.closeEvents').live('click', function(e){
    e.preventDefault();
    closeEvents();
  });

});


function closeEvents(e)
{
  $('.hoverBar').removeClass('active');
}

function toggleEvents(e)
{
  $('.hoverBar').toggleClass('active');
}

function checkScroll(e)
{
  scrollVal = Math.max(window.pageYOffset,0);
}

function checkMobile(){
  vw = $(window).width();
  if (vw <= 768){
    mobile = true;
    return mobile;
  } else {
    mobile = false;
    return mobile;
  }
}

function moveWidget(element, target){
  target.append(element);
  console.log(target, element);
}

function setSize(){
  $('#main').height($(window).height() - 42);
}

$(document).on("click", ".activateTab", function() {
  var data = $(this).attr('data-target');
  var $target = $('.'+data+'');

  $('.portrait.active').removeClass('active');
  $(this).toggleClass('active');
  activateTab($target, $(this));
});

function activateTab($target, $element){
  $('.member-info').not($target).slideUp();

    $target.slideToggle();
    if(checkMobile()){
        $('.ng-scope').delay(500).animate({
            scrollTop: $(document).height()
        }, 200);

    }
}


$(window).resize(function() {
  checkMobile();
  setSize();
})