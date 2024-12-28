export interface Scene {
    id: number
    name: string
    characters: Character[]
    conversation: Sentence[]
}

export type SceneMeta = Pick<Scene, 'id' | 'name'>

export type Sentence = {
    id: number
    characterId: number
    japanese: string
    chinese: string
}

export type Character = {
    id: number
    name: string
}
