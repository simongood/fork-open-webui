import { writable } from 'svelte/store';

// 建立全局可讀寫的聊天訊息 store
export const chatMessages = writable<string[]>([]);