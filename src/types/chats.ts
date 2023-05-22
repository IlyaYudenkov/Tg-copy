
export interface IChat{
    id: number,
    userFrom: string,
    text: string,
    createdAt: string
  }

  export interface ChatState {
    chats: IChat[],
    loading: boolean,
    error: null | string
}

