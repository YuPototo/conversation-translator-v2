import { CharacterImage } from './CharacterImage'
import { cn } from '@/utils/ui/cn'
import { IMessage } from './MessageList'
import { Character } from '@/data/types'

type Props = {
    message: IMessage
    character: Character
}

export function Message({ message, character }: Props) {
    return (
        <div className="flex gap-4 items-center">
            <CharacterImage
                name={character.name}
                isUserRole={message.origin === 'user'}
            />

            {message.origin === 'npc' ? (
                <div className="p-3 rounded-lg text-black bg-gray-300">
                    {message.content}
                </div>
            ) : (
                <div
                    className={cn(
                        'p-3 rounded-lg ',
                        message.isRight
                            ? 'bg-green-300 text-black'
                            : 'bg-red-300 line-through text-gray-500'
                    )}
                >
                    {message.content}
                </div>
            )}
        </div>
    )
}
