import Link from 'next/link'
import { scenes } from '@/data/scenes'

export default function HomePage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Scenes</h1>
            <ul className="space-y-4">
                {scenes.map((scene) => (
                    <li key={scene.id}>
                        <Link
                            href={`/scenes/${scene.id}`}
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            {scene.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
