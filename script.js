// Update the services object in the <script> section
const services = {
    tiktok: [
        { name: "TikTok Likes (Instant Delivery)", price: 180, min: 500 },
        { name: "TikTok Likes (High Retention)", price: 300, min: 500 },
        { name: "TikTok Views (Standard)", price: 5, min: 10000 },
        { name: "TikTok Views (High Retention)", price: 8, min: 10000 },
        { name: "TikTok Followers (Global)", price: 400, min: 500 },
        { name: "TikTok Followers (Pakistan)", price: 650, min: 500 },
        { name: "TikTok Followers (USA)", price: 550, min: 500 },
        { name: "TikTok Followers (UK)", price: 600, min: 500 },
        { name: "TikTok Comments (Custom)", price: 300, min: 500 },
        { name: "TikTok Shares", price: 200, min: 500 },
        { name: "TikTok Live Stream Views", price: 305, min: 500 },
        { name: "TikTok Video Downloads", price: 150, min: 1000 },
        { name: "TikTok Profile Visits", price: 100, min: 1000 },
        { name: "TikTok Verified Badge", price: 15000, min: 1 }
    ],
    youtube: [
        { name: "YouTube Subscribers (Real)", price: 1050, min: 1000 },
        { name: "YouTube Subscribers (Premium)", price: 1500, min: 1000 },
        { name: "YouTube Likes", price: 500, min: 1000 },
        { name: "YouTube Dislikes", price: 50, min: 100 },
        { name: "YouTube Views (Instant)", price: 300, min: 5000 },
        { name: "YouTube Views (HR)", price: 500, min: 5000 },
        { name: "YouTube Watch Hours", price: 8000, min: 4000 },
        { name: "YouTube Comments", price: 300, min: 1000 },
        { name: "YouTube Shares", price: 50, min: 5 },
        { name: "YouTube Live Viewers", price: 700, min: 100 },
        { name: "YouTube Memberships", price: 1200, min: 100 },
        { name: "YouTube Poll Votes", price: 100, min: 100 },
        { name: "YouTube Video Downloads", price: 200, min: 1000 }
    ],
    instagram: [
        { name: "Instagram Followers (Real)", price: 1000, min: 1000 },
        { name: "Instagram Followers (Premium)", price: 1490, min: 1000 },
        { name: "Instagram Likes (Photo)", price: 50, min: 100 },
        { name: "Instagram Likes (Reels)", price: 850, min: 100 },
        { name: "Instagram Story Views", price: 150, min: 1000 },
        { name: "Instagram Reels Views", price: 200, min: 5000 },
        { name: "Instagram Comments", price: 50, min: 3 },
        { name: "Instagram Saves", price: 100, min: 100 },
        { name: "Instagram Shares", price: 120, min: 100 },
        { name: "Instagram Impressions", price: 80, min: 1000 },
        { name: "Instagram Highlights", price: 300, min: 1000 },
        { name: "Instagram Poll Votes", price: 150, min: 100 },
        { name: "Instagram Verified Badge", price: 20000, min: 1 }
    ],
    facebook: [
        { name: "Facebook Page Likes", price: 180, min: 1000 },
        { name: "Facebook Post Likes", price: 100, min: 1000 },
        { name: "Facebook Followers", price: 250, min: 1000 },
        { name: "Facebook Comments", price: 150, min: 100 },
        { name: "Facebook Shares", price: 120, min: 100 },
        { name: "Facebook Group Members", price: 300, min: 1000 },
        { name: "Facebook Event Responses", price: 200, min: 100 },
        { name: "Facebook Story Views", price: 150, min: 1000 },
        { name: "Facebook Video Views", price: 80, min: 5000 },
        { name: "Facebook Poll Votes", price: 100, min: 100 },
        { name: "Facebook Marketplace Views", price: 120, min: 1000 }
    ],
    twitter: [
        { name: "Twitter Followers", price: 700, min: 1000 },
        { name: "Twitter Likes", price: 150, min: 1000 },
        { name: "Twitter Retweets", price: 200, min: 1000 },
        { name: "Twitter Comments", price: 250, min: 100 },
        { name: "Twitter Poll Votes", price: 180, min: 100 },
        { name: "Twitter Spaces Listeners", price: 300, min: 100 },
        { name: "Twitter Impressions", price: 100, min: 10000 },
        { name: "Twitter Profile Visits", price: 80, min: 1000 }
    ],
    spotify: [
        { name: "Spotify Plays", price: 500, min: 10000 },
        { name: "Spotify Followers", price: 800, min: 1000 },
        { name: "Spotify Playlist Followers", price: 600, min: 1000 },
        { name: "Spotify Monthly Listeners", price: 1200, min: 5000 }
    ],
    country: [
        { name: "Saudi TikTok Followers", price: 900, min: 1000 },
        { name: "India IG Followers", price: 750, min: 1000 },
        { name: "Canada YT Views", price: 400, min: 5000 },
        { name: "Australia FB Likes", price: 300, min: 1000 },
        { name: "UAE Twitter Followers", price: 850, min: 1000 }
    ]
};

// Update category buttons in HTML
<div class="category-grid">
    <button class="category-btn" data-category="tiktok">TikTok (14)</button>
    <button class="category-btn" data-category="youtube">YouTube (13)</button>
    <button class="category-btn" data-category="instagram">Instagram (13)</button>
    <button class="category-btn" data-category="facebook">Facebook (11)</button>
    <button class="category-btn" data-category="twitter">Twitter (8)</button>
    <button class="category-btn" data-category="spotify">Spotify (4)</button>
    <button class="category-btn" data-category="country">Country-Specific (5)</button>
</div>
