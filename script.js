// Define the list of websites to redirect to
const websites = [
    'https://sococycleri.com',
    'https://woodknocker.co',
    'https://google.com',
    'https://apple.com'
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
    firebase.database().ref('selectedWebsite').set(randomWebsite); // Store selected website
    window.location.href = randomWebsite;
}

// Function to retrieve the selected website from Firebase
function retrieveSelectedWebsite() {
    firebase.database().ref('selectedWebsite').once('value').then(function(snapshot) {
        const selectedWebsite = snapshot.val();
        if (selectedWebsite) {
            window.location.href = selectedWebsite; // Redirect to the selected website
        } else {
            redirectToRandomWebsite(); // If no website is selected yet, select and redirect to a random one
        }
    });
}

// Function to calculate the time until midnight (local time zone)
function timeUntilMidnight() {
    const now = new Date();
    const midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(), // Current day
        24,           // Midnight hour (24-hour format)
        0,            // Midnight minute
        0             // Midnight second
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

firebase.initializeApp(firebaseConfig);

// Initial setup: shuffle websites, schedule the next update at midnight, and retrieve/redirect to the selected website
shuffle(websites);
updateWebsitesAtMidnight();
retrieveSelectedWebsite();

// Redirect after 5 seconds (5000 milliseconds)
setTimeout(redirectToRandomWebsite, 5000);