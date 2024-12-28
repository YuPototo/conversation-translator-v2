// given a scene, return the meta data

import { Scene } from './types'

export const getSceneMeta = (scene: Scene) => {
    return {
        id: scene.id,
        name: scene.name,
    }
}
