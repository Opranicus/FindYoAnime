export async function getFavoriteAnime(animeIds: number[]) {
    const query = `
        query ($ids: [Int]){
            Page {
                media(id_in: $ids, type: ANIME) {
                    id
                    title {
                        romaji
                        english
                        native
                    }
                    coverImage{
                        extraLarge
                        large
                        medium
                    }
                    genres
                    episodes
                    status
                    description
                }
            }
        }
        
    `;

    const animeApi = 'https://graphql.anilist.co';

    const res = await fetch(animeApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: {
                'ids': animeIds 
            }
        })
    })

    if (!res.ok) {
        console.log(res.status);
        throw new Error(`Failed to fetch anime: ${res.status}`);
    }

    return res.json();
}