import { useSceneContext } from '../context/SceneProvider'
import { Message } from './Message'
import { MessageLoading } from './MessageLoading'

// Define the message for 'user' and 'npc' separately
export interface UserMessage {
    characterId: number
    content: string
    origin: 'user'
    isRight: boolean
}

export interface NpcMessage {
    characterId: number
    content: string
    origin: 'npc'
}

// Union type to combine both cases
export type IMessage = UserMessage | NpcMessage

export function MessageList() {
    const state = useSceneContext()
    const { messages, sentenceStatus, sceneData, currentSentenceIndex } = state
    const characters = sceneData.characters

    const currentSpeakerId =
        sceneData.conversation[currentSentenceIndex]?.characterId

    const currentSpeaker = characters.find(({ id }) => id === currentSpeakerId)

    const isLoadingMessage =
        sentenceStatus === 'npcSending' || sentenceStatus === 'systemEvaluating'

    if (!currentSpeaker) {
        console.error(
            `Current speaker not found. currentSpeakerId: ${currentSpeakerId}`
        )
        return <div>Current speaker not found</div>
    }

    return (
        <>
            {messages.map((message, index) => (
                <div key={index} className="py-2">
                    <Message message={message} character={currentSpeaker} />
                </div>
            ))}

            {isLoadingMessage && currentSpeakerId && (
                <MessageLoading
                    character={currentSpeaker}
                    isUserRole={currentSpeakerId === state.userRoleId}
                />
            )}
        </>
    )
}
