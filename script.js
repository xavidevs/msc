// Define the list of websites to redirect to
const websites = [
    'https://example1.com',
    'https://example2.com',
    'https://example3.com'
  ];
  
  // Function to shuffle the websites
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Function to redirect to a random website from the list
  function redirectToRandomWebsite() {
    const randomIndex = Math.floor(Math.random() * websites.length);
    const randomWebsite = websites[randomIndex];
    window.location.href = randomWebsite;
  }
  
  // Function to calculate the time until midnight (local time zone)
  function timeUntilMidnight() {
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(), // Current day
      24, // Midnight hour (24-hour format)
      0, // Midnight minute
      0 // Midnight second
    );
    const timeUntilMidnight = midnight - now;
    return timeUntilMidnight;
  }
  
  // Function to update the websites at midnight (local time zone)
  function updateWebsitesAtMidnight() {
    shuffle(websites);
    const timeUntilNextMidnight = timeUntilMidnight();
    setTimeout(updateWebsitesAtMidnight, timeUntilNextMidnight);
  }
  
  // Initial setup: shuffle websites and schedule the next update at midnight
  shuffle(websites);
  updateWebsitesAtMidnight();
  
  // Redirect after 5 seconds (5000 milliseconds)
  setTimeout(redirectToRandomWebsite, 5000);