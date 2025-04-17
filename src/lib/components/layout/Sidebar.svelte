<script lang="ts">
	import { goto } from '$app/navigation';

	// 假設這邊先寫死一些聊天紀錄
	let showSidebar = true;

	let chats = [
		{ id: '1', title: 'Chat A' },
		{ id: '2', title: 'Chat B' },
		{ id: '3', title: 'Chat C' }
	];

	let selectedChatId: string | null = null;

	const handleNewChat = async () => {
		selectedChatId = null;
		await goto('/');
		const newChatButton = document.getElementById('new-chat-button');
		newChatButton?.click();
		showSidebar = false;
	};

	const handleSelectChat = async (id: string) => {
		selectedChatId = id;
		await goto(`/chat/${id}`);
		showSidebar = false;
	};
</script>

<!-- Sidebar Toggle Button -->
<button
	class="fixed top-4 left-4 z-50 bg-gray-800 text-white px-3 py-2 rounded"
	on:click={() => (showSidebar = !showSidebar)}
>
	☰
</button>

{#if showSidebar}
	<div class="fixed top-0 left-0 w-[260px] h-screen bg-white dark:bg-gray-900 shadow-lg z-40 p-4 flex flex-col text-sm">
		<!-- Header -->
		<div class="flex justify-between items-center mb-4">
			<h2 class="font-bold text-lg">Chats</h2>
			<button on:click={() => (showSidebar = false)} title="Close">
				&times;
			</button>
		</div>

		<!-- New Chat -->
		<button
			id="new-chat-button"
			class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
			on:click={handleNewChat}
		>
			New Chat
		</button>

		<!-- Chat List -->
		<div class="flex-1 overflow-y-auto space-y-1">
			{#if chats.length}
				{#each chats as chat}
					<div
						class="p-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 {chat.id === selectedChatId ? 'bg-gray-200 dark:bg-gray-700' : ''}"
						on:click={() => handleSelectChat(chat.id)}
					>
						{chat.title}
					</div>
				{/each}
			{:else}
				<p class="text-gray-500">No chats yet.</p>
			{/if}
		</div>
	</div>
{/if}
