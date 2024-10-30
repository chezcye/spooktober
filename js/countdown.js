const endDate = new Date("October 31, 2024 00:00:00").getTime(); // Target date for countdown

function updateClock() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    flip(document.getElementById('days'), days);
    flip(document.getElementById('hours'), hours);
    flip(document.getElementById('minutes'), minutes);
    flip(document.getElementById('seconds'), seconds);

    if (distance < 0) clearInterval(countdownInterval); // Stop countdown at 0
}

function flip(element, newValue) {
    const top = element.querySelector('.top');
    const bottom = element.querySelector('.bottom');

    // Only flip if the value has changed
    if (top.textContent != newValue) {
        bottom.textContent = top.textContent; // Update bottom part to current value
        top.textContent = newValue;           // Update top part to new value

        top.classList.add('flip');            // Add flip animation
        setTimeout(() => {
            top.classList.remove('flip');     // Remove flip after animation
        }, 700); // Duration should match CSS animation time
    }
}

// Run updateClock every second
const countdownInterval = setInterval(updateClock, 1000);





const creatureIcons = ["🦇", "👻", "🕷️", "☔️ 👻", "🎃", "☁️🦇", "❄️ 👻", "🧛"]; // Emoji icons for bats, ghosts, and spiders

function spawnCreature() {
    const creature = document.createElement("div");
    creature.classList.add("halloween-creature");
    creature.textContent = creatureIcons[Math.floor(Math.random() * creatureIcons.length)];
    
    // Randomize creature's position
    creature.style.top = `${Math.random() * 80 + 20}%`;
    creature.style.left = `${Math.random() * 80 + 10}%`;

    // Append to clock and auto-remove after animation
    document.querySelector(".flip-clock").appendChild(creature);
    setTimeout(() => creature.remove(), 6000); // Match animation duration
}

// Call spawnCreature every 10 seconds to keep it spooky
setInterval(spawnCreature, 10000);



// Selecting the "back-door" element. 
const backDoor = document.getElementById("back-door");


// Add a event listener on click to the Haunted House main page.   
backDoor.addEventListener("click", () => {

    //Link to the main "Haunted House" page. 
    window.location.href = "../index.html";
    
});