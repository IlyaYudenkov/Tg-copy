export interface IChat {
  id: number,
  userFrom: number,
  userTo: number,
  text: string,
  createdAt: string,
  senderName: string
}


export interface IChats {
  chat: IChat[],
  isLoading: boolean,
  error: null | string
}

export interface ChatsState {
  chats: IChat[],
  isLoading: boolean,
  error: null | string
}


export interface ChosenChatState {
  chosenChat: null | number,
}

export interface ChosenMessageState {
  chosenMessageId: null | number,
  chosenMessageUserFrom: null | number,
}

export interface searchState {
  searchInput: string,
}

export interface IUser {
  id: number,
  name: string,
  email: string,
  password: string
}

export interface IFullChat {
  id: number,
  userFrom: number,
  userTo?: number,
  text: string,
  createdAt: string,
  senderName: string,
  senderId: number
}

