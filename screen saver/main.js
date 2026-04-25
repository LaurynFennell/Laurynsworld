// Using jQuery for ease of selection
$(document).ready(function() {
    function moveBall() {
        var windowWidth = $(window).width() - 50; // Ball size
        var windowHeight = $(window).height() - 50;
        
        // Random new position
        var newX = Math.floor(Math.random() * windowWidth);
        var newY = Math.floor(Math.random() * windowHeight);
        
        // Animate to new position
        $('#bounce-ball').animate({
            left: newX,
            top: newY
        }, 1000, 'linear', moveBall); // 'linear' for constant speed
    }
    
    moveBall();
});