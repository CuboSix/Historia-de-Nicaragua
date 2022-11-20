/*=========================================
	JavaScript INDEX
===========================================
==========================================*/
(function($){
	"use strict";
	//preloder
  setTimeout(() => {
    $('#preloder').addClass('loaded');
  }, 1500);
  setTimeout(() => {
    $('#preloder').remove('loaded');
  }, 4000);

//scroll Headr fun
const Header = ()=>{
    if( ($(window).width() <= 991) || ($('body').scrollTop() > 48) ){
        $('.navbar').addClass('add-header');
    }else{
        $('.navbar').removeClass('add-header');
    }
}
Header();
$('body').bind('scroll',()=>{
  Header();
});



})(jQuery);


	 

