'use client'

import { SceneCharacters } from './SceneCharacters'
import { useSceneContext, useSceneDispatch } from '../context/SceneProvider'
import { Button } from '@/components/ui/button'
import { startScene } from '../context/sceneActions'

export function SceneIntroduction() {
    const state = useSceneContext()
    const dispatch = useSceneDispatch()
    const { title, characters } = state.sceneData
    const userRoleId = state.userRoleId

    return (
        <div className="mb-12">
            <h1 className="mb-4">{title}</h1>
            <SceneCharacters characters={characters} userRoleId={userRoleId} />

            <Button onClick={() => dispatch(startScene())}>开始对话</Button>
        </div>
    )
}
