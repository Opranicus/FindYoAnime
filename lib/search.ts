export async function getAnime(search: string){
    const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(search)}&limit=5`
    );

    if(!res.ok){
        console.log(res.status);
        throw new Error("Failed to fetch anime");
    }

    return res.json();
}