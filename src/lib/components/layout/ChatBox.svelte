<script lang="ts">
    import { chatMessages } from '$lib/stores/chatMessages';
    import type { ChatMessage } from '$lib/stores/chatMessages';

    let ChatTextInput: HTMLDivElement;
    let hasMessages = false;
  
    function handleEnterToSend(event: KeyboardEvent) {
        const content = ChatTextInput.innerText.trim();
        
        if (event.key === 'Enter' && content !== '') {
            event.preventDefault(); 

            const newmessage: ChatMessage = {
                role: 'user',
                content,
            };

            chatMessages.update(messages => [...messages, newmessage])  // 加入訊息
            ChatTextInput.innerHTML = '';              // 清空輸入框
            hasMessages = true;
        }
    }

    
</script>


<div 
    class={`w-full h-32 flex justify-center items-center transition-all duration-300 
        absolute left-1/2 -translate-x-1/2 ${hasMessages ? 'bottom-8' : 'top-1/2 -translate-y-1/2'}`
        }
>
	<div class="w-full max-w-3xl h-full bg-white shadow-lg rounded-2xl flex flex-col border border-gray-200 px-3 py-3">
        <div 
            bind:this={ChatTextInput}
            contenteditable="true"
            on:keydown={handleEnterToSend}
            role="textbox"
            tabindex="0"
            class="w-full h-full pr-3
                overflow-y-auto overflow-x-hidden break-all flex items-center focus:outline-none"
        >
            在這裡輸入文字...
        </div>
        <div class="w-full h-full ">
        

        </div>
	</div>
</div>
