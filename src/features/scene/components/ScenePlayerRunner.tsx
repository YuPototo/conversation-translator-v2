import { useEffect } from 'react'
import { useSceneContext, useSceneDispatch } from '../context/SceneProvider'
import { MessageList } from './MessageList'
import { SceneIntroduction } from './SceneIntroduction'
import { TranslationConsole } from './TranslationConsole'
import { loadNpcMessage } from '../context/sceneActions'

export function ScenePlayerRunner() {
    const state = useSceneContext()
    const dispatch = useSceneDispatch()

    // status of the scene
    const { sceneStatus, userRoleId, currentSentenceIndex } = state

    const currentSpeakerId =
        state.sceneData.conversation[currentSentenceIndex]?.characterId

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (sceneStatus === 'inProgress') {
            // if the current speaker is npc, load npc message in 500ms
            if (currentSpeakerId !== userRoleId) {
                timer = setTimeout(() => {
                    dispatch(loadNpcMessage())
                }, 500)
            }
        }

        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    }, [sceneStatus, currentSpeakerId, dispatch, userRoleId])

    return (
        <>
            {sceneStatus === 'preparation' && <SceneIntroduction />}

            {(sceneStatus === 'inProgress' || sceneStatus === 'ended') && (
                <>
                    <MessageList />
                    <TranslationConsole />
                </>
            )}
        </>
    )
}
