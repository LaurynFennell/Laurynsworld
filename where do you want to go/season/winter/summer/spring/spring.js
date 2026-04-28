$("button").click( 
    function (){

   
    $(".background-video").toggleClass("spring");
    

    }

)



 var x = document.getElementById("music");

// Function to play the audio


function playAudio() {
  x.play();
}

// Function to pause the audio
function pauseAudio() {
  x.pause();
}