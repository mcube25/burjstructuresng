$(document).ready(function(){

toggle_nav_container();
gotoByScroll();


});



var toggle_nav_container = function () {



	var 	$toggleButton = $('#toggle_m_nav');
			$navContainer = $('#m_nav_container');
			$menuButton = $('#m_nav_menu')
			$menuButtonBars = $('.m_nav_ham');
			$wrapper = $('#wrapper');

	// toggle the container on click of button (can be remapped to $menuButton)

	$toggleButton.on("click", function(){

		// declare a local variable for the window width
		var $viewportWidth = $(window).width();

		// if statement to determine whether the nav container is already toggled or not

		if($navContainer.is(':hidden'))
		{	
			$wrapper.removeClass('closed_wrapper');
			$wrapper.addClass("open_wrapper");
			$navContainer.slideDown(200).addClass('container_open').css("z-index", "2");
			// $(window).scrollTop(0);
			$menuButtonBars.removeClass('button_closed');
			$menuButtonBars.addClass('button_open');
			$("#m_ham_1").addClass("m_nav_ham_1_open");
			$("#m_ham_2").addClass("m_nav_ham_2_open");
			$("#m_ham_3").addClass("m_nav_ham_3_open");

		}
		else
		{
			$navContainer.css("z-index", "0").removeClass('container_open').slideUp(200)
			$menuButtonBars.removeClass('button_open')
			$menuButtonBars.addClass('button_closed')
			$wrapper.removeClass('open_wrapper')
			$wrapper.addClass("closed_wrapper")
			$("#m_ham_1").removeClass("m_nav_ham_1_open");
			$("#m_ham_2").removeClass("m_nav_ham_2_open");
			$("#m_ham_3").removeClass("m_nav_ham_3_open");

		}
	});



}


// Function that takes the href value of links in the navbar and then scrolls 
//the div on the page whose ID matches said value. This only works if you use 
//a consistent naming scheme for the navbar anchors and div IDs

var gotoByScroll = function (){

	$(".m_nav_item a").on("click", function(e) {

		
		
		$('html,body').animate({
   scrollTop: $($(this).attr("href")).offset().top - 50
}, "slow");

	});
		



}

//cart js
$('.visibility-cart').on('click',function(){
       
  var $btn =  $(this);
  var $cart = $('.cart');
  console.log($btn);
  
  if ($btn.hasClass('is-open')) {
     $btn.removeClass('is-open');
     $btn.text('O')
     $cart.removeClass('is-open');     
     $cart.addClass('is-closed');
     $btn.addClass('is-closed');
  } else {
     $btn.addClass('is-open');
     $btn.text('X')
     $cart.addClass('is-open');     
     $cart.removeClass('is-closed');
     $btn.removeClass('is-closed');
  }

                  
});

    // SHOPPING CART PLUS OR MINUS
    $('a.qty-minus').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
    
        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }
    
    $input.val(value);
        
    });

    $('a.qty-plus').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value < 100) {
        value = value + 1;
        } else {
            value =100;
        }

        $input.val(value);
    });

// RESTRICT INPUTS TO NUMBERS ONLY WITH A MIN OF 0 AND A MAX 100
$('input').on('blur', function(){

    var input = $(this);
    var value = parseInt($(this).val());

        if (value < 0 || isNaN(value)) {
            input.val(0);
        } else if
            (value > 100) {
            input.val(100);
        }
});







