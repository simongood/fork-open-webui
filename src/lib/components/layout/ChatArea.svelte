<script lang="ts">
    import { chatMessages } from '$lib/stores/chatMessages';
    import { afterUpdate } from 'svelte';

    let container: HTMLDivElement;

    afterUpdate(() => {
        container.scrollTop = container.scrollHeight;
    });
</script>



<!-- 聊天室訊息框搭建 -->
<div
  bind:this={container}
  class="w-full h-full max-h-[80vh] absolute top-0 left-1/2 -translate-x-1/2 flex flex-col bg-white overflow-y-auto px-[10vw] 
  break-all text-gray-900"
>
    <div class="min-h-8"></div>    <!-- 上方留白 -->
    {#each $chatMessages as message}
        {#if message.role === 'user'}
            <div class="mb-6 flex justify-end">
                <div class="bg-gray-100 rounded-[2.3rem] max-w-[65%] w-fit px-6 py-3">
                    {message.content}
                </div>
            </div>
        {:else if message.role === 'system'}
            <div class="mb-6 flex justify-start px-4 py-3">
                <div class="w-fit">
                    {message.content}
                </div>
            </div>
        {/if}
    {/each}
    <div class="min-h-32"></div>   <!-- 下方留白 -->
</div>