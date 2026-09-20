type Props = {
    searchParams: Promise<{ message?: string }>
}

export default async function ErrorPage({ searchParams }: Props) {
    const params = await searchParams

    return (
        <div>
            <h1>Error</h1>
            <p>{params.message}</p>
        </div>
    )
}