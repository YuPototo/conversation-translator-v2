import { getScene } from '@/data/scenes'
import { ScenePlayer } from '@/features/scene/components/ScenePlayer'

type Props = {
    params: {
        id: string
    }
}

export default async function ScenePage({ params }: Props) {
    const { id } = await params
    const scene = getScene(parseInt(id))

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">{scene.title}</h1>
            <ScenePlayer scene={scene} />
        </div>
    )
}
