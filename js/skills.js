//
//  Portfolio
//  Skills.JS
//
//  Created By Ryan Maugin on 04/05/17
//

$(document).ready(function () {

    // Containers
    var webContainer = $('#web-container');
    var appContainer = $('#app-container');
    var softwareContainer = $('#software-container');

    // Content of containers
    var webContent = $('#web-content');
    var appContent = $('#app-content');
    var softwareContent = $('#software-content');
    
    // Hide all container content by default
    webContent.hide();
    appContent.hide();
    softwareContent.hide();

    // Shown bools
    webShown = false
    appShown = false
    sofShown = false

    webContainer.click(function () { 
        if (webShown == true) {
            webShown = false
            webContent.hide(1000);
            $('#hintCollapse1').html('Click to expand');
        } else {
            webShown = true
            $('#hintCollapse1').html('<b>Click to collapse</b>');
            webContent.show(1000);
        }
    });

    appContainer.click(function () { 
        if (appShown == true) {
            appShown = false
            appContent.hide(1000);
            $('#hintCollapse3').html('Click to expand');
        } else {
            appShown = true
            $('#hintCollapse3').html('<b>Click to collapse</b>');
            appContent.show(1000);
        }
    });

    softwareContainer.click(function () { 
        if (sofShown == true) {
            sofShown = false
            softwareContent.hide(1000);
            $('#hintCollapse2').html('Click to expand');
        } else {
            sofShown = true
            $('#hintCollapse2').html('<b>Click to collapse</b>');
            softwareContent.show(1000);
        }
    });

});