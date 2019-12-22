

$(".menu").on("click", function( e ) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 100);
    
});

$( document ).ready(function() {

$( ".cross" ).hide();
/*$( ".menu" ).hide();*/
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$(".headshot").hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$(".headshot").show();
$( ".hamburger" ).show();


});
});

});

