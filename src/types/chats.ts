export interface ChatState {
    chats: any[],
    loading: boolean,
    error: null | string
}

export enum ChatActionTypes {
    FETCH_CHATS = 'FETCH_CHATS',
    FETCH_CHATS_SUCCESS = 'FETCH_CHATS_SUCCESS',
    FETCH_CHATS_ERROR = 'FETCH_CHATS_ERROR'
}

interface FetchChatsAction {
    type: ChatActionTypes.FETCH_CHATS
}

interface FetchChatsActionsSuccessAction {
    type: ChatActionTypes.FETCH_CHATS_SUCCESS,
    payload: any[]
}

 interface FetchChatsActionErrorAction {
    type: ChatActionTypes.FETCH_CHATS_ERROR,
    payload: string
}

export type ChatAction = FetchChatsAction | FetchChatsActionsSuccessAction | FetchChatsActionErrorAction