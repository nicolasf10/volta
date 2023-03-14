export async function getImages(query) {
    try {
        let access_key = 'v62XpTNqGJQX-5B60jvaM-y2Fwpkk4Z0qOZ-WvT_2o0'
        const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${access_key}?query=${query}`)

        return await response.json();
    } catch(error) {
        return [];
    }
}