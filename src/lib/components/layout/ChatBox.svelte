<script lang="ts">
    import { chatMessages } from '$lib/stores/chatMessages';
    import { get } from 'svelte/store';

    let ChatTextInput: HTMLDivElement;
    let hasMessages = false;
  
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        event.preventDefault(); 
        const message = ChatTextInput.innerText.trim();
  
        if (message !== '') {
            chatMessages.update(messages => [...messages, message])  // 加入訊息
            ChatTextInput.innerHTML = '';              // 清空輸入框
            hasMessages = true;
        }
      }
    console.log('目前訊息內容：', get(chatMessages));
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
            on:keydown={handleKeydown}
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
