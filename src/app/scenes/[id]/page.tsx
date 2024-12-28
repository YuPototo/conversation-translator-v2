type Props = {
    params: {
        id: string
    }
}

export default async function ScenePage({ params }: Props) {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Scene {params.id}</h1>
            <p>You are viewing scene with ID: {params.id}</p>
        </div>
    )
}
