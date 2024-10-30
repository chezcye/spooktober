// Main JavaScript file 

//------------------------JavaScript for Haunted House ---------------------------------------
// Get each room element by it ID
const skeleton = document.getElementById("skeleton");
const weather = document.getElementById("weather");
const countdown = document.getElementById("countdown");


// Add a event listerners to open the doors when clicked, then navigate to the room page.
skeleton.addEventListener("click", function() {
    document.body.classList.add("skeleton-room-open");
    setTimeout(function() {
        window.location.href = 'rooms/skeleton-dance.html';
    }, 1000);     
   
});

weather.addEventListener('click', function() {
    document.body.classList.add('weather-room-open'); 
    setTimeout(function() {
        window.location.href = 'rooms/spooky-weather.html'; 
    }, 1000); // Delay for animation
});

countdown.addEventListener('click', function() {
    document.body.classList.add('countdown-room-open'); 
    setTimeout(function() {
        window.location.href = 'rooms/countdown.html'; 
    }, 1000); // Delay for animation
});



// ---------- Playing the Background Sound 


// Trigger the function after  page has been fully loaded. 
window.addEventListener("load", function() {

    // Select the audio element for the ambient sound 
    const backgroundSound = document.getElementById("background-sound");
    
    
    // Play the background sound immediately after page loads. 
    backgroundSound.play();
    backgroundSound.volume = 0.3;
});


// ---- Playing Hover & Click Sound

// Select Hover and Click Sounds 
const hoverSound = document.getElementById("hover-sound");
const clickSound = document.getElementById('click-sound');

// Adjust the volume levels 
hoverSound.volume = 0.2; 
clickSound.volume = 0.35;


// Select all elements with the "room" class
const rooms =  document.querySelectorAll(".room");

let hoverSoundTimeout;

// A forEach loop that iterate over each room 
rooms.forEach(room => {

    //Hover Sound with debounce on mouse enter 
    room.addEventListener("mouseenter", () => {

        // Clear any existing timeout
        clearTimeout(hoverSoundTimeout);
        hoverSoundTimeout = setTimeout(() => {
            // Reset sound to start 
            hoverSound.currentTime = 0;

            // Play hover sound
            hoverSound.play();

        }, 100); //Short delay to prevent overlapping

        // Stop the Click Sound if it's playing 
        clickSound.pause();
        clickSound.currentTime = 0; 
       
    });

    // Click Sounds on click 
    room.addEventListener("click", () => {
        hoverSound.pause();
        hoverSound.currentTime = 0;

        clickSound.currentTime = 0;
        clickSound.play();
    });

});








