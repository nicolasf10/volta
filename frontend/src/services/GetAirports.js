const getAirports = (place, callback) => {
    const apiKey = "AIzaSyAAqWy0DmJhNoklNmZgyVRiZY9daxfswrY";
    var iataCodes = [];

    // Fetch latitude and longitude of the place using Google Maps Geocoding API
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const lat = data.results[0].geometry.location.lat;
        const lng = data.results[0].geometry.location.lng;
        return `${lat},${lng}`;
      }).then((coordinates) => {
            console.log(coordinates)

            // NOW I HAVE THE COORDINATES
            const radius = 50000;

            // Fetch airports using Google Places API
            fetch(
                `http://localhost:8080/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinates}&radius=${radius}&type=airport&keyword=airport&key=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                console.log(data)
                const airportNames = data.results.map((result) => result.name);
                
                // return airportNames;
                // console.log(airportNames)

                for (let i = 0; i < airportNames.length; i++) {
                        fetch(
                            `http://localhost:8080/https://airport-api.lamdev.be/search/name/${encodeURIComponent(
                            airportNames[i]
                            )}`
                        ).then((response) => {
                            try {
                                response.json().then(response => {
                                    // console.log(JSON.parse(JSON.stringify(response))[0].iata)
                                    // iataCodes.push(JSON.parse(JSON.stringify(response))[0].iata)
                                    console.log(iataCodes)
                                    callback(JSON.parse(JSON.stringify(response))[0].iata)
                                }
                                )
                            } catch (error) {
                                console.log(error)
                            }
                        })
                }
                return iataCodes;
                }
                )
                .catch((error) => console.log(error));
            }).then((codes) => {
                console.log(codes)
                return codes;
            })
            .catch((error) => console.log(error));
}
export default getAirports;