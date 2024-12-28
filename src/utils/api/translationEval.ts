import { z } from 'zod'

export const RequestBodySchema = z.object({
    chinese: z.string(),
    japanese: z.string(),
    referenceJapanese: z.string(),
})

export const TranslationResponseSchema = z.object({
    isRight: z.boolean(),
    explanation: z.string().optional(),
})

export type TranslationEvalRequestBody = z.infer<typeof RequestBodySchema>

export type TranslationEvalResponseBody = z.infer<
    typeof TranslationResponseSchema
>

export function parseResponseResult(
    result: unknown
): TranslationEvalResponseBody {
    return TranslationResponseSchema.parse(result)
}
