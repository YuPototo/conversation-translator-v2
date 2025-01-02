import { Scene } from '@/data/types'

const characters = [
    { id: 1, name: 'Aiko' },
    { id: 2, name: 'Kenji' },
]

const conversation = [
    {
        id: 1,
        characterId: 1,
        japanese: '今日はデートの日だね！何をするか、もう決めた？',
        chinese: '今天是约会日呢！决定好要做什么了吗？',
    },
    {
        id: 2,
        characterId: 2,
        japanese: 'うーん、まだ迷ってるんだ。Aikoは何かやりたいことある？',
        chinese: '嗯，还在犹豫呢。Aiko有什么想做的吗？',
    },
    {
        id: 3,
        characterId: 1,
        japanese:
            'そうだなぁ、映画を見に行くのもいいし、カフェでまったりするのもいいかなって思ってるよ。',
        chinese: '嗯，看电影也不错，或者去咖啡厅放松一下也挺好的。',
    },
    {
        id: 4,
        characterId: 2,
        japanese: '映画かカフェね。映画なら何が見たい？',
        chinese: '电影还是咖啡厅啊。如果是电影的话，想看什么？',
    },
    {
        id: 5,
        characterId: 1,
        japanese:
            '最近話題になってるラブストーリーの映画とかどう？Kenjiも好きか分からないけど…。',
        chinese: '最近热门的爱情电影怎么样？虽然不知道Kenji会不会喜欢……',
    },
    {
        id: 6,
        characterId: 2,
        japanese:
            'ラブストーリー？まぁ、Aikoが楽しめるならいいよ！その後にカフェでお茶でもする？',
        chinese:
            '爱情电影吗？嗯，如果Aiko会开心的话，那就看吧！之后再去咖啡厅喝茶？',
    },
    {
        id: 7,
        characterId: 1,
        japanese:
            '本当に？ありがとう！じゃあ、映画館の近くに新しくできたケーキが美味しいカフェがあるみたいだから、そこに行こうよ。',
        chinese:
            '真的吗？谢谢！那电影馆附近新开了一家蛋糕很好吃的咖啡厅，我们去那儿吧。',
    },
    {
        id: 8,
        characterId: 2,
        japanese:
            'いいね！映画の時間を調べておくよ。Aiko、ポップコーンは甘いの派？それとも塩派？',
        chinese: '不错！我来查查电影时间。Aiko，你喜欢甜的爆米花还是咸的？',
    },
    {
        id: 9,
        characterId: 1,
        japanese:
            '甘いのが好きかな。でも、Kenjiが塩が好きなら半分ずつシェアしてもいいよ！',
        chinese: '我喜欢甜的。不过如果Kenji喜欢咸的，那我们可以一人一半！',
    },
    {
        id: 10,
        characterId: 2,
        japanese: 'さすがAiko、優しいね。じゃあ半分ずつにしよう！楽しみだな。',
        chinese: '不愧是Aiko，真贴心。那就一人一半吧！真期待啊。',
    },
    {
        id: 11,
        characterId: 1,
        japanese: '私も楽しみ！久しぶりに映画館に行くし、Kenjiと一緒だしね。',
        chinese: '我也很期待！很久没去电影院了，而且还是跟Kenji一起。',
    },
    {
        id: 12,
        characterId: 2,
        japanese:
            '俺もAikoと一緒にいるだけで楽しいよ。今日は最高の日にしようね！',
        chinese: '我也是，和Aiko在一起就觉得很开心。今天一定要成为最棒的一天！',
    },
    {
        id: 13,
        characterId: 1,
        japanese: 'うん！絶対に！',
        chinese: '嗯！一定的！',
    },
]

export const scene_5: Scene = {
    id: 5,
    title: 'Date Planning',
    characters,
    conversation,
}
