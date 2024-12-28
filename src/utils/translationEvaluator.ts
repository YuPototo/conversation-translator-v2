type TranslationPrompt = {
    chinese: string
    japanese: string
    referenceJapanese: string
}

const PROMPT_EXAMPLE = {
    right: {
        chinese: '今天很忙。',
        japanese: '今日はとても忙しかったです。',
    },
    wrong: {
        chinese: '今天很忙。',
        japanese: '明日はとてもリラックスできるでしょう。',
    },
}

export function systemPromptMaker() {
    return `You're a language expert who teach Japanese to Chinese students.You evaluate user provided translation from Chinese to Japanese. You're given the right translation as a reference. Please compare the right translation and user-provided translation. They don't need to be the same. 
                    
    \n
                 
    There are 2 status of translation result: right, wrong

    \n 

    If the translation is wrong, provide explanation on why it is wrong in Japanese. The explanation should be mostly in Chinese because you target Chinese users. If the translation is right, no explanation is needed.
    
    \n

    The input is in a json format: 

    - chinese: the sentence to be translated
    - japanese: the translation to be evaluated
    - referenceJapanese: the correct translation of the source sentence

    Example:

    {
        "chinese": ${PROMPT_EXAMPLE.right.chinese},
        "japanese":  ${PROMPT_EXAMPLE.right.japanese},
        "referenceJapanese": "今日はとても忙しかったです。",
    }

    \n
        When giving explanation, please be concise and clear. The output language should be in chinese.
    `
}

export function contentMaker(params: TranslationPrompt) {
    return JSON.stringify(params, null, 4)
}
