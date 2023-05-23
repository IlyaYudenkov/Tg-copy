export interface IChat{
    id: string,
    userFrom: string,
    text: string,
    createdAt: string
  }

  export interface ChatState {
    chats: IChat[],
    loading: boolean,
    error: null | string
}


export interface ChosenChatState{
  chosenChat: null | string,
}

