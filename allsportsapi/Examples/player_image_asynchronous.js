// Fetch a player image with axios and display it in an <img> element.
//
// Image endpoints return binary PNG (image/png), NOT JSON or a URL. To show the
// bytes in an <img>, request them as a Blob and create an object URL from it.
//
// SECURITY: never ship your RapidAPI key in client-side code. Run this from your
// backend (Node) and serve the result, or proxy the request. The key below is a
// placeholder.

const axios = require('axios');

async function getPlayerImage(playerId) {
    const url = `https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerId}/image`;
    const headers = {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || 'YOUR_API_KEY',
        'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
    };

    try {
        // responseType 'blob' (browser) tells axios to keep the binary intact.
        const response = await axios.get(url, { headers, responseType: 'blob' });

        // Turn the Blob into a URL the browser can render, then assign it.
        const imageUrl = URL.createObjectURL(response.data);
        const imageElement = document.getElementById('playerImage');
        imageElement.src = imageUrl;

        // Free the object URL once the image has loaded to avoid leaking memory.
        imageElement.onload = () => URL.revokeObjectURL(imageUrl);

        return imageUrl;
    } catch (error) {
        console.error('Failed to load player image:', error);
    }
}

// In Node.js (no DOM), request 'arraybuffer' instead and write the bytes to disk:
//
//   const fs = require('fs');
//   const res = await axios.get(url, { headers, responseType: 'arraybuffer' });
//   fs.writeFileSync('player.png', Buffer.from(res.data));
