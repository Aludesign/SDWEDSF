
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatSession {
  id: string;
  title: string;
  date: string;
  messages: Message[];
}

export interface User {
  username: string;
  isAuthenticated: boolean;
}
