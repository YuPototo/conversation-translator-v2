'use client'

import {
    createContext,
    useContext,
    useReducer,
    Dispatch,
    ReactNode,
} from 'react'
import { sceneReducer } from './sceneReducer'
import { initialSceneState, type SceneState } from './sceneState'
import { SceneAction } from './sceneActions'
import { type Scene } from '@/data/types'

const SceneContext = createContext<SceneState | undefined>(undefined)

const SceneDispatchContext = createContext<Dispatch<SceneAction> | undefined>(
    undefined
)

interface Props {
    scene: Scene
    children: ReactNode
}

export function SceneProvider({ children, scene }: Props) {
    const userRoleId = getDefaultRoleId(scene.characters)

    const [state, dispatch] = useReducer(sceneReducer, {
        ...initialSceneState,
        sceneData: scene,
        userRoleId,
    })

    return (
        <SceneContext.Provider value={state}>
            <SceneDispatchContext.Provider value={dispatch}>
                {children}
            </SceneDispatchContext.Provider>
        </SceneContext.Provider>
    )
}

// Hook to use scene state
export function useSceneContext(): SceneState {
    const context = useContext(SceneContext)
    if (context === undefined) {
        throw new Error('useSceneContext must be used within a SceneProvider')
    }
    return context
}

// Hook to use scene dispatch
export function useSceneDispatch(): Dispatch<SceneAction> {
    const context = useContext(SceneDispatchContext)
    if (context === undefined) {
        throw new Error('useSceneDispatch must be used within a SceneProvider')
    }
    return context
}

// todo: fix it
function getDefaultRoleId(characters: Scene['characters']) {
    return characters[0].id
}
