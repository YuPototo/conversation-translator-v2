import { getScene } from '@/data/scenes'

type Props = {
    params: {
        id: string
    }
}

export default async function ScenePage({ params }: Props) {
    const scene = getScene(parseInt(params.id))

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">{scene.name}</h1>
            <p>
                {scene.conversation
                    .map((sentence) => sentence.japanese)
                    .join(' ')}
            </p>
        </div>
    )
}
