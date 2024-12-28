import { Scene } from '@/data/types'

const characters = [
    { id: 1, name: 'お兄ちゃん' },
    { id: 2, name: 'お姉ちゃん' },
]

const conversation = [
    {
        id: 1,
        characterId: 1,
        japanese: '今日は何を食べたい？',
        chinese: '今天想吃什么？',
    },
    {
        id: 2,
        characterId: 2,
        japanese: 'うーん、パスタがいいな。お兄ちゃんは？',
        chinese: '嗯……我想吃意大利面。哥哥呢？',
    },
    {
        id: 3,
        characterId: 1,
        japanese: 'パスタもいいけど、たまには寿司とかどう？',
        chinese: '意大利面不错，但偶尔吃寿司怎么样？',
    },
    {
        id: 4,
        characterId: 2,
        japanese: '寿司も好きだけど、ちょっと高いんじゃない？',
        chinese: '寿司我也喜欢，但是不是有点贵？',
    },
    {
        id: 5,
        characterId: 1,
        japanese: '確かに。でも回転寿司なら安く食べられるよ。',
        chinese: '确实。不过回转寿司就可以便宜地吃了。',
    },
    {
        id: 6,
        characterId: 2,
        japanese: '回転寿司かぁ…それもいいね！サーモンとかエビ食べたいな～。',
        chinese: '回转寿司啊……那也不错！我想吃三文鱼和虾～。',
    },
    {
        id: 7,
        characterId: 1,
        japanese: '僕はマグロとウニが好きだな。あと、デザートもあるし。',
        chinese: '我喜欢金枪鱼和海胆。而且还有甜点。',
    },
    {
        id: 8,
        characterId: 2,
        japanese: 'デザート！？ケーキとかプリンとか？',
        chinese: '甜点！？蛋糕或布丁？',
    },
    {
        id: 9,
        characterId: 1,
        japanese: 'そうそう、プリンとかアイスとかいろいろあるよ。',
        chinese: '对对，布丁、冰淇淋都有。',
    },
    {
        id: 10,
        characterId: 2,
        japanese: 'じゃあ決まり！回転寿司に行こう！',
        chinese: '那就决定了！去回转寿司吧！',
    },
    {
        id: 11,
        characterId: 1,
        japanese: 'オッケー！行く前にちょっとお腹を空かせないとね。',
        chinese: '好的！去之前先让肚子饿一点。',
    },
    {
        id: 12,
        characterId: 2,
        japanese: 'うん、準備できたら教えてね！',
        chinese: '嗯，准备好了告诉我哦！',
    },
    {
        id: 13,
        characterId: 1,
        japanese: 'わかった！楽しみだね。',
        chinese: '知道了！好期待啊。',
    },
    {
        id: 14,
        characterId: 2,
        japanese: 'うん！たくさん食べよう！',
        chinese: '嗯！要吃好多！',
    },
]

export const scene_2: Scene = {
    id: 2,
    name: 'Scene 2',
    characters,
    conversation,
}
