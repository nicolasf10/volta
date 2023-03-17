export async function getImages(query) {
    try {
        let access_key = 'v62XpTNqGJQX-5B60jvaM-y2Fwpkk4Z0qOZ-WvT_2o0'
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=v62XpTNqGJQX-5B60jvaM-y2Fwpkk4Z0qOZ-WvT_2o0&per_page=9`)

        return await response.json();
    } catch(error) {
        return [];
    }
}