onLoadAndResize();

$(window).resize(onLoadAndResize);

function onLoadAndResize()
{
  if($(window).width() <= 768)
  {
    $('#footerRightCol').removeClass('right aligned column');
    $('#footerRightCol').addClass('left aligned column');
  }
  else
  {
    $('#footerRightCol').removeClass('left aligned column');
    $('#footerRightCol').addClass('right aligned column');
  }
}
