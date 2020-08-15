/**
 * This is main project entry point
 */

// Styles import
import './parts/styles';

// jQuery entry point
import './parts/jQuery';

// Example Pages
import './pages/user-page';

$(".close").on("mousedown",function(){
    $(".navigation-container").css("display","none");
    $(".page-container").css("display","block");
});

$(".menu").on("mousedown",function(){
    $(".navigation-container").css("display","block");
    $(".page-container").css("display","none");
});