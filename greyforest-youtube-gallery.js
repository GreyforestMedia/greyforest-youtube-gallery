//////////////////////////////////////////////////////////////	
///   FUNCTION : INIT                                      ///	
//////////////////////////////////////////////////////////////
$(document).ready(function(){
// $( "li.youtubegallery-thumb" ).last().addClass( "youtubegallery-lastthumb" );
// $( "<div style='clear:both;border:1px dotted #ddd;margin:10px;padding:10px;display:block;color:#ddd;'>YOUTUBE GALLERY - Brought to you by <a style='color:#ddd !important;' href='http://www.greyforest.media' title='Greyforest.Media' target='_blank'>Greyforest.Media</a></div>" ).insertAfter( ".youtubegallery-lastthumb" );

//////////////////////////////////////////////////////////////	
///   FUNCTION : SCROLL TO GALLERY TOP                     ///	
//////////////////////////////////////////////////////////////
$(".youtubegallery-scroll").on('click', function(event) {
$("html, body").animate({ scrollTop: $(".youtubegallery-destination").offset().top -1 }, 300);
console.log('executed scrollToElement');
return true;
});
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////	
///   FUNCTION : EQUALHEIGHT GENERATOR                     ///	
//////////////////////////////////////////////////////////////
equalheight=function(t){var i,e=0,h=0,r=new Array;$(t).each(function(){if(i=$(this),$(i).height("auto"),topPostion=i.position().top,h!=topPostion){for(currentDiv=0;currentDiv<r.length;currentDiv++)r[currentDiv].height(e);r.length=0,h=topPostion,e=i.height(),r.push(i)}else r.push(i),e=e<i.height()?i.height():e;for(currentDiv=0;currentDiv<r.length;currentDiv++)r[currentDiv].height(e)})};

$(window).load(function()   { equalheight('body li.youtubegallery-thumb'); });
$(window).resize(function() { equalheight('body li.youtubegallery-thumb'); });
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////	
///   FUNCTION : FILTER VIDEOS                             ///	
//////////////////////////////////////////////////////////////
$('body').on('click','.youtubegallery-filters li', function(event) {
	
	$('.youtubegallery-filters li').removeClass('selected');	
	$(this).addClass('selected');	
	
	var $filterchoice = $(this).attr('data-filter');

	$( ".youtubegallery-thumb" ).each(function() {
		if ( $(this).hasClass("youtubegallery-filter-" + $filterchoice) ) {
			$(this).show(500, function() { equalheight('body li.youtubegallery-thumb'); });
		}
		else {
			$(this).hide(500);
		}
	});
}); 
//////////////////////////////////////////////////////////////


});
//////////////////////////////////////////////////////////////