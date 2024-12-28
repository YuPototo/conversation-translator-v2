// --- action: startScene ---
export const START_SCENE = 'startScene'

type StartSceneAction = {
    type: typeof START_SCENE
}

export function startScene(): StartSceneAction {
    return {
        type: START_SCENE,
    }
}

// --- action: change role ---
export const CHANGE_ROLE = 'changeRole'

type ChangeRoleAction = {
    type: typeof CHANGE_ROLE
}

export function changeRole(): ChangeRoleAction {
    return { type: CHANGE_ROLE }
}

// --- loadNpcMessage ---
export const LOAD_NPC_MESSAGE = 'loadNpcMessage'

type LoadNpcMessage = {
    type: typeof LOAD_NPC_MESSAGE
}

export function loadNpcMessage(): LoadNpcMessage {
    return {
        type: LOAD_NPC_MESSAGE,
    }
}

// --- sendUserMessage ---
export const SENDING_USER_MESSAGE = 'sendingUserMessage'

type SendingUserMessage = {
    type: typeof SENDING_USER_MESSAGE
}

export function sendingUserMessage(): SendingUserMessage {
    return {
        type: SENDING_USER_MESSAGE,
    }
}

// --- receive user evaluation ---
export const RECEIVE_USER_EVALUATION = 'receiveUserEvaluation'

type ReceiveUserEvaluation = {
    type: typeof RECEIVE_USER_EVALUATION
    payload: {
        isRight: boolean
        userInput: string
        rightAnswer: string
        explanation?: string
    }
}

export function receiveUserEvaluation(payload: {
    isRight: boolean
    userInput: string
    rightAnswer: string
    explanation?: string
}): ReceiveUserEvaluation {
    return {
        type: RECEIVE_USER_EVALUATION,
        payload,
    }
}

// --- action: click understood btn---
export const CLICK_UNDERSTOOD_BTN = 'clickUnderstoodBtn'

type ClickUnderstoodBtnAction = {
    type: typeof CLICK_UNDERSTOOD_BTN
}

export function clickUnderstoodBtn(): ClickUnderstoodBtnAction {
    return {
        type: CLICK_UNDERSTOOD_BTN,
    }
}

// -- union type for all actions ---
export type SceneAction =
    | StartSceneAction
    | ChangeRoleAction
    | LoadNpcMessage
    | SendingUserMessage
    | ReceiveUserEvaluation
    | ClickUnderstoodBtnAction
