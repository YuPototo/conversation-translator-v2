import { Button } from '@/components/ui/button'
import { useSceneContext, useSceneDispatch } from '../context/SceneProvider'
import { useState } from 'react'
import {
    clickUnderstoodBtn,
    receiveUserEvaluation,
    sendingUserMessage,
} from '../context/sceneActions'
import { parseResponseResult } from '@/utils/api/translationEval'

export function TranslationConsole() {
    const [userTranslation, setUserTranslation] = useState('')

    const dispatch = useSceneDispatch()
    const state = useSceneContext()

    const {
        sceneStatus,
        sentenceStatus,
        sceneData,
        currentSentenceIndex,
        translationExplanation,
    } = state

    // TODO: better handling of different status
    if (sceneStatus === 'ended') {
        return <div>对话结束, XXXX</div>
    }

    if (sentenceStatus === 'userInputting') {
        const sentence = sceneData.conversation[currentSentenceIndex]

        const send = async () => {
            dispatch(sendingUserMessage())

            const body = {
                japanese: userTranslation,
                chinese: sentence.chinese,
                referenceJapanese: sentence.japanese,
            }

            const response = await fetch('/api/translationEval', {
                method: 'POST',
                body: JSON.stringify(body),
            })

            if (!response.ok) {
                console.error('Failed to send user translation')
                return
            }

            setUserTranslation('')

            const parsedResult = parseResponseResult(await response.json())

            dispatch(
                receiveUserEvaluation({
                    isRight: parsedResult.isRight,
                    userInput: userTranslation,
                    rightAnswer: sentence.japanese,
                    explanation: parsedResult.explanation,
                })
            )
        }

        return (
            <div className="mt-4">
                <p>原文：{sentence.chinese}</p>
                <p>译文：</p>
                <textarea
                    value={userTranslation}
                    onChange={(e) => setUserTranslation(e.target.value)}
                    className="w-full h-24 border border-gray-300 rounded-lg p-2"
                />
                <Button onClick={send}>发送</Button>
            </div>
        )
    }

    if (sentenceStatus === 'systemEvaluating') {
        return <div>系统正在评估...</div>
    }

    if (sentenceStatus === 'userReadingFeedback') {
        return (
            <div>
                <h3>系统反馈</h3>
                {translationExplanation && <div>{translationExplanation}</div>}
                <Button
                    onClick={() => {
                        dispatch(clickUnderstoodBtn())
                    }}
                >
                    学会了
                </Button>
            </div>
        )
    }
}
