//
//  Portfolio
//  scrollSpy.js
//
//  Created By Ryan Maugin on 01/05/17
//

//noinspection JSUnresolvedFunction
$("#myNavBar").find("a").on("click", function (event) {

    // Make sure the hash value has value before overriding default behaviour
    if (this.hash !== "") {
        event.preventDefault(); // Prevent default behaviour
        var hash = this.hash; // store hash
        
        // Animate body to the target
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            // Add hash (#) to URL when done scrolling
            window.location.hash = hash;
        });
    }
})
