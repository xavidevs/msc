// Define the list of websites to redirect to
const websites = [
    'https://sococycleri.com',
    'https://woodknocker.co',
    'https://amazon.com'
];

// Redirect to a random website from the list
function redirectToRandomWebsite() {
    const randomIndex = Math.floor(Math.random() * websites.length);
    const randomWebsite = websites[randomIndex];
    window.location.href = randomWebsite;
}

// Redirect after 5 seconds (5000 milliseconds)
setTimeout(redirectToRandomWebsite, 5000);