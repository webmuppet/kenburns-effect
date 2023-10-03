document.addEventListener('DOMContentLoaded', function() {
    // Set the scale percentages
    const MIN_SCALE = 100; // 100%
    const MAX_SCALE = 110; // 110%
  
    // Get all the divs with class "kenburns"
    const kenburnsDivs = document.querySelectorAll('.kenburns');
  
    // Function to handle the scroll event
    function handleScroll() {
      kenburnsDivs.forEach(div => {
        const rect = div.getBoundingClientRect();
  
        // Check if the div is in the viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          // Calculate the percentage of the div that's visible
          const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const visiblePercentage = visibleHeight / rect.height;
  
          // Calculate the scale based on the visible percentage
          const scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * visiblePercentage;
  
          // Set the background size
          div.style.backgroundSize = `${scale}% ${scale}%`;
        }
      });
    }
  
    // Add the scroll event listener
    document.addEventListener('scroll', handleScroll);
  
    // Call the function initially to set the correct scale
    handleScroll();
  });