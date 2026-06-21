// Display a player image in React by fetching it as a Blob.
//
// Image endpoints return binary PNG (image/png). Fetch the bytes, turn them into
// an object URL, and use that as the <img> src.
//
// SECURITY: do NOT expose your RapidAPI key in the browser. In a real app, call a
// route on YOUR backend that holds the key and returns/proxies the image; the
// component below would then fetch from that route instead of RapidAPI directly.

import React, { useState, useEffect } from "react";

const App = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const playerId = "3041";
        let objectUrl; // kept so we can revoke it on cleanup

        const headers = new Headers({
            "X-RapidAPI-Key": "YOUR_API_KEY",          // server-side in production
            "X-RapidAPI-Host": "allsportsapi2.p.rapidapi.com"
        });

        fetch(`https://allsportsapi2.p.rapidapi.com/api/player/${playerId}/image`, { headers })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`);
                }
                return response.blob();
            })
            .then(blob => {
                objectUrl = URL.createObjectURL(blob);
                setImage(objectUrl);
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });

        // Revoke the object URL when the component unmounts to avoid memory leaks.
        return () => {
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, []);

    return (
        <div>
            {image ? <img src={image} alt="Player" /> : <p>Loading...</p>}
        </div>
    );
};

export default App;
