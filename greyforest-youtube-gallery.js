////////////////////////////////////////////////////////////	
//   FUNCTION : INIT                                      //	
////////////////////////////////////////////////////////////
$(document).ready(function(){

	////////////////////////////////////////////////////////////
	//   FUNCTION : SCROLL TO GALLERY TOP                     //
	////////////////////////////////////////////////////////////
	$(".youtubegallery-scroll").on('click', function(event) {
		$("html, body").animate({ scrollTop: $(".youtubegallery-destination").offset().top -1 }, 300);
		return true;
	});
	////////////////////////////////////////////////////////////
	
	////////////////////////////////////////////////////////////	
	//   FUNCTION : FILTER VIDEOS                             //
	////////////////////////////////////////////////////////////
	$('body').on('click','.youtubegallery-filters li', function(event) {
		
		$('.youtubegallery-filters li').removeClass('selected');	
		$(this).addClass('selected');	
		
		var $filterchoice = $(this).attr('data-filter');
	
		$( ".youtubegallery-thumb" ).each(function() {
			if ( $(this).hasClass("youtubegallery-filter-" + $filterchoice) ) {
				$(this).show(500, function() { });
			}
			else {
				$(this).hide(500);
			}
		});
		
	}); 
	////////////////////////////////////////////////////////////


});
//////////////////////////////////////////////////////////////