<script lang="ts">
    import { sendMessageToYcmWebChatbot } from '$lib/api/sendMessageToYcmWebChatbot';   // 發送訊息至 ycm 網頁機器人

    import { chatMessages } from '$lib/stores/chatMessages';    // 聊天室歷史訊息紀錄
    import type { ChatMessage } from '$lib/stores/chatMessages';

    let ChatTextInput: HTMLDivElement;
    let hasMessages = false;        // 有訊息時窗口會向下移
    let isWaitingForReply = false;  // 等待 system 訊息狀態用戶不可持續傳送訊息
  
    async function handleEnterToSend(event: KeyboardEvent) {
        const userInput = ChatTextInput.innerText.trim();
        
        if (event.key === 'Enter' && userInput !== '' && isWaitingForReply == false) {
            event.preventDefault(); 
            isWaitingForReply = true;  // 設為等待中

            // 用戶訊息
            const newmessage: ChatMessage = {
                role: 'user',
                content: userInput,
            };

            chatMessages.update(messages => [...messages, newmessage])  // 加入訊息
            ChatTextInput.innerHTML = '';              // 清空輸入框
            hasMessages = true;

            // 系統訊息
            const reply = await sendMessageToYcmWebChatbot(userInput, "ycm_mold_relevant_chatbot");
            const systemMessage: ChatMessage = {
                role: 'system',
                content: reply,
            };
            chatMessages.update(messages => [...messages, systemMessage]);
            isWaitingForReply = false;  // 回復可再次輸入
        }
    }
</script>



<!-- 聊天室窗構建 -->
<div 
    class={`w-full h-32 flex justify-center items-center transition-all duration-300 
        absolute left-1/2 -translate-x-1/2 ${hasMessages ? 'bottom-8' : 'top-1/2 -translate-y-1/2'}`
        }
>
	<div class="w-[55vw]  h-full bg-white shadow-lg rounded-[2.5rem] flex flex-col border border-gray-200 px-6 py-3">
        <div 
            bind:this={ChatTextInput}
            contenteditable="true"
            on:keydown={handleEnterToSend}
            role="textbox"
            tabindex="0"
            class="w-full h-full pr-3 py-4 text-lg
                overflow-y-auto overflow-x-hidden break-all flex items-center focus:outline-none
                peer empty:before:content-[attr(data-placeholder)] before:text-gray-400 before:absolute before:pointer-events-none"
            data-placeholder="在這裡輸入文字..."
        >
        </div>
        <div class="w-full h-full ">
        

        </div>
	</div>
</div>



<!-- 我可以為你做什麼? -->
<div class={`
  flex justify-center items-center pointer-events-none
  absolute left-1/2 -translate-x-1/2 ${hasMessages ? 'opacity-0' : 'top-[33vh] opacity-100'}`
}>
    <h2 class="text-4xl font-extrabold">我可以為你做什麼...?</h2>
</div>