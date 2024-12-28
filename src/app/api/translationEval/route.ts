import openai from '@/utils/openai'
import { z } from 'zod'
import { zodResponseFormat } from 'openai/helpers/zod'

import {
    RequestBodySchema,
    TranslationResponseSchema,
} from '@/utils/api/translationEval'
import { contentMaker, systemPromptMaker } from '@/utils/translationEvaluator'

// visit localhost:3000/api/translationEval
export async function POST(request: Request) {
    const modelName = process.env.OPENAI_MODEL_NAME

    if (!modelName) {
        return new Response('Model name is not set', { status: 500 })
    }

    try {
        // todo: handle the case when request body is empty, throw better error message
        let requestBody: unknown
        try {
            requestBody = await request.json()
        } catch (err) {
            console.error(err)
            return new Response('Invalid request body', { status: 400 })
        }

        const { chinese, japanese, referenceJapanese } =
            RequestBodySchema.parse(requestBody)

        const content = contentMaker({
            chinese,
            japanese,
            referenceJapanese,
        })

        const completion = await openai.chat.completions.create({
            model: modelName,
            response_format: zodResponseFormat(
                TranslationResponseSchema,
                'translation_evaluation'
            ),
            messages: [
                {
                    role: 'system',
                    content: systemPromptMaker(),
                },
                {
                    role: 'user',
                    content,
                },
            ],
        })

        const response = completion.choices[0]?.message

        if (!response) {
            return new Response('Invalid response from AI', { status: 500 })
        }

        if (response.refusal) {
            // handle refusal
            return new Response('AI refuse to answer', {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            })
        } else {
            return new Response(response.content, {
                headers: { 'Content-Type': 'application/json' },
            })
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            const responseBody = {
                message: 'invalid request body',
                error: error.errors,
            }
            return new Response(JSON.stringify(responseBody, null, 2), {
                status: 400,
            })
        }

        console.error(error)

        const responseBody = {
            message: 'unexpected error',
            error,
        }
        return new Response(JSON.stringify(responseBody), { status: 500 })
    }
}
