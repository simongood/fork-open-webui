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
  class="w-full h-full max-h-[80vh] absolute top-0 left-1/2 -translate-x-1/2 flex flex-col bg-white overflow-y-auto px-52"
>
    <div class="min-h-8"></div>    <!-- 上方留白 -->
    {#each $chatMessages as message}
    <div class="mb-2 text-gray-800">
        <div class="bg-gray-100 text-gray-800 px-4 py-2 rounded-xl max-w-[75%] w-fit">
            {message.content}
        </div>
    </div>
    {/each}
    <div class="min-h-32"></div>   <!-- 下方留白 -->
</div>