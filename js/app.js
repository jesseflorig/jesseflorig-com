$(document).ready(function(){
	$(window).resize(function(){
		resizeHeading($(this).width());
	});
});

//image dependent actions need to wait for the images to load
$(window).load(function(){
	resizeHeading($(window).width());
});

// keeps the avatar and title heading responsive and well-formed
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
