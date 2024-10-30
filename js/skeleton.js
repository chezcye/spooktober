//------------------------JavaScript for Skeleton Animation (skeleton-dance.html) ---------------------------------------


// Select the "skeleton-img" element 
const skeletonElement = document.getElementById('skeleton-img');

// Add an event listener for page load to start animations automatically
document.addEventListener('DOMContentLoaded', () => {

    // Add CSS classes to trigger the animations
   skeletonElement.classList.add('spooky'); 
  
});
 
// Selecting the "back-door" element. 
const backDoor = document.getElementById("back-door");


// Add a event listener on click to the Haunted House main page.   
backDoor.addEventListener("click", () => {

    //Link to the main "Haunted House" page. 
    window.location.href = "../index.html";
    
});

