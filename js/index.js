//Responsive carosel wheel? 
//Would it even be called a wheel?
//Attempt 1: Works Drag with cursor
$(document).ready(function() {
    console.log("Document ready"); // Add this line
    $("#news-slider").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true
    });
});

