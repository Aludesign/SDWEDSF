
import { ChatSession, User } from './types';

const SESSION_KEY = 'peugeot_precision_sessions_v1';
const USER_KEY = 'peugeot_precision_auth_v1';

export const backend = {
  getSessions: (): ChatSession[] => {
    const data = localStorage.getItem(SESSION_KEY);
    return data ? JSON.parse(data) : [];
  },
  saveSessions: (sessions: ChatSession[]) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessions));
  },
  getUser: (): User | null => {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  },
  saveUser: (user: User) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },
  clearAuth: () => {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(SESSION_KEY);
  }
};
