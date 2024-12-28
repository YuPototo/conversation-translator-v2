import { CharacterImage } from './CharacterImage'
import { Character } from '@/data/types'
type Props = {
    character: Character
    isUserRole: boolean
}
export function MessageLoading({ character, isUserRole }: Props) {
    return (
        <div className="flex gap-4 items-center">
            <CharacterImage name={character.name} isUserRole={isUserRole} />
            <div>..... loading ....</div>
        </div>
    )
}
