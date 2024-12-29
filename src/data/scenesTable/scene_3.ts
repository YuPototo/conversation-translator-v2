import { Scene } from '../types'

const characters = [
    { id: 1, name: '友美' },
    { id: 2, name: '翔太' },
]

const conversation = [
    {
        id: 1,
        characterId: 1,
        japanese: '来週末、何か予定ある？',
        chinese: '下周末，有什么计划吗？',
    },
    {
        id: 2,
        characterId: 2,
        japanese: '特にないよ。友美は？',
        chinese: '没有特别的计划。友美呢？',
    },
    {
        id: 3,
        characterId: 1,
        japanese: '私も特にないけど、何か楽しいことしたいなって思ってる。',
        chinese: '我也没有特别的计划，不过想做些有趣的事情。',
    },
    {
        id: 4,
        characterId: 2,
        japanese: 'そうだね。この頃、天気もいいし、外で何かするのはどう？',
        chinese: '是啊，最近天气不错，要不要做些户外的事情？',
    },
    {
        id: 5,
        characterId: 1,
        japanese: 'いいね！例えば、どこに行く？',
        chinese: '好啊！比如去哪儿？',
    },
    {
        id: 6,
        characterId: 2,
        japanese:
            'うーん…ピクニックとかどう？近くの公園でのんびりしたら気持ちよさそうじゃない？',
        chinese: '嗯…要不要去野餐？在附近的公园放松一下，感觉应该会很舒服吧？',
    },
    {
        id: 7,
        characterId: 1,
        japanese:
            'それ、いいかも！でも、公園だけだとちょっと物足りないかもしれない。',
        chinese: '那挺好的！不过光是公园可能有点不过瘾。',
    },
    {
        id: 8,
        characterId: 2,
        japanese: 'そうか…じゃあ、公園の後にカフェでお茶するとか？',
        chinese: '是吗…那之后去咖啡馆喝茶怎么样？',
    },
    {
        id: 9,
        characterId: 1,
        japanese:
            'うん、それいいね！最近、オープンしたカフェがあるらしいよ。そこでケーキとか食べたいな。',
        chinese: '嗯，那不错！听说最近有一家新开的咖啡馆。我想在那里吃点蛋糕。',
    },
    {
        id: 10,
        characterId: 2,
        japanese:
            'おお、いいね！じゃあ、土曜日の午前中に公園でピクニックして、午後にそのカフェ行こうか。',
        chinese: '哦，不错！那我们周六上午去公园野餐，下午去那个咖啡馆吧。',
    },
    {
        id: 11,
        characterId: 1,
        japanese: '決まりだね！何か持っていくものとか考えないとね。',
        chinese: '就这么定了！得想想带些什么东西。',
    },
    {
        id: 12,
        characterId: 2,
        japanese:
            'うん、お弁当はどう？作るの大変なら、スーパーで何か買ってもいいし。',
        chinese: '嗯，便当怎么样？如果做起来麻烦的话，也可以在超市买点东西。',
    },
    {
        id: 13,
        characterId: 1,
        japanese:
            'お弁当作るのも楽しそう！じゃあ、私が作ってくるね。翔太は飲み物担当ね。',
        chinese: '做便当也挺有意思的！那我来做吧。翔太负责饮料哦。',
    },
    {
        id: 14,
        characterId: 2,
        japanese: 'わかった！お茶とかジュースとかいくつか持っていくよ。',
        chinese: '明白了！我带些茶或者果汁什么的。',
    },
    {
        id: 15,
        characterId: 1,
        japanese: '完璧だね！楽しみ〜！',
        chinese: '完美！好期待啊～！',
    },
    {
        id: 16,
        characterId: 2,
        japanese: 'うん、週末が待ち遠しいな！',
        chinese: '嗯，真是等不及周末了！',
    },
]

export const scene_3: Scene = {
    id: 3,
    title: '週末の計画',
    characters,
    conversation,
}
