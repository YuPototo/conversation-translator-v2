import { Scene } from '@/data/types'

const characters = [
    { id: 1, name: 'Tanaka' },
    { id: 2, name: 'Suzuki' },
]

const conversation = [
    {
        id: 1,
        characterId: 1,
        japanese: 'おはようございます、鈴木さん。',
        chinese: '早上好，铃木先生。',
    },
    {
        id: 2,
        characterId: 2,
        japanese: 'おはようございます、田中さん。今日は寒いですね。',
        chinese: '早上好，田中先生。今天很冷呢。',
    },
    {
        id: 3,
        characterId: 1,
        japanese: '本当ですね。今年の冬は特に寒い気がします。',
        chinese: '确实如此。今年冬天特别冷。',
    },
    {
        id: 4,
        characterId: 2,
        japanese: 'そうですね。でも、週末は少し暖かくなるそうですよ。',
        chinese: '是啊。不过，听说周末会稍微暖和一些。',
    },
    {
        id: 5,
        characterId: 1,
        japanese: 'それは良かったです。鈴木さんは週末、何か予定がありますか？',
        chinese: '那太好了。铃木先生周末有什么计划吗？',
    },
    {
        id: 6,
        characterId: 2,
        japanese: '特にないですが、家族と過ごすつもりです。田中さんは？',
        chinese: '没有特别的计划，打算和家人一起度过。田中先生呢？',
    },
    {
        id: 7,
        characterId: 1,
        japanese: '私も同じです。家でゆっくりしたいです。',
        chinese: '我也一样，想在家好好放松一下。',
    },
    {
        id: 8,
        characterId: 2,
        japanese: 'それもいいですね。では、また後で。',
        chinese: '那也不错。那么，待会儿见。',
    },
    {
        id: 9,
        characterId: 1,
        japanese: 'はい、また後で。',
        chinese: '好的，待会儿见。',
    },
    {
        id: 10,
        characterId: 2,
        japanese: '田中さん、最近何か面白いことがありましたか？',
        chinese: '田中先生，最近有什么有趣的事情吗？',
    },
    {
        id: 11,
        characterId: 1,
        japanese: '最近は特にないですが、新しい本を読み始めました。',
        chinese: '最近没什么特别的事，但我开始读一本新书了。',
    },
    {
        id: 12,
        characterId: 2,
        japanese: 'そうなんですか。どんな本ですか？',
        chinese: '是吗？是什么书呢？',
    },
    {
        id: 13,
        characterId: 1,
        japanese: '歴史についての本です。とても興味深いですよ。',
        chinese: '是一本关于历史的书，非常有趣。',
    },
    {
        id: 14,
        characterId: 2,
        japanese: '面白そうですね。どの時代の歴史ですか？',
        chinese: '听起来很有趣。是哪个时代的历史？',
    },
    {
        id: 15,
        characterId: 1,
        japanese: '江戸時代の歴史です。',
        chinese: '是江户时代的历史。',
    },
    {
        id: 16,
        characterId: 2,
        japanese: 'いいですね。私も歴史には興味があります。',
        chinese: '不错，我也对历史感兴趣。',
    },
    {
        id: 17,
        characterId: 1,
        japanese: '鈴木さんも歴史好きなんですね。',
        chinese: '铃木先生也喜欢历史啊。',
    },
    {
        id: 18,
        characterId: 2,
        japanese: 'はい、特に日本の歴史が好きです。',
        chinese: '是的，特别喜欢日本的历史。',
    },
    {
        id: 19,
        characterId: 1,
        japanese: 'それならこの本、ぜひおすすめします。',
        chinese: '那这本书我强烈推荐给您。',
    },
    {
        id: 20,
        characterId: 2,
        japanese: 'ありがとうございます。タイトルを教えていただけますか？',
        chinese: '谢谢，能告诉我书名吗？',
    },
    {
        id: 21,
        characterId: 1,
        japanese: 'もちろんです。「江戸の暮らし」という本です。',
        chinese: '当然，是《江户的生活》。',
    },
    {
        id: 22,
        characterId: 2,
        japanese: '面白そうですね。次の休みに読んでみます。',
        chinese: '听起来很有趣，下次休息时我会看看。',
    },
    {
        id: 23,
        characterId: 1,
        japanese: 'ぜひ感想を聞かせてください。',
        chinese: '一定要告诉我您的感想。',
    },
    {
        id: 24,
        characterId: 2,
        japanese: 'わかりました。楽しみにしています。',
        chinese: '好的，我很期待。',
    },
    {
        id: 25,
        characterId: 1,
        japanese: 'では、そろそろ仕事に戻ります。',
        chinese: '那么，我差不多该回去工作了。',
    },
    {
        id: 26,
        characterId: 2,
        japanese: '私もです。また後で話しましょう。',
        chinese: '我也是，我们待会儿再聊。',
    },
    {
        id: 27,
        characterId: 1,
        japanese: 'はい、ではまた。',
        chinese: '好的，那再见。',
    },
    {
        id: 28,
        characterId: 2,
        japanese: 'お疲れ様でした。',
        chinese: '辛苦了。',
    },
    {
        id: 29,
        characterId: 1,
        japanese: '鈴木さんもお疲れ様でした。',
        chinese: '铃木先生也辛苦了。',
    },
    {
        id: 30,
        characterId: 2,
        japanese: 'では、良い一日を。',
        chinese: '那么，祝您有愉快的一天。',
    },
]

export const scene_6: Scene = {
    id: 6,
    title: 'Elevator Small Talk',
    characters,
    conversation,
}
