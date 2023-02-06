import React, { useState, useEffect } from "react";

const App = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const playerId = "12345";
        const headers = new Headers({
            "X-RapidAPI-Key": "YOUR_API_KEY",
            "X-RapidAPI-Host": "allsportsapi2.p.rapidapi.com"
        });
        const options = {
            headers: headers
        };
        fetch(`https://allsportsapi2.p.rapidapi.com/api/player/${playerId}/image`, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.blob();
            })
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                setImage(imageUrl);
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    }, []);

    return (
        <div>
            {image ? <img src={image} alt="Player" /> : <p>Loading...</p>}
        </div>
    );
};

export default App;
