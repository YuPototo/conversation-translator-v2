'use client'

import { SceneProvider } from '../context/SceneProvider'
import { ScenePlayerRunner } from './ScenePlayerRunner'
import { type Scene } from '@/data/types'
type Props = {
    scene: Scene
}

export function ScenePlayer({ scene }: Props) {
    return (
        <SceneProvider scene={scene}>
            <ScenePlayerRunner />
        </SceneProvider>
    )
}
