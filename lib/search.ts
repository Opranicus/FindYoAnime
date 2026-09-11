export async function getAnime(anime: string){
    const res = await fetch(
        
        `https://api.jikan.moe/v4/anime/${anime}/full`
    );

    if(!res.ok){
        throw new Error("Failed to fetch anime");
    }

    return res.json();
}