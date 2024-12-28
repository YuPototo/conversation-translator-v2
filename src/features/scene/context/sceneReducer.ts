import { IMessage } from '../components/MessageList'
import {
    CHANGE_ROLE,
    LOAD_NPC_MESSAGE,
    START_SCENE,
    SENDING_USER_MESSAGE,
    SceneAction,
    RECEIVE_USER_EVALUATION,
    CLICK_UNDERSTOOD_BTN,
} from './sceneActions'
import { type SceneState } from './sceneState'

export function sceneReducer(
    state: SceneState,
    action: SceneAction
): SceneState {
    switch (action.type) {
        case CHANGE_ROLE: {
            const roleIdArr = Object.keys(state.sceneData.characters).map(
                Number
            )
            const anotherRoleId = roleIdArr.find(
                (id) => id !== state.userRoleId
            )
            if (anotherRoleId) {
                return {
                    ...state,
                    userRoleId: anotherRoleId,
                }
            } else {
                console.error(
                    `找不到另一个角色。当前 userRoleId: ${
                        state.userRoleId
                    }. sceneData.characters: ${JSON.stringify(
                        state.sceneData.characters
                    )}`
                )
                return state
            }
        }

        case START_SCENE: {
            if (state.sceneStatus !== 'preparation') {
                console.error(
                    `状态不是 scenePreparation. 当前状态: ${state.sceneStatus}`
                )
                return state
            }

            const firstSentence = state.sceneData.conversation[0]

            return {
                ...state,
                sceneStatus: 'inProgress',
                sentenceStatus:
                    firstSentence.characterId === state.userRoleId
                        ? 'userInputting'
                        : 'npcSending',
            }
        }

        case LOAD_NPC_MESSAGE: {
            const conversation = state.sceneData.conversation
            const currentConversationIndex = state.currentSentenceIndex
            const message = conversation[currentConversationIndex]

            const hasNextSentence =
                currentConversationIndex + 1 < conversation.length

            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        characterId: message.characterId,
                        content: message.japanese,
                        origin: 'npc',
                    },
                ],
                currentSentenceIndex: hasNextSentence
                    ? currentConversationIndex + 1
                    : currentConversationIndex,
                sentenceStatus: hasNextSentence ? 'userInputting' : null,
                sceneStatus: hasNextSentence ? state.sceneStatus : 'ended',
            }
        }

        case SENDING_USER_MESSAGE: {
            return {
                ...state,
                sentenceStatus: 'systemEvaluating',
            }
        }

        case RECEIVE_USER_EVALUATION: {
            const payload = action.payload

            if (payload.isRight) {
                const rightMessage: IMessage = {
                    characterId: state.userRoleId,
                    content: payload.userInput,
                    origin: 'user',
                    isRight: true,
                }

                return {
                    ...state,
                    messages: [...state.messages, rightMessage],
                    sentenceStatus: 'npcSending',
                    currentSentenceIndex: state.currentSentenceIndex + 1,
                }
            } else {
                // add the wrong message to the message list

                const wrongMessage: IMessage = {
                    characterId: state.userRoleId,
                    content: payload.userInput,
                    origin: 'user',
                    isRight: false,
                }
                return {
                    ...state,
                    messages: [...state.messages, wrongMessage],
                    sentenceStatus: 'userReadingFeedback',
                    translationExplanation: payload.explanation,
                }
            }
        }

        case CLICK_UNDERSTOOD_BTN: {
            const hasNextSentence =
                state.currentSentenceIndex + 1 <
                state.sceneData.conversation.length

            return {
                ...state,
                // Assumption: next sentence is from NPC
                sentenceStatus: hasNextSentence ? 'npcSending' : null,
                sceneStatus: hasNextSentence ? state.sceneStatus : 'ended',
                translationExplanation: undefined,
                currentSentenceIndex: hasNextSentence
                    ? state.currentSentenceIndex + 1
                    : state.currentSentenceIndex,
            }
        }

        default: {
            //@ts-expect-error - type should not be found
            console.error('Unknown action: ', action.type)
            return state
        }
    }
}
