import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

/*$(function() {
    var pressed = false;
    var start = undefined;
    var startX, startWidth;
    
    $("table th").mousedown(function(e) {
        start = $(this);
        pressed = true;
        startX = e.pageX;
        startWidth = $(this).width();
        $(start).addClass("resizing");
    });
    
    $(document).mousemove(function(e) {
        if(pressed) {
            $(start).width(startWidth+(e.pageX-startX));
        }
    });
    
    $(document).mouseup(function() {
        if(pressed) {
            $(start).removeClass("resizing");
            pressed = false;
        }
    });
});*/

$(function() {
    $('.fi-wrench').click(function() {
        // Resize sidebar
        var navDiv = $('#edit');
        //if nav div is has class small-3
        if (navDiv.hasClass("small-3")){
        navDiv.fadeToggle(250, function(){
            navDiv.toggleClass('small-3');
            navDiv.toggleClass('width-zero');
                    var content = $('#table');
        content.toggleClass('large-9');
        content.toggleClass('large-12');
        });            
        }

else{
                   var content = $('#table');

navDiv.toggleClass('width-zero');           
                content.toggleClass('large-9');
        content.toggleClass('large-12');
            navDiv.toggleClass('small-3');

            navDiv.delay(1750).fadeToggle(250)

/*        navDiv.fadeToggle(200, function(){

 
        });             */
        }
        
//        $("#edit").toggle();



        // Resize content


    });
});