export type Preview = {
    coverImage: { extraLarge: string }
    title: { romaji: string }
    genres: string[]
}

export type FullDetails = {
    coverImage: { large: string }
    title: { romaji: string }
    genres: string[]
    episodes: number
    status: string
    description: string
}