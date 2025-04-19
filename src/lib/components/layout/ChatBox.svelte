<!-- src/lib/components/layout/ChatBoxLayout.svelte -->
<script lang="ts">
	export let title: string = "Chat";
</script>

<div class="w-full h-full flex justify-center items-center px-4 py-6">
	<div class="w-full max-w-3xl h-full bg-white dark:bg-gray-800 shadow-lg rounded-2xl flex flex-col overflow-hidden">
		<!-- 標題列 -->
		<div class="p-4 border-b border-gray-300 dark:border-gray-700 text-lg font-semibold bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
			{title}
		</div>

		<!-- 主內容 -->
		<div class="flex-1 overflow-y-auto p-4 space-y-3 text-sm text-gray-800 dark:text-gray-100">
			<slot />
		</div>

		<!-- 底部預留空間（未來可放輸入框） -->
		<div class="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
			<!-- 你之後可以把這裡換成聊天輸入框 -->
			<p class="text-gray-500 dark:text-gray-400 text-sm">請輸入訊息...</p>
		</div>
	</div>
</div>