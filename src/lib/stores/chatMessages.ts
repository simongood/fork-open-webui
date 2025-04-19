import { writable } from 'svelte/store';

// 建立全局可讀寫的聊天訊息 store
export type ChatMessage  = {
    role: 'user' | 'system';
    content: string;
  };
  
export const chatMessages = writable<ChatMessage []>([]);