'use client'

import { CharacterImage } from './CharacterImage'
import { Character } from '@/data/types'

type Props = {
    characters: Character[]
    /** 用户扮演的角色，id 需要是 character 里的一个 */
    userRoleId: number
}

export function SceneCharacters({ characters, userRoleId }: Props) {
    console.log(characters)
    return (
        <div>
            <h2 className="mb-4">出场人物</h2>
            <ul>
                {characters.map(({ id, name }) => (
                    <li key={id} className="mb-2 flex gap-2 items-center">
                        <CharacterImage
                            name={name}
                            isUserRole={userRoleId === id}
                        />
                        <div>{name}</div>
                        {userRoleId === id && <div>你的角色</div>}
                    </li>
                ))}
            </ul>
        </div>
    )
}
