import { Scene } from './types'
import { SceneMeta } from './types'
import * as scenesTable from './scenesTable'
import { getSceneMeta } from './getSceneMeta'

export const scenesMeta: Record<string, SceneMeta> = {
    [scenesTable.scene_1.id]: getSceneMeta(scenesTable.scene_1),
    [scenesTable.scene_2.id]: getSceneMeta(scenesTable.scene_2),
    [scenesTable.scene_3.id]: getSceneMeta(scenesTable.scene_3),
    [scenesTable.scene_4.id]: getSceneMeta(scenesTable.scene_4),
}

export const scenes: Record<string, Scene> = {
    [scenesTable.scene_1.id]: scenesTable.scene_1,
    [scenesTable.scene_2.id]: scenesTable.scene_2,
    [scenesTable.scene_3.id]: scenesTable.scene_3,
    [scenesTable.scene_4.id]: scenesTable.scene_4,
}

export const getScene = (id: number) => {
    return scenes[id]
}
