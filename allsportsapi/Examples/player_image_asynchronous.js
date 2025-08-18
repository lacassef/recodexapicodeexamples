const axios = require('axios');

async function getPlayerImage(playerId) {
    const url = `https://tennisapi1.p.rapidapi.com/api/tennis/player/${playerId}/image`;
    const headers = {
        'X-RapidAPI-Key': 'my_key',
        'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
    };

    try {
        const response = await axios.get(url, { headers });
        const imageData = response.data;

        // Do something with the image data
        // For example, display it on the web page
        const imageElement = document.getElementById('playerImage');
        imageElement.src = imageData;

        // Return the image data if needed
        return imageData;
    } catch (error) {
        // Handle any errors
        console.error(error);
    }
}
