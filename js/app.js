$(document).ready(function(){
	$('.js-current-year').html(function(){
		var $currentYear = new Date().getFullYear();
		return $currentYear;
	});

	$(window).resize(function(){
		resizeHeading($(this).width());
	});
});

//image dependent actions need to wait for the images to load
$(window).load(function(){
	resizeHeading($(window).width());
});

function resizeHeading($windowWidth){
	var $avatar = $('.avatar');
	var $heading = $('.title-heading');

	if($windowWidth >= 768){
		$heading.css('font-size',$avatar.outerHeight()*.7);
	}
	else{
		$heading.css('font-size',70);
	}
}