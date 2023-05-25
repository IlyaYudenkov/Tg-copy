export interface IChat {
  id: string,
  userFrom: string ,
  text: string,
  createdAt: string
}


export interface IChats {
  chat: IChat[],
  isLoading: boolean,
  error: null | string
}

export interface ChatState {
  chats: IChat[],
  isLoading: boolean,
  error: null | string
}

export interface ChosenChatState {
  chosenChat: null | string,
}

export interface searchState {
  searchInput: string,
}

export interface IUser {
  id: string,
  name: string 
}


