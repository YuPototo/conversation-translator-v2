import { Scene } from './types'
import { SceneMeta } from './types'
import { scene_1 } from './scenes/scene_1'
import { getSceneMeta } from './getSceneMeta'

export const scenesMeta: Record<string, SceneMeta> = {
    [scene_1.id]: getSceneMeta(scene_1),
}

export const scenes: Record<string, Scene> = {
    [scene_1.id]: scene_1,
}

export const getScene = (id: number) => {
    return scenes[id]
}
