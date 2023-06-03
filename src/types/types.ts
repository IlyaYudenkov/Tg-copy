export interface IChat {
  id: string,
  userFrom: string ,
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
  chosenChat: null | string,
}

export interface searchState {
  searchInput: string,
}

export interface IUser {
  id: string,
  name: string ,
  email: string,
  password: string
}

export interface IFullChat{
  id: string,
  userFrom: string ,
  text: string,
  createdAt: string,
  senderName: string,
  senderId: string
}

