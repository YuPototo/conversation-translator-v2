import { Scene } from '@/data/types'

const characters = [
    { id: 1, name: 'Character 1' },
    { id: 2, name: 'Character 2' },
]

const conversations = [
    { id: 1, characterId: 1, japanese: 'こんにちは', chinese: '你好' },
    { id: 2, characterId: 2, japanese: 'こんにちは', chinese: '你好' },
]

export const scene_1: Scene = {
    id: 1,
    name: 'Scene 1',
    characters,
    conversations,
}
