import { Scene } from '../types'

const characters = [
    { id: 1, name: '田中' },
    { id: 2, name: '山田' },
]

const conversation = [
    {
        id: 1,
        characterId: 2,
        japanese: '最近ちゃんと寝れてる？',
        chinese: '最近睡得好吗？',
    },
    {
        id: 2,
        characterId: 1,
        japanese:
            '正直、あんまり寝れてないんだよね。夜中に目が覚めちゃったり、寝つきも悪いし。',
        chinese: '说实话，睡得不是很好。半夜会醒来，入睡也很困难。',
    },
    {
        id: 3,
        characterId: 2,
        japanese:
            'それ、つらいね。僕も前に同じようなことがあったけど、少しずつ改善できたよ。',
        chinese: '那真是辛苦了。我以前也有类似的问题，但慢慢改善了。',
    },
    {
        id: 4,
        characterId: 1,
        japanese: 'ほんと？どうやって改善したの？教えてほしいな。',
        chinese: '真的吗？你是怎么改善的？能教教我吗？',
    },
    {
        id: 5,
        characterId: 2,
        japanese:
            'まず、寝る1時間前にはスマホとかパソコンを使わないようにしたんだ。ブルーライトが睡眠に悪影響を与えるって聞いたから。',
        chinese: '首先，我睡前一小时不碰手机或电脑。据说蓝光对睡眠有负面影响。',
    },
    {
        id: 6,
        characterId: 1,
        japanese:
            'なるほどね。僕も寝る前によく動画を見ちゃうんだよね。それが原因かも。',
        chinese: '原来如此。我睡前经常看视频，可能就是这个原因。',
    },
    {
        id: 7,
        characterId: 2,
        japanese:
            'あと、寝る前にリラックスできるルーティンを作るのも大事だよ。僕の場合は、ハーブティーを飲んだり、軽いストレッチをしたりしてる。',
        chinese:
            '还有，建立一个让自己放松的睡前习惯也很重要。我会喝点草本茶或做些轻微的拉伸。',
    },
    {
        id: 8,
        characterId: 1,
        japanese:
            'ハーブティーか。リラックスできそうだね。でも、ストレッチって具体的に何をしてるの？',
        chinese: '草本茶啊，听起来挺放松的。那拉伸具体做什么呢？',
    },
    {
        id: 9,
        characterId: 2,
        japanese:
            '足の筋を伸ばしたり、肩や首を回したりする程度だよ。体がほぐれると、気持ちも落ち着くからおすすめ。',
        chinese:
            '就是伸展腿部肌肉、转动肩膀和脖子之类的。放松身体后，心情也会平静下来，推荐试试。',
    },
    {
        id: 10,
        characterId: 1,
        japanese: '確かに。それなら僕でもできそうだね。試してみようかな。',
        chinese: '确实。这些我也可以做，试试看吧。',
    },
    {
        id: 11,
        characterId: 2,
        japanese:
            'あとは、毎日同じ時間に寝るのも効果的だよ。体内時計が整うから、自然と眠くなるようになるらしい。',
        chinese:
            '另外，每天固定时间睡觉也很有效。据说这样能调整生物钟，自然地感到困。',
    },
    {
        id: 12,
        characterId: 1,
        japanese:
            '同じ時間か…。つい夜更かししちゃうことがあるけど、努力してみるよ。',
        chinese: '固定时间吗…虽然有时会熬夜，但我会努力试试的。',
    },
    {
        id: 13,
        characterId: 2,
        japanese:
            '最初は難しいかもしれないけど、少しずつで大丈夫だよ。山田さんも良い睡眠がとれるようになるといいね。',
        chinese: '刚开始可能会有点难，但慢慢来没问题。希望你也能睡个好觉。',
    },
    {
        id: 14,
        characterId: 1,
        japanese: 'ありがとう！教えてもらったこと、さっそく試してみるよ。',
        chinese: '谢谢！我会马上尝试你说的方法。',
    },
    {
        id: 15,
        characterId: 2,
        japanese: '無理せず、続けることが大事だからね。お互い頑張ろう！',
        chinese: '不要太勉强自己，坚持下去很重要。我们一起加油吧！',
    },
    {
        id: 16,
        characterId: 1,
        japanese: 'うん、頑張るよ！',
        chinese: '嗯，我会努力的！',
    },
]

export const scene_4: Scene = {
    id: 4,
    title: '睡眠を改善する方法',
    characters,
    conversation,
}
