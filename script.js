// Define the list of websites to redirect to
const websites = [
    'https://example1.com',
    'https://example2.com',
    'https://example3.com'
];

// Redirect to a random website from the list
function redirectToRandomWebsite() {
    const randomIndex = Math.floor(Math.random() * websites.length);
    const randomWebsite = websites[randomIndex];
    window.location.href = randomWebsite;
}

// Redirect after 5 seconds (5000 milliseconds)
setTimeout(redirectToRandomWebsite, 5000);