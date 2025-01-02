import { Scene } from '@/data/types'
import { type IMessage } from '../components/MessageList'

type SceneStatus =
    /** While user is reading the scene description */
    'preparation' | 'inProgress' | 'ended'

export type SentenceStatus =
    | /** NPC is sending the message */
    'npcSending'
    /** User is inputting */
    | 'userInputting'
    /** Evaluating user input */
    | 'systemEvaluating'
    /** User is reading feedback */
    | 'userReadingFeedback'

export interface SceneState {
    // --- 1. settings or conversation data. Once set, it should not be changed after conversation  starts ---
    /** scene data from backend */
    sceneData: Scene
    /** which character does the user play */
    userRoleId: number

    // --- 2. scene status ---
    /** status of the scene */
    sceneStatus: SceneStatus

    /** current sentence index */
    currentSentenceIndex: number
    /** message to renders */
    messages: IMessage[]

    // --- 3. step state ---
    sentenceStatus: SentenceStatus | null
    translationExplanation?: string
}

export const initialSceneState: Omit<SceneState, 'sceneData' | 'userRoleId'> = {
    sceneStatus: 'preparation',
    messages: [],
    currentSentenceIndex: 0,
    sentenceStatus: null,
}
