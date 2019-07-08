
// Global Variables




// Animations
function wink(element) {
    $(element)
        .animate({left: "+=35px"}, 200)
        .animate({left: "-=35px"}, 200)
        .animate({left: "+=35px"}, 200)
        .animate({left: "-=35px"}, 200)
        .animate({opacity: "0.5"}, 200)
        .animate({opacity: "1"}, 200)
        .animate({opacity: "0.5"}, 200);
}



// Click Events
function clickEvents() {

    //When hover on the pics, shake the picture
    // $(".champGeneral").hover(function(){
    //     $(this).css("z-index", "100").animate({
    //         "left": "+=15px"
    //     });
    // }, function() {
    //     $(this).animate({
    //         "left": "-=15px",
    //         "z-index": "0"
    //     });
    // });

    // When click on the champ, shake all the same champ
    $(".champGeneral").on("click", function(){
        var classes = $(this).attr("class");        //1. Get the css classes of the clicked element
        var champName = classes.split(" ")[2];      //2. Find its champ name
        wink("."+champName);                //3.  Animate the same champ
    });

    // var attrs = $(".champGeneral").attr("class");
    // alert(attrs);
}


// Main Function
$(function() {
    clickEvents();
});
